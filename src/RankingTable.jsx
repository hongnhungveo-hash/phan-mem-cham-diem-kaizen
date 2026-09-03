import React, { useState } from 'react';
import './RankingTable.css';

export default function RankingTable({ 
  data = [], 
  loading = false, 
  comments = {},
  onOpenCommentModal,
  onPrint,
  onRefresh
}) {
  const [filterBranch, setFilterBranch] = useState('ALL'); // 'ALL', 'Nhánh A', 'Nhánh B'
  const [searchQuery, setSearchQuery] = useState('');

  if (loading) {
    return <div className="loading-state text-center text-muted">Đang tải dữ liệu...</div>;
  }

  if (data.length === 0) {
    return <div className="empty-state text-center text-muted">Chưa có dữ liệu đánh giá nào.</div>;
  }

  const filteredData = data.filter(row => {
    const matchBranch = filterBranch === 'ALL' || row.nhanh === filterBranch;
    const matchSearch = !searchQuery || 
      (row.tenDeTai && row.tenDeTai.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.maDeTai && row.maDeTai.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.khoaPhong && row.khoaPhong.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.khoaPhoiHop && row.khoaPhoiHop.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchBranch && matchSearch;
  });

  const countAll = data.length;
  const countA = data.filter(r => r.nhanh === 'Nhánh A').length;
  const countB = data.filter(r => r.nhanh === 'Nhánh B').length;

  const getBadgeClass = (score) => {
    if (score >= 90) return 'badge-excellent';
    if (score >= 80) return 'badge-good';
    if (score >= 70) return 'badge-fair';
    return 'badge-pass';
  };

  const getLabel = (score) => {
    if (score >= 90) return 'Xuất sắc';
    if (score >= 80) return 'Giỏi';
    if (score >= 70) return 'Khá';
    return 'Đạt';
  };

  return (
    <div className="ranking-wrapper">
      {/* KHỐI TIÊU NGỮ HÀNH CHÍNH NGHỊ ĐỊNH 30 THEO SHEET TONGHOP (CHỈ HIỆN KHI IN) */}
      <div className="print-only print-header-tonghop">
        <table className="print-header-table">
          <tbody>
            <tr>
              <td style={{width: '46%', textAlign: 'center', verticalAlign: 'top'}}>
                <div className="print-org-upper">CÔNG TY TNHH PHÁT TRIỂN Y HỌC VIỆT</div>
                <div className="print-org-title">BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG</div>
                <div className="print-divider-left"></div>
                <div className="print-doc-num">Số: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /BC-BTC-KAIZEN</div>
              </td>
              <td style={{width: '54%', textAlign: 'center', verticalAlign: 'top'}}>
                <div className="print-nation-title">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
                <div className="print-nation-motto">Độc lập – Tự do – Hạnh phúc</div>
                <div className="print-divider-right"></div>
                <div className="print-date">Chí Đám, ngày 28 tháng 09 năm 2026</div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="print-main-title">
          BẢNG TỔNG HỢP KẾT QUẢ ĐÁNH GIÁ ĐỀ ÁN CẢI TIẾN CHẤT LƯỢNG NĂM 2026
        </div>
        <div className="print-sub-title">
          (Vòng Chung kết Hội thi Đề án Cải tiến Chất lượng Bệnh viện kỷ niệm 16 năm thành lập)
        </div>
      </div>

      {/* Thanh Bộ Lọc & Tìm Kiếm Trên Màn Hình */}
      <div className="ranking-controls screen-only">
        <div className="branch-filter-tabs">
          <button 
            className={`filter-tab-btn ${filterBranch === 'ALL' ? 'active' : ''}`}
            onClick={() => setFilterBranch('ALL')}
          >
            Tất cả <span className="tab-counter">{countAll}</span>
          </button>
          <button 
            className={`filter-tab-btn ${filterBranch === 'Nhánh A' ? 'active' : ''}`}
            onClick={() => setFilterBranch('Nhánh A')}
          >
            Nhánh A <span className="tab-counter">{countA}</span>
          </button>
          <button 
            className={`filter-tab-btn ${filterBranch === 'Nhánh B' ? 'active' : ''}`}
            onClick={() => setFilterBranch('Nhánh B')}
          >
            Nhánh B <span className="tab-counter">{countB}</span>
          </button>
        </div>

        <div className="ranking-actions-right">
          <div className="search-box-wrapper">
            <input
              type="text"
              className="ranking-search-input"
              placeholder="🔍 Tìm mã, tên đề tài, khoa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button 
            type="button" 
            className="btn-control-action" 
            onClick={onPrint || (() => window.print())} 
            title="In bảng điểm chuẩn Nghị định 30 làm căn cứ xét thưởng"
          >
            🖨️ In Bảng Điểm
          </button>
          <button 
            type="button" 
            className="btn-control-action" 
            onClick={onRefresh} 
            disabled={loading}
            title="Làm mới dữ liệu từ Google Sheets"
          >
            🔄 {loading ? 'Đang tải...' : 'Làm mới'}
          </button>
        </div>
      </div>

      {/* Bảng Dữ Liệu 14 Cột Chuẩn Sheet TongHop */}
      <div className="table-responsive">
        <table className="ranking-table">
          <thead>
            <tr>
              <th style={{width: '45px', textAlign: 'center'}}>Xếp hạng</th>
              <th style={{width: '60px', textAlign: 'center'}}>Mã đề tài</th>
              <th style={{minWidth: '240px'}}>Tên đề án cải tiến</th>
              <th style={{width: '110px'}}>Nhóm tác giả</th>
              <th style={{width: '70px', textAlign: 'center'}}>Nhánh</th>
              <th style={{minWidth: '150px'}}>Khoa/Phòng thực hiện</th>
              <th className="score-header text-center">Tính cấp thiết<br/>(15)</th>
              <th className="score-header text-center">Phương pháp<br/>(25)</th>
              <th className="score-header text-center">Hiệu quả thực tế<br/>(35)</th>
              <th className="score-header text-center">Chuẩn hóa SOP<br/>(15)</th>
              <th className="score-header text-center">Kỹ năng trình bày<br/>(10)</th>
              <th style={{width: '65px', textAlign: 'center'}}>Tổng TB</th>
              <th style={{width: '75px', textAlign: 'center'}}>Xếp Loại</th>
              <th className="column-comment-header" style={{minWidth: '160px', textAlign: 'center'}}>
                <span className="screen-only">Thư Ký</span>
                <span className="print-only">Ý kiến nhận xét của Hội đồng</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={14} className="text-center text-muted" style={{padding: '2rem'}}>
                  Không tìm thấy đề án nào.
                </td>
              </tr>
            ) : (
              filteredData.map((row, index) => {
                const score = Number(row.tongDiem);
                const isScored = row.hasScore !== false && score > 0;
                const commentObj = comments[row.maDeTai];
                const hasComment = commentObj && commentObj.nhanXet && commentObj.nhanXet.trim().length > 0;

                return (
                  <tr key={row.maDeTai || index} className={isScored && index < 3 ? 'top-rank-row' : ''}>
                    <td className="text-center font-bold rank-cell">
                      {isScored ? (index === 0 ? '🥇 1' : index === 1 ? '🥈 2' : index === 2 ? '🥉 3' : index + 1) : '—'}
                    </td>
                    <td className="text-center font-medium text-muted">{row.maDeTai}</td>
                    <td className="project-title-cell">
                      <div className="font-bold text-main project-title-text">
                        {row.tenDeTai}
                      </div>
                      {hasComment && (
                        <div className="table-comment-preview screen-only" title={commentObj.nhanXet}>
                          💬 {commentObj.nhanXet}
                        </div>
                      )}
                    </td>
                    <td className="text-muted">{row.nhomTacGia || '—'}</td>
                    <td className="text-center">
                      <span className={`badge ${row.nhanh === 'Nhánh B' ? 'badge-partner' : 'badge-pass'}`}>
                        {row.nhanh}
                      </span>
                    </td>
                    <td>
                      <div className="font-medium text-main">{row.khoaPhong}</div>
                      {row.khoaPhoiHop && (
                        <div className="partner-dept-text">
                          + {row.khoaPhoiHop}
                        </div>
                      )}
                    </td>
                    <td className="text-center score-col">{row.phan1}</td>
                    <td className="text-center score-col">{row.phan2}</td>
                    <td className="text-center score-col">{row.phan3}</td>
                    <td className="text-center score-col">{row.phan4}</td>
                    <td className="text-center score-col">{row.phan5}</td>
                    <td className="text-center font-bold total-score-cell">
                      {isScored ? score.toFixed(1) : '—'}
                    </td>
                    <td className="text-center">
                      {isScored ? (
                        <span className={`badge ${getBadgeClass(score)}`}>
                          {getLabel(score)}
                        </span>
                      ) : (
                        <span className="badge badge-pass" style={{color: '#94a3b8'}}>Chờ chấm</span>
                      )}
                    </td>
                    <td className="comment-col-cell">
                      {/* Trên màn hình: Nút mở Thư Ký */}
                      <div className="screen-only text-center">
                        <button 
                          type="button"
                          className={`btn-table-secretary ${hasComment ? 'has-comment' : ''}`}
                          onClick={() => onOpenCommentModal(row)}
                          title="Thư ký ghi nhận xét của Hội đồng"
                        >
                          {hasComment ? '💬 Xem' : '📝 Nhận xét'}
                        </button>
                      </div>

                      {/* Khi In: Hiển thị đầy đủ nhận xét của Hội đồng */}
                      <div className="print-only print-comment-text">
                        {hasComment ? commentObj.nhanXet : '—'}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* KHỐI CHỮ KÝ CHUẨN NGHỊ ĐỊNH 30 THEO SHEET TONGHOP (CHỈ HIỆN KHI IN) */}
      <div className="print-only print-footer-tonghop">
        <table className="print-signature-table">
          <tbody>
            <tr>
              <td style={{width: '50%', textAlign: 'center', verticalAlign: 'top'}}>
                <div className="print-sign-role">THƯ KÝ BAN TỔ CHỨC</div>
                <div className="print-sign-note">(Ký và ghi rõ họ tên)</div>
                <div className="print-sign-space"></div>
                <div className="print-sign-name">Đỗ Thị Hồng Nhung</div>
              </td>
              <td style={{width: '50%', textAlign: 'center', verticalAlign: 'top'}}>
                <div className="print-sign-role">TRƯỞNG BAN TỔ CHỨC</div>
                <div className="print-sign-note">(Ký và ghi rõ họ tên)</div>
                <div className="print-sign-space"></div>
                <div className="print-sign-name">ThS. Ma Văn Hoàng</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
