import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Home from './Home'
import KaizenShowcase from './KaizenShowcase'
import A3DetailModal from './A3DetailModal'
import ScoreForm from './ScoreForm'
import RankingTable from './RankingTable'
import SecretaryDesk from './SecretaryDesk'
import Login from './Login'
import SecretaryModal from './SecretaryModal'
import logoImg from './assets/logo.png'
import { INITIAL_KAIZEN_PROJECTS, SAMPLE_RANKING_DATA } from './kaizenData'

function App() {
  const [activeTab, setActiveTab] = useState('home') // 'home' | 'showcase' | 'ranking' | 'score' | 'secretary'
  const [apiUrl, setApiUrl] = useState('https://script.google.com/macros/s/AKfycbyAbgu4JX4d_V-NeqGt0NSyEOmoWNHxJoU-m0MUyMEf2cT4VOZE2_PwsET4lj_ZCGqD/exec')
  
  // Dữ liệu bảng xếp hạng và tiến độ tiếp nhận
  const [rankingData, setRankingData] = useState(() => {
    try {
      const localScores = JSON.parse(localStorage.getItem('hv_kaizen_local_scores') || '{}');
      return INITIAL_KAIZEN_PROJECTS.map(p => {
        const local = localScores[p.maDeTai];
        if (local) {
          return {
            ...p,
            ...local,
            hasScore: true,
            status: 'evaluated'
          };
        }
        return {
          ...p,
          tongDiem: 0,
          phan1: '—',
          phan2: '—',
          phan3: '—',
          phan4: '—',
          phan5: '—',
          xepLoai: 'Chờ chấm',
          count: 0,
          hasScore: false,
          status: 'testing'
        };
      });
    } catch {
      return INITIAL_KAIZEN_PROJECTS;
    }
  });

  const [rawScoreRows, setRawScoreRows] = useState(() => Array.from({ length: 40 }))
  const [commentsMap, setCommentsMap] = useState({})
  const [appConfig, setAppConfig] = useState({ projects: [], judges: [] })
  const [isLoading, setIsLoading] = useState(false)
  
  // Trạng thái đăng nhập chuyên môn (Giám khảo / Thư ký)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('hv_kaizen_auth') === 'true'
  })

  // Modal xem Báo cáo A3
  const [selectedProjectForA3, setSelectedProjectForA3] = useState(null)
  const [isA3ModalOpen, setIsA3ModalOpen] = useState(false)

  // Modal nhận xét Thư ký
  const [selectedProjectForComment, setSelectedProjectForComment] = useState(null)
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

  // Quản lý Chế độ Giao diện Dual Theme (Mặc định mở web là Light Mode, Dark Mode là tùy chọn)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('hv_kaizen_theme') || 'light';
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hv_kaizen_theme', theme);
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }

  // Tải dữ liệu từ Google Apps Script
  const fetchData = async () => {
    if (!apiUrl) return;
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (parseErr) {
        console.info('Google Sheets chưa trả về JSON (có thể do quyền chia sẻ hoặc chế độ offline). Duy trì dữ liệu chuẩn hóa.');
        return;
      }
      if (data && data.status === 'success') {
        const rawScores = data.data || [];
        setRawScoreRows(rawScores);

        const cfgProjects = data.projects || [];
        const cfgJudges = data.judges || [];
        setAppConfig({ projects: cfgProjects, judges: cfgJudges });

        const grouped = {};
        rawScores.forEach(row => {
          const id = row.maDeTai;
          if (!grouped[id]) {
            grouped[id] = { 
              ...row, 
              count: 0, 
              sumTotal: 0, 
              sumP1: 0, 
              sumP2: 0, 
              sumP3: 0, 
              sumP4: 0, 
              sumP5: 0 
            };
          }
          grouped[id].count += 1;
          grouped[id].sumTotal += Number(row.tongDiem) || 0;
          grouped[id].sumP1 += Number(row.phan1) || 0;
          grouped[id].sumP2 += Number(row.phan2) || 0;
          grouped[id].sumP3 += Number(row.phan3) || 0;
          grouped[id].sumP4 += Number(row.phan4) || 0;
          grouped[id].sumP5 += Number(row.phan5) || 0;
        });

        // Kết hợp danh sách đề tài từ cấu hình sheets với initial data
        const baseProjects = cfgProjects.length > 0 ? cfgProjects : INITIAL_KAIZEN_PROJECTS;
        
        const fullList = baseProjects.map(p => {
          const scoreGroup = grouped[p.maDeTai];
          if (scoreGroup && scoreGroup.count > 0) {
            const avgTotal = Math.round((scoreGroup.sumTotal / scoreGroup.count) * 10) / 10;
            return {
              ...p,
              ...scoreGroup,
              tongDiem: avgTotal,
              phan1: Math.round((scoreGroup.sumP1 / scoreGroup.count) * 10) / 10,
              phan2: Math.round((scoreGroup.sumP2 / scoreGroup.count) * 10) / 10,
              phan3: Math.round((scoreGroup.sumP3 / scoreGroup.count) * 10) / 10,
              phan4: Math.round((scoreGroup.sumP4 / scoreGroup.count) * 10) / 10,
              phan5: Math.round((scoreGroup.sumP5 / scoreGroup.count) * 10) / 10,
              count: scoreGroup.count,
              hasScore: true
            };
          } else {
            return {
              ...p,
              tongDiem: 0,
              phan1: '—',
              phan2: '—',
              phan3: '—',
              phan4: '—',
              phan5: '—',
              xepLoai: 'Chờ chấm',
              count: 0,
              hasScore: false
            };
          }
        });

        // Đảm bảo những đề tài trong rawScores chưa có trong base cũng xuất hiện
        Object.values(grouped).forEach(sg => {
          if (!fullList.some(p => p.maDeTai === sg.maDeTai)) {
            const avgTotal = Math.round((sg.sumTotal / sg.count) * 10) / 10;
            fullList.push({
              ...sg,
              tongDiem: avgTotal,
              phan1: Math.round((sg.sumP1 / sg.count) * 10) / 10,
              phan2: Math.round((sg.sumP2 / sg.count) * 10) / 10,
              phan3: Math.round((sg.sumP3 / sg.count) * 10) / 10,
              phan4: Math.round((sg.sumP4 / sg.count) * 10) / 10,
              phan5: Math.round((sg.sumP5 / sg.count) * 10) / 10,
              count: sg.count,
              hasScore: true
            });
          }
        });

        const sorted = fullList.sort((a, b) => {
          if (a.hasScore && b.hasScore) return Number(b.tongDiem) - Number(a.tongDiem);
          if (a.hasScore && !b.hasScore) return -1;
          if (!a.hasScore && b.hasScore) return 1;
          return (a.maDeTai || '').localeCompare(b.maDeTai || '');
        });

        setRankingData(sorted);

        if (data.comments) {
          setCommentsMap(data.comments);
        }
      }
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu từ máy chủ:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  // Hợp nhất dữ liệu hiển thị Showcase
  const showcaseProjects = useMemo(() => {
    return INITIAL_KAIZEN_PROJECTS.map(initProj => {
      const liveRank = rankingData.find(r => r.maDeTai === initProj.maDeTai);
      if (liveRank) {
        return { ...initProj, ...liveRank };
      }
      return initProj;
    });
  }, [rankingData]);

  // Map điểm để showcase tra cứu nhanh
  const rankingScoresMap = useMemo(() => {
    const map = {};
    rankingData.forEach(item => {
      map[item.maDeTai] = item;
    });
    return map;
  }, [rankingData]);

  // Thống kê số liệu Live Counters
  const totalProjectsCount = useMemo(() => {
    return Math.max(showcaseProjects.length, rankingData.length);
  }, [showcaseProjects, rankingData]);

  const totalDepartmentsCount = useMemo(() => {
    const depts = new Set();
    showcaseProjects.forEach(p => {
      if (p.khoaPhong) depts.add(p.khoaPhong);
      if (p.khoaPhoiHop) depts.add(p.khoaPhoiHop);
    });
    rankingData.forEach(p => {
      if (p.khoaPhong) depts.add(p.khoaPhong);
      if (p.khoaPhoiHop) depts.add(p.khoaPhoiHop);
    });
    return depts.size;
  }, [showcaseProjects, rankingData]);

  const topScoreValue = useMemo(() => {
    const scoredList = rankingData.filter(r => r.hasScore && Number(r.tongDiem) > 0);
    if (scoredList.length === 0) return 0;
    return Math.max(...scoredList.map(r => Number(r.tongDiem)));
  }, [rankingData]);

  // Mở modal A3 chi tiết
  const handleOpenA3Modal = (project) => {
    setSelectedProjectForA3(project);
    setIsA3ModalOpen(true);
  };

  // Xử lý lưu điểm trực tiếp từ Giám khảo trong Modal chi tiết đề án
  const handleSaveDirectScore = (scoreData) => {
    const { maDeTai, giamKhao, scores, tongDiem, xepLoai, nhanXet } = scoreData;

    // 1. Lưu điểm vào localStorage để duy trì trạng thái vĩnh viễn
    try {
      const localScores = JSON.parse(localStorage.getItem('hv_kaizen_local_scores') || '{}');
      localScores[maDeTai] = {
        tongDiem,
        phan1: scores.p1,
        phan2: scores.p2,
        phan3: scores.p3,
        phan4: scores.p4,
        phan5: scores.p5,
        xepLoai,
        giamKhao,
        nhanXet,
        count: (localScores[maDeTai]?.count || 0) + 1,
        hasScore: true,
        status: 'evaluated',
        thoiGianCham: new Date().toLocaleTimeString('vi-VN') + ' ' + new Date().toLocaleDateString('vi-VN')
      };
      localStorage.setItem('hv_kaizen_local_scores', JSON.stringify(localScores));
    } catch (err) {
      console.warn('Lỗi khi lưu điểm vào localStorage:', err);
    }

    // 2. Cập nhật state rankingData ngay tức thì
    setRankingData(prevList => {
      return prevList.map(p => {
        if (p.maDeTai === maDeTai) {
          return {
            ...p,
            tongDiem,
            phan1: scores.p1,
            phan2: scores.p2,
            phan3: scores.p3,
            phan4: scores.p4,
            phan5: scores.p5,
            xepLoai,
            giamKhao,
            nhanXet,
            count: (p.count || 0) + 1,
            hasScore: true,
            status: 'evaluated'
          };
        }
        return p;
      });
    });

    // 3. Cập nhật selectedProjectForA3 để modal hiển thị trạng thái mới
    setSelectedProjectForA3(prev => {
      if (prev && prev.maDeTai === maDeTai) {
        return {
          ...prev,
          tongDiem,
          phan1: scores.p1,
          phan2: scores.p2,
          phan3: scores.p3,
          phan4: scores.p4,
          phan5: scores.p5,
          xepLoai,
          giamKhao,
          nhanXet,
          hasScore: true,
          status: 'evaluated'
        };
      }
      return prev;
    });

    // 4. Đồng bộ Google Sheets nếu có apiUrl
    if (apiUrl) {
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'saveScore',
          maDeTai,
          giamKhao,
          tongDiem,
          phan1: scores.p1,
          phan2: scores.p2,
          phan3: scores.p3,
          phan4: scores.p4,
          phan5: scores.p5,
          xepLoai,
          nhanXet
        })
      }).catch(err => {
        console.info('Ghi nhận điểm offline (đã lưu bộ nhớ cục bộ):', err);
      });
    }
  };

  // Mở modal nhận xét thư ký
  const handleOpenCommentModal = (project) => {
    setSelectedProjectForComment(project);
    setIsCommentModalOpen(true);
  };

  // Xử lý lưu nhận xét thư ký
  const handleSaveSecretaryComment = async (maDeTai, commentText) => {
    if (!apiUrl) throw new Error("Chưa cấu hình API URL");
    
    const projectInfo = rankingData.find(p => p.maDeTai === maDeTai) || 
      appConfig.projects.find(p => p.maDeTai === maDeTai) || {};

    const payload = {
      action: 'saveComment',
      maDeTai: maDeTai,
      tenDeTai: projectInfo.tenDeTai || '',
      khoaPhong: projectInfo.khoaPhong || '',
      nhanXet: commentText,
      nguoiNhap: 'Thư ký Hội đồng'
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload)
    });

    const res = await response.json();
    if (res.status === 'success') {
      setCommentsMap(prev => ({
        ...prev,
        [maDeTai]: {
          maDeTai,
          tenDeTai: projectInfo.tenDeTai || '',
          khoaPhong: projectInfo.khoaPhong || '',
          nhanXet: commentText,
          nguoiNhap: 'Thư ký Hội đồng',
          thoiGian: new Date().toLocaleTimeString('vi-VN')
        }
      }));
    } else {
      throw new Error(res.message || "Không thể lưu nhận xét");
    }
  };

  // Đăng nhập / Đăng xuất
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('hv_kaizen_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('hv_kaizen_auth');
    if (activeTab === 'score' || activeTab === 'secretary') {
      setActiveTab('home');
    }
  };

  // Tùy biến bộ font thương hiệu: Tiêu ngữ Bệnh viện & Slogan
  const BRAND_FONT_PRESETS = [
    { id: 'modern', name: 'Hiện đại & Quý phái (Montserrat + Lora)', orgClass: '', sloganClass: '' },
    { id: 'royal', name: 'Hoàng gia Cổ điển (Playfair Display + Lora)', orgClass: 'font-playfair', sloganClass: '' },
    { id: 'script', name: 'Thư pháp Nghệ thuật (Montserrat + Dancing Script)', orgClass: '', sloganClass: 'font-script' },
  ];

  return (
    <div className="app-shell">
      {/* Ambient Aurora Backdrops */}
      <div className="aurora-container">
        <div className="aurora-light-1"></div>
        <div className="aurora-light-2"></div>
      </div>

      {/* 1. FLOATING NAVIGATION DOCK */}
      <header className="nav-dock">
        <div className="brand-cluster" onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }}>
          <div className="brand-logo-badge">HV</div>
          <div className="brand-meta">
            <div className="brand-title">
              Bệnh Viện Đa Khoa Hùng Vương
              <span className="brand-tag">KAIZEN OS</span>
            </div>
            <div className="brand-sub">Hội Thi Cải Tiến Chất Lượng Bệnh Viện 2026</div>
          </div>
        </div>

        <nav className="nav-dock-tabs">
          <button 
            type="button" 
            className={`nav-dock-tab ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Trang Chủ
          </button>
          <button 
            type="button" 
            className={`nav-dock-tab ${activeTab === 'showcase' ? 'active' : ''}`}
            onClick={() => setActiveTab('showcase')}
            title="Khám phá các sản phẩm và sáng kiến cải tiến y tế"
          >
            Sản Phẩm
          </button>
          <button 
            type="button" 
            className={`nav-dock-tab ${activeTab === 'ranking' ? 'active' : ''}`}
            onClick={() => setActiveTab('ranking')}
            title="Theo dõi danh sách các đề án đang đăng ký và tiếp nhận"
          >
            Tiến Độ Tiếp Nhận
          </button>
          <button 
            type="button" 
            className={`nav-dock-tab ${activeTab === 'score' ? 'active' : ''}`}
            onClick={() => setActiveTab('score')}
            title="Dành cho Hội đồng Ban Giám khảo chấm điểm chính thức tại Vòng Chung kết"
          >
            Ban Giám Khảo
          </button>
          <button 
            type="button" 
            className={`nav-dock-tab ${activeTab === 'secretary' ? 'active' : ''}`}
            onClick={() => setActiveTab('secretary')}
          >
            Thư Ký
          </button>
        </nav>

        <div className="nav-actions">
          <div className="live-status-pill">
            <span className="live-dot"></span>
            <span>VÒNG 2 • THỰC ĐỊA ACTIVE</span>
          </div>

          <button 
            type="button" 
            className="theme-toggle-btn" 
            onClick={toggleTheme} 
            title={theme === 'light' ? "Chuyển sang Chế độ Dark Mode (LED Hội Trường)" : "Chuyển sang Chế độ Light Mode (Lâm Sàng Vô Trùng)"}
          >
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          <a 
            href="#directorySection" 
            className="btn-portal-enter"
            onClick={(e) => {
              if (activeTab !== 'home') {
                e.preventDefault();
                setActiveTab('home');
                setTimeout(() => {
                  document.getElementById('directorySection')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
          >
            <span>Khám Phá Đề Án</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          {isAuthenticated ? (
            <button type="button" className="auth-logout-pill" onClick={handleLogout} title="Đăng xuất Hội đồng">
              Đăng xuất
            </button>
          ) : (
            <button 
              type="button" 
              className="auth-login-link-subtle"
              onClick={() => setActiveTab('score')}
              title="Đăng nhập dành cho Hội đồng Ban Giám khảo"
            >
              Hội đồng
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content container mt-4 mb-4">
        {/* TAB 1: TRANG CHỦ */}
        {activeTab === 'home' && (
          <Home
            totalProjects={totalProjectsCount}
            totalDepts={totalDepartmentsCount}
            totalScores={rawScoreRows.length}
            topScore={topScoreValue}
            topProjects={rankingData}
            onNavigate={(tabName) => setActiveTab(tabName)}
            onSelectProject={handleOpenA3Modal}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        )}

        {/* TAB 2: GIỚI THIỆU SẢN PHẨM / THƯ VIỆN ĐỀ TÀI */}
        {activeTab === 'showcase' && (
          <KaizenShowcase
            projects={showcaseProjects}
            onSelectProject={handleOpenA3Modal}
            rankingScores={rankingScoresMap}
          />
        )}

        {/* TAB 3: TIẾN ĐỘ TIẾP NHẬN ĐỀ ÁN */}
        {activeTab === 'ranking' && (
          <div className="glass-panel" style={{ padding: '1.25rem 1.5rem' }}>
            <div className="ranking-top-bar screen-only" style={{ marginBottom: '1rem' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#003B73' }}>
                  Danh Mục Tiếp Nhận & Tiến Độ Đề Án Cải Tiến
                </h2>
                <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '3px' }}>
                  Theo dõi các đề án đã nộp hồ sơ và đang triển khai thử nghiệm thực địa tại Bệnh viện
                </div>
              </div>
              <div className="ranking-badge-group">
                <span className="badge" style={{ background: '#dcfce7', color: '#15803d', border: '1px solid #86efac', fontWeight: 700 }}>
                  Giai đoạn: Đăng ký & Thử nghiệm hiện trường
                </span>
              </div>
            </div>

            <RankingTable 
              data={rankingData} 
              loading={isLoading} 
              comments={commentsMap}
              onOpenCommentModal={handleOpenCommentModal}
              onSelectProject={handleOpenA3Modal}
              onRefresh={fetchData}
              onPrint={() => window.print()}
            />
          </div>
        )}

        {/* TAB 4: GIÁM KHẢO CHẤM ĐIỂM (BẢO VỆ MẬT KHẨU) */}
        {activeTab === 'score' && (
          isAuthenticated ? (
            <ScoreForm 
              apiUrl={apiUrl} 
              appConfig={appConfig} 
              onScoreSubmitted={() => setActiveTab('ranking')} 
            />
          ) : (
            <Login 
              onLoginSuccess={handleLoginSuccess}
              onCancel={() => setActiveTab('home')}
              roleTitle="Hội Đồng Đánh Giá"
            />
          )
        )}

        {/* TAB 5: BÀN THƯ KÝ (BẢO VỆ MẬT KHẨU) */}
        {activeTab === 'secretary' && (
          isAuthenticated ? (
            <SecretaryDesk
              projects={rankingData}
              rawScoreRows={rawScoreRows}
              judgesList={appConfig.judges}
              comments={commentsMap}
              onSaveComment={handleSaveSecretaryComment}
              onRefresh={fetchData}
              isLoading={isLoading}
            />
          ) : (
            <Login 
              onLoginSuccess={handleLoginSuccess}
              onCancel={() => setActiveTab('home')}
              roleTitle="Thư Ký Hội Đồng"
            />
          )
        )}
      </main>

      {/* Modal Xem Báo Cáo A3 & Chấm Điểm Ban Giám Khảo */}
      <A3DetailModal
        isOpen={isA3ModalOpen}
        onClose={() => setIsA3ModalOpen(false)}
        project={selectedProjectForA3}
        onSaveScore={handleSaveDirectScore}
        judgesList={appConfig.judges}
      />

      {/* Modal Thư Ký Nhận Xét */}
      <SecretaryModal
        isOpen={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
        project={selectedProjectForComment}
        existingComment={selectedProjectForComment ? (commentsMap[selectedProjectForComment.maDeTai]?.nhanXet || '') : ''}
        onSaveComment={handleSaveSecretaryComment}
        rawScoreRows={rawScoreRows}
      />

      {/* Khối nhận diện chân trang: Ngắn gọn, Cơ quan chủ quản, Ban tổ chức chính */}
      <footer className="hospital-footer-compact">
        <div className="container footer-compact-container">
          <div className="footer-compact-left">
            <img 
              src={logoImg} 
              alt="Logo Bệnh viện Đa khoa Hùng Vương" 
              className="footer-compact-logo" 
              onError={(e) => { e.currentTarget.src = './logo.png' }}
            />
            <div className="footer-compact-text">
              <div className="footer-line-org">
                <span className="footer-lbl">CƠ QUAN CHỦ QUẢN:</span> CÔNG TY TNHH PHÁT TRIỂN Y HỌC VIỆT — BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG
              </div>
              <div className="footer-line-btc">
                <span className="footer-lbl">BAN TỔ CHỨC CHÍNH:</span> Ban Tổ Chức Hội Thi Đề Án Cải Tiến Chất Lượng Năm 2026
                <span className="footer-sep">•</span>
                <span className="footer-focal-text">Thường trực: Phòng Kế hoạch Tổng hợp — Tổ Quản lý Chất lượng</span>
              </div>
              <div className="footer-line-sub">
                <span>Trụ sở: Thôn Phượng Hùng 1, Xã Chí Đám, Tỉnh Phú Thọ</span>
                <span className="footer-sep">•</span>
                <span>Khẩu hiệu: <em className="footer-slogan-styled">Thân thiện — Chuyên nghiệp — Chu đáo</em></span>
                <span className="footer-sep">•</span>
                <span>Hotline: 1800 9415</span>
                <span className="footer-sep">•</span>
                <span>© 2026 BVĐK Hùng Vương</span>
              </div>
            </div>
          </div>

          <div className="footer-compact-right">
            <button type="button" className="footer-quick-btn" onClick={() => setActiveTab('home')}>Trang Chủ</button>
            <button type="button" className="footer-quick-btn" onClick={() => setActiveTab('showcase')}>Thư Viện</button>
            <button type="button" className="footer-quick-btn" onClick={() => setActiveTab('ranking')}>Bảng Xếp Hạng</button>
            <button type="button" className="footer-quick-btn" onClick={() => setActiveTab('score')}>Chấm Điểm</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
