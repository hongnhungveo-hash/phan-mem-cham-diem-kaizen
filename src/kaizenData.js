// DỮ LIỆU CỔNG THÔNG TIN HỘI THI KAIZEN - BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG

export const COMPETITION_INFO = {
  title: "HỘI THI ĐỀ ÁN CẢI TIẾN CHẤT LƯỢNG NĂM 2026",
  subtitle: "Bệnh viện Đa khoa Hùng Vương",
  theme: "Đột phá chất lượng – Tối ưu vận hành",
  slogan: "Đột phá chất lượng – Tối ưu vận hành",
  hospitalSlogan: "Thân thiện – Chuyên nghiệp – Chu đáo",
  organizer: "Công ty TNHH Phát triển Y học Việt — Bệnh viện Đa khoa Hùng Vương",
  focalPoint: "Phòng Kế hoạch Tổng hợp — Tổ Quản lý Chất lượng",
  
  timeline: [
    {
      round: "Vòng 1",
      name: "Khởi động & Nộp đề án",
      status: "completed",
      description: "Khảo sát hiện trạng khoa phòng, đo lường số liệu ban đầu và nộp phiếu đăng ký."
    },
    {
      round: "Vòng 2",
      name: "Thực thi thử nghiệm & Đánh giá",
      status: "active",
      description: "Áp dụng thử nghiệm giải pháp tại hiện trường; Ban Giám khảo thẩm định thực địa."
    },
    {
      round: "Vòng 3",
      name: "Chung kết & Trao giải",
      status: "upcoming",
      description: "Báo cáo thuyết trình A3 trước Hội đồng; công bố xếp hạng và chuẩn hóa quy trình SOP."
    }
  ],

  kaizenPhilosophy: {
    definition: "Kaizen (改善) là triết lý cải tiến liên tục bắt nguồn từ Nhật Bản: 'Kai' (Thay đổi) và 'Zen' (Tốt hơn). Trong y tế, Kaizen là phương pháp quản trị tinh gọn dựa trên sự tham gia của 100% nhân viên y tế — từ bác sĩ, điều dưỡng đến kỹ thuật viên, dược sĩ — nhằm tạo ra những thay đổi nhỏ, thực chất và liên tục mỗi ngày tại chính vị trí làm việc.",
    reasons: [
      {
        title: "Triệt tiêu sai sót & Bảo vệ an toàn người bệnh",
        desc: "Chủ động nhận diện các bẫy lỗi lâm sàng, nhầm lẫn thuốc và nguy cơ sự cố y khoa để thiết lập rào chắn phòng ngừa vững chắc."
      },
      {
        title: "Cắt giảm lãng phí thời gian & Tinh gọn luồng khám",
        desc: "Giảm thiểu thời gian chờ khám, chờ kết quả cận lâm sàng và chờ thanh toán viện phí, tối ưu hóa trải nghiệm của người bệnh."
      },
      {
        title: "Xây dựng môi trường 5S & Giảm tải cho nhân viên y tế",
        desc: "Nơi làm việc ngăn nắp, quy trình chuẩn hóa giúp nhân viên thao tác nhanh chóng, giảm căng thẳng và gắn kết nội bộ."
      }
    ]
  },

  categories: [
    { id: "cat1", code: "TIME", name: "Rút ngắn Thời gian Chờ & Tối ưu Luồng khám", shortDesc: "Cắt giảm thời gian chờ khám, xét nghiệm, chẩn đoán hình ảnh và thủ tục thanh toán viện phí." },
    { id: "cat2", code: "SAFETY", name: "An toàn Người bệnh & Phòng ngừa Rủi ro", shortDesc: "Phòng ngừa nhầm lẫn thuốc nguy cơ cao, an toàn phẫu thuật, giảm sự cố ngã và nhiễm khuẩn viện." },
    { id: "cat3", code: "5S", name: "Thực hành 5S & Chuẩn hóa Môi trường Làm việc", shortDesc: "Sắp xếp buồng bệnh, phòng thủ thuật, kho dược, quản lý trực quan theo mã màu." },
    { id: "cat4", code: "EXP", name: "Nâng cao Trải nghiệm & Sự Hài lòng Người bệnh", shortDesc: "Cải tiến giao tiếp y đức, mô hình chăm sóc buồng bệnh, hỗ trợ người bệnh toàn diện." },
    { id: "cat5", code: "DIGITAL", name: "Chuyển đổi số & Ứng dụng Bệnh viện Thông minh", shortDesc: "Bệnh án điện tử EMR không giấy tờ, ki-ốt thông minh, tự động hóa gửi kết quả cận lâm sàng." },
    { id: "cat6", code: "LEAN", name: "Quản trị Tinh gọn & Tiết kiệm Lãng phí", shortDesc: "Tối ưu hóa vòng đời thiết bị y tế, giảm lãng phí vật tư tiêu hao và tinh gọn thủ tục hành chính." }
  ],

  branches: [
    { id: "Nhánh A", name: "Nhánh A: Cải tiến Nội bộ Khoa/Phòng", desc: "Giải quyết các vướng mắc, bất cập trong phạm vi vận hành của một đơn vị cụ thể." },
    { id: "Nhánh B", name: "Nhánh B: Cải tiến Liên khoa / Điểm chạm Phối hợp", desc: "Đề án liên danh giải quyết nút thắt tại các điểm tiếp giáp quy trình giữa 2 hoặc nhiều đơn vị." }
  ]
};

