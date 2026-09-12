import React from 'react';
import './Home.css';
import { COMPETITION_INFO } from './kaizenData';

export default function Home({ 
  totalProjects = 0, 
  totalDepts = 0, 
  totalScores = 0, 
  topScore = 0,
  onNavigate 
}) {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">Kỷ Niệm 16 Năm Thành Lập Bệnh Viện (2010 – 2026)</div>
        <h1 className="hero-title">{COMPETITION_INFO.title}</h1>
        <div className="hero-theme-box">
          <span className="hero-theme-label">Chủ đề chính</span>
          <p className="hero-theme-text">{COMPETITION_INFO.theme}</p>
        </div>
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
            Khu Vực Ban Giám Khảo
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
          <div className="metric-sub">Bao gồm bệnh viện hạt nhân và vệ tinh</div>
        </div>

        <div className="metric-card">
          <div className="metric-number">{totalScores}</div>
          <div className="metric-label">Lượt phiếu đã chấm</div>
          <div className="metric-sub">Đánh giá độc lập từ Ban Giám khảo</div>
        </div>

        <div className="metric-card">
          <div className="metric-number">{topScore > 0 ? `${topScore}` : '—'}</div>
          <div className="metric-label">Điểm trung bình cao nhất</div>
          <div className="metric-sub">Thang điểm 100 theo chuẩn PDCA</div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">Tiến Độ Hội Thi</h2>
          <p className="section-desc">Lộ trình 3 vòng triển khai hướng tới Đại lễ Kỷ niệm ngày 28/09/2026</p>
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
              <div className="timeline-time">{item.time}</div>
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
          <h2 className="section-title">Cơ Cấu Phân Nhánh & Giải Thưởng</h2>
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
