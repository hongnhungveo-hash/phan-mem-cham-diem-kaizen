import React, { useState, useEffect } from 'react';
import './A3DetailModal.css';
import { getCleanLeaderName } from './kaizenData';

export default function A3DetailModal({ project, isOpen, onClose, onSaveScore, judgesList = [] }) {
  const [activeTab, setActiveTab] = useState('tq'); // 'tq' | 'tt' | 'pt' | 'gp' | 'kq' | 'hs' | 'chamDiem'

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
      setActiveTab('tq');
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
  }, [project, judgesList]);

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

  // Tính điểm & phân hạng Tier từ Prototype v2
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

  const sc = getScore(project);
  const qs = project.quickSummary || {};
  const authors = project.authorsDetailed || [];
  const timeline = project.timeline || [];
  const fiveWhys = project.fiveWhys || [];
  const docs = project.documents || [];
  const criteria = project.criteria || [];
  const mucTieu = project.mucTieu || [];
  const soLieuBanDau = project.soLieuBanDau || [];
  const giaiPhap = project.giaiPhap || [];

  // Tính tổng điểm form BGK
  const totalScoreCalc = Math.round((Number(scoreP1) + Number(scoreP2) + Number(scoreP3) + Number(scoreP4) + Number(scoreP5)) * 10) / 10;
  const calcRank = totalScoreCalc >= 90 ? 'Xuất sắc' : (totalScoreCalc >= 80 ? 'Giỏi' : (totalScoreCalc >= 70 ? 'Khá' : (totalScoreCalc >= 50 ? 'Đạt' : 'Chưa đạt')));

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

    setSaveSuccessMsg(`✓ Đã lưu kết quả chấm điểm thành công! Điểm: ${totalScoreCalc}/100 (${calcRank}).`);
  };

  const metaRows = [
    ['Khoa/Phòng chủ trì', project.khoaPhong],
    ['Phối hợp', project.khoaPhoiHop || '—'],
    ['Chủ nhiệm', project.chuNhiem || project.tacGia || getCleanLeaderName(project) || '—'],
    ['Phạm vi', project.phamVi || '—'],
    ['Thời gian', project.thoiGian || '—'],
    ['Số hiệu văn bản', project.soHieuVanBan || '—']
  ];

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div className="modal-window" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        
        {/* MODAL HEADER */}
        <div className="modal-header">
          <div>
            <span className="brand-tag mono">{project.maDeTai} • {project.nhanh}</span>
            <h2 id="modalTenDeTai" style={{ fontSize: '1.15rem', fontWeight: 800, marginTop: '0.25rem', color: 'var(--text-primary)' }}>
              {project.tenDeTai || project.tenSanPham}
            </h2>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Đóng báo cáo A3" title="Đóng (Esc)">
            &times;
          </button>
        </div>

        {/* TAB NAVIGATION BAR (6 PDCA TABS + BGK CHẤM ĐIỂM) */}
        <div className="a3-tabs" role="tablist">
          <button 
            type="button" 
            className="a3-tab-btn" 
            aria-selected={activeTab === 'tq'} 
            onClick={() => setActiveTab('tq')}
          >
            Tổng quan
          </button>
          <button 
            type="button" 
            className="a3-tab-btn" 
            aria-selected={activeTab === 'tt'} 
            onClick={() => setActiveTab('tt')}
          >
            Thực trạng & Mục tiêu
          </button>
          <button 
            type="button" 
            className="a3-tab-btn" 
            aria-selected={activeTab === 'pt'} 
            onClick={() => setActiveTab('pt')}
          >
            Phân tích 5 Whys
          </button>
          <button 
            type="button" 
            className="a3-tab-btn" 
            aria-selected={activeTab === 'gp'} 
            onClick={() => setActiveTab('gp')}
          >
            Giải pháp & Lộ trình
          </button>
          <button 
            type="button" 
            className="a3-tab-btn" 
            aria-selected={activeTab === 'kq'} 
            onClick={() => setActiveTab('kq')}
          >
            Kết quả & Chấm điểm
          </button>
          <button 
            type="button" 
            className="a3-tab-btn" 
            aria-selected={activeTab === 'hs'} 
            onClick={() => setActiveTab('hs')}
          >
            Hồ sơ & Tác giả
          </button>
          <button 
            type="button" 
            className="a3-tab-btn tab-score-live" 
            aria-selected={activeTab === 'chamDiem'} 
            onClick={() => setActiveTab('chamDiem')}
          >
            ⚖️ Ban giám khảo chấm điểm
          </button>
        </div>

        {/* MODAL BODY PANELS */}
        <div className="modal-body">
          
          {/* TAB 1: TỔNG QUAN */}
          {activeTab === 'tq' && (
            <div className="a3-panel active">
              <div className="a3-score-hero">
                <div>
                  <span className={`a3-score-num tier-${sc.tier}`}>{sc.score}</span>
                  <span className="a3-score-max">/100 điểm</span>
                  <div className={`a3-score-rank tier-${sc.tier}`}>★ {sc.full}</div>
                </div>
                <div style={{ flex: 1, minWidth: '200px', fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Ý tưởng cốt lõi:</strong> {qs.idea || project.tenSanPham || project.tenDeTai || '—'}
                </div>
              </div>

              <div className="a3-meta-grid">
                {metaRows.map(([k, v], i) => (
                  <div key={i} className="a3-meta-cell">
                    <div className="k">{k}</div>
                    <div className="v">{v}</div>
                  </div>
                ))}
              </div>

              <div className="a3-meta-cell">
                <div className="k">Chủ đề dự thi</div>
                <div className="v" style={{ fontWeight: 600, lineHeight: 1.5 }}>{project.chuDe || '—'}</div>
              </div>

              {((qs.painPoints && qs.painPoints.length > 0) || (qs.solutions && qs.solutions.length > 0)) && (
                <div className="a3-two-col">
                  <div className="modal-section-card">
                    <div className="modal-section-title" style={{ color: 'var(--hv-rose)' }}>Điểm đau / lãng phí</div>
                    <ul className="a3-ul">
                      {(qs.painPoints || []).map((x, i) => <li key={i}>{x}</li>)}
                    </ul>
                  </div>
                  <div className="modal-section-card">
                    <div className="modal-section-title" style={{ color: 'var(--hv-emerald)' }}>Giải pháp then chốt</div>
                    <ul className="a3-ul">
                      {(qs.solutions || []).map((x, i) => <li key={i}>{x}</li>)}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: THỰC TRẠNG & MỤC TIÊU */}
          {activeTab === 'tt' && (
            <div className="a3-panel active">
              <div className="modal-section-card">
                <div className="modal-section-title">Bối cảnh & thực trạng lâm sàng</div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                  {project.thucTrang || 'Đang cập nhật'}
                </p>
              </div>

              <div className="modal-section-card">
                <div className="modal-section-title">Số liệu nền (Baseline)</div>
                <ul className="a3-ul">
                  {soLieuBanDau.length > 0 ? (
                    soLieuBanDau.map((x, i) => <li key={i}>{x}</li>)
                  ) : (
                    <li>Chưa có số liệu đo lường ban đầu.</li>
                  )}
                </ul>
              </div>

              {mucTieu.length > 0 && (
                <div className="modal-section-card">
                  <div className="modal-section-title">Mục tiêu cải tiến (SMART)</div>
                  <div className="a3-table-wrap">
                    <table className="a3-table">
                      <thead>
                        <tr>
                          <th>Chỉ tiêu</th>
                          <th>Hiện trạng</th>
                          <th>Mục tiêu</th>
                          <th>Phương pháp đo</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mucTieu.map((g, i) => (
                          <tr key={i}>
                            <td><strong>{g.chiTieu}</strong></td>
                            <td>{g.hienTrang}</td>
                            <td style={{ color: 'var(--hv-emerald)', fontWeight: 700 }}>{g.mucTieu}</td>
                            <td>{g.phuongPhap}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: PHÂN TÍCH 5 WHYS */}
          {activeTab === 'pt' && (
            <div className="a3-panel active">
              <div className="modal-section-card">
                <div className="modal-section-title">Phân tích gốc rễ (5 Whys)</div>
                {fiveWhys && fiveWhys.length > 0 ? (
                  fiveWhys.map((w, i) => (
                    <div key={i} style={{ marginBottom: '0.75rem', paddingLeft: '0.85rem', borderLeft: '2px solid var(--hv-cyan)' }}>
                      <strong style={{ color: 'var(--hv-cyan)' }}>{w.level}:</strong> {w.question}<br/>
                      <span style={{ color: 'var(--text-secondary)' }}>► Trả lời: {w.answer}</span>
                    </div>
                  ))
                ) : (
                  <div style={{ color: 'var(--text-muted)' }}>Chưa cập nhật sơ đồ 5 Whys cho đề án này.</div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: GIẢI PHÁP & LỘ TRÌNH */}
          {activeTab === 'gp' && (
            <div className="a3-panel active">
              <div className="modal-section-card">
                <div className="modal-section-title">Giải pháp thực thi (Countermeasures)</div>
                <ul className="a3-ul">
                  {giaiPhap.length > 0 ? (
                    giaiPhap.map((x, i) => <li key={i}>{x}</li>)
                  ) : (
                    <li>Đang cập nhật giải pháp.</li>
                  )}
                </ul>
              </div>

              <div className="modal-section-card">
                <div className="modal-section-title">Sản phẩm đầu ra</div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                  {project.sanPhamDauRa || '—'}
                </p>
              </div>

              {timeline.length > 0 && (
                <div className="modal-section-card">
                  <div className="modal-section-title">Lộ trình triển khai</div>
                  {timeline.map((t, i) => (
                    <div key={i} className="a3-tl-item">
                      <div className={`a3-tl-dot ${t.status || 'upcoming'}`}></div>
                      <div>
                        <div className="a3-tl-phase">{t.phase}</div>
                        <div className="a3-tl-task">{t.task}</div>
                        <div className="a3-tl-time">{t.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: KẾT QUẢ & CHẤM ĐIỂM */}
          {activeTab === 'kq' && (
            <div className="a3-panel active">
              {qs.keyMetrics && qs.keyMetrics.length > 0 && (
                <div className="modal-section-card">
                  <div className="modal-section-title" style={{ color: 'var(--hv-emerald)' }}>Kết quả Trước → Sau</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '0.6rem' }}>
                    {qs.keyMetrics.map((m, i) => (
                      <div key={i} className="a3-metric-card">
                        <div className="a3-metric-label">{m.label}</div>
                        <div className="a3-metric-flow">
                          <span className="a3-metric-before">{m.before}</span>
                          <span className="a3-metric-arrow">→</span>
                          <span className="a3-metric-after">{m.after}</span>
                        </div>
                        {m.note && <div className="a3-metric-note">{m.note}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {criteria.length > 0 && (
                <div className="modal-section-card">
                  <div className="modal-section-title">Bảng thẩm định & chấm điểm sơ bộ (Tổ QLCL)</div>
                  <div className="a3-table-wrap">
                    <table className="a3-table">
                      <thead>
                        <tr>
                          <th style={{ textAlign: 'center' }}>STT</th>
                          <th>Tiêu chí</th>
                          <th style={{ textAlign: 'center' }}>Điểm</th>
                          <th>Nhận xét hội đồng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {criteria.map((c, i) => (
                          <tr key={i}>
                            <td style={{ textAlign: 'center' }}>{c.stt || i + 1}</td>
                            <td><strong>{c.tieuChi}</strong></td>
                            <td style={{ textAlign: 'center', color: 'var(--hv-cyan)', fontWeight: 800, whiteSpace: 'nowrap' }}>{c.diem}</td>
                            <td>{c.nhanXet}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.75rem', marginTop: '0.85rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>TỔNG ĐIỂM THẨM ĐỊNH:</span>
                    <span className={`card-score-badge badge-tier-${sc.tier} mono`} style={{ fontSize: '1rem' }}>
                      ★ {sc.score}đ • {sc.full}
                    </span>
                  </div>
                </div>
              )}

              {project.ketLuanQLCL && (
                <div className="a3-callout">
                  <strong style={{ color: 'var(--hv-emerald)' }}>Kết luận Tổ QLCL:</strong> {project.ketLuanQLCL}
                </div>
              )}
            </div>
          )}

          {/* TAB 6: HỒ SƠ & TÁC GIẢ */}
          {activeTab === 'hs' && (
            <div className="a3-panel active">
              <div className="modal-section-card">
                <div className="modal-section-title">Nhóm tác giả & đơn vị phối hợp</div>
                <div className="a3-meta-grid">
                  {authors && authors.length > 0 ? (
                    authors.map((a, i) => (
                      <div key={i} className="a3-meta-cell">
                        <div className="v"><strong>{a.name || a.hoTen}</strong></div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>{a.title || a.chucVu}</div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--hv-cyan)', fontWeight: 700, marginTop: '0.15rem' }}>{a.role || a.vaiTro}</div>
                      </div>
                    ))
                  ) : (
                    <div className="a3-meta-cell">
                      <div className="v">{project.nhomTacGia || project.tacGia || '—'}</div>
                    </div>
                  )}
                </div>
              </div>

              {docs && docs.length > 0 && (
                <div className="modal-section-card">
                  <div className="modal-section-title">Hồ sơ minh chứng đính kèm</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '0.5rem' }}>
                    {docs.map((d, i) => (
                      <div key={i} className="a3-doc-item">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
                        <span>{d.label || d.fileName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 7: CHẤM ĐIỂM BAN GIÁM KHẢO */}
          {activeTab === 'chamDiem' && (
            <div className="a3-panel active">
              <form onSubmit={handleSubmitScore} className="modal-scoring-form">
                
                <div className="a3-score-hero" style={{ marginBottom: '1rem' }}>
                  <div>
                    <span className="a3-score-num mono" style={{ color: 'var(--hv-cyan)' }}>{totalScoreCalc}</span>
                    <span className="a3-score-max">/100 điểm</span>
                    <div className="a3-score-rank" style={{ color: 'var(--hv-cyan)' }}>★ Xếp loại dự kiến: {calcRank}</div>
                  </div>
                  <div style={{ flex: 1, minWidth: '220px' }}>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                      Giám khảo chấm điểm:
                    </label>
                    <input 
                      type="text" 
                      className="scoring-input" 
                      value={judgeName} 
                      onChange={(e) => setJudgeName(e.target.value)} 
                      placeholder="Nhập tên Giám khảo..." 
                      required
                    />
                  </div>
                </div>

                {saveSuccessMsg && (
                  <div className="a3-callout" style={{ borderLeftColor: 'var(--hv-emerald)', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--hv-emerald)', fontWeight: 700, marginBottom: '1rem' }}>
                    {saveSuccessMsg}
                  </div>
                )}

                <div className="modal-section-card">
                  <div className="modal-section-title">Khung điểm 5 tiêu chí chuẩn hội đồng</div>

                  <div className="score-criteria-list">
                    
                    {/* Tiêu chí 1 */}
                    <div className="score-row">
                      <div className="score-row-info">
                        <strong>1. Tính cấp thiết & thực trạng (Max 15đ)</strong>
                        <span>Giải quyết điểm nghẽn an toàn người bệnh / 8 lãng phí Muda</span>
                      </div>
                      <div className="score-row-ctrl">
                        <input 
                          type="range" 
                          min="0" 
                          max="15" 
                          step="0.5" 
                          value={scoreP1} 
                          onChange={(e) => setScoreP1(e.target.value)} 
                        />
                        <span className="score-val-badge mono">{scoreP1}</span>
                      </div>
                    </div>

                    {/* Tiêu chí 2 */}
                    <div className="score-row">
                      <div className="score-row-info">
                        <strong>2. Phương pháp luận PDCA & Phân tích gốc (Max 25đ)</strong>
                        <span>Ứng dụng 5 Whys, Ishikawa, A3 Logic chặt chẽ</span>
                      </div>
                      <div className="score-row-ctrl">
                        <input 
                          type="range" 
                          min="0" 
                          max="25" 
                          step="0.5" 
                          value={scoreP2} 
                          onChange={(e) => setScoreP2(e.target.value)} 
                        />
                        <span className="score-val-badge mono">{scoreP2}</span>
                      </div>
                    </div>

                    {/* Tiêu chí 3 */}
                    <div className="score-row">
                      <div className="score-row-info">
                        <strong>3. Hiệu quả thực tế & Đo lường Gemba (Max 35đ)</strong>
                        <span>Chỉ số Before/After rõ ràng, tiết kiệm chi phí/thời gian</span>
                      </div>
                      <div className="score-row-ctrl">
                        <input 
                          type="range" 
                          min="0" 
                          max="35" 
                          step="0.5" 
                          value={scoreP3} 
                          onChange={(e) => setScoreP3(e.target.value)} 
                        />
                        <span className="score-val-badge mono">{scoreP3}</span>
                      </div>
                    </div>

                    {/* Tiêu chí 4 */}
                    <div className="score-row">
                      <div className="score-row-info">
                        <strong>4. Tính ứng dụng SOP & Nhân rộng (Max 15đ)</strong>
                        <span>Đóng gói quy trình thao tác chuẩn, nhân rộng toàn viện</span>
                      </div>
                      <div className="score-row-ctrl">
                        <input 
                          type="range" 
                          min="0" 
                          max="15" 
                          step="0.5" 
                          value={scoreP4} 
                          onChange={(e) => setScoreP4(e.target.value)} 
                        />
                        <span className="score-val-badge mono">{scoreP4}</span>
                      </div>
                    </div>

                    {/* Tiêu chí 5 */}
                    <div className="score-row">
                      <div className="score-row-info">
                        <strong>5. Sáng tạo & Kỹ năng thuyết trình (Max 10đ)</strong>
                        <span>Sáng kiến đột phá, trả lời phản biện xuất sắc</span>
                      </div>
                      <div className="score-row-ctrl">
                        <input 
                          type="range" 
                          min="0" 
                          max="10" 
                          step="0.5" 
                          value={scoreP5} 
                          onChange={(e) => setScoreP5(e.target.value)} 
                        />
                        <span className="score-val-badge mono">{scoreP5}</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="modal-section-card" style={{ marginTop: '1rem' }}>
                  <div className="modal-section-title">Nhận xét & khuyến nghị của Ban giám khảo</div>
                  <textarea 
                    className="scoring-textarea" 
                    rows="3" 
                    placeholder="Nhập nhận xét chuyên môn, ưu điểm, hạn chế và chỉ đạo hoàn thiện cho nhóm tác giả..."
                    value={judgeComment}
                    onChange={(e) => setJudgeComment(e.target.value)}
                  ></textarea>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.25rem' }}>
                  <button type="button" className="btn-glass-secondary" onClick={onClose}>
                    Đóng
                  </button>
                  <button type="submit" className="btn-glow-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Lưu kết quả chấm điểm</span>
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
