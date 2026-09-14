import React, { useState } from 'react';
import './RankingTable.css';

export default function RankingTable({ 
  data = [], 
  loading = false, 
  onSelectProject,
  onPrint,
  onRefresh
}) {
  const [filterBranch, setFilterBranch] = useState('ALL'); // 'ALL', 'Nhánh A', 'Nhánh B'
  const [searchQuery, setSearchQuery] = useState('');

  if (loading) {
    return <div className="loading-state text-center text-muted">Đang tải danh mục đề án...</div>;
  }

  if (data.length === 0) {
    return <div className="empty-state text-center text-muted">Chưa có đề án nào trong danh mục tiếp nhận.</div>;
  }

  const filteredData = data.filter(row => {
    const matchBranch = filterBranch === 'ALL' || row.nhanh === filterBranch;
    const matchSearch = !searchQuery || 
      (row.tenDeTai && row.tenDeTai.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.tenSanPham && row.tenSanPham.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.maDeTai && row.maDeTai.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.khoaPhong && row.khoaPhong.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.nhomTacGia && row.nhomTacGia.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchBranch && matchSearch;
  });

  const countAll = data.length;
  const countA = data.filter(r => r.nhanh === 'Nhánh A').length;
  const countB = data.filter(r => r.nhanh === 'Nhánh B').length;

  return (
    <div className="ranking-wrapper">
      {/* HEADER NGHỊ ĐỊNH 30 (KHI IN DANH MỤC TIẾP NHẬN) */}
      <div className="print-only print-header-tonghop">
        <table className="print-header-table">
          <tbody>
            <tr>
              <td style={{width: '46%', textAlign: 'center', verticalAlign: 'top'}}>
                <div className="print-org-upper">CÔNG TY TNHH PHÁT TRIỂN Y HỌC VIỆT</div>
                <div className="print-org-title">BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG</div>
                <div className="print-divider-left"></div>
                <div className="print-doc-num">Số: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /DS-KHTH-QLCL</div>
              </td>
              <td style={{width: '54%', textAlign: 'center', verticalAlign: 'top'}}>
                <div className="print-nation-title">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
                <div className="print-nation-motto">Độc lập – Tự do – Hạnh phúc</div>
                <div className="print-divider-right"></div>
                <div className="print-date">Chí Đám, ngày 05 tháng 09 năm 2026</div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="print-main-title">
          DANH MỤC TIẾP NHẬN ĐỀ ÁN CẢI TIẾN CHẤT LƯỢNG NĂM 2026
        </div>
        <div className="print-sub-title">
          (Giai đoạn 1: Tiếp nhận hồ sơ đăng ký và phê duyệt triển khai thử nghiệm thực địa)
        </div>
      </div>

      {/* THÔNG BÁO TIẾN ĐỘ TRÊN MÀN HÌNH */}
      <div className="screen-only" style={{
        background: '#eff6ff',
        border: '1px solid #bfdbfe',
        borderLeft: '4px solid #0085db',
        borderRadius: '8px',
        padding: '0.85rem 1.15rem',
        marginBottom: '1.25rem',
        fontSize: '0.86rem',
        color: '#1e3a8a',
        lineHeight: '1.5'
      }}>
        <strong>📢 Thông tin tiến độ Hội thi:</strong> Trang web hiện đang ở <strong>Giai đoạn Tiếp nhận & Giới thiệu Đề án Cải tiến</strong> để các Khoa/Phòng cùng theo dõi và học hỏi lẫn nhau. 
        <strong> Phần chấm điểm và bảng xếp hạng chính thức</strong> từ Hội đồng Ban Giám khảo sẽ được kích hoạt tại Vòng Chung kết sau khi các đơn vị hoàn tất thử nghiệm thực địa.
      </div>

      {/* BỘ LỌC & TÌM KIẾM */}
      <div className="ranking-controls screen-only">
        <div className="branch-filter-tabs">
          <button 
            className={`filter-tab-btn ${filterBranch === 'ALL' ? 'active' : ''}`}
            onClick={() => setFilterBranch('ALL')}
          >
            Tất cả đề tài <span className="tab-counter">{countAll}</span>
          </button>
          <button 
            className={`filter-tab-btn ${filterBranch === 'Nhánh A' ? 'active' : ''}`}
            onClick={() => setFilterBranch('Nhánh A')}
          >
            Nhánh A (Nội bộ khoa) <span className="tab-counter">{countA}</span>
          </button>
          <button 
            className={`filter-tab-btn ${filterBranch === 'Nhánh B' ? 'active' : ''}`}
            onClick={() => setFilterBranch('Nhánh B')}
          >
            Nhánh B (Liên khoa) <span className="tab-counter">{countB}</span>
          </button>
        </div>

        <div className="ranking-actions-right">
          <div className="search-box-wrapper">
            <input
              type="text"
              className="ranking-search-input"
              placeholder="Tìm mã đề tài, tên sản phẩm, khoa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button 
            type="button" 
            className="btn-control-action" 
            onClick={onPrint || (() => window.print())} 
            title="In danh mục tiếp nhận đề án chuẩn Nghị định 30"
          >
            In Danh Mục
          </button>
          <button 
            type="button" 
            className="btn-control-action" 
            onClick={onRefresh} 
            disabled={loading}
            title="Làm mới danh sách từ dữ liệu tiếp nhận"
          >
            {loading ? 'Đang tải...' : 'Làm mới'}
          </button>
        </div>
      </div>

      {/* BẢNG SỔ TIẾP NHẬN ĐỀ ÁN (GỌN GÀNG, MINH BẠCH, DỄ HIỂU) */}
      <div className="table-responsive">
        <table className="ranking-table">
          <thead>
            <tr>
              <th style={{width: '50px', textAlign: 'center'}}>STT</th>
              <th style={{width: '95px', textAlign: 'center'}}>Mã đề tài</th>
              <th style={{minWidth: '260px'}}>Tên sản phẩm & Đề án cải tiến</th>
              <th style={{minWidth: '160px'}}>Khoa / Phòng chủ trì</th>
              <th style={{width: '80px', textAlign: 'center'}}>Nhánh</th>
              <th style={{minWidth: '150px'}}>Chủ nhiệm đề án</th>
              <th style={{width: '100px', textAlign: 'center'}}>Ngày nộp</th>
              <th style={{width: '150px', textAlign: 'center'}}>Trạng thái hồ sơ</th>
              <th className="screen-only" style={{width: '120px', textAlign: 'center'}}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center text-muted" style={{padding: '2rem'}}>
                  Không tìm thấy đề án nào phù hợp.
                </td>
              </tr>
            ) : (
              filteredData.map((row, index) => {
                return (
                  <tr key={row.maDeTai || index}>
                    <td className="text-center font-bold rank-cell">
                      {index + 1}
                    </td>
                    <td className="text-center font-mono font-medium text-muted">
                      {row.maDeTai}
                    </td>
                    <td 
                      className="project-title-cell"
                      style={{ cursor: 'pointer' }}
                      onClick={() => onSelectProject && onSelectProject(row)}
                      title="Bấm để xem giới thiệu chi tiết sản phẩm"
                    >
                      <div className="font-bold text-main" style={{ color: '#003B73', fontSize: '0.92rem' }}>
                        {row.tenSanPham || row.tenDeTai}
                      </div>
                      {row.tenSanPham && (
                        <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                          Đề tài: {row.tenDeTai}
                        </div>
                      )}
                    </td>
                    <td>
                      <div className="font-medium text-main">{row.khoaPhong}</div>
                      {row.khoaPhoiHop && (
                        <div style={{ fontSize: '0.75rem', color: '#0284c7' }}>
                          + {row.khoaPhoiHop}
                        </div>
                      )}
                    </td>
                    <td className="text-center">
                      <span className={`badge ${row.nhanh === 'Nhánh B' ? 'badge-partner' : 'badge-pass'}`}>
                        {row.nhanh}
                      </span>
                    </td>
                    <td className="text-muted">
                      {row.nhomTacGia?.split(',')[0] || '—'}
                    </td>
                    <td className="text-center text-muted font-mono" style={{ fontSize: '0.8rem' }}>
                      {row.ngayDangKy || '05/09/2026'}
                    </td>
                    <td className="text-center">
                      <span className="badge badge-excellent" style={{ background: '#dcfce7', color: '#15803d', border: '1px solid #86efac' }}>
                        Đang thử nghiệm
                      </span>
                    </td>
                    <td className="screen-only text-center">
                      <button 
                        type="button" 
                        className="btn-table-secretary"
                        style={{ background: '#0085db', color: '#ffffff', border: 'none', padding: '0.35rem 0.75rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}
                        onClick={() => onSelectProject && onSelectProject(row)}
                      >
                        Xem Chi Tiết
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* CHỮ KÝ NGHỊ ĐỊNH 30 KHI IN */}
      <div className="print-only print-footer-tonghop">
        <table className="print-signature-table">
          <tbody>
            <tr>
              <td style={{width: '50%', textAlign: 'center', verticalAlign: 'top'}}>
                <div className="print-sign-role">NGƯỜI LẬP DANH MỤC</div>
                <div className="print-sign-note">(Ký và ghi rõ họ tên)</div>
                <div className="print-sign-space"></div>
                <div className="print-sign-name">Đỗ Thị Hồng Nhung</div>
              </td>
              <td style={{width: '50%', textAlign: 'center', verticalAlign: 'top'}}>
                <div className="print-sign-role">TỔ TRƯỞNG TỔ QLCL</div>
                <div className="print-sign-note">(Ký và ghi rõ họ tên)</div>
                <div className="print-sign-space"></div>
                <div className="print-sign-name">Trần Đình Vũ</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
