import React, { useState, useMemo } from 'react';
import './KaizenShowcase.css';

export default function KaizenShowcase({ 
  projects = [], 
  onSelectProject,
  rankingScores = {} 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('ALL');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  // Tính điểm hiển thị nhất quán
  const getProjectScore = (p) => {
    const raw = (typeof p.tongDiemThamDinh === 'number')
      ? p.tongDiemThamDinh
      : (parseInt(p.tongDiemThamDinh, 10) || (Number(p.tongDiem) > 0 ? Number(p.tongDiem) : (Number(p.diemBanDau) || 85)));
    let tier = 'muted';
    let label = 'Đạt';
    if (raw >= 95) { tier = 'emerald'; label = 'Xuất sắc'; }
    else if (raw >= 90) { tier = 'cyan'; label = 'Tốt'; }
    else if (raw >= 80) { tier = 'amber'; label = 'Khá'; }
    return { score: raw, tier, label };
  };

  // Lọc dữ liệu tức thì
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        (p.tenSanPham && p.tenSanPham.toLowerCase().includes(q)) ||
        (p.tenDeTai && p.tenDeTai.toLowerCase().includes(q)) ||
        (p.maDeTai && p.maDeTai.toLowerCase().includes(q)) ||
        (p.khoaPhong && p.khoaPhong.toLowerCase().includes(q));

      const matchBranch = selectedBranch === 'ALL' || p.nhanh === selectedBranch;
      return matchSearch && matchBranch;
    });
  }, [projects, searchQuery, selectedBranch]);

  const countBranchA = useMemo(() => projects.filter(p => p.nhanh === 'Nhánh A').length, [projects]);
  const countBranchB = useMemo(() => projects.filter(p => p.nhanh === 'Nhánh B').length, [projects]);

  return (
    <div className="showcase-container">
      {/* HEADER SIÊU GỌN */}
      <div className="showcase-header-compact">
        <div className="showcase-header-left">
          <div className="showcase-badge-pill">
            <span className="dot-live"></span>
            19 Sản phẩm & Đề án Kaizen 2026
          </div>
          <h1 className="showcase-title-compact">Danh mục sản phẩm cải tiến</h1>
          <p className="showcase-subtitle-compact">
            Click vào sản phẩm bất kỳ để mở báo cáo chi tiết A3, giải pháp kỹ thuật và phiếu đánh giá.
          </p>
        </div>

        {/* CÔNG CỤ CHUYỂN CHẾ ĐỘ XEM: LƯỚI / BẢNG */}
        <div className="showcase-view-switch">
          <button 
            type="button" 
            className={`view-switch-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            title="Xem dạng thẻ lưới"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>Dạng thẻ</span>
          </button>
          <button 
            type="button" 
            className={`view-switch-btn ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => setViewMode('table')}
            title="Xem dạng bảng danh sách gọn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <span>Dạng bảng</span>
          </button>
        </div>
      </div>

      {/* THANH LỌC TỐI GIẢN */}
      <div className="showcase-filter-bar">
        <div className="filter-chips-cluster">
          <button 
            type="button" 
            className={`filter-chip-btn ${selectedBranch === 'ALL' ? 'active' : ''}`}
            onClick={() => setSelectedBranch('ALL')}
          >
            Tất cả ({projects.length})
          </button>
          <button 
            type="button" 
            className={`filter-chip-btn ${selectedBranch === 'Nhánh A' ? 'active' : ''}`}
            onClick={() => setSelectedBranch('Nhánh A')}
          >
            Nhánh A: Nội bộ ({countBranchA})
          </button>
          <button 
            type="button" 
            className={`filter-chip-btn ${selectedBranch === 'Nhánh B' ? 'active' : ''}`}
            onClick={() => setSelectedBranch('Nhánh B')}
          >
            Nhánh B: Liên khoa ({countBranchB})
          </button>
        </div>

        <div className="search-wrap-compact">
          <svg className="search-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="search-input-compact"
            placeholder="Tìm tên sản phẩm, mã số, khoa phòng..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              type="button" 
              className="clear-search-compact"
              onClick={() => setSearchQuery('')}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* HIỂN THỊ DỮ LIỆU: DẠNG LƯỚI THẺ HOẶC DẠNG BẢNG */}
      {filteredProjects.length === 0 ? (
        <div className="empty-results-box">
          <p className="empty-text">Không tìm thấy sản phẩm nào khớp với từ khóa "{searchQuery}".</p>
          <button 
            type="button" 
            className="btn-reset-filter"
            onClick={() => { setSearchQuery(''); setSelectedBranch('ALL'); }}
          >
            Đặt lại bộ lọc
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        /* CHẾ ĐỘ THẺ LƯỚI: NGẮN GỌN, ÍT CHỮ, BẤM VÀO MỞ A3 */
        <div className="product-minimal-grid">
          {filteredProjects.map((p, idx) => {
            const sc = getProjectScore(p);
            const isBranchA = p.nhanh === 'Nhánh A';
            const displayTitle = p.tenSanPham || p.tenDeTai;

            return (
              <div 
                key={p.maDeTai || idx} 
                className="product-compact-card"
                onClick={() => onSelectProject(p)}
                title="Bấm để xem chi tiết báo cáo A3"
              >
                {/* Dòng đỉnh: Mã số, Phân nhánh, Điểm số */}
                <div className="card-header-line">
                  <div className="card-tags-left">
                    <span className="card-code-mono">{p.maDeTai}</span>
                    <span className={`card-branch-badge ${isBranchA ? 'branch-a' : 'branch-b'}`}>
                      {p.nhanh}
                    </span>
                  </div>
                  <span className={`card-score-pill tier-${sc.tier}`}>
                    ★ {sc.score}đ
                  </span>
                </div>

                {/* Tên sản phẩm: Nổi bật, súc tích, không rườm rà */}
                <h3 className="card-product-title">
                  {displayTitle}
                </h3>

                {/* Khoa/Phòng chủ trì & Hành động xem chi tiết */}
                <div className="card-footer-line">
                  <div className="card-dept-name" title={p.khoaPhong}>
                    🏥 {p.khoaPhong}
                  </div>
                  <div className="card-action-link">
                    <span>Chi tiết</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* CHẾ ĐỘ BẢNG DANH SÁCH: 1 DÒNG/SẢN PHẨM, CỰC KỲ DỄ QUAN SÁT */
        <div className="product-table-wrapper">
          <table className="product-compact-table">
            <thead>
              <tr>
                <th style={{ width: '50px', textAlign: 'center' }}>STT</th>
                <th style={{ width: '130px' }}>Mã đề tài</th>
                <th>Tên sản phẩm & Đề án cải tiến</th>
                <th style={{ width: '220px' }}>Khoa/Phòng</th>
                <th style={{ width: '110px', textAlign: 'center' }}>Phân nhánh</th>
                <th style={{ width: '90px', textAlign: 'center' }}>Điểm</th>
                <th style={{ width: '120px', textAlign: 'center' }}>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((p, idx) => {
                const sc = getProjectScore(p);
                const isBranchA = p.nhanh === 'Nhánh A';
                const displayTitle = p.tenSanPham || p.tenDeTai;

                return (
                  <tr 
                    key={p.maDeTai || idx}
                    onClick={() => onSelectProject(p)}
                    className="product-table-row"
                    title="Bấm vào hàng để mở chi tiết A3"
                  >
                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{idx + 1}</td>
                    <td>
                      <span className="table-code-pill">{p.maDeTai}</span>
                    </td>
                    <td>
                      <div className="table-product-title">{displayTitle}</div>
                    </td>
                    <td>
                      <div className="table-dept">{p.khoaPhong}</div>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`table-branch-pill ${isBranchA ? 'branch-a' : 'branch-b'}`}>
                        {p.nhanh}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`table-score-pill tier-${sc.tier}`}>
                        {sc.score}đ
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button 
                        type="button" 
                        className="table-action-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(p);
                        }}
                      >
                        Xem A3 ➔
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
