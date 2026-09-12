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
import { INITIAL_KAIZEN_PROJECTS } from './kaizenData'

function App() {
  const [activeTab, setActiveTab] = useState('home') // 'home' | 'showcase' | 'ranking' | 'score' | 'secretary'
  const [apiUrl, setApiUrl] = useState('https://script.google.com/macros/s/AKfycbyAbgu4JX4d_V-NeqGt0NSyEOmoWNHxJoU-m0MUyMEf2cT4VOZE2_PwsET4lj_ZCGqD/exec')
  const [rankingData, setRankingData] = useState([])
  const [rawScoreRows, setRawScoreRows] = useState([])
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

  // Tải dữ liệu từ Google Apps Script
  const fetchData = async () => {
    if (!apiUrl) return;
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.status === 'success') {
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
    return depts.size > 0 ? depts.size : 12;
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

  return (
    <div className="app-container">
      {/* Header Web App */}
      <header className="header">
        <div className="container header-container">
          <div className="header-brand" onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }}>
            <img 
              src={logoImg} 
              alt="Logo Bệnh viện Đa khoa Hùng Vương" 
              className="header-logo-img" 
              onError={(e) => { e.currentTarget.src = './logo.png' }}
            />
            <div className="header-text-block">
              <span className="header-org-title">BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG</span>
              <span className="header-slogan-title">Hội Thi Cải Tiến Chất Lượng Kaizen 16 Năm (2010 – 2026)</span>
            </div>
          </div>
          
          <div className="header-right-nav">
            <nav className="nav-tabs">
              <button 
                type="button"
                className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
              >
                Trang Chủ
              </button>
              <button 
                type="button"
                className={`nav-btn ${activeTab === 'showcase' ? 'active' : ''}`}
                onClick={() => setActiveTab('showcase')}
              >
                Thư Viện Đề Tài
              </button>
              <button 
                type="button"
                className={`nav-btn ${activeTab === 'ranking' ? 'active' : ''}`}
                onClick={() => setActiveTab('ranking')}
              >
                Bảng Xếp Hạng
              </button>
              <button 
                type="button"
                className={`nav-btn ${activeTab === 'score' ? 'active' : ''}`}
                onClick={() => setActiveTab('score')}
              >
                Giám Khảo
              </button>
              <button 
                type="button"
                className={`nav-btn ${activeTab === 'secretary' ? 'active' : ''}`}
                onClick={() => setActiveTab('secretary')}
              >
                Thư Ký
              </button>
            </nav>

            <div className="auth-status-box">
              {isAuthenticated ? (
                <div className="logged-in-badge">
                  <span className="auth-role">Hội đồng</span>
                  <button type="button" className="auth-logout-btn" onClick={handleLogout}>
                    Đăng xuất
                  </button>
                </div>
              ) : (
                <button 
                  type="button" 
                  className="auth-login-link"
                  onClick={() => setActiveTab('score')}
                >
                  Đăng nhập Hội đồng
                </button>
              )}
            </div>
          </div>
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
            onNavigate={(tabName) => setActiveTab(tabName)}
          />
        )}

        {/* TAB 2: THƯ VIỆN ĐỀ TÀI SHOWCASE */}
        {activeTab === 'showcase' && (
          <KaizenShowcase
            projects={showcaseProjects}
            onSelectProject={handleOpenA3Modal}
            rankingScores={rankingScoresMap}
          />
        )}

        {/* TAB 3: BẢNG XẾP HẠNG */}
        {activeTab === 'ranking' && (
          <div className="glass-panel" style={{ padding: '1.25rem 1.5rem' }}>
            <div className="ranking-top-bar screen-only">
              <h2 style={{ margin: 0, fontSize: '1.3rem', color: '#003B73' }}>
                Bảng Xếp Hạng Đề Án Cải Tiến
              </h2>
              <div className="ranking-badge-group">
                <span className="badge badge-excellent">Xuất sắc (90-100)</span>
                <span className="badge badge-good">Giỏi (80-89)</span>
                <span className="badge badge-fair">Khá (70-79)</span>
                <span className="badge badge-pass">Đạt (&lt;70)</span>
              </div>
            </div>

            <RankingTable 
              data={rankingData} 
              loading={isLoading} 
              comments={commentsMap}
              onOpenCommentModal={handleOpenCommentModal}
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
              roleTitle="Ban Giám Khảo"
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

      {/* Modal Xem Báo Cáo A3 */}
      <A3DetailModal
        isOpen={isA3ModalOpen}
        onClose={() => setIsA3ModalOpen(false)}
        project={selectedProjectForA3}
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
    </div>
  )
}

export default App
