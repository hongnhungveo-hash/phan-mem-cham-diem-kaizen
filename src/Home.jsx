import React from 'react';
import './Home.css';
import { COMPETITION_INFO } from './kaizenData';

export default function Home({ 
  totalProjects = 0, 
  totalDepts = 0, 
  totalScores = 0, 
  topScore = 0,
  topProjects = [],
  onNavigate 
}) {
  const phil = COMPETITION_INFO.kaizenPhilosophy;

  // Lấy Top 5 đề án có điểm cao nhất
  const top5List = (topProjects || [])
    .filter(p => p.hasScore !== false && Number(p.tongDiem) > 0)
    .slice(0, 5);

  const getBadgeClass = (score) => {
    if (score >= 90) return 'badge-excellent';
    if (score >= 80) return 'badge-good';
    if (score >= 70) return 'badge-fair';
    return 'badge-pass';
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">Bệnh Viện Đa Khoa Hùng Vương</div>
        <h1 className="hero-title">{COMPETITION_INFO.title}</h1>
        <p className="hero-slogan">"{COMPETITION_INFO.slogan}"</p>

        <div className="hero-actions">
          <button 
            type="button" 
            className="btn btn-primary hero-btn"
            onClick={() => onNavigate('showcase')}
          >
            Khám Phá Thư Viện Đề Tài
          </button>
          <button 
            type="button" 
            className="btn btn-outline hero-btn"
            onClick={() => onNavigate('ranking')}
          >
            Xem Bảng Xếp Hạng
          </button>
          <button 
            type="button" 
            className="btn btn-secondary hero-btn"
            onClick={() => onNavigate('score')}
          >
            Đánh Giá & Chấm Điểm
          </button>
        </div>
      </section>

      {/* Live Metrics Grid */}
      <section className="metrics-section">
        <div className="metric-card">
          <div className="metric-number">{totalProjects}</div>
          <div className="metric-label">Đề tài dự thi</div>
          <div className="metric-sub">Phân bổ tại Nhánh A & Nhánh B</div>
        </div>

        <div className="metric-card">
          <div className="metric-number">{totalDepts}</div>
          <div className="metric-label">Khoa / Phòng tham gia</div>
          <div className="metric-sub">Bệnh viện hạt nhân và các cơ sở vệ tinh</div>
        </div>

        <div className="metric-card">
          <div className="metric-number">{totalScores}</div>
          <div className="metric-label">Lượt phiếu đã chấm</div>
          <div className="metric-sub">Đánh giá độc lập từ Ban Giám khảo</div>
        </div>

        <div className="metric-card">
          <div className="metric-number">{topScore > 0 ? `${topScore}` : '—'}</div>
          <div className="metric-label">Điểm trung bình cao nhất</div>
          <div className="metric-sub">Thang điểm 100 theo chuẩn PDCA y tế</div>
        </div>
      </section>

      {/* TOP 5 ĐỀ ÁN DẪN ĐẦU (VIEW TRỰC TIẾP TRÊN TRANG CHỦ) */}
      <section className="section-block top5-section">
        <div className="section-header flex-between">
          <div>
            <h2 className="section-title">Top 5 Đề Án Dẫn Đầu</h2>
            <p className="section-desc">Các đề án có điểm số đánh giá cao nhất tính đến thời điểm hiện tại</p>
          </div>
          <button 
            type="button" 
            className="btn btn-outline btn-sm"
            onClick={() => onNavigate('ranking')}
          >
            Xem Bảng Xếp Hạng Đầy Đủ
          </button>
        </div>

        {top5List.length === 0 ? (
          <div className="empty-top-notice">
            Các đề án đang trong tiến trình thẩm định và nộp điểm từ Ban Giám khảo.
          </div>
        ) : (
          <div className="top5-table-wrapper">
            <table className="top5-table">
              <thead>
                <tr>
                  <th style={{width: '60px', textAlign: 'center'}}>Hạng</th>
                  <th style={{width: '90px', textAlign: 'center'}}>Mã số</th>
                  <th>Tên đề án cải tiến</th>
                  <th style={{minWidth: '160px'}}>Khoa / Phòng thực hiện</th>
                  <th style={{width: '80px', textAlign: 'center'}}>Nhánh</th>
                  <th style={{width: '90px', textAlign: 'center'}}>Điểm TB</th>
                  <th style={{width: '90px', textAlign: 'center'}}>Xếp loại</th>
                </tr>
              </thead>
              <tbody>
                {top5List.map((item, idx) => {
                  const score = Number(item.tongDiem);
                  return (
                    <tr key={item.maDeTai || idx} className={`top5-row rank-${idx + 1}`}>
                      <td className="text-center font-bold rank-num">{idx + 1}</td>
                      <td className="text-center font-medium text-muted">{item.maDeTai}</td>
                      <td className="font-medium project-name-cell">{item.tenDeTai}</td>
                      <td className="dept-cell">{item.khoaPhong}</td>
                      <td className="text-center">
                        <span className={`badge ${item.nhanh === 'Nhánh B' ? 'badge-partner' : 'badge-pass'}`}>
                          {item.nhanh}
                        </span>
                      </td>
                      <td className="text-center font-bold text-highlight">{score.toFixed(1)}</td>
                      <td className="text-center">
                        <span className={`badge ${getBadgeClass(score)}`}>
                          {item.xepLoai}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="top5-footer-cta">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onNavigate('ranking')}
              >
                Xem Toàn Bộ Bảng Điểm 14 Cột & Nhận Xét Của Hội Đồng
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Kaizen Philosophy Section: Kaizen là gì? Tại sao phải Kaizen? */}
      <section className="section-block philosophy-section">
        <div className="section-header">
          <h2 className="section-title">Triết Lý Kaizen Trong Quản Lý Chất Lượng Bệnh Viện</h2>
          <p className="section-desc">Cải tiến liên tục từng bước nhỏ để kiến tạo văn hóa an toàn và tối ưu hóa vận hành</p>
        </div>

        <div className="philosophy-definition-box">
          <h3 className="phil-def-title">Kaizen là gì?</h3>
          <p className="phil-def-text">{phil.definition}</p>
        </div>

        <div className="philosophy-reasons-grid">
          {phil.reasons.map((r, idx) => (
            <div key={idx} className="reason-card">
              <div className="reason-num">0{idx + 1}</div>
              <h4 className="reason-title">{r.title}</h4>
              <p className="reason-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">Tiến Độ Các Vòng Thi</h2>
          <p className="section-desc">Kế hoạch triển khai đồng bộ giữa các khối chuyên môn toàn hệ thống</p>
        </div>

        <div className="timeline-grid">
          {COMPETITION_INFO.timeline.map((item, idx) => (
            <div key={idx} className={`timeline-card status-${item.status}`}>
              <div className="timeline-header">
                <span className="timeline-round">{item.round}</span>
                <span className={`status-pill pill-${item.status}`}>
                  {item.status === 'completed' && 'Đã hoàn thành'}
                  {item.status === 'active' && 'Đang diễn ra'}
                  {item.status === 'upcoming' && 'Sắp tới'}
                </span>
              </div>
              <h3 className="timeline-name">{item.name}</h3>
              <p className="timeline-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6 Core Categories */}
      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">6 Nhóm Chủ Đề Cải Tiến Trọng Tâm</h2>
          <p className="section-desc">Định hướng giải quyết điểm nghẽn lâm sàng và nâng cao chất lượng phục vụ</p>
        </div>

        <div className="categories-grid">
          {COMPETITION_INFO.categories.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="category-code">{cat.code}</div>
              <h3 className="category-title">{cat.name}</h3>
              <p className="category-desc">{cat.shortDesc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Competition Branches & Awards */}
      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">Cơ Cấu Phân Nhánh & Khen Thưởng</h2>
          <p className="section-desc">Đánh giá công bằng, minh bạch giữa sáng kiến nội bộ và sáng kiến liên khoa</p>
        </div>

        <div className="branches-grid">
          <div className="branch-card">
            <span className="branch-tag">Nhánh A</span>
            <h3 className="branch-title">Cải Tiến Nội Bộ Khoa / Phòng</h3>
            <p className="branch-desc">
              Tập trung xử lý các điểm nghẽn, sắp xếp 5S buồng bệnh, phòng thủ thuật, kho dược, quản lý y lệnh và chống lãng phí vật tư trong phạm vi nội bộ từng đơn vị.
            </p>
            <div className="award-list">
              <div className="award-item"><strong>01 Giải Nhất:</strong> Bằng khen & Phần thưởng Ban Giám đốc</div>
              <div className="award-item"><strong>01 Giải Nhì:</strong> Giấy khen & Phần thưởng Hội đồng</div>
              <div className="award-item"><strong>02 Giải Ba:</strong> Giấy khen & Phần thưởng khuyến khích</div>
            </div>
          </div>

          <div className="branch-card">
            <span className="branch-tag">Nhánh B</span>
            <h3 className="branch-title">Cải Tiến Liên Khoa / Điểm Chạm</h3>
            <p className="branch-desc">
              Đề án liên danh giải quyết nút thắt quy trình tiếp giáp giữa 2 hoặc nhiều khoa phòng (Cấp cứu - Gây mê, Khám bệnh - Cận lâm sàng, Lâm sàng - Dược/Viện phí).
            </p>
            <div className="award-list">
              <div className="award-item"><strong>01 Giải Nhất:</strong> Bằng khen & Phần thưởng Ban Giám đốc</div>
              <div className="award-item"><strong>01 Giải Nhì:</strong> Giấy khen & Phần thưởng Hội đồng</div>
              <div className="award-item"><strong>02 Giải Ba:</strong> Giấy khen & Phần thưởng khuyến khích</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
