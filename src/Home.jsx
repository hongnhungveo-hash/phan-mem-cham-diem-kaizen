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
              <span className="hero-badge-hospital">Bệnh Viện Đa Khoa Hùng Vương</span>
              <span className="hero-badge-dot">•</span>
              <span className="hero-badge-slogan">Thân Thiện — Chuyên Nghiệp — Chu Đáo</span>
            </div>

            <div className="hero-welcome-greeting">
              Chào mừng Quý Thầy Cô, Đồng Nghiệp & Hội đồng Giám khảo đến với
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
          </div>

          {/* Cột phải: Khối "Tại sao phải Kaizen trong y tế?" gồm 3 thẻ nổi bật */}
          <div className="hero-right-col">
            <div className="hero-reasons-box">
              <div className="reasons-box-header">
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

      {/* Floating Metrics Bar (Khối chỉ số vận hành nổi: Tiêu đề ngắn gọn, không mô tả thừa) */}
      <section className="metrics-section floating-metrics">
        <div className="metric-card">
          <div className="metric-step-tag">01</div>
          <div className="metric-number">{totalProjects}</div>
          <div className="metric-label">Số lượng đề tài đăng ký</div>
        </div>

        <div className="metric-card">
          <div className="metric-step-tag">02</div>
          <div className="metric-number">{totalDepts}</div>
          <div className="metric-label">Khoa phòng tham gia</div>
        </div>

        <div className="metric-card">
          <div className="metric-step-tag">03</div>
          <div className="metric-number" style={{ fontSize: '1.45rem', color: '#0085db' }}>Vòng 2</div>
          <div className="metric-label">Tiến độ hiện tại</div>
        </div>

        <div className="metric-card">
          <div className="metric-step-tag">04</div>
          <div className="metric-number" style={{ fontSize: '1.45rem', color: '#16a34a' }}>28/09/2026</div>
          <div className="metric-label">Kế hoạch Chung kết</div>
        </div>
      </section>

      {/* DANH MỤC SẢN PHẨM & ĐỀ TÀI CẢI TIẾN ĐANG ĐĂNG KÝ */}
      <section className="section-block registered-products-section">
        <div className="section-header flex-between">
          <div>
            <h2 className="section-title">Sản Phẩm & Đề Tài Cải Tiến Đang Đăng Ký</h2>
            <p className="section-desc">Danh sách các sáng kiến và giải pháp cải tiến chất lượng y tế đang được tiếp nhận và thử nghiệm tại các đơn vị</p>
          </div>
          <div className="registered-count-tag">
            Đã tiếp nhận: <strong>{topProjects.length} đề án</strong>
          </div>
        </div>

        {/* DANH SÁCH ĐỀ TÀI DẠNG LƯỚI 2 CỘT TINH GỌN (BỎ MÃ ĐỀ ÁN & PHÂN NHÁNH) */}
        <div className="registered-project-grid-2col">
          {topProjects.map((p, idx) => (
            <div key={p.maDeTai} className="registered-project-card-2col">
              <div className="project-card-top-row">
                <span className="project-card-idx">{(idx + 1).toString().padStart(2, '0')}</span>
                <h3 className="project-card-title">
                  {p.tenDeTai || p.tenSanPham}
                </h3>
                {p.hasScore && (
                  <span className="card-evaluated-badge" title={`Đã chấm điểm: ${p.tongDiem} điểm (${p.xepLoai})`}>
                    ✓ {p.tongDiem}đ
                  </span>
                )}
              </div>

              <div className="project-card-bottom-row">
                <div className="project-card-meta">
                  <div className="meta-line">
                    <span className="meta-lbl">Khoa/Phòng:</span>
                    <strong className="meta-val">{p.khoaPhong} {p.khoaPhoiHop ? `(+ ${p.khoaPhoiHop})` : ''}</strong>
                  </div>
                  <div className="meta-line">
                    <span className="meta-lbl">Tác giả:</span>
                    <strong className="meta-val">{getCleanLeaderName(p)}</strong>
                  </div>
                </div>

                <div className="project-card-action">
                  <button 
                    type="button" 
                    className="btn-view-detail-compact"
                    onClick={() => onSelectProject && onSelectProject(p)}
                  >
                    <span>Xem Chi Tiết</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="registered-list-notice">
          <strong>Thông báo Ban Tổ chức:</strong> Cổng tiếp nhận đề án đang tiếp tục nhận sản phẩm từ các Khoa/Phòng. 
          Hội đồng Ban Giám khảo sẽ tiến hành chấm thi và xếp hạng chính thức tại Vòng Chung kết sau khi các đơn vị hoàn tất thử nghiệm thực địa.
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