export const INITIAL_KAIZEN_PROJECTS = [
  {
    maDeTai: "KZ16-TIMMACH-01",
    tenDeTai: "Cải tiến quy trình chuẩn bị thuốc và vật tư can thiệp cấp cứu STEMI bằng mô hình “STEMI Emergency Box” tại Phòng Can thiệp Tim mạch",
    nhanh: "Nhánh A",
    khoaPhong: "Khoa Tim Mạch",
    khoaPhoiHop: "Tổ Dược Lâm Sàng",
    nhomTacGia: "ĐD. Nguyễn Duy Hùng (Chủ nhiệm), ĐD. Nguyễn Việt Hưng, ĐD. Nguyễn Mạnh Hùng, ĐD. Lê Minh Thắng, ĐD. Nguyễn Phạm Quốc Anh",
    chuDe: "SAFETY",
    chuDeTen: "An toàn Người bệnh & Phòng ngừa Rủi ro",
    khoiChuyenMon: "Khối Nội - Tim mạch Can thiệp",
    tomTat: "Xây dựng mô hình hộp cấp cứu đóng gói sẵn tích hợp đầy đủ thuốc và dụng cụ can thiệp mạch vành, rút ngắn 85% thời gian chuẩn bị ngoài giờ hành chính từ 20 phút xuống dưới 3 phút, tối ưu hóa thời gian Door-to-Balloon cứu sống người bệnh.",
    
    a3Report: {
      background: "Nhồi máu cơ tim cấp có ST chênh lên (STEMI) là tình trạng cấp cứu khẩn cấp đòi hỏi tái thông mạch vành trong thời gian vàng. Tuy nhiên, ngoài giờ hành chính, điều dưỡng phải di chuyển qua 03 tủ thuốc và kho vật tư khác nhau để tìm kiếm thuốc chống đông, thuốc tiêu sợi huyết và ống thông can thiệp, gây lãng phí 15-20 phút quý giá của người bệnh.",
      baselineData: "Thời gian chuẩn bị đầy đủ thuốc và dụng cụ can thiệp ngoài giờ: 18 - 22 phút; Tỷ lệ thiếu hoặc nhầm lẫn vật tư phụ trong ca can thiệp ban đêm: khoảng 12%; Thời gian Door-to-Balloon còn bị kéo dài (trung bình 65 phút).",
      rootCause: "Phân tích 5 Whys: (1) Thuốc và vật tư can thiệp STEMI bị phân tán ở 03 tủ -> (2) Sắp xếp truyền thống theo danh mục kế toán kho chứ không theo bệnh học cấp cứu -> (3) Chưa có quy định đóng gói đồng bộ gói cấp cứu STEMI -> (4) Thiếu checklist một chạm tại phòng can thiệp -> (5) Cốt lõi: Quy trình quản lý và cấp phát vật tư can thiệp chưa được thiết kế theo luồng tinh gọn Lean cho tình huống tối khẩn cấp.",
      smartGoal: "Rút ngắn thời gian chuẩn bị đầy đủ thuốc và vật tư can thiệp từ 18-22 phút xuống dưới 3 phút; giảm triệt để tỷ lệ thiếu/nhầm lẫn vật tư về 0%; rút ngắn thời gian Door-to-Balloon toàn viện từ 65 phút xuống dưới 50 phút; mức độ hài lòng kíp can thiệp đạt trên 95%.",
      countermeasures: "1. Xây dựng mô hình “STEMI Emergency Box” chuyên dụng, tích hợp đầy đủ 100% thuốc chống đông, dây dẫn, ống thông theo phác đồ chuẩn Bộ Y tế.\n2. Áp dụng cơ chế niêm phong một lần (Security Seal); kiểm tra định kỳ mỗi ca trực theo bảng kiểm Checklist 1 trang trực quan.\n3. Bố trí Hộp cấp cứu ngay tại cửa phòng can thiệp mạch DSA, thao tác mở và đưa vào sử dụng chỉ trong 30 giây.\n4. Phối hợp với Khoa Dược hoàn nguyên cơ số thuốc và vật tư đã sử dụng trong vòng 02 giờ sau ca can thiệp để sẵn sàng cho ca tiếp theo.",
      resultsBeforeAfter: [
        { metric: "Thời gian chuẩn bị thuốc & vật tư can thiệp", before: "18 - 22 phút", after: "Dưới 3 phút (Rút ngắn 85%)" },
        { metric: "Tỷ lệ thiếu/nhầm lẫn vật tư can thiệp", before: "12%", after: "0% (Triệt tiêu sai sót)" },
        { metric: "Thời gian Door-to-Balloon toàn viện", before: "65 phút", after: "Dưới 50 phút (Tiết kiệm 15 phút vàng)" },
        { metric: "Mức độ hài lòng của kíp bác sĩ can thiệp", before: "Chưa đo lường", after: "98% Hài lòng cao" }
      ],
      standardization: "Ban hành SOP-TM-012: Quy trình chuẩn bị và hoàn nguyên Hộp cấp cứu STEMI Box tại Phòng Can thiệp Tim mạch. Nhân rộng mô hình hộp cấp cứu khẩn cấp cho Khoa Cấp cứu, ICU và Phòng Mổ.",
      lessonsLearned: "Sắp xếp quy trình theo luồng giá trị bệnh học (Lean) thay vì danh mục kế toán giúp bảo vệ tối đa tế bào cơ tim của người bệnh và giải tỏa áp lực tâm lý cho kíp trực cấp cứu ban đêm."
    },
    views: 526,
    likes: 89,
    status: "evaluated"
  },
  {
    maDeTai: "KZ16-CC115-01",
    tenDeTai: "Sáng chế giá treo bình oxy đứng đa năng trên xe cáng cấp cứu nhằm nâng cao an toàn vận chuyển và kiểm soát lưu lượng khí thở tại Trung tâm Cấp cứu 115",
    nhanh: "Nhánh A",
    khoaPhong: "Trung Tâm Cấp Cứu 115",
    khoaPhoiHop: "Tổ Quản Trị Tài Sản & Thiết Bị",
    nhomTacGia: "ĐD. Đỗ Sơn Bắc (Chủ nhiệm), BS. Nguyễn Văn Hùng, ĐD. Hoàng Văn Tuấn",
    chuDe: "SAFETY",
    chuDeTen: "An toàn Người bệnh & Sáng chế Kỹ thuật Y tế",
    khoiChuyenMon: "Khối Hồi sức Cấp cứu",
    tomTat: "Sáng chế và gia công giá treo cơ khí Inox 304 có khớp ngàm gắn trực tiếp vào xe cáng cứu thương, cố định bình oxy đứng vững chắc với khóa lẫy một chạm, rút ngắn thời gian thao tác từ 3 phút xuống dưới 15 giây và triệt tiêu 100% nguy cơ rơi đổ.",
    
    a3Report: {
      background: "Khi vận chuyển người bệnh nguy kịch cần thở oxy liên tục từ hiện trường về viện hoặc chuyển khoa hồi sức, bình oxy cao áp thường phải đặt nằm ngang dưới chân người bệnh hoặc buộc dây tạm bợ vào thanh giằng cáng. Khi xe cấp cứu di chuyển xóc nảy, bình oxy rất dễ bị trượt đổ, va đập gây rò rỉ van khí nén, đồng thời đồng hồ đo lưu lượng bị khuất tầm nhìn, khiến điều dưỡng khó kiểm soát chính xác lưu lượng khí thở.",
      baselineData: "100% các chuyến vận chuyển cấp cứu ngoại viện phải đặt bình oxy nằm ngang trên đệm cáng; Thời gian thao tác tháo lắp, chằng buộc bình oxy mất từ 2 đến 3 phút mỗi lượt; Nguy cơ rơi đổ, rò rỉ khí oxy cao áp tiềm ẩn nguy hiểm cháy nổ trên xe; Khó quan sát đồng hồ áp suất khi đang ép tim, bóp bóng.",
      rootCause: "Phân tích 5 Whys: (1) Bình oxy dễ bị trượt đổ do đặt nằm tự do trên cáng không có giá đỡ -> (2) Khung cáng tiêu chuẩn không có cơ cấu kẹp giữ chuyên dụng -> (3) Kíp cấp cứu phải tập trung hai tay hồi sức ép tim, bóp bóng -> (4) Giá treo bán sẵn cồng kềnh, không tương thích kích thước xe cứu thương -> (5) Cốt lõi: Thiếu module cơ khí chuyên dụng tích hợp đồng bộ trực tiếp vào kết cấu khung cáng để giữ bình oxy ở tư thế đứng an toàn.",
      smartGoal: "Đạt 100% các chuyến cấp cứu bình oxy được cố định ở tư thế đứng an toàn; rút ngắn thời gian thao tác lắp/tháo bình oxy trên cáng từ 2-3 phút xuống dưới 15 giây; 0 vụ rơi đổ hoặc rò rỉ van khí oxy cao áp/năm; chi phí chế tạo dưới 1.500.000 VNĐ/bộ.",
      countermeasures: "1. Thiết kế và gia công bộ giá treo bình oxy bằng thép không gỉ (Inox 304) chịu lực, có khớp ngàm gắn trực tiếp vào thanh ray chịu lực của xe cáng cứu thương.\n2. Tích hợp vòng đai bán nguyệt có đệm cao su giảm chấn và khóa lẫy siết nhanh một chạm, giúp cố định bình oxy đứng vững chắc chỉ trong 10-15 giây thao tác.\n3. Định vị vị trí giá treo tại đầu cáng giúp đồng hồ áp suất và lưu lượng kế luôn hướng về tầm mắt của điều dưỡng trong suốt hành trình vận chuyển.\n4. Thực hiện thử nghiệm rung lắc trên địa hình gồ ghề và thử tải trọng gấp đôi trước khi đưa vào vận hành chính thức trên toàn đội xe 115.",
      resultsBeforeAfter: [
        { metric: "Tỷ lệ bình oxy cố định đứng an toàn", before: "0% (Đều đặt nằm)", after: "100% Các chuyến cấp cứu" },
        { metric: "Thời gian thao tác lắp/tháo trên cáng", before: "2 - 3 phút (Chằng buộc)", after: "Dưới 15 giây (Khóa 1 chạm)" },
        { metric: "Sự cố rơi đổ hoặc rò rỉ khí oxy cao áp", before: "Tiềm ẩn nguy cơ cao", after: "0 vụ (An toàn tuyệt đối)" },
        { metric: "Chi phí chế tạo mẫu thử nghiệm", before: "Không có", after: "1.200.000 VNĐ / bộ" }
      ],
      standardization: "Ban hành Quy trình thao tác nhanh lắp đặt và kiểm tra an toàn bình oxy trên xe cáng cấp cứu 115. Đề xuất nhân rộng cho toàn bộ đội xe cứu thương và xe cáng nội viện toàn hệ thống Hùng Vương.",
      lessonsLearned: "Sáng kiến kỹ thuật bắt nguồn từ thực tiễn hiện trường của nhân viên y tế mang lại hiệu quả tức thì, chi phí thấp và bảo đảm an toàn sinh mạng cao nhất cho cả người bệnh và nhân viên y tế."
    },
    views: 485,
    likes: 76,
    status: "evaluated"
  }
];

export const SAMPLE_RANKING_DATA = INITIAL_KAIZEN_PROJECTS.map((p, idx) => {
  const scores = [94.0, 88.0];
  const score = scores[idx] || 85.0;
  const p1 = Math.round((score * 0.2) * 10) / 10;
  const p2 = Math.round((score * 0.3) * 10) / 10;
  const p3 = Math.round((score * 0.2) * 10) / 10;
  const p4 = Math.round((score * 0.2) * 10) / 10;
  const p5 = Math.round((score - p1 - p2 - p3 - p4) * 10) / 10;
  const xepLoai = score >= 90 ? "Xuất sắc" : (score >= 80 ? "Giỏi" : (score >= 70 ? "Khá" : "Đạt"));
  return {
    ...p,
    tongDiem: score,
    phan1: p1,
    phan2: p2,
    phan3: p3,
    phan4: p4,
    phan5: p5,
    xepLoai,
    count: 5,
    hasScore: true
  };
});

