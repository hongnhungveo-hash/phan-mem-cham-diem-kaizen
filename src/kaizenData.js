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
    chuNhiem: "ĐD. Nguyễn Duy Hùng",
    nhomTacGia: "ĐD. Nguyễn Duy Hùng, ĐD. Nguyễn Việt Hưng, ĐD. Nguyễn Mạnh Hùng, ĐD. Lê Minh Thắng, ĐD. Nguyễn Phạm Quốc Anh",
    chuDe: "SAFETY",
    chuDeTen: "An toàn Người bệnh & Phòng ngừa Rủi ro",
    khoiChuyenMon: "Khối Nội - Tim mạch Can thiệp",
    tomTat: "Xây dựng mô hình hộp cấp cứu đóng gói sẵn tích hợp đầy đủ thuốc và dụng cụ can thiệp mạch vành, rút ngắn 85% thời gian chuẩn bị ngoài giờ hành chính từ 20 phút xuống dưới 3 phút, tối ưu hóa thời gian Door-to-Balloon cứu sống người bệnh.",
    
    // THÔNG TIN NGẮN GỌN & DỄ HIỂU CHO NGƯỜI XEM ĐẠI CHÚNG
    tenSanPham: "Mô hình “STEMI Emergency Box” — Hộp Cấp Cứu Mạch Vành Khẩn Cấp",
    ngayDangKy: "05/09/2026",
    trangThaiDangKy: "Thử nghiệm thực địa",
    
    // TÓM TẮT SÚC TÍCH TRONG 30 GIÂY
    quickSummary: {
      idea: "Đóng gói đồng bộ toàn bộ thuốc chống đông và vật tư can thiệp vào hộp chuyên dụng có niêm phong bảo đảm, đặt sẵn tại phòng DSA.",
      painPoints: [
        "Thuốc và vật tư phân tán tại 3 tủ khác nhau theo danh mục kế toán kho.",
        "Mất 15 - 20 phút để gom đủ cơ số thuốc và dụng cụ trong ca trực cấp cứu đêm.",
        "Nguy cơ thiếu hoặc nhầm lẫn vật tư can thiệp ngoài giờ hành chính (khoảng 12%)."
      ],
      solutions: [
        "Đóng gói hộp STEMI Box chuyên dụng theo cơ số chuẩn, mở dùng ngay trong 30 giây.",
        "Niêm phong bảo đảm 1 lần (Security Seal) kèm bảng kiểm trực quan 1 trang.",
        "Khoa Dược cấp bù hoàn nguyên hộp thuốc trong vòng 02 giờ sau ca can thiệp."
      ],
      keyMetrics: [
        { label: "Thời gian chuẩn bị", before: "20 phút", after: "< 3 phút", note: "Nhanh hơn 85%" },
        { label: "Sai sót, nhầm thuốc", before: "12%", after: "0%", note: "An toàn tuyệt đối" },
        { label: "Door-to-Balloon", before: "65 phút", after: "< 50 phút", note: "Tiết kiệm 15 phút vàng" },
        { label: "Chi phí triển khai", before: "—", after: "0 đ", note: "Tận dụng tủ hộp sẵn có" }
      ]
    },
    
    // ĐIỂM SÁNG NỔI BẬT
    keyHighlights: [
      { label: "Rút ngắn 85% thời gian", desc: "Giảm thời gian chuẩn bị từ 20 phút xuống dưới 3 phút ngoài giờ", icon: "time" },
      { label: "0% Sai sót vật tư", desc: "Triệt tiêu nguy cơ thiếu/nhầm thuốc chống đông ngoài giờ", icon: "shield" },
      { label: "Tiết kiệm 15 phút vàng", desc: "Tối ưu hóa thời gian Door-to-Balloon toàn viện dưới 50 phút", icon: "check" },
      { label: "Chi phí tối thiểu", desc: "Tận dụng tủ hộp sẵn có, hoàn nguyên thuốc trong 2 giờ sau ca", icon: "wallet" }
    ],

    // CHI TIẾT NHÓM TÁC GIẢ
    authorsDetailed: [
      { name: "ĐD. Nguyễn Duy Hùng", role: "Trưởng nhóm (Chủ nhiệm đề án)", title: "Điều dưỡng viên Phòng Can thiệp Tim mạch" },
      { name: "ĐD. Nguyễn Việt Hưng", role: "Thư ký đề án (Theo dõi số liệu)", title: "Điều dưỡng viên Phòng Can thiệp" },
      { name: "ĐD. Nguyễn Mạnh Hùng", role: "Thành viên thực nghiệm", title: "Điều dưỡng viên Phòng Can thiệp" },
      { name: "ĐD. Lê Minh Thắng", role: "Thành viên thực nghiệm", title: "Điều dưỡng viên Phòng Can thiệp" },
      { name: "ĐD. Nguyễn Phạm Quốc Anh", role: "Thành viên thực nghiệm", title: "Điều dưỡng viên Phòng Can thiệp" }
    ],

    // TRỤC THỜI GIAN THEO DÕI TIẾN ĐỘ DỰ ÁN
    timeline: [
      { phase: "Vòng 1: Đăng ký & Thẩm định sơ bộ", date: "05/09/2026", status: "completed", note: "Đã phê duyệt đề cương A3, Điểm thẩm định sơ bộ: 94/100 (Tổ QLCL)" },
      { phase: "Vòng 2: Triển khai thử nghiệm tại hiện trường", date: "06/09 - 22/09/2026", status: "in_progress", note: "Vận hành 02 Hộp cấp cứu STEMI Box tại phòng DSA và đo thời gian thực tế" },
      { phase: "Vòng 3: Báo cáo A3 & Thuyết trình Chung kết", date: "28/09/2026", status: "upcoming", note: "Ban Giám khảo chấm điểm chính thức và công bố thứ hạng hội thi" },
      { phase: "Vòng 4: Chuẩn hóa SOP & Nhân rộng toàn viện", date: "Tháng 10/2026", status: "upcoming", note: "Ban hành SOP-TM-012 và nhân rộng mô hình cho Cấp cứu, ICU và Gây mê" }
    ],

    // 5 TẦNG TẠI SAO (5 WHYS)
    fiveWhys: [
      { level: "Why 1", question: "Tại sao thời gian chuẩn bị thuốc và vật tư can thiệp STEMI bị kéo dài ngoài giờ?", answer: "Do thuốc chống đông và vật tư chuyên dụng được bố trí phân tán ở 03 tủ thuốc khác nhau." },
      { level: "Why 2", question: "Tại sao thuốc và vật tư lại bố trí phân tán?", answer: "Do cách sắp xếp truyền thống theo danh mục kế toán kho dược chứ không theo phác đồ cấp cứu bệnh học." },
      { level: "Why 3", question: "Tại sao không gom sẵn thành bộ cấp cứu chuyên biệt?", answer: "Do chưa có quy định đóng gói đồng bộ và kiểm tra niêm phong định kỳ cho gói cấp cứu STEMI." },
      { level: "Why 4", question: "Tại sao kíp trực đêm dễ bị lúng túng khi lấy vật tư?", answer: "Do áp lực thời gian vàng và thiếu bảng kiểm trực quan checklist một chạm tại phòng can thiệp." },
      { level: "Why 5 (Cốt lõi)", question: "NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG", answer: "Quy trình quản lý và cấp phát vật tư can thiệp chưa được thiết kế theo luồng tinh gọn Lean chuyên biệt cho tình huống tối khẩn cấp." }
    ],

    // HỒ SƠ TÀI LIỆU MINH CHỨNG
    documents: [
      { name: "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)", type: "Word (.docx)", file: "KZ16-TIMMACH-01 02. Bản Đăng ký Sau Hiệu chỉnh Tim Mạch ĐD. Nguyễn Duy Hùng.docx", desc: "Hồ sơ đăng ký chi tiết đã hoàn thiện theo góp ý của Tổ QLCL" },
      { name: "Thông báo Thẩm định Sơ bộ Số 16/TB-QLCL-KAIZEN", type: "Văn bản (.docx)", file: "KZ16-TIMMACH-01 03. Biên bản Thẩm định Tim Mạch ĐD. Nguyễn Duy Hùng.docx", desc: "Quyết định phê duyệt đề cương thực nghiệm của Tổ trưởng Tổ QLCL Trần Đình Vũ" },
      { name: "Đề cương A3 Triển khai Thực nghiệm", type: "Báo cáo A3 (.docx)", file: "KZ16-TIMMACH-01 04. Đề cương A3 Triển khai Thực nghiệm Tim Mạch ĐD. Nguyễn Duy Hùng.docx", desc: "Đề cương chi tiết triển khai tại hiện trường và kế hoạch nghiệm thu" },
      { name: "Quy trình Thao tác Chuẩn SOP-TM-012", type: "SOP Quản lý", file: "SOP-TM-012 Quy trình chuẩn bị Hộp cấp cứu STEMI Box.docx", desc: "Quy trình niêm phong một lần và hoàn nguyên thuốc trong 02 giờ" }
    ],

    // Ý KIẾN THẢO LUẬN & HỌC HỎI CHUYÊN MÔN
    communityDiscussions: [
      { id: 1, author: "Trần Đình Vũ", role: "Tổ trưởng Tổ QLCL (Phòng KHTH)", time: "05/09/2026", content: "Đề án có ý nghĩa sống còn với người bệnh nhồi máu cơ tim cấp. Tổ QLCL đánh giá 94/100 điểm thẩm định ban đầu và cử cán bộ đồng hành đo lường số liệu thực địa cùng kíp DSA." },
      { id: 2, author: "BS. Trần Văn Hùng", role: "Bác sĩ - Khoa Cấp cứu", time: "06/09/2026", content: "Mô hình STEMI Box này cực kỳ thiết thực. Khi kíp 115 chuyển bệnh nhân vào phòng DSA, thời gian chuẩn bị thuốc dưới 3 phút sẽ giúp bác sĩ can thiệp mạch vành kịp thời tối đa." },
      { id: 3, author: "ThS. Ma Văn Hoàng", role: "Trưởng phòng Kế hoạch Tổng hợp", time: "08/09/2026", content: "Đề nghị Khoa Tim mạch theo dõi chặt chẽ khâu hoàn nguyên cơ số thuốc với Khoa Dược để đảm bảo hộp cấp cứu luôn sẵn sàng 24/7." }
    ],
    
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
    chuNhiem: "ĐD. Đỗ Sơn Bắc",
    nhomTacGia: "ĐD. Đỗ Sơn Bắc, BS. Nguyễn Văn Hùng, ĐD. Hoàng Văn Tuấn",
    chuDe: "SAFETY",
    chuDeTen: "An toàn Người bệnh & Sáng chế Kỹ thuật Y tế",
    khoiChuyenMon: "Khối Hồi sức Cấp cứu",
    tomTat: "Sáng chế và gia công giá treo cơ khí Inox 304 có khớp ngàm gắn trực tiếp vào xe cáng cứu thương, cố định bình oxy đứng vững chắc với khóa lẫy một chạm, rút ngắn thời gian thao tác từ 3 phút xuống dưới 15 giây và triệt tiêu 100% nguy cơ rơi đổ.",
    
    // THÔNG TIN NGẮN GỌN & DỄ HIỂU CHO NGƯỜI XEM ĐẠI CHÚNG
    tenSanPham: "Sáng chế Bộ Giá Treo Bình Oxy Đứng Đa Năng Inox 304 Khóa 1 Chạm",
    ngayDangKy: "05/09/2026",
    trangThaiDangKy: "Thử nghiệm thực địa",
    
    // TÓM TẮT SÚC TÍCH TRONG 30 GIÂY
    quickSummary: {
      idea: "Gia công giá treo Inox 304 kẹp thẳng vào khung xe cáng, có khóa lẫy một chạm giữ bình oxy đứng vững suốt hành trình vận chuyển.",
      painPoints: [
        "Bình oxy đặt nằm ngang dưới chân bệnh nhân, dễ lăn trượt và va đập khi xe xóc nảy.",
        "Mất 2 - 3 phút chằng buộc dây tạm bợ; đồng hồ áp lực bị khuất tầm nhìn.",
        "Chiếm diện tích sàn cáng, gây vướng khi kíp trực cấp cứu ép tim hồi sức."
      ],
      solutions: [
        "Giá Inox 304 ngàm kẹp trực tiếp vào khung cáng, giải phóng lối đi và sàn xe.",
        "Khóa lẫy một chạm siết nhanh, tháo lắp bình oxy chỉ mất 10 - 15 giây.",
        "Định vị bình tại đầu cáng, đồng hồ đo áp lực luôn hướng thẳng tầm mắt điều dưỡng."
      ],
      keyMetrics: [
        { label: "Độ an toàn rơi đổ", before: "Nguy cơ cao", after: "100% Cố định", note: "Triệt tiêu va đập van" },
        { label: "Thời gian tháo lắp", before: "2 - 3 phút", after: "< 15 giây", note: "Khóa nhanh 1 chạm" },
        { label: "Quan sát đồng hồ", before: "Bị che khuất", after: "Trực diện mắt", note: "Kiểm soát liên tục" },
        { label: "Chi phí chế tạo", before: "—", after: "1.200.000 đ", note: "Inox 304 chịu lực" }
      ]
    },
    
    // ĐIỂM SÁNG NỔI BẬT
    keyHighlights: [
      { label: "100% Cố định an toàn", desc: "Triệt tiêu nguy cơ rơi đổ hoặc rò rỉ van khí nén cao áp khi xe xóc nảy", icon: "shield" },
      { label: "Thao tác dưới 15 giây", desc: "Rút ngắn thời gian cố định bình oxy từ 3 phút xuống chỉ còn 10-15 giây", icon: "time" },
      { label: "Tối ưu hóa quan sát", desc: "Đồng hồ đo áp suất và lưu lượng kế luôn hướng về tầm mắt kíp trực", icon: "eye" },
      { label: "Chi phí chỉ 1,2 triệu", desc: "Gia công Inox 304 chịu lực cao, tiết kiệm ngân sách bệnh viện", icon: "wallet" }
    ],

    // CHI TIẾT NHÓM TÁC GIẢ
    authorsDetailed: [
      { name: "ĐD. Đỗ Sơn Bắc", role: "Tác giả sáng chế (Chủ nhiệm đề án)", title: "Điều dưỡng viên Trung tâm Cấp cứu 115" },
      { name: "BS. Nguyễn Văn Hùng", role: "Cố vấn chuyên môn cấp cứu", title: "Bác sĩ Trung tâm Cấp cứu 115" },
      { name: "ĐD. Hoàng Văn Tuấn", role: "Thành viên thực nghiệm hiện trường", title: "Điều dưỡng viên Trung tâm Cấp cứu 115" }
    ],

    // TRỤC THỜI GIAN THEO DÕI TIẾN ĐỘ DỰ ÁN
    timeline: [
      { phase: "Vòng 1: Đăng ký & Thẩm định sơ bộ", date: "05/09/2026", status: "completed", note: "Đã phê duyệt đề cương A3, Điểm thẩm định sơ bộ: 88/100 (Tổ QLCL)" },
      { phase: "Vòng 2: Triển khai thử nghiệm tại hiện trường", date: "06/09 - 22/09/2026", status: "in_progress", note: "Lắp đặt và chạy thử nghiệm rung lắc trên 02 xe cứu thương 115" },
      { phase: "Vòng 3: Báo cáo A3 & Thuyết trình Chung kết", date: "28/09/2026", status: "upcoming", note: "Ban Giám khảo chấm điểm chính thức và công bố thứ hạng hội thi" },
      { phase: "Vòng 4: Chuẩn hóa SOP & Nhân rộng toàn viện", date: "Tháng 10/2026", status: "upcoming", note: "Nhân rộng lắp đặt cho toàn bộ đội xe cứu thương và cáng nội viện" }
    ],

    // 5 TẦNG TẠI SAO (5 WHYS)
    fiveWhys: [
      { level: "Why 1", question: "Tại sao bình oxy dễ bị trượt đổ khi vận chuyển người bệnh cấp cứu?", answer: "Do bình oxy đặt nằm tự do trên cáng hoặc cạnh người bệnh mà không có giá đỡ chuyên dụng." },
      { level: "Why 2", question: "Tại sao không gắn cố định bình oxy vào thân cáng cứu thương?", answer: "Do khung cáng cứu thương tiêu chuẩn không có cơ cấu kẹp giữ chuyên dụng cho bình oxy y tế." },
      { level: "Why 3", question: "Tại sao nhân viên y tế không giữ bình oxy trong suốt quá trình đi xe?", answer: "Do kíp cấp cứu phải tập trung hai tay ép tim, bóp bóng Ambu và theo dõi đường thở cho người bệnh." },
      { level: "Why 4", question: "Tại sao không sử dụng các giá treo bán sẵn trên thị trường?", answer: "Do các loại giá treo thương mại cồng kềnh, không tương thích với kích thước xe cứu thương và cáng nội viện." },
      { level: "Why 5 (Cốt lõi)", question: "NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG", answer: "Thiếu module cơ khí chuyên dụng tích hợp đồng bộ trực tiếp vào kết cấu khung cáng để giữ bình oxy ở tư thế đứng an toàn." }
    ],

    // HỒ SƠ TÀI LIỆU MINH CHỨNG
    documents: [
      { name: "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)", type: "Word (.docx)", file: "KZ16-CC115-01 02. Bản Đăng ký Sau Hiệu chỉnh Cấp Cứu 115 ĐD. Đỗ Sơn Bắc.docx", desc: "Hồ sơ đăng ký sáng chế và cải tiến sau thẩm định" },
      { name: "Thông báo Thẩm định Sơ bộ Số 15/TB-QLCL-KAIZEN", type: "Văn bản (.docx)", file: "KZ16-CC115-01 03. Biên bản Thẩm định Cấp Cứu 115 ĐD. Đỗ Sơn Bắc.docx", desc: "Quyết định phê duyệt đề cương thực nghiệm của Tổ trưởng Tổ QLCL Trần Đình Vũ" },
      { name: "Đề cương A3 Triển khai Thực nghiệm", type: "Báo cáo A3 (.docx)", file: "KZ16-CC115-01 04. Đề cương A3 Triển khai Thực nghiệm Cấp Cứu 115 ĐD. Đỗ Sơn Bắc.docx", desc: "Đề cương thử nghiệm cơ khí và độ an toàn chịu lực" },
      { name: "Bản vẽ Cơ khí Giá treo Bình Oxy Inox 304", type: "Bản vẽ kỹ thuật (.pdf)", file: "Ban ve co khi gia treo binh oxy Inox 304.pdf", desc: "Bản vẽ kỹ thuật chi tiết ngàm kẹp cáng cứu thương và khóa lẫy một chạm" }
    ],

    // Ý KIẾN THẢO LUẬN & HỌC HỎI CHUYÊN MÔN
    communityDiscussions: [
      { id: 1, author: "Trần Đình Vũ", role: "Tổ trưởng Tổ QLCL (Phòng KHTH)", time: "05/09/2026", content: "Sáng chế giải quyết dứt điểm rủi ro va đập bình oxy nén cao áp. Điểm thẩm định ban đầu: 88/100 điểm. Đề nghị kíp cấp cứu chạy thử nghiệm tải trọng rung lắc trên các cung đường đèo dốc." },
      { id: 2, author: "ĐD. Nguyễn Thị Thảo", role: "Điều dưỡng Trưởng - Khoa Cấp cứu", time: "06/09/2026", content: "Cực kỳ ủng hộ sáng chế của anh Bắc! Khi đón bệnh nhân từ xe 115 vào buồng cấp cứu, bình oxy đứng thẳng giúp thao tác chuyển người bệnh sang giường trơn tru và an toàn hơn rất nhiều." },
      { id: 3, author: "KTV. Phạm Quốc Hưng", role: "Tổ Quản trị Tài sản & Thiết bị", time: "07/09/2026", content: "Kết cấu Inox 304 rất bền chắc, chống oxy hóa và dễ lau khử khuẩn 5S. Tổ Thiết bị sẵn sàng phối hợp sản xuất hàng loạt cho toàn bộ hệ thống xe vận chuyển." }
    ],
    
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

/**
 * Trả về tên chủ nhiệm đề án gọn gàng, không lặp lại chức danh hay chữ (Chủ nhiệm)
 */
export const getCleanLeaderName = (p) => {
  if (!p) return '';
  if (p.chuNhiem) return p.chuNhiem;
  if (p.authorsDetailed && p.authorsDetailed[0]?.name) {
    return p.authorsDetailed[0].name;
  }
  if (p.nhomTacGia) {
    return p.nhomTacGia.split(',')[0].replace(/\(.*?\)/g, '').trim();
  }
  return '';
};



