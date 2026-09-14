import React, { useState, useEffect } from 'react';
import './A3DetailModal.css';
import { getCleanLeaderName } from './kaizenData';

export default function A3DetailModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'a3', 'timeline', 'documents', 'discussion'
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [commentsList, setCommentsList] = useState([]);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    if (project) {
      setActiveTab('overview');
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
  }, [project]);

  if (!isOpen || !project) return null;

  const a3 = project.a3Report || {};
  const qs = project.quickSummary || {
    idea: project.tomTat || "Sáng kiến cải tiến chất lượng và tối ưu hóa vận hành.",
    painPoints: [
      "Quy trình cũ còn nhiều bước thủ công, phân tán vật tư.",
      "Mất nhiều thời gian thao tác ngoài giờ trực.",
      "Tiềm ẩn rủi ro sai sót trong quá trình vận hành."
    ],
    solutions: [
      "Thiết kế mô hình/dụng cụ chuyên dụng chuẩn hóa thao tác.",
      "Áp dụng bảng kiểm trực quan và quy trình 1 chạm.",
      "Phối hợp liên khoa hoàn nguyên vật tư nhanh chóng."
    ],
    keyMetrics: [
      { label: "Thời gian xử lý", before: "Kéo dài", after: "Rút ngắn 80%", note: "Tối ưu hóa thời gian" },
      { label: "Mức độ an toàn", before: "Tiềm ẩn rủi ro", after: "100% An toàn", note: "Triệt tiêu sai sót" }
    ]
  };
  const authors = project.authorsDetailed || [];
  const timeline = project.timeline || [];
  const fiveWhys = project.fiveWhys || [];
  const docs = project.documents || [];

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

  const cleanLeader = getCleanLeaderName(project);

  return (
    <div className="a3-modal-overlay" onClick={onClose}>
      <div 
        className={`a3-modal-dialog ${isFullScreen ? 'dialog-fullscreen' : 'dialog-spacious'}`} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP BAR */}
        <div className="a3-modal-header screen-only">
          <div className="a3-header-meta">
            <span className="a3-project-id">{project.maDeTai}</span>
            <span className={`a3-branch-badge ${project.nhanh === 'Nhánh B' ? 'branch-b' : 'branch-a'}`}>
              {project.nhanh}
            </span>
            <span className="a3-dept-badge">{project.khoaPhong}</span>
            {project.khoaPhoiHop && (
              <span className="a3-partner-badge">/ {project.khoaPhoiHop}</span>
            )}
            <span className="a3-status-approved">Thử nghiệm thực địa</span>
          </div>

          <div className="a3-header-actions">
            <button 
              type="button" 
              className="btn btn-outline a3-action-btn" 
              onClick={() => setIsFullScreen(!isFullScreen)}
              title={isFullScreen ? "Thu nhỏ cửa sổ" : "Mở rộng toàn màn hình"}
            >
              {isFullScreen ? "Thu Nhỏ" : "Toàn Màn Hình"}
            </button>
            <button 
              type="button" 
              className="btn btn-outline a3-action-btn" 
              onClick={handlePrint}
              title="In bản Báo cáo A3 chuẩn Nghị định 30"
            >
              In Báo Cáo A3
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

        {/* HERO TIÊU ĐỀ SẢN PHẨM */}
        <div className="project-detail-hero screen-only">
          <div className="hero-topic-tag">{project.chuDeTen || 'Sáng Kiến Cải Tiến Y Tế'}</div>
          <h2 className="hero-project-title">
            {project.tenSanPham || project.tenDeTai}
          </h2>
          
          <div className="hero-compact-info">
            <span>Chủ nhiệm: <strong>{cleanLeader}</strong></span>
            <span className="hero-divider">•</span>
            <span>Đơn vị: <strong>{project.khoaPhong}</strong></span>
          </div>

          {/* TABS ĐIỀU HƯỚNG */}
          <div className="project-detail-nav-tabs">
            <button 
              type="button" 
              className={`detail-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Giới Thiệu Sản Phẩm
            </button>
            <button 
              type="button" 
              className={`detail-tab-btn ${activeTab === 'a3' ? 'active' : ''}`}
              onClick={() => setActiveTab('a3')}
            >
              Báo Cáo A3 (PDCA)
            </button>
            <button 
              type="button" 
              className={`detail-tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
              onClick={() => setActiveTab('timeline')}
            >
              Tiến Độ Triển Khai
            </button>
            <button 
              type="button" 
              className={`detail-tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
              onClick={() => setActiveTab('documents')}
            >
              Hồ Sơ Đăng Ký ({docs.length})
            </button>
            <button 
              type="button" 
              className={`detail-tab-btn ${activeTab === 'discussion' ? 'active' : ''}`}
              onClick={() => setActiveTab('discussion')}
            >
              Góp Ý ({commentsList.length})
            </button>
          </div>
        </div>

        {/* THÂN MODAL CUỘN ĐƯỢC */}
        <div className="modal-scroll-body screen-only">
          {/* TAB 1: GIỚI THIỆU SẢN PHẨM DẠNG DASHBOARD RỘNG RÃI, KHÔNG CẦN LĂN CHUỘT */}
          {activeTab === 'overview' && (
            <div className="tab-pane overview-pane">
              <div className="overview-dashboard-grid">
                {/* CỘT TRÁI (58%): Ý TƯỞNG CẢI TIẾN & SO SÁNH TRƯỚC/SAU */}
                <div className="overview-main-col">
                  {/* KHỐI 1: Ý TƯỞNG CỐT LÕI */}
                  <div className="idea-banner-card">
                    <div className="idea-badge">Ý TƯỞNG CẢI TIẾN</div>
                    <p className="idea-text">{qs.idea}</p>
                  </div>

                  {/* KHỐI 2: SO SÁNH TRƯỚC VÀ SAU */}
                  <div className="quick-compare-grid">
                    <div className="quick-card pain-box">
                      <div className="box-tag red-tag">BẤT CẬP TRƯỚC ĐÂY</div>
                      <ul className="quick-list">
                        {qs.painPoints.map((pt, idx) => (
                          <li key={idx}>
                            <span className="bullet-dot red-dot"></span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="quick-card solution-box">
                      <div className="box-tag green-tag">GIẢI PHÁP CẢI TIẾN</div>
                      <ul className="quick-list">
                        {qs.solutions.map((sol, idx) => (
                          <li key={idx}>
                            <span className="bullet-dot green-dot"></span>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CỘT PHẢI (42%): KẾT QUẢ ĐO LƯỜNG, TÁC GIẢ & HÀNH ĐỘNG */}
                <div className="overview-side-col">
                  {/* KHỐI 3: KẾT QUẢ ĐO LƯỜNG NỔI BẬT (LƯỚI 2x2 SIÊU GỌN) */}
                  <div className="metrics-showcase-section">
                    <div className="section-mini-title">KẾT QUẢ ĐO LƯỜNG NỔI BẬT</div>
                    <div className="metrics-cards-grid-2x2">
                      {qs.keyMetrics.map((km, idx) => (
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
                    <div className="section-mini-title">NHÓM TÁC GIẢ THỰC HIỆN</div>
                    <div className="authors-simple-flex">
                      {authors.map((auth, idx) => (
                        <div key={idx} className="author-pill-item">
                          <span className="author-role-tag">{idx === 0 ? 'Chủ nhiệm:' : 'Thành viên:'}</span>
                          <strong className="author-full-name">{auth.name}</strong>
                          <span className="author-dept-text">({auth.title})</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="tab-switch-hint">
                    Xem chi tiết quy trình kỹ thuật PDCA:
                    <button type="button" className="inline-tab-link" onClick={() => setActiveTab('a3')}>
                      Xem Báo cáo A3 đầy đủ →
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
                <button type="button" className="btn btn-primary btn-sm" onClick={handlePrint}>
                  Xuất Bản & In A3 Chuẩn Nghị Định 30
                </button>
              </div>

              <div className="a3-screen-grid">
                <div className="a3-screen-col">
                  <div className="a3-card">
                    <div className="a3-card-title">1. Bối Cảnh & Lý Do Chọn Đề Tài</div>
                    <p className="a3-card-text">{a3.background}</p>
                  </div>
                  <div className="a3-card">
                    <div className="a3-card-title">2. Số Liệu Đo Lường Hiện Trạng</div>
                    <p className="a3-card-text">{a3.baselineData}</p>
                  </div>
                  <div className="a3-card">
                    <div className="a3-card-title">3. Phân Tích 5 Tầng Tại Sao (5 Whys)</div>
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
                    <div className="a3-card-title">4. Mục Tiêu Cam Kết SMART</div>
                    <p className="a3-card-text">{a3.smartGoal}</p>
                  </div>
                </div>

                <div className="a3-screen-col">
                  <div className="a3-card">
                    <div className="a3-card-title">5. Biện Pháp Cải Tiến Đã Thực Hiện</div>
                    <p className="a3-card-text" style={{ whiteSpace: 'pre-line' }}>{a3.countermeasures}</p>
                  </div>
                  <div className="a3-card">
                    <div className="a3-card-title">6. Đo Lường Hiệu Quả Trước & Sau</div>
                    <table className="a3-mini-table">
                      <thead>
                        <tr>
                          <th>Chỉ số</th>
                          <th>Trước</th>
                          <th>Sau cải tiến</th>
                        </tr>
                      </thead>
                      <tbody>
                        {a3.resultsBeforeAfter && a3.resultsBeforeAfter.map((r, idx) => (
                          <tr key={idx}>
                            <td>{r.metric}</td>
                            <td>{r.before}</td>
                            <td className="text-highlight"><strong>{r.after}</strong></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="a3-card">
                    <div className="a3-card-title">7. Chuẩn Hóa SOP & Nhân Rộng</div>
                    <p className="a3-card-text"><strong>Chuẩn hóa:</strong> {a3.standardization}</p>
                    <p className="a3-card-text mt-2"><strong>Bài học kinh nghiệm:</strong> {a3.lessonsLearned}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TIẾN ĐỘ & THEO DÕI DỰ ÁN */}
          {activeTab === 'timeline' && (
            <div className="tab-pane timeline-pane">
              <div className="timeline-header-card">
                <div className="progress-overview">
                  <div className="progress-text-row">
                    <span className="progress-title">Giai Đoạn Triển Khai Thực Nghiệm</span>
                    <span className="progress-pct">{project.tienDoPhanTram || 65}% hoàn thành</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${project.tienDoPhanTram || 65}%` }}></div>
                  </div>
                  <p className="progress-current-status">
                    <strong>Tình trạng hiện tại:</strong> {project.tinhTrangTienDo || 'Đang triển khai thử nghiệm thực địa tại khoa/phòng.'}
                  </p>
                </div>
              </div>

              <div className="roadmap-stepper">
                {timeline.map((step, idx) => {
                  const isDone = step.status === 'completed';
                  const isCurrent = step.status === 'in_progress';
                  return (
                    <div key={idx} className={`roadmap-step ${step.status}`}>
                      <div className="step-marker">
                        {isDone ? '✓' : idx + 1}
                      </div>
                      <div className="step-body">
                        <div className="step-meta">
                          <span className="step-phase">{step.phase}</span>
                          <span className="step-date">{step.date}</span>
                          <span className={`step-badge badge-${step.status}`}>
                            {isDone ? 'Đã Hoàn Thành' : (isCurrent ? 'Đang Thực Hiện' : 'Kế Hoạch')}
                          </span>
                        </div>
                        <p className="step-note">{step.note}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: HỒ SƠ ĐĂNG KÝ & MINH CHỨNG */}
          {activeTab === 'documents' && (
            <div className="tab-pane docs-pane">
              <div className="docs-intro-box">
                <div className="docs-intro-title">Hồ Sơ Đề Án Đã Tiếp Nhận</div>
                <p className="docs-intro-desc">
                  Toàn bộ tài liệu đăng ký, đề cương A3 và quy trình kỹ thuật đã được lưu trữ an toàn tại hệ thống Tiếp nhận Đề án.
                </p>
              </div>

              <div className="docs-grid">
                {docs.map((doc, idx) => {
                  const ext = doc.type.includes('Word') ? 'DOCX' : (doc.type.includes('pdf') ? 'PDF' : (doc.type.includes('Bản vẽ') ? 'CAD' : 'FILE'));
                  return (
                    <div key={idx} className="doc-item-card">
                      <div className={`doc-type-badge type-${ext.toLowerCase()}`}>
                        {ext}
                      </div>
                      <div className="doc-details">
                        <h4 className="doc-name">{doc.name}</h4>
                        <div className="doc-meta-row">
                          <span className="doc-badge">{doc.type}</span>
                          <span className="doc-filename">{doc.file}</span>
                        </div>
                        <p className="doc-desc">{doc.desc}</p>
                      </div>
                      <div className="doc-action">
                        <span className="doc-stored-tag">Đã Tiếp Nhận</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: GÓP Ý & THẢO LUẬN */}
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
                <div className="a3-box-body"><p>{a3.background}</p></div>
              </div>
              <div className="a3-box">
                <div className="a3-box-header">2. Số Liệu Đo Lường Hiện Trạng</div>
                <div className="a3-box-body"><p>{a3.baselineData}</p></div>
              </div>
              <div className="a3-box">
                <div className="a3-box-header">3. Phân Tích Nguyên Nhân Gốc Rễ (5 Whys)</div>
                <div className="a3-box-body"><p style={{ whiteSpace: 'pre-line' }}>{a3.rootCause}</p></div>
              </div>
              <div className="a3-box">
                <div className="a3-box-header">4. Mục Tiêu Cải Tiến Cụ Thể (SMART)</div>
                <div className="a3-box-body"><p>{a3.smartGoal}</p></div>
              </div>
            </div>

            <div className="a3-col">
              <div className="a3-box">
                <div className="a3-box-header">5. Biện Pháp Cải Tiến Đã Thực Hiện</div>
                <div className="a3-box-body"><p style={{ whiteSpace: 'pre-line' }}>{a3.countermeasures}</p></div>
              </div>
              <div className="a3-box">
                <div className="a3-box-header">6. Hiệu Quả Đo Lường Thực Tế</div>
                <div className="a3-box-body">
                  {a3.resultsBeforeAfter && a3.resultsBeforeAfter.length > 0 ? (
                    <table className="a3-table">
                      <thead>
                        <tr>
                          <th>Chỉ số</th>
                          <th>Trước cải tiến</th>
                          <th>Sau cải tiến</th>
                        </tr>
                      </thead>
                      <tbody>
                        {a3.resultsBeforeAfter.map((r, idx) => (
                          <tr key={idx}>
                            <td><strong>{r.metric}</strong></td>
                            <td>{r.before}</td>
                            <td className="text-highlight"><strong>{r.after}</strong></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>Đang cập nhật số liệu.</p>
                  )}
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

        {/* FOOTER */}
        <div className="a3-modal-footer screen-only">
          <div className="a3-footer-hint">
            Hội thi Cải tiến Chất lượng Bệnh viện Đa khoa Hùng Vương 2026
          </div>
          <button type="button" className="btn btn-outline btn-sm" onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
