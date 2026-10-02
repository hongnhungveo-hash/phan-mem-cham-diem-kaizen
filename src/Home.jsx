import React, { useState, useMemo } from 'react';
import './Home.css';
import { getCleanLeaderName } from './kaizenData';

export default function Home({ 
  totalProjects = 19, 
  totalDepts = 23, 
  totalScores = 0, 
  topScore = 0,
  topProjects = [],
  onNavigate,
  onSelectProject,
  theme = 'light',
  toggleTheme
}) {
  // Bộ lọc & Tìm kiếm
  const [filterType, setFilterType] = useState('all'); // 'all' | 'Nhánh A' | 'Nhánh B' | 'scored'
  const [searchQuery, setSearchQuery] = useState('');

  // Hệ thống chấm điểm thực chứng
  const getScore = (p) => {
    if (!p) return { score: 0, tier: 'muted', short: 'Đạt', full: 'Đạt', hasScore: false };
    const hasScore = Boolean(p.hasScore || (p.status === 'evaluated') || (Number(p.tongDiem) > 0));
    const raw = (typeof p.tongDiemThamDinh === 'number')
      ? p.tongDiemThamDinh
      : (parseInt(p.tongDiemThamDinh, 10) || (Number(p.tongDiem) > 0 ? Number(p.tongDiem) : (Number(p.diemBanDau) || 85)));
    let tier, short;
    if (raw >= 95)      { tier = 'emerald'; short = 'Xuất sắc'; }
    else if (raw >= 90) { tier = 'cyan';    short = 'Tốt';      }
    else if (raw >= 80) { tier = 'amber';   short = 'Khá';      }
    else                { tier = 'muted';   short = 'Đạt';      }
    const full = String(p.xepLoaiThamDinh || p.xepLoai || short).replace(/[\s|]+$/, '').trim() || short;
    return { score: raw, tier, short, full, hasScore };
  };

  // Lọc danh sách đề án
  const filteredProjects = useMemo(() => {
    return (topProjects || []).filter(p => {
      const sc = getScore(p);
      if (filterType === 'Nhánh A' && p.nhanh !== 'Nhánh A') return false;
      if (filterType === 'Nhánh B' && p.nhanh !== 'Nhánh B') return false;
      if (filterType === 'scored' && !sc.hasScore) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = (p.tenDeTai || '').toLowerCase().includes(q);
        const matchProd = (p.tenSanPham || '').toLowerCase().includes(q);
        const matchDept = (p.khoaPhong || '').toLowerCase().includes(q);
        const matchLeader = (getCleanLeaderName(p) || p.tacGia || '').toLowerCase().includes(q);
        if (!matchTitle && !matchProd && !matchDept && !matchLeader) return false;
      }

      return true;
    });
  }, [topProjects, filterType, searchQuery]);

  const countBranchA = useMemo(() => (topProjects || []).filter(p => p.nhanh === 'Nhánh A').length, [topProjects]);
  const countBranchB = useMemo(() => (topProjects || []).filter(p => p.nhanh === 'Nhánh B').length, [topProjects]);
  const countScored = useMemo(() => (topProjects || []).filter(p => getScore(p).hasScore).length, [topProjects]);

  return (
    <div className="home-clean-wrapper">
      
      {/* ==========================================================================
          1. HERO WELCOME SECTION (TRANG TRỌNG, ĐĨNH ĐẠC, TINH GỌN)
          ========================================================================== */}
      <section className="hero-clean-welcome">
        <div className="welcome-badge-pill">
          <span className="badge-sparkle">✨</span>
          <span>BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG • HỘI THI KAIZEN 2026</span>
        </div>

        <h1 className="welcome-greeting-title">
          Chào mừng Quý Thầy Cô, Đồng Nghiệp & Hội Đồng Giám Khảo
        </h1>

        <div className="competition-main-name">
          HỘI THI ĐỀ ÁN CẢI TIẾN CHẤT LƯỢNG LẦN THỨ 16 — NĂM 2026
        </div>

        <div className="hospital-motto-line">
          "Thân thiện — Chuyên nghiệp — Chu đáo"
        </div>

        <p className="welcome-desc">
          Cổng thông tin trực tuyến theo dõi thực địa 19 đề án A3, đánh giá an toàn người bệnh và tối ưu hóa quy trình khám chữa bệnh tại Bệnh viện Đa khoa Hùng Vương.
        </p>

        <div className="hero-actions-clean">
          <a href="#directorySection" className="btn-action-primary">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
            <span>Xem danh mục 19 đề án</span>
          </a>
          <button 
            type="button" 
            className="btn-action-secondary" 
            onClick={() => onNavigate && onNavigate('score')}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
            <span>Ban Giám khảo chấm thi</span>
          </button>
          <button 
            type="button" 
            className="btn-action-outline" 
            onClick={() => onNavigate && onNavigate('secretary')}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="3" x2="9" y2="21"/>
            </svg>
            <span>Bàn Thư ký & Xếp hạng</span>
          </button>
        </div>
      </section>

      {/* ==========================================================================
          2. DASHBOARD 4 CHỈ SỐ NHANH (NGẮN GỌN, KHÔNG CÓ MÔ TẢ PHỤ RƯỜM RÀ)
          ========================================================================== */}
      <section className="dashboard-metrics-section">
        <div className="metrics-clean-grid">
          
          <div className="metric-clean-card">
            <div className="metric-tag tag-blue">100% Khối viện</div>
            <div className="metric-number">{totalProjects || 19} Đề án</div>
            <div className="metric-title">Số lượng đề tài đăng ký</div>
          </div>

          <div className="metric-clean-card">
            <div className="metric-tag tag-emerald">Đồng bộ 2 cơ sở</div>
            <div className="metric-number">{totalDepts || 23} Đơn vị</div>
            <div className="metric-title">Khoa phòng tham gia</div>
          </div>

          <div className="metric-clean-card">
            <div className="metric-tag tag-amber">Thực địa Gemba (Do)</div>
            <div className="metric-number">Giai đoạn 2</div>
            <div className="metric-title">Tiến độ hiện tại</div>
          </div>

          <div className="metric-clean-card">
            <div className="metric-tag tag-navy">Hội đồng Thành viên</div>
            <div className="metric-number">Tháng 10/2026</div>
            <div className="metric-title">Kế hoạch Chung kết</div>
          </div>

        </div>

        {/* Lộ trình thi đua 3 vòng tối giản */}
        <div className="simple-timeline-bar">
          <div className="timeline-step step-done" onClick={() => onNavigate && onNavigate('showcase')}>
            <span className="step-num">1</span>
            <div className="step-info">
              <span className="step-name">Vòng 1: Đăng ký & Thẩm định sơ bộ</span>
              <span className="step-status">✓ 19/19 Đạt chuẩn</span>
            </div>
          </div>

          <div className="timeline-arrow">➔</div>

          <div className="timeline-step step-active" onClick={() => onNavigate && onNavigate('showcase')}>
            <span className="step-num">2</span>
            <div className="step-info">
              <span className="step-name">Vòng 2: Triển khai thực địa Gemba</span>
              <span className="step-status">⏳ Đang thực hiện</span>
            </div>
          </div>

          <div className="timeline-arrow">➔</div>

          <div className="timeline-step step-upcoming" onClick={() => onNavigate && onNavigate('score')}>
            <span className="step-num">3</span>
            <div className="step-info">
              <span className="step-name">Vòng 3: Thuyết trình Chung kết</span>
              <span className="step-status">Hội đồng Giám khảo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          3. DANH MỤC SẢN PHẨM & ĐỀ TÀI CẢI TIẾN (LƯỚI 2 CỘT CÂN ĐỐI)
          ========================================================================== */}
      <section className="directory-clean-section" id="directorySection">
        <div className="section-title-wrap">
          <h2 className="section-heading">Sản phẩm & Đề tài Cải tiến Đang Đăng ký</h2>
          <p className="section-subtext">Danh sách 19 công trình sáng kiến của các Khoa/Phòng đang triển khai thử nghiệm thực địa.</p>
        </div>

        {/* Toolbar lọc và tìm kiếm */}
        <div className="clean-toolbar">
          <div className="filter-pills">
            <button 
              type="button" 
              className={`pill-btn ${filterType === 'all' ? 'active' : ''}`}
              onClick={() => setFilterType('all')}
            >
              Tất cả ({topProjects.length})
            </button>
            <button 
              type="button" 
              className={`pill-btn ${filterType === 'Nhánh A' ? 'active' : ''}`}
              onClick={() => setFilterType('Nhánh A')}
            >
              Nhánh A: Nội bộ ({countBranchA})
            </button>
            <button 
              type="button" 
              className={`pill-btn ${filterType === 'Nhánh B' ? 'active' : ''}`}
              onClick={() => setFilterType('Nhánh B')}
            >
              Nhánh B: Liên khoa ({countBranchB})
            </button>
            {countScored > 0 && (
              <button 
                type="button" 
                className={`pill-btn ${filterType === 'scored' ? 'active' : ''}`}
                onClick={() => setFilterType('scored')}
              >
                Đã chấm điểm ({countScored})
              </button>
            )}
          </div>

          <div className="search-box-clean">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input 
              type="text" 
              className="search-input-field" 
              placeholder="Tìm tên đề tài, tác giả, khoa phòng..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                type="button" 
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Lưới 2 cột cân đối */}
        <div className="projects-two-col-grid">
          {filteredProjects.length === 0 ? (
            <div className="no-projects-found">
              Không tìm thấy đề tài nào phù hợp với từ khóa "{searchQuery}".
            </div>
          ) : (
            filteredProjects.map((p, idx) => {
              const sc = getScore(p);
              const displayTitle = p.tenSanPham || p.tenDeTai;
              const leader = p.chuNhiem || p.tacGia || getCleanLeaderName(p) || 'Nhóm tác giả';

              return (
                <div key={p.maDeTai || idx} className="clean-project-card">
                  {/* Hàng trên: STT tròn + Trạng thái điểm số */}
                  <div className="card-top-bar">
                    <span className="card-index-badge">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    
                    {sc.hasScore ? (
                      <span className={`status-badge-score tier-${sc.tier}`}>
                        ✓ {sc.score}đ • {sc.short}
                      </span>
                    ) : (
                      <span className="status-badge-testing">
                        ⏳ Đang thử nghiệm thực địa
                      </span>
                    )}
                  </div>

                  {/* Tên đề tài / Sản phẩm */}
                  <h3 className="card-project-title" title={p.tenDeTai}>
                    {displayTitle}
                  </h3>

                  {/* Khoa/Phòng và Tác giả */}
                  <div className="card-meta-block">
                    <div className="card-meta-row">
                      <span className="meta-icon">🏥</span>
                      <span className="meta-val font-semibold">{p.khoaPhong}{p.khoaPhoiHop ? ` (+ ${p.khoaPhoiHop})` : ''}</span>
                    </div>
                    <div className="card-meta-row">
                      <span className="meta-icon">👤</span>
                      <span className="meta-val">{leader}</span>
                    </div>
                  </div>

                  {/* Nút xem chi tiết A3 */}
                  <div className="card-action-bar">
                    <button 
                      type="button" 
                      className="btn-detail-view"
                      onClick={() => onSelectProject && onSelectProject(p)}
                    >
                      <span>Xem Chi Tiết</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

    </div>
  );
}
