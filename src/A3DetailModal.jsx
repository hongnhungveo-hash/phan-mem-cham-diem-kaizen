import React from 'react';
import './A3DetailModal.css';

export default function A3DetailModal({ project, isOpen, onClose, onPrint }) {
  if (!isOpen || !project) return null;

  const a3 = project.a3Report || {
    background: "Đề án đang cập nhật dữ liệu bối cảnh chi tiết.",
    baselineData: "Đang thu thập số liệu hiện trạng đo lường ban đầu.",
    rootCause: "Đang tiến hành phân tích nguyên nhân gốc rễ theo phương pháp 5 Whys và Sơ đồ Xương cá.",
    smartGoal: "Mục tiêu định lượng đang được hoàn thiện theo chu trình PDCA.",
    countermeasures: "Các giải pháp cải tiến đang được triển khai thử nghiệm tại buồng bệnh/khoa phòng.",
    resultsBeforeAfter: [
      { metric: "Thời gian xử lý", before: "Đang đo lường", after: "Đang đánh giá" },
      { metric: "Tỷ lệ tuân thủ", before: "Đang đo lường", after: "Đang đánh giá" }
    ],
    standardization: "Dự thảo quy trình SOP đang được Tổ Quản lý Chất lượng thẩm định.",
    lessonsLearned: "Ghi nhận bài học kinh nghiệm trong quá trình thử nghiệm thực địa."
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="a3-modal-overlay" onClick={onClose}>
      <div className="a3-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="a3-modal-header screen-only">
          <div className="a3-header-meta">
            <span className="a3-project-id">{project.maDeTai}</span>
            <span className="a3-branch-badge">{project.nhanh}</span>
            <span className="a3-dept-badge">{project.khoaPhong}</span>
          </div>
          <div className="a3-header-actions">
            <button type="button" className="btn btn-outline a3-action-btn" onClick={handlePrint}>
              In Báo Cáo A3
            </button>
            <button type="button" className="a3-close-btn" onClick={onClose}>
              Đóng
            </button>
          </div>
        </div>

        {/* Báo Cáo A3 Chuẩn Khổ Giấy In */}
        <div className="a3-printable-content">
          {/* Header Hành chính (chỉ hiện khi in) */}
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
              <span><strong>Đơn vị chủ trì:</strong> {project.khoaPhong}</span>
              {project.khoaPhoiHop && (
                <span> | <strong>Đơn vị phối hợp:</strong> {project.khoaPhoiHop}</span>
              )}
              {project.nhomTacGia && (
                <span> | <strong>Nhóm tác giả:</strong> {project.nhomTacGia}</span>
              )}
            </div>
          </div>

          {/* Nội dung 2 Cột A3 */}
          <div className="a3-grid-layout">
            {/* CỘT TRÁI: PLAN (BỐI CẢNH - HIỆN TRẠNG - NGUYÊN NHÂN) */}
            <div className="a3-col">
              <div className="a3-box">
                <div className="a3-box-header">1. Bối Cảnh & Lý Do Chọn Đề Tài (Background)</div>
                <div className="a3-box-body">
                  <p>{a3.background}</p>
                </div>
              </div>

              <div className="a3-box">
                <div className="a3-box-header">2. Số Liệu Đo Lường Hiện Trạng (Baseline Data)</div>
                <div className="a3-box-body">
                  <p>{a3.baselineData}</p>
                </div>
              </div>

              <div className="a3-box">
                <div className="a3-box-header">3. Phân Tích Nguyên Nhân Gốc Rễ (5 Whys / Xương Cá)</div>
                <div className="a3-box-body">
                  <p style={{ whiteSpace: 'pre-line' }}>{a3.rootCause}</p>
                </div>
              </div>

              <div className="a3-box">
                <div className="a3-box-header">4. Mục Tiêu Cải Tiến Cụ Thể (SMART Goal)</div>
                <div className="a3-box-body">
                  <p>{a3.smartGoal}</p>
                </div>
              </div>
            </div>

            {/* CỘT PHẢI: DO - CHECK - ACT (GIẢI PHÁP - KẾT QUẢ - CHUẨN HÓA) */}
            <div className="a3-col">
              <div className="a3-box">
                <div className="a3-box-header">5. Biện Pháp Cải Tiến Đã Thực Hiện (Countermeasures)</div>
                <div className="a3-box-body">
                  <p style={{ whiteSpace: 'pre-line' }}>{a3.countermeasures}</p>
                </div>
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
                            <td className="text-muted">{r.before}</td>
                            <td className="text-highlight"><strong>{r.after}</strong></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>Đang cập nhật số liệu so sánh Before vs After.</p>
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

        {/* Modal Footer */}
        <div className="a3-modal-footer screen-only">
          <div className="a3-footer-hint">
            * Báo cáo A3 được thiết lập theo chu trình PDCA chuẩn y tế Bệnh viện Đa khoa Hùng Vương.
          </div>
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Đóng Cửa Sổ
          </button>
        </div>
      </div>
    </div>
  );
}
