import React, { useState, useMemo } from 'react';
import './KaizenShowcase.css';
import { getCleanLeaderName } from './kaizenData';

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
    const hasScore = Boolean(p.hasScore || (p.status === 'evaluated') || (Number(p.tongDiem) > 0));
    const raw = (typeof p.tongDiemThamDinh === 'number')
      ? p.tongDiemThamDinh
      : (parseInt(p.tongDiemThamDinh, 10) || (Number(p.tongDiem) > 0 ? Number(p.tongDiem) : (Number(p.diemBanDau) || 85)));
    let tier = 'muted';
    let label = 'Đạt';
    if (raw >= 95) { tier = 'emerald'; label = 'Xuất sắc'; }
    else if (raw >= 90) { tier = 'cyan'; label = 'Tốt'; }
    else if (raw >= 80) { tier = 'amber'; label = 'Khá'; }
    return { score: raw, tier, label, hasScore };
  };

  // Lọc dữ liệu
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        (p.tenSanPham && p.tenSanPham.toLowerCase().includes(q)) ||
        (p.tenDeTai && p.tenDeTai.toLowerCase().includes(q)) ||
        (p.maDeTai && p.maDeTai.toLowerCase().includes(q)) ||
        (p.khoaPhong && p.khoaPhong.toLowerCase().includes(q)) ||
        (p.tacGia && p.tacGia.toLowerCase().includes(q));

      const matchBranch = selectedBranch === 'ALL' || 
        (selectedBranch === 'Nhánh A' && p.nhanh === 'Nhánh A') ||
        (selectedBranch === 'Nhánh B' && p.nhanh === 'Nhánh B') ||
        (selectedBranch === 'SCORED' && getProjectScore(p).hasScore);

      return matchSearch && matchBranch;
    });
  }, [projects, searchQuery, selectedBranch]);

  const countBranchA = useMemo(() => projects.filter(p => p.nhanh === 'Nhánh A').length, [projects]);
  const countBranchB = useMemo(() => projects.filter(p => p.nhanh === 'Nhánh B').length, [projects]);
  const countScored = useMemo(() => projects.filter(p => getProjectScore(p).hasScore).length, [projects]);

  return (
    <div className="showcase-clean-container">
      
      {/* ==========================================================================
          1. HEADER TINH GỌN
          ========================================================================== */}
      <div className="showcase-clean-header">
        <div className="header-left-cluster">
          <div className="showcase-tag-pill">
            <span className="dot-active"></span>
            <span>Kho Tri Thức & Sáng Kiến Kaizen 2026</span>
          </div>
          <h1 className="showcase-main-heading">Danh Mục Sản Phẩm & Đề Án Cải Tiến</h1>
          <p className="showcase-intro-text">
            Khám phá 19 công trình sáng kiến cải tiến quy trình, an toàn người bệnh và tinh gọn y tế tại Bệnh viện Đa khoa Hùng Vương.
          </p>
        </div>

        {/* Nút chuyển chế độ xem: Lưới / Bảng */}
        <div className="view-mode-toggles">
          <button 
            type="button" 
            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            title="Xem dạng thẻ lưới"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1"></rect>
              <rect x="14" y="3" width="7" height="7" rx="1"></rect>
              <rect x="14" y="14" width="7" height="7" rx="1"></rect>
              <rect x="3" y="14" width="7" height="7" rx="1"></rect>
            </svg>
            <span>Dạng thẻ</span>
          </button>
          <button 
            type="button" 
            className={`toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => setViewMode('table')}
            title="Xem dạng bảng danh sách"
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

      {/* ==========================================================================
          2. THANH LỌC & TÌM KIẾM
          ========================================================================== */}
      <div className="showcase-toolbar">
        <div className="toolbar-chips">
          <button 
            type="button" 
            className={`chip-btn ${selectedBranch === 'ALL' ? 'active' : ''}`}
            onClick={() => setSelectedBranch('ALL')}
          >
            Tất cả ({projects.length})
          </button>
          <button 
            type="button" 
            className={`chip-btn ${selectedBranch === 'Nhánh A' ? 'active' : ''}`}
            onClick={() => setSelectedBranch('Nhánh A')}
          >
            Nhánh A: Nội bộ ({countBranchA})
          </button>
          <button 
            type="button" 
            className={`chip-btn ${selectedBranch === 'Nhánh B' ? 'active' : ''}`}
            onClick={() => setSelectedBranch('Nhánh B')}
          >
            Nhánh B: Liên khoa ({countBranchB})
          </button>
          {countScored > 0 && (
            <button 
              type="button" 
              className={`chip-btn ${selectedBranch === 'SCORED' ? 'active' : ''}`}
              onClick={() => setSelectedBranch('SCORED')}
            >
              Đã chấm điểm ({countScored})
            </button>
          )}
        </div>

        <div className="toolbar-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Tìm tên sản phẩm, khoa phòng, tác giả..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              type="button" 
              className="btn-clear-search"
              onClick={() => setSearchQuery('')}
            >
              &times;
            </button>
          )}
        </div>
      </div>

      {/* ==========================================================================
          3. HIỂN THỊ DỮ LIỆU: DẠNG LƯỚI THẺ HOẶC DẠNG BẢNG
          ========================================================================== */}
      {filteredProjects.length === 0 ? (
        <div className="empty-box-clean">
          <p>Không tìm thấy sản phẩm nào khớp với từ khóa "{searchQuery}".</p>
          <button 
            type="button" 
            className="btn-reset-clean"
            onClick={() => { setSearchQuery(''); setSelectedBranch('ALL'); }}
          >
            Đặt lại bộ lọc
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        
        /* CHẾ ĐỘ THẺ LƯỚI TỐI GIẢN */
        <div className="showcase-grid-clean">
          {filteredProjects.map((p, idx) => {
            const sc = getProjectScore(p);
            const isBranchA = p.nhanh === 'Nhánh A';
            const displayTitle = p.tenSanPham || p.tenDeTai;
            const leader = p.chuNhiem || p.tacGia || getCleanLeaderName(p) || 'Nhóm tác giả';

            return (
              <div 
                key={p.maDeTai || idx} 
                className="product-card-clean"
              >
                {/* Hàng đỉnh */}
                <div className="card-top-row">
                  <div className="tags-left">
                    <span className="code-pill mono">{p.maDeTai}</span>
                    <span className={`branch-pill ${isBranchA ? 'branch-a' : 'branch-b'}`}>
                      {p.nhanh}
                    </span>
                  </div>
                  
                  {sc.hasScore ? (
                    <span className={`score-badge tier-${sc.tier}`}>
                      ✓ {sc.score}đ • {sc.label}
                    </span>
                  ) : (
                    <span className="status-testing-pill">
                      ⏳ Thử nghiệm
                    </span>
                  )}
                </div>

                {/* Tên sản phẩm */}
                <h3 
                  className="product-title" 
                  title={p.tenDeTai}
                  onClick={() => onSelectProject(p, 'a3')}
                >
                  {displayTitle}
                </h3>

                {/* Khoa/Phòng và Tác giả */}
                <div className="product-meta">
                  <div className="meta-line">
                    <span className="icon">🏥</span>
                    <span className="val font-semibold">{p.khoaPhong}{p.khoaPhoiHop ? ` (+ ${p.khoaPhoiHop})` : ''}</span>
                  </div>
                  <div className="meta-line">
                    <span className="icon">👤</span>
                    <span className="val">{leader}</span>
                  </div>
                </div>

                {/* 2 Nút hành động tiện dụng */}
                <div className="card-actions-duo">
                  <button 
                    type="button" 
                    className="btn-showcase-view"
                    onClick={() => onSelectProject(p, 'a3')}
                  >
                    <span>Xem A3</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>

                  <button 
                    type="button" 
                    className="btn-showcase-score"
                    onClick={() => onSelectProject(p, 'chamDiem')}
                    title="Chấm điểm trực tiếp đề án này"
                  >
                    <span>⭐ Chấm điểm</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      ) : (

        /* CHẾ ĐỘ BẢNG DANH SÁCH GỌN GÀNG */
        <div className="showcase-table-wrap">
          <table className="showcase-clean-table">
            <thead>
              <tr>
                <th style={{ width: '45px', textAlign: 'center' }}>STT</th>
                <th style={{ width: '130px' }}>Mã đề tài</th>
                <th>Tên sản phẩm & Đề tài cải tiến</th>
                <th style={{ width: '220px' }}>Khoa / Phòng</th>
                <th style={{ width: '110px', textAlign: 'center' }}>Phân nhánh</th>
                <th style={{ width: '100px', textAlign: 'center' }}>Điểm số</th>
                <th style={{ width: '160px', textAlign: 'center' }}>Hành động</th>
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
                    className="table-row-hover"
                  >
                    <td style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{idx + 1}</td>
                    <td>
                      <span className="mono-code">{p.maDeTai}</span>
                    </td>
                    <td>
                      <div 
                        className="table-title-bold"
                        onClick={() => onSelectProject(p, 'a3')}
                        style={{ cursor: 'pointer' }}
                      >
                        {displayTitle}
                      </div>
                    </td>
                    <td>
                      <div className="table-dept-text">{p.khoaPhong}</div>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <span className={`branch-badge ${isBranchA ? 'branch-a' : 'branch-b'}`}>
                        {p.nhanh}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {sc.hasScore ? (
                        <span className={`table-score-badge tier-${sc.tier}`}>
                          {sc.score}đ
                        </span>
                      ) : (
                        <span className="table-testing-badge">
                          Chờ chấm
                        </span>
                      )}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <div className="table-actions-inline">
                        <button 
                          type="button" 
                          className="table-btn-view"
                          onClick={() => onSelectProject(p, 'a3')}
                        >
                          Xem A3
                        </button>
                        <button 
                          type="button" 
                          className="table-btn-score"
                          onClick={() => onSelectProject(p, 'chamDiem')}
                        >
                          Chấm
                        </button>
                      </div>
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
