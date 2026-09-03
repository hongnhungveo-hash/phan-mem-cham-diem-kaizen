import { useState, useEffect } from 'react';
import './ScoreForm.css';

const SCORE_CRITERIA = [
  {
    id: 'c1',
    section: 'TÍNH CẤP THIẾT VÀ CHỌN ĐÚNG BÀI TOÁN (15 điểm)',
    title: 'Vấn đề lựa chọn là vướng mắc, bất cập thực tế tại khoa (ảnh hưởng trực tiếp người bệnh/vận hành)',
    max: 7,
    tooltip: 'Nếu đúng bất cập vướng mắc thực tế: chấm 6-7 điểm.\nNếu chỉ là vấn đề chung: chấm 3-5 điểm.'
  },
  {
    id: 'c2',
    section: 'TÍNH CẤP THIẾT VÀ CHỌN ĐÚNG BÀI TOÁN (15 điểm)',
    title: 'Có số liệu đo lường ban đầu rõ ràng, trung thực, có nguồn gốc trích xuất tin cậy',
    max: 8,
    tooltip: 'Nếu có đo lường đầu vào từ 1-2 tuần: chấm 7-8 điểm.\nNếu chỉ là số liệu ước tính: chấm 4-6 điểm.'
  },
  {
    id: 'c3',
    section: 'PHƯƠNG PHÁP LUẬN VÀ PHÂN TÍCH NGUYÊN NHÂN (25 điểm)',
    title: 'Áp dụng kỹ thuật 5 câu hỏi Tại sao (5 Whys) hoặc Xương cá tìm đúng nguyên nhân gốc rễ ở hệ thống',
    max: 13,
    tooltip: 'Nếu tìm đúng lỗi hệ thống: chấm 11-13 điểm.\nNếu chỉ dừng ở lỗi cá nhân: chấm 7-10 điểm.'
  },
  {
    id: 'c4',
    section: 'PHƯƠNG PHÁP LUẬN VÀ PHÂN TÍCH NGUYÊN NHÂN (25 điểm)',
    title: 'Nhận diện rõ nguy cơ sai sót lâm sàng và đưa ra giải pháp phòng ngừa chủ động, an toàn',
    max: 12,
    tooltip: 'Nếu có phương án phòng ngừa rõ: chấm 10-12 điểm.\nNếu giải pháp sơ sài: chấm 6-9 điểm.'
  },
  {
    id: 'c5',
    section: 'HIỆU QUẢ CẢI TIẾN THỰC TẾ (35 điểm)',
    title: 'Mức độ hoàn thành mục tiêu cam kết ban đầu (Định lượng % hoàn thành so với kế hoạch)',
    max: 15,
    tooltip: 'Nếu đạt trên 100% mục tiêu: chấm 13-15 điểm.\nNếu đạt từ 70%-90%: chấm 10-12 điểm.'
  },
  {
    id: 'c6',
    section: 'HIỆU QUẢ CẢI TIẾN THỰC TẾ (35 điểm)',
    title: 'Hiệu quả rõ rệt về rút ngắn thời gian chờ, giảm tỷ lệ lỗi/sai sót hoặc tiết kiệm chi phí',
    max: 10,
    tooltip: 'Nếu có số liệu chứng minh vượt trội: chấm 9-10 điểm.\nNếu hiệu quả ở mức trung bình: chấm 6-8 điểm.'
  },
  {
    id: 'c7',
    section: 'HIỆU QUẢ CẢI TIẾN THỰC TẾ (35 điểm)',
    title: 'Gia tăng rõ rệt mức độ hài lòng của người bệnh và nhân viên y tế trực tiếp tại khoa',
    max: 10,
    tooltip: 'Nếu phản hồi tích cực có khảo sát: chấm 9-10 điểm.\nNếu chưa đo lường hài lòng: chấm 5-7 điểm.'
  },
  {
    id: 'c8',
    section: 'TÍNH ỨNG DỤNG VÀ CHUẨN HOÁ QUY TRÌNH (15 điểm)',
    title: 'Đã đóng gói thành dự thảo Quy trình vận hành chuẩn rõ ràng, dễ chuyển giao toàn hệ thống',
    max: 10,
    tooltip: 'Nếu có bản dự thảo SOP chi tiết: chấm 9-10 điểm.\nNếu chỉ có mô tả chung: chấm 5-7 điểm.'
  },
  {
    id: 'c9',
    section: 'TÍNH ỨNG DỤNG VÀ CHUẨN HOÁ QUY TRÌNH (15 điểm)',
    title: 'Chi phí triển khai giải pháp hợp lý, giải pháp dễ duy trì thường xuyên và nhân rộng sang các cơ sở',
    max: 5,
    tooltip: 'Nếu dễ duy trì, chi phí thấp: chấm 4-5 điểm.\nNếu tốn kém khó duy trì: chấm 2-3 điểm.'
  },
  {
    id: 'c10',
    section: 'KỸ NĂNG TRÌNH BÀY VÀ MINH CHỨNG TRỰC QUAN (10 điểm)',
    title: 'Slide báo cáo đúng chuẩn 10 trang, trực quan, nhiều hình ảnh/video thực tế tại buồng bệnh',
    max: 5,
    tooltip: 'Nếu Slide đẹp nhiều ảnh thực tế: chấm 4-5 điểm.\nNếu Slide nhiều chữ ít ảnh: chấm 2-3 điểm.'
  },
  {
    id: 'c11',
    section: 'KỸ NĂNG TRÌNH BÀY VÀ MINH CHỨNG TRỰC QUAN (10 điểm)',
    title: 'Thuyết trình tự tin trong 07 phút, trả lời phản biện sắc bén, thể hiện tinh thần đoàn kết liên khoa',
    max: 5,
    tooltip: 'Nếu trả lời thuyết phục: chấm 4-5 điểm.\nNếu trả lời chưa rõ ràng: chấm 2-3 điểm.'
  }
];

