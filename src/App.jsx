import { useState, useEffect } from 'react'
import './App.css'
import ScoreForm from './ScoreForm'
import RankingTable from './RankingTable'
import SecretaryDesk from './SecretaryDesk'
import Login from './Login'
import SecretaryModal from './SecretaryModal'
import logoImg from './assets/logo.png'

function App() {
  const [activeTab, setActiveTab] = useState('ranking') // 'score' | 'secretary' | 'ranking'
  const [apiUrl, setApiUrl] = useState('https://script.google.com/macros/s/AKfycbyAbgu4JX4d_V-NeqGt0NSyEOmoWNHxJoU-m0MUyMEf2cT4VOZE2_PwsET4lj_ZCGqD/exec')
  const [rankingData, setRankingData] = useState([])
  const [rawScoreRows, setRawScoreRows] = useState([])
  const [commentsMap, setCommentsMap] = useState({})
  const [appConfig, setAppConfig] = useState({ projects: [], judges: [] })
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [selectedProjectForComment, setSelectedProjectForComment] = useState(null)
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

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

        const allProjects = cfgProjects.length > 0 ? cfgProjects : Object.values(grouped);
        const fullList = allProjects.map(p => {
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
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (apiUrl) {
      fetchData();
    }
  }, [activeTab, apiUrl])

  const handleOpenCommentModal = (project) => {
    setSelectedProjectForComment(project);
    setIsCommentModalOpen(true);
  }

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
  }

  if (!isAuthenticated) {
    return (
      <Login onLoginSuccess={(status) => setIsAuthenticated(status)} />
    )
  }

  return (
    <div className="app-container">
      {/* Header Web App */}
      <header className="header">
        <div className="container header-container">
          <div className="header-brand">
            <img 
              src={logoImg} 
              alt="Logo Bệnh viện Đa khoa Hùng Vương" 
              className="header-logo-img" 
              onError={(e) => { e.currentTarget.src = './logo.png' }}
            />
            <div className="header-text-block">
              <span className="header-org-title">BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG</span>
              <span className="header-slogan-title">"Đột phá chất lượng - Vận hành an toàn"</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <nav className="nav-tabs">
              <button 
                className={`nav-btn ${activeTab === 'score' ? 'active' : ''}`}
                onClick={() => setActiveTab('score')}
              >
                <span>✍️ Giám Khảo</span>
              </button>
              <button 
                className={`nav-btn ${activeTab === 'secretary' ? 'active' : ''}`}
                onClick={() => setActiveTab('secretary')}
              >
                <span>📋 Thư Ký</span>
              </button>
              <button 
                className={`nav-btn ${activeTab === 'ranking' ? 'active' : ''}`}
                onClick={() => setActiveTab('ranking')}
              >
                <span>📊 Xếp Hạng</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="main-content container mt-4 mb-4">
        {activeTab === 'score' && (
          <ScoreForm 
            apiUrl={apiUrl} 
            appConfig={appConfig} 
            onScoreSubmitted={() => setActiveTab('ranking')} 
          />
        )}

        {activeTab === 'secretary' && (
          <SecretaryDesk
            projects={rankingData}
            rawScoreRows={rawScoreRows}
            judgesList={appConfig.judges}
            comments={commentsMap}
            onSaveComment={handleSaveSecretaryComment}
            onRefresh={fetchData}
            isLoading={isLoading}
          />
        )}

        {activeTab === 'ranking' && (
          <div className="glass-panel" style={{padding: '1rem 1.25rem'}}>
            <div className="ranking-top-bar screen-only">
              <h2 style={{margin: 0, fontSize: '1.25rem', whiteSpace: 'nowrap'}}>Bảng Xếp Hạng</h2>
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
      </main>

      {/* Modal Thư Ký */}
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
