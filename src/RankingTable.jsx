import React, { useState, useMemo, useEffect } from 'react';
import './RankingTable.css';
import { getCleanLeaderName } from './kaizenData';
import { getProjectGembaChecklist } from './gembaChecklistsData';

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
  // 1. Quản lý Bước Tiến Độ (Workflow Stepper)
  const [currentStep, setCurrentStep] = useState(activeStep);

  const handleStepSelect = (step) => {
    setCurrentStep(step);
    if (onStepChange) onStepChange(step);
  };

  useEffect(() => {
    if (activeStep) {
      setCurrentStep(activeStep);
    }
  }, [activeStep]);

  // Bộ lọc chung
  const [filterBranch, setFilterBranch] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // 2. Quản lý Trạng thái Tiến độ của từng Đề án (Lưu localStorage)
  const [projectStatuses, setProjectStatuses] = useState(() => {
    try {
      const saved = localStorage.getItem('hv_kaizen_project_statuses');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const getProjectStatus = (maDeTai) => {
    return projectStatuses[maDeTai] || 'sokhao'; // 'sokhao' | 'thucdia' | 'chungket' | 'bosung'
  };

  const handleUpdateProjectStatus = (maDeTai, newStatus) => {
    setProjectStatuses(prev => {
      const updated = { ...prev, [maDeTai]: newStatus };
      try {
        localStorage.setItem('hv_kaizen_project_statuses', JSON.stringify(updated));
      } catch (err) {
        console.warn('Lỗi lưu localStorage:', err);
      }
      return updated;
    });
  };

  // 3. Quản lý Đề án được chọn trong Bước 2 (Bảng kiểm Thư ký)
  const [selectedGembaMaDeTai, setSelectedGembaMaDeTai] = useState(data[0]?.maDeTai || '');
  const [gembaSaveSuccess, setGembaSaveSuccess] = useState(false);
  const [activeChecklistTab, setActiveChecklistTab] = useState('all'); // 'all', 'hienVat', 'lamSang', 'doLuong', 'sanPham'

  useEffect(() => {
    if (!selectedGembaMaDeTai && data.length > 0) {
      setSelectedGembaMaDeTai(data[0].maDeTai);
    }
  }, [data, selectedGembaMaDeTai]);

  const activeGembaProject = data.find(p => p.maDeTai === selectedGembaMaDeTai) || data[0];

  // Lấy dữ liệu Bảng kiểm thực địa chuyên sâu từ PDF
  const currentChecklist = useMemo(() => {
    if (!activeGembaProject) return null;
    const fromStorage = gembaChecklists[activeGembaProject.maDeTai];
    if (fromStorage && fromStorage.hienVat) return fromStorage;
    return getProjectGembaChecklist(activeGembaProject.maDeTai);
  }, [gembaChecklists, activeGembaProject]);

  // State chỉnh sửa cục bộ các tiêu chí
  const [localHienVat, setLocalHienVat] = useState([]);
  const [localLamSang, setLocalLamSang] = useState([]);
  const [localDoLuong, setLocalDoLuong] = useState([]);
  const [localSanPham, setLocalSanPham] = useState([]);
  const [localPhanLoai, setLocalPhanLoai] = useState('A');
  const [localGhiChu, setLocalGhiChu] = useState('');

  useEffect(() => {
    if (currentChecklist) {
      setLocalHienVat(currentChecklist.hienVat || []);
      setLocalLamSang(currentChecklist.lamSang || []);
      setLocalDoLuong(currentChecklist.doLuong || []);
      setLocalSanPham(currentChecklist.sanPham || []);
      setLocalPhanLoai(currentChecklist.ketLuan?.phanLoai || 'A');
      setLocalGhiChu(currentChecklist.ketLuan?.ghiChu || '');
      setGembaSaveSuccess(false);
    }
  }, [currentChecklist, selectedGembaMaDeTai]);

  // Toggle trạng thái của 1 tiêu chí (pass <-> fail)
  const toggleItemStatus = (section, id) => {
    const updater = (list) => list.map(it => it.id === id ? { ...it, status: it.status === 'pass' ? 'fail' : 'pass' } : it);
    if (section === 'hienVat') setLocalHienVat(updater);
    else if (section === 'lamSang') setLocalLamSang(updater);
    else if (section === 'doLuong') setLocalDoLuong(updater);
    else if (section === 'sanPham') setLocalSanPham(updater);
  };

  // Tính điểm thực địa tự động
  const calculatedScore = useMemo(() => {
    const all = [...localHienVat, ...localLamSang, ...localDoLuong, ...localSanPham];
    if (all.length === 0) return 90;
    const passCount = all.filter(i => i.status === 'pass').length;
    const percent = Math.round((passCount / all.length) * 100);
    return Math.max(70, Math.min(100, percent));
  }, [localHienVat, localLamSang, localDoLuong, localSanPham]);

  // Lưu bảng kiểm thực địa
  const handleSaveGemba = () => {
    if (!activeGembaProject || !onSaveGembaChecklist) return;
    const isQual = localPhanLoai === 'A';
    const updated = {
      ...(currentChecklist || {}),
      maDeTai: activeGembaProject.maDeTai,
      tenDeAn: activeGembaProject.tenSanPham || activeGembaProject.tenDeTai,
      donVi: activeGembaProject.khoaPhong,
      canBo: currentChecklist?.canBo || 'Tổ QLCL',
      ngayThamDinh: new Date().toLocaleDateString('vi-VN'),
      hienVat: localHienVat,
      lamSang: localLamSang,
      doLuong: localDoLuong,
      sanPham: localSanPham,
      diemThucDia: calculatedScore,
      ketLuan: {
        phanLoai: localPhanLoai,
        ghiChu: localGhiChu,
        duDieuKienChungKet: isQual
      }
    };
    onSaveGembaChecklist(activeGembaProject.maDeTai, updated);
    
    // Tự động cập nhật trạng thái đề án
    handleUpdateProjectStatus(activeGembaProject.maDeTai, isQual ? 'chungket' : (localPhanLoai === 'B' ? 'bosung' : 'thucdia'));

    setGembaSaveSuccess(true);
    setTimeout(() => setGembaSaveSuccess(false), 2000);
  };

  // Nút 1-chạm chuyển trạng thái đề án
  const handleQuickStatusChange = (status) => {
    if (!activeGembaProject) return;
    handleUpdateProjectStatus(activeGembaProject.maDeTai, status);
    if (status === 'chungket') {
      setLocalPhanLoai('A');
    } else if (status === 'bosung') {
      setLocalPhanLoai('B');
    } else {
      setLocalPhanLoai('C');
    }
    handleSaveGemba();
  };

  // Dữ liệu lọc chung
  const filteredData = data.filter(row => {
    const matchBranch = filterBranch === 'ALL' || row.nhanh === filterBranch;
    const matchSearch = !searchQuery || 
      (row.tenDeTai && row.tenDeTai.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.tenSanPham && row.tenSanPham.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.maDeTai && row.maDeTai.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (row.khoaPhong && row.khoaPhong.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchBranch && matchSearch;
  });

  const countAll = data.length;
  const countA = data.filter(r => r.nhanh === 'Nhánh A').length;
  const countB = data.filter(r => r.nhanh === 'Nhánh B').length;

  if (loading) {
    return <div className="loading-state text-center text-muted">Đang tải danh mục đề án...</div>;
  }

  if (data.length === 0) {
    return <div className="empty-state text-center text-muted">Chưa có đề án nào.</div>;
  }

  // Render chip trạng thái gọn gàng
  const renderStatusChip = (st) => {
    switch(st) {
      case 'chungket':
        return <span className="status-chip chip-final" title="Đã thẩm định đạt chuẩn Loại A - Đủ điều kiện vào Chung kết">⭐ Vào Chung kết</span>;
      case 'bosung':
        return <span className="status-chip chip-review" title="Cần hoàn thiện bổ sung tài liệu / mốc đo lường">⚠ Cần bổ sung</span>;
      case 'thucdia':
        return <span className="status-chip chip-testing" title="Đang khảo sát thực địa Gemba tại khoa">🔍 Đang thực địa</span>;
      default:
        return <span className="status-chip chip-prelim" title="Đã thẩm định đề cương A3 sơ bộ">✓ Đã duyệt sơ khảo</span>;
    }
  };

  return (
    <div className="ranking-wrapper">
      
      {/* HEADER NGHỊ ĐỊNH 30 (KHI IN ẤN) */}
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
          {currentStep === 'step1' && 'DANH MỤC TIẾP NHẬN & ĐIỂM SƠ KHẢO ĐỀ ÁN CẢI TIẾN 2026'}
          {currentStep === 'step2' && 'BIÊN BẢN THẨM ĐỊNH THỰC ĐỊA GEMBA (THƯ KÝ BAN TỔ CHỨC)'}
          {currentStep === 'step3' && 'BẢNG XẾP HẠNG VÒNG CHUNG KẾT HỘI THI CẢI TIẾN 2026'}
        </div>
      </div>

      {/* ==========================================================================
          THANH ĐIỀU HƯỚNG 3 BƯỚC TIẾN ĐỘ (TỐI GIẢN - GỌN GÀNG)
          ========================================================================== */}
      <div className="workflow-stepper-container screen-only">
        <div className="workflow-steps-dock" role="tablist">
          
          {/* BƯỚC 1 */}
          <button 
            type="button" 
            role="tab"
            aria-selected={currentStep === 'step1'}
            className={`workflow-step-btn ${currentStep === 'step1' ? 'active' : 'completed'}`}
            onClick={() => handleStepSelect('step1')}
          >
            <div className="step-btn-num">
              <span className="step-circle">1</span>
            </div>
            <div className="step-btn-info">
              <div className="step-btn-name">1. Nộp & Sơ khảo</div>
              <div className="step-btn-sub">19 đề án • 80-96đ</div>
            </div>
          </button>

          <div className="step-connector-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>

          {/* BƯỚC 2 */}
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
              <div className="step-btn-name">2. Thẩm định thực địa</div>
              <div className="step-btn-sub">Bảng kiểm Thư ký BTC</div>
            </div>
          </button>

          <div className="step-connector-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>

          {/* BƯỚC 3 */}
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
              <div className="step-btn-name">3. Vòng Chung kết</div>
              <div className="step-btn-sub">Chấm điểm Ban giám khảo</div>
            </div>
          </button>

        </div>
      </div>

      {/* ==========================================================================
          BƯỚC 1: NỘP ĐỀ ÁN & ĐIỂM SƠ KHẢO (GỌN GÀNG, ÍT CHỮ)
          ========================================================================== */}
      {currentStep === 'step1' && (
        <div className="step-content-pane">
          
          {/* THANH CÔNG CỤ TỐI GIẢN */}
          <div className="ranking-controls screen-only">
            <div className="branch-filter-tabs">
              <button 
                type="button"
                className={`filter-tab-btn ${filterBranch === 'ALL' ? 'active' : ''}`}
                onClick={() => setFilterBranch('ALL')}
              >
                Tất cả <span className="tab-counter">{countAll}</span>
              </button>
              <button 
                type="button"
                className={`filter-tab-btn ${filterBranch === 'Nhánh A' ? 'active' : ''}`}
                onClick={() => setFilterBranch('Nhánh A')}
              >
                Nhánh A <span className="tab-counter">{countA}</span>
              </button>
              <button 
                type="button"
                className={`filter-tab-btn ${filterBranch === 'Nhánh B' ? 'active' : ''}`}
                onClick={() => setFilterBranch('Nhánh B')}
              >
                Nhánh B <span className="tab-counter">{countB}</span>
              </button>
            </div>

            <div className="ranking-actions-right">
              <div className="search-box-wrapper">
                <input
                  type="text"
                  className="ranking-search-input"
                  placeholder="Tìm đề tài, đơn vị..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <button 
                type="button" 
                className="btn-control-action" 
                onClick={() => handleStepSelect('step2')}
                title="Chuyển sang Bước 2: Thẩm định thực địa"
              >
                Sang Bước 2 ➔
              </button>
            </div>
          </div>

          {/* BẢNG SƠ KHẢO GỌN GÀNG */}
          <div className="table-responsive">
            <table className="ranking-table">
              <thead>
                <tr>
                  <th style={{width: '40px', textAlign: 'center'}}>#</th>
                  <th style={{width: '85px', textAlign: 'center'}}>Mã</th>
                  <th style={{minWidth: '220px'}}>Tên sản phẩm & đề án</th>
                  <th style={{minWidth: '140px'}}>Khoa/Phòng</th>
                  <th style={{width: '70px', textAlign: 'center'}}>Nhánh</th>
                  <th style={{width: '95px', textAlign: 'center'}}>Điểm SK</th>
                  <th style={{width: '130px', textAlign: 'center'}}>Tiến độ</th>
                  <th className="screen-only" style={{width: '130px', textAlign: 'center'}}>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => {
                  const prelimScore = parseFloat(row.tongDiemThamDinh || row.diemBanDau) || 88;
                  const currentSt = getProjectStatus(row.maDeTai);

                  return (
                    <tr key={row.maDeTai || index}>
                      <td className="text-center font-bold rank-cell">{index + 1}</td>
                      <td className="text-center font-mono text-muted">{row.maDeTai}</td>
                      <td 
                        className="project-title-cell"
                        onClick={() => onSelectProject && onSelectProject(row)}
                        title="Bấm để xem Báo cáo A3"
                      >
                        <div className="font-bold text-main" style={{ color: '#003B73' }}>
                          {row.tenSanPham || row.tenDeTai}
                        </div>
                        {row.tenSanPham && (
                          <div className="sub-title-text">{row.tenDeTai}</div>
                        )}
                      </td>
                      <td>
                        <div className="font-medium">{row.khoaPhong}</div>
                      </td>
                      <td className="text-center">
                        <span className={`badge ${row.nhanh === 'Nhánh B' ? 'badge-partner' : 'badge-pass'}`}>
                          {row.nhanh}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="prelim-score-chip mono font-bold">
                          {prelimScore}
                        </span>
                      </td>
                      <td className="text-center">
                        {renderStatusChip(currentSt)}
                      </td>
                      <td className="screen-only text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button 
                            type="button" 
                            className="btn-action-compact btn-a3"
                            onClick={() => onSelectProject && onSelectProject(row)}
                            title="Xem báo cáo A3"
                          >
                            A3
                          </button>
                          <button 
                            type="button" 
                            className="btn-action-compact btn-forward"
                            onClick={() => {
                              setSelectedGembaMaDeTai(row.maDeTai);
                              handleStepSelect('step2');
                            }}
                            title="Mở Bảng kiểm thực địa Thư ký"
                          >
                            Thực địa ➔
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

      {/* ==========================================================================
          BƯỚC 2: THỰC ĐỊA & THẨM ĐỊNH (BẢNG KIỂM THƯ KÝ TỪ FILE PDF)
          ========================================================================== */}
      {currentStep === 'step2' && (
        <div className="step-content-pane step2-gemba-pane">
          <div className="gemba-split-container">
            
            {/* CỘT TRÁI: DANH SÁCH 19 ĐỀ ÁN & TRẠNG THÁI */}
            <div className="gemba-projects-sidebar">
              <div className="gemba-sidebar-head">
                <input 
                  type="text" 
                  className="gemba-sidebar-search"
                  placeholder="Lọc đề án..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="gemba-project-scroll">
                {filteredData.map(p => {
                  const isSelected = p.maDeTai === selectedGembaMaDeTai;
                  const st = getProjectStatus(p.maDeTai);

                  return (
                    <div 
                      key={p.maDeTai}
                      className={`gemba-project-card ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedGembaMaDeTai(p.maDeTai)}
                    >
                      <div className="gemba-card-top">
                        <span className="badge badge-good mono">{p.maDeTai}</span>
                        {renderStatusChip(st)}
                      </div>
                      <div className="gemba-card-title">{p.tenSanPham || p.tenDeTai}</div>
                      <div className="gemba-card-dept text-muted">{p.khoaPhong}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CỘT PHẢI: BẢNG KIỂM THỰC ĐỊA GEMBA CHUẨN XÁC TỪ PDF */}
            <div className="gemba-checklist-main glass-panel">
              {activeGembaProject ? (
                <>
                  {/* HEADER COMPACT */}
                  <div className="gemba-main-header">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="badge badge-good mono">{activeGembaProject.maDeTai}</span>
                        <span className="text-muted" style={{ fontSize: '0.8rem' }}>
                          Thẩm định viên: <strong>{currentChecklist?.canBo || 'Tổ QLCL'}</strong>
                        </span>
                      </div>
                      <h3 className="gemba-header-title">{activeGembaProject.tenSanPham || activeGembaProject.tenDeTai}</h3>
                      <div className="gemba-header-dept text-muted">
                        Khoa/phòng: <strong>{activeGembaProject.khoaPhong}</strong>
                      </div>
                    </div>

                    <div className="gemba-header-score-badge">
                      <div className="gemba-score-val mono">{calculatedScore}</div>
                      <div className="gemba-score-lbl">Điểm thực địa / 100</div>
                    </div>
                  </div>

                  {/* THANH NÚT CHUYỂN TRẠNG THÁI 1-CHẠM (QUICK STATUS BUTTONS) */}
                  <div className="gemba-quick-status-bar">
                    <span className="bar-label">Chuyển trạng thái:</span>
                    <div className="status-button-group">
                      <button
                        type="button"
                        className={`btn-status-quick btn-status-final ${getProjectStatus(activeGembaProject.maDeTai) === 'chungket' ? 'active' : ''}`}
                        onClick={() => handleQuickStatusChange('chungket')}
                        title="Đạt Loại A - Đủ điều kiện vào vòng Chung kết"
                      >
                        ⭐ Duyệt vào Chung kết (Loại A)
                      </button>
                      <button
                        type="button"
                        className={`btn-status-quick btn-status-review ${getProjectStatus(activeGembaProject.maDeTai) === 'bosung' ? 'active' : ''}`}
                        onClick={() => handleQuickStatusChange('bosung')}
                        title="Cần hoàn thiện bổ sung trước khi Chung kết"
                      >
                        ⚠ Cần bổ sung (Loại B)
                      </button>
                      <button
                        type="button"
                        className={`btn-status-quick btn-status-testing ${getProjectStatus(activeGembaProject.maDeTai) === 'thucdia' ? 'active' : ''}`}
                        onClick={() => handleQuickStatusChange('thucdia')}
                        title="Đang trong quá trình khảo sát thực địa"
                      >
                        🔍 Đang thực địa
                      </button>
                    </div>
                  </div>

                  {/* TABS PHÂN NHÓM TIÊU CHUẨN THỰC ĐỊA */}
                  <div className="gemba-sections-tabs">
                    <button 
                      type="button" 
                      className={`sec-tab-btn ${activeChecklistTab === 'all' ? 'active' : ''}`}
                      onClick={() => setActiveChecklistTab('all')}
                    >
                      Tất cả ({localHienVat.length + localLamSang.length + localDoLuong.length + localSanPham.length})
                    </button>
                    <button 
                      type="button" 
                      className={`sec-tab-btn ${activeChecklistTab === 'hienVat' ? 'active' : ''}`}
                      onClick={() => setActiveChecklistTab('hienVat')}
                    >
                      Mục II: Hiện vật ({localHienVat.length})
                    </button>
                    <button 
                      type="button" 
                      className={`sec-tab-btn ${activeChecklistTab === 'lamSang' ? 'active' : ''}`}
                      onClick={() => setActiveChecklistTab('lamSang')}
                    >
                      Mục III: Lâm sàng ({localLamSang.length})
                    </button>
                    <button 
                      type="button" 
                      className={`sec-tab-btn ${activeChecklistTab === 'doLuong' ? 'active' : ''}`}
                      onClick={() => setActiveChecklistTab('doLuong')}
                    >
                      Mục IV: Số liệu ({localDoLuong.length})
                    </button>
                    <button 
                      type="button" 
                      className={`sec-tab-btn ${activeChecklistTab === 'sanPham' ? 'active' : ''}`}
                      onClick={() => setActiveChecklistTab('sanPham')}
                    >
                      Mục V: Sản phẩm ({localSanPham.length})
                    </button>
                  </div>

                  {/* NỘI DUNG BẢNG KIỂM COMPACT */}
                  <div className="gemba-compact-checklist-body">
                    
                    {/* 1. HIỆN VẬT KAIZEN (MỤC II) */}
                    {(activeChecklistTab === 'all' || activeChecklistTab === 'hienVat') && localHienVat.length > 0 && (
                      <div className="gemba-group-block">
                        <div className="group-block-title">Mục II. Thẩm định hiện vật & công cụ Kaizen tại hiện trường</div>
                        {localHienVat.map(item => (
                          <div key={item.id} className="compact-item-row">
                            <div className="item-text-wrap">
                              <span className="item-num">{item.stt}</span>
                              <div className="item-content">
                                <div className="item-title">{item.title}</div>
                                {item.desc && <div className="item-desc">{item.desc}</div>}
                              </div>
                            </div>
                            <button
                              type="button"
                              className={`pill-toggle-btn ${item.status === 'pass' ? 'status-pass' : 'status-fail'}`}
                              onClick={() => toggleItemStatus('hienVat', item.id)}
                            >
                              {item.status === 'pass' ? '✓ Đạt' : '✕ K.Đạt'}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 2. QUY TRÌNH & LÂM SÀNG (MỤC III) */}
                    {(activeChecklistTab === 'all' || activeChecklistTab === 'lamSang') && localLamSang.length > 0 && (
                      <div className="gemba-group-block">
                        <div className="group-block-title">Mục III. Kiểm định quy trình lâm sàng & tình huống kiểm chứng</div>
                        {localLamSang.map(item => (
                          <div key={item.id} className="compact-item-row">
                            <div className="item-text-wrap">
                              <span className="item-num">{item.stt}</span>
                              <div className="item-content">
                                <div className="item-title">{item.title}</div>
                                {item.desc && <div className="item-desc">{item.desc}</div>}
                              </div>
                            </div>
                            <button
                              type="button"
                              className={`pill-toggle-btn ${item.status === 'pass' ? 'status-pass' : 'status-fail'}`}
                              onClick={() => toggleItemStatus('lamSang', item.id)}
                            >
                              {item.status === 'pass' ? '✓ Đạt' : '✕ K.Đạt'}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 3. SỐ LIỆU ĐO LƯỜNG (MỤC IV) */}
                    {(activeChecklistTab === 'all' || activeChecklistTab === 'doLuong') && localDoLuong.length > 0 && (
                      <div className="gemba-group-block">
                        <div className="group-block-title">Mục IV. Kiểm định số liệu mốc ban đầu & kết quả đo lường</div>
                        {localDoLuong.map(item => (
                          <div key={item.id} className="compact-item-row">
                            <div className="item-text-wrap">
                              <span className="item-num">{item.stt}</span>
                              <div className="item-content">
                                <div className="item-title">{item.title}</div>
                                {item.desc && <div className="item-desc">{item.desc}</div>}
                              </div>
                            </div>
                            <button
                              type="button"
                              className={`pill-toggle-btn ${item.status === 'pass' ? 'status-pass' : 'status-fail'}`}
                              onClick={() => toggleItemStatus('doLuong', item.id)}
                            >
                              {item.status === 'pass' ? '✓ Đạt' : '✕ K.Đạt'}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* 4. SẢN PHẨM ĐẦU RA (MỤC V) */}
                    {(activeChecklistTab === 'all' || activeChecklistTab === 'sanPham') && localSanPham.length > 0 && (
                      <div className="gemba-group-block">
                        <div className="group-block-title">Mục V. Kiểm định sản phẩm đầu ra cam kết nghiệm thu</div>
                        {localSanPham.map(item => (
                          <div key={item.id} className="compact-item-row">
                            <div className="item-text-wrap">
                              <span className="item-num">{item.stt}</span>
                              <div className="item-content">
                                <div className="item-title">{item.title}</div>
                                {item.desc && <div className="item-desc">{item.desc}</div>}
                              </div>
                            </div>
                            <button
                              type="button"
                              className={`pill-toggle-btn ${item.status === 'pass' ? 'status-pass' : 'status-fail'}`}
                              onClick={() => toggleItemStatus('sanPham', item.id)}
                            >
                              {item.status === 'pass' ? '✓ Đã có' : '✕ Chưa có'}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>

                  {/* KẾT LUẬN & GHI CHÚ GỌN GÀNG */}
                  <div className="gemba-conclusion-compact">
                    <div className="conclusion-input-wrap">
                      <input 
                        type="text"
                        className="gemba-note-input-compact"
                        placeholder="Ghi chú thẩm định viên QLCL (nếu có)..."
                        value={localGhiChu}
                        onChange={(e) => setLocalGhiChu(e.target.value)}
                      />
                    </div>

                    <div className="gemba-footer-actions">
                      {gembaSaveSuccess && (
                        <span className="save-indicator-badge">✓ Đã lưu bảng kiểm</span>
                      )}

                      <button
                        type="button"
                        className="btn-footer btn-save"
                        onClick={handleSaveGemba}
                      >
                        💾 Lưu bảng kiểm
                      </button>

                      <button
                        type="button"
                        className="btn-footer btn-next-step"
                        onClick={() => handleStepSelect('step3')}
                      >
                        Sang Chung kết ➔
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="empty-state text-center text-muted">
                  Vui lòng chọn đề án từ danh sách bên trái.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==========================================================================
          BƯỚC 3: CHUNG KẾT & KẾT NỐI CHẤM ĐIỂM BAN GIÁM KHẢO
          ========================================================================== */}
      {currentStep === 'step3' && (
        <div className="step-content-pane step3-final-pane">
          
          {/* THANH CÔNG CỤ TỐI GIẢN */}
          <div className="ranking-controls screen-only">
            <div className="branch-filter-tabs">
              <button 
                type="button"
                className={`filter-tab-btn ${filterBranch === 'ALL' ? 'active' : ''}`}
                onClick={() => setFilterBranch('ALL')}
              >
                Tất cả <span className="tab-counter">{countAll}</span>
              </button>
              <button 
                type="button"
                className={`filter-tab-btn ${filterBranch === 'Nhánh A' ? 'active' : ''}`}
                onClick={() => setFilterBranch('Nhánh A')}
              >
                Nhánh A <span className="tab-counter">{countA}</span>
              </button>
              <button 
                type="button"
                className={`filter-tab-btn ${filterBranch === 'Nhánh B' ? 'active' : ''}`}
                onClick={() => setFilterBranch('Nhánh B')}
              >
                Nhánh B <span className="tab-counter">{countB}</span>
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
                onClick={() => handleStepSelect('step2')}
                title="Quay lại Bước 2: Thực địa"
              >
                ⬅ Về Thực địa
              </button>
              <button 
                type="button" 
                className="btn-control-action" 
                onClick={onRefresh} 
                disabled={loading}
              >
                {loading ? 'Đang tải...' : 'Làm mới'}
              </button>
            </div>
          </div>

          {/* BẢNG CHUNG KẾT & NÚT CHẤM ĐIỂM BGK */}
          <div className="table-responsive">
            <table className="ranking-table final-leaderboard-table">
              <thead>
                <tr>
                  <th style={{width: '50px', textAlign: 'center'}}>Hạng</th>
                  <th style={{width: '85px', textAlign: 'center'}}>Mã</th>
                  <th style={{minWidth: '220px'}}>Tên sản phẩm & Đề án</th>
                  <th style={{minWidth: '140px'}}>Khoa/Phòng</th>
                  <th style={{width: '70px', textAlign: 'center'}}>Nhánh</th>
                  <th style={{width: '120px', textAlign: 'center'}}>Thực địa</th>
                  <th style={{width: '95px', textAlign: 'center'}}>Điểm BGK</th>
                  <th style={{width: '100px', textAlign: 'center'}}>Xếp loại</th>
                  <th className="screen-only" style={{width: '140px', textAlign: 'center'}}>Thao tác BGK</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => {
                  const hasScore = row.hasScore && Number(row.tongDiem) > 0;
                  const scoreVal = hasScore ? Number(row.tongDiem) : (parseFloat(row.diemBanDau) || 88);
                  const st = getProjectStatus(row.maDeTai);
                  
                  let medalBadge = null;
                  if (index === 0) medalBadge = <span className="medal-tag medal-gold">🥇 1</span>;
                  else if (index === 1 || index === 2) medalBadge = <span className="medal-tag medal-silver">🥈 {index + 1}</span>;
                  else if (index === 3 || index === 4) medalBadge = <span className="medal-tag medal-bronze">🥉 {index + 1}</span>;
                  else medalBadge = <span className="rank-num-plain">{index + 1}</span>;

                  return (
                    <tr key={row.maDeTai || index} className={hasScore ? 'row-scored' : ''}>
                      <td className="text-center font-bold rank-cell">{medalBadge}</td>
                      <td className="text-center font-mono text-muted">{row.maDeTai}</td>
                      <td 
                        className="project-title-cell"
                        onClick={() => onSelectProject && onSelectProject(row)}
                        title="Xem Báo cáo A3"
                      >
                        <div className="font-bold text-main" style={{ color: '#003B73' }}>
                          {row.tenSanPham || row.tenDeTai}
                        </div>
                        {row.tenSanPham && (
                          <div className="sub-title-text">{row.tenDeTai}</div>
                        )}
                      </td>
                      <td>
                        <div className="font-medium">{row.khoaPhong}</div>
                      </td>
                      <td className="text-center">
                        <span className={`badge ${row.nhanh === 'Nhánh B' ? 'badge-partner' : 'badge-pass'}`}>
                          {row.nhanh}
                        </span>
                      </td>
                      <td className="text-center">
                        {renderStatusChip(st)}
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
                        <div className="flex items-center justify-center gap-1">
                          <button 
                            type="button" 
                            className="btn-score-now-compact"
                            onClick={() => onOpenScoreForProject ? onOpenScoreForProject(row) : (onSelectProject && onSelectProject(row))}
                            title="Chấm điểm 11 tiêu chí BGK"
                          >
                            ⭐ Chấm điểm
                          </button>
                          <button 
                            type="button" 
                            className="btn-action-compact btn-a3"
                            onClick={() => onSelectProject && onSelectProject(row)}
                            title="Xem A3"
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