export default function ScoreForm({ apiUrl, appConfig, onScoreSubmitted }) {
  const { projects, judges } = appConfig;

  const [formData, setFormData] = useState({
    maDeTai: '',
    tenDeTai: '',
    nhomTacGia: '',
    nhanh: 'Nhánh A',
    khoaPhong: '',
    khoaPhoiHop: '',
    giamKhao: '',
    ngayCham: new Date().toISOString().split('T')[0],
  });

  // Tự động điền đề tài và giám khảo đầu tiên khi load xong config
  useEffect(() => {
    if (projects.length > 0 && !formData.tenDeTai) {
      setFormData(prev => ({
        ...prev,
        maDeTai: projects[0].maDeTai,
        tenDeTai: projects[0].tenDeTai,
        nhomTacGia: projects[0].nhomTacGia || '',
        nhanh: projects[0].nhanh || 'Nhánh A',
        khoaPhong: projects[0].khoaPhong || '',
        khoaPhoiHop: projects[0].khoaPhoiHop || ''
      }));
    }
    if (judges.length > 0 && !formData.giamKhao) {
      setFormData(prev => ({ ...prev, giamKhao: judges[0] }));
    }
  }, [projects, judges]);

  const [scores, setScores] = useState({});
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const total = Object.values(scores).reduce((sum, val) => sum + (Number(val) || 0), 0);
    setTotalScore(total);
  }, [scores]);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    
    // Nếu đổi Tên Đề Tài, tự động cập nhật Mã, Nhánh, Khoa chủ trì, Khoa phối hợp
    if (name === 'tenDeTai') {
      const selected = projects.find(p => p.tenDeTai === value);
      if (selected) {
        setFormData(prev => ({ 
          ...prev, 
          tenDeTai: value, 
          maDeTai: selected.maDeTai,
          nhomTacGia: selected.nhomTacGia || '',
          nhanh: selected.nhanh || 'Nhánh A',
          khoaPhong: selected.khoaPhong || '',
          khoaPhoiHop: selected.khoaPhoiHop || ''
        }));
        return;
      }
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleScoreChange = (id, value, max) => {
    let num = Number(value);
    if (num < 0) num = 0;
    if (num > max) num = max;
    setScores(prev => ({ ...prev, [id]: num }));
  };

  const getClassification = (score) => {
    if (score >= 90) return { label: 'Xuất sắc', class: 'badge-excellent' };
    if (score >= 80) return { label: 'Giỏi', class: 'badge-good' };
    if (score >= 70) return { label: 'Khá', class: 'badge-fair' };
    return { label: 'Đạt', class: 'badge-pass' };
  };

  const groupedCriteria = SCORE_CRITERIA.reduce((acc, curr) => {
    if (!acc[curr.section]) acc[curr.section] = [];
    acc[curr.section].push(curr);
    return acc;
  }, {});

  const classification = getClassification(totalScore);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!apiUrl) {
      alert("Vui lòng cấu hình Google Apps Script URL.");
      return;
    }

    if (!formData.maDeTai || !formData.tenDeTai || !formData.giamKhao) {
      alert("Vui lòng điền đầy đủ Mã đề tài, Tên đề tài và Giám khảo chấm.");
      return;
    }

    setIsSubmitting(true);
    
    const phan1 = (Number(scores.c1) || 0) + (Number(scores.c2) || 0);
    const phan2 = (Number(scores.c3) || 0) + (Number(scores.c4) || 0);
    const phan3 = (Number(scores.c5) || 0) + (Number(scores.c6) || 0) + (Number(scores.c7) || 0);
    const phan4 = (Number(scores.c8) || 0) + (Number(scores.c9) || 0);
    const phan5 = (Number(scores.c10) || 0) + (Number(scores.c11) || 0);

    const payload = {
      action: 'submitScore',
      maDeTai: formData.maDeTai,
      tenDeTai: formData.tenDeTai,
      nhomTacGia: formData.nhomTacGia,
      nhanh: formData.nhanh,
      khoaPhong: formData.khoaPhong,
      khoaPhoiHop: formData.khoaPhoiHop || '',
      giamKhao: formData.giamKhao,
      ngayCham: formData.ngayCham,
      tongDiem: totalScore,
      xepLoai: classification.label,
      phan1, phan2, phan3, phan4, phan5,
      c1: scores.c1 || 0,
      c2: scores.c2 || 0,
      c3: scores.c3 || 0,
      c4: scores.c4 || 0,
      c5: scores.c5 || 0,
      c6: scores.c6 || 0,
      c7: scores.c7 || 0,
      c8: scores.c8 || 0,
      c9: scores.c9 || 0,
      c10: scores.c10 || 0,
      c11: scores.c11 || 0
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      if (result.status === 'success') {
        alert("Lưu kết quả chấm điểm thành công!");
        onScoreSubmitted();
      } else {
        alert("Có lỗi xảy ra: " + (result.message || 'Unknown error'));
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      alert("Không thể lưu kết quả. Vui lòng kiểm tra lại kết nối mạng và Google Apps Script.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="score-form-container">
      {/* Project Info Section */}
      <section className="form-section info-section">
        <h3>Thông Tin Đề Tài & Giám Khảo Chấm</h3>
        <div className="info-grid">
          <div className="input-group">
            <label className="input-label">Tên đề tài</label>
            <select className="input-field input-select" name="tenDeTai" value={formData.tenDeTai} onChange={handleInfoChange}>
              {projects.length === 0 && <option value="">Đang tải danh sách đề tài...</option>}
              {projects.map(p => (
                <option key={p.maDeTai} value={p.tenDeTai}>{p.tenDeTai}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label className="input-label">Mã đề tài</label>
            <input type="text" className="input-field" style={{backgroundColor: 'var(--background)'}} name="maDeTai" value={formData.maDeTai} readOnly title="Mã đề tài tự động nhảy theo tên đề tài" />
          </div>
          <div className="input-group">
            <label className="input-label">Nhóm tác giả</label>
            <input type="text" className="input-field" name="nhomTacGia" value={formData.nhomTacGia} onChange={handleInfoChange} placeholder="Tên nhóm / Tác giả chính" />
          </div>
          <div className="input-group">
            <label className="input-label">Nhánh đề tài</label>
            <select className="input-field input-select" name="nhanh" value={formData.nhanh} onChange={handleInfoChange}>
              <option value="Nhánh A">Nhánh A (Cải tiến nội bộ khoa/phòng)</option>
              <option value="Nhánh B">Nhánh B (Cải tiến liên khoa - Liên danh)</option>
            </select>
          </div>
          <div className="input-group">
            <label className="input-label">Khoa/phòng {formData.nhanh === 'Nhánh B' ? 'chủ trì' : 'thực hiện'}</label>
            <input type="text" className="input-field" name="khoaPhong" value={formData.khoaPhong} onChange={handleInfoChange} placeholder="Khoa phòng thực hiện" />
          </div>
          
          {/* Trường Khoa phối hợp chỉ hiện khi là Nhánh B */}
          {formData.nhanh === 'Nhánh B' && (
            <div className="input-group">
              <label className="input-label" style={{color: '#0369a1'}}>
                Khoa/phòng phối hợp (Đề án Liên danh)
              </label>
              <input 
                type="text" 
                className="input-field" 
                name="khoaPhoiHop" 
                value={formData.khoaPhoiHop} 
                onChange={handleInfoChange} 
                placeholder="Khoa phối hợp (Ví dụ: Khoa Dược, TCKT, GMHS...)" 
              />
            </div>
          )}

          <div className="input-group">
            <label className="input-label">Giám khảo chấm</label>
            <select className="input-field input-select" name="giamKhao" value={formData.giamKhao} onChange={handleInfoChange}>
              {judges.length === 0 && <option value="">Đang tải danh sách giám khảo...</option>}
              {judges.map(judge => (
                <option key={judge} value={judge}>{judge}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label className="input-label">Ngày chấm</label>
            <input type="date" className="input-field" name="ngayCham" value={formData.ngayCham} onChange={handleInfoChange} />
          </div>
        </div>
      </section>

      {/* Scoring Section */}
      <section className="form-section scoring-section">
        <h3 style={{display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem'}}>
          Tiêu Chí Đánh Giá
          <span style={{fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 'normal'}}>
            (Click vào biểu tượng ! để xem hướng dẫn chấm)
          </span>
        </h3>
        {Object.entries(groupedCriteria).map(([sectionName, criteriaList]) => {
          const sectionMaxScore = criteriaList.reduce((sum, c) => sum + c.max, 0);
          const sectionCurrentScore = criteriaList.reduce((sum, c) => sum + (Number(scores[c.id]) || 0), 0);

          return (
            <div key={sectionName} className="criteria-section">
              <h4 className="section-title" style={{display: 'flex', alignItems: 'center'}}>
                <span>{sectionName}</span>
                <span style={{marginLeft: 'auto', color: 'var(--primary-dark)', fontSize: '0.9rem', backgroundColor: '#e0f2fe', padding: '0.15rem 0.6rem', borderRadius: '15px'}}>
                  {sectionCurrentScore} / {sectionMaxScore}
                </span>
              </h4>
              <div className="criteria-list">
                {criteriaList.map(c => (
                  <div key={c.id} className="criteria-item">
                    <div className="criteria-info">
                      <div className="criteria-title">
                        {c.title}
                        <span className="info-icon-wrapper">
                          !
                          <div className="tooltip-box">{c.tooltip}</div>
                        </span>
                      </div>
                      <p className="criteria-desc" style={{fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, marginTop: '0.25rem'}}>Tối đa: {c.max} đ</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <input 
                        type="number" 
                        className="input-field score-input-field" 
                        min="0" 
                        max={c.max}
                        value={scores[c.id] === 0 && !Object.keys(scores).includes(c.id) ? '' : scores[c.id] || ''}
                        onChange={(e) => handleScoreChange(c.id, e.target.value, c.max)}
                        placeholder="0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Sticky Bottom Summary */}
      <div className="score-summary glass-panel">
        <div className="summary-info">
          <span className="summary-label">Tổng Điểm:</span>
          <span className="summary-value">{totalScore}/100</span>
          <span className={`badge ${classification.class} summary-badge`}>{classification.label}</span>
        </div>
        <button 
          className="btn btn-primary" 
          onClick={handleSubmit}
          disabled={isSubmitting || !apiUrl}
        >
          {isSubmitting ? 'Đang lưu...' : 'Lưu Kết Quả Chấm'}
        </button>
      </div>
    </div>
  );
}
