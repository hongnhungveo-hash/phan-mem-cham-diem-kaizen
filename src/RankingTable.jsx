import React, { useState, useMemo } from 'react';
import './RankingTable.css';
import { getCleanLeaderName, GEMBA_CHECKLIST_CRITERIA, getDefaultGembaChecklist } from './kaizenData';

export default function RankingTable({ 
  data = [], 
  loading = false, 
  onSelectProject,
  onPrint,
  onRefresh,
  activeStep = 'step1',
  onStepChange,
  gembaChecklists = {},
  onSaveGembaChecklist,
  onOpenScoreForProject,
  rawScoreRows = [],
  judgesList = [],
  comments = {}
}) {
  // 1. Quản lý Bước Tiến Độ Đề Án (Workflow Stepper)
  const [currentStep, setCurrentStep] = useState(activeStep);

  const handleStepSelect = (step) => {
    setCurrentStep(step);
    if (onStepChange) onStepChange(step);
  };

  // Đồng bộ khi prop activeStep thay đổi từ ngoài (ví dụ từ Bento Home)
  React.useEffect(() => {
    if (activeStep) {
      setCurrentStep(activeStep);
    }
  }, [activeStep]);

  // Bộ lọc chung: Tìm kiếm & Phân nhánh A/B
  const [filterBranch, setFilterBranch] = useState('ALL'); // 'ALL', 'Nhánh A', 'Nhánh B'
  const [searchQuery, setSearchQuery] = useState('');

  // 2. Quản lý Đề án được chọn trong Bước 2 (Bảng kiểm Thư ký)
  const [selectedGembaMaDeTai, setSelectedGembaMaDeTai] = useState(data[0]?.maDeTai || '');
  const [gembaSaveSuccess, setGembaSaveSuccess] = useState(false);

  React.useEffect(() => {
    if (!selectedGembaMaDeTai && data.length > 0) {
      setSelectedGembaMaDeTai(data[0].maDeTai);
    }
  }, [data, selectedGembaMaDeTai]);

  // Lấy dữ liệu bảng kiểm hiện tại của đề án được chọn
  const activeGembaProject = data.find(p => p.maDeTai === selectedGembaMaDeTai) || data[0];

  const currentChecklist = useMemo(() => {
    if (!activeGembaProject) return null;
    return gembaChecklists[activeGembaProject.maDeTai] || getDefaultGembaChecklist(activeGembaProject);
  }, [gembaChecklists, activeGembaProject]);

  // State cục bộ chỉnh sửa bảng kiểm thực địa
  const [localChecklistItems, setLocalChecklistItems] = useState({});
  const [localGembaNote, setLocalGembaNote] = useState('');
  const [localGembaQualified, setLocalGembaQualified] = useState(true);

  React.useEffect(() => {
    if (currentChecklist) {
      setLocalChecklistItems(currentChecklist.items || {});
      setLocalGembaNote(currentChecklist.nhanXetThucDia || '');
      setLocalGembaQualified(currentChecklist.duDieuKienChungKet !== false);
      setGembaSaveSuccess(false);
    }
  }, [currentChecklist, selectedGembaMaDeTai]);

  // Tính tổng điểm thực địa dựa trên các mục chọn
  const calculatedGembaScore = useMemo(() => {
    let total = 0;
    GEMBA_CHECKLIST_CRITERIA.forEach(crit => {
      const item = localChecklistItems[crit.id] || { status: 'pass' };
      if (item.status === 'pass') {
        total += crit.maxScore;
      } else if (item.status === 'review') {
        total += Math.round(crit.maxScore * 0.7);
      } else {
        total += 0;
      }
    });
    return total;
  }, [localChecklistItems]);

  const handleUpdateChecklistItem = (critId, status, note) => {
    setLocalChecklistItems(prev => ({
      ...prev,
      [critId]: {
        status,
        note: note !== undefined ? note : (prev[critId]?.note || '')
      }
    }));
  };

  const handleSaveCurrentGemba = () => {
    if (!activeGembaProject || !onSaveGembaChecklist) return;
    const updated = {
      ...(currentChecklist || getDefaultGembaChecklist(activeGembaProject)),
      maDeTai: activeGembaProject.maDeTai,
      ngayKiemTra: new Date().toLocaleDateString('vi-VN'),
      chuyenVienKiemTra: 'Thư ký Tổ QLCL (Đỗ Thị Hồng Nhung)',
      trangThaiThucDia: localGembaQualified ? 'Đã thẩm định đạt chuẩn' : 'Cần bổ sung thực địa',
      duDieuKienChungKet: localGembaQualified,
      diemThucDia: calculatedGembaScore,
      items: localChecklistItems,
      nhanXetThucDia: localGembaNote
    };
    onSaveGembaChecklist(activeGembaProject.maDeTai, updated);
    setGembaSaveSuccess(true);
    setTimeout(() => setGembaSaveSuccess(false), 2500);
  };

  // Dữ liệu lọc chung
  const filteredData = data.filter(row => {
    const matchBranch = filterBranch === 'ALL' || row.nhanh === filterBranch;
    const matchSearch = !searchQuery || 
      (row.tenDeTai && row.tenDeTai.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.tenSanPham && row.tenSanPham.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.maDeTai && row.maDeTai.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.khoaPhong && row.khoaPhong.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.nhomTacGia && row.nhomTacGia.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchBranch && matchSearch;
  });

  const countAll = data.length;
  const countA = data.filter(r => r.nhanh === 'Nhánh A').length;
  const countB = data.filter(r => r.nhanh === 'Nhánh B').length;

  if (loading) {
    return <div className="loading-state text-center text-muted">Đang tải danh mục đề án...</div>;
  }

  if (data.length === 0) {
    return <div className="empty-state text-center text-muted">Chưa có đề án nào trong danh mục tiếp nhận.</div>;
  }

  return (
    <div className="ranking-wrapper">
      
      {/* HEADER NGHỊ ĐỊNH 30 (KHI IN ẤN DANH MỤC TIẾP NHẬN) */}
      <div className="print-only print-header-tonghop">
        <table className="print-header-table">
          <tbody>
            <tr>
              <td style={{width: '46%', textAlign: 'center', verticalAlign: 'top'}}>
                <div className="print-org-upper">CÔNG TY TNHH PHÁT TRIỂN Y HỌC VIỆT</div>
                <div className="print-org-title">BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG</div>
                <div className="print-divider-left"></div>
                <div className="print-doc-num">Số: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /DS-KHTH-QLCL</div>
              </td>
              <td style={{width: '54%', textAlign: 'center', verticalAlign: 'top'}}>
                <div className="print-nation-title">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
                <div className="print-nation-motto">Độc lập – Tự do – Hạnh phúc</div>
                <div className="print-divider-right"></div>
                <div className="print-date">Chí Đám, ngày 05 tháng 09 năm 2026</div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="print-main-title">
          {currentStep === 'step1' && 'DANH MỤC TIẾP NHẬN & ĐIỂM SƠ KHẢO ĐỀ ÁN CẢI TIẾN CHẤT LƯỢNG 2026'}
          {currentStep === 'step2' && 'BIÊN BẢN THẨM ĐỊNH THỰC ĐỊA GEMBA — HỘI THI CẢI TIẾN 2026'}
          {currentStep === 'step3' && 'KẾT QUẢ CHẤM THI VÒNG CHUNG KẾT HỘI THI CẢI TIẾN NĂM 2026'}
        </div>
        <div className="print-sub-title">
          {currentStep === 'step1' && '(Giai đoạn 1: Tiếp nhận hồ sơ đăng ký và điểm thẩm định sơ bộ của Tổ QLCL)'}
          {currentStep === 'step2' && '(Giai đoạn 2: Bảng kiểm hiện trường dành cho Thư ký Ban Tổ Chức)'}
          {currentStep === 'step3' && '(Giai đoạn 3: Tổng hợp kết quả đánh giá từ Hội đồng Ban Giám khảo)'}
        </div>
      </div>

      {/* ==========================================================================
          THANH NÚT TRẠNG THÁI TIẾN ĐỘ ĐỀ ÁN (INTERACTIVE WORKFLOW STEPPER DOCK)
          ========================================================================== */}
      <div className="workflow-stepper-container screen-only">
        <div className="workflow-stepper-header">
          <div className="workflow-stepper-title-wrap">
            <span className="workflow-badge">Quy trình điều hành 3 bước</span>
            <h2 className="workflow-main-title">Tiến độ thực thi hội thi đề án cải tiến 2026</h2>
          </div>
          <div className="workflow-stepper-telemetry mono">
            Tổng số: <strong>{data.length} đề án</strong> • Đang thực nghiệm thực địa
          </div>
        </div>

        <div className="workflow-steps-dock" role="tablist" aria-label="Các giai đoạn tiến độ đề án">
          
          {/* NÚT BƯỚC 1 */}
          <button 
            type="button" 
            role="tab"
            aria-selected={currentStep === 'step1'}
            className={`workflow-step-btn ${currentStep === 'step1' ? 'active' : 'completed'}`}
            onClick={() => handleStepSelect('step1')}
          >
            <div className="step-btn-num">
              <span className="step-circle">1</span>
              <svg className="step-check-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div className="step-btn-info">
              <div className="step-btn-name">Bước 1: Nộp đề án</div>
              <div className="step-btn-sub">Nội dung 19 đề án & Điểm sơ khảo</div>
            </div>
            <span className="step-status-chip chip-done">Hoàn thành</span>
          </button>

          {/* Mũi tên kết nối 1 -> 2 */}
          <div className="step-connector-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>

          {/* NÚT BƯỚC 2 */}
          <button 
            type="button" 
            role="tab"
            aria-selected={currentStep === 'step2'}
            className={`workflow-step-btn ${currentStep === 'step2' ? 'active' : ''}`}
            onClick={() => handleStepSelect('step2')}
          >
            <div className="step-btn-num">
              <span className="step-circle">2</span>
            </div>
            <div className="step-btn-info">
              <div className="step-btn-name">Bước 2: Thực địa & thẩm định</div>
              <div className="step-btn-sub">Bảng kiểm Thư ký Ban Tổ Chức</div>
            </div>
            <span className="step-status-chip chip-active">Đang diễn ra</span>
          </button>

          {/* Mũi tên kết nối 2 -> 3 */}
          <div className="step-connector-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>

          {/* NÚT BƯỚC 3 */}
          <button 
            type="button" 
            role="tab"
            aria-selected={currentStep === 'step3'}
            className={`workflow-step-btn ${currentStep === 'step3' ? 'active' : ''}`}
            onClick={() => handleStepSelect('step3')}
          >
            <div className="step-btn-num">
              <span className="step-circle">3</span>
            </div>
            <div className="step-btn-info">
              <div className="step-btn-name">Bước 3: Chung kết</div>
              <div className="step-btn-sub">Kết nối chấm điểm Ban Giám Khảo</div>
            </div>
            <span className="step-status-chip chip-upcoming">Sắp diễn ra</span>
          </button>

        </div>
      </div>

      {/* ==========================================================================
          BƯỚC 1: NỘP ĐỀ ÁN (NỘI DUNG CÁC ĐỀ ÁN & ĐIỂM PHẦN SƠ KHẢO)
          ========================================================================== */}
      {currentStep === 'step1' && (
        <div className="step-content-pane">
          {/* THÔNG BÁO TIẾN ĐỘ BƯỚC 1 */}
          <div className="screen-only step-intro-banner banner-step1">
            <div className="banner-icon">📋</div>
            <div className="banner-text">
              <strong>Bước 1: Tiếp nhận đề án & thẩm định sơ khảo</strong> — Toàn bộ 19 đề án sáng kiến cải tiến y tế đã hoàn tất nộp hồ sơ, được 
              <strong> Tổ Quản lý Chất lượng thẩm định đề cương A3</strong> và ban hành thông báo phê duyệt triển khai thử nghiệm thực địa với thang điểm sơ khảo từ 80 đến 96 điểm.
            </div>
          </div>

          {/* BỘ LỌC & TÌM KIẾM */}
          <div className="ranking-controls screen-only">
            <div className="branch-filter-tabs">
              <button 
                type="button"
                className={`filter-tab-btn ${filterBranch === 'ALL' ? 'active' : ''}`}
                onClick={() => setFilterBranch('ALL')}
              >
                Tất cả đề tài <span className="tab-counter">{countAll}</span>
              </button>
              <button 
                type="button"
                className={`filter-tab-btn ${filterBranch === 'Nhánh A' ? 'active' : ''}`}
                onClick={() => setFilterBranch('Nhánh A')}
              >
                Nhánh A (Nội bộ khoa) <span className="tab-counter">{countA}</span>
              </button>
              <button 
                type="button"
                className={`filter-tab-btn ${filterBranch === 'Nhánh B' ? 'active' : ''}`}
                onClick={() => setFilterBranch('Nhánh B')}
              >
                Nhánh B (Liên khoa) <span className="tab-counter">{countB}</span>
              </button>
            </div>

            <div className="ranking-actions-right">
              <div className="search-box-wrapper">
                <input
                  type="text"
                  className="ranking-search-input"
                  placeholder="Tìm mã đề tài, tên sản phẩm, khoa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <button 
                type="button" 
                className="btn-control-action" 
                onClick={onPrint || (() => window.print())} 
                title="In danh mục tiếp nhận đề án chuẩn Nghị định 30"
              >
                In danh mục
              </button>
              <button 
                type="button" 
                className="btn-control-action" 
                onClick={onRefresh} 
                disabled={loading}
                title="Làm mới danh sách từ dữ liệu tiếp nhận"
              >
                {loading ? 'Đang tải...' : 'Làm mới'}
              </button>
            </div>
          </div>

          {/* BẢNG SỔ TIẾP NHẬN ĐỀ ÁN & ĐIỂM SƠ KHẢO */}
          <div className="table-responsive">
            <table className="ranking-table">
              <thead>
                <tr>
                  <th style={{width: '45px', textAlign: 'center'}}>STT</th>
                  <th style={{width: '90px', textAlign: 'center'}}>Mã đề tài</th>
                  <th style={{minWidth: '240px'}}>Tên sản phẩm & đề án cải tiến</th>
                  <th style={{minWidth: '150px'}}>Khoa / Phòng chủ trì</th>
                  <th style={{width: '75px', textAlign: 'center'}}>Nhánh</th>
                  <th style={{minWidth: '135px'}}>Chủ nhiệm đề án</th>
                  <th style={{width: '120px', textAlign: 'center'}}>Điểm sơ khảo</th>
                  <th style={{width: '135px', textAlign: 'center'}}>Xếp loại duyệt</th>
                  <th className="screen-only" style={{width: '120px', textAlign: 'center'}}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="text-center text-muted" style={{padding: '2rem'}}>
                      Không tìm thấy đề án nào phù hợp.
                    </td>
                  </tr>
                ) : (
                  filteredData.map((row, index) => {
                    const prelimScore = parseFloat(row.tongDiemThamDinh || row.diemBanDau) || 88;
                    const rankShort = prelimScore >= 95 ? 'Loại A+ (Xuất sắc)' : (prelimScore >= 90 ? 'Loại A (Xuất sắc)' : 'Loại B (Khá giỏi)');
                    return (
                      <tr key={row.maDeTai || index}>
                        <td className="text-center font-bold rank-cell">
                          {index + 1}
                        </td>
                        <td className="text-center font-mono font-medium text-muted">
                          {row.maDeTai}
                        </td>
                        <td 
                          className="project-title-cell"
                          style={{ cursor: 'pointer' }}
                          onClick={() => onSelectProject && onSelectProject(row)}
                          title="Bấm để xem nội dung báo cáo A3 chi tiết"
                        >
                          <div className="font-bold text-main" style={{ color: '#003B73', fontSize: '0.92rem' }}>
                            {row.tenSanPham || row.tenDeTai}
                          </div>
                          {row.tenSanPham && (
                            <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                              Đề tài: {row.tenDeTai}
                            </div>
                          )}
                        </td>
                        <td>
                          <div className="font-medium text-main">{row.khoaPhong}</div>
                          {row.khoaPhoiHop && (
                            <div style={{ fontSize: '0.75rem', color: '#0284c7' }}>
                              + {row.khoaPhoiHop}
                            </div>
                          )}
                        </td>
                        <td className="text-center">
                          <span className={`badge ${row.nhanh === 'Nhánh B' ? 'badge-partner' : 'badge-pass'}`}>
                            {row.nhanh}
                          </span>
                        </td>
                        <td className="text-muted font-medium">
                          {getCleanLeaderName(row) || '—'}
                        </td>
                        <td className="text-center">
                          <span className="prelim-score-chip mono font-bold">
                            {prelimScore} / 100
                          </span>
                        </td>
                        <td className="text-center">
                          <span className="badge badge-excellent" style={{ background: '#dcfce7', color: '#15803d', border: '1px solid #86efac' }}>
                            {rankShort}
                          </span>
                          <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '3px' }}>
                            {row.soHieuVanBan || 'Số: 16/TB-QLCL'}
                          </div>
                        </td>
                        <td className="screen-only text-center">
                          <button 
                            type="button" 
                            className="btn-table-secretary"
                            style={{ background: '#0085db', color: '#ffffff', border: 'none', padding: '0.35rem 0.75rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}
                            onClick={() => onSelectProject && onSelectProject(row)}
                            title="Xem nội dung đề án và đề cương A3"
                          >
                            Xem báo cáo A3
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ==========================================================================
          BƯỚC 2: THỰC ĐỊA VÀ THẨM ĐỊNH (BẢNG KIỂM THƯ KÝ BAN TỔ CHỨC)
          ========================================================================== */}
      {currentStep === 'step2' && (
        <div className="step-content-pane step2-gemba-pane">
          {/* THÔNG BÁO TIẾN ĐỘ BƯỚC 2 */}
          <div className="screen-only step-intro-banner banner-step2">
            <div className="banner-icon">🔍</div>
            <div className="banner-text">
              <strong>Bước 2: Thực địa và thẩm định (Dành cho Thư ký Ban Tổ Chức)</strong> — Mỗi đề án có 
              <strong> 01 Bảng kiểm thực địa Gemba chuyên sâu</strong> để Thư ký theo dõi hiện trường buồng bệnh/khoa, kiểm tra việc bấm giờ đo lường, vận hành phương tiện cải tiến và mức độ tuân thủ SOP thực tế trước khi phê duyệt vào Vòng Chung kết.
            </div>
          </div>

          <div className="gemba-split-container">
            
            {/* CỘT TRÁI: DANH SÁCH ĐỀ ÁN & TRẠNG THÁI THẨM ĐỊNH */}
            <div className="gemba-projects-sidebar">
              <div className="gemba-sidebar-head">
                <h3 className="gemba-sidebar-title">Danh sách 19 đề án thực địa</h3>
                <input 
                  type="text" 
                  className="gemba-sidebar-search"
                  placeholder="Lọc nhanh đề án..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="gemba-project-scroll">
                {filteredData.map(p => {
                  const isSelected = p.maDeTai === selectedGembaMaDeTai;
                  const chk = gembaChecklists[p.maDeTai] || getDefaultGembaChecklist(p);
                  const isDone = chk?.duDieuKienChungKet;

                  return (
                    <div 
                      key={p.maDeTai}
                      className={`gemba-project-card ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedGembaMaDeTai(p.maDeTai)}
                    >
                      <div className="gemba-card-top">
                        <span className="badge badge-good mono">{p.maDeTai}</span>
                        <span className={`badge ${p.nhanh === 'Nhánh B' ? 'badge-partner' : 'badge-pass'}`}>{p.nhanh}</span>
                        <span className={`badge ${isDone ? 'badge-excellent' : 'badge-warning'}`}>
                          {isDone ? 'Đủ chuẩn Chung kết' : 'Đang thử nghiệm'}
                        </span>
                      </div>
                      <div className="gemba-card-title">{p.tenSanPham || p.tenDeTai}</div>
                      <div className="gemba-card-dept text-muted">{p.khoaPhong}</div>
                      <div className="gemba-card-meta">
                        <span>Điểm thực địa: <strong className="text-primary mono">{chk?.diemThucDia || 90}/100</strong></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CỘT PHẢI: BẢNG KIỂM THỰC ĐỊA GEMBA CHI TIẾT */}
            <div className="gemba-checklist-main glass-panel">
              {activeGembaProject ? (
                <>
                  <div className="gemba-main-header">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="badge badge-good mono">{activeGembaProject.maDeTai}</span>
                        <span className={`badge ${activeGembaProject.nhanh === 'Nhánh B' ? 'badge-partner' : 'badge-pass'}`}>{activeGembaProject.nhanh}</span>
                        <span className="text-muted" style={{ fontSize: '0.85rem' }}>
                          Chủ nhiệm: <strong>{getCleanLeaderName(activeGembaProject)}</strong>
                        </span>
                      </div>
                      <h3 className="gemba-header-title">{activeGembaProject.tenSanPham || activeGembaProject.tenDeTai}</h3>
                      <div className="gemba-header-dept">
                        <strong>Khoa/phòng thực hiện:</strong> {activeGembaProject.khoaPhong}
                        {activeGembaProject.khoaPhoiHop && <span className="tag-partner ml-2">+ {activeGembaProject.khoaPhoiHop}</span>}
                      </div>
                    </div>

                    <div className="gemba-header-score-badge">
                      <div className="gemba-score-val mono">{calculatedGembaScore}</div>
                      <div className="gemba-score-lbl">Điểm thực địa / 100</div>
                    </div>
                  </div>

                  {/* THÔNG TIN BIÊN BẢN KIỂM TRA */}
                  <div className="gemba-inspector-row">
                    <div>
                      <span className="text-muted">Chuyên viên kiểm tra:</span> <strong>Thư ký Tổ QLCL (Đỗ Thị Hồng Nhung)</strong>
                    </div>
                    <div>
                      <span className="text-muted">Ngày thẩm định:</span> <strong className="mono">Tháng 09/2026</strong>
                    </div>
                    <div>
                      <span className="text-muted">Hình thức:</span> <strong>Khảo sát hiện trường Gemba tại khoa</strong>
                    </div>
                  </div>

                  {/* 6 TIÊU CHÍ BẢNG KIỂM HIỆN TRƯỜNG */}
                  <div className="gemba-criteria-list">
                    <h4 className="criteria-list-heading">6 Tiêu chí Bảng kiểm Hiện trường dành cho Thư ký Ban Tổ Chức:</h4>

                    {GEMBA_CHECKLIST_CRITERIA.map((crit, idx) => {
                      const itemState = localChecklistItems[crit.id] || { status: 'pass', note: '' };

                      return (
                        <div key={crit.id} className="gemba-criterion-card">
                          <div className="crit-head">
                            <div className="crit-title-wrap">
                              <span className="crit-idx-tag">Mục {idx + 1}</span>
                              <div className="crit-title-text font-bold">{crit.title}</div>
                              <span className="crit-max-score mono">Tối đa: {crit.maxScore} điểm</span>
                            </div>

                            {/* 3 NÚT TRẠNG THÁI ĐÁNH GIÁ TIÊU CHÍ */}
                            <div className="crit-status-buttons" role="group">
                              <button
                                type="button"
                                className={`btn-crit-status status-pass ${itemState.status === 'pass' ? 'active' : ''}`}
                                onClick={() => handleUpdateChecklistItem(crit.id, 'pass')}
                                title="Đạt tiêu chuẩn thực tế"
                              >
                                ✓ Đạt chuẩn ({crit.maxScore}đ)
                              </button>
                              <button
                                type="button"
                                className={`btn-crit-status status-review ${itemState.status === 'review' ? 'active' : ''}`}
                                onClick={() => handleUpdateChecklistItem(crit.id, 'review')}
                                title="Cần hoàn thiện bổ sung"
                              >
                                ⚠ Cần bổ sung ({Math.round(crit.maxScore * 0.7)}đ)
                              </button>
                              <button
                                type="button"
                                className={`btn-crit-status status-fail ${itemState.status === 'fail' ? 'active' : ''}`}
                                onClick={() => handleUpdateChecklistItem(crit.id, 'fail')}
                                title="Chưa triển khai tại hiện trường"
                              >
                                ✕ Chưa làm (0đ)
                              </button>
                            </div>
                          </div>

                          <div className="crit-desc text-muted">{crit.desc}</div>

                          <div className="crit-note-input-row">
                            <input
                              type="text"
                              className="crit-note-input"
                              placeholder="Ghi chú nhận xét của Thư ký về tiêu chí này..."
                              value={itemState.note || ''}
                              onChange={(e) => handleUpdateChecklistItem(crit.id, itemState.status, e.target.value)}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* NHẬN XÉT TỔNG THỂ & PHÊ DUYỆT CHUNG KẾT */}
                  <div className="gemba-conclusion-box">
                    <label className="conclusion-label">
                      <strong>Ý kiến kết luận của Thư ký Ban Tổ Chức:</strong>
                    </label>
                    <textarea 
                      className="gemba-textarea"
                      rows={4}
                      placeholder="Ghi nhận xét đánh giá tổng quan, các điểm cần nhóm tác giả hoàn thiện trước Vòng Chung kết..."
                      value={localGembaNote}
                      onChange={(e) => setLocalGembaNote(e.target.value)}
                    />

                    <div className="gemba-qualification-row">
                      <label className="checkbox-qualification-label">
                        <input 
                          type="checkbox" 
                          checked={localGembaQualified}
                          onChange={(e) => setLocalGembaQualified(e.target.checked)}
                        />
                        <span>Xác nhận đề án <strong>đủ điều kiện báo cáo thuyết trình tại Vòng Chung kết</strong></span>
                      </label>
                    </div>
                  </div>

                  {/* THÔNG BÁO LƯU THÀNH CÔNG */}
                  {gembaSaveSuccess && (
                    <div className="save-success-banner">
                      ✓ Đã lưu thành công Bảng kiểm thực địa vào hệ thống.
                    </div>
                  )}

                  {/* CÁC NÚT THAO TÁC THƯ KÝ */}
                  <div className="gemba-action-footer">
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => onSelectProject && onSelectProject(activeGembaProject)}
                      title="Đối chiếu Báo cáo A3 của đề án"
                    >
                      Xem báo cáo A3
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ padding: '0.65rem 2rem' }}
                      onClick={handleSaveCurrentGemba}
                    >
                      Lưu bảng kiểm thực địa
                    </button>

                    <button
                      type="button"
                      className="btn btn-emerald"
                      onClick={() => handleStepSelect('step3')}
                      title="Chuyển sang Bước 3: Chấm điểm Chung kết"
                    >
                      Sang Vòng Chung kết ➔
                    </button>
                  </div>
                </>
              ) : (
                <div className="empty-state text-center text-muted">
                  Vui lòng chọn một đề án từ danh sách bên trái để mở Bảng kiểm thực địa.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==========================================================================
          BƯỚC 3: CHUNG KẾT (DÀNH CHO BAN GIÁM KHẢO - KẾT NỐI CHẤM ĐIỂM)
          ========================================================================== */}
      {currentStep === 'step3' && (
        <div className="step-content-pane step3-final-pane">
          {/* THÔNG BÁO TIẾN ĐỘ BƯỚC 3 */}
          <div className="screen-only step-intro-banner banner-step3">
            <div className="banner-icon">🏆</div>
            <div className="banner-text">
              <strong>Bước 3: Vòng Chung kết & trao giải (Dành cho Hội đồng Ban Giám Khảo)</strong> — Kết nối trực tiếp hệ thống chấm điểm 
              <strong> 11 tiêu chí thuộc 5 phần (100 điểm)</strong>. Giám khảo có thể chọn từng đề tài để chấm thi trực tiếp, kết quả sẽ được tự động tổng hợp thời gian thực vào bảng xếp hạng vinh danh giải thưởng.
            </div>
          </div>

          {/* BẢNG ĐIỀU HÀNH CHUNG KẾT & KẾT NỐI CHẤM ĐIỂM */}
          <div className="ranking-controls screen-only">
            <div className="branch-filter-tabs">
              <button 
                type="button"
                className={`filter-tab-btn ${filterBranch === 'ALL' ? 'active' : ''}`}
                onClick={() => setFilterBranch('ALL')}
              >
                Tất cả đề tài Chung kết <span className="tab-counter">{countAll}</span>
              </button>
              <button 
                type="button"
                className={`filter-tab-btn ${filterBranch === 'Nhánh A' ? 'active' : ''}`}
                onClick={() => setFilterBranch('Nhánh A')}
              >
                Nhánh A (Nội bộ) <span className="tab-counter">{countA}</span>
              </button>
              <button 
                type="button"
                className={`filter-tab-btn ${filterBranch === 'Nhánh B' ? 'active' : ''}`}
                onClick={() => setFilterBranch('Nhánh B')}
              >
                Nhánh B (Liên khoa) <span className="tab-counter">{countB}</span>
              </button>
            </div>

            <div className="ranking-actions-right">
              <div className="search-box-wrapper">
                <input
                  type="text"
                  className="ranking-search-input"
                  placeholder="Tìm đề án chấm thi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <button 
                type="button" 
                className="btn-control-action" 
                onClick={onRefresh} 
                disabled={loading}
                title="Cập nhật kết quả chấm từ máy chủ"
              >
                {loading ? 'Đang tải...' : 'Làm mới điểm'}
              </button>
            </div>
          </div>

          {/* BẢNG XẾP HẠNG & NÚT CHẤM ĐIỂM CHUNG KẾT */}
          <div className="table-responsive">
            <table className="ranking-table final-leaderboard-table">
              <thead>
                <tr>
                  <th style={{width: '60px', textAlign: 'center'}}>Hạng</th>
                  <th style={{width: '90px', textAlign: 'center'}}>Mã đề tài</th>
                  <th style={{minWidth: '240px'}}>Tên sản phẩm & Đề án Chung kết</th>
                  <th style={{minWidth: '150px'}}>Khoa / Phòng chủ trì</th>
                  <th style={{width: '75px', textAlign: 'center'}}>Nhánh</th>
                  <th style={{minWidth: '130px', textAlign: 'center'}}>Tiến độ chấm</th>
                  <th style={{width: '110px', textAlign: 'center'}}>Điểm BGK</th>
                  <th style={{width: '125px', textAlign: 'center'}}>Xếp loại</th>
                  <th className="screen-only" style={{width: '180px', textAlign: 'center'}}>Thao tác BGK</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => {
                  const pScores = rawScoreRows.filter(r => r.maDeTai === row.maDeTai);
                  const hasScore = row.hasScore && Number(row.tongDiem) > 0;
                  const scoreVal = hasScore ? Number(row.tongDiem) : (parseFloat(row.diemBanDau) || 88);
                  
                  // Phân hạng Huy chương tượng trưng
                  let medalBadge = null;
                  if (index === 0) medalBadge = <span className="medal-tag medal-gold" title="Huy chương Vàng">🥇 Nhất</span>;
                  else if (index === 1 || index === 2) medalBadge = <span className="medal-tag medal-silver" title="Huy chương Bạc">🥈 Nhì</span>;
                  else if (index === 3 || index === 4) medalBadge = <span className="medal-tag medal-bronze" title="Huy chương Đồng">🥉 Ba</span>;
                  else medalBadge = <span className="rank-num-plain">{index + 1}</span>;

                  return (
                    <tr key={row.maDeTai || index} className={hasScore ? 'row-scored' : ''}>
                      <td className="text-center font-bold rank-cell">
                        {medalBadge}
                      </td>
                      <td className="text-center font-mono font-medium text-muted">
                        {row.maDeTai}
                      </td>
                      <td 
                        className="project-title-cell"
                        style={{ cursor: 'pointer' }}
                        onClick={() => onSelectProject && onSelectProject(row)}
                        title="Bấm để xem Báo cáo A3 chi tiết"
                      >
                        <div className="font-bold text-main" style={{ color: '#003B73', fontSize: '0.92rem' }}>
                          {row.tenSanPham || row.tenDeTai}
                        </div>
                        {row.tenSanPham && (
                          <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                            Đề tài: {row.tenDeTai}
                          </div>
                        )}
                      </td>
                      <td>
                        <div className="font-medium text-main">{row.khoaPhong}</div>
                        {row.khoaPhoiHop && (
                          <div style={{ fontSize: '0.75rem', color: '#0284c7' }}>
                            + {row.khoaPhoiHop}
                          </div>
                        )}
                      </td>
                      <td className="text-center">
                        <span className={`badge ${row.nhanh === 'Nhánh B' ? 'badge-partner' : 'badge-pass'}`}>
                          {row.nhanh}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className={`status-tag ${pScores.length > 0 ? 'status-scored' : 'status-waiting'}`}>
                          {pScores.length > 0 ? `${pScores.length} Giám khảo` : 'Sẵn sàng chấm'}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="final-score-pill mono font-bold">
                          {scoreVal} đ
                        </span>
                      </td>
                      <td className="text-center">
                        <span className={`badge ${scoreVal >= 90 ? 'badge-excellent' : (scoreVal >= 80 ? 'badge-good' : 'badge-pass')}`}>
                          {row.xepLoai || (scoreVal >= 90 ? 'Xuất sắc' : (scoreVal >= 80 ? 'Giỏi' : 'Khá'))}
                        </span>
                      </td>
                      <td className="screen-only text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button 
                            type="button" 
                            className="btn-score-now"
                            onClick={() => onOpenScoreForProject ? onOpenScoreForProject(row) : (onSelectProject && onSelectProject(row))}
                            title="Mở giao diện chấm điểm 11 tiêu chí dành cho Ban Giám Khảo"
                          >
                            ⭐ Chấm điểm
                          </button>
                          <button 
                            type="button" 
                            className="btn-view-a3-table"
                            onClick={() => onSelectProject && onSelectProject(row)}
                            title="Xem Báo cáo A3 đối chiếu"
                          >
                            A3
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CHỮ KÝ NGHỊ ĐỊNH 30 KHI IN ẤN */}
      <div className="print-only print-footer-tonghop">
        <table className="print-signature-table">
          <tbody>
            <tr>
              <td style={{width: '50%', textAlign: 'center', verticalAlign: 'top'}}>
                <div className="print-sign-role">NGƯỜI LẬP BÁO CÁO</div>
                <div className="print-sign-note">(Ký và ghi rõ họ tên)</div>
                <div className="print-sign-space"></div>
                <div className="print-sign-name">Đỗ Thị Hồng Nhung</div>
              </td>
              <td style={{width: '50%', textAlign: 'center', verticalAlign: 'top'}}>
                <div className="print-sign-role">TỔ TRƯỞNG TỔ QLCL</div>
                <div className="print-sign-note">(Ký và ghi rõ họ tên)</div>
                <div className="print-sign-space"></div>
                <div className="print-sign-name">Trần Đình Vũ</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
