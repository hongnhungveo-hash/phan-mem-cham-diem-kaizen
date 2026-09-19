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
  // 1. Quản lý Chế độ Quét Kaizen Vision AI Scanner HUD (Giám Sát Chiến Lược Chất Lượng Toàn Viện)
  const [scanTargetIdx, setScanTargetIdx] = useState(0);
  const [isFastScanning, setIsFastScanning] = useState(false);

  // 3 Trụ cột Giám sát Chiến lược Toàn Viện của Hội Thi Kaizen 2026
  const hudPresets = [
    {
      tag: 'HỘI THI KAIZEN 2026 • TRỤ CỘT AN TOÀN IPSG',
      tagClass: 'tag-emerald',
      title: 'Giám Sát Rào Chắn Lâm Sàng Toàn Viện & An Toàn Người Bệnh',
      meta1: '100% Khắc Phục Gốc Rễ RCA',
      meta2: 'Văn Hóa Không Trách Phạt (Just Culture)'
    },
    {
      tag: 'HỘI THI KAIZEN 2026 • TRỤ CỘT TINH GỌN LEAN',
      tagClass: 'tag-cyan',
      title: 'Triệt Tiêu 8 Lãng Phí Muda, Rút Ngắn Chờ Đợi & Tối Ưu Dòng Chảy',
      meta1: 'Giảm -38.5% Thời Gian Chờ',
      meta2: 'Tiết Kiệm 1.24 Tỷ Lãng Phí/Năm'
    },
    {
      tag: 'HỘI THI KAIZEN 2026 • CHUYỂN ĐỔI SỐ & LƯƠNG 3P',
      tagClass: 'tag-amber',
      title: 'Số Hóa Báo Cáo A3, 19 Quy Trình SOP Mới & Thưởng Hiệu Suất wRVU',
      meta1: '100% Hồ Sơ A3 & EMR',
      meta2: 'Liên Thông Quỹ Thưởng P3 Hiệu Quả'
    }
  ];

  const currentHud = hudPresets[scanTargetIdx];

  const handleSimulateScan = () => {
    setIsFastScanning(true);
    setTimeout(() => {
      setIsFastScanning(false);
    }, 2400);
  };

  // Hệ thống chấm điểm thực chứng & phân hạng Tier từ Prototype v2
  const getScore = (p) => {
    if (!p) return { score: 0, tier: 'muted', short: 'Đạt', full: 'Đạt' };
    const raw = (typeof p.tongDiemThamDinh === 'number')
      ? p.tongDiemThamDinh
      : (parseInt(p.tongDiemThamDinh, 10) || (Number(p.tongDiem) > 0 ? Number(p.tongDiem) : (Number(p.diemBanDau) || 80)));
    let tier, short;
    if (raw >= 95)      { tier = 'emerald'; short = 'Xuất sắc'; }
    else if (raw >= 90) { tier = 'cyan';    short = 'Tốt';      }
    else if (raw >= 80) { tier = 'amber';   short = 'Khá';      }
    else                { tier = 'muted';   short = 'Đạt';      }
    const full = String(p.xepLoaiThamDinh || p.xepLoai || short).replace(/[\s|]+$/, '').trim() || short;
    return { score: raw, tier, short, full };
  };

  // Tính Top 5 Đề án có điểm cao nhất
  const top5Ids = useMemo(() => {
    if (!topProjects || topProjects.length === 0) return [];
    return [...topProjects]
      .map(p => ({ id: p.maDeTai, s: getScore(p).score }))
      .sort((a, b) => b.s - a.s)
      .slice(0, 5)
      .map(x => x.id);
  }, [topProjects]);

  // Tính điểm trung bình toàn viện cho Vòng 2 Timeline
  const averageScore = useMemo(() => {
    if (!topProjects || topProjects.length === 0) return 90.3;
    const total = topProjects.reduce((sum, p) => sum + getScore(p).score, 0);
    return Math.round((total / topProjects.length) * 10) / 10;
  }, [topProjects]);

  // 2. Tìm đề án Spotlight: Đề án có TỔNG ĐIỂM cao nhất toàn viện
  const spotlightProject = useMemo(() => {
    if (!topProjects || topProjects.length === 0) return null;
    const sorted = [...topProjects].sort((a, b) => getScore(b).score - getScore(a).score);
    return sorted[0];
  }, [topProjects]);

  const spotlightScore = spotlightProject ? getScore(spotlightProject) : { score: 98, tier: 'emerald', short: 'Xuất sắc', full: 'ĐẠT LOẠI A (XUẤT SẮC)' };

  // 3. Quản lý Bộ Lọc & Tìm Kiếm Tức Thời (SaaS Directory Search)
  const [filterType, setFilterType] = useState('all'); // 'all' | 'Nhánh A' | 'Nhánh B' | 'scored'
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return (topProjects || []).filter(p => {
      // Lọc theo nhánh / trạng thái
      if (filterType === 'Nhánh A' && p.nhanh !== 'Nhánh A') return false;
      if (filterType === 'Nhánh B' && p.nhanh !== 'Nhánh B') return false;
      if (filterType === 'scored' && !top5Ids.includes(p.maDeTai)) return false;

      // Tìm kiếm theo từ khóa
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
  }, [topProjects, filterType, searchQuery, top5Ids]);

  return (
    <div className="home-nextgen-wrapper">
      
      {/* ==========================================================================
          2. HERO SECTION & KAIZEN VISION SCANNER HUD (NEXT-GEN SAAS BENCHMARK)
          ========================================================================== */}
      <section className="hero-grid">
        <div className="hero-intro">
          <div className="hero-pill-badge">
            <span>💎 KỸ NĂNG 12 UI/UX PRO MAX</span>
            <span>•</span>
            <span>NEXT-GEN VISION AI ARCHITECTURE</span>
          </div>

          <h1 className="hero-title">
            Chuyển Hóa Chất Lượng Y Tế Bằng <span className="hero-title-shimmer">Kaizen Vision AI</span> & Trí Tuệ Dữ Liệu
          </h1>

          <p className="hero-desc">
            Cổng chỉ huy số tối tân tích hợp phương pháp luận Kaizen tinh gọn, phân tích thời gian thực 19 đề án A3, 
            triệt tiêu lãng phí Lean và liên thông đòn bẩy đãi ngộ lương 3P công bằng tại Bệnh viện Đa khoa Hùng Vương.
          </p>

          <div className="hero-actions-row">
            <a href="#directorySection" className="btn-glow-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <span>Trải Nghiệm 19 Đề Án</span>
            </a>
            <button type="button" className="btn-glass-secondary" onClick={handleSimulateScan}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
              </svg>
              <span>Quét Lại Kaizen Vision HUD</span>
            </button>
          </div>
        </div>

        {/* THE NEXT-GEN VISION AI SCANNER HUD - BẢNG ĐIỀU HÀNH CUỘC THI TOÀN VIỆN */}
        <div className="vision-hud-container">
          <div className="hud-header">
            <div className="hud-title-wrap">
              <div className="hud-status-indicator"></div>
              <div className="hud-title">HỘI THI KAIZEN 2026 • VISION INTELLIGENCE HUD</div>
            </div>
            <div className="hud-telemetry-badge mono">BẢNG ĐIỀU HÀNH SỐ • LIVE</div>
          </div>

          <div className="hud-viewport" id="hudViewport">
            {/* Laser Beam */}
            <div className={`hud-scanner-beam ${isFastScanning ? 'fast-scan' : ''}`}></div>
            <div className="hud-grid-overlay"></div>

            {/* Corners */}
            <div className="reticle-corner reticle-tl"></div>
            <div className="reticle-corner reticle-tr"></div>
            <div className="reticle-corner reticle-bl"></div>
            <div className="reticle-corner reticle-br"></div>

            {/* Top Target Bounding Box */}
            <div className="hud-bounding-box" id="hudBoxTop">
              <div className={`bbox-tag ${currentHud.tagClass}`}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{currentHud.tag}</span>
              </div>
              <div className="bbox-title" id="hudBoxTitle">{currentHud.title}</div>
              <div className="bbox-meta">
                <span>Tiêu chuẩn: <strong className="mono" style={{ color: 'var(--hv-emerald)' }}>{currentHud.meta1}</strong></span>
                <span>•</span>
                <span>Tác động: <strong className="mono" style={{ color: 'var(--hv-amber)' }}>{currentHud.meta2}</strong></span>
              </div>
            </div>

            {/* Center Telemetry Display - 4 Competition Key Metrics */}
            <div className="hud-metrics-row">
              <div className={`hud-mini-stat ${scanTargetIdx === 0 ? 'active-stat' : ''}`} id="hudStat0">
                <div className="hud-stat-val mono" style={{ color: 'var(--hv-cyan)' }}>{totalProjects || 19}</div>
                <div className="hud-stat-lbl">Đề Án Sáng Kiến</div>
                <div className="hud-stat-sub" style={{ color: 'var(--hv-cyan)' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
                  <span>100% Khối Lâm Sàng</span>
                </div>
              </div>
              <div className={`hud-mini-stat ${scanTargetIdx === 0 ? 'active-stat' : ''}`} id="hudStat1">
                <div className="hud-stat-val mono" style={{ color: 'var(--hv-emerald)' }}>{totalDepts || 23}</div>
                <div className="hud-stat-lbl">Khoa/Phòng Chủ Trì</div>
                <div className="hud-stat-sub" style={{ color: 'var(--hv-emerald)' }}>
                  <span>Đồng bộ 2 Cơ sở BV</span>
                </div>
              </div>
              <div className={`hud-mini-stat ${scanTargetIdx === 1 ? 'active-stat' : ''}`} id="hudStat2">
                <div className="hud-stat-val mono" style={{ color: 'var(--hv-amber)' }}>1.24 TỶ</div>
                <div className="hud-stat-lbl">Tiết Kiệm Lãng Phí/Năm</div>
                <div className="hud-stat-sub" style={{ color: 'var(--hv-amber)' }}>
                  <span>Lean Hospital ROI</span>
                </div>
              </div>
              <div className={`hud-mini-stat ${scanTargetIdx === 2 ? 'active-stat' : ''}`} id="hudStat3">
                <div className="hud-stat-val mono" style={{ color: 'var(--hv-purple)' }}>100%</div>
                <div className="hud-stat-lbl">Liên Thông Lương 3P</div>
                <div className="hud-stat-sub" style={{ color: 'var(--hv-purple)' }}>
                  <span>Thưởng Hiệu Suất wRVU</span>
                </div>
              </div>
            </div>
          </div>

          {/* Target Switcher Dock */}
          <div className="hud-target-dock">
            <span className="hud-dock-lbl">Trụ Cột Hội Thi:</span>
            <div className="target-tabs">
              <button 
                type="button" 
                className={`target-tab-btn ${scanTargetIdx === 0 ? 'active' : ''}`} 
                onClick={() => setScanTargetIdx(0)}
              >
                An Toàn Người Bệnh (IPSG)
              </button>
              <button 
                type="button" 
                className={`target-tab-btn ${scanTargetIdx === 1 ? 'active' : ''}`} 
                onClick={() => setScanTargetIdx(1)}
              >
                Tinh Gọn Lean Hospital
              </button>
              <button 
                type="button" 
                className={`target-tab-btn ${scanTargetIdx === 2 ? 'active' : ''}`} 
                onClick={() => setScanTargetIdx(2)}
              >
                Chuyển Đổi Số & Lương 3P
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          3. THE BENTO GRID ARCHITECTURE (4 HIGH-IMPACT TILES)
          ========================================================================== */}
      <section className="bento-section">
        <div className="section-header-wrap">
          <div>
            <div className="section-heading-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 9h6"/></svg>
              <span>BENTO GRID MATRIX</span>
            </div>
            <h2 className="section-main-title">Trọng Tâm Điều Hành Chiến Lược Kaizen</h2>
          </div>
        </div>

        <div className="bento-grid">
          
          {/* Bento 1: Strategic Timeline (2x1 Large Span) */}
          <div className="bento-card bento-timeline">
            <div>
              <div className="bento-header">
                <span className="bento-tag">LỘ TRÌNH 3 VÒNG THI</span>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--hv-cyan)' }}>COUNTDOWN: 09 NGÀY CHUNG KẾT</span>
              </div>
              <h3 className="bento-card-title">Tiến Độ Thực Thi Hội Thi 16 Năm Hùng Vương</h3>
              <p className="bento-card-desc">Giám sát lộ trình từ giai đoạn nộp phiếu đăng ký A3, thử nghiệm thực địa đến vòng thuyết trình trước Hội đồng Thành viên.</p>
            </div>

            <div className="timeline-strip">
              <div className="timeline-node completed">
                <div className="node-header">
                  <span className="node-round-lbl">VÒNG 1</span>
                  <span className="node-status-chip chip-done">HOÀN THÀNH</span>
                </div>
                <div className="node-name">Khởi Động & Nộp Đề Án</div>
                <div className="node-date mono">19/19 Đơn Vị Đạt Chuẩn</div>
              </div>

              <div className="timeline-node active">
                <div className="node-header">
                  <span className="node-round-lbl">VÒNG 2</span>
                  <span className="node-status-chip chip-active">ĐANG DIỄN RA</span>
                </div>
                <div className="node-name">Thực Địa & Thẩm Định</div>
                <div className="node-date mono">Điểm TB: {averageScore}đ</div>
              </div>

              <div className="timeline-node">
                <div className="node-header">
                  <span className="node-round-lbl">VÒNG 3</span>
                  <span className="node-status-chip chip-upcoming">28/09/2026</span>
                </div>
                <div className="node-name">Chung Kết & Trao Giải</div>
                <div className="node-date mono">Hội đồng BGK Chấm Thi</div>
              </div>
            </div>
          </div>

          {/* Bento 2: Spotlight Top 1 Project */}
          <div className="bento-card bento-spotlight">
            <div>
              <div className="bento-header">
                <span className="gold-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span>✨ ĐỀ ÁN TIÊU BIỂU VÒNG 1</span>
                </span>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--hv-amber)' }}>
                  {spotlightProject?.maDeTai || 'KZ16-KHTH-01'}
                </span>
              </div>
              <h3 className="bento-card-title">
                {spotlightProject?.tenDeTai || spotlightProject?.tenSanPham}
              </h3>
              <p className="bento-card-desc">
                {spotlightProject?.khoaPhong} • Chủ nhiệm: {spotlightProject ? getCleanLeaderName(spotlightProject) : ''}
              </p>
            </div>

            <div style={{ margin: '1.25rem 0' }}>
              <div className="spotlight-score-badge mono">
                {spotlightScore.score} <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>ĐIỂM</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--hv-emerald)', fontWeight: 700 }}>
                ★ Xếp Loại: {spotlightScore.short} (Tổng Điểm Tự Động Vòng 1)
              </div>
            </div>

            <button 
              type="button" 
              className="btn-view-a3" 
              onClick={() => onSelectProject && spotlightProject && onSelectProject(spotlightProject)}
            >
              <span>Xem Báo Cáo A3 Chi Tiết</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================================================
          4. INTERACTIVE PROJECT DIRECTORY & FILTER ENGINE (SAAS STYLE)
          ========================================================================== */}
      <section className="directory-section" id="directorySection">
        <div className="section-header-wrap">
          <div>
            <div className="section-heading-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>KAIZEN REPOSITORY</span>
            </div>
            <h2 className="section-main-title">Thư Viện Sản Phẩm & Đề Án Cải Tiến Đang Đăng Ký</h2>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="filter-toolbar">
          <div className="filter-chips">
            <button 
              type="button" 
              className={`filter-chip ${filterType === 'all' ? 'active' : ''}`} 
              onClick={() => setFilterType('all')}
            >
              Tất Cả ({topProjects.length})
            </button>
            <button 
              type="button" 
              className={`filter-chip ${filterType === 'Nhánh A' ? 'active' : ''}`} 
              onClick={() => setFilterType('Nhánh A')}
            >
              Nhánh A: Nội Bộ (2)
            </button>
            <button 
              type="button" 
              className={`filter-chip ${filterType === 'Nhánh B' ? 'active' : ''}`} 
              onClick={() => setFilterType('Nhánh B')}
            >
              Nhánh B: Liên Khoa (17)
            </button>
            <button 
              type="button" 
              className={`filter-chip ${filterType === 'scored' ? 'active' : ''}`} 
              onClick={() => setFilterType('scored')}
            >
              Top 5 Điểm Cao Nhất
            </button>
          </div>

          <div className="search-input-wrap">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input 
              type="text" 
              id="projectSearchInput" 
              className="search-input" 
              placeholder="Tìm tên đề án, khoa phòng, tác giả..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                type="button" 
                style={{ position: 'absolute', right: '0.85rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.1rem' }}
                onClick={() => setSearchQuery('')}
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Projects Bento Grid Cards */}
        <div className="projects-bento-grid" id="projectsGrid">
          {filteredProjects.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
              Không tìm thấy đề án phù hợp với từ khóa "{searchQuery}".
            </div>
          ) : (
            filteredProjects.map((p, idx) => {
              const sc = getScore(p);
              const isBranchA = p.nhanh === 'Nhánh A';
              const isTop5 = top5Ids.includes(p.maDeTai);

              return (
                <div key={p.maDeTai || idx} className="project-card">
                  <div>
                    <div className="card-top-row">
                      <span className={`card-branch-tag ${isBranchA ? 'branch-a' : 'branch-b'}`}>{p.nhanh}</span>
                      <span className={`card-score-badge badge-tier-${sc.tier} mono`}>
                        ★ {sc.score}đ • {sc.short}{isTop5 ? ' • TOP 5' : ''}
                      </span>
                    </div>
                    <h3 className="project-card-title" style={{ marginTop: '0.75rem' }}>
                      {p.tenDeTai || p.tenSanPham}
                    </h3>
                  </div>

                  <div>
                    <div className="project-card-meta">
                      <div className="meta-item">
                        <span style={{ color: 'var(--text-muted)' }}>Khoa/Phòng:</span>
                        <span className="meta-strong">{p.khoaPhong}{p.khoaPhoiHop ? ` (+ ${p.khoaPhoiHop})` : ''}</span>
                      </div>
                      <div className="meta-item">
                        <span style={{ color: 'var(--text-muted)' }}>Tác giả:</span>
                        <span className="meta-strong">{p.tacGia || getCleanLeaderName(p) || 'Nhóm tác giả'}</span>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      className="btn-view-a3" 
                      style={{ marginTop: '1rem' }}
                      onClick={() => onSelectProject && onSelectProject(p)}
                    >
                      <span>Xem Báo Cáo A3</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <p><strong>CÔNG TY TNHH PHÁT TRIỂN Y HỌC VIỆT — BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG</strong></p>
        <p style={{ marginTop: '0.3rem' }}>Phòng Kế hoạch Tổng hợp — Tổ Quản lý Chất lượng • Sếp Trần Đình Vũ phụ trách</p>
        <p className="mono" style={{ marginTop: '0.4rem', fontSize: '0.75rem' }}>Prototype Next-Gen Vision AI SaaS Design Architecture • 2026</p>
      </footer>

    </div>
  );
}
