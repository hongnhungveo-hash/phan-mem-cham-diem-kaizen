import React, { useState, useEffect } from 'react';
import './A3DetailModal.css';
import { getCleanLeaderName } from './kaizenData';

export default function A3DetailModal({ project, isOpen, onClose, onSaveScore, judgesList = [] }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'a3' | 'appraisal' | 'timeline' | 'documents' | 'scoring' | 'discussion'
  const [commentsList, setCommentsList] = useState([]);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newComment, setNewComment] = useState('');

  // Trạng thái chấm điểm trực tiếp
  const [judgeName, setJudgeName] = useState('');
  const [scoreP1, setScoreP1] = useState(13); // Tính cấp thiết (max 15)
  const [scoreP2, setScoreP2] = useState(22); // Phương pháp luận (max 25)
  const [scoreP3, setScoreP3] = useState(30); // Hiệu quả thực tế (max 35)
  const [scoreP4, setScoreP4] = useState(13); // Tính ứng dụng SOP (max 15)
  const [scoreP5, setScoreP5] = useState(9);  // Kỹ năng trình bày (max 10)
  const [judgeComment, setJudgeComment] = useState('');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');
  const [localEvaluated, setLocalEvaluated] = useState(false);
  const [currentScoreVal, setCurrentScoreVal] = useState(0);
  const [currentRankVal, setCurrentRankVal] = useState('');

  useEffect(() => {
    if (project) {
      setActiveTab('overview');
      setSaveSuccessMsg('');
      
      // Đọc trạng thái điểm hiện tại
      const hasScore = project.hasScore || (project.tongDiem && Number(project.tongDiem) > 0);
      setLocalEvaluated(hasScore);
      const score = hasScore ? Number(project.tongDiem) : (project.tongDiemThamDinh || 85);
      setCurrentScoreVal(score);
      setCurrentRankVal(project.xepLoai || (score >= 90 ? 'Xuất sắc' : (score >= 80 ? 'Giỏi' : 'Khá')));

      // Phân bổ điểm mặc định vào form
      if (project.phan1 && project.phan1 !== '—') {
        setScoreP1(Number(project.phan1));
        setScoreP2(Number(project.phan2));
        setScoreP3(Number(project.phan3));
        setScoreP4(Number(project.phan4));
        setScoreP5(Number(project.phan5));
      } else {
        const s = score;
        setScoreP1(Math.round(s * 0.15 * 10) / 10);
        setScoreP2(Math.round(s * 0.25 * 10) / 10);
        setScoreP3(Math.round(s * 0.35 * 10) / 10);
        setScoreP4(Math.round(s * 0.15 * 10) / 10);
        setScoreP5(Math.round((s - (s * 0.15) - (s * 0.25) - (s * 0.35) - (s * 0.15)) * 10) / 10);
      }

      // Giám khảo mặc định
      const savedJudge = sessionStorage.getItem('hv_current_judge');
      if (savedJudge) {
        setJudgeName(savedJudge);
      } else if (judgesList && judgesList.length > 0) {
        setJudgeName(judgesList[0].hoTen || judgesList[0]);
      } else {
        setJudgeName('Thành viên Ban Giám Khảo');
      }

      // Đọc thảo luận
      try {
        const storageKey = `hv_kaizen_discussion_${project.maDeTai}`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          setCommentsList(JSON.parse(saved));
        } else {
          setCommentsList(project.communityDiscussions || []);
        }
      } catch {
        setCommentsList(project.communityDiscussions || []);
      }
    }
  }, [project, judgesList]);

  if (!isOpen || !project) return null;

  const a3 = project.a3Report || {};
  const qs = project.quickSummary || {};
  const authors = project.authorsDetailed || [];
  const timeline = project.timeline || [];
  const fiveWhys = project.fiveWhys || [];
  const docs = project.documents || [];
  const criteria = project.criteria || [];
  const mucTieu = project.mucTieu || [];
  const soLieuBanDau = project.soLieuBanDau || [];
  const giaiPhap = project.giaiPhap || [];

  // Tính tổng điểm form
  const totalScoreCalc = Math.round((Number(scoreP1) + Number(scoreP2) + Number(scoreP3) + Number(scoreP4) + Number(scoreP5)) * 10) / 10;
  const calcRank = totalScoreCalc >= 90 ? 'Xuất sắc' : (totalScoreCalc >= 80 ? 'Giỏi' : (totalScoreCalc >= 70 ? 'Khá' : (totalScoreCalc >= 50 ? 'Đạt' : 'Chưa đạt')));

  const handlePrint = () => {
    window.print();
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !newAuthor.trim()) return;

    const item = {
      id: Date.now(),
      author: newAuthor.trim(),
      role: newRole.trim() || 'Nhân viên Y tế',
      time: new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      content: newComment.trim()
    };

    const updated = [item, ...commentsList];
    setCommentsList(updated);
    try {
      localStorage.setItem(`hv_kaizen_discussion_${project.maDeTai}`, JSON.stringify(updated));
    } catch (err) {
      console.warn('Cannot save discussion to local storage', err);
    }
    setNewAuthor('');
    setNewRole('');
    setNewComment('');
  };

  const handleSubmitScore = (e) => {
    e.preventDefault();
    if (!judgeName.trim()) {
      alert('Vui lòng chọn hoặc nhập tên Giám khảo chấm điểm!');
      return;
    }

    const payload = {
      maDeTai: project.maDeTai,
      giamKhao: judgeName.trim(),
      scores: {
        p1: Number(scoreP1),
        p2: Number(scoreP2),
        p3: Number(scoreP3),
        p4: Number(scoreP4),
        p5: Number(scoreP5)
      },
      tongDiem: totalScoreCalc,
      xepLoai: calcRank,
      nhanXet: judgeComment.trim()
    };

    if (onSaveScore) {
      onSaveScore(payload);
    }

    // Cập nhật trạng thái cục bộ ngay trong modal
    setLocalEvaluated(true);
    setCurrentScoreVal(totalScoreCalc);
    setCurrentRankVal(calcRank);
    setSaveSuccessMsg(`✓ Đã lưu kết quả chấm điểm thành công! Điểm: ${totalScoreCalc}/100 (${calcRank}). Trạng thái đề án đã được cập nhật.`);
  };

  return (
    <div className="a3-modal-overlay" onClick={onClose}>
      <div className="a3-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* THANH TIÊU ĐỀ: TÊN SẢN PHẨM, TRẠNG THÁI & NÚT CHẤM ĐIỂM TRỰC TIẾP */}
        <div className="a3-unified-header screen-only">
          <div className="unified-top-bar">
            {/* Cột trái: Tên sản phẩm, đơn vị phụ trách & trạng thái */}
            <div className="unified-info-col">
              <div className="unified-title-row">
                <h2 className="unified-project-title">
                  {project.tenSanPham || project.tenDeTai}
                </h2>
                {localEvaluated ? (
                  <span className="modal-status-pill scored">
                    ✓ Đã Chấm Điểm: {currentScoreVal}/100 ({currentRankVal})
                  </span>
                ) : (
                  <span className="modal-status-pill testing">
                    ⏳ Đang Thử Nghiệm Thực Địa
                  </span>
                )}
              </div>
              <div className="unified-sub-meta">
                <span>Mã đề án: <strong>{project.maDeTai}</strong></span>
                <span className="meta-dot">•</span>
                <span>Đơn vị: <strong>{project.khoaPhong}{project.khoaPhoiHop ? ` / ${project.khoaPhoiHop}` : ''}</strong></span>
                <span className="meta-dot">•</span>
                <span>Chủ nhiệm: <strong>{getCleanLeaderName(project)}</strong></span>
              </div>
            </div>

            {/* Cột phải: Nút Chấm Điểm & Nút Đóng */}
            <div className="unified-action-col">
              <button 
                type="button" 
                className={`modal-score-btn ${activeTab === 'scoring' ? 'active' : ''}`}
                onClick={() => setActiveTab('scoring')}
                title="Mở phiếu chấm điểm đề án cho Giám khảo"
              >
                ⭐ {localEvaluated ? 'Sửa Điểm Đề Án' : 'Chấm Điểm Đề Án'}
              </button>
              <button 
                type="button" 
                className="a3-close-btn" 
                onClick={onClose}
                title="Đóng cửa sổ"
              >
                ✕
              </button>
            </div>
          </div>

          {/* DÒNG TABS CHUYỂN ĐỔI GIAO DIỆN */}
          <div className="unified-nav-tabs">
            <button 
              type="button" 
              className={`unified-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Giới Thiệu Sản Phẩm
            </button>
            <button 
              type="button" 
              className={`unified-tab-btn ${activeTab === 'a3' ? 'active' : ''}`}
              onClick={() => setActiveTab('a3')}
            >
              Báo Cáo A3 (PDCA)
            </button>
            <button 
              type="button" 
              className={`unified-tab-btn ${activeTab === 'appraisal' ? 'active' : ''}`}
              onClick={() => setActiveTab('appraisal')}
            >
              Biên Bản Thẩm Định QLCL
            </button>
            <button 
              type="button" 
              className={`unified-tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
              onClick={() => setActiveTab('timeline')}
            >
              Tiến Độ Triển Khai
            </button>
            <button 
              type="button" 
              className={`unified-tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
              onClick={() => setActiveTab('documents')}
            >
              Hồ Sơ Đăng Ký ({docs.length})
            </button>
            <button 
              type="button" 
              className={`unified-tab-btn scoring-tab-btn ${activeTab === 'scoring' ? 'active' : ''}`}
              onClick={() => setActiveTab('scoring')}
            >
              ⭐ Chấm Điểm Giám Khảo
            </button>
            <button 
              type="button" 
              className={`unified-tab-btn ${activeTab === 'discussion' ? 'active' : ''}`}
              onClick={() => setActiveTab('discussion')}
            >
              Góp Ý ({commentsList.length})
            </button>
          </div>
        </div>

        {/* THÂN MODAL CUỘN ĐƯỢC */}
        <div className="modal-scroll-body screen-only">
          {/* TAB 1: GIỚI THIỆU SẢN PHẨM */}
          {activeTab === 'overview' && (
            <div className="tab-pane overview-pane">
              <div className="overview-dashboard-grid">
                {/* CỘT TRÁI: Ý TƯỞNG & BẤT CẬP / GIẢI PHÁP ĐẦY ĐỦ */}
                <div className="overview-main-col">
                  {/* KHỐI 1: Ý TƯỞNG CỐT LÕI */}
                  <div className="idea-banner-card">
                    <div className="idea-badge">TÊN ĐỀ ÁN CHUẨN HÓA</div>
                    <h3 className="idea-full-title">{project.tenDeTai}</h3>
                    <p className="idea-text">{project.thucTrang || qs.idea}</p>
                  </div>

                  {/* KHỐI 2: SO SÁNH HIỆN TRẠNG & GIẢI PHÁP ĐẦY ĐỦ */}
                  <div className="quick-compare-grid">
                    <div className="quick-card pain-box">
                      <div className="box-tag red-tag">ĐIỂM NGHẼN & SỐ LIỆU BAN ĐẦU</div>
                      <ul className="quick-list">
                        {soLieuBanDau.length > 0 ? (
                          soLieuBanDau.map((pt, idx) => (
                            <li key={idx}>
                              <span className="bullet-dot red-dot"></span>
                              <span>{pt}</span>
                            </li>
                          ))
                        ) : (
                          <li>
                            <span className="bullet-dot red-dot"></span>
                            <span>{project.thucTrang}</span>
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="quick-card solution-box">
                      <div className="box-tag green-tag">CÁC GIẢI PHÁP TRỌNG TÂM</div>
                      <ul className="quick-list">
                        {giaiPhap.length > 0 ? (
                          giaiPhap.map((sol, idx) => (
                            <li key={idx}>
                              <span className="bullet-dot green-dot"></span>
                              <span>{sol}</span>
                            </li>
                          ))
                        ) : (
                          <li>
                            <span className="bullet-dot green-dot"></span>
                            <span>Thiết kế giải pháp chuẩn hóa quy trình và kiểm soát an toàn.</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CỘT PHẢI: KẾT QUẢ ĐO LƯỜNG, TÁC GIẢ & HÀNH ĐỘNG */}
                <div className="overview-side-col">
                  {/* KHỐI 3: KẾT QUẢ ĐO LƯỜNG NỔI BẬT */}
                  <div className="metrics-showcase-section">
                    <div className="section-mini-title">CHỈ TIÊU CAM KẾT ĐẾN 22/09/2026</div>
                    <div className="metrics-cards-grid-2x2">
                      {qs.keyMetrics && qs.keyMetrics.map((km, idx) => (
                        <div key={idx} className="metric-badge-item">
                          <div className="metric-item-name">{km.label}</div>
                          <div className="metric-compare-line">
                            <span className="val-before">{km.before}</span>
                            <span className="val-arrow">→</span>
                            <span className="val-after">{km.after}</span>
                          </div>
                          <div className="metric-item-note">{km.note}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* KHỐI 4: NHÓM TÁC GIẢ THỰC HIỆN */}
                  <div className="authors-simple-box">
                    <div className="section-mini-title">NHÓM TÁC GIẢ THỰC HIỆN ({authors.length} thành viên)</div>
                    <div className="authors-simple-flex">
                      {authors.map((auth, idx) => (
                        <div key={idx} className="author-pill-item">
                          <span className="author-role-tag">{idx === 0 ? 'Chủ nhiệm:' : 'Thành viên:'}</span>
                          <strong className="author-full-name">{auth.hoTen || auth.name}</strong>
                          <span className="author-dept-text">({auth.chucVu || auth.title})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="tab-switch-hint">
                    Ban Giám khảo vừa đọc đề án vừa chấm điểm:
                    <button type="button" className="inline-tab-link score-link" onClick={() => setActiveTab('scoring')}>
                      ⭐ Chấm điểm ngay →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BÁO CÁO A3 CHUẨN PDCA */}
          {activeTab === 'a3' && (
            <div className="tab-pane a3-pane">
              <div className="a3-pane-toolbar">
                <span className="toolbar-info">Bản tóm lược 1 trang A3 chuẩn theo chu trình PDCA y tế:</span>
                <div className="a3-toolbar-actions">
                  <button type="button" className="btn btn-warning btn-sm" onClick={() => setActiveTab('scoring')}>
                    ⭐ Mở Bảng Chấm Điểm
                  </button>
                  <button type="button" className="btn btn-primary btn-sm" onClick={handlePrint}>
                    Xuất Bản & In A3 Chuẩn Nghị Định 30
                  </button>
                </div>
              </div>

              <div className="a3-screen-grid">
                {/* CỘT TRÁI A3: PLAN (1 - 4) */}
                <div className="a3-screen-col">
                  <div className="a3-card">
                    <div className="a3-card-title">1. Bối Cảnh & Vấn Đề Cần Cải Tiến</div>
                    <p className="a3-card-text">{project.thucTrang || a3.background}</p>
                  </div>

                  <div className="a3-card">
                    <div className="a3-card-title">2. Số Liệu Đo Lường Hiện Trạng (02 Tuần)</div>
                    {soLieuBanDau.length > 0 ? (
                      <ul className="a3-bullet-list">
                        {soLieuBanDau.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="a3-card-text">{a3.baselineData}</p>
                    )}
                  </div>

                  <div className="a3-card">
                    <div className="a3-card-title">3. Phân Tích 5 Tầng Tại Sao (5 Whys) Tìm Lỗi Hệ Thống</div>
                    <div className="five-whys-list">
                      {fiveWhys.map((w, idx) => (
                        <div key={idx} className="why-row">
                          <span className="why-tag">{w.level}</span>
                          <div className="why-content">
                            <div className="why-q">{w.question}</div>
                            <div className="why-a">→ {w.answer}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="a3-card">
                    <div className="a3-card-title">4. Mục Tiêu Cam Kết SMART Lượng Hóa Cụ Thể</div>
                    {mucTieu.length > 0 ? (
                      <table className="a3-mini-table">
                        <thead>
                          <tr>
                            <th>Chỉ tiêu định lượng</th>
                            <th>Hiện trạng</th>
                            <th>Mục tiêu</th>
                            <th>Phương pháp</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mucTieu.map((m, idx) => (
                            <tr key={idx}>
                              <td><strong>{m.chiTieu}</strong></td>
                              <td>{m.hienTrang}</td>
                              <td className="text-highlight"><strong>{m.mucTieu}</strong></td>
                              <td>{m.phuongPhap}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p className="a3-card-text">{a3.smartGoal}</p>
                    )}
                  </div>
                </div>

                {/* CỘT PHẢI A3: DO - CHECK - ACT (5 - 7) */}
                <div className="a3-screen-col">
                  <div className="a3-card">
                    <div className="a3-card-title">5. Các Giải Pháp Trọng Tâm Đang Triển Khai</div>
                    {giaiPhap.length > 0 ? (
                      <ul className="a3-bullet-list solutions-list">
                        {giaiPhap.map((g, idx) => (
                          <li key={idx}>
                            <span className="sol-index">0{idx + 1}</span>
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="a3-card-text" style={{ whiteSpace: 'pre-line' }}>{a3.countermeasures}</p>
                    )}
                  </div>

                  <div className="a3-card">
                    <div className="a3-card-title">6. Phạm Vi & Kế Hoạch Triển Khai Thử Nghiệm</div>
                    <div className="implementation-box">
                      <div className="impl-row">
                        <strong>Địa bàn thực nghiệm:</strong> {project.phamVi || project.khoaPhong}
                      </div>
                      <div className="impl-row">
                        <strong>Lộ trình thời gian:</strong> {project.thoiGian}
                      </div>
                      <div className="impl-row">
                        <strong>Sản phẩm nghiệm thu:</strong> {project.sanPhamDauRa}
                      </div>
                    </div>
                  </div>

                  <div className="a3-card">
                    <div className="a3-card-title">7. Chuẩn Hóa Quy Trình SOP & Nhân Rộng</div>
                    <p className="a3-card-text"><strong>Chuẩn hóa:</strong> {a3.standardization}</p>
                    <p className="a3-card-text mt-2"><strong>Bài học kinh nghiệm:</strong> {a3.lessonsLearned}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BIÊN BẢN THẨM ĐỊNH QLCL (GATE 1) */}
          {activeTab === 'appraisal' && (
            <div className="tab-pane appraisal-pane">
              <div className="appraisal-official-sheet">
                {/* Header văn bản hành chính NĐ 30 */}
                <div className="appraisal-header-grid">
                  <div className="appraisal-header-left">
                    <div>CÔNG TY TNHH PHÁT TRIỂN Y HỌC VIỆT</div>
                    <div><strong>BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG</strong></div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#003B73' }}>
                      PHÒNG KẾ HOẠCH TỔNG HỢP — TỔ QUẢN LÝ CHẤT LƯỢNG
                    </div>
                    <div className="appraisal-number">{project.soHieuVanBan || 'Số: 16/TB-QLCL-KAIZEN'}</div>
                  </div>
                  <div className="appraisal-header-right">
                    <div><strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong></div>
                    <div><strong>Độc lập – Tự do – Hạnh phúc</strong></div>
                    <div className="appraisal-date">Chí Đám, ngày 05 tháng 09 năm 2026</div>
                  </div>
                </div>

                <div className="appraisal-title-block">
                  <h3 className="appraisal-title">THÔNG BÁO KẾT QUẢ THẨM ĐỊNH SƠ BỘ VÀ PHÊ DUYỆT ĐỀ CƯƠNG A3</h3>
                  <div className="appraisal-subject">
                    V/v Phê duyệt Triển khai Thực nghiệm Đề án: “{project.tenDeTai}”
                  </div>
                </div>

                {/* Bảng 5 tiêu chí thẩm định */}
                <div className="appraisal-table-wrap">
                  <table className="appraisal-table">
                    <thead>
                      <tr>
                        <th style={{ width: '45px', textAlign: 'center' }}>STT</th>
                        <th>Tiêu chí đánh giá chuyên môn (QĐ 2351/QĐ-BVHV)</th>
                        <th style={{ width: '110px', textAlign: 'center' }}>Điểm đạt</th>
                        <th>Nhận xét của Tổ Thẩm định QLCL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {criteria.map((c, idx) => (
                        <tr key={idx}>
                          <td style={{ textAlign: 'center', fontWeight: 700 }}>{c.stt || idx + 1}</td>
                          <td><strong>{c.tieuChi}</strong></td>
                          <td style={{ textAlign: 'center', fontWeight: 800, color: '#003B73' }}>{c.diem}</td>
                          <td>{c.nhanXet}</td>
                        </tr>
                      ))}
                      <tr className="appraisal-total-row">
                        <td colSpan="2" style={{ textAlign: 'right', fontWeight: 800 }}>TỔNG ĐIỂM ĐÁNH GIÁ THẨM ĐỊNH:</td>
                        <td style={{ textAlign: 'center', fontWeight: 900, color: '#16a34a', fontSize: '1.1rem' }}>
                          {project.tongDiemThamDinh || 85} / 100
                        </td>
                        <td style={{ fontWeight: 800, color: '#15803d' }}>
                          XẾP LOẠI: {project.xepLoaiThamDinh || 'ĐẠT LOẠI A (PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM)'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Kết luận và chữ ký */}
                <div className="appraisal-conclusion-box">
                  <div className="appraisal-sec-title">KẾT LUẬN VÀ HƯỚNG DẪN TRIỂN KHAI THỰC NGHIỆM:</div>
                  <div className="appraisal-conclusion-text" style={{ whiteSpace: 'pre-line' }}>
                    {project.ketLuanQLCL || 'Phê duyệt Đề cương A3 cho nhóm tác giả để chính thức triển khai thử nghiệm thực địa.'}
                  </div>
                </div>

                <div className="appraisal-sign-row">
                  <div className="sign-col-left">
                    <strong>Nơi nhận:</strong><br />
                    - Ban Giám đốc (để b/c);<br />
                    - Lãnh đạo {project.khoaPhong} (để t/h);<br />
                    - Nhóm tác giả {project.tacGia};<br />
                    - Lưu: VT, KHTH (QLCL).
                  </div>
                  <div className="sign-col-right">
                    <div style={{ textTransform: 'uppercase', fontWeight: 700 }}>TỔ TRƯỞNG TỔ QLCL</div>
                    <div style={{ fontStyle: 'italic', color: '#64748b', margin: '0.35rem 0 2.5rem 0' }}>(Đã ký)</div>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#003B73' }}>Trần Đình Vũ</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TIẾN ĐỘ & THEO DÕI DỰ ÁN */}
          {activeTab === 'timeline' && (
            <div className="tab-pane timeline-pane">
              <div className="timeline-header-card">
                <div className="progress-overview">
                  <div className="progress-text-row">
                    <span className="progress-title">Giai Đoạn Triển Khai Thực Nghiệm</span>
                    <span className="progress-pct">Vòng 2: Đang thử nghiệm thực địa</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: '65%' }}></div>
                  </div>
                  <p className="progress-current-status">
                    <strong>Tình trạng hiện tại:</strong> Nhóm tác giả đang triển khai thử nghiệm tại {project.phamVi || project.khoaPhong} ({project.thoiGian}).
                  </p>
                </div>
              </div>

              <div className="roadmap-stepper">
                {timeline.map((step, idx) => {
                  const isDone = step.status === 'completed';
                  const isCurrent = step.status === 'active' || step.status === 'in_progress';
                  return (
                    <div key={idx} className={`roadmap-step ${step.status}`}>
                      <div className="step-marker">
                        {isDone ? '✓' : idx + 1}
                      </div>
                      <div className="step-body">
                        <div className="step-meta">
                          <span className="step-phase">{step.phase}</span>
                          <span className="step-date">{step.time || step.date}</span>
                          <span className={`step-badge badge-${step.status}`}>
                            {isDone ? 'Đã Hoàn Thành' : (isCurrent ? 'Đang Thực Hiện' : 'Kế Hoạch')}
                          </span>
                        </div>
                        <p className="step-note">{step.task || step.note}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: HỒ SƠ ĐĂNG KÝ & MINH CHỨNG */}
          {activeTab === 'documents' && (
            <div className="tab-pane docs-pane">
              <div className="docs-intro-box">
                <div className="docs-intro-title">Hồ Sơ Đề Án Đã Nạp ({docs.length} tệp tài liệu)</div>
                <p className="docs-intro-desc">
                  Toàn bộ tài liệu đăng ký, đề cương A3, biên bản thẩm định và dữ liệu khảo sát gốc được lưu trữ tại thư mục chuyên môn của đơn vị.
                </p>
              </div>

              <div className="docs-grid">
                {docs.map((doc, idx) => {
                  const isMd = doc.fileName ? doc.fileName.endsWith('.md') : true;
                  const isXlsx = doc.fileName ? doc.fileName.endsWith('.xlsx') : false;
                  const ext = isXlsx ? 'XLSX' : (isMd ? 'MD' : 'FILE');
                  return (
                    <div key={idx} className="doc-item-card">
                      <div className={`doc-type-badge type-${ext.toLowerCase()}`}>
                        {ext}
                      </div>
                      <div className="doc-details">
                        <h4 className="doc-name">{doc.label || doc.name || doc.fileName}</h4>
                        <div className="doc-meta-row">
                          <span className="doc-badge">{ext}</span>
                          <span className="doc-filename">{doc.fileName || doc.name}</span>
                          {doc.size && (
                            <span className="doc-size">({Math.round(doc.size / 1024)} KB)</span>
                          )}
                        </div>
                        <p className="doc-desc">Hồ sơ chính thức được tiếp nhận và số hóa trên nền tảng Quản lý Chất lượng BVĐK Hùng Vương.</p>
                      </div>
                      <div className="doc-action">
                        <span className="doc-stored-tag">Đã Lưu Trữ</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 6: CHẤM ĐIỂM GIÁM KHẢO TRỰC TIẾP */}
          {activeTab === 'scoring' && (
            <div className="tab-pane scoring-pane">
              <div className="scoring-sheet-card">
                <div className="scoring-header-bar">
                  <div>
                    <h3 className="scoring-sheet-title">Phiếu Chấm Điểm Đề Án Cải Tiến — Ban Giám Khảo</h3>
                    <div className="scoring-project-brief">
                      <strong>{project.maDeTai}</strong>: {project.tenDeTai} ({project.khoaPhong})
                    </div>
                  </div>
                  <div className="live-score-badge-box">
                    <div className="live-score-label">TỔNG ĐIỂM TỰ ĐỘNG</div>
                    <div className="live-score-number">{totalScoreCalc} / 100</div>
                    <div className="live-score-rank">Xếp loại: <strong>{calcRank}</strong></div>
                  </div>
                </div>

                {saveSuccessMsg && (
                  <div className="scoring-success-alert">
                    {saveSuccessMsg}
                  </div>
                )}

                <form className="scoring-form-body" onSubmit={handleSubmitScore}>
                  {/* Chọn Giám khảo */}
                  <div className="judge-select-row">
                    <label className="form-label">
                      <strong>Họ và tên Giám khảo chấm điểm:</strong>
                    </label>
                    <div className="judge-input-wrap">
                      <input 
                        type="text" 
                        className="form-control judge-name-input"
                        value={judgeName}
                        onChange={(e) => setJudgeName(e.target.value)}
                        placeholder="Nhập họ tên Giám khảo..."
                        required
                      />
                      {judgesList && judgesList.length > 0 && (
                        <select 
                          className="form-select judge-quick-select"
                          onChange={(e) => { if (e.target.value) setJudgeName(e.target.value); }}
                          defaultValue=""
                        >
                          <option value="" disabled>-- Chọn nhanh Giám khảo --</option>
                          {judgesList.map((j, idx) => (
                            <option key={idx} value={j.hoTen || j}>{j.hoTen || j}</option>
                          ))}
                        </select>
                      )}
                    </div>
                  </div>

                  {/* 5 PHẦN CHẤM ĐIỂM CHUẨN NGHỊ ĐỊNH & QUY CHẾ HỘI THI */}
                  <div className="criteria-scoring-list">
                    {/* PHẦN 1 */}
                    <div className="crit-score-item">
                      <div className="crit-item-info">
                        <div className="crit-sec-tag">PHẦN 1 • TỐI ĐA 15 ĐIỂM</div>
                        <h4 className="crit-item-title">Tính cấp thiết & Chọn đúng bài toán lâm sàng/vận hành</h4>
                        <p className="crit-item-desc">
                          Đúng bất cập thực tế tại khoa (7đ), có số liệu đo lường ban đầu trung thực rõ ràng (8đ).
                        </p>
                      </div>
                      <div className="crit-item-input-box">
                        <input 
                          type="number" 
                          className="form-control score-number-input"
                          min="0" 
                          max="15" 
                          step="0.5"
                          value={scoreP1}
                          onChange={(e) => setScoreP1(e.target.value)}
                          required
                        />
                        <span className="crit-max-tag">/ 15 đ</span>
                      </div>
                    </div>

                    {/* PHẦN 2 */}
                    <div className="crit-score-item">
                      <div className="crit-item-info">
                        <div className="crit-sec-tag">PHẦN 2 • TỐI ĐA 25 ĐIỂM</div>
                        <h4 className="crit-item-title">Phương pháp luận & Phân tích 5 Whys tìm lỗi hệ thống</h4>
                        <p className="crit-item-desc">
                          Kỹ thuật 5 Tại sao tìm đúng nguyên nhân gốc rễ (13đ), nhận diện nguy cơ sai sót và an toàn người bệnh (12đ).
                        </p>
                      </div>
                      <div className="crit-item-input-box">
                        <input 
                          type="number" 
                          className="form-control score-number-input"
                          min="0" 
                          max="25" 
                          step="0.5"
                          value={scoreP2}
                          onChange={(e) => setScoreP2(e.target.value)}
                          required
                        />
                        <span className="crit-max-tag">/ 25 đ</span>
                      </div>
                    </div>

                    {/* PHẦN 3 */}
                    <div className="crit-score-item">
                      <div className="crit-item-info">
                        <div className="crit-sec-tag">PHẦN 3 • TỐI ĐA 35 ĐIỂM</div>
                        <h4 className="crit-item-title">Hiệu quả cải tiến thực tế & Đo lường đầu ra</h4>
                        <p className="crit-item-desc">
                          Mức độ đạt mục tiêu cam kết SMART (15đ), rút ngắn thời gian/giảm lỗi (10đ), nâng cao hài lòng người bệnh & NVYT (10đ).
                        </p>
                      </div>
                      <div className="crit-item-input-box">
                        <input 
                          type="number" 
                          className="form-control score-number-input"
                          min="0" 
                          max="35" 
                          step="0.5"
                          value={scoreP3}
                          onChange={(e) => setScoreP3(e.target.value)}
                          required
                        />
                        <span className="crit-max-tag">/ 35 đ</span>
                      </div>
                    </div>

                    {/* PHẦN 4 */}
                    <div className="crit-score-item">
                      <div className="crit-item-info">
                        <div className="crit-sec-tag">PHẦN 4 • TỐI ĐA 15 ĐIỂM</div>
                        <h4 className="crit-item-title">Tính ứng dụng, Chuẩn hóa quy trình SOP & Khả năng nhân rộng</h4>
                        <p className="crit-item-desc">
                          Đóng gói thành Quy trình SOP chuẩn hóa (10đ), chi phí triển khai hợp lý, dễ duy trì thường quy (5đ).
                        </p>
                      </div>
                      <div className="crit-item-input-box">
                        <input 
                          type="number" 
                          className="form-control score-number-input"
                          min="0" 
                          max="15" 
                          step="0.5"
                          value={scoreP4}
                          onChange={(e) => setScoreP4(e.target.value)}
                          required
                        />
                        <span className="crit-max-tag">/ 15 đ</span>
                      </div>
                    </div>

                    {/* PHẦN 5 */}
                    <div className="crit-score-item">
                      <div className="crit-item-info">
                        <div className="crit-sec-tag">PHẦN 5 • TỐI ĐA 10 ĐIỂM</div>
                        <h4 className="crit-item-title">Kỹ năng trình bày & Minh chứng trực quan tại hiện trường</h4>
                        <p className="crit-item-desc">
                          Slide/Báo cáo A3 đúng chuẩn, nhiều ảnh Gemba (5đ), thuyết trình tự tin và trả lời phản biện thuyết phục (5đ).
                        </p>
                      </div>
                      <div className="crit-item-input-box">
                        <input 
                          type="number" 
                          className="form-control score-number-input"
                          min="0" 
                          max="10" 
                          step="0.5"
                          value={scoreP5}
                          onChange={(e) => setScoreP5(e.target.value)}
                          required
                        />
                        <span className="crit-max-tag">/ 10 đ</span>
                      </div>
                    </div>
                  </div>

                  {/* Nhận xét chuyên môn */}
                  <div className="judge-comment-box">
                    <label className="form-label">
                      <strong>Nhận xét chuyên môn & Khuyến nghị của Giám khảo:</strong>
                    </label>
                    <textarea 
                      className="form-control"
                      rows="3"
                      placeholder="Ghi nhận xét đánh giá ưu điểm, hạn chế và giải pháp hoàn thiện cho đề tài..."
                      value={judgeComment}
                      onChange={(e) => setJudgeComment(e.target.value)}
                    ></textarea>
                  </div>

                  {/* Hàng nút bấm */}
                  <div className="scoring-action-row">
                    <button type="submit" className="btn-confirm-score">
                      💾 Lưu & Xác Nhận Điểm Số Đề Án
                    </button>
                    <button 
                      type="button" 
                      className="btn-cancel-score"
                      onClick={() => setActiveTab('overview')}
                    >
                      ← Quay lại Xem Dự Án
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* TAB 7: GÓP Ý & THẢO LUẬN */}
          {activeTab === 'discussion' && (
            <div className="tab-pane discussion-pane">
              <div className="discussion-intro-box">
                <h3 className="section-sub-heading">Góc Chia Sẻ & Trao Đổi Chuyên Môn</h3>
                <p className="text-muted">
                  Để lại lời nhắn động viên hoặc góp ý cải tiến cho nhóm tác giả!
                </p>
              </div>

              <form className="comment-input-form" onSubmit={handleAddComment}>
                <div className="form-row-two">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Họ và tên (VD: BS. Nguyễn Văn A)..." 
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    required
                  />
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Khoa / Phòng công tác..." 
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                  />
                </div>
                <textarea 
                  className="form-control mt-2" 
                  rows="3" 
                  placeholder="Nhập nội dung góp ý hoặc câu hỏi..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  required
                ></textarea>
                <div className="form-submit-row">
                  <span className="submit-hint">* Ý kiến được lưu trực tiếp trên hệ thống tham khảo.</span>
                  <button type="submit" className="btn btn-primary btn-sm">Gửi Góp Ý</button>
                </div>
              </form>

              <div className="comments-stream">
                {commentsList.length === 0 ? (
                  <div className="no-comments">Chưa có ý kiến góp ý nào.</div>
                ) : (
                  commentsList.map((c) => (
                    <div key={c.id} className="comment-bubble-card">
                      <div className="comment-header">
                        <div className="comment-author-block">
                          <span className="comment-author-name">{c.author}</span>
                          <span className="comment-author-role">{c.role}</span>
                        </div>
                        <span className="comment-time">{c.time}</span>
                      </div>
                      <div className="comment-body-text">{c.content}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* PRINT ONLY A3 CONTENT */}
        <div className="a3-printable-content print-only">
          <div className="a3-print-official-header">
            <div className="a3-print-col-left">
              <div>CÔNG TY TNHH PHÁT TRIỂN Y HỌC VIỆT</div>
              <div><strong>BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG</strong></div>
              <div className="a3-line-divider"></div>
            </div>
            <div className="a3-print-col-right">
              <div><strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong></div>
              <div>Độc lập – Tự do – Hạnh phúc</div>
              <div className="a3-line-divider"></div>
            </div>
          </div>

          <div className="a3-report-title-block">
            <div className="a3-report-sub">BÁO CÁO TÓM TẮT ĐỀ ÁN CẢI TIẾN CHẤT LƯỢNG A3 (PDCA)</div>
            <h2 className="a3-report-main-title">{project.tenDeTai}</h2>
            <div className="a3-report-meta-row">
              <span><strong>Mã đề án:</strong> {project.maDeTai}</span>
              <span> | <strong>Đơn vị chủ trì:</strong> {project.khoaPhong}</span>
              {project.khoaPhoiHop && (
                <span> | <strong>Đơn vị phối hợp:</strong> {project.khoaPhoiHop}</span>
              )}
              {project.nhomTacGia && (
                <span> | <strong>Nhóm tác giả:</strong> {project.nhomTacGia}</span>
              )}
            </div>
          </div>

          <div className="a3-grid-layout">
            <div className="a3-col">
              <div className="a3-box">
                <div className="a3-box-header">1. Bối Cảnh & Lý Do Chọn Đề Tài</div>
                <div className="a3-box-body"><p>{project.thucTrang || a3.background}</p></div>
              </div>
              <div className="a3-box">
                <div className="a3-box-header">2. Số Liệu Đo Lường Hiện Trạng</div>
                <div className="a3-box-body"><p>{soLieuBanDau.length > 0 ? soLieuBanDau.join('\n• ') : a3.baselineData}</p></div>
              </div>
              <div className="a3-box">
                <div className="a3-box-header">3. Phân Tích Nguyên Nhân Gốc Rễ (5 Whys)</div>
                <div className="a3-box-body"><p style={{ whiteSpace: 'pre-line' }}>{fiveWhys.map(w => `${w.level}: ${w.question} ➔ ${w.answer}`).join('\n') || a3.rootCause}</p></div>
              </div>
              <div className="a3-box">
                <div className="a3-box-header">4. Mục Tiêu Cải Tiến Cụ Thể (SMART)</div>
                <div className="a3-box-body"><p>{mucTieu.map(m => `• ${m.chiTieu}: ${m.hienTrang} ➔ ${m.mucTieu}`).join('\n') || a3.smartGoal}</p></div>
              </div>
            </div>

            <div className="a3-col">
              <div className="a3-box">
                <div className="a3-box-header">5. Biện Pháp Cải Tiến Đã Thực Hiện</div>
                <div className="a3-box-body"><p style={{ whiteSpace: 'pre-line' }}>{giaiPhap.map(g => `• ${g}`).join('\n') || a3.countermeasures}</p></div>
              </div>
              <div className="a3-box">
                <div className="a3-box-header">6. Phạm Vi & Kế Hoạch Triển Khai</div>
                <div className="a3-box-body">
                  <p><strong>Địa bàn:</strong> {project.phamVi || project.khoaPhong}</p>
                  <p><strong>Thời gian:</strong> {project.thoiGian}</p>
                  <p><strong>Đầu ra:</strong> {project.sanPhamDauRa}</p>
                </div>
              </div>
              <div className="a3-box">
                <div className="a3-box-header">7. Chuẩn Hóa SOP & Nhân Rộng</div>
                <div className="a3-box-body">
                  <p><strong>Chuẩn hóa:</strong> {a3.standardization}</p>
                  <p style={{ marginTop: '0.4rem' }}><strong>Bài học kinh nghiệm:</strong> {a3.lessonsLearned}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
