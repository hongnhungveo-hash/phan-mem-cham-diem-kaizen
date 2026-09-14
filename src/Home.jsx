import React from 'react';
import './Home.css';
import { COMPETITION_INFO, getCleanLeaderName } from './kaizenData';

export default function Home({ 
  totalProjects = 0, 
  totalDepts = 0, 
  totalScores = 0, 
  topScore = 0,
  topProjects = [],
  onNavigate,
  onSelectProject
}) {
  const phil = COMPETITION_INFO.kaizenPhilosophy;

  // Lấy danh sách đề án đã được thẩm định
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
      {/* Hero Section: Tích hợp Triết Lý Kaizen trực tiếp trong khung tiêu đề */}
      <section className="hero-section">
        <div className="hero-backdrop-glow"></div>
        <div className="hero-content-grid">
          {/* Cột trái: Tiêu đề, Khẩu hiệu & Định nghĩa Triết lý Kaizen */}
          <div className="hero-left-col">
            <div className="hero-badge">
              Bệnh Viện Đa Khoa Hùng Vương • Thân Thiện — Chuyên Nghiệp — Chu Đáo
            </div>

            <h1 className="hero-title">{COMPETITION_INFO.title}</h1>
            
            <div className="hero-slogan-wrap">
              <span className="hero-slogan">"{COMPETITION_INFO.slogan}"</span>
            </div>

            {/* Khung Triết lý Kaizen nổi bật ngay trong khung tiêu đề */}
            <div className="hero-philosophy-card">
              <div className="phil-card-header">
                <span className="phil-tag">Triết Lý Kaizen (改善)</span>
                <span className="phil-sub">Cải tiến liên tục mỗi ngày vì an toàn người bệnh</span>
              </div>
              <p className="phil-definition-text">
                {phil.definition}
              </p>
            </div>

            {/* Các nút hành động CTA */}
            <div className="hero-actions">
              <button 
                type="button" 
                className="btn btn-hero-primary"
                onClick={() => onNavigate('showcase')}
              >
                Khám Phá Thư Viện Đề Tài
              </button>
              <button 
                type="button" 
                className="btn btn-hero-secondary"
                onClick={() => onNavigate('ranking')}
              >
                Xem Điểm Thẩm Định Sơ Bộ
              </button>
              <button 
                type="button" 
                className="btn btn-hero-outline"
                onClick={() => onNavigate('score')}
              >
                Cổng Chấm Điểm Ban Giám Khảo
              </button>
            </div>
          </div>

          {/* Cột phải: Khối "Tại sao phải Kaizen trong y tế?" gồm 3 thẻ nổi bật */}
          <div className="hero-right-col">
            <div className="hero-reasons-box">
              <div className="reasons-box-header">
                <span className="reasons-kicker">MỤC TIÊU CỐT LÕI</span>
                <h3 className="reasons-box-title">Tại Sao Phải Thực Hiện Kaizen?</h3>
                <p className="reasons-box-desc">3 đòn bẩy chiến lược chuyển hóa chất lượng y tế toàn diện</p>
              </div>

              <div className="hero-reasons-list">
                {phil.reasons.map((r, idx) => (
                  <div key={idx} className="hero-reason-item">
                    <div className="reason-item-index">0{idx + 1}</div>
                    <div className="reason-item-content">
                      <h4 className="reason-item-title">{r.title}</h4>
                      <p className="reason-item-desc">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave SVG Divider chuyển tiếp mượt mà sang thân trang */}
        <div className="hero-wave-divider">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
            <path 
              d="M0,24 C320,54 420,10 720,32 C1020,54 1180,16 1440,28 L1440,60 L0,60 Z" 
              fill="#fafbfc"
            />
          </svg>
        </div>
      </section>

      {/* Floating Metrics Bar (Khối chỉ số vận hành nổi) */}
      <section className="metrics-section floating-metrics">
        <div className="metric-card">
          <div className="metric-step-tag">01</div>
          <div className="metric-number">{totalProjects}</div>
          <div className="metric-label">Đề tài đã đăng ký</div>
          <div className="metric-sub">Hồ sơ đã tiếp nhận và phê duyệt thử nghiệm</div>
        </div>

        <div className="metric-card">
          <div className="metric-step-tag">02</div>
          <div className="metric-number">{totalDepts}</div>
          <div className="metric-label">Khoa / Phòng chủ trì</div>
          <div className="metric-sub">Bệnh viện hạt nhân Đoan Hùng & các vệ tinh</div>
        </div>

        <div className="metric-card">
          <div className="metric-step-tag">03</div>
          <div className="metric-number" style={{ fontSize: '1.45rem', color: '#0085db' }}>Vòng 2</div>
          <div className="metric-label">Trạng thái hiện tại</div>
          <div className="metric-sub">Đang triển khai thử nghiệm thực địa</div>
        </div>

        <div className="metric-card">
          <div className="metric-step-tag">04</div>
          <div className="metric-number" style={{ fontSize: '1.45rem', color: '#16a34a' }}>28/09/2026</div>
          <div className="metric-label">Kế hoạch Vòng Chung kết</div>
          <div className="metric-sub">Ban Giám khảo chấm điểm thuyết trình chính thức</div>
        </div>
      </section>

      {/* DANH MỤC SẢN PHẨM & ĐỀ TÀI CẢI TIẾN ĐANG ĐĂNG KÝ */}
      <section className="section-block registered-products-section">
        <div className="section-header flex-between">
          <div>
            <div className="section-badge">KHÔNG GIAN THAM KHẢO & HỌC HỎI</div>
            <h2 className="section-title">Sản Phẩm & Đề Tài Cải Tiến Đang Đăng Ký</h2>
            <p className="section-desc">Giới thiệu các sáng kiến, mô hình y tế và giải pháp tinh gọn đang được triển khai thử nghiệm tại các khoa/phòng</p>
          </div>
          <button 
            type="button" 
            className="btn btn-outline btn-sm"
            onClick={() => onNavigate('showcase')}
          >
            Xem Thư Viện Tất Cả Sản Phẩm ➔
          </button>
        </div>

        {/* LƯỚI THẺ SẢN PHẨM CẢI TIẾN TRỰC QUAN, NGẮN GỌN & DỄ HIỂU */}
        <div className="registered-cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '1.5rem',
          marginTop: '1rem'
        }}>
          {topProjects.map((p) => {
            const qs = p.quickSummary || {};
            return (
              <div 
                key={p.maDeTai} 
                className="registered-product-card"
                style={{
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 59, 115, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                }}
              >
                <div>
                  {/* TAGS HÀNG ĐẦU */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <span style={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        color: '#003B73',
                        background: '#e0f2fe',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px'
                      }}>
                        {p.maDeTai}
                      </span>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#0369a1',
                        background: '#f0f9ff',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px'
                      }}>
                        {p.nhanh}
                      </span>
                    </div>

                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#15803d',
                      background: '#dcfce7',
                      border: '1px solid #86efac',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px'
                    }}>
                      Đang Thử Nghiệm
                    </span>
                  </div>

                  {/* TÊN SẢN PHẨM & ĐỀ TÀI */}
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#003B73',
                    margin: '0 0 0.4rem 0',
                    lineHeight: 1.35
                  }}>
                    {p.tenSanPham || p.tenDeTai}
                  </h3>

                  <div style={{ fontSize: '0.84rem', color: '#64748b', marginBottom: '1rem' }}>
                    <strong>Đơn vị:</strong> {p.khoaPhong} {p.khoaPhoiHop ? `(+ ${p.khoaPhoiHop})` : ''} • <strong>Chủ nhiệm:</strong> {getCleanLeaderName(p)}
                  </div>

                  {/* KHỐI 3 GẠCH ĐẦU DÒNG CỰC KỲ DỄ HIỂU */}
                  <div style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '1rem',
                    marginBottom: '1rem',
                    fontSize: '0.86rem',
                    lineHeight: '1.5',
                    color: '#334155'
                  }}>
                    <div style={{ marginBottom: '0.45rem' }}>
                      <strong style={{ color: '#0085db' }}>Ý tưởng: </strong>
                      {qs.idea || p.tomTat}
                    </div>
                    {qs.painPoints && qs.painPoints[0] && (
                      <div style={{ marginBottom: '0.45rem', color: '#b91c1c' }}>
                        <strong>Bất cập cũ: </strong>
                        {qs.painPoints[0]}
                      </div>
                    )}
                    {qs.keyMetrics && qs.keyMetrics[0] && (
                      <div style={{ color: '#15803d', fontWeight: 600 }}>
                        <strong>Hiệu quả: </strong>
                        {qs.keyMetrics[0].label}: {qs.keyMetrics[0].before} → {qs.keyMetrics[0].after} ({qs.keyMetrics[0].note})
                      </div>
                    )}
                  </div>
                </div>

                {/* NÚT XEM CHI TIẾT */}
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    Ngày tiếp nhận: {p.ngayDangKy || '05/09/2026'}
                  </span>
                  <button 
                    type="button" 
                    className="btn btn-primary btn-sm"
                    style={{
                      background: '#0085db',
                      color: '#ffffff',
                      fontWeight: 600,
                      padding: '0.45rem 1rem',
                      borderRadius: '6px'
                    }}
                    onClick={() => onSelectProject && onSelectProject(p)}
                  >
                    Xem Chi Tiết Sản Phẩm ➔
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          marginTop: '1.5rem',
          textAlign: 'center',
          background: '#eff6ff',
          border: '1px dashed #93c5fd',
          borderRadius: '8px',
          padding: '1rem',
          fontSize: '0.86rem',
          color: '#1e40af'
        }}>
          <strong>Thông báo Ban Tổ chức:</strong> Cổng tiếp nhận đề án đang tiếp tục nhận sản phẩm từ các Khoa/Phòng. 
          Hội đồng Ban Giám khảo sẽ tiến hành chấm thi và xếp hạng chính thức tại Vòng Chung kết sau khi các đơn vị hoàn tất thử nghiệm thực địa.
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-block">
        <div className="section-header">
          <div className="section-badge">LỘ TRÌNH THI ĐUA</div>
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
          <div className="section-badge">ĐỊNH HƯỚNG CHUYÊN MÔN</div>
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
          <div className="section-badge">CƠ CẤU THI ĐUA</div>
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
