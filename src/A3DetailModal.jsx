import React, { useState, useEffect } from 'react';
import './A3DetailModal.css';

export default function A3DetailModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'a3', 'timeline', 'documents', 'discussion'
  const [commentsList, setCommentsList] = useState([]);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    if (project) {
      setActiveTab('overview');
      // Load thảo luận từ localStorage hoặc seed ban đầu
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
  const highlights = project.keyHighlights || [];
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

  return (
    <div className="a3-modal-overlay" onClick={onClose}>
      <div className="a3-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* MODAL HEADER: ĐẲNG CẤP & ĐỊNH DANH ĐỀ ÁN */}
        <div className="a3-modal-header screen-only">
          <div className="a3-header-meta">
            <span className="a3-project-id">{project.maDeTai}</span>
            <span className={`a3-branch-badge ${project.nhanh === 'Nhánh B' ? 'branch-b' : 'branch-a'}`}>
              {project.nhanh}
            </span>
            <span className="a3-dept-badge">{project.khoaPhong}</span>
            {project.khoaPhoiHop && (
              <span className="a3-partner-badge">+ {project.khoaPhoiHop}</span>
            )}
            <span className="a3-status-approved">Đã Phê Duyệt Thực Nghiệm</span>
          </div>

          <div className="a3-header-actions">
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

        {/* TIÊU ĐỀ ĐỀ ÁN TRÊN MÀN HÌNH */}
        <div className="project-detail-hero screen-only">
          <div className="hero-topic-tag">{project.chuDeTen || 'Đề Án Cải Tiến Chất Lượng'}</div>
          <h2 className="hero-project-title">{project.tenDeTai}</h2>
          
          <div className="hero-info-pills">
            <div className="hero-pill">
              <span className="pill-label">Đơn vị chủ trì:</span>
              <span className="pill-val">{project.khoaPhong}</span>
            </div>
            <div className="hero-pill">
              <span className="pill-label">Chủ nhiệm đề án:</span>
              <span className="pill-val">{authors[0]?.name || project.nhomTacGia}</span>
            </div>
            <div className="hero-pill highlight-pill">
              <span className="pill-label">Điểm Thẩm Định Sơ Bộ (Tổ QLCL):</span>
              <span className="pill-val font-bold">{project.diemThamDinhBanDau || project.tongDiem} / 100</span>
            </div>
          </div>

          {/* THANH ĐIỀU HƯỚNG TABS CHI TIẾT */}
          <div className="project-detail-nav-tabs">
            <button 
              type="button" 
              className={`detail-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Tổng Quan & Điểm Sáng
            </button>
            <button 
              type="button" 
              className={`detail-tab-btn ${activeTab === 'a3' ? 'active' : ''}`}
              onClick={() => setActiveTab('a3')}
            >
              Báo Cáo A3 Chuẩn PDCA
            </button>
            <button 
              type="button" 
              className={`detail-tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
              onClick={() => setActiveTab('timeline')}
            >
              Tiến Độ & Thẩm Định
            </button>
            <button 
              type="button" 
              className={`detail-tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
              onClick={() => setActiveTab('documents')}
            >
              Hồ Sơ & Minh Chứng ({docs.length})
            </button>
            <button 
              type="button" 
              className={`detail-tab-btn ${activeTab === 'discussion' ? 'active' : ''}`}
              onClick={() => setActiveTab('discussion')}
            >
              Thảo Luận & Học Hỏi ({commentsList.length})
            </button>
          </div>
        </div>

        {/* NỘI DUNG CHÍNH CỦA MODAL (SCROLL ĐƯỢC TRÊN MÀN HÌNH) */}
        <div className="modal-scroll-body screen-only">
          {/* TAB 1: TỔNG QUAN & ĐIỂM SÁNG */}
          {activeTab === 'overview' && (
            <div className="tab-pane overview-pane">
              {/* LƯU Ý PHÂN BIỆT ĐIỂM THẨM ĐỊNH BAN ĐẦU */}
              <div className="eval-notice-card">
                <div className="notice-icon">ℹ️</div>
                <div className="notice-text">
                  <strong>Thông tin chuyên môn:</strong> Điểm số <strong>{project.diemThamDinhBanDau || project.tongDiem}/100</strong> là 
                  <strong> Kết quả Thẩm định Hồ sơ Ban đầu</strong> do Tổ Quản lý Chất lượng (Phòng KHTH) đánh giá để phê duyệt đề cương 
                  triển khai thực nghiệm (theo <em>{project.vanBanPheDuyet || 'Quyết định của Tổ QLCL'}</em>). 
                  Điểm số và xếp hạng chính thức từ Ban Giám khảo sẽ được chấm độc lập tại Vòng Chung kết.
                </div>
              </div>

              {/* GRID 4 ĐIỂM SÁNG NỔI BẬT */}
              <div className="highlights-grid">
                {highlights.map((h, idx) => (
                  <div key={idx} className="highlight-card">
                    <div className="highlight-icon">{h.icon || '✦'}</div>
                    <div className="highlight-title">{h.label}</div>
                    <div className="highlight-desc">{h.desc}</div>
                  </div>
                ))}
              </div>

              {/* KHỐI NỖI ĐAU LÂM SÀNG & GIẢI PHÁP ĐỘT PHÁ */}
              <div className="overview-two-col-grid">
                <div className="overview-card pain-card">
                  <div className="card-header-badge red-badge">NỖI ĐAU THỰC TẾ & BẤT CẬP HIỆN TRƯỜNG</div>
                  <h4 className="overview-card-title">Điểm Nghẽn Trước Cải Tiến</h4>
                  <p className="overview-card-body">{a3.background}</p>
                  <div className="overview-data-point">
                    <span className="data-point-label">Số liệu đo lường ban đầu:</span>
                    <p className="data-point-val">{a3.baselineData}</p>
                  </div>
                </div>

                <div className="overview-card solution-card">
                  <div className="card-header-badge green-badge">SÁNG KIẾN CẢI TIẾN & ĐỐI SÁCH</div>
                  <h4 className="overview-card-title">Giải Pháp Đột Phá Đã Áp Dụng</h4>
                  <p className="overview-card-body" style={{ whiteSpace: 'pre-line' }}>{a3.countermeasures}</p>
                  <div className="overview-data-point">
                    <span className="data-point-label">Mục tiêu cam kết (SMART):</span>
                    <p className="data-point-val text-success">{a3.smartGoal}</p>
                  </div>
                </div>
              </div>

              {/* BẢNG SO SÁNH TRỰC QUAN BEFORE VS AFTER */}
              <div className="comparison-section">
                <h3 className="section-sub-heading">Hiệu Quả Đo Lường Thực Tế Trước & Sau Cải Tiến</h3>
                <div className="comparison-table-wrapper">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>Chỉ số đo lường</th>
                        <th style={{ width: '32%' }}>Trước cải tiến (Baseline)</th>
                        <th style={{ width: '35%' }}>Sau khi áp dụng cải tiến</th>
                      </tr>
                    </thead>
                    <tbody>
                      {a3.resultsBeforeAfter && a3.resultsBeforeAfter.map((r, idx) => (
                        <tr key={idx}>
                          <td className="font-semibold">{r.metric}</td>
                          <td className="text-muted before-val">{r.before}</td>
                          <td className="after-val text-success font-bold">{r.after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* DANH SÁCH NHÓM TÁC GIẢ */}
              <div className="authors-section">
                <h3 className="section-sub-heading">Nhóm Tác Giả Thực Hiện Đề Án</h3>
                <div className="authors-grid">
                  {authors.map((auth, idx) => (
                    <div key={idx} className="author-card">
                      <div className="author-avatar">{auth.name.charAt(auth.name.lastIndexOf(' ') + 1) || 'NV'}</div>
                      <div className="author-info">
                        <div className="author-name">{auth.name}</div>
                        <div className="author-role">{auth.role}</div>
                        <div className="author-title">{auth.title}</div>
                      </div>
                    </div>
                  ))}
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
                {/* CỘT 1: PLAN */}
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

                {/* CỘT 2: DO - CHECK - ACT */}
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
                    <span className="progress-title">Tiến Độ Triển Khai Thực Nghiệm</span>
                    <span className="progress-pct">{project.tienDoPhanTram || 65}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${project.tienDoPhanTram || 65}%` }}></div>
                  </div>
                  <p className="progress-current-status">
                    <strong>Tình trạng hiện tại:</strong> {project.tinhTrangTienDo || 'Đang triển khai thử nghiệm thực địa tại khoa/phòng.'}
                  </p>
                </div>
              </div>

              {/* TRỤC THỜI GIAN THEO DÕI CÁC VÒNG DỰ ÁN */}
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

              {/* THÔNG TIN BIÊN BẢN THẨM ĐỊNH SƠ BỘ */}
              <div className="appraisal-certificate-card">
                <div className="cert-header">
                  <span className="cert-tag">HỒ SƠ THẨM ĐỊNH CHUYÊN MÔN</span>
                  <span className="cert-status">PHÊ DUYỆT THỰC NGHIỆM</span>
                </div>
                <div className="cert-grid">
                  <div className="cert-item">
                    <span className="cert-label">Căn cứ pháp lý:</span>
                    <span className="cert-val">Kế hoạch Hội thi Đề án Cải tiến Chất lượng 16 Năm Hùng Vương</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-label">Cơ quan thẩm định:</span>
                    <span className="cert-val">Phòng Kế hoạch Tổng hợp — Tổ Quản lý Chất lượng</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-label">Văn bản ban hành:</span>
                    <span className="cert-val">{project.vanBanPheDuyet || 'Thông báo Thẩm định Đề cương A3'}</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-label">Điểm thẩm định ban đầu:</span>
                    <span className="cert-val score-highlight">{project.diemThamDinhBanDau || project.tongDiem} / 100 điểm ({project.xepLoaiThamDinh || 'Loại A'})</span>
                  </div>
                  <div className="cert-item full-width">
                    <span className="cert-label">Người phê duyệt:</span>
                    <span className="cert-val font-bold">{project.nguoiPheDuyet || 'Trần Đình Vũ — Tổ trưởng Tổ Quản lý Chất lượng'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: HỒ SƠ & MINH CHỨNG */}
          {activeTab === 'documents' && (
            <div className="tab-pane docs-pane">
              <div className="docs-intro-box">
                <div className="docs-intro-title">Danh Mục Hồ Sơ Lưu Trữ & Tham Khảo Đề Án</div>
                <p className="docs-intro-desc">
                  Toàn bộ hồ sơ đề cương, phiếu đăng ký, biên bản thẩm định và bản vẽ kỹ thuật được đồng bộ và lưu trữ tại 
                  thư mục tiếp nhận đề án của Bệnh viện. Quý đồng nghiệp có thể tham khảo trực tiếp làm tài liệu học tập.
                </p>
              </div>

              <div className="docs-grid">
                {docs.map((doc, idx) => (
                  <div key={idx} className="doc-item-card">
                    <div className="doc-type-icon">
                      {doc.type.includes('Word') ? '📄' : (doc.type.includes('pdf') || doc.type.includes('Bản vẽ') ? '📐' : '📑')}
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
                      <span className="doc-stored-tag">Đã Lưu Trữ</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="storage-location-hint">
                📁 <strong>Đường dẫn lưu trữ trên hệ sinh thái Bệnh viện:</strong>
                <br />
                <code>DỰ ÁN QLCL BV / 02 Cải tiến Liên tục CQI / Tiếp nhận Đề án / {project.maDeTai}</code>
              </div>
            </div>
          )}

          {/* TAB 5: THẢO LUẬN & HỌC HỎI CHUYÊN MÔN */}
          {activeTab === 'discussion' && (
            <div className="tab-pane discussion-pane">
              <div className="discussion-intro-box">
                <h3 className="section-sub-heading">Góc Chia Sẻ & Trao Đổi Chuyên Môn Giữa Các Khoa/Phòng</h3>
                <p className="text-muted">
                  Kaizen là học hỏi liên tục. Hãy để lại ý kiến đóng góp, câu hỏi hoặc kinh nghiệm phối hợp liên khoa để cùng hoàn thiện đề án!
                </p>
              </div>

              {/* FORM GỬI Ý KIẾN */}
              <form className="comment-input-form" onSubmit={handleAddComment}>
                <div className="form-row-two">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Họ và tên đồng nghiệp (VD: BS. Nguyễn Văn A)..." 
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    required
                  />
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Khoa / Phòng công tác (VD: Khoa Khám bệnh)..." 
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                  />
                </div>
                <textarea 
                  className="form-control mt-2" 
                  rows="3" 
                  placeholder="Nhập nhận xét, câu hỏi hoặc lời nhắn động viên nhóm tác giả..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  required
                ></textarea>
                <div className="form-submit-row">
                  <span className="submit-hint">* Ý kiến được lưu trực tiếp trên hệ thống tham khảo nội bộ.</span>
                  <button type="submit" className="btn btn-primary btn-sm">Gửi Ý Kiến Góp Ý</button>
                </div>
              </form>

              {/* DANH SÁCH Ý KIẾN */}
              <div className="comments-stream">
                {commentsList.length === 0 ? (
                  <div className="no-comments">Chưa có ý kiến góp ý nào. Hãy là người đầu tiên để lại phản hồi!</div>
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

        {/* ====================================================================== */}
        {/* KHỐI BÁO CÁO A3 CHUẨN IN ẤN (CHỈ HIỆN KHI IN - KHỔ GIẤY A4/A3 ĐỨNG/NGANG) */}
        {/* ====================================================================== */}
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
                <div className="a3-box-header">1. Bối Cảnh & Lý Do Chọn Đề Tài (Background)</div>
                <div className="a3-box-body"><p>{a3.background}</p></div>
              </div>

              <div className="a3-box">
                <div className="a3-box-header">2. Số Liệu Đo Lường Hiện Trạng (Baseline Data)</div>
                <div className="a3-box-body"><p>{a3.baselineData}</p></div>
              </div>

              <div className="a3-box">
                <div className="a3-box-header">3. Phân Tích Nguyên Nhân Gốc Rễ (5 Whys)</div>
                <div className="a3-box-body"><p style={{ whiteSpace: 'pre-line' }}>{a3.rootCause}</p></div>
              </div>

              <div className="a3-box">
                <div className="a3-box-header">4. Mục Tiêu Cải Tiến Cụ Thể (SMART Goal)</div>
                <div className="a3-box-body"><p>{a3.smartGoal}</p></div>
              </div>
            </div>

            <div className="a3-col">
              <div className="a3-box">
                <div className="a3-box-header">5. Biện Pháp Cải Tiến Đã Thực Hiện (Countermeasures)</div>
                <div className="a3-box-body"><p style={{ whiteSpace: 'pre-line' }}>{a3.countermeasures}</p></div>
              </div>

              <div className="a3-box">
                <div className="a3-box-header">6. Hiệu Quả Đo Lường Thực Tế (Before vs. After)</div>
                <div className="a3-box-body">
                  {a3.resultsBeforeAfter && a3.resultsBeforeAfter.length > 0 ? (
                    <table className="a3-table">
                      <thead>
                        <tr>
                          <th>Chỉ số đo lường</th>
                          <th style={{ width: '30%' }}>Trước cải tiến</th>
                          <th style={{ width: '30%' }}>Sau cải tiến</th>
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
                    <p>Đang cập nhật số liệu Before vs After.</p>
                  )}
                </div>
              </div>

              <div className="a3-box">
                <div className="a3-box-header">7. Chuẩn Hóa Quy Trình (SOP) & Nhân Rộng</div>
                <div className="a3-box-body">
                  <p><strong>Chuẩn hóa:</strong> {a3.standardization}</p>
                  <p style={{ marginTop: '0.4rem' }}><strong>Bài học kinh nghiệm:</strong> {a3.lessonsLearned}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL FOOTER */}
        <div className="a3-modal-footer screen-only">
          <div className="a3-footer-hint">
            * Cổng thông tin tham khảo Đề án Cải tiến Chất lượng — Bệnh viện Đa khoa Hùng Vương (16 năm thành lập).
          </div>
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Đóng Cửa Sổ
          </button>
        </div>
      </div>
    </div>
  );
}
