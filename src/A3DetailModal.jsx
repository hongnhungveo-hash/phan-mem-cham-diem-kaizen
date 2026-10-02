import React, { useState, useEffect } from 'react';
import './A3DetailModal.css';
import { getCleanLeaderName } from './kaizenData';

export default function A3DetailModal({ 
  project, 
  isOpen, 
  onClose, 
  onSaveScore, 
  judgesList = [], 
  initialTab = 'a3' 
}) {
  const [activeTab, setActiveTab] = useState(initialTab || 'a3');

  // Trạng thái chấm điểm trực tiếp
  const [judgeName, setJudgeName] = useState('');
  const [scoreP1, setScoreP1] = useState(13); // Tính cấp thiết (max 15)
  const [scoreP2, setScoreP2] = useState(22); // Phương pháp luận (max 25)
  const [scoreP3, setScoreP3] = useState(30); // Hiệu quả thực tế (max 35)
  const [scoreP4, setScoreP4] = useState(13); // Tính ứng dụng SOP (max 15)
  const [scoreP5, setScoreP5] = useState(9);  // Kỹ năng trình bày (max 10)
  const [judgeComment, setJudgeComment] = useState('');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  useEffect(() => {
    if (project) {
      setActiveTab(initialTab === 'chamDiem' ? 'chamDiem' : 'a3');
      setSaveSuccessMsg('');

      const score = (typeof project.tongDiemThamDinh === 'number')
        ? project.tongDiemThamDinh
        : (parseInt(project.tongDiemThamDinh, 10) || (Number(project.tongDiem) > 0 ? Number(project.tongDiem) : (Number(project.diemBanDau) || 85)));

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
    }
  }, [project, judgesList, initialTab]);

  // Keyboard: Esc to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  // Tính điểm & phân hạng Tier
  const getScore = (p) => {
    if (!p) return { score: 0, tier: 'muted', short: 'Đạt', full: 'Đạt', hasScore: false };
    const hasScore = Boolean(p.hasScore || (p.status === 'evaluated') || (Number(p.tongDiem) > 0));
    const raw = (typeof p.tongDiemThamDinh === 'number')
      ? p.tongDiemThamDinh
      : (parseInt(p.tongDiemThamDinh, 10) || (Number(p.tongDiem) > 0 ? Number(p.tongDiem) : (Number(p.diemBanDau) || 80)));
    let tier, short;
    if (raw >= 95)      { tier = 'emerald'; short = 'Xuất sắc'; }
    else if (raw >= 90) { tier = 'cyan';    short = 'Tốt';      }
    else if (raw >= 80) { tier = 'amber';   short = 'Khá';      }
    else                { tier = 'muted';   short = 'Đạt';      }
    const full = String(p.xepLoaiThamDinh || p.xepLoai || short).replace(/[\s|]+$/, '').trim() || short;
    return { score: raw, tier, short, full, hasScore };
  };

  const sc = getScore(project);
  const leaderName = project.chuNhiem || project.tacGia || getCleanLeaderName(project) || 'Nhóm tác giả';
  const displayTitle = project.tenSanPham || project.tenDeTai;
  const fiveWhys = project.fiveWhys || [];
  const docs = project.documents || [];
  const criteria = project.criteria || [];
  const mucTieu = project.mucTieu || [];
  const soLieuBanDau = project.soLieuBanDau || [];
  const giaiPhap = project.giaiPhap || [];
  const authors = project.authorsDetailed || [];

  // Tính tổng điểm form BGK
  const totalScoreCalc = Math.round((Number(scoreP1) + Number(scoreP2) + Number(scoreP3) + Number(scoreP4) + Number(scoreP5)) * 10) / 10;
  const calcRank = totalScoreCalc >= 90 ? 'Xuất sắc' : (totalScoreCalc >= 80 ? 'Tốt' : (totalScoreCalc >= 70 ? 'Khá' : 'Đạt'));

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

    setSaveSuccessMsg(`✓ Đã ghi nhận điểm số: ${totalScoreCalc}/100 (${calcRank})! Trạng thái đề tài đã cập nhật.`);
  };

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div className="modal-window clean-modal-window" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        
        {/* ==========================================================================
            1. MODAL HEADER SIÊU GỌN THEO ĐÚNG YÊU CẦU LÃNH ĐẠO
            ========================================================================== */}
        <div className="clean-modal-header">
          <div className="header-meta-left">
            <h2 className="header-project-name" title={project.tenDeTai}>
              {displayTitle}
            </h2>
            <div className="header-unit-info">
              <span>🏥 {project.khoaPhong}{project.khoaPhoiHop ? ` (+ ${project.khoaPhoiHop})` : ''}</span>
              <span className="dot-sep">•</span>
              <span>Chủ nhiệm: <strong>{leaderName}</strong></span>
            </div>
          </div>

          <div className="header-actions-right">
            {/* Live status badge */}
            {sc.hasScore ? (
              <span className={`modal-status-badge tier-${sc.tier}`}>
                ✓ Đã chấm: {sc.score}/100 ({sc.short})
              </span>
            ) : (
              <span className="modal-status-badge status-testing">
                ⏳ Đang thử nghiệm thực địa
              </span>
            )}

            {/* Nút bấm 1-chạm: Chấm điểm luôn */}
            {activeTab === 'chamDiem' ? (
              <button 
                type="button" 
                className="btn-modal-action action-back"
                onClick={() => setActiveTab('a3')}
              >
                <span>Xem Báo Cáo A3</span>
              </button>
            ) : (
              <button 
                type="button" 
                className="btn-modal-action action-score"
                onClick={() => setActiveTab('chamDiem')}
              >
                <span>⭐ Chấm Điểm Đề Án</span>
              </button>
            )}

            {/* Nút đóng */}
            <button 
              type="button" 
              className="clean-modal-close" 
              onClick={onClose} 
              aria-label="Đóng cửa sổ" 
              title="Đóng (Esc)"
            >
              &times;
            </button>
          </div>
        </div>

        {/* ==========================================================================
            2. THANH TAB TINH GỌN (4 TABS CHUYÊN MÔN)
            ========================================================================== */}
        <div className="clean-modal-tabs">
          <button 
            type="button" 
            className={`modal-tab-btn ${activeTab === 'a3' ? 'active' : ''}`}
            onClick={() => setActiveTab('a3')}
          >
            📋 Báo Cáo A3 Chuẩn PDCA
          </button>
          <button 
            type="button" 
            className={`modal-tab-btn ${activeTab === 'thamDinh' ? 'active' : ''}`}
            onClick={() => setActiveTab('thamDinh')}
          >
            🏛️ Biên Bản Thẩm Định QLCL
          </button>
          <button 
            type="button" 
            className={`modal-tab-btn ${activeTab === 'hoSo' ? 'active' : ''}`}
            onClick={() => setActiveTab('hoSo')}
          >
            📁 Hồ Sơ & Minh Chứng
          </button>
          <button 
            type="button" 
            className={`modal-tab-btn tab-score-highlight ${activeTab === 'chamDiem' ? 'active' : ''}`}
            onClick={() => setActiveTab('chamDiem')}
          >
            ⭐ Ban Giám Khảo Chấm Điểm
          </button>
        </div>

        {/* ==========================================================================
            3. NỘI DUNG CHI TIẾT CÁC TAB
            ========================================================================== */}
        <div className="clean-modal-body">
          
          {/* TAB 1: BÁO CÁO A3 CHUẨN PDCA (BỐ CỤC 2 CỘT THOÁNG ĐÃNG) */}
          {activeTab === 'a3' && (
            <div className="a3-two-column-layout">
              
              {/* CỘT TRÁI: GIAI ĐOẠN PLAN (BỐI CẢNH - 5 WHYS - SMART) */}
              <div className="a3-col-left">
                
                {/* 1. Thực trạng & Nỗi đau */}
                <div className="a3-card-box">
                  <div className="a3-box-header header-red">
                    <span className="box-step-tag">1. PLAN</span>
                    <h3 className="box-step-title">Bối Cảnh & Thực Trạng Lâm Sàng</h3>
                  </div>
                  <p className="a3-box-desc">
                    {project.thucTrang || 'Đang cập nhật thực trạng tại đơn vị...'}
                  </p>

                  {soLieuBanDau.length > 0 && (
                    <div className="baseline-data-list">
                      <div className="list-heading">📊 Số liệu nền đo lường 2 tuần:</div>
                      <ul>
                        {soLieuBanDau.map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 2. Cây phân tích 5 Whys */}
                <div className="a3-card-box">
                  <div className="a3-box-header header-amber">
                    <span className="box-step-tag">2. ROOT CAUSE</span>
                    <h3 className="box-step-title">Phân Tích 5 Tầng Tại Sao (5 Whys)</h3>
                  </div>
                  
                  {fiveWhys.length > 0 ? (
                    <div className="whys-stepper">
                      {fiveWhys.map((w, idx) => (
                        <div key={idx} className="why-step-row">
                          <span className="why-tag mono">Tại sao {idx + 1}</span>
                          <span className="why-text">{w}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted">Đang cập nhật phân tích nguyên nhân gốc rễ...</p>
                  )}
                </div>

                {/* 3. Mục tiêu SMART */}
                <div className="a3-card-box">
                  <div className="a3-box-header header-blue">
                    <span className="box-step-tag">3. SMART TARGET</span>
                    <h3 className="box-step-title">Mục Tiêu Cải Tiến Cam Kết</h3>
                  </div>
                  <ul className="smart-targets-list">
                    {mucTieu.length > 0 ? (
                      mucTieu.map((m, i) => (
                        <li key={i}>
                          <span className="target-bullet">🎯</span>
                          <span>{m}</span>
                        </li>
                      ))
                    ) : (
                      <li>Hoàn thành 100% chỉ tiêu cải tiến đã đăng ký.</li>
                    )}
                  </ul>
                </div>

              </div>

              {/* CỘT PHẢI: GIAI ĐOẠN DO - CHECK - ACT (GIẢI PHÁP - KẾT QUẢ - SOP) */}
              <div className="a3-col-right">
                
                {/* 4. Bộ giải pháp đối sách */}
                <div className="a3-card-box">
                  <div className="a3-box-header header-emerald">
                    <span className="box-step-tag">4. DO</span>
                    <h3 className="box-step-title">Giải Pháp Đối Sách Đột Phá</h3>
                  </div>
                  
                  {giaiPhap.length > 0 ? (
                    <div className="solutions-flow-list">
                      {giaiPhap.map((sol, i) => (
                        <div key={i} className="solution-flow-item">
                          <div className="sol-badge mono">{i + 1}</div>
                          <div className="sol-content">{sol}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted">Đang cập nhật các giải pháp cải tiến...</p>
                  )}
                </div>

                {/* 5. Kết quả & Hiệu quả */}
                <div className="a3-card-box">
                  <div className="a3-box-header header-cyan">
                    <span className="box-step-tag">5. CHECK</span>
                    <h3 className="box-step-title">Kết Quả Đo Lường Thực Địa</h3>
                  </div>

                  <div className="quick-metrics-grid">
                    <div className="metric-pill-item">
                      <span className="m-val">{sc.score}đ</span>
                      <span className="m-lbl">Điểm thẩm định</span>
                    </div>
                    <div className="metric-pill-item">
                      <span className="m-val">{sc.short}</span>
                      <span className="m-lbl">Xếp loại hồ sơ</span>
                    </div>
                    <div className="metric-pill-item">
                      <span className="m-val">100%</span>
                      <span className="m-lbl">An toàn NB</span>
                    </div>
                  </div>

                  <p className="a3-box-desc" style={{ marginTop: '0.75rem' }}>
                    {project.a3Report?.check || 'Đang triển khai thử nghiệm thực địa tại khoa để đối chiếu số liệu sau cải tiến.'}
                  </p>
                </div>

                {/* 6. Chuẩn hóa quy trình SOP */}
                <div className="a3-card-box">
                  <div className="a3-box-header header-purple">
                    <span className="box-step-tag">6. ACT</span>
                    <h3 className="box-step-title">Chuẩn Hóa & Bền Vững (SOP)</h3>
                  </div>
                  <p className="a3-box-desc">
                    {project.a3Report?.act || 'Đóng gói thành quy trình thao tác chuẩn SOP ban hành toàn viện, duy trì 5S và tích hợp tiêu chí đánh giá hiệu suất 3P.'}
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: BIÊN BẢN THẨM ĐỊNH QLCL (CHÍNH THỨC VÒNG 1) */}
          {activeTab === 'thamDinh' && (
            <div className="appraisal-official-sheet">
              <div className="official-sheet-header">
                <div className="official-hospital-name">BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG</div>
                <div className="official-dept-name">PHÒNG KHTH — TỔ QUẢN LÝ CHẤT LƯỢNG</div>
                <h3 className="official-doc-title">BIÊN BẢN THẨM ĐỊNH HỒ SƠ ĐỀ ÁN KAIZEN (VÒNG 1)</h3>
                <div className="official-doc-sub">Số: {project.soHieuVanBan || '.../BB-KHTH-QLCL'}</div>
              </div>

              <div className="official-meta-grid">
                <div><strong>Đề tài:</strong> {project.tenDeTai}</div>
                <div><strong>Khoa/Phòng:</strong> {project.khoaPhong} {project.khoaPhoiHop ? `(+ ${project.khoaPhoiHop})` : ''}</div>
                <div><strong>Chủ nhiệm:</strong> {leaderName}</div>
                <div><strong>Tổng điểm thẩm định:</strong> <span className="highlight-score">{sc.score}/100 ({sc.full})</span></div>
              </div>

              {/* Bảng 5 tiêu chí thẩm định */}
              <div className="table-responsive">
                <table className="appraisal-table">
                  <thead>
                    <tr>
                      <th style={{ width: '45px', textAlign: 'center' }}>STT</th>
                      <th>Tiêu chí thẩm định hồ sơ</th>
                      <th style={{ width: '80px', textAlign: 'center' }}>Điểm chuẩn</th>
                      <th style={{ width: '80px', textAlign: 'center' }}>Điểm đạt</th>
                      <th>Ghi chú & Đánh giá của Tổ QLCL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {criteria.length > 0 ? (
                      criteria.map((c, i) => (
                        <tr key={i}>
                          <td style={{ textAlign: 'center' }}>{i + 1}</td>
                          <td><strong>{c.name}</strong></td>
                          <td style={{ textAlign: 'center' }}>{c.max}đ</td>
                          <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--hv-blue)' }}>{c.score}đ</td>
                          <td>{c.note}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" style={{ textAlign: 'center', padding: '1.5rem' }}>Đã đạt điểm thẩm định Vòng 1.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Kết luận & Chữ ký */}
              <div className="appraisal-conclusion-box">
                <div className="conclusion-title">KẾT LUẬN CỦA TỔ QUẢN LÝ CHẤT LƯỢNG:</div>
                <p className="conclusion-text">
                  {project.ketLuanQLCL || 'Hồ sơ đề án hợp lệ, đạt tiêu chuẩn thẩm định Vòng 1. Đồng ý cho phép đơn vị triển khai thử nghiệm thực địa theo đúng đề cương A3.'}
                </p>
                <div className="sign-block">
                  <div className="sign-title">TỔ TRƯỞNG TỔ QUẢN LÝ CHẤT LƯỢNG</div>
                  <div className="sign-status">(Đã ký duyệt)</div>
                  <div className="sign-name">Trần Đình Vũ</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: HỒ SƠ & MINH CHỨNG */}
          {activeTab === 'hoSo' && (
            <div className="docs-panel-layout">
              <div className="docs-sub-box">
                <h3 className="docs-sub-title">Danh Mục Hồ Sơ & Minh Chứng Đã Tiếp Nhận</h3>
                {docs.length > 0 ? (
                  <div className="docs-clean-list">
                    {docs.map((d, i) => (
                      <div key={i} className="doc-clean-item">
                        <span className="doc-icon">📄</span>
                        <div className="doc-name-wrap">
                          <span className="doc-item-title">{d.title || d.name || d}</span>
                          <span className="doc-item-status">✓ Đã lưu trữ tại kho tiếp nhận tập trung</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">Đã lưu trữ hồ sơ gốc tại thư mục Tiếp nhận Đề án.</p>
                )}
              </div>

              <div className="docs-sub-box">
                <h3 className="docs-sub-title">Danh Sách Nhóm Tác Giả & Phân Công Nhiệm Vụ</h3>
                {authors.length > 0 ? (
                  <div className="authors-clean-grid">
                    {authors.map((a, i) => (
                      <div key={i} className="author-card-item">
                        <div className="author-name font-bold">👤 {a.name || a.hoTen || a}</div>
                        <div className="author-role text-muted">{a.role || a.chucVu || 'Thành viên'}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">Chủ nhiệm đề án: {leaderName}</p>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: BAN GIÁM KHẢO CHẤM ĐIỂM (5 TIÊU CHÍ, THANG 100 ĐIỂM) */}
          {activeTab === 'chamDiem' && (
            <div className="judge-scoring-sheet">
              
              <div className="scoring-sheet-header">
                <div>
                  <h3 className="sheet-heading">Phiếu Đánh Giá & Chấm Điểm Ban Giám Khảo</h3>
                  <p className="sheet-sub">Thang điểm 100 theo đúng thể lệ Hội thi Đề án Cải tiến Chất lượng Kaizen 2026.</p>
                </div>
                <div className="sheet-live-total">
                  <div className="live-num">{totalScoreCalc}</div>
                  <div className="live-rank">/100đ • {calcRank}</div>
                </div>
              </div>

              {saveSuccessMsg && (
                <div className="alert-save-success">
                  {saveSuccessMsg}
                </div>
              )}

              <form onSubmit={handleSubmitScore} className="scoring-form-clean">
                
                {/* Chọn Giám khảo */}
                <div className="form-group-clean">
                  <label className="form-label-clean">Giám Khảo Chấm Thi:</label>
                  <select 
                    className="form-select-clean"
                    value={judgeName}
                    onChange={(e) => setJudgeName(e.target.value)}
                  >
                    {judgesList && judgesList.length > 0 ? (
                      judgesList.map((j, i) => {
                        const name = j.hoTen || j;
                        return <option key={i} value={name}>{name}</option>;
                      })
                    ) : (
                      <>
                        <option value="Sếp Trần Đình Vũ - Tổ trưởng Tổ QLCL">Sếp Trần Đình Vũ - Tổ trưởng Tổ QLCL</option>
                        <option value="BS CKI Ma Văn Hoàng - Trưởng phòng KHTH">BS CKI Ma Văn Hoàng - Trưởng phòng KHTH</option>
                        <option value="Ban Giám Khảo Hội Thi">Ban Giám Khảo Hội Thi</option>
                      </>
                    )}
                  </select>
                </div>

                {/* 5 Tiêu chí chấm điểm */}
                <div className="criteria-inputs-grid">
                  
                  {/* Tiêu chí 1 */}
                  <div className="criteria-input-card">
                    <div className="crit-card-top">
                      <span className="crit-num">1</span>
                      <span className="crit-name">Tính cấp thiết & Số liệu nền (15đ)</span>
                      <span className="crit-val font-bold">{scoreP1}đ</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="15" 
                      step="0.5" 
                      value={scoreP1}
                      onChange={(e) => setScoreP1(Number(e.target.value))}
                      className="clean-range-slider"
                    />
                    <div className="slider-hints">
                      <span>Đạt (5đ)</span>
                      <span>Khá (10đ)</span>
                      <span>Xuất sắc (15đ)</span>
                    </div>
                  </div>

                  {/* Tiêu chí 2 */}
                  <div className="criteria-input-card">
                    <div className="crit-card-top">
                      <span className="crit-num">2</span>
                      <span className="crit-name">Phương pháp luận 5 Whys & SMART (25đ)</span>
                      <span className="crit-val font-bold">{scoreP2}đ</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="25" 
                      step="0.5" 
                      value={scoreP2}
                      onChange={(e) => setScoreP2(Number(e.target.value))}
                      className="clean-range-slider"
                    />
                    <div className="slider-hints">
                      <span>Đạt (10đ)</span>
                      <span>Khá (18đ)</span>
                      <span>Xuất sắc (25đ)</span>
                    </div>
                  </div>

                  {/* Tiêu chí 3 */}
                  <div className="criteria-input-card">
                    <div className="crit-card-top">
                      <span className="crit-num">3</span>
                      <span className="crit-name">Giải pháp đối sách & Tính khả thi (35đ)</span>
                      <span className="crit-val font-bold">{scoreP3}đ</span>
                    </div>
                    <input 
                      type="range" 
                      min="15" 
                      max="35" 
                      step="0.5" 
                      value={scoreP3}
                      onChange={(e) => setScoreP3(Number(e.target.value))}
                      className="clean-range-slider"
                    />
                    <div className="slider-hints">
                      <span>Đạt (15đ)</span>
                      <span>Khá (26đ)</span>
                      <span>Xuất sắc (35đ)</span>
                    </div>
                  </div>

                  {/* Tiêu chí 4 */}
                  <div className="criteria-input-card">
                    <div className="crit-card-top">
                      <span className="crit-num">4</span>
                      <span className="crit-name">Hiệu quả cải tiến & An toàn NB (15đ)</span>
                      <span className="crit-val font-bold">{scoreP4}đ</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="15" 
                      step="0.5" 
                      value={scoreP4}
                      onChange={(e) => setScoreP4(Number(e.target.value))}
                      className="clean-range-slider"
                    />
                    <div className="slider-hints">
                      <span>Đạt (5đ)</span>
                      <span>Khá (10đ)</span>
                      <span>Xuất sắc (15đ)</span>
                    </div>
                  </div>

                  {/* Tiêu chí 5 */}
                  <div className="criteria-input-card">
                    <div className="crit-card-top">
                      <span className="crit-num">5</span>
                      <span className="crit-name">Chuẩn hóa SOP & Lan tỏa (10đ)</span>
                      <span className="crit-val font-bold">{scoreP5}đ</span>
                    </div>
                    <input 
                      type="range" 
                      min="3" 
                      max="10" 
                      step="0.5" 
                      value={scoreP5}
                      onChange={(e) => setScoreP5(Number(e.target.value))}
                      className="clean-range-slider"
                    />
                    <div className="slider-hints">
                      <span>Đạt (3đ)</span>
                      <span>Khá (7đ)</span>
                      <span>Xuất sắc (10đ)</span>
                    </div>
                  </div>

                </div>

                {/* Nhận xét của Giám khảo */}
                <div className="form-group-clean" style={{ marginTop: '1rem' }}>
                  <label className="form-label-clean">Nhận Xét & Đóng Góp Ý Kiến:</label>
                  <textarea 
                    className="form-textarea-clean"
                    rows="3"
                    placeholder="Ghi nhận xét ưu điểm, điểm cần khắc phục và định hướng cho đơn vị..."
                    value={judgeComment}
                    onChange={(e) => setJudgeComment(e.target.value)}
                  ></textarea>
                </div>

                {/* Nút lưu điểm */}
                <div className="form-actions-clean">
                  <button type="submit" className="btn-confirm-score-clean">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                      <polyline points="17 21 17 13 7 13 7 21"/>
                      <polyline points="7 3 7 8 15 8"/>
                    </svg>
                    <span>Lưu & Xác Nhận Điểm Số Đề Án ({totalScoreCalc}đ)</span>
                  </button>
                </div>

              </form>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
