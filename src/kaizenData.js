// DỮ LIỆU CỔNG THÔNG TIN HỘI THI KAIZEN - BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG
// TOÀN BỘ 19 ĐỀ ÁN THỰC TẾ TIẾP NHẬN ĐẦY ĐỦ TỪ THƯ MỤC 05_TIEP_NHAN_DE_AN

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
    "maDeTai": "KZ16-NGOAI-01",
    "tenDeTai": "Ứng dụng xe tiêm thông minh gắn máy tính xách tay tra cứu y lệnh thời gian thực nhằm triệt tiêu sai sót thuốc tại Khoa Ngoại Tổng hợp",
    "tenSanPham": "Xe Tiêm Thông Minh Không Dây Tra Cứu EMR/HIS Thời Gian Thực",
    "khoaPhong": "KHOA NGOẠI TỔNG HỢP",
    "khoaPhoiHop": "Phòng Công nghệ Thông tin",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 2: An toàn người bệnh và phòng ngừa sai sót lâm sàng (Kết hợp Nhóm 5: Chuyển đổi số bệnh viện thông minh).",
    "tacGia": "ĐD. Trần Mạnh Giang",
    "authorsDetailed": [
      {
        "name": "ĐD. Trần Mạnh Giang",
        "title": "Điều dưỡng trưởng Khoa Ngoại TH",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)",
        "stt": "1",
        "hoTen": "ĐD. Trần Mạnh Giang",
        "chucVu": "Điều dưỡng trưởng Khoa Ngoại TH",
        "vaiTro": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "ĐD. Võ Nguyễn Thúy Hà",
        "title": "Điều dưỡng viên Khoa Ngoại TH",
        "role": "Thư ký đề án (Theo dõi số liệu)",
        "stt": "2",
        "hoTen": "ĐD. Võ Nguyễn Thúy Hà",
        "chucVu": "Điều dưỡng viên Khoa Ngoại TH",
        "vaiTro": "Thư ký đề án (Theo dõi số liệu)"
      },
      {
        "name": "ĐD. Phạm Thị Thanh Cần",
        "title": "Điều dưỡng viên Khoa Ngoại TH",
        "role": "Thành viên thực hiện thử nghiệm",
        "stt": "3",
        "hoTen": "ĐD. Phạm Thị Thanh Cần",
        "chucVu": "Điều dưỡng viên Khoa Ngoại TH",
        "vaiTro": "Thành viên thực hiện thử nghiệm"
      },
      {
        "name": "ĐD. Lê Thị Hồng Nhung",
        "title": "Điều dưỡng viên Khoa Ngoại TH",
        "role": "Thành viên thực hiện thử nghiệm",
        "stt": "4",
        "hoTen": "ĐD. Lê Thị Hồng Nhung",
        "chucVu": "Điều dưỡng viên Khoa Ngoại TH",
        "vaiTro": "Thành viên thực hiện thử nghiệm"
      },
      {
        "name": "ĐD. Nguyễn Thị Hương Thảo",
        "title": "Điều dưỡng viên Khoa Ngoại TH",
        "role": "Thành viên thực hiện thử nghiệm",
        "stt": "5",
        "hoTen": "ĐD. Nguyễn Thị Hương Thảo",
        "chucVu": "Điều dưỡng viên Khoa Ngoại TH",
        "vaiTro": "Thành viên thực hiện thử nghiệm"
      }
    ],
    "thucTrang": "Tại Khoa Ngoại Tổng Hợp, quy trình phát thuốc và tiêm truyền hiện tại điều dưỡng vẫn phải in sổ tiêm giấy hoặc phiếu công khai thuốc mang theo xe tiêm. Phương pháp in giấy bộc lộ độ trễ thông tin nghiêm trọng: khi Bác sĩ điều chỉnh y lệnh (thay đổi liều lượng, bổ sung thuốc hoặc tạm dừng thuốc) trong ca trực, điều dưỡng đang đi tiêm tại buồng bệnh không thể cập nhật kịp thời. Để đối soát, điều dưỡng phải di chuyển nhiều lần về bàn hành chính tra cứu phần mềm HIS, làm kéo dài thời gian tiêm và tiềm ẩn nguy cơ nhầm lẫn thuốc.",
    "soLieuBanDau": [
      "Tỷ lệ cập nhật y lệnh tức thời tại thời điểm tiêm ở buồng bệnh đạt dưới 65%.",
      "Thời gian điều dưỡng phải di chuyển đi lại đối soát y lệnh chiếm trung bình 35 phút/ca tiêm.",
      "Lãng phí trung bình 1.200 trang giấy in và chi phí mực in sổ tiêm mỗi tháng.",
      "Tiềm ẩn rủi ro sai sót thực hiện thuốc khi có y lệnh thay đổi đột xuất của bác sĩ."
    ],
    "fiveWhys": [
      {
        "level": "Why 1",
        "question": "Tại sao điều dưỡng cho người bệnh dùng thuốc đã bị bác sĩ cắt hoặc thay đổi liều?",
        "answer": "Do điều dưỡng không nắm được thông tin y lệnh đã được điều chỉnh trên hệ thống phần mềm HIS."
      },
      {
        "level": "Why 2",
        "question": "Tại sao điều dưỡng không nắm được thông tin y lệnh đã thay đổi?",
        "answer": "Do điều dưỡng đang cầm sổ tiêm giấy đi buồng bệnh, không ngồi trực tiếp trước máy tính bàn tại phòng hành chính."
      },
      {
        "level": "Why 3",
        "question": "Tại sao không tra cứu thông tin phần mềm HIS trực tiếp tại buồng bệnh?",
        "answer": "Do tại các buồng bệnh điều trị không bố trí máy tính cố định để tra cứu dữ liệu bệnh án điện tử."
      },
      {
        "level": "Why 4",
        "question": "Tại sao bác sĩ điều trị không thông báo trực tiếp khi thay đổi y lệnh?",
        "answer": "Do bác sĩ thường xuyên bận phẫu thuật cấp cứu; việc thông báo trao đổi miệng dễ bị lãng quên hoặc gián đoạn."
      },
      {
        "level": "Why 5 (Cốt lõi)",
        "question": "NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Quy trình tiêm truyền lâm sàng bị đứt gãy kết nối thời gian thực với cơ sở dữ liệu bệnh án điện tử EMR/HIS tại buồng bệnh.",
        "answer": "Cần giải pháp công nghệ di động kết nối trực tiếp cơ sở dữ liệu HIS tại buồng bệnh để đảm bảo nguyên tắc 5 đúng điện tử."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Độ trễ cập nhật y lệnh tại buồng bệnh",
        "hienTrang": "< 65% thời gian thực",
        "mucTieu": "Triệt tiêu 100% độ trễ",
        "phuongPhap": "Đối soát trực tiếp trên màn hình máy tính"
      },
      {
        "chiTieu": "Tỷ lệ sai lệch y lệnh thuốc thực hiện",
        "hienTrang": "Tiềm ẩn nguy cơ",
        "mucTieu": "0 vụ sai lệch / tháng",
        "phuongPhap": "Biên bản kiểm tra an toàn người bệnh"
      },
      {
        "chiTieu": "Thời gian đi lại chuẩn bị và đối soát",
        "hienTrang": "35 phút / ca tiêm",
        "mucTieu": "Giảm còn dưới 15 phút",
        "phuongPhap": "Bấm giờ thao tác thực tế ca trực"
      },
      {
        "chiTieu": "Chi phí in ấn sổ tiêm giấy",
        "hienTrang": "1.200 trang / tháng",
        "mucTieu": "Giảm 100% (0 trang)",
        "phuongPhap": "Thống kê tiêu hao văn phòng phẩm khoa"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Cơ khí hóa): Cải tạo, nâng cấp xe tiêm truyền 3 tầng hiện có thành “Xe tiêm Thông minh”, lắp đặt giá đỡ chuyên dụng bằng inox chống rung lắc, có đệm cao su giảm chấn bảo vệ máy tính xách tay trong quá trình di chuyển.",
      "Giải pháp 2 (Công nghệ): Trang bị máy tính xách tay gắn cố định trên xe tiêm, kết nối mạng không dây y tế nội bộ chuyên dụng của bệnh viện với băng thông ưu tiên, đảm bảo phần mềm HIS vận hành liên tục không gián đoạn tín hiệu.",
      "Giải pháp 3 (Quy trình chuẩn): Thiết lập và chuẩn hóa thao tác kiểm tra chéo “3 tra – 5 đối” điện tử. Điều dưỡng đối chiếu họ tên, số hồ sơ bệnh án và y lệnh thuốc trực tiếp trên màn hình trước khi thực hiện tiêm hoặc truyền cho người bệnh.",
      "Giải pháp 4 (Đào tạo nội bộ): Tổ chức tập huấn thực hành sử dụng xe tiêm thông minh cho 100% điều dưỡng viên trong khoa; phân quyền thao tác và xác nhận chữ ký điện tử thực hiện y lệnh theo thời gian thực."
    ],
    "phamVi": "Thực hiện thử nghiệm tại 02 buồng bệnh hậu phẫu có mật độ tiêm truyền và thay đổi y lệnh cao nhất thuộc Khoa Ngoại Tổng Hợp.",
    "thoiGian": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
    "sanPhamDauRa": "01 Xe tiêm thông minh hoàn chỉnh; Dự thảo Quy trình Vận hành Chuẩn (SOP) tiêm truyền có đối soát màn hình điện tử thời gian thực; Bảng kiểm an toàn thuốc và Báo cáo nghiệm thu kết quả cải tiến theo mẫu A3.",
    "soHieuVanBan": "Số: 16/TB-QLCL-KAIZEN",
    "tongDiemThamDinh": 80,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM) |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "14 / 20",
        "nhanXet": "Phòng ngừa sai sót thuốc là ưu tiên hàng đầu trong an toàn người bệnh; tra cứu y lệnh thời gian thực giải quyết toàn diện độ trễ thông tin."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "18 / 25",
        "nhanXet": "Giải pháp lắp đặt Laptop trên xe tiêm có tính khả thi cao, tận dụng hạ tầng công nghệ thông tin sẵn có của bệnh viện."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "18 / 20",
        "nhanXet": "Rút ngắn thời gian tiêm, giảm bước di chuyển và kiểm soát chính xác 100% y lệnh trước khi thực hiện."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "15 / 15",
        "nhanXet": "Dễ dàng ban hành quy trình chuẩn và nhân rộng cho toàn bộ các khoa lâm sàng hệ nội và ngoại."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "15 / 20",
        "nhanXet": "Ứng dụng công nghệ thông tin thiết thực, nâng cao tính chuyên nghiệp trong chăm sóc người bệnh."
      }
    ],
    "ketLuanQLCL": "1. Phê duyệt Đề cương A3 cho nhóm tác giả KHOA NGOẠI TỔNG HỢP để chính thức triển khai thử nghiệm thực tế đề án theo đúng kế hoạch cam kết.\r\n2. Đề nghị nhóm tác giả tuân thủ quy trình chuyên môn, theo dõi sát sao các chỉ số an toàn người bệnh và ghi nhận đầy đủ số liệu đo lường thực tế.\r\n3. Tổ QLCL sẽ phối hợp kiểm chuẩn và hỗ trợ đơn vị hoàn thiện Báo cáo Nghiệm thu A3 trước Vòng Chung kết Hội thi Kaizen 16 Năm.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-NGOAI-01 02. Bản Đăng ký Sau Hiệu chỉnh Ngoại Tổng Hợp ĐD. Trần Mạnh Giang.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 8235
      },
      {
        "fileName": "KZ16-NGOAI-01 03. Biên bản Thẩm định Ngoại Tổng Hợp ĐD. Trần Mạnh Giang.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 4029
      },
      {
        "fileName": "KZ16-NGOAI-01 04. Đề cương A3 Triển khai Thực nghiệm Ngoại Tổng Hợp ĐD. Trần Mạnh Giang.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 6599
      }
    ],
    "quickSummary": {
      "idea": "Ứng dụng xe tiêm thông minh gắn máy tính xách tay tra cứu y lệnh thời gian thực nhằm triệt tiêu sai sót thuốc tại Khoa Ngoại Tổng hợp",
      "painPoints": [
        "Tỷ lệ cập nhật y lệnh tức thời tại thời điểm tiêm ở buồng bệnh đạt dưới 65%.",
        "Thời gian điều dưỡng phải di chuyển đi lại đối soát y lệnh chiếm trung bình 35 phút/ca tiêm.",
        "Lãng phí trung bình 1.200 trang giấy in và chi phí mực in sổ tiêm mỗi tháng."
      ],
      "solutions": [
        "Giải pháp 1 (Cơ khí hóa): Cải tạo, nâng cấp xe tiêm truyền 3 tầng hiện có thành “Xe tiêm Thông minh”, lắp đặt giá đỡ chuyên dụng bằng inox chống rung lắc, có đệm cao su giảm chấn bảo vệ máy tính xách tay trong quá trình di chuyển.",
        "Giải pháp 2 (Công nghệ): Trang bị máy tính xách tay gắn cố định trên xe tiêm, kết nối mạng không dây y tế nội bộ chuyên dụng của bệnh viện với băng thông ưu tiên, đảm bảo phần mềm HIS vận hành liên tục không gián đoạn tín hiệu.",
        "Giải pháp 3 (Quy trình chuẩn): Thiết lập và chuẩn hóa thao tác kiểm tra chéo “3 tra – 5 đối” điện tử. Điều dưỡng đối chiếu họ tên, số hồ sơ bệnh án và y lệnh thuốc trực tiếp trên màn hình trước khi thực hiện tiêm hoặc truyền cho người bệnh."
      ],
      "keyMetrics": [
        {
          "label": "Độ trễ cập nhật y lệnh tại buồng bệnh",
          "before": "< 65% thời gian thực",
          "after": "Triệt tiêu 100% độ trễ",
          "note": "Đối soát trực tiếp trên màn hình máy tính"
        },
        {
          "label": "Tỷ lệ sai lệch y lệnh thuốc thực hiện",
          "before": "Tiềm ẩn nguy cơ",
          "after": "0 vụ sai lệch / tháng",
          "note": "Biên bản kiểm tra an toàn người bệnh"
        },
        {
          "label": "Thời gian đi lại chuẩn bị và đối soát",
          "before": "35 phút / ca tiêm",
          "after": "Giảm còn dưới 15 phút",
          "note": "Bấm giờ thao tác thực tế ca trực"
        },
        {
          "label": "Chi phí in ấn sổ tiêm giấy",
          "before": "1.200 trang / tháng",
          "after": "Giảm 100% (0 trang)",
          "note": "Thống kê tiêu hao văn phòng phẩm khoa"
        }
      ]
    },
    "a3Report": {
      "title": "Ứng dụng xe tiêm thông minh gắn máy tính xách tay tra cứu y lệnh thời gian thực nhằm triệt tiêu sai sót thuốc tại Khoa Ngoại Tổng hợp",
      "department": "KHOA NGOẠI TỔNG HỢP",
      "leader": "ĐD. Trần Mạnh Giang",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Tại Khoa Ngoại Tổng Hợp, quy trình phát thuốc và tiêm truyền hiện tại điều dưỡng vẫn phải in sổ tiêm giấy hoặc phiếu công khai thuốc mang theo xe tiêm. Phương pháp in giấy bộc lộ độ trễ thông tin nghiêm trọng: khi Bác sĩ điều chỉnh y lệnh (thay đổi liều lượng, bổ sung thuốc hoặc tạm dừng thuốc) trong ca trực, điều dưỡng đang đi tiêm tại buồng bệnh không thể cập nhật kịp thời. Để đối soát, điều dưỡng phải di chuyển nhiều lần về bàn hành chính tra cứu phần mềm HIS, làm kéo dài thời gian tiêm và tiềm ẩn nguy cơ nhầm lẫn thuốc.",
      "currentCondition": "Tỷ lệ cập nhật y lệnh tức thời tại thời điểm tiêm ở buồng bệnh đạt dưới 65%.\n• Thời gian điều dưỡng phải di chuyển đi lại đối soát y lệnh chiếm trung bình 35 phút/ca tiêm.\n• Lãng phí trung bình 1.200 trang giấy in và chi phí mực in sổ tiêm mỗi tháng.\n• Tiềm ẩn rủi ro sai sót thực hiện thuốc khi có y lệnh thay đổi đột xuất của bác sĩ.",
      "targetCondition": "• Độ trễ cập nhật y lệnh tại buồng bệnh: Hiện trạng < 65% thời gian thực ➔ Cam kết đạt Triệt tiêu 100% độ trễ\n• Tỷ lệ sai lệch y lệnh thuốc thực hiện: Hiện trạng Tiềm ẩn nguy cơ ➔ Cam kết đạt 0 vụ sai lệch / tháng\n• Thời gian đi lại chuẩn bị và đối soát: Hiện trạng 35 phút / ca tiêm ➔ Cam kết đạt Giảm còn dưới 15 phút\n• Chi phí in ấn sổ tiêm giấy: Hiện trạng 1.200 trang / tháng ➔ Cam kết đạt Giảm 100% (0 trang)",
      "rootCauseAnalysis": "Why 1: Tại sao điều dưỡng cho người bệnh dùng thuốc đã bị bác sĩ cắt hoặc thay đổi liều? ➔ Do điều dưỡng không nắm được thông tin y lệnh đã được điều chỉnh trên hệ thống phần mềm HIS.\nWhy 2: Tại sao điều dưỡng không nắm được thông tin y lệnh đã thay đổi? ➔ Do điều dưỡng đang cầm sổ tiêm giấy đi buồng bệnh, không ngồi trực tiếp trước máy tính bàn tại phòng hành chính.\nWhy 3: Tại sao không tra cứu thông tin phần mềm HIS trực tiếp tại buồng bệnh? ➔ Do tại các buồng bệnh điều trị không bố trí máy tính cố định để tra cứu dữ liệu bệnh án điện tử.\nWhy 4: Tại sao bác sĩ điều trị không thông báo trực tiếp khi thay đổi y lệnh? ➔ Do bác sĩ thường xuyên bận phẫu thuật cấp cứu; việc thông báo trao đổi miệng dễ bị lãng quên hoặc gián đoạn.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Quy trình tiêm truyền lâm sàng bị đứt gãy kết nối thời gian thực với cơ sở dữ liệu bệnh án điện tử EMR/HIS tại buồng bệnh. ➔ Cần giải pháp công nghệ di động kết nối trực tiếp cơ sở dữ liệu HIS tại buồng bệnh để đảm bảo nguyên tắc 5 đúng điện tử.",
      "countermeasures": "• Giải pháp 1 (Cơ khí hóa): Cải tạo, nâng cấp xe tiêm truyền 3 tầng hiện có thành “Xe tiêm Thông minh”, lắp đặt giá đỡ chuyên dụng bằng inox chống rung lắc, có đệm cao su giảm chấn bảo vệ máy tính xách tay trong quá trình di chuyển.\n• Giải pháp 2 (Công nghệ): Trang bị máy tính xách tay gắn cố định trên xe tiêm, kết nối mạng không dây y tế nội bộ chuyên dụng của bệnh viện với băng thông ưu tiên, đảm bảo phần mềm HIS vận hành liên tục không gián đoạn tín hiệu.\n• Giải pháp 3 (Quy trình chuẩn): Thiết lập và chuẩn hóa thao tác kiểm tra chéo “3 tra – 5 đối” điện tử. Điều dưỡng đối chiếu họ tên, số hồ sơ bệnh án và y lệnh thuốc trực tiếp trên màn hình trước khi thực hiện tiêm hoặc truyền cho người bệnh.\n• Giải pháp 4 (Đào tạo nội bộ): Tổ chức tập huấn thực hành sử dụng xe tiêm thông minh cho 100% điều dưỡng viên trong khoa; phân quyền thao tác và xác nhận chữ ký điện tử thực hiện y lệnh theo thời gian thực.",
      "planImplementation": "Khu vực: Thực hiện thử nghiệm tại 02 buồng bệnh hậu phẫu có mật độ tiêm truyền và thay đổi y lệnh cao nhất thuộc Khoa Ngoại Tổng Hợp.\nThời gian: Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.\nSản phẩm đầu ra: 01 Xe tiêm thông minh hoàn chỉnh; Dự thảo Quy trình Vận hành Chuẩn (SOP) tiêm truyền có đối soát màn hình điện tử thời gian thực; Bảng kiểm an toàn thuốc và Báo cáo nghiệm thu kết quả cải tiến theo mẫu A3.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại KHOA NGOẠI TỔNG HỢP; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "Tỷ lệ cập nhật y lệnh tức thời tại thời điểm tiêm ở buồng bệnh đạt dưới 65%.\n• Thời gian điều dưỡng phải di chuyển đi lại đối soát y lệnh chiếm trung bình 35 phút/ca tiêm.\n• Lãng phí trung bình 1.200 trang giấy in và chi phí mực in sổ tiêm mỗi tháng.\n• Tiềm ẩn rủi ro sai sót thực hiện thuốc khi có y lệnh thay đổi đột xuất của bác sĩ.",
      "smartGoal": "• Độ trễ cập nhật y lệnh tại buồng bệnh: Hiện trạng < 65% thời gian thực ➔ Cam kết đạt Triệt tiêu 100% độ trễ\n• Tỷ lệ sai lệch y lệnh thuốc thực hiện: Hiện trạng Tiềm ẩn nguy cơ ➔ Cam kết đạt 0 vụ sai lệch / tháng\n• Thời gian đi lại chuẩn bị và đối soát: Hiện trạng 35 phút / ca tiêm ➔ Cam kết đạt Giảm còn dưới 15 phút\n• Chi phí in ấn sổ tiêm giấy: Hiện trạng 1.200 trang / tháng ➔ Cam kết đạt Giảm 100% (0 trang)",
      "rootCause": "Why 1: Tại sao điều dưỡng cho người bệnh dùng thuốc đã bị bác sĩ cắt hoặc thay đổi liều? ➔ Do điều dưỡng không nắm được thông tin y lệnh đã được điều chỉnh trên hệ thống phần mềm HIS.\nWhy 2: Tại sao điều dưỡng không nắm được thông tin y lệnh đã thay đổi? ➔ Do điều dưỡng đang cầm sổ tiêm giấy đi buồng bệnh, không ngồi trực tiếp trước máy tính bàn tại phòng hành chính.\nWhy 3: Tại sao không tra cứu thông tin phần mềm HIS trực tiếp tại buồng bệnh? ➔ Do tại các buồng bệnh điều trị không bố trí máy tính cố định để tra cứu dữ liệu bệnh án điện tử.\nWhy 4: Tại sao bác sĩ điều trị không thông báo trực tiếp khi thay đổi y lệnh? ➔ Do bác sĩ thường xuyên bận phẫu thuật cấp cứu; việc thông báo trao đổi miệng dễ bị lãng quên hoặc gián đoạn.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Quy trình tiêm truyền lâm sàng bị đứt gãy kết nối thời gian thực với cơ sở dữ liệu bệnh án điện tử EMR/HIS tại buồng bệnh. ➔ Cần giải pháp công nghệ di động kết nối trực tiếp cơ sở dữ liệu HIS tại buồng bệnh để đảm bảo nguyên tắc 5 đúng điện tử.",
      "resultsBeforeAfter": [
        {
          "metric": "Độ trễ cập nhật y lệnh tại buồng bệnh",
          "before": "< 65% thời gian thực",
          "after": "Triệt tiêu 100% độ trễ"
        },
        {
          "metric": "Tỷ lệ sai lệch y lệnh thuốc thực hiện",
          "before": "Tiềm ẩn nguy cơ",
          "after": "0 vụ sai lệch / tháng"
        },
        {
          "metric": "Thời gian đi lại chuẩn bị và đối soát",
          "before": "35 phút / ca tiêm",
          "after": "Giảm còn dưới 15 phút"
        },
        {
          "metric": "Chi phí in ấn sổ tiêm giấy",
          "before": "1.200 trang / tháng",
          "after": "Giảm 100% (0 trang)"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 80/100đ (ĐẠT LOẠI A (PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM) |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Thực hiện thử nghiệm tại 02 buồng bệnh hậu phẫu có mật độ tiêm truyền và thay đổi y lệnh cao nhất thuộc Khoa Ngoại Tổng Hợp.",
        "time": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "ĐD. Trần Mạnh Giang",
    "nhomTacGia": "ĐD. Trần Mạnh Giang, ĐD. Võ Nguyễn Thúy Hà, ĐD. Phạm Thị Thanh Cần, ĐD. Lê Thị Hồng Nhung, ĐD. Nguyễn Thị Hương Thảo",
    "diemBanDau": "80"
  },
  {
    "maDeTai": "KZ16-CC115-01",
    "tenDeTai": "Sáng chế giá treo bình oxy đứng đa năng trên xe cáng cấp cứu nhằm nâng cao an toàn vận chuyển và kiểm soát lưu lượng khí thở tại Trung tâm Cấp cứu 115",
    "tenSanPham": "Sáng chế giá treo bình oxy đứng đa năng trên xe cáng cấp cứu nhằm nâng cao an toàn vận chuyển và kiểm soát lưu lượng khí thở tại Trung tâm Cấp cứu 115",
    "khoaPhong": "TRUNG TÂM CẤP CỨU 115",
    "khoaPhoiHop": "Tổ Quản trị Tài sản và Thiết bị",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 2: An toàn người bệnh và phòng ngừa sai sót lâm sàng (Kết hợp sáng kiến kỹ thuật trang thiết bị y tế).",
    "tacGia": "ĐD. Đỗ Sơn Bắc",
    "authorsDetailed": [
      {
        "name": "ĐD. Đỗ Sơn Bắc",
        "title": "Điều dưỡng viên Trung tâm Cấp cứu 115",
        "role": "Tác giả sáng chế (Chủ nhiệm đề án)",
        "stt": "1",
        "hoTen": "ĐD. Đỗ Sơn Bắc",
        "chucVu": "Điều dưỡng viên Trung tâm Cấp cứu 115",
        "vaiTro": "Tác giả sáng chế (Chủ nhiệm đề án)"
      },
      {
        "name": "BS. Nguyễn Văn Hùng",
        "title": "Bác sĩ Cấp cứu 115",
        "role": "Cố vấn chuyên môn cấp cứu ngoại viện",
        "stt": "2",
        "hoTen": "BS. Nguyễn Văn Hùng",
        "chucVu": "Bác sĩ Cấp cứu 115",
        "vaiTro": "Cố vấn chuyên môn cấp cứu ngoại viện"
      },
      {
        "name": "ĐD. Hoàng Văn Tuấn",
        "title": "Điều dưỡng viên Cấp cứu 115",
        "role": "Thành viên thực nghiệm hiện trường",
        "stt": "3",
        "hoTen": "ĐD. Hoàng Văn Tuấn",
        "chucVu": "Điều dưỡng viên Cấp cứu 115",
        "vaiTro": "Thành viên thực nghiệm hiện trường"
      }
    ],
    "thucTrang": "Khi vận chuyển người bệnh nguy kịch cần thở oxy liên tục từ hiện trường về viện hoặc chuyển khoa hồi sức, bình oxy cao áp thường phải đặt nằm ngang dưới chân người bệnh hoặc buộc dây tạm bợ vào thanh giằng cáng. Khi xe cấp cứu di chuyển xóc nảy, bình oxy rất dễ bị trượt đổ, va đập gây rò rỉ van khí nén, đồng thời đồng hồ đo lưu lượng bị khuất tầm nhìn, khiến điều dưỡng khó kiểm soát chính xác lưu lượng khí thở.",
    "soLieuBanDau": [
      "100% các chuyến vận chuyển cấp cứu ngoại viện phải đặt bình oxy nằm ngang trên đệm cáng.",
      "Thời gian thao tác tháo lắp, chằng buộc bình oxy mất từ 2 đến 3 phút mỗi lượt cấp cứu.",
      "Nguy cơ rơi đổ, rò rỉ khí oxy cao áp tiềm ẩn nguy hiểm cháy nổ trên xe cứu thương.",
      "Bác sĩ và điều dưỡng khó quan sát đồng hồ áp suất khi đang tập trung hồi sức bệnh nhân."
    ],
    "fiveWhys": [
      {
        "level": "Why 1",
        "question": "Tại sao bình oxy dễ bị trượt đổ khi vận chuyển người bệnh cấp cứu?",
        "answer": "Do bình oxy đặt nằm tự do trên cáng hoặc cạnh người bệnh mà không có giá đỡ chuyên dụng."
      },
      {
        "level": "Why 2",
        "question": "Tại sao không gắn cố định bình oxy vào thân cáng cứu thương?",
        "answer": "Do khung cáng cứu thương tiêu chuẩn không có cơ cấu kẹp giữ chuyên dụng cho bình oxy y tế."
      },
      {
        "level": "Why 3",
        "question": "Tại sao nhân viên y tế không giữ bình oxy trong suốt quá trình đi xe?",
        "answer": "Do kíp cấp cứu phải tập trung hai tay ép tim, bóp bóng Ambu và theo dõi đường thở cho người bệnh."
      },
      {
        "level": "Why 4",
        "question": "Tại sao không sử dụng các giá treo bán sẵn trên thị trường?",
        "answer": "Do các loại giá treo thương mại cồng kềnh, không tương thích với kích thước xe cứu thương và cáng nội viện."
      },
      {
        "level": "Why 5 (Cốt lõi)",
        "question": "NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Thiếu module cơ khí chuyên dụng tích hợp đồng bộ trực tiếp vào kết cấu khung cáng để giữ bình oxy ở tư thế đứng an toàn.",
        "answer": "Cần sáng chế và gia công bộ giá treo cơ khí đa năng chịu lực, thao tác khóa mở nhanh một chạm."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Tỷ lệ bình oxy được cố định ở tư thế đứng an toàn",
        "hienTrang": "0% (đều đặt nằm)",
        "mucTieu": "Đạt 100% các chuyến cấp cứu",
        "phuongPhap": "Kiểm tra hiện trường xe cứu thương"
      },
      {
        "chiTieu": "Thời gian thao tác lắp hoặc tháo bình oxy trên cáng",
        "hienTrang": "2 - 3 phút (chằng buộc)",
        "mucTieu": "Giảm còn dưới 15 giây",
        "phuongPhap": "Bấm giờ thao tác thực tế"
      },
      {
        "chiTieu": "Sự cố rơi đổ hoặc rò rỉ van khí oxy cao áp",
        "hienTrang": "Tiềm ẩn nguy cơ cao",
        "mucTieu": "0 vụ rơi đổ / năm",
        "phuongPhap": "Báo cáo an toàn người bệnh"
      },
      {
        "chiTieu": "Chi phí chế tạo hoàn thiện mẫu thử nghiệm",
        "hienTrang": "Không có",
        "mucTieu": "Dưới 1.500.000 VNĐ / bộ",
        "phuongPhap": "Bảng thanh quyết toán vật tư cơ khí"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Cơ khí hóa sáng chế): Thiết kế và gia công bộ giá treo bình oxy bằng thép không gỉ (Inox 304) chịu lực, có khớp ngàm gắn trực tiếp vào thanh ray chịu lực của xe cáng cứu thương.",
      "Giải pháp 2 (Khóa an toàn một chạm): Tích hợp vòng đai bán nguyệt có đệm cao su giảm chấn và khóa lẫy siết nhanh, giúp cố định bình oxy đứng vững chắc chỉ trong 10-15 giây thao tác.",
      "Giải pháp 3 (Tối ưu quan sát): Định vị vị trí giá treo tại đầu cáng giúp đồng hồ áp suất và lưu lượng kế luôn hướng về tầm mắt của điều dưỡng trong suốt hành trình vận chuyển.",
      "Giải pháp 4 (Thử nghiệm chịu tải): Thực hiện thử nghiệm rung lắc trên địa hình gồ ghề và thử tải trọng gấp đôi trước khi đưa vào vận hành chính thức trên toàn đội xe 115."
    ],
    "phamVi": "Thực hiện thử nghiệm trên 02 xe cứu thương chuyên dụng của Trung tâm Cấp cứu 115.",
    "thoiGian": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
    "sanPhamDauRa": "02 Bộ giá treo bình oxy đứng đa năng hoàn chỉnh; Báo cáo nghiệm thu độ an toàn cơ học và Quy trình thao tác nhanh khi tiếp nhận bệnh nhân cấp cứu.",
    "soHieuVanBan": "Số: 16/TB-QLCL-KAIZEN",
    "tongDiemThamDinh": 88,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT CẤP KINH PHÍ MẪU THỬ |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "16 / 20",
        "nhanXet": "Sáng chế giải quyết trực tiếp nguy cơ cháy nổ và tai biến y khoa khi vận chuyển bệnh nhân nguy kịch."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "20 / 25",
        "nhanXet": "Thiết kế cơ khí khả thi cao, chi phí thấp, gia công nhanh chóng tại xưởng cơ khí bệnh viện."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "20 / 20",
        "nhanXet": "Rút ngắn thời gian thao tác từ 3 phút xuống 15 giây, kiểm soát 100% an toàn lưu lượng oxy."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "16 / 15",
        "nhanXet": "Có thể trang bị cho toàn bộ xe cứu thương và xe cáng nội viện toàn hệ thống Hùng Vương."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "16 / 20",
        "nhanXet": "Sáng kiến kỹ thuật độc đáo, xuất phát từ thực tiễn hiện trường của nhân viên y tế."
      }
    ],
    "ketLuanQLCL": "1. Phê duyệt Đề cương A3 cho nhóm tác giả TRUNG TÂM CẤP CỨU 115 để chính thức triển khai thử nghiệm thực tế đề án theo đúng kế hoạch cam kết.\r\n2. Đề nghị nhóm tác giả tuân thủ quy trình chuyên môn, theo dõi sát sao các chỉ số an toàn người bệnh và ghi nhận đầy đủ số liệu đo lường thực tế.\r\n3. Tổ QLCL sẽ phối hợp kiểm chuẩn và hỗ trợ đơn vị hoàn thiện Báo cáo Nghiệm thu A3 trước Vòng Chung kết Hội thi Kaizen 16 Năm.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-CC115-01 02. Bản Đăng ký Sau Hiệu chỉnh Cấp Cứu 115 ĐD. Đỗ Sơn Bắc.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 7393
      },
      {
        "fileName": "KZ16-CC115-01 03. Biên bản Thẩm định Cấp Cứu 115 ĐD. Đỗ Sơn Bắc.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 3974
      },
      {
        "fileName": "KZ16-CC115-01 04. Đề cương A3 Triển khai Thực nghiệm Cấp Cứu 115 ĐD. Đỗ Sơn Bắc.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 5928
      }
    ],
    "quickSummary": {
      "idea": "Sáng chế giá treo bình oxy đứng đa năng trên xe cáng cấp cứu nhằm nâng cao an toàn vận chuyển và kiểm soát lưu lượng khí thở tại Trung tâm Cấp cứu 115",
      "painPoints": [
        "100% các chuyến vận chuyển cấp cứu ngoại viện phải đặt bình oxy nằm ngang trên đệm cáng.",
        "Thời gian thao tác tháo lắp, chằng buộc bình oxy mất từ 2 đến 3 phút mỗi lượt cấp cứu.",
        "Nguy cơ rơi đổ, rò rỉ khí oxy cao áp tiềm ẩn nguy hiểm cháy nổ trên xe cứu thương."
      ],
      "solutions": [
        "Giải pháp 1 (Cơ khí hóa sáng chế): Thiết kế và gia công bộ giá treo bình oxy bằng thép không gỉ (Inox 304) chịu lực, có khớp ngàm gắn trực tiếp vào thanh ray chịu lực của xe cáng cứu thương.",
        "Giải pháp 2 (Khóa an toàn một chạm): Tích hợp vòng đai bán nguyệt có đệm cao su giảm chấn và khóa lẫy siết nhanh, giúp cố định bình oxy đứng vững chắc chỉ trong 10-15 giây thao tác.",
        "Giải pháp 3 (Tối ưu quan sát): Định vị vị trí giá treo tại đầu cáng giúp đồng hồ áp suất và lưu lượng kế luôn hướng về tầm mắt của điều dưỡng trong suốt hành trình vận chuyển."
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ bình oxy được cố định ở tư thế đ...",
          "before": "0% (đều đặt nằm)",
          "after": "Đạt 100% các chuyến cấp cứu",
          "note": "Kiểm tra hiện trường xe cứu thương"
        },
        {
          "label": "Thời gian thao tác lắp hoặc tháo bình ...",
          "before": "2 - 3 phút (chằng buộc)",
          "after": "Giảm còn dưới 15 giây",
          "note": "Bấm giờ thao tác thực tế"
        },
        {
          "label": "Sự cố rơi đổ hoặc rò rỉ van khí oxy ca...",
          "before": "Tiềm ẩn nguy cơ cao",
          "after": "0 vụ rơi đổ / năm",
          "note": "Báo cáo an toàn người bệnh"
        },
        {
          "label": "Chi phí chế tạo hoàn thiện mẫu thử ngh...",
          "before": "Không có",
          "after": "Dưới 1.500.000 VNĐ / bộ",
          "note": "Bảng thanh quyết toán vật tư cơ khí"
        }
      ]
    },
    "a3Report": {
      "title": "Sáng chế giá treo bình oxy đứng đa năng trên xe cáng cấp cứu nhằm nâng cao an toàn vận chuyển và kiểm soát lưu lượng khí thở tại Trung tâm Cấp cứu 115",
      "department": "TRUNG TÂM CẤP CỨU 115",
      "leader": "ĐD. Đỗ Sơn Bắc",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Khi vận chuyển người bệnh nguy kịch cần thở oxy liên tục từ hiện trường về viện hoặc chuyển khoa hồi sức, bình oxy cao áp thường phải đặt nằm ngang dưới chân người bệnh hoặc buộc dây tạm bợ vào thanh giằng cáng. Khi xe cấp cứu di chuyển xóc nảy, bình oxy rất dễ bị trượt đổ, va đập gây rò rỉ van khí nén, đồng thời đồng hồ đo lưu lượng bị khuất tầm nhìn, khiến điều dưỡng khó kiểm soát chính xác lưu lượng khí thở.",
      "currentCondition": "100% các chuyến vận chuyển cấp cứu ngoại viện phải đặt bình oxy nằm ngang trên đệm cáng.\n• Thời gian thao tác tháo lắp, chằng buộc bình oxy mất từ 2 đến 3 phút mỗi lượt cấp cứu.\n• Nguy cơ rơi đổ, rò rỉ khí oxy cao áp tiềm ẩn nguy hiểm cháy nổ trên xe cứu thương.\n• Bác sĩ và điều dưỡng khó quan sát đồng hồ áp suất khi đang tập trung hồi sức bệnh nhân.",
      "targetCondition": "• Tỷ lệ bình oxy được cố định ở tư thế đứng an toàn: Hiện trạng 0% (đều đặt nằm) ➔ Cam kết đạt Đạt 100% các chuyến cấp cứu\n• Thời gian thao tác lắp hoặc tháo bình oxy trên cáng: Hiện trạng 2 - 3 phút (chằng buộc) ➔ Cam kết đạt Giảm còn dưới 15 giây\n• Sự cố rơi đổ hoặc rò rỉ van khí oxy cao áp: Hiện trạng Tiềm ẩn nguy cơ cao ➔ Cam kết đạt 0 vụ rơi đổ / năm\n• Chi phí chế tạo hoàn thiện mẫu thử nghiệm: Hiện trạng Không có ➔ Cam kết đạt Dưới 1.500.000 VNĐ / bộ",
      "rootCauseAnalysis": "Why 1: Tại sao bình oxy dễ bị trượt đổ khi vận chuyển người bệnh cấp cứu? ➔ Do bình oxy đặt nằm tự do trên cáng hoặc cạnh người bệnh mà không có giá đỡ chuyên dụng.\nWhy 2: Tại sao không gắn cố định bình oxy vào thân cáng cứu thương? ➔ Do khung cáng cứu thương tiêu chuẩn không có cơ cấu kẹp giữ chuyên dụng cho bình oxy y tế.\nWhy 3: Tại sao nhân viên y tế không giữ bình oxy trong suốt quá trình đi xe? ➔ Do kíp cấp cứu phải tập trung hai tay ép tim, bóp bóng Ambu và theo dõi đường thở cho người bệnh.\nWhy 4: Tại sao không sử dụng các giá treo bán sẵn trên thị trường? ➔ Do các loại giá treo thương mại cồng kềnh, không tương thích với kích thước xe cứu thương và cáng nội viện.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Thiếu module cơ khí chuyên dụng tích hợp đồng bộ trực tiếp vào kết cấu khung cáng để giữ bình oxy ở tư thế đứng an toàn. ➔ Cần sáng chế và gia công bộ giá treo cơ khí đa năng chịu lực, thao tác khóa mở nhanh một chạm.",
      "countermeasures": "• Giải pháp 1 (Cơ khí hóa sáng chế): Thiết kế và gia công bộ giá treo bình oxy bằng thép không gỉ (Inox 304) chịu lực, có khớp ngàm gắn trực tiếp vào thanh ray chịu lực của xe cáng cứu thương.\n• Giải pháp 2 (Khóa an toàn một chạm): Tích hợp vòng đai bán nguyệt có đệm cao su giảm chấn và khóa lẫy siết nhanh, giúp cố định bình oxy đứng vững chắc chỉ trong 10-15 giây thao tác.\n• Giải pháp 3 (Tối ưu quan sát): Định vị vị trí giá treo tại đầu cáng giúp đồng hồ áp suất và lưu lượng kế luôn hướng về tầm mắt của điều dưỡng trong suốt hành trình vận chuyển.\n• Giải pháp 4 (Thử nghiệm chịu tải): Thực hiện thử nghiệm rung lắc trên địa hình gồ ghề và thử tải trọng gấp đôi trước khi đưa vào vận hành chính thức trên toàn đội xe 115.",
      "planImplementation": "Khu vực: Thực hiện thử nghiệm trên 02 xe cứu thương chuyên dụng của Trung tâm Cấp cứu 115.\nThời gian: Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.\nSản phẩm đầu ra: 02 Bộ giá treo bình oxy đứng đa năng hoàn chỉnh; Báo cáo nghiệm thu độ an toàn cơ học và Quy trình thao tác nhanh khi tiếp nhận bệnh nhân cấp cứu.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại TRUNG TÂM CẤP CỨU 115; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "100% các chuyến vận chuyển cấp cứu ngoại viện phải đặt bình oxy nằm ngang trên đệm cáng.\n• Thời gian thao tác tháo lắp, chằng buộc bình oxy mất từ 2 đến 3 phút mỗi lượt cấp cứu.\n• Nguy cơ rơi đổ, rò rỉ khí oxy cao áp tiềm ẩn nguy hiểm cháy nổ trên xe cứu thương.\n• Bác sĩ và điều dưỡng khó quan sát đồng hồ áp suất khi đang tập trung hồi sức bệnh nhân.",
      "smartGoal": "• Tỷ lệ bình oxy được cố định ở tư thế đứng an toàn: Hiện trạng 0% (đều đặt nằm) ➔ Cam kết đạt Đạt 100% các chuyến cấp cứu\n• Thời gian thao tác lắp hoặc tháo bình oxy trên cáng: Hiện trạng 2 - 3 phút (chằng buộc) ➔ Cam kết đạt Giảm còn dưới 15 giây\n• Sự cố rơi đổ hoặc rò rỉ van khí oxy cao áp: Hiện trạng Tiềm ẩn nguy cơ cao ➔ Cam kết đạt 0 vụ rơi đổ / năm\n• Chi phí chế tạo hoàn thiện mẫu thử nghiệm: Hiện trạng Không có ➔ Cam kết đạt Dưới 1.500.000 VNĐ / bộ",
      "rootCause": "Why 1: Tại sao bình oxy dễ bị trượt đổ khi vận chuyển người bệnh cấp cứu? ➔ Do bình oxy đặt nằm tự do trên cáng hoặc cạnh người bệnh mà không có giá đỡ chuyên dụng.\nWhy 2: Tại sao không gắn cố định bình oxy vào thân cáng cứu thương? ➔ Do khung cáng cứu thương tiêu chuẩn không có cơ cấu kẹp giữ chuyên dụng cho bình oxy y tế.\nWhy 3: Tại sao nhân viên y tế không giữ bình oxy trong suốt quá trình đi xe? ➔ Do kíp cấp cứu phải tập trung hai tay ép tim, bóp bóng Ambu và theo dõi đường thở cho người bệnh.\nWhy 4: Tại sao không sử dụng các giá treo bán sẵn trên thị trường? ➔ Do các loại giá treo thương mại cồng kềnh, không tương thích với kích thước xe cứu thương và cáng nội viện.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Thiếu module cơ khí chuyên dụng tích hợp đồng bộ trực tiếp vào kết cấu khung cáng để giữ bình oxy ở tư thế đứng an toàn. ➔ Cần sáng chế và gia công bộ giá treo cơ khí đa năng chịu lực, thao tác khóa mở nhanh một chạm.",
      "resultsBeforeAfter": [
        {
          "metric": "Tỷ lệ bình oxy được cố định ở tư thế đứng an toàn",
          "before": "0% (đều đặt nằm)",
          "after": "Đạt 100% các chuyến cấp cứu"
        },
        {
          "metric": "Thời gian thao tác lắp hoặc tháo bình oxy trên cáng",
          "before": "2 - 3 phút (chằng buộc)",
          "after": "Giảm còn dưới 15 giây"
        },
        {
          "metric": "Sự cố rơi đổ hoặc rò rỉ van khí oxy cao áp",
          "before": "Tiềm ẩn nguy cơ cao",
          "after": "0 vụ rơi đổ / năm"
        },
        {
          "metric": "Chi phí chế tạo hoàn thiện mẫu thử nghiệm",
          "before": "Không có",
          "after": "Dưới 1.500.000 VNĐ / bộ"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 88/100đ (ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT CẤP KINH PHÍ MẪU THỬ |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Thực hiện thử nghiệm trên 02 xe cứu thương chuyên dụng của Trung tâm Cấp cứu 115.",
        "time": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "ĐD. Đỗ Sơn Bắc",
    "nhomTacGia": "ĐD. Đỗ Sơn Bắc, BS. Nguyễn Văn Hùng, ĐD. Hoàng Văn Tuấn",
    "diemBanDau": "88"
  },
  {
    "maDeTai": "KZ16-TIMMACH-01",
    "tenDeTai": "Cải tiến quy trình chuẩn bị thuốc và vật tư can thiệp cấp cứu STEMI bằng mô hình STEMI Emergency Box tại Phòng Can thiệp Tim mạch",
    "tenSanPham": "Cải tiến quy trình chuẩn bị thuốc và vật tư can thiệp cấp cứu STEMI bằng mô hình STEMI Emergency Box tại Phòng Can thiệp Tim mạch",
    "khoaPhong": "KHOA TIM MẠCH",
    "khoaPhoiHop": "Tổ Dược Lâm sàng",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 2: An toàn người bệnh và phòng ngừa sai sót lâm sàng (Tối ưu hóa thời gian cấp cứu tối khẩn cấp).",
    "tacGia": "ĐD. Nguyễn Duy Hùng",
    "authorsDetailed": [
      {
        "name": "ĐD. Nguyễn Duy Hùng",
        "title": "Điều dưỡng viên Phòng Can thiệp Tim mạch",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)",
        "stt": "1",
        "hoTen": "ĐD. Nguyễn Duy Hùng",
        "chucVu": "Điều dưỡng viên Phòng Can thiệp Tim mạch",
        "vaiTro": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "ĐD. Nguyễn Việt Hưng",
        "title": "Điều dưỡng viên Phòng Can thiệp",
        "role": "Thư ký đề án (Theo dõi số liệu)",
        "stt": "2",
        "hoTen": "ĐD. Nguyễn Việt Hưng",
        "chucVu": "Điều dưỡng viên Phòng Can thiệp",
        "vaiTro": "Thư ký đề án (Theo dõi số liệu)"
      },
      {
        "name": "ĐD. Nguyễn Mạnh Hùng",
        "title": "Điều dưỡng viên Phòng Can thiệp",
        "role": "Thành viên thực hiện thử nghiệm",
        "stt": "3",
        "hoTen": "ĐD. Nguyễn Mạnh Hùng",
        "chucVu": "Điều dưỡng viên Phòng Can thiệp",
        "vaiTro": "Thành viên thực hiện thử nghiệm"
      },
      {
        "name": "ĐD. Lê Minh Thắng",
        "title": "Điều dưỡng viên Phòng Can thiệp",
        "role": "Thành viên thực hiện thử nghiệm",
        "stt": "4",
        "hoTen": "ĐD. Lê Minh Thắng",
        "chucVu": "Điều dưỡng viên Phòng Can thiệp",
        "vaiTro": "Thành viên thực hiện thử nghiệm"
      },
      {
        "name": "ĐD. Nguyễn Phạm Quốc Anh",
        "title": "Điều dưỡng viên Phòng Can thiệp",
        "role": "Thành viên thực hiện thử nghiệm",
        "stt": "5",
        "hoTen": "ĐD. Nguyễn Phạm Quốc Anh",
        "chucVu": "Điều dưỡng viên Phòng Can thiệp",
        "vaiTro": "Thành viên thực hiện thử nghiệm"
      }
    ],
    "thucTrang": "Nhồi máu cơ tim cấp có ST chênh lên (STEMI) là tình trạng cấp cứu khẩn cấp đòi hỏi tái thông mạch vành trong thời gian vàng. Tuy nhiên, ngoài giờ hành chính, điều dưỡng phải di chuyển qua nhiều tủ thuốc và kho vật tư khác nhau để tìm kiếm thuốc chống đông, thuốc tiêu sợi huyết và ống thông can thiệp, gây lãng phí 15-20 phút quý giá của người bệnh.",
    "soLieuBanDau": [
      "Thời gian chuẩn bị đầy đủ thuốc và dụng cụ can thiệp ngoài giờ hành chính: 18 - 22 phút.",
      "Tỷ lệ thiếu hoặc nhầm lẫn vật tư phụ trong ca can thiệp cấp cứu ban đêm: khoảng 12%.",
      "Nhân viên phải tìm kiếm tại 03 tủ thuốc và kho vật tư riêng biệt trong khoa.",
      "Thời gian Door-to-Balloon còn bị kéo dài do độ trễ ở khâu chuẩn bị dụng cụ."
    ],
    "fiveWhys": [
      {
        "level": "Why 1",
        "question": "Tại sao thời gian chuẩn bị thuốc và vật tư can thiệp STEMI bị kéo dài?",
        "answer": "Do thuốc chống đông và vật tư chuyên dụng được bố trí ở nhiều vị trí tủ khác nhau."
      },
      {
        "level": "Why 2",
        "question": "Tại sao thuốc và vật tư lại bố trí phân tán?",
        "answer": "Do cách sắp xếp truyền thống theo danh mục kế toán kho chứ không theo phác đồ cấp cứu bệnh học."
      },
      {
        "level": "Why 3",
        "question": "Tại sao không gom sẵn thành bộ cấp cứu chuyên biệt?",
        "answer": "Do chưa có quy định đóng gói đồng bộ và kiểm tra niêm phong định kỳ cho gói cấp cứu STEMI."
      },
      {
        "level": "Why 4",
        "question": "Tại sao kíp trực đêm dễ bị lúng túng khi lấy vật tư?",
        "answer": "Do áp lực khẩn cấp và thiếu bảng kiểm trực quan checklist một chạm tại phòng can thiệp."
      },
      {
        "level": "Why 5 (Cốt lõi)",
        "question": "NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Quy trình quản lý và cấp phát vật tư can thiệp chưa được thiết kế theo luồng tinh gọn Lean chuyên biệt cho bệnh cảnh cấp cứu tối khẩn cấp.",
        "answer": "Cần thiết lập mô hình Hộp Cấp cứu STEMI chuyên dụng (STEMI Emergency Box) kèm bảng kiểm trực quan."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Thời gian chuẩn bị đầy đủ thuốc và vật tư can thiệp",
        "hienTrang": "18 - 22 phút",
        "mucTieu": "Giảm còn dưới 3 phút",
        "phuongPhap": "Bấm giờ kích hoạt kíp cấp cứu"
      },
      {
        "chiTieu": "Tỷ lệ thiếu hoặc nhầm lẫn vật tư khi vào phòng mổ",
        "hienTrang": "Khoảng 12%",
        "mucTieu": "Giảm triệt để về 0%",
        "phuongPhap": "Biên bản kiểm tra an toàn phẫu thuật"
      },
      {
        "chiTieu": "Rút ngắn thời gian Door-to-Balloon toàn viện",
        "hienTrang": "Trung bình 65 phút",
        "mucTieu": "Xuống dưới 50 phút",
        "phuongPhap": "Thống kê bệnh án can thiệp mạch vành"
      },
      {
        "chiTieu": "Mức độ hài lòng của kíp bác sĩ can thiệp",
        "hienTrang": "Chưa đo lường",
        "mucTieu": "Đạt trên 95% hài lòng",
        "phuongPhap": "Khảo sát nội bộ nhân viên y tế"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Mô hình đóng gói chuẩn): Xây dựng mô hình “STEMI Emergency Box” chuyên dụng, tích hợp đầy đủ 100% thuốc chống đông, dây dẫn, ống thông can thiệp theo phác đồ chuẩn Bộ Y tế.",
      "Giải pháp 2 (Niêm phong và kiểm chuẩn): Áp dụng cơ chế niêm phong một lần (Security Seal); kiểm tra định kỳ mỗi ca trực theo bảng kiểm Checklist 1 trang trực quan.",
      "Giải pháp 3 (Vị trí chiến lược): Bố trí Hộp cấp cứu ngay tại cửa phòng can thiệp mạch DSA, thao tác mở và đưa vào sử dụng chỉ trong 30 giây.",
      "Giải pháp 4 (Quy trình hoàn nguyên nhanh): Phối hợp với Khoa Dược hoàn nguyên cơ số thuốc và vật tư đã sử dụng trong vòng 02 giờ sau ca can thiệp để sẵn sàng cho ca tiếp theo."
    ],
    "phamVi": "Áp dụng thử nghiệm tại Phòng Can thiệp Tim mạch - Khoa Tim Mạch.",
    "thoiGian": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
    "sanPhamDauRa": "02 Bộ STEMI Emergency Box hoàn chỉnh; Bảng kiểm Checklist trực quan và Quy trình thao tác chuẩn chuẩn bị can thiệp mạch vành cấp cứu.",
    "soHieuVanBan": "Số: 16/TB-QLCL-KAIZEN",
    "tongDiemThamDinh": 94,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "20 / 20",
        "nhanXet": "Đề án tác động trực tiếp đến thời gian vàng cứu sống người bệnh nhồi máu cơ tim cấp."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "23 / 25",
        "nhanXet": "Mô hình hộp cấp cứu đóng gói sẵn rất dễ triển khai, chi phí ban đầu gần như bằng không."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "23 / 20",
        "nhanXet": "Rút ngắn thời gian chuẩn bị từ 20 phút xuống dưới 3 phút, tối ưu hóa chỉ số Door-to-Balloon."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "14 / 15",
        "nhanXet": "Có thể nhân rộng mô hình hộp cấp cứu khẩn cấp cho Khoa Cấp cứu, ICU và Phòng Mổ."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "14 / 20",
        "nhanXet": "Ứng dụng phương pháp 5S và Lean y tế bài bản, khoa học và thực chất."
      }
    ],
    "ketLuanQLCL": "1. Phê duyệt Đề cương A3 cho nhóm tác giả KHOA TIM MẠCH để chính thức triển khai thử nghiệm thực tế đề án theo đúng kế hoạch cam kết.\r\n2. Đề nghị nhóm tác giả tuân thủ quy trình chuyên môn, theo dõi sát sao các chỉ số an toàn người bệnh và ghi nhận đầy đủ số liệu đo lường thực tế.\r\n3. Tổ QLCL sẽ phối hợp kiểm chuẩn và hỗ trợ đơn vị hoàn thiện Báo cáo Nghiệm thu A3 trước Vòng Chung kết Hội thi Kaizen 16 Năm.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-TIMMACH-01 02. Bản Đăng ký Sau Hiệu chỉnh Tim Mạch ĐD. Nguyễn Duy Hùng.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 7217
      },
      {
        "fileName": "KZ16-TIMMACH-01 03. Biên bản Thẩm định Tim Mạch ĐD. Nguyễn Duy Hùng.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 3851
      },
      {
        "fileName": "KZ16-TIMMACH-01 04. Đề cương A3 Triển khai Thực nghiệm Tim Mạch ĐD. Nguyễn Duy Hùng.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 5790
      }
    ],
    "quickSummary": {
      "idea": "Cải tiến quy trình chuẩn bị thuốc và vật tư can thiệp cấp cứu STEMI bằng mô hình STEMI Emergency Box tại Phòng Can thiệp Tim mạch",
      "painPoints": [
        "Thời gian chuẩn bị đầy đủ thuốc và dụng cụ can thiệp ngoài giờ hành chính: 18 - 22 phút.",
        "Tỷ lệ thiếu hoặc nhầm lẫn vật tư phụ trong ca can thiệp cấp cứu ban đêm: khoảng 12%.",
        "Nhân viên phải tìm kiếm tại 03 tủ thuốc và kho vật tư riêng biệt trong khoa."
      ],
      "solutions": [
        "Giải pháp 1 (Mô hình đóng gói chuẩn): Xây dựng mô hình “STEMI Emergency Box” chuyên dụng, tích hợp đầy đủ 100% thuốc chống đông, dây dẫn, ống thông can thiệp theo phác đồ chuẩn Bộ Y tế.",
        "Giải pháp 2 (Niêm phong và kiểm chuẩn): Áp dụng cơ chế niêm phong một lần (Security Seal); kiểm tra định kỳ mỗi ca trực theo bảng kiểm Checklist 1 trang trực quan.",
        "Giải pháp 3 (Vị trí chiến lược): Bố trí Hộp cấp cứu ngay tại cửa phòng can thiệp mạch DSA, thao tác mở và đưa vào sử dụng chỉ trong 30 giây."
      ],
      "keyMetrics": [
        {
          "label": "Thời gian chuẩn bị đầy đủ thuốc và vật...",
          "before": "18 - 22 phút",
          "after": "Giảm còn dưới 3 phút",
          "note": "Bấm giờ kích hoạt kíp cấp cứu"
        },
        {
          "label": "Tỷ lệ thiếu hoặc nhầm lẫn vật tư khi v...",
          "before": "Khoảng 12%",
          "after": "Giảm triệt để về 0%",
          "note": "Biên bản kiểm tra an toàn phẫu thuật"
        },
        {
          "label": "Rút ngắn thời gian Door-to-Balloon toà...",
          "before": "Trung bình 65 phút",
          "after": "Xuống dưới 50 phút",
          "note": "Thống kê bệnh án can thiệp mạch vành"
        },
        {
          "label": "Mức độ hài lòng của kíp bác sĩ can thiệp",
          "before": "Chưa đo lường",
          "after": "Đạt trên 95% hài lòng",
          "note": "Khảo sát nội bộ nhân viên y tế"
        }
      ]
    },
    "a3Report": {
      "title": "Cải tiến quy trình chuẩn bị thuốc và vật tư can thiệp cấp cứu STEMI bằng mô hình STEMI Emergency Box tại Phòng Can thiệp Tim mạch",
      "department": "KHOA TIM MẠCH",
      "leader": "ĐD. Nguyễn Duy Hùng",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Nhồi máu cơ tim cấp có ST chênh lên (STEMI) là tình trạng cấp cứu khẩn cấp đòi hỏi tái thông mạch vành trong thời gian vàng. Tuy nhiên, ngoài giờ hành chính, điều dưỡng phải di chuyển qua nhiều tủ thuốc và kho vật tư khác nhau để tìm kiếm thuốc chống đông, thuốc tiêu sợi huyết và ống thông can thiệp, gây lãng phí 15-20 phút quý giá của người bệnh.",
      "currentCondition": "Thời gian chuẩn bị đầy đủ thuốc và dụng cụ can thiệp ngoài giờ hành chính: 18 - 22 phút.\n• Tỷ lệ thiếu hoặc nhầm lẫn vật tư phụ trong ca can thiệp cấp cứu ban đêm: khoảng 12%.\n• Nhân viên phải tìm kiếm tại 03 tủ thuốc và kho vật tư riêng biệt trong khoa.\n• Thời gian Door-to-Balloon còn bị kéo dài do độ trễ ở khâu chuẩn bị dụng cụ.",
      "targetCondition": "• Thời gian chuẩn bị đầy đủ thuốc và vật tư can thiệp: Hiện trạng 18 - 22 phút ➔ Cam kết đạt Giảm còn dưới 3 phút\n• Tỷ lệ thiếu hoặc nhầm lẫn vật tư khi vào phòng mổ: Hiện trạng Khoảng 12% ➔ Cam kết đạt Giảm triệt để về 0%\n• Rút ngắn thời gian Door-to-Balloon toàn viện: Hiện trạng Trung bình 65 phút ➔ Cam kết đạt Xuống dưới 50 phút\n• Mức độ hài lòng của kíp bác sĩ can thiệp: Hiện trạng Chưa đo lường ➔ Cam kết đạt Đạt trên 95% hài lòng",
      "rootCauseAnalysis": "Why 1: Tại sao thời gian chuẩn bị thuốc và vật tư can thiệp STEMI bị kéo dài? ➔ Do thuốc chống đông và vật tư chuyên dụng được bố trí ở nhiều vị trí tủ khác nhau.\nWhy 2: Tại sao thuốc và vật tư lại bố trí phân tán? ➔ Do cách sắp xếp truyền thống theo danh mục kế toán kho chứ không theo phác đồ cấp cứu bệnh học.\nWhy 3: Tại sao không gom sẵn thành bộ cấp cứu chuyên biệt? ➔ Do chưa có quy định đóng gói đồng bộ và kiểm tra niêm phong định kỳ cho gói cấp cứu STEMI.\nWhy 4: Tại sao kíp trực đêm dễ bị lúng túng khi lấy vật tư? ➔ Do áp lực khẩn cấp và thiếu bảng kiểm trực quan checklist một chạm tại phòng can thiệp.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Quy trình quản lý và cấp phát vật tư can thiệp chưa được thiết kế theo luồng tinh gọn Lean chuyên biệt cho bệnh cảnh cấp cứu tối khẩn cấp. ➔ Cần thiết lập mô hình Hộp Cấp cứu STEMI chuyên dụng (STEMI Emergency Box) kèm bảng kiểm trực quan.",
      "countermeasures": "• Giải pháp 1 (Mô hình đóng gói chuẩn): Xây dựng mô hình “STEMI Emergency Box” chuyên dụng, tích hợp đầy đủ 100% thuốc chống đông, dây dẫn, ống thông can thiệp theo phác đồ chuẩn Bộ Y tế.\n• Giải pháp 2 (Niêm phong và kiểm chuẩn): Áp dụng cơ chế niêm phong một lần (Security Seal); kiểm tra định kỳ mỗi ca trực theo bảng kiểm Checklist 1 trang trực quan.\n• Giải pháp 3 (Vị trí chiến lược): Bố trí Hộp cấp cứu ngay tại cửa phòng can thiệp mạch DSA, thao tác mở và đưa vào sử dụng chỉ trong 30 giây.\n• Giải pháp 4 (Quy trình hoàn nguyên nhanh): Phối hợp với Khoa Dược hoàn nguyên cơ số thuốc và vật tư đã sử dụng trong vòng 02 giờ sau ca can thiệp để sẵn sàng cho ca tiếp theo.",
      "planImplementation": "Khu vực: Áp dụng thử nghiệm tại Phòng Can thiệp Tim mạch - Khoa Tim Mạch.\nThời gian: Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.\nSản phẩm đầu ra: 02 Bộ STEMI Emergency Box hoàn chỉnh; Bảng kiểm Checklist trực quan và Quy trình thao tác chuẩn chuẩn bị can thiệp mạch vành cấp cứu.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại KHOA TIM MẠCH; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "Thời gian chuẩn bị đầy đủ thuốc và dụng cụ can thiệp ngoài giờ hành chính: 18 - 22 phút.\n• Tỷ lệ thiếu hoặc nhầm lẫn vật tư phụ trong ca can thiệp cấp cứu ban đêm: khoảng 12%.\n• Nhân viên phải tìm kiếm tại 03 tủ thuốc và kho vật tư riêng biệt trong khoa.\n• Thời gian Door-to-Balloon còn bị kéo dài do độ trễ ở khâu chuẩn bị dụng cụ.",
      "smartGoal": "• Thời gian chuẩn bị đầy đủ thuốc và vật tư can thiệp: Hiện trạng 18 - 22 phút ➔ Cam kết đạt Giảm còn dưới 3 phút\n• Tỷ lệ thiếu hoặc nhầm lẫn vật tư khi vào phòng mổ: Hiện trạng Khoảng 12% ➔ Cam kết đạt Giảm triệt để về 0%\n• Rút ngắn thời gian Door-to-Balloon toàn viện: Hiện trạng Trung bình 65 phút ➔ Cam kết đạt Xuống dưới 50 phút\n• Mức độ hài lòng của kíp bác sĩ can thiệp: Hiện trạng Chưa đo lường ➔ Cam kết đạt Đạt trên 95% hài lòng",
      "rootCause": "Why 1: Tại sao thời gian chuẩn bị thuốc và vật tư can thiệp STEMI bị kéo dài? ➔ Do thuốc chống đông và vật tư chuyên dụng được bố trí ở nhiều vị trí tủ khác nhau.\nWhy 2: Tại sao thuốc và vật tư lại bố trí phân tán? ➔ Do cách sắp xếp truyền thống theo danh mục kế toán kho chứ không theo phác đồ cấp cứu bệnh học.\nWhy 3: Tại sao không gom sẵn thành bộ cấp cứu chuyên biệt? ➔ Do chưa có quy định đóng gói đồng bộ và kiểm tra niêm phong định kỳ cho gói cấp cứu STEMI.\nWhy 4: Tại sao kíp trực đêm dễ bị lúng túng khi lấy vật tư? ➔ Do áp lực khẩn cấp và thiếu bảng kiểm trực quan checklist một chạm tại phòng can thiệp.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Quy trình quản lý và cấp phát vật tư can thiệp chưa được thiết kế theo luồng tinh gọn Lean chuyên biệt cho bệnh cảnh cấp cứu tối khẩn cấp. ➔ Cần thiết lập mô hình Hộp Cấp cứu STEMI chuyên dụng (STEMI Emergency Box) kèm bảng kiểm trực quan.",
      "resultsBeforeAfter": [
        {
          "metric": "Thời gian chuẩn bị đầy đủ thuốc và vật tư can thiệp",
          "before": "18 - 22 phút",
          "after": "Giảm còn dưới 3 phút"
        },
        {
          "metric": "Tỷ lệ thiếu hoặc nhầm lẫn vật tư khi vào phòng mổ",
          "before": "Khoảng 12%",
          "after": "Giảm triệt để về 0%"
        },
        {
          "metric": "Rút ngắn thời gian Door-to-Balloon toàn viện",
          "before": "Trung bình 65 phút",
          "after": "Xuống dưới 50 phút"
        },
        {
          "metric": "Mức độ hài lòng của kíp bác sĩ can thiệp",
          "before": "Chưa đo lường",
          "after": "Đạt trên 95% hài lòng"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 94/100đ (ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Áp dụng thử nghiệm tại Phòng Can thiệp Tim mạch - Khoa Tim Mạch.",
        "time": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "ĐD. Nguyễn Duy Hùng",
    "nhomTacGia": "ĐD. Nguyễn Duy Hùng, ĐD. Nguyễn Việt Hưng, ĐD. Nguyễn Mạnh Hùng, ĐD. Lê Minh Thắng, ĐD. Nguyễn Phạm Quốc Anh",
    "diemBanDau": "94"
  },
  {
    "maDeTai": "KZ16-NOISOI-01",
    "tenDeTai": "Cải tiến quy trình đặt Endoloop trong môi trường nước hỗ trợ cắt polyp đại trực tràng có cuống",
    "tenSanPham": "Cải tiến quy trình đặt Endoloop trong môi trường nước hỗ trợ cắt polyp đại trực tràng có cuống",
    "khoaPhong": "TRUNG TÂM TIÊU HÓA",
    "khoaPhoiHop": "",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 2: An toàn người bệnh và phòng ngừa sai sót lâm sàng (Nâng cao an toàn thủ thuật can thiệp tiêu hóa).",
    "tacGia": "KTV Trưởng Vi Ngọc Tùng",
    "authorsDetailed": [
      {
        "name": "KTV Trưởng Vi Ngọc Tùng",
        "title": "Kỹ thuật viên trưởng Trung tâm Tiêu hóa",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)",
        "stt": "1",
        "hoTen": "KTV Trưởng Vi Ngọc Tùng",
        "chucVu": "Kỹ thuật viên trưởng Trung tâm Tiêu hóa",
        "vaiTro": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "BS. Lò Thị Bích Thùy",
        "title": "Bác sĩ Nội soi tiêu hóa",
        "role": "Thành viên nghiên cứu kỹ thuật",
        "stt": "2",
        "hoTen": "BS. Lò Thị Bích Thùy",
        "chucVu": "Bác sĩ Nội soi tiêu hóa",
        "vaiTro": "Thành viên nghiên cứu kỹ thuật"
      },
      {
        "name": "BS. Lò Thị Thu Huyền",
        "title": "Bác sĩ Nội soi tiêu hóa",
        "role": "Thành viên nghiên cứu kỹ thuật",
        "stt": "3",
        "hoTen": "BS. Lò Thị Thu Huyền",
        "chucVu": "Bác sĩ Nội soi tiêu hóa",
        "vaiTro": "Thành viên nghiên cứu kỹ thuật"
      },
      {
        "name": "ĐD. Nguyễn Thu Hằng",
        "title": "Điều dưỡng viên Nội soi",
        "role": "Thành viên phụ tá thủ thuật",
        "stt": "4",
        "hoTen": "ĐD. Nguyễn Thu Hằng",
        "chucVu": "Điều dưỡng viên Nội soi",
        "vaiTro": "Thành viên phụ tá thủ thuật"
      }
    ],
    "thucTrang": "Polyp đại trực tràng có cuống lớn tiềm ẩn nguy cơ chảy máu ồ ạt trong và sau thủ thuật cắt polyp. Kỹ thuật đặt thòng lọng Endoloop truyền thống trong môi trường bơm khí thông thường rất dễ bị tuột, trượt thắt do niêm mạc đại tràng bị căng giãn quá mức và cuống polyp bị kéo dẹt, gây khó khăn cho bác sĩ và kéo dài thời gian thủ thuật.",
    "soLieuBanDau": [
      "Tỷ lệ đặt Endoloop thành công ngay lần đầu trong môi trường bơm khí đạt khoảng 68%.",
      "Thời gian thao tác luồn và siết loop trung bình mất từ 12 đến 15 phút/ca.",
      "Tỷ lệ polyp bị trượt thòng lọng phải thao tác lại: chiếm khoảng 25% tổng số ca can thiệp.",
      "Tiềm ẩn nguy cơ chảy máu cuống polyp phải can thiệp kẹp clip cầm máu bổ sung."
    ],
    "fiveWhys": [
      {
        "level": "Why 1",
        "question": "Tại sao thòng lọng Endoloop dễ bị tuột khỏi cuống polyp?",
        "answer": "Do cuống polyp trơn trượt và thành đại tràng co bóp liên tục khi bơm khí carbonic."
      },
      {
        "level": "Why 2",
        "question": "Tại sao bơm khí làm cuống polyp khó thắt chặt?",
        "answer": "Do áp lực khí làm lòng đại tràng giãn căng, kéo dẹt cuống polyp vào sát thành ruột."
      },
      {
        "level": "Why 3",
        "question": "Tại sao không bơm nước để cuống polyp nổi tự nhiên?",
        "answer": "Do trước đây chưa có quy trình chuẩn hóa kiểm soát thể tích nước bơm rửa trong lòng ruột."
      },
      {
        "level": "Why 4",
        "question": "Tại sao điều dưỡng phụ tá khó phối hợp siết loop chuẩn xác?",
        "answer": "Do thiếu quy chuẩn phối hợp khẩu lệnh và thao tác đồng thì giữa bác sĩ nội soi và phụ tá."
      },
      {
        "level": "Why 5 (Cốt lõi)",
        "question": "NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Chưa ban hành quy trình kỹ thuật chuẩn hóa kết hợp giữa phương pháp nội soi ngập nước và kỹ thuật thắt Endoloop an toàn.",
        "answer": "Cần chuẩn hóa quy trình thao tác chuẩn (SOP) cắt polyp ngập nước có hỗ trợ thắt loop chống chảy máu."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Tỷ lệ đặt thắt Endoloop thành công ngay lần đầu",
        "hienTrang": "Khoảng 68%",
        "mucTieu": "Tăng lên trên 95%",
        "phuongPhap": "Biên bản thủ thuật nội soi can thiệp"
      },
      {
        "chiTieu": "Thời gian thao tác đặt loop trung bình",
        "hienTrang": "12 - 15 phút / ca",
        "mucTieu": "Rút ngắn còn dưới 5 phút",
        "phuongPhap": "Bấm giờ thủ thuật can thiệp"
      },
      {
        "chiTieu": "Tỷ lệ biến chứng chảy máu sau cắt polyp cuống lớn",
        "hienTrang": "Tiềm ẩn nguy cơ",
        "mucTieu": "Triệt tiêu về 0 vụ",
        "phuongPhap": "Theo dõi tái khám và hồ sơ bệnh án"
      },
      {
        "chiTieu": "Chi phí can thiệp clip cầm máu bổ sung",
        "hienTrang": "Phát sinh thêm clip",
        "mucTieu": "Tiết kiệm 100% chi phí clip",
        "phuongPhap": "Thống kê tiêu hao vật tư can thiệp"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Kỹ thuật nội soi ngập nước): Ứng dụng kỹ thuật bơm nước cất ấm làm ngập đoạn đại tràng có polyp, giúp cuống polyp nổi tự do trong nước, giảm độ căng của thành ruột.",
      "Giải pháp 2 (Chuẩn hóa thao tác siết loop): Thiết lập quy trình thao tác chuẩn định vị thòng lọng Endoloop cách gốc cuống polyp 3mm trước khi siết chặt, bảo đảm thắt nghẽn mạch máu nuôi polyp.",
      "Giải pháp 3 (Bảng kiểm phối hợp đồng thì): Ban hành bảng kiểm khẩu lệnh phối hợp giữa Bác sĩ điều khiển dây soi và Điều dưỡng phụ tá siết dây cước.",
      "Giải pháp 4 (Đào tạo thực hành mô hình): Tổ chức huấn luyện kỹ năng luồn loop trong nước trên mô hình nhân tạo cho toàn bộ kíp can thiệp tiêu hóa."
    ],
    "phamVi": "Thực hiện thử nghiệm tại Phòng Can thiệp Tiêu hóa - Trung tâm Tiêu hóa.",
    "thoiGian": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
    "sanPhamDauRa": "01 Quy trình Vận hành Chuẩn (SOP) đặt Endoloop trong môi trường nước; Video clip ghi hình ca thủ thuật mẫu và Báo cáo nghiệm thu kết quả lâm sàng.",
    "soHieuVanBan": "Số: 16/TB-QLCL-KAIZEN",
    "tongDiemThamDinh": 92,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "19 / 20",
        "nhanXet": "Cắt polyp an toàn, phòng ngừa chảy máu và thủng ruột là tiêu chí chất lượng hàng đầu của nội soi tiêu hóa."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "23 / 25",
        "nhanXet": "Kỹ thuật ứng dụng hạ tầng máy nội soi hiện có, không làm phát sinh chi phí đầu tư thiết bị mới."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "23 / 20",
        "nhanXet": "Tăng tỷ lệ thành công lên 95%, rút ngắn thời gian thủ thuật và triệt tiêu nguy cơ chảy máu."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "14 / 15",
        "nhanXet": "Có thể chuẩn hóa thành quy trình kỹ thuật áp dụng cho toàn hệ thống phòng khám và bệnh viện vệ tinh."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "13 / 20",
        "nhanXet": "Kết hợp sáng tạo giữa kỹ thuật nội soi ngập nước và thắt vòng cao su chống chảy máu."
      }
    ],
    "ketLuanQLCL": "1. Phê duyệt Đề cương A3 cho nhóm tác giả TRUNG TÂM TIÊU HÓA để chính thức triển khai thử nghiệm thực tế đề án theo đúng kế hoạch cam kết.\r\n2. Đề nghị nhóm tác giả tuân thủ quy trình chuyên môn, theo dõi sát sao các chỉ số an toàn người bệnh và ghi nhận đầy đủ số liệu đo lường thực tế.\r\n3. Tổ QLCL sẽ phối hợp kiểm chuẩn và hỗ trợ đơn vị hoàn thiện Báo cáo Nghiệm thu A3 trước Vòng Chung kết Hội thi Kaizen 16 Năm.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-NOISOI-01 02. Bản Đăng ký Sau Hiệu chỉnh Tiêu Hóa KTV Trưởng Vi Ngọc Tùng.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 6967
      },
      {
        "fileName": "KZ16-NOISOI-01 03. Biên bản Thẩm định Tiêu Hóa KTV Trưởng Vi Ngọc Tùng.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 3879
      },
      {
        "fileName": "KZ16-NOISOI-01 04. Đề cương A3 Triển khai Thực nghiệm Tiêu Hóa KTV Trưởng Vi Ngọc Tùng.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 5607
      }
    ],
    "quickSummary": {
      "idea": "Cải tiến quy trình đặt Endoloop trong môi trường nước hỗ trợ cắt polyp đại trực tràng có cuống",
      "painPoints": [
        "Tỷ lệ đặt Endoloop thành công ngay lần đầu trong môi trường bơm khí đạt khoảng 68%.",
        "Thời gian thao tác luồn và siết loop trung bình mất từ 12 đến 15 phút/ca.",
        "Tỷ lệ polyp bị trượt thòng lọng phải thao tác lại: chiếm khoảng 25% tổng số ca can thiệp."
      ],
      "solutions": [
        "Giải pháp 1 (Kỹ thuật nội soi ngập nước): Ứng dụng kỹ thuật bơm nước cất ấm làm ngập đoạn đại tràng có polyp, giúp cuống polyp nổi tự do trong nước, giảm độ căng của thành ruột.",
        "Giải pháp 2 (Chuẩn hóa thao tác siết loop): Thiết lập quy trình thao tác chuẩn định vị thòng lọng Endoloop cách gốc cuống polyp 3mm trước khi siết chặt, bảo đảm thắt nghẽn mạch máu nuôi polyp.",
        "Giải pháp 3 (Bảng kiểm phối hợp đồng thì): Ban hành bảng kiểm khẩu lệnh phối hợp giữa Bác sĩ điều khiển dây soi và Điều dưỡng phụ tá siết dây cước."
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ đặt thắt Endoloop thành công nga...",
          "before": "Khoảng 68%",
          "after": "Tăng lên trên 95%",
          "note": "Biên bản thủ thuật nội soi can thiệp"
        },
        {
          "label": "Thời gian thao tác đặt loop trung bình",
          "before": "12 - 15 phút / ca",
          "after": "Rút ngắn còn dưới 5 phút",
          "note": "Bấm giờ thủ thuật can thiệp"
        },
        {
          "label": "Tỷ lệ biến chứng chảy máu sau cắt poly...",
          "before": "Tiềm ẩn nguy cơ",
          "after": "Triệt tiêu về 0 vụ",
          "note": "Theo dõi tái khám và hồ sơ bệnh án"
        },
        {
          "label": "Chi phí can thiệp clip cầm máu bổ sung",
          "before": "Phát sinh thêm clip",
          "after": "Tiết kiệm 100% chi phí clip",
          "note": "Thống kê tiêu hao vật tư can thiệp"
        }
      ]
    },
    "a3Report": {
      "title": "Cải tiến quy trình đặt Endoloop trong môi trường nước hỗ trợ cắt polyp đại trực tràng có cuống",
      "department": "TRUNG TÂM TIÊU HÓA",
      "leader": "KTV Trưởng Vi Ngọc Tùng",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Polyp đại trực tràng có cuống lớn tiềm ẩn nguy cơ chảy máu ồ ạt trong và sau thủ thuật cắt polyp. Kỹ thuật đặt thòng lọng Endoloop truyền thống trong môi trường bơm khí thông thường rất dễ bị tuột, trượt thắt do niêm mạc đại tràng bị căng giãn quá mức và cuống polyp bị kéo dẹt, gây khó khăn cho bác sĩ và kéo dài thời gian thủ thuật.",
      "currentCondition": "Tỷ lệ đặt Endoloop thành công ngay lần đầu trong môi trường bơm khí đạt khoảng 68%.\n• Thời gian thao tác luồn và siết loop trung bình mất từ 12 đến 15 phút/ca.\n• Tỷ lệ polyp bị trượt thòng lọng phải thao tác lại: chiếm khoảng 25% tổng số ca can thiệp.\n• Tiềm ẩn nguy cơ chảy máu cuống polyp phải can thiệp kẹp clip cầm máu bổ sung.",
      "targetCondition": "• Tỷ lệ đặt thắt Endoloop thành công ngay lần đầu: Hiện trạng Khoảng 68% ➔ Cam kết đạt Tăng lên trên 95%\n• Thời gian thao tác đặt loop trung bình: Hiện trạng 12 - 15 phút / ca ➔ Cam kết đạt Rút ngắn còn dưới 5 phút\n• Tỷ lệ biến chứng chảy máu sau cắt polyp cuống lớn: Hiện trạng Tiềm ẩn nguy cơ ➔ Cam kết đạt Triệt tiêu về 0 vụ\n• Chi phí can thiệp clip cầm máu bổ sung: Hiện trạng Phát sinh thêm clip ➔ Cam kết đạt Tiết kiệm 100% chi phí clip",
      "rootCauseAnalysis": "Why 1: Tại sao thòng lọng Endoloop dễ bị tuột khỏi cuống polyp? ➔ Do cuống polyp trơn trượt và thành đại tràng co bóp liên tục khi bơm khí carbonic.\nWhy 2: Tại sao bơm khí làm cuống polyp khó thắt chặt? ➔ Do áp lực khí làm lòng đại tràng giãn căng, kéo dẹt cuống polyp vào sát thành ruột.\nWhy 3: Tại sao không bơm nước để cuống polyp nổi tự nhiên? ➔ Do trước đây chưa có quy trình chuẩn hóa kiểm soát thể tích nước bơm rửa trong lòng ruột.\nWhy 4: Tại sao điều dưỡng phụ tá khó phối hợp siết loop chuẩn xác? ➔ Do thiếu quy chuẩn phối hợp khẩu lệnh và thao tác đồng thì giữa bác sĩ nội soi và phụ tá.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Chưa ban hành quy trình kỹ thuật chuẩn hóa kết hợp giữa phương pháp nội soi ngập nước và kỹ thuật thắt Endoloop an toàn. ➔ Cần chuẩn hóa quy trình thao tác chuẩn (SOP) cắt polyp ngập nước có hỗ trợ thắt loop chống chảy máu.",
      "countermeasures": "• Giải pháp 1 (Kỹ thuật nội soi ngập nước): Ứng dụng kỹ thuật bơm nước cất ấm làm ngập đoạn đại tràng có polyp, giúp cuống polyp nổi tự do trong nước, giảm độ căng của thành ruột.\n• Giải pháp 2 (Chuẩn hóa thao tác siết loop): Thiết lập quy trình thao tác chuẩn định vị thòng lọng Endoloop cách gốc cuống polyp 3mm trước khi siết chặt, bảo đảm thắt nghẽn mạch máu nuôi polyp.\n• Giải pháp 3 (Bảng kiểm phối hợp đồng thì): Ban hành bảng kiểm khẩu lệnh phối hợp giữa Bác sĩ điều khiển dây soi và Điều dưỡng phụ tá siết dây cước.\n• Giải pháp 4 (Đào tạo thực hành mô hình): Tổ chức huấn luyện kỹ năng luồn loop trong nước trên mô hình nhân tạo cho toàn bộ kíp can thiệp tiêu hóa.",
      "planImplementation": "Khu vực: Thực hiện thử nghiệm tại Phòng Can thiệp Tiêu hóa - Trung tâm Tiêu hóa.\nThời gian: Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.\nSản phẩm đầu ra: 01 Quy trình Vận hành Chuẩn (SOP) đặt Endoloop trong môi trường nước; Video clip ghi hình ca thủ thuật mẫu và Báo cáo nghiệm thu kết quả lâm sàng.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại TRUNG TÂM TIÊU HÓA; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "Tỷ lệ đặt Endoloop thành công ngay lần đầu trong môi trường bơm khí đạt khoảng 68%.\n• Thời gian thao tác luồn và siết loop trung bình mất từ 12 đến 15 phút/ca.\n• Tỷ lệ polyp bị trượt thòng lọng phải thao tác lại: chiếm khoảng 25% tổng số ca can thiệp.\n• Tiềm ẩn nguy cơ chảy máu cuống polyp phải can thiệp kẹp clip cầm máu bổ sung.",
      "smartGoal": "• Tỷ lệ đặt thắt Endoloop thành công ngay lần đầu: Hiện trạng Khoảng 68% ➔ Cam kết đạt Tăng lên trên 95%\n• Thời gian thao tác đặt loop trung bình: Hiện trạng 12 - 15 phút / ca ➔ Cam kết đạt Rút ngắn còn dưới 5 phút\n• Tỷ lệ biến chứng chảy máu sau cắt polyp cuống lớn: Hiện trạng Tiềm ẩn nguy cơ ➔ Cam kết đạt Triệt tiêu về 0 vụ\n• Chi phí can thiệp clip cầm máu bổ sung: Hiện trạng Phát sinh thêm clip ➔ Cam kết đạt Tiết kiệm 100% chi phí clip",
      "rootCause": "Why 1: Tại sao thòng lọng Endoloop dễ bị tuột khỏi cuống polyp? ➔ Do cuống polyp trơn trượt và thành đại tràng co bóp liên tục khi bơm khí carbonic.\nWhy 2: Tại sao bơm khí làm cuống polyp khó thắt chặt? ➔ Do áp lực khí làm lòng đại tràng giãn căng, kéo dẹt cuống polyp vào sát thành ruột.\nWhy 3: Tại sao không bơm nước để cuống polyp nổi tự nhiên? ➔ Do trước đây chưa có quy trình chuẩn hóa kiểm soát thể tích nước bơm rửa trong lòng ruột.\nWhy 4: Tại sao điều dưỡng phụ tá khó phối hợp siết loop chuẩn xác? ➔ Do thiếu quy chuẩn phối hợp khẩu lệnh và thao tác đồng thì giữa bác sĩ nội soi và phụ tá.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Chưa ban hành quy trình kỹ thuật chuẩn hóa kết hợp giữa phương pháp nội soi ngập nước và kỹ thuật thắt Endoloop an toàn. ➔ Cần chuẩn hóa quy trình thao tác chuẩn (SOP) cắt polyp ngập nước có hỗ trợ thắt loop chống chảy máu.",
      "resultsBeforeAfter": [
        {
          "metric": "Tỷ lệ đặt thắt Endoloop thành công ngay lần đầu",
          "before": "Khoảng 68%",
          "after": "Tăng lên trên 95%"
        },
        {
          "metric": "Thời gian thao tác đặt loop trung bình",
          "before": "12 - 15 phút / ca",
          "after": "Rút ngắn còn dưới 5 phút"
        },
        {
          "metric": "Tỷ lệ biến chứng chảy máu sau cắt polyp cuống lớn",
          "before": "Tiềm ẩn nguy cơ",
          "after": "Triệt tiêu về 0 vụ"
        },
        {
          "metric": "Chi phí can thiệp clip cầm máu bổ sung",
          "before": "Phát sinh thêm clip",
          "after": "Tiết kiệm 100% chi phí clip"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 92/100đ (ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Thực hiện thử nghiệm tại Phòng Can thiệp Tiêu hóa - Trung tâm Tiêu hóa.",
        "time": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "KTV Trưởng Vi Ngọc Tùng",
    "nhomTacGia": "KTV Trưởng Vi Ngọc Tùng, BS. Lò Thị Bích Thùy, BS. Lò Thị Thu Huyền, ĐD. Nguyễn Thu Hằng",
    "diemBanDau": "92"
  },
  {
    "maDeTai": "KZ16-XN-01",
    "tenDeTai": "Ứng dụng tính năng cảnh báo sớm thời gian thực và báo cáo tự động người bệnh trả kết quả muộn trên hệ thống HIS tại Khoa Xét nghiệm",
    "tenSanPham": "Ứng dụng tính năng cảnh báo sớm thời gian thực và báo cáo tự động người bệnh trả kết quả muộn trên hệ thống HIS tại Khoa Xét nghiệm",
    "khoaPhong": "KHOA XÉT NGHIỆM",
    "khoaPhoiHop": "Phòng Công nghệ Thông tin",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 5: Chuyển đổi số và ứng dụng bệnh viện thông minh (Tối ưu hóa thời gian trả kết quả cận lâm sàng).",
    "tacGia": "CN. Nguyễn Quang Trường",
    "authorsDetailed": [
      {
        "name": "CN. Nguyễn Quang Trường",
        "title": "Cử nhân Xét nghiệm",
        "role": "Tác giả đề án (Chủ nhiệm)",
        "stt": "1",
        "hoTen": "CN. Nguyễn Quang Trường",
        "chucVu": "Cử nhân Xét nghiệm",
        "vaiTro": "Tác giả đề án (Chủ nhiệm)"
      },
      {
        "name": "KS. Lê Đức Thịnh",
        "title": "Kỹ sư Phòng CNTT",
        "role": "Phụ trách kỹ thuật phần mềm HIS",
        "stt": "2",
        "hoTen": "KS. Lê Đức Thịnh",
        "chucVu": "Kỹ sư Phòng CNTT",
        "vaiTro": "Phụ trách kỹ thuật phần mềm HIS"
      },
      {
        "name": "KTV. Trần Văn Tuấn",
        "title": "Kỹ thuật viên Xét nghiệm",
        "role": "Thành viên thực hiện thử nghiệm",
        "stt": "3",
        "hoTen": "KTV. Trần Văn Tuấn",
        "chucVu": "Kỹ thuật viên Xét nghiệm",
        "vaiTro": "Thành viên thực hiện thử nghiệm"
      }
    ],
    "thucTrang": "Vào các khung giờ cao điểm buổi sáng, lượng mẫu bệnh phẩm dồn ứ lớn. Một số mẫu xét nghiệm bị chậm trễ do phải chạy lại kiểm tra hoặc nghẽn ở khâu ly tâm nhưng kỹ thuật viên không bao quát được trên phần mềm LIS, dẫn đến người bệnh ngoại trú phải chờ đợi quá giờ hẹn gây bức xúc và khiếu nại.",
    "soLieuBanDau": [
      "Tỷ lệ mẫu xét nghiệm bị trả trễ hẹn vào giờ cao điểm: chiếm khoảng 18 - 22%.",
      "Thời gian phát hiện một mẫu bệnh phẩm bị chậm trễ: trung bình 35 phút sau giờ hẹn.",
      "Kỹ thuật viên phải lọc tìm thủ công trên danh sách hàng trăm bệnh nhân trên phần mềm.",
      "Tỷ lệ người bệnh thắc mắc về thời gian chờ kết quả xét nghiệm còn ở mức cao."
    ],
    "fiveWhys": [
      {
        "level": "Why 1",
        "question": "Tại sao người bệnh bị nhận kết quả xét nghiệm muộn hơn giờ hẹn trên phiếu?",
        "answer": "Do một số mẫu bệnh phẩm bị nghẽn ở khâu ly tâm hoặc cần kiểm tra lại kết quả bất thường."
      },
      {
        "level": "Why 2",
        "question": "Tại sao nhân viên xét nghiệm không phát hiện sớm mẫu bệnh phẩm bị nghẽn?",
        "answer": "Do màn hình phần mềm LIS hiện tại chỉ hiển thị danh sách dạng bảng tĩnh, không có màu sắc cảnh báo."
      },
      {
        "level": "Why 3",
        "question": "Tại sao không cài đặt cơ chế cảnh báo tự động?",
        "answer": "Do phần mềm chưa được lập trình tính năng đếm ngược thời gian cam kết trả kết quả theo từng loại xét nghiệm."
      },
      {
        "level": "Why 4",
        "question": "Tại sao lãnh đạo khoa không nắm được để điều chuyển nhân lực kịp thời?",
        "answer": "Do thiếu báo cáo tự động tổng hợp các ca chậm muộn theo thời gian thực gửi đến trưởng kíp."
      },
      {
        "level": "Why 5 (Cốt lõi)",
        "question": "NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Hệ thống thông tin xét nghiệm LIS/HIS thiếu tính năng kiểm soát thời gian quay vòng mẫu (TAT) bằng công nghệ cảnh báo sớm thời gian thực.",
        "answer": "Cần lập trình module cảnh báo thông minh đổi màu thị giác và thông báo tự động trên phần mềm HIS."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Tỷ lệ mẫu trả kết quả đúng giờ hẹn cam kết",
        "hienTrang": "78 - 82%",
        "mucTieu": "Nâng lên trên 98%",
        "phuongPhap": "Trích xuất nhật ký hệ thống LIS/HIS"
      },
      {
        "chiTieu": "Thời gian phát hiện mẫu có nguy cơ trễ hạn",
        "hienTrang": "Sau giờ hẹn 35 phút",
        "mucTieu": "Cảnh báo trước 15 phút",
        "phuongPhap": "Nhật ký cảnh báo phần mềm"
      },
      {
        "chiTieu": "Số lượt khiếu nại của người bệnh về chờ xét nghiệm",
        "hienTrang": "Còn phát sinh",
        "mucTieu": "Giảm trên 90% số vụ",
        "phuongPhap": "Sổ theo dõi ý kiến người bệnh"
      },
      {
        "chiTieu": "Báo cáo tự động ca chậm muộn gửi lãnh đạo",
        "hienTrang": "Chưa có",
        "mucTieu": "Cập nhật mỗi 30 phút",
        "phuongPhap": "Bảng điều khiển quản trị khoa"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Lập trình đếm ngược SLA): Phối hợp với Phòng CNTT lập trình thuật toán đếm ngược thời gian cam kết trả kết quả cho từng loại xét nghiệm (Huyết học 45 phút, Sinh hóa 60 phút).",
      "Giải pháp 2 (Cảnh báo thị giác 3 cấp độ): Hiển thị màu sắc trực quan trên màn hình máy tính: Màu Xanh (Đúng tiến độ), Màu Vàng (Còn 15 phút), Màu Đỏ nhấp nháy (Quá hạn).",
      "Giải pháp 3 (Thông báo tự động đẩy): Tự động gửi thông báo tin nhắn trên phần mềm HIS đến màn hình kíp trưởng khi phát hiện mẫu bệnh phẩm chuyển sang màu Đỏ.",
      "Giải pháp 4 (Bảng điều khiển thời gian thực): Thiết lập màn hình Dashboard tổng quan tại phòng hành chính khoa hiển thị số lượng mẫu đang chờ theo từng phòng máy."
    ],
    "phamVi": "Triển khai thử nghiệm tại Phân hệ Tiếp nhận và Chạy mẫu Sinh hóa - Huyết học thuộc Khoa Xét nghiệm.",
    "thoiGian": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
    "sanPhamDauRa": "Module cảnh báo sớm vận hành ổn định trên phần mềm HIS; Báo cáo thống kê thời gian quay vòng mẫu tự động và Quy trình xử lý mẫu báo động Đỏ.",
    "soHieuVanBan": "Số: 16/TB-QLCL-KAIZEN",
    "tongDiemThamDinh": 88,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "18 / 20",
        "nhanXet": "Giải quyết điểm nghẽn lớn nhất trong thời gian chờ đợi khám bệnh ngoại trú."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "22 / 25",
        "nhanXet": "Tận dụng mã nguồn phần mềm HIS nội bộ, chi phí triển khai thấp và linh hoạt."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "22 / 20",
        "nhanXet": "Nâng tỷ lệ đúng hẹn lên 98%, chủ động giải quyết mẫu tắc nghẽn trước khi người bệnh phàn nàn."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "13 / 15",
        "nhanXet": "Có thể áp dụng mô hình cảnh báo đếm ngược tương tự cho Khoa CĐHA và Thăm dò chức năng."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "13 / 20",
        "nhanXet": "Chuyển đổi từ mô hình theo dõi bị động sang mô hình cảnh báo chủ động thời gian thực."
      }
    ],
    "ketLuanQLCL": "1. Phê duyệt Đề cương A3 cho nhóm tác giả KHOA XÉT NGHIỆM để chính thức triển khai thử nghiệm thực tế đề án theo đúng kế hoạch cam kết.\r\n2. Đề nghị nhóm tác giả tuân thủ quy trình chuyên môn, theo dõi sát sao các chỉ số an toàn người bệnh và ghi nhận đầy đủ số liệu đo lường thực tế.\r\n3. Tổ QLCL sẽ phối hợp kiểm chuẩn và hỗ trợ đơn vị hoàn thiện Báo cáo Nghiệm thu A3 trước Vòng Chung kết Hội thi Kaizen 16 Năm.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-XN-01 02. Bản Đăng ký Sau Hiệu chỉnh Xét Nghiệm CN. Nguyễn Quang Trường.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 7097
      },
      {
        "fileName": "KZ16-XN-01 03. Biên bản Thẩm định Xét Nghiệm CN. Nguyễn Quang Trường.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 3904
      },
      {
        "fileName": "KZ16-XN-01 04. Đề cương A3 Triển khai Thực nghiệm Xét Nghiệm CN. Nguyễn Quang Trường.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 5552
      }
    ],
    "quickSummary": {
      "idea": "Ứng dụng tính năng cảnh báo sớm thời gian thực và báo cáo tự động người bệnh trả kết quả muộn trên hệ thống HIS tại Khoa Xét nghiệm",
      "painPoints": [
        "Tỷ lệ mẫu xét nghiệm bị trả trễ hẹn vào giờ cao điểm: chiếm khoảng 18 - 22%.",
        "Thời gian phát hiện một mẫu bệnh phẩm bị chậm trễ: trung bình 35 phút sau giờ hẹn.",
        "Kỹ thuật viên phải lọc tìm thủ công trên danh sách hàng trăm bệnh nhân trên phần mềm."
      ],
      "solutions": [
        "Giải pháp 1 (Lập trình đếm ngược SLA): Phối hợp với Phòng CNTT lập trình thuật toán đếm ngược thời gian cam kết trả kết quả cho từng loại xét nghiệm (Huyết học 45 phút, Sinh hóa 60 phút).",
        "Giải pháp 2 (Cảnh báo thị giác 3 cấp độ): Hiển thị màu sắc trực quan trên màn hình máy tính: Màu Xanh (Đúng tiến độ), Màu Vàng (Còn 15 phút), Màu Đỏ nhấp nháy (Quá hạn).",
        "Giải pháp 3 (Thông báo tự động đẩy): Tự động gửi thông báo tin nhắn trên phần mềm HIS đến màn hình kíp trưởng khi phát hiện mẫu bệnh phẩm chuyển sang màu Đỏ."
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ mẫu trả kết quả đúng giờ hẹn cam...",
          "before": "78 - 82%",
          "after": "Nâng lên trên 98%",
          "note": "Trích xuất nhật ký hệ thống LIS/HIS"
        },
        {
          "label": "Thời gian phát hiện mẫu có nguy cơ trễ...",
          "before": "Sau giờ hẹn 35 phút",
          "after": "Cảnh báo trước 15 phút",
          "note": "Nhật ký cảnh báo phần mềm"
        },
        {
          "label": "Số lượt khiếu nại của người bệnh về ch...",
          "before": "Còn phát sinh",
          "after": "Giảm trên 90% số vụ",
          "note": "Sổ theo dõi ý kiến người bệnh"
        },
        {
          "label": "Báo cáo tự động ca chậm muộn gửi lãnh ...",
          "before": "Chưa có",
          "after": "Cập nhật mỗi 30 phút",
          "note": "Bảng điều khiển quản trị khoa"
        }
      ]
    },
    "a3Report": {
      "title": "Ứng dụng tính năng cảnh báo sớm thời gian thực và báo cáo tự động người bệnh trả kết quả muộn trên hệ thống HIS tại Khoa Xét nghiệm",
      "department": "KHOA XÉT NGHIỆM",
      "leader": "CN. Nguyễn Quang Trường",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Vào các khung giờ cao điểm buổi sáng, lượng mẫu bệnh phẩm dồn ứ lớn. Một số mẫu xét nghiệm bị chậm trễ do phải chạy lại kiểm tra hoặc nghẽn ở khâu ly tâm nhưng kỹ thuật viên không bao quát được trên phần mềm LIS, dẫn đến người bệnh ngoại trú phải chờ đợi quá giờ hẹn gây bức xúc và khiếu nại.",
      "currentCondition": "Tỷ lệ mẫu xét nghiệm bị trả trễ hẹn vào giờ cao điểm: chiếm khoảng 18 - 22%.\n• Thời gian phát hiện một mẫu bệnh phẩm bị chậm trễ: trung bình 35 phút sau giờ hẹn.\n• Kỹ thuật viên phải lọc tìm thủ công trên danh sách hàng trăm bệnh nhân trên phần mềm.\n• Tỷ lệ người bệnh thắc mắc về thời gian chờ kết quả xét nghiệm còn ở mức cao.",
      "targetCondition": "• Tỷ lệ mẫu trả kết quả đúng giờ hẹn cam kết: Hiện trạng 78 - 82% ➔ Cam kết đạt Nâng lên trên 98%\n• Thời gian phát hiện mẫu có nguy cơ trễ hạn: Hiện trạng Sau giờ hẹn 35 phút ➔ Cam kết đạt Cảnh báo trước 15 phút\n• Số lượt khiếu nại của người bệnh về chờ xét nghiệm: Hiện trạng Còn phát sinh ➔ Cam kết đạt Giảm trên 90% số vụ\n• Báo cáo tự động ca chậm muộn gửi lãnh đạo: Hiện trạng Chưa có ➔ Cam kết đạt Cập nhật mỗi 30 phút",
      "rootCauseAnalysis": "Why 1: Tại sao người bệnh bị nhận kết quả xét nghiệm muộn hơn giờ hẹn trên phiếu? ➔ Do một số mẫu bệnh phẩm bị nghẽn ở khâu ly tâm hoặc cần kiểm tra lại kết quả bất thường.\nWhy 2: Tại sao nhân viên xét nghiệm không phát hiện sớm mẫu bệnh phẩm bị nghẽn? ➔ Do màn hình phần mềm LIS hiện tại chỉ hiển thị danh sách dạng bảng tĩnh, không có màu sắc cảnh báo.\nWhy 3: Tại sao không cài đặt cơ chế cảnh báo tự động? ➔ Do phần mềm chưa được lập trình tính năng đếm ngược thời gian cam kết trả kết quả theo từng loại xét nghiệm.\nWhy 4: Tại sao lãnh đạo khoa không nắm được để điều chuyển nhân lực kịp thời? ➔ Do thiếu báo cáo tự động tổng hợp các ca chậm muộn theo thời gian thực gửi đến trưởng kíp.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Hệ thống thông tin xét nghiệm LIS/HIS thiếu tính năng kiểm soát thời gian quay vòng mẫu (TAT) bằng công nghệ cảnh báo sớm thời gian thực. ➔ Cần lập trình module cảnh báo thông minh đổi màu thị giác và thông báo tự động trên phần mềm HIS.",
      "countermeasures": "• Giải pháp 1 (Lập trình đếm ngược SLA): Phối hợp với Phòng CNTT lập trình thuật toán đếm ngược thời gian cam kết trả kết quả cho từng loại xét nghiệm (Huyết học 45 phút, Sinh hóa 60 phút).\n• Giải pháp 2 (Cảnh báo thị giác 3 cấp độ): Hiển thị màu sắc trực quan trên màn hình máy tính: Màu Xanh (Đúng tiến độ), Màu Vàng (Còn 15 phút), Màu Đỏ nhấp nháy (Quá hạn).\n• Giải pháp 3 (Thông báo tự động đẩy): Tự động gửi thông báo tin nhắn trên phần mềm HIS đến màn hình kíp trưởng khi phát hiện mẫu bệnh phẩm chuyển sang màu Đỏ.\n• Giải pháp 4 (Bảng điều khiển thời gian thực): Thiết lập màn hình Dashboard tổng quan tại phòng hành chính khoa hiển thị số lượng mẫu đang chờ theo từng phòng máy.",
      "planImplementation": "Khu vực: Triển khai thử nghiệm tại Phân hệ Tiếp nhận và Chạy mẫu Sinh hóa - Huyết học thuộc Khoa Xét nghiệm.\nThời gian: Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.\nSản phẩm đầu ra: Module cảnh báo sớm vận hành ổn định trên phần mềm HIS; Báo cáo thống kê thời gian quay vòng mẫu tự động và Quy trình xử lý mẫu báo động Đỏ.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại KHOA XÉT NGHIỆM; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "Tỷ lệ mẫu xét nghiệm bị trả trễ hẹn vào giờ cao điểm: chiếm khoảng 18 - 22%.\n• Thời gian phát hiện một mẫu bệnh phẩm bị chậm trễ: trung bình 35 phút sau giờ hẹn.\n• Kỹ thuật viên phải lọc tìm thủ công trên danh sách hàng trăm bệnh nhân trên phần mềm.\n• Tỷ lệ người bệnh thắc mắc về thời gian chờ kết quả xét nghiệm còn ở mức cao.",
      "smartGoal": "• Tỷ lệ mẫu trả kết quả đúng giờ hẹn cam kết: Hiện trạng 78 - 82% ➔ Cam kết đạt Nâng lên trên 98%\n• Thời gian phát hiện mẫu có nguy cơ trễ hạn: Hiện trạng Sau giờ hẹn 35 phút ➔ Cam kết đạt Cảnh báo trước 15 phút\n• Số lượt khiếu nại của người bệnh về chờ xét nghiệm: Hiện trạng Còn phát sinh ➔ Cam kết đạt Giảm trên 90% số vụ\n• Báo cáo tự động ca chậm muộn gửi lãnh đạo: Hiện trạng Chưa có ➔ Cam kết đạt Cập nhật mỗi 30 phút",
      "rootCause": "Why 1: Tại sao người bệnh bị nhận kết quả xét nghiệm muộn hơn giờ hẹn trên phiếu? ➔ Do một số mẫu bệnh phẩm bị nghẽn ở khâu ly tâm hoặc cần kiểm tra lại kết quả bất thường.\nWhy 2: Tại sao nhân viên xét nghiệm không phát hiện sớm mẫu bệnh phẩm bị nghẽn? ➔ Do màn hình phần mềm LIS hiện tại chỉ hiển thị danh sách dạng bảng tĩnh, không có màu sắc cảnh báo.\nWhy 3: Tại sao không cài đặt cơ chế cảnh báo tự động? ➔ Do phần mềm chưa được lập trình tính năng đếm ngược thời gian cam kết trả kết quả theo từng loại xét nghiệm.\nWhy 4: Tại sao lãnh đạo khoa không nắm được để điều chuyển nhân lực kịp thời? ➔ Do thiếu báo cáo tự động tổng hợp các ca chậm muộn theo thời gian thực gửi đến trưởng kíp.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Hệ thống thông tin xét nghiệm LIS/HIS thiếu tính năng kiểm soát thời gian quay vòng mẫu (TAT) bằng công nghệ cảnh báo sớm thời gian thực. ➔ Cần lập trình module cảnh báo thông minh đổi màu thị giác và thông báo tự động trên phần mềm HIS.",
      "resultsBeforeAfter": [
        {
          "metric": "Tỷ lệ mẫu trả kết quả đúng giờ hẹn cam kết",
          "before": "78 - 82%",
          "after": "Nâng lên trên 98%"
        },
        {
          "metric": "Thời gian phát hiện mẫu có nguy cơ trễ hạn",
          "before": "Sau giờ hẹn 35 phút",
          "after": "Cảnh báo trước 15 phút"
        },
        {
          "metric": "Số lượt khiếu nại của người bệnh về chờ xét nghiệm",
          "before": "Còn phát sinh",
          "after": "Giảm trên 90% số vụ"
        },
        {
          "metric": "Báo cáo tự động ca chậm muộn gửi lãnh đạo",
          "before": "Chưa có",
          "after": "Cập nhật mỗi 30 phút"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 88/100đ (ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Triển khai thử nghiệm tại Phân hệ Tiếp nhận và Chạy mẫu Sinh hóa - Huyết học thuộc Khoa Xét nghiệm.",
        "time": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "CN. Nguyễn Quang Trường",
    "nhomTacGia": "CN. Nguyễn Quang Trường, KS. Lê Đức Thịnh, KTV. Trần Văn Tuấn",
    "diemBanDau": "88"
  },
  {
    "maDeTai": "KZ16-XN-03",
    "tenDeTai": "Chuyển đổi số quy trình trả kết quả xét nghiệm trả sau qua ứng dụng Myhungvuong",
    "tenSanPham": "Chuyển đổi số quy trình trả kết quả xét nghiệm trả sau qua ứng dụng Myhungvuong",
    "khoaPhong": "KHOA XÉT NGHIỆM",
    "khoaPhoiHop": "Phòng Công nghệ Thông tin",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 5: Chuyển đổi số và ứng dụng bệnh viện thông minh (Kết hợp nâng cao trải nghiệm người bệnh).",
    "tacGia": "CN. Trần Thị Khanh",
    "authorsDetailed": [
      {
        "name": "CN. Trần Thị Khanh",
        "title": "Kỹ thuật viên Xét nghiệm",
        "role": "Trưởng nhóm đề án (Chủ nhiệm)",
        "stt": "1",
        "hoTen": "CN. Trần Thị Khanh",
        "chucVu": "Kỹ thuật viên Xét nghiệm",
        "vaiTro": "Trưởng nhóm đề án (Chủ nhiệm)"
      },
      {
        "name": "KS. Nguyễn Minh Tuyên",
        "title": "Kỹ sư Phòng CNTT",
        "role": "Phó nhóm (Phụ trách nền tảng số)",
        "stt": "2",
        "hoTen": "KS. Nguyễn Minh Tuyên",
        "chucVu": "Kỹ sư Phòng CNTT",
        "vaiTro": "Phó nhóm (Phụ trách nền tảng số)"
      },
      {
        "name": "CN. Bùi Thị Mai",
        "title": "Cử nhân Xét nghiệm",
        "role": "Thành viên phụ trách dữ liệu ký số",
        "stt": "3",
        "hoTen": "CN. Bùi Thị Mai",
        "chucVu": "Cử nhân Xét nghiệm",
        "vaiTro": "Thành viên phụ trách dữ liệu ký số"
      }
    ],
    "thucTrang": "Khoa Xét nghiệm hàng ngày thực hiện nhiều kỹ thuật chuyên sâu hẹn trả kết quả sau 2 - 3 ngày (như giải phẫu bệnh tế bào, nuôi cấy kháng sinh đồ, HPV, đột biến gen). Người bệnh ở các huyện và tỉnh xa phải đi lại nhiều lần đến bệnh viện chỉ để nhận bản in giấy kết quả, gây lãng phí thời gian, chi phí đi lại và làm gia tăng mật độ đông đúc tại sảnh chờ.",
    "soLieuBanDau": [
      "100% người bệnh làm xét nghiệm trả sau phải quay lại bệnh viện lấy bản in giấy.",
      "Thời gian nhân viên in ấn, phân loại và gọi điện báo kết quả: 90 phút/ngày.",
      "Người bệnh phải tốn kém chi phí đi lại từ 50.000 đến 200.000 VNĐ cho mỗi lượt nhận kết quả.",
      "Tỷ lệ kết quả bản in giấy bị tồn đọng do người bệnh không đến lấy: khoảng 8%."
    ],
    "fiveWhys": [
      {
        "level": "Why 1",
        "question": "Tại sao người bệnh phải quay lại viện lấy kết quả xét nghiệm trả sau?",
        "answer": "Do kết quả nuôi cấy và giải phẫu bệnh đòi hỏi thời gian ủ và đọc lam kính nhiều ngày."
      },
      {
        "level": "Why 2",
        "question": "Tại sao không gửi kết quả trực tuyến cho người bệnh xem tại nhà?",
        "answer": "Do trước đây chưa tích hợp phân hệ chữ ký số điện tử của bác sĩ xét nghiệm trên ứng dụng Myhungvuong."
      },
      {
        "level": "Why 3",
        "question": "Tại sao người bệnh không biết khi nào kết quả đã hoàn thành?",
        "answer": "Do hệ thống chưa có tính năng tự động gửi thông báo tin nhắn khi kết quả được duyệt ký số."
      },
      {
        "level": "Why 4",
        "question": "Tại sao bác sĩ điều trị khó tư vấn từ xa khi có kết quả trả sau?",
        "answer": "Do thiếu cơ chế liên thông bệnh án điện tử ngoại trú với hồ sơ sức khỏe trên điện thoại người bệnh."
      },
      {
        "level": "Why 5 (Cốt lõi)",
        "question": "NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Điểm chạm trả kết quả xét nghiệm chuyên sâu bị đứt gãy kênh truyền tải số hóa, phụ thuộc hoàn toàn vào văn bản in giấy truyền thống.",
        "answer": "Cần tích hợp luồng trả kết quả số hóa có chữ ký số pháp lý trực tiếp lên ứng dụng Myhungvuong."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Tỷ lệ trả kết quả xét nghiệm trả sau qua ứng dụng",
        "hienTrang": "0% (chỉ trả giấy)",
        "mucTieu": "Đạt trên 85% người bệnh",
        "phuongPhap": "Thống kê lượt xem trên ứng dụng"
      },
      {
        "chiTieu": "Thời gian người bệnh nhận kết quả sau khi duyệt ký số",
        "hienTrang": "2 - 3 ngày sau",
        "mucTieu": "Dưới 1 phút (tức thì)",
        "phuongPhap": "Nhật ký đẩy dữ liệu máy chủ"
      },
      {
        "chiTieu": "Chi phí in ấn và đi lại tiết kiệm cho người bệnh",
        "hienTrang": "Tốn kém chi phí",
        "mucTieu": "Tiết kiệm 100% đi lại",
        "phuongPhap": "Ước tính kinh tế xã hội"
      },
      {
        "chiTieu": "Tỷ lệ hồ sơ xét nghiệm trả sau tồn đọng tại khoa",
        "hienTrang": "Khoảng 8%",
        "mucTieu": "Giảm triệt để về 0%",
        "phuongPhap": "Kiểm kê kho lưu trữ khoa"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Tích hợp chữ ký số pháp lý): Tích hợp chữ ký số cá nhân hợp chuẩn của Trưởng khoa và Bác sĩ xét nghiệm trực tiếp vào tệp PDF kết quả xét nghiệm trên phần mềm LIS.",
      "Giải pháp 2 (Đồng bộ hóa dữ liệu Myhungvuong): Lập trình API tự động đồng bộ kết quả đã ký số từ máy chủ bệnh viện sang tài khoản cá nhân của người bệnh trên ứng dụng Myhungvuong.",
      "Giải pháp 3 (Thông báo tự động): Gửi thông báo đẩy (Notification) và tin nhắn Zalo ZNS thông báo ngay khi kết quả có hiệu lực.",
      "Giải pháp 4 (Hướng dẫn cài đặt tại quầy): Đặt mã QR hướng dẫn cài đặt Myhungvuong tại bàn tiếp đón và phòng lấy mẫu xét nghiệm, hỗ trợ 100% người bệnh cao tuổi."
    ],
    "phamVi": "Áp dụng thử nghiệm cho toàn bộ người bệnh có chỉ định xét nghiệm nuôi cấy vi sinh và HPV ngoại trú.",
    "thoiGian": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
    "sanPhamDauRa": "Quy trình trả kết quả số hóa liên thông Myhungvuong hoàn chỉnh; Báo cáo thống kê số lượt truy cập và Tờ rơi hướng dẫn người bệnh tra cứu từ xa.",
    "soHieuVanBan": "Số: 16/TB-QLCL-KAIZEN",
    "tongDiemThamDinh": 95,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "20 / 20",
        "nhanXet": "Nâng cao vượt bậc sự hài lòng của người bệnh ngoại trú, giảm tải thủ tục hành chính."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "24 / 25",
        "nhanXet": "Nền tảng Myhungvuong đã có sẵn lượng người dùng lớn, chỉ cần nâng cấp API kết nối."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "23 / 20",
        "nhanXet": "Tiết kiệm hàng trăm triệu đồng chi phí đi lại hàng năm cho người dân vùng sâu vùng xa."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "14 / 15",
        "nhanXet": "Có thể mở rộng trả số hóa cho kết quả giải phẫu bệnh, nội soi tiêu hóa và đơn thuốc điện tử."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "14 / 20",
        "nhanXet": "Mô hình chuyển đổi số hướng tới lấy người bệnh làm trung tâm phục vụ."
      }
    ],
    "ketLuanQLCL": "1. Phê duyệt Đề cương A3 cho nhóm tác giả KHOA XÉT NGHIỆM để chính thức triển khai thử nghiệm thực tế đề án theo đúng kế hoạch cam kết.\r\n2. Đề nghị nhóm tác giả tuân thủ quy trình chuyên môn, theo dõi sát sao các chỉ số an toàn người bệnh và ghi nhận đầy đủ số liệu đo lường thực tế.\r\n3. Tổ QLCL sẽ phối hợp kiểm chuẩn và hỗ trợ đơn vị hoàn thiện Báo cáo Nghiệm thu A3 trước Vòng Chung kết Hội thi Kaizen 16 Năm.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-XN-03 02. Bản Đăng ký Sau Hiệu chỉnh Xét Nghiệm CN. Trần Thị Khanh.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 7071
      },
      {
        "fileName": "KZ16-XN-03 03. Biên bản Thẩm định Xét Nghiệm CN. Trần Thị Khanh.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 3745
      },
      {
        "fileName": "KZ16-XN-03 04. Đề cương A3 Triển khai Thực nghiệm Xét Nghiệm CN. Trần Thị Khanh.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 5543
      }
    ],
    "quickSummary": {
      "idea": "Chuyển đổi số quy trình trả kết quả xét nghiệm trả sau qua ứng dụng Myhungvuong",
      "painPoints": [
        "100% người bệnh làm xét nghiệm trả sau phải quay lại bệnh viện lấy bản in giấy.",
        "Thời gian nhân viên in ấn, phân loại và gọi điện báo kết quả: 90 phút/ngày.",
        "Người bệnh phải tốn kém chi phí đi lại từ 50.000 đến 200.000 VNĐ cho mỗi lượt nhận kết quả."
      ],
      "solutions": [
        "Giải pháp 1 (Tích hợp chữ ký số pháp lý): Tích hợp chữ ký số cá nhân hợp chuẩn của Trưởng khoa và Bác sĩ xét nghiệm trực tiếp vào tệp PDF kết quả xét nghiệm trên phần mềm LIS.",
        "Giải pháp 2 (Đồng bộ hóa dữ liệu Myhungvuong): Lập trình API tự động đồng bộ kết quả đã ký số từ máy chủ bệnh viện sang tài khoản cá nhân của người bệnh trên ứng dụng Myhungvuong.",
        "Giải pháp 3 (Thông báo tự động): Gửi thông báo đẩy (Notification) và tin nhắn Zalo ZNS thông báo ngay khi kết quả có hiệu lực."
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ trả kết quả xét nghiệm trả sau q...",
          "before": "0% (chỉ trả giấy)",
          "after": "Đạt trên 85% người bệnh",
          "note": "Thống kê lượt xem trên ứng dụng"
        },
        {
          "label": "Thời gian người bệnh nhận kết quả sau ...",
          "before": "2 - 3 ngày sau",
          "after": "Dưới 1 phút (tức thì)",
          "note": "Nhật ký đẩy dữ liệu máy chủ"
        },
        {
          "label": "Chi phí in ấn và đi lại tiết kiệm cho ...",
          "before": "Tốn kém chi phí",
          "after": "Tiết kiệm 100% đi lại",
          "note": "Ước tính kinh tế xã hội"
        },
        {
          "label": "Tỷ lệ hồ sơ xét nghiệm trả sau tồn đọn...",
          "before": "Khoảng 8%",
          "after": "Giảm triệt để về 0%",
          "note": "Kiểm kê kho lưu trữ khoa"
        }
      ]
    },
    "a3Report": {
      "title": "Chuyển đổi số quy trình trả kết quả xét nghiệm trả sau qua ứng dụng Myhungvuong",
      "department": "KHOA XÉT NGHIỆM",
      "leader": "CN. Trần Thị Khanh",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Khoa Xét nghiệm hàng ngày thực hiện nhiều kỹ thuật chuyên sâu hẹn trả kết quả sau 2 - 3 ngày (như giải phẫu bệnh tế bào, nuôi cấy kháng sinh đồ, HPV, đột biến gen). Người bệnh ở các huyện và tỉnh xa phải đi lại nhiều lần đến bệnh viện chỉ để nhận bản in giấy kết quả, gây lãng phí thời gian, chi phí đi lại và làm gia tăng mật độ đông đúc tại sảnh chờ.",
      "currentCondition": "100% người bệnh làm xét nghiệm trả sau phải quay lại bệnh viện lấy bản in giấy.\n• Thời gian nhân viên in ấn, phân loại và gọi điện báo kết quả: 90 phút/ngày.\n• Người bệnh phải tốn kém chi phí đi lại từ 50.000 đến 200.000 VNĐ cho mỗi lượt nhận kết quả.\n• Tỷ lệ kết quả bản in giấy bị tồn đọng do người bệnh không đến lấy: khoảng 8%.",
      "targetCondition": "• Tỷ lệ trả kết quả xét nghiệm trả sau qua ứng dụng: Hiện trạng 0% (chỉ trả giấy) ➔ Cam kết đạt Đạt trên 85% người bệnh\n• Thời gian người bệnh nhận kết quả sau khi duyệt ký số: Hiện trạng 2 - 3 ngày sau ➔ Cam kết đạt Dưới 1 phút (tức thì)\n• Chi phí in ấn và đi lại tiết kiệm cho người bệnh: Hiện trạng Tốn kém chi phí ➔ Cam kết đạt Tiết kiệm 100% đi lại\n• Tỷ lệ hồ sơ xét nghiệm trả sau tồn đọng tại khoa: Hiện trạng Khoảng 8% ➔ Cam kết đạt Giảm triệt để về 0%",
      "rootCauseAnalysis": "Why 1: Tại sao người bệnh phải quay lại viện lấy kết quả xét nghiệm trả sau? ➔ Do kết quả nuôi cấy và giải phẫu bệnh đòi hỏi thời gian ủ và đọc lam kính nhiều ngày.\nWhy 2: Tại sao không gửi kết quả trực tuyến cho người bệnh xem tại nhà? ➔ Do trước đây chưa tích hợp phân hệ chữ ký số điện tử của bác sĩ xét nghiệm trên ứng dụng Myhungvuong.\nWhy 3: Tại sao người bệnh không biết khi nào kết quả đã hoàn thành? ➔ Do hệ thống chưa có tính năng tự động gửi thông báo tin nhắn khi kết quả được duyệt ký số.\nWhy 4: Tại sao bác sĩ điều trị khó tư vấn từ xa khi có kết quả trả sau? ➔ Do thiếu cơ chế liên thông bệnh án điện tử ngoại trú với hồ sơ sức khỏe trên điện thoại người bệnh.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Điểm chạm trả kết quả xét nghiệm chuyên sâu bị đứt gãy kênh truyền tải số hóa, phụ thuộc hoàn toàn vào văn bản in giấy truyền thống. ➔ Cần tích hợp luồng trả kết quả số hóa có chữ ký số pháp lý trực tiếp lên ứng dụng Myhungvuong.",
      "countermeasures": "• Giải pháp 1 (Tích hợp chữ ký số pháp lý): Tích hợp chữ ký số cá nhân hợp chuẩn của Trưởng khoa và Bác sĩ xét nghiệm trực tiếp vào tệp PDF kết quả xét nghiệm trên phần mềm LIS.\n• Giải pháp 2 (Đồng bộ hóa dữ liệu Myhungvuong): Lập trình API tự động đồng bộ kết quả đã ký số từ máy chủ bệnh viện sang tài khoản cá nhân của người bệnh trên ứng dụng Myhungvuong.\n• Giải pháp 3 (Thông báo tự động): Gửi thông báo đẩy (Notification) và tin nhắn Zalo ZNS thông báo ngay khi kết quả có hiệu lực.\n• Giải pháp 4 (Hướng dẫn cài đặt tại quầy): Đặt mã QR hướng dẫn cài đặt Myhungvuong tại bàn tiếp đón và phòng lấy mẫu xét nghiệm, hỗ trợ 100% người bệnh cao tuổi.",
      "planImplementation": "Khu vực: Áp dụng thử nghiệm cho toàn bộ người bệnh có chỉ định xét nghiệm nuôi cấy vi sinh và HPV ngoại trú.\nThời gian: Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.\nSản phẩm đầu ra: Quy trình trả kết quả số hóa liên thông Myhungvuong hoàn chỉnh; Báo cáo thống kê số lượt truy cập và Tờ rơi hướng dẫn người bệnh tra cứu từ xa.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại KHOA XÉT NGHIỆM; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "100% người bệnh làm xét nghiệm trả sau phải quay lại bệnh viện lấy bản in giấy.\n• Thời gian nhân viên in ấn, phân loại và gọi điện báo kết quả: 90 phút/ngày.\n• Người bệnh phải tốn kém chi phí đi lại từ 50.000 đến 200.000 VNĐ cho mỗi lượt nhận kết quả.\n• Tỷ lệ kết quả bản in giấy bị tồn đọng do người bệnh không đến lấy: khoảng 8%.",
      "smartGoal": "• Tỷ lệ trả kết quả xét nghiệm trả sau qua ứng dụng: Hiện trạng 0% (chỉ trả giấy) ➔ Cam kết đạt Đạt trên 85% người bệnh\n• Thời gian người bệnh nhận kết quả sau khi duyệt ký số: Hiện trạng 2 - 3 ngày sau ➔ Cam kết đạt Dưới 1 phút (tức thì)\n• Chi phí in ấn và đi lại tiết kiệm cho người bệnh: Hiện trạng Tốn kém chi phí ➔ Cam kết đạt Tiết kiệm 100% đi lại\n• Tỷ lệ hồ sơ xét nghiệm trả sau tồn đọng tại khoa: Hiện trạng Khoảng 8% ➔ Cam kết đạt Giảm triệt để về 0%",
      "rootCause": "Why 1: Tại sao người bệnh phải quay lại viện lấy kết quả xét nghiệm trả sau? ➔ Do kết quả nuôi cấy và giải phẫu bệnh đòi hỏi thời gian ủ và đọc lam kính nhiều ngày.\nWhy 2: Tại sao không gửi kết quả trực tuyến cho người bệnh xem tại nhà? ➔ Do trước đây chưa tích hợp phân hệ chữ ký số điện tử của bác sĩ xét nghiệm trên ứng dụng Myhungvuong.\nWhy 3: Tại sao người bệnh không biết khi nào kết quả đã hoàn thành? ➔ Do hệ thống chưa có tính năng tự động gửi thông báo tin nhắn khi kết quả được duyệt ký số.\nWhy 4: Tại sao bác sĩ điều trị khó tư vấn từ xa khi có kết quả trả sau? ➔ Do thiếu cơ chế liên thông bệnh án điện tử ngoại trú với hồ sơ sức khỏe trên điện thoại người bệnh.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Điểm chạm trả kết quả xét nghiệm chuyên sâu bị đứt gãy kênh truyền tải số hóa, phụ thuộc hoàn toàn vào văn bản in giấy truyền thống. ➔ Cần tích hợp luồng trả kết quả số hóa có chữ ký số pháp lý trực tiếp lên ứng dụng Myhungvuong.",
      "resultsBeforeAfter": [
        {
          "metric": "Tỷ lệ trả kết quả xét nghiệm trả sau qua ứng dụng",
          "before": "0% (chỉ trả giấy)",
          "after": "Đạt trên 85% người bệnh"
        },
        {
          "metric": "Thời gian người bệnh nhận kết quả sau khi duyệt ký số",
          "before": "2 - 3 ngày sau",
          "after": "Dưới 1 phút (tức thì)"
        },
        {
          "metric": "Chi phí in ấn và đi lại tiết kiệm cho người bệnh",
          "before": "Tốn kém chi phí",
          "after": "Tiết kiệm 100% đi lại"
        },
        {
          "metric": "Tỷ lệ hồ sơ xét nghiệm trả sau tồn đọng tại khoa",
          "before": "Khoảng 8%",
          "after": "Giảm triệt để về 0%"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 95/100đ (ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Áp dụng thử nghiệm cho toàn bộ người bệnh có chỉ định xét nghiệm nuôi cấy vi sinh và HPV ngoại trú.",
        "time": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "CN. Trần Thị Khanh",
    "nhomTacGia": "CN. Trần Thị Khanh, KS. Nguyễn Minh Tuyên, CN. Bùi Thị Mai",
    "diemBanDau": "95"
  },
  {
    "maDeTai": "KZ16-KHTH-01",
    "tenDeTai": "Chuyển đổi số hoạt động quản lý hành nghề nội bộ (HV-MRM)",
    "tenSanPham": "Chuyển đổi số hoạt động quản lý hành nghề nội bộ (HV-MRM)",
    "khoaPhong": "PHÒNG KẾ HOẠCH TỔNG HỢP",
    "khoaPhoiHop": "",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 5: Chuyển đổi số và ứng dụng bệnh viện thông minh (Quản trị tuân thủ pháp luật khám chữa bệnh).",
    "tacGia": "Nguyễn Thành Lâm",
    "authorsDetailed": [
      {
        "name": "Nguyễn Thành Lâm",
        "title": "Phó Trưởng phòng KHTH",
        "role": "Trưởng nhóm đề án (Chủ nhiệm)",
        "stt": "1",
        "hoTen": "Nguyễn Thành Lâm",
        "chucVu": "Phó Trưởng phòng KHTH",
        "vaiTro": "Trưởng nhóm đề án (Chủ nhiệm)"
      },
      {
        "name": "ĐD. Trần Đình Vũ",
        "title": "Tổ trưởng Tổ QLCL",
        "role": "Cố vấn kiểm chuẩn chất lượng",
        "stt": "2",
        "hoTen": "ĐD. Trần Đình Vũ",
        "chucVu": "Tổ trưởng Tổ QLCL",
        "vaiTro": "Cố vấn kiểm chuẩn chất lượng"
      },
      {
        "name": "CN. Đỗ Văn Nam",
        "title": "Chuyên viên Phòng KHTH",
        "role": "Thành viên số hóa dữ liệu",
        "stt": "3",
        "hoTen": "CN. Đỗ Văn Nam",
        "chucVu": "Chuyên viên Phòng KHTH",
        "vaiTro": "Thành viên số hóa dữ liệu"
      }
    ],
    "thucTrang": "Hệ thống Y tế Hùng Vương có quy mô hơn 1.130 nhân sự hoạt động tại 5 cơ sở và 48 khoa phòng. Việc theo dõi hồ sơ chứng chỉ hành nghề (CCHN), phân quyền kỹ thuật chuyên môn, theo dõi đào tạo liên tục (CME) và đăng ký người hành nghề với Sở Y tế hiện thực hiện bằng hồ sơ giấy và bảng tính rời rạc, tiềm ẩn nguy cơ sai sót pháp lý và xuất toán bảo hiểm y tế.",
    "soLieuBanDau": [
      "Quản lý thủ công 1.130 nhân sự y tế trên các tệp Excel phân tán.",
      "696 hồ sơ CCHN với 188 phạm vi chuyên môn kỹ thuật chưa được kiểm soát tự động trên phần mềm HIS.",
      "Thời gian tra cứu và rà soát hồ sơ hành nghề khi có đoàn thanh tra: mất từ 3 đến 5 ngày làm việc.",
      "Nguy cơ bác sĩ thực hiện dịch vụ kỹ thuật chưa được phân quyền trên hệ thống."
    ],
    "fiveWhys": [
      {
        "level": "Why 1",
        "question": "Tại sao việc theo dõi chứng chỉ hành nghề và phân quyền kỹ thuật dễ xảy ra sai sót?",
        "answer": "Do số lượng nhân sự y tế lớn, biến động thường xuyên và bố trí phân tán tại nhiều cơ sở."
      },
      {
        "level": "Why 2",
        "question": "Tại sao không kiểm soát tự động trên phần mềm kê đơn và chỉ định?",
        "answer": "Do phần mềm HIS chưa liên thông với cơ sở dữ liệu quản lý chứng chỉ hành nghề nội bộ."
      },
      {
        "level": "Why 3",
        "question": "Tại sao việc rà soát thời hạn CME và giấy phép hành nghề mất nhiều thời gian?",
        "answer": "Do các tài liệu lưu trữ dạng hồ sơ giấy tại Phòng KHTH và Phòng Tổ chức cán bộ."
      },
      {
        "level": "Why 4",
        "question": "Tại sao khó phát hiện kịp thời bác sĩ chỉ định kỹ thuật vượt phạm vi?",
        "answer": "Do thiếu cơ chế phân quyền tài khoản bác sĩ gắn chặt với mã số chứng chỉ hành nghề hợp pháp."
      },
      {
        "level": "Why 5 (Cốt lõi)",
        "question": "NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Chưa số hóa toàn diện hoạt động quản trị tuân thủ hành nghề y tế thành một hệ sinh thái dữ liệu tập trung (Medical Registry Management - MRM).",
        "answer": "Cần xây dựng hệ thống phần mềm HV-MRM tích hợp tự động vào lõi phần mềm HIS để chặn vi phạm từ gốc."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Tỷ lệ số hóa hồ sơ người hành nghề toàn hệ thống",
        "hienTrang": "Dưới 40%",
        "mucTieu": "Đạt 100% (1.130 nhân sự)",
        "phuongPhap": "Cơ sở dữ liệu phần mềm HV-MRM"
      },
      {
        "chiTieu": "Kiểm soát phân quyền chỉ định kỹ thuật trên HIS",
        "hienTrang": "Thủ công",
        "mucTieu": "Chặn tự động 100% vi phạm",
        "phuongPhap": "Nhật ký phân quyền phần mềm HIS"
      },
      {
        "chiTieu": "Thời gian trích xuất báo cáo nhân sự hành nghề",
        "hienTrang": "3 - 5 ngày",
        "mucTieu": "Dưới 30 giây (tức thì)",
        "phuongPhap": "Chức năng xuất báo cáo tự động"
      },
      {
        "chiTieu": "Tỷ lệ xuất toán BHYT do sai phạm chứng chỉ hành nghề",
        "hienTrang": "Tiềm ẩn nguy cơ",
        "mucTieu": "Triệt tiêu về 0 đồng",
        "phuongPhap": "Báo cáo giám định BHYT"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Xây dựng phần mềm HV-MRM): Thiết kế và triển khai phân hệ phần mềm Quản lý Hành nghề Nội bộ (HV-MRM), số hóa toàn bộ thông tin CCHN, phạm vi chuyên môn và chứng chỉ đào tạo liên tục (CME).",
      "Giải pháp 2 (Khóa phân quyền trên HIS): Tích hợp API giữa HV-MRM và HIS: Bác sĩ chỉ có thể ký số và chỉ định các dịch vụ kỹ thuật nằm trong danh mục đã được phê duyệt bằng văn bản.",
      "Giải pháp 3 (Cảnh báo thời hạn tự động): Cài đặt cơ chế cảnh báo tự động trước 06 tháng đối với các chứng chỉ sắp hết hạn đào tạo liên tục hoặc đến hạn cập nhật kiến thức y khoa.",
      "Giải pháp 4 (Báo cáo trực quan Sở Y tế): Tự động kết xuất báo cáo danh sách người hành nghề theo đúng định dạng Mẫu quy định của Bộ Y tế và Sở Y tế chỉ với một thao tác."
    ],
    "phamVi": "Thử nghiệm số hóa và liên thông phân quyền cho toàn bộ bác sĩ Khối Ngoại và Khối Cấp cứu - Hồi sức.",
    "thoiGian": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
    "sanPhamDauRa": "Hệ thống phần mềm HV-MRM vận hành thử nghiệm ổn định; 100% hồ sơ bác sĩ thí điểm được liên thông phân quyền trên HIS và Quy chế Quản lý Hành nghề Nội bộ số hóa.",
    "soHieuVanBan": "Số: 16/TB-QLCL-KAIZEN",
    "tongDiemThamDinh": 98,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "20 / 20",
        "nhanXet": "Quản trị tuân thủ pháp lý hành nghề là xương sống an toàn cho toàn bộ hoạt động của tập đoàn bệnh viện."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "25 / 25",
        "nhanXet": "Đội ngũ CNTT và KHTH có đủ năng lực chuyên môn và dữ liệu để triển khai ngay lập tức."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "24 / 20",
        "nhanXet": "Triệt tiêu 100% rủi ro pháp lý và xuất toán BHYT, tiết kiệm hàng trăm giờ công lao động."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "14 / 15",
        "nhanXet": "Áp dụng ngay cho toàn bộ các bệnh viện và phòng khám thành viên trong hệ thống Hùng Vương."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "15 / 20",
        "nhanXet": "Đề án mang tính đột phá về chuyển đổi số quản trị bệnh viện theo Luật Khám chữa bệnh 2023."
      }
    ],
    "ketLuanQLCL": "1. Phê duyệt Đề cương A3 cho nhóm tác giả PHÒNG KẾ HOẠCH TỔNG HỢP để chính thức triển khai thử nghiệm thực tế đề án theo đúng kế hoạch cam kết.\r\n2. Đề nghị nhóm tác giả tuân thủ quy trình chuyên môn, theo dõi sát sao các chỉ số an toàn người bệnh và ghi nhận đầy đủ số liệu đo lường thực tế.\r\n3. Tổ QLCL sẽ phối hợp kiểm chuẩn và hỗ trợ đơn vị hoàn thiện Báo cáo Nghiệm thu A3 trước Vòng Chung kết Hội thi Kaizen 16 Năm.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-KHTH-01 02. Bản Đăng ký Sau Hiệu chỉnh Kế Hoạch Tổng Hợp Nguyễn Thành Lâm.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 7198
      },
      {
        "fileName": "KZ16-KHTH-01 03. Biên bản Thẩm định Kế Hoạch Tổng Hợp Nguyễn Thành Lâm.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 3791
      },
      {
        "fileName": "KZ16-KHTH-01 04. Đề cương A3 Triển khai Thực nghiệm Kế Hoạch Tổng Hợp Nguyễn Thành Lâm.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 5671
      }
    ],
    "quickSummary": {
      "idea": "Chuyển đổi số hoạt động quản lý hành nghề nội bộ (HV-MRM)",
      "painPoints": [
        "Quản lý thủ công 1.130 nhân sự y tế trên các tệp Excel phân tán.",
        "696 hồ sơ CCHN với 188 phạm vi chuyên môn kỹ thuật chưa được kiểm soát tự động trên phần mềm HIS.",
        "Thời gian tra cứu và rà soát hồ sơ hành nghề khi có đoàn thanh tra: mất từ 3 đến 5 ngày làm việc."
      ],
      "solutions": [
        "Giải pháp 1 (Xây dựng phần mềm HV-MRM): Thiết kế và triển khai phân hệ phần mềm Quản lý Hành nghề Nội bộ (HV-MRM), số hóa toàn bộ thông tin CCHN, phạm vi chuyên môn và chứng chỉ đào tạo liên tục (CME).",
        "Giải pháp 2 (Khóa phân quyền trên HIS): Tích hợp API giữa HV-MRM và HIS: Bác sĩ chỉ có thể ký số và chỉ định các dịch vụ kỹ thuật nằm trong danh mục đã được phê duyệt bằng văn bản.",
        "Giải pháp 3 (Cảnh báo thời hạn tự động): Cài đặt cơ chế cảnh báo tự động trước 06 tháng đối với các chứng chỉ sắp hết hạn đào tạo liên tục hoặc đến hạn cập nhật kiến thức y khoa."
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ số hóa hồ sơ người hành nghề toà...",
          "before": "Dưới 40%",
          "after": "Đạt 100% (1.130 nhân sự)",
          "note": "Cơ sở dữ liệu phần mềm HV-MRM"
        },
        {
          "label": "Kiểm soát phân quyền chỉ định kỹ thuật...",
          "before": "Thủ công",
          "after": "Chặn tự động 100% vi phạm",
          "note": "Nhật ký phân quyền phần mềm HIS"
        },
        {
          "label": "Thời gian trích xuất báo cáo nhân sự h...",
          "before": "3 - 5 ngày",
          "after": "Dưới 30 giây (tức thì)",
          "note": "Chức năng xuất báo cáo tự động"
        },
        {
          "label": "Tỷ lệ xuất toán BHYT do sai phạm chứng...",
          "before": "Tiềm ẩn nguy cơ",
          "after": "Triệt tiêu về 0 đồng",
          "note": "Báo cáo giám định BHYT"
        }
      ]
    },
    "a3Report": {
      "title": "Chuyển đổi số hoạt động quản lý hành nghề nội bộ (HV-MRM)",
      "department": "PHÒNG KẾ HOẠCH TỔNG HỢP",
      "leader": "Nguyễn Thành Lâm",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Hệ thống Y tế Hùng Vương có quy mô hơn 1.130 nhân sự hoạt động tại 5 cơ sở và 48 khoa phòng. Việc theo dõi hồ sơ chứng chỉ hành nghề (CCHN), phân quyền kỹ thuật chuyên môn, theo dõi đào tạo liên tục (CME) và đăng ký người hành nghề với Sở Y tế hiện thực hiện bằng hồ sơ giấy và bảng tính rời rạc, tiềm ẩn nguy cơ sai sót pháp lý và xuất toán bảo hiểm y tế.",
      "currentCondition": "Quản lý thủ công 1.130 nhân sự y tế trên các tệp Excel phân tán.\n• 696 hồ sơ CCHN với 188 phạm vi chuyên môn kỹ thuật chưa được kiểm soát tự động trên phần mềm HIS.\n• Thời gian tra cứu và rà soát hồ sơ hành nghề khi có đoàn thanh tra: mất từ 3 đến 5 ngày làm việc.\n• Nguy cơ bác sĩ thực hiện dịch vụ kỹ thuật chưa được phân quyền trên hệ thống.",
      "targetCondition": "• Tỷ lệ số hóa hồ sơ người hành nghề toàn hệ thống: Hiện trạng Dưới 40% ➔ Cam kết đạt Đạt 100% (1.130 nhân sự)\n• Kiểm soát phân quyền chỉ định kỹ thuật trên HIS: Hiện trạng Thủ công ➔ Cam kết đạt Chặn tự động 100% vi phạm\n• Thời gian trích xuất báo cáo nhân sự hành nghề: Hiện trạng 3 - 5 ngày ➔ Cam kết đạt Dưới 30 giây (tức thì)\n• Tỷ lệ xuất toán BHYT do sai phạm chứng chỉ hành nghề: Hiện trạng Tiềm ẩn nguy cơ ➔ Cam kết đạt Triệt tiêu về 0 đồng",
      "rootCauseAnalysis": "Why 1: Tại sao việc theo dõi chứng chỉ hành nghề và phân quyền kỹ thuật dễ xảy ra sai sót? ➔ Do số lượng nhân sự y tế lớn, biến động thường xuyên và bố trí phân tán tại nhiều cơ sở.\nWhy 2: Tại sao không kiểm soát tự động trên phần mềm kê đơn và chỉ định? ➔ Do phần mềm HIS chưa liên thông với cơ sở dữ liệu quản lý chứng chỉ hành nghề nội bộ.\nWhy 3: Tại sao việc rà soát thời hạn CME và giấy phép hành nghề mất nhiều thời gian? ➔ Do các tài liệu lưu trữ dạng hồ sơ giấy tại Phòng KHTH và Phòng Tổ chức cán bộ.\nWhy 4: Tại sao khó phát hiện kịp thời bác sĩ chỉ định kỹ thuật vượt phạm vi? ➔ Do thiếu cơ chế phân quyền tài khoản bác sĩ gắn chặt với mã số chứng chỉ hành nghề hợp pháp.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Chưa số hóa toàn diện hoạt động quản trị tuân thủ hành nghề y tế thành một hệ sinh thái dữ liệu tập trung (Medical Registry Management - MRM). ➔ Cần xây dựng hệ thống phần mềm HV-MRM tích hợp tự động vào lõi phần mềm HIS để chặn vi phạm từ gốc.",
      "countermeasures": "• Giải pháp 1 (Xây dựng phần mềm HV-MRM): Thiết kế và triển khai phân hệ phần mềm Quản lý Hành nghề Nội bộ (HV-MRM), số hóa toàn bộ thông tin CCHN, phạm vi chuyên môn và chứng chỉ đào tạo liên tục (CME).\n• Giải pháp 2 (Khóa phân quyền trên HIS): Tích hợp API giữa HV-MRM và HIS: Bác sĩ chỉ có thể ký số và chỉ định các dịch vụ kỹ thuật nằm trong danh mục đã được phê duyệt bằng văn bản.\n• Giải pháp 3 (Cảnh báo thời hạn tự động): Cài đặt cơ chế cảnh báo tự động trước 06 tháng đối với các chứng chỉ sắp hết hạn đào tạo liên tục hoặc đến hạn cập nhật kiến thức y khoa.\n• Giải pháp 4 (Báo cáo trực quan Sở Y tế): Tự động kết xuất báo cáo danh sách người hành nghề theo đúng định dạng Mẫu quy định của Bộ Y tế và Sở Y tế chỉ với một thao tác.",
      "planImplementation": "Khu vực: Thử nghiệm số hóa và liên thông phân quyền cho toàn bộ bác sĩ Khối Ngoại và Khối Cấp cứu - Hồi sức.\nThời gian: Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.\nSản phẩm đầu ra: Hệ thống phần mềm HV-MRM vận hành thử nghiệm ổn định; 100% hồ sơ bác sĩ thí điểm được liên thông phân quyền trên HIS và Quy chế Quản lý Hành nghề Nội bộ số hóa.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại PHÒNG KẾ HOẠCH TỔNG HỢP; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "Quản lý thủ công 1.130 nhân sự y tế trên các tệp Excel phân tán.\n• 696 hồ sơ CCHN với 188 phạm vi chuyên môn kỹ thuật chưa được kiểm soát tự động trên phần mềm HIS.\n• Thời gian tra cứu và rà soát hồ sơ hành nghề khi có đoàn thanh tra: mất từ 3 đến 5 ngày làm việc.\n• Nguy cơ bác sĩ thực hiện dịch vụ kỹ thuật chưa được phân quyền trên hệ thống.",
      "smartGoal": "• Tỷ lệ số hóa hồ sơ người hành nghề toàn hệ thống: Hiện trạng Dưới 40% ➔ Cam kết đạt Đạt 100% (1.130 nhân sự)\n• Kiểm soát phân quyền chỉ định kỹ thuật trên HIS: Hiện trạng Thủ công ➔ Cam kết đạt Chặn tự động 100% vi phạm\n• Thời gian trích xuất báo cáo nhân sự hành nghề: Hiện trạng 3 - 5 ngày ➔ Cam kết đạt Dưới 30 giây (tức thì)\n• Tỷ lệ xuất toán BHYT do sai phạm chứng chỉ hành nghề: Hiện trạng Tiềm ẩn nguy cơ ➔ Cam kết đạt Triệt tiêu về 0 đồng",
      "rootCause": "Why 1: Tại sao việc theo dõi chứng chỉ hành nghề và phân quyền kỹ thuật dễ xảy ra sai sót? ➔ Do số lượng nhân sự y tế lớn, biến động thường xuyên và bố trí phân tán tại nhiều cơ sở.\nWhy 2: Tại sao không kiểm soát tự động trên phần mềm kê đơn và chỉ định? ➔ Do phần mềm HIS chưa liên thông với cơ sở dữ liệu quản lý chứng chỉ hành nghề nội bộ.\nWhy 3: Tại sao việc rà soát thời hạn CME và giấy phép hành nghề mất nhiều thời gian? ➔ Do các tài liệu lưu trữ dạng hồ sơ giấy tại Phòng KHTH và Phòng Tổ chức cán bộ.\nWhy 4: Tại sao khó phát hiện kịp thời bác sĩ chỉ định kỹ thuật vượt phạm vi? ➔ Do thiếu cơ chế phân quyền tài khoản bác sĩ gắn chặt với mã số chứng chỉ hành nghề hợp pháp.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Chưa số hóa toàn diện hoạt động quản trị tuân thủ hành nghề y tế thành một hệ sinh thái dữ liệu tập trung (Medical Registry Management - MRM). ➔ Cần xây dựng hệ thống phần mềm HV-MRM tích hợp tự động vào lõi phần mềm HIS để chặn vi phạm từ gốc.",
      "resultsBeforeAfter": [
        {
          "metric": "Tỷ lệ số hóa hồ sơ người hành nghề toàn hệ thống",
          "before": "Dưới 40%",
          "after": "Đạt 100% (1.130 nhân sự)"
        },
        {
          "metric": "Kiểm soát phân quyền chỉ định kỹ thuật trên HIS",
          "before": "Thủ công",
          "after": "Chặn tự động 100% vi phạm"
        },
        {
          "metric": "Thời gian trích xuất báo cáo nhân sự hành nghề",
          "before": "3 - 5 ngày",
          "after": "Dưới 30 giây (tức thì)"
        },
        {
          "metric": "Tỷ lệ xuất toán BHYT do sai phạm chứng chỉ hành nghề",
          "before": "Tiềm ẩn nguy cơ",
          "after": "Triệt tiêu về 0 đồng"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 98/100đ (ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Thử nghiệm số hóa và liên thông phân quyền cho toàn bộ bác sĩ Khối Ngoại và Khối Cấp cứu - Hồi sức.",
        "time": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "Nguyễn Thành Lâm",
    "nhomTacGia": "Nguyễn Thành Lâm, ĐD. Trần Đình Vũ, CN. Đỗ Văn Nam",
    "diemBanDau": "98"
  },
  {
    "maDeTai": "KZ16-CDHA-01",
    "tenDeTai": "Xây dựng và chuyển đổi số phương pháp 3P tại khoa Chẩn đoán Hình ảnh",
    "tenSanPham": "Xây dựng và chuyển đổi số phương pháp 3P tại khoa Chẩn đoán Hình ảnh",
    "khoaPhong": "KHOA CHẨN ĐOÁN HÌNH ẢNH",
    "khoaPhoiHop": "",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 5: Chuyển đổi số và ứng dụng bệnh viện thông minh (Hiện đại hóa quản trị nhân sự và đãi ngộ 3P).",
    "tacGia": "KTV. Nguyễn Thành Lâm",
    "authorsDetailed": [
      {
        "name": "KTV. Nguyễn Thành Lâm",
        "title": "Kỹ thuật viên trưởng Khoa CĐHA",
        "role": "Trưởng nhóm đề án (Chủ nhiệm)",
        "stt": "1",
        "hoTen": "KTV. Nguyễn Thành Lâm",
        "chucVu": "Kỹ thuật viên trưởng Khoa CĐHA",
        "vaiTro": "Trưởng nhóm đề án (Chủ nhiệm)"
      },
      {
        "name": "BSCKI. Tạ Tất Thắng",
        "title": "Trưởng khoa CĐHA",
        "role": "Cố vấn chuyên môn và định mức kỹ thuật",
        "stt": "2",
        "hoTen": "BSCKI. Tạ Tất Thắng",
        "chucVu": "Trưởng khoa CĐHA",
        "vaiTro": "Cố vấn chuyên môn và định mức kỹ thuật"
      },
      {
        "name": "KTV. Trần Văn Chung",
        "title": "Kỹ thuật viên CĐHA",
        "role": "Thành viên phụ trách dữ liệu PACS/RIS",
        "stt": "3",
        "hoTen": "KTV. Trần Văn Chung",
        "chucVu": "Kỹ thuật viên CĐHA",
        "vaiTro": "Thành viên phụ trách dữ liệu PACS/RIS"
      }
    ],
    "thucTrang": "Khoa Chẩn đoán hình ảnh có 51 nhân sự thuộc 3 nhóm chuyên môn (Bác sĩ đọc kết quả, KTV chụp chiếu và Điều dưỡng can thiệp). Cơ chế phân bổ quỹ lương hiệu suất trước đây tính theo ca chụp cào bằng, chưa phản ánh đúng độ phức tạp và giá trị lao động wRVU của từng kỹ thuật chuyên sâu (như chụp cắt lớp vi tính mạch máu não, cộng hưởng từ tim), làm giảm động lực cống hiến của nhân sự tay nghề cao.",
    "soLieuBanDau": [
      "51 nhân sự khoa CĐHA hưởng mức phân bổ lương hiệu suất theo cơ chế cào bằng sản lượng cơ học.",
      "Chưa lượng hóa được độ phức tạp và rủi ro tia xạ giữa 120 danh mục kỹ thuật chụp chiếu.",
      "Thời gian tính toán và đối soát bảng điểm thi đua cuối tháng mất 3 ngày làm việc của KTV trưởng.",
      "Đánh giá năng lực P2 hàng quý còn mang tính bình bầu cảm tính, thiếu tiêu chí định lượng minh bạch."
    ],
    "fiveWhys": [
      {
        "level": "Why 1",
        "question": "Tại sao mức độ hài lòng về đãi ngộ hiệu suất của nhân viên khoa CĐHA chưa cao?",
        "answer": "Do việc phân chia thu nhập chưa tương xứng với độ phức tạp kỹ thuật và thời gian chụp của từng ca."
      },
      {
        "level": "Why 2",
        "question": "Tại sao không tính toán theo độ phức tạp kỹ thuật của từng ca chụp?",
        "answer": "Do chưa xây dựng được bảng quy đổi trọng số giá trị kỹ thuật wRVU chuẩn cho 120 danh mục dịch vụ."
      },
      {
        "level": "Why 3",
        "question": "Tại sao việc đánh giá năng lực cá nhân còn mang tính hình thức?",
        "answer": "Do thiếu khung tiêu chuẩn năng lực P2 rõ ràng theo từng bậc tay nghề của Kỹ thuật viên và Bác sĩ."
      },
      {
        "level": "Why 4",
        "question": "Tại sao khâu đối soát số liệu sản lượng hàng tháng mất nhiều thời gian?",
        "answer": "Do dữ liệu ca chụp phải kết xuất thủ công từ nhiều máy chụp riêng lẻ thay vì trích xuất tự động từ PACS."
      },
      {
        "level": "Why 5 (Cốt lõi)",
        "question": "NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Cơ chế đãi ngộ 3P tại khoa chưa được chuẩn hóa theo phương pháp luận khoa học và chưa được số hóa liên thông trực tiếp với hệ thống PACS/RIS.",
        "answer": "Cần xây dựng bảng điểm trọng số kỹ thuật wRVU và lập trình công cụ tự động tính toán lương 3P theo thời gian thực."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Chuẩn hóa bảng trọng số wRVU cho danh mục kỹ thuật",
        "hienTrang": "0 danh mục",
        "mucTieu": "100% (120 danh mục CĐHA)",
        "phuongPhap": "Bảng trọng số wRVU phê duyệt"
      },
      {
        "chiTieu": "Tự động trích xuất sản lượng tính P3 từ PACS/RIS",
        "hienTrang": "Thủ công 100%",
        "mucTieu": "Tự động hóa 100%",
        "phuongPhap": "Phần mềm tính lương 3P nội bộ"
      },
      {
        "chiTieu": "Thời gian tính toán đối soát thi đua cuối tháng",
        "hienTrang": "3 ngày làm việc",
        "mucTieu": "Dưới 15 phút (tức thì)",
        "phuongPhap": "Báo cáo lương 3P tự động"
      },
      {
        "chiTieu": "Mức độ hài lòng của nhân viên khoa về tính công bằng",
        "hienTrang": "Khoảng 65%",
        "mucTieu": "Nâng lên trên 92%",
        "phuongPhap": "Khảo sát chỉ số hài lòng nội bộ"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Xây dựng bảng điểm wRVU chuẩn): Khảo sát và tính toán thời gian thao tác, độ phức tạp kỹ thuật và rủi ro tia xạ để ban hành Bảng trọng số wRVU cho toàn bộ 120 kỹ thuật X-quang, CT-Scanner và MRI.",
      "Giải pháp 2 (Khung năng lực P2 chuẩn hóa): Thiết lập khung năng lực 5 bậc cho Kỹ thuật viên CĐHA (từ thao tác máy cơ bản đến chụp mạch máu xóa nền can thiệp), làm căn cứ trả lương P2.",
      "Giải pháp 3 (Số hóa liên thông PACS/RIS): Phối hợp với kỹ sư phần mềm lập trình công cụ trích xuất tự động số ca chụp theo mã nhân viên từ hệ thống PACS/RIS để tính lương P3.",
      "Giải pháp 4 (Bảng theo dõi minh bạch thời gian thực): Công khai kết quả sản lượng wRVU hàng ngày trên bảng thông tin điện tử nội bộ khoa để nhân viên tự đối soát."
    ],
    "phamVi": "Áp dụng thử nghiệm cho kíp Kỹ thuật viên vận hành máy CT-Scanner và MRI thuộc Khoa Chẩn đoán Hình ảnh.",
    "thoiGian": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
    "sanPhamDauRa": "Bảng trọng số wRVU 120 kỹ thuật CĐHA; Bảng tính toán lương 3P tự động liên thông PACS và Báo cáo nghiệm thu kết quả cải tiến.",
    "soHieuVanBan": "Số: 16/TB-QLCL-KAIZEN",
    "tongDiemThamDinh": 96,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "19 / 20",
        "nhanXet": "Cải tiến đãi ngộ 3P là chìa khóa then chốt giữ chân nhân tài và tối ưu hóa công suất máy móc triệu đô."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "24 / 25",
        "nhanXet": "Dữ liệu PACS/RIS rất chuẩn hóa, là điều kiện lý tưởng để tự động hóa tính điểm wRVU."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "24 / 20",
        "nhanXet": "Triệt tiêu cào bằng, tạo động lực mạnh mẽ cho nhân viên chụp các ca khó ngoài giờ hành chính."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "14 / 15",
        "nhanXet": "Là mô hình điểm để chuyển giao nhân rộng cho Khoa Xét nghiệm và Khối Lâm sàng toàn viện."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "15 / 20",
        "nhanXet": "Đề án gắn kết hữu cơ hoàn hảo giữa Cải tiến Kaizen và Quản trị Nhân sự Lương 3P hiện đại."
      }
    ],
    "ketLuanQLCL": "1. Phê duyệt Đề cương A3 cho nhóm tác giả KHOA CHẨN ĐOÁN HÌNH ẢNH để chính thức triển khai thử nghiệm thực tế đề án theo đúng kế hoạch cam kết.\r\n2. Đề nghị nhóm tác giả tuân thủ quy trình chuyên môn, theo dõi sát sao các chỉ số an toàn người bệnh và ghi nhận đầy đủ số liệu đo lường thực tế.\r\n3. Tổ QLCL sẽ phối hợp kiểm chuẩn và hỗ trợ đơn vị hoàn thiện Báo cáo Nghiệm thu A3 trước Vòng Chung kết Hội thi Kaizen 16 Năm.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-CDHA-01 02. Bản Đăng ký Sau Hiệu chỉnh Chẩn Đoán Hình Ảnh KTV. Nguyễn Thành Lâm.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 7322
      },
      {
        "fileName": "KZ16-CDHA-01 03. Biên bản Thẩm định Chẩn Đoán Hình Ảnh KTV. Nguyễn Thành Lâm.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 3826
      },
      {
        "fileName": "KZ16-CDHA-01 04. Đề cương A3 Triển khai Thực nghiệm Chẩn Đoán Hình Ảnh KTV. Nguyễn Thành Lâm.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 5740
      }
    ],
    "quickSummary": {
      "idea": "Xây dựng và chuyển đổi số phương pháp 3P tại khoa Chẩn đoán Hình ảnh",
      "painPoints": [
        "51 nhân sự khoa CĐHA hưởng mức phân bổ lương hiệu suất theo cơ chế cào bằng sản lượng cơ học.",
        "Chưa lượng hóa được độ phức tạp và rủi ro tia xạ giữa 120 danh mục kỹ thuật chụp chiếu.",
        "Thời gian tính toán và đối soát bảng điểm thi đua cuối tháng mất 3 ngày làm việc của KTV trưởng."
      ],
      "solutions": [
        "Giải pháp 1 (Xây dựng bảng điểm wRVU chuẩn): Khảo sát và tính toán thời gian thao tác, độ phức tạp kỹ thuật và rủi ro tia xạ để ban hành Bảng trọng số wRVU cho toàn bộ 120 kỹ thuật X-quang, CT-Scanner và MRI.",
        "Giải pháp 2 (Khung năng lực P2 chuẩn hóa): Thiết lập khung năng lực 5 bậc cho Kỹ thuật viên CĐHA (từ thao tác máy cơ bản đến chụp mạch máu xóa nền can thiệp), làm căn cứ trả lương P2.",
        "Giải pháp 3 (Số hóa liên thông PACS/RIS): Phối hợp với kỹ sư phần mềm lập trình công cụ trích xuất tự động số ca chụp theo mã nhân viên từ hệ thống PACS/RIS để tính lương P3."
      ],
      "keyMetrics": [
        {
          "label": "Chuẩn hóa bảng trọng số wRVU cho danh ...",
          "before": "0 danh mục",
          "after": "100% (120 danh mục CĐHA)",
          "note": "Bảng trọng số wRVU phê duyệt"
        },
        {
          "label": "Tự động trích xuất sản lượng tính P3 t...",
          "before": "Thủ công 100%",
          "after": "Tự động hóa 100%",
          "note": "Phần mềm tính lương 3P nội bộ"
        },
        {
          "label": "Thời gian tính toán đối soát thi đua c...",
          "before": "3 ngày làm việc",
          "after": "Dưới 15 phút (tức thì)",
          "note": "Báo cáo lương 3P tự động"
        },
        {
          "label": "Mức độ hài lòng của nhân viên khoa về ...",
          "before": "Khoảng 65%",
          "after": "Nâng lên trên 92%",
          "note": "Khảo sát chỉ số hài lòng nội bộ"
        }
      ]
    },
    "a3Report": {
      "title": "Xây dựng và chuyển đổi số phương pháp 3P tại khoa Chẩn đoán Hình ảnh",
      "department": "KHOA CHẨN ĐOÁN HÌNH ẢNH",
      "leader": "KTV. Nguyễn Thành Lâm",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Khoa Chẩn đoán hình ảnh có 51 nhân sự thuộc 3 nhóm chuyên môn (Bác sĩ đọc kết quả, KTV chụp chiếu và Điều dưỡng can thiệp). Cơ chế phân bổ quỹ lương hiệu suất trước đây tính theo ca chụp cào bằng, chưa phản ánh đúng độ phức tạp và giá trị lao động wRVU của từng kỹ thuật chuyên sâu (như chụp cắt lớp vi tính mạch máu não, cộng hưởng từ tim), làm giảm động lực cống hiến của nhân sự tay nghề cao.",
      "currentCondition": "51 nhân sự khoa CĐHA hưởng mức phân bổ lương hiệu suất theo cơ chế cào bằng sản lượng cơ học.\n• Chưa lượng hóa được độ phức tạp và rủi ro tia xạ giữa 120 danh mục kỹ thuật chụp chiếu.\n• Thời gian tính toán và đối soát bảng điểm thi đua cuối tháng mất 3 ngày làm việc của KTV trưởng.\n• Đánh giá năng lực P2 hàng quý còn mang tính bình bầu cảm tính, thiếu tiêu chí định lượng minh bạch.",
      "targetCondition": "• Chuẩn hóa bảng trọng số wRVU cho danh mục kỹ thuật: Hiện trạng 0 danh mục ➔ Cam kết đạt 100% (120 danh mục CĐHA)\n• Tự động trích xuất sản lượng tính P3 từ PACS/RIS: Hiện trạng Thủ công 100% ➔ Cam kết đạt Tự động hóa 100%\n• Thời gian tính toán đối soát thi đua cuối tháng: Hiện trạng 3 ngày làm việc ➔ Cam kết đạt Dưới 15 phút (tức thì)\n• Mức độ hài lòng của nhân viên khoa về tính công bằng: Hiện trạng Khoảng 65% ➔ Cam kết đạt Nâng lên trên 92%",
      "rootCauseAnalysis": "Why 1: Tại sao mức độ hài lòng về đãi ngộ hiệu suất của nhân viên khoa CĐHA chưa cao? ➔ Do việc phân chia thu nhập chưa tương xứng với độ phức tạp kỹ thuật và thời gian chụp của từng ca.\nWhy 2: Tại sao không tính toán theo độ phức tạp kỹ thuật của từng ca chụp? ➔ Do chưa xây dựng được bảng quy đổi trọng số giá trị kỹ thuật wRVU chuẩn cho 120 danh mục dịch vụ.\nWhy 3: Tại sao việc đánh giá năng lực cá nhân còn mang tính hình thức? ➔ Do thiếu khung tiêu chuẩn năng lực P2 rõ ràng theo từng bậc tay nghề của Kỹ thuật viên và Bác sĩ.\nWhy 4: Tại sao khâu đối soát số liệu sản lượng hàng tháng mất nhiều thời gian? ➔ Do dữ liệu ca chụp phải kết xuất thủ công từ nhiều máy chụp riêng lẻ thay vì trích xuất tự động từ PACS.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Cơ chế đãi ngộ 3P tại khoa chưa được chuẩn hóa theo phương pháp luận khoa học và chưa được số hóa liên thông trực tiếp với hệ thống PACS/RIS. ➔ Cần xây dựng bảng điểm trọng số kỹ thuật wRVU và lập trình công cụ tự động tính toán lương 3P theo thời gian thực.",
      "countermeasures": "• Giải pháp 1 (Xây dựng bảng điểm wRVU chuẩn): Khảo sát và tính toán thời gian thao tác, độ phức tạp kỹ thuật và rủi ro tia xạ để ban hành Bảng trọng số wRVU cho toàn bộ 120 kỹ thuật X-quang, CT-Scanner và MRI.\n• Giải pháp 2 (Khung năng lực P2 chuẩn hóa): Thiết lập khung năng lực 5 bậc cho Kỹ thuật viên CĐHA (từ thao tác máy cơ bản đến chụp mạch máu xóa nền can thiệp), làm căn cứ trả lương P2.\n• Giải pháp 3 (Số hóa liên thông PACS/RIS): Phối hợp với kỹ sư phần mềm lập trình công cụ trích xuất tự động số ca chụp theo mã nhân viên từ hệ thống PACS/RIS để tính lương P3.\n• Giải pháp 4 (Bảng theo dõi minh bạch thời gian thực): Công khai kết quả sản lượng wRVU hàng ngày trên bảng thông tin điện tử nội bộ khoa để nhân viên tự đối soát.",
      "planImplementation": "Khu vực: Áp dụng thử nghiệm cho kíp Kỹ thuật viên vận hành máy CT-Scanner và MRI thuộc Khoa Chẩn đoán Hình ảnh.\nThời gian: Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.\nSản phẩm đầu ra: Bảng trọng số wRVU 120 kỹ thuật CĐHA; Bảng tính toán lương 3P tự động liên thông PACS và Báo cáo nghiệm thu kết quả cải tiến.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại KHOA CHẨN ĐOÁN HÌNH ẢNH; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "51 nhân sự khoa CĐHA hưởng mức phân bổ lương hiệu suất theo cơ chế cào bằng sản lượng cơ học.\n• Chưa lượng hóa được độ phức tạp và rủi ro tia xạ giữa 120 danh mục kỹ thuật chụp chiếu.\n• Thời gian tính toán và đối soát bảng điểm thi đua cuối tháng mất 3 ngày làm việc của KTV trưởng.\n• Đánh giá năng lực P2 hàng quý còn mang tính bình bầu cảm tính, thiếu tiêu chí định lượng minh bạch.",
      "smartGoal": "• Chuẩn hóa bảng trọng số wRVU cho danh mục kỹ thuật: Hiện trạng 0 danh mục ➔ Cam kết đạt 100% (120 danh mục CĐHA)\n• Tự động trích xuất sản lượng tính P3 từ PACS/RIS: Hiện trạng Thủ công 100% ➔ Cam kết đạt Tự động hóa 100%\n• Thời gian tính toán đối soát thi đua cuối tháng: Hiện trạng 3 ngày làm việc ➔ Cam kết đạt Dưới 15 phút (tức thì)\n• Mức độ hài lòng của nhân viên khoa về tính công bằng: Hiện trạng Khoảng 65% ➔ Cam kết đạt Nâng lên trên 92%",
      "rootCause": "Why 1: Tại sao mức độ hài lòng về đãi ngộ hiệu suất của nhân viên khoa CĐHA chưa cao? ➔ Do việc phân chia thu nhập chưa tương xứng với độ phức tạp kỹ thuật và thời gian chụp của từng ca.\nWhy 2: Tại sao không tính toán theo độ phức tạp kỹ thuật của từng ca chụp? ➔ Do chưa xây dựng được bảng quy đổi trọng số giá trị kỹ thuật wRVU chuẩn cho 120 danh mục dịch vụ.\nWhy 3: Tại sao việc đánh giá năng lực cá nhân còn mang tính hình thức? ➔ Do thiếu khung tiêu chuẩn năng lực P2 rõ ràng theo từng bậc tay nghề của Kỹ thuật viên và Bác sĩ.\nWhy 4: Tại sao khâu đối soát số liệu sản lượng hàng tháng mất nhiều thời gian? ➔ Do dữ liệu ca chụp phải kết xuất thủ công từ nhiều máy chụp riêng lẻ thay vì trích xuất tự động từ PACS.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Cơ chế đãi ngộ 3P tại khoa chưa được chuẩn hóa theo phương pháp luận khoa học và chưa được số hóa liên thông trực tiếp với hệ thống PACS/RIS. ➔ Cần xây dựng bảng điểm trọng số kỹ thuật wRVU và lập trình công cụ tự động tính toán lương 3P theo thời gian thực.",
      "resultsBeforeAfter": [
        {
          "metric": "Chuẩn hóa bảng trọng số wRVU cho danh mục kỹ thuật",
          "before": "0 danh mục",
          "after": "100% (120 danh mục CĐHA)"
        },
        {
          "metric": "Tự động trích xuất sản lượng tính P3 từ PACS/RIS",
          "before": "Thủ công 100%",
          "after": "Tự động hóa 100%"
        },
        {
          "metric": "Thời gian tính toán đối soát thi đua cuối tháng",
          "before": "3 ngày làm việc",
          "after": "Dưới 15 phút (tức thì)"
        },
        {
          "metric": "Mức độ hài lòng của nhân viên khoa về tính công bằng",
          "before": "Khoảng 65%",
          "after": "Nâng lên trên 92%"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 96/100đ (ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Áp dụng thử nghiệm cho kíp Kỹ thuật viên vận hành máy CT-Scanner và MRI thuộc Khoa Chẩn đoán Hình ảnh.",
        "time": "Từ ngày 06 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "KTV. Nguyễn Thành Lâm",
    "nhomTacGia": "KTV. Nguyễn Thành Lâm, BSCKI. Tạ Tất Thắng, KTV. Trần Văn Chung",
    "diemBanDau": "96"
  },
  {
    "maDeTai": "KZ16-PC-01",
    "tenDeTai": "Cải tiến quy trình phúc tra và số hóa giám sát thực thi kiến nghị sau thanh tra chuyên đề tại Bệnh viện Đa khoa Hùng Vương",
    "tenSanPham": "Cải tiến quy trình phúc tra và số hóa giám sát thực thi kiến nghị sau thanh tra chuyên đề tại Bệnh viện Đa khoa Hùng Vương",
    "khoaPhong": "PHÒNG PHÁP CHẾ",
    "khoaPhoiHop": "Phòng Công nghệ Thông tin",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 5: Chuyển đổi số và ứng dụng công nghệ (Quản trị chất lượng bệnh viện, an toàn pháp lý và chuẩn hóa quy trình kiểm soát nội bộ).",
    "tacGia": "LS. Nguyễn Đức Nhưng",
    "authorsDetailed": [
      {
        "name": "LS. Nguyễn Đức Nhưng",
        "title": "Trưởng phòng Pháp chế",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)",
        "stt": "1",
        "hoTen": "LS. Nguyễn Đức Nhưng",
        "chucVu": "Trưởng phòng Pháp chế",
        "vaiTro": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "CN. Lê Tiến Tuyên",
        "title": "Chuyên viên Phòng Pháp chế",
        "role": "Thư ký đề án (Theo dõi số liệu)",
        "stt": "2",
        "hoTen": "CN. Lê Tiến Tuyên",
        "chucVu": "Chuyên viên Phòng Pháp chế",
        "vaiTro": "Thư ký đề án (Theo dõi số liệu)"
      },
      {
        "name": "CN. Nguyễn Hồng Thắm",
        "title": "Chuyên viên Phòng Pháp chế",
        "role": "Thành viên thực hiện đề án",
        "stt": "3",
        "hoTen": "CN. Nguyễn Hồng Thắm",
        "chucVu": "Chuyên viên Phòng Pháp chế",
        "vaiTro": "Thành viên thực hiện đề án"
      },
      {
        "name": "CN. Nguyễn Trung Dũng",
        "title": "Chuyên viên Phòng Pháp chế",
        "role": "Thành viên thực hiện đề án",
        "stt": "4",
        "hoTen": "CN. Nguyễn Trung Dũng",
        "chucVu": "Chuyên viên Phòng Pháp chế",
        "vaiTro": "Thành viên thực hiện đề án"
      },
      {
        "name": "CN. Bùi Thị Hiền",
        "title": "Chuyên viên Phòng Pháp chế",
        "role": "Thành viên thực hiện đề án",
        "stt": "5",
        "hoTen": "CN. Bùi Thị Hiền",
        "chucVu": "Chuyên viên Phòng Pháp chế",
        "vaiTro": "Thành viên thực hiện đề án"
      }
    ],
    "thucTrang": "Thanh tra chuyên đề là một công cụ quan trọng để phát hiện sai sót, tồn tại, bất cập trong hoạt động bệnh viện, đánh giá mức độ tuân thủ pháp luật, quy chế chuyên môn và quy định nội bộ, xác định nguyên nhân của những tồn tại và đề xuất biện pháp khắc phục, phòng ngừa tái diễn. Tuy nhiên, kết quả thực tế phụ thuộc rất lớn vào việc các đơn vị có thực hiện nghiêm túc kiến nghị và công tác phúc tra có được theo dõi đến cùng hay không. Tính từ đầu năm 2026 đến nay, Phòng Pháp chế đã tiến hành 06 cuộc thanh kiểm tra, nhưng việc thực hiện kiến nghị tại các đơn vị còn chậm trễ, đối phó, thiếu công cụ số hóa giám sát và chưa gắn trách nhiệm cá nhân cụ thể.",
    "soLieuBanDau": [
      "Tính từ đầu năm 2026 đến nay, Phòng Pháp chế đã triển khai 06 cuộc thanh tra chuyên đề toàn viện.",
      "Tỷ lệ thực hiện kiến nghị sau thanh tra đúng hạn hiện tại ước tính đạt dưới 65%.",
      "Tỷ lệ thực hiện chậm tiến độ hoặc quá hạn chưa có báo cáo khắc phục chiếm khoảng 35%.",
      "100% công tác giám sát, theo dõi và phúc tra thực hiện thủ công bằng văn bản giấy, dễ thất lạc và thiếu tính liên tục.",
      "Chưa có công cụ số hóa để kiểm soát tiến độ và minh chứng thực tế của từng đơn vị."
    ],
    "fiveWhys": [
      {
        "level": "Why 1",
        "question": "Tại sao các kết luận, kiến nghị sau thanh tra thường bị chậm khắc phục?",
        "answer": "Vì lãnh đạo đơn vị coi kết luận thanh tra chỉ là một yêu cầu hành chính hoặc nhiệm vụ chung của khoa/phòng, tâm lý e ngại nhận khuyết điểm hoặc thực hiện mang tính đối phó với đoàn kiểm tra."
      },
      {
        "level": "Why 2",
        "question": "Tại sao các đơn vị lại có nhận thức đối phó và coi nhẹ việc khắc phục như vậy?",
        "answer": "Vì họ ưu tiên các hoạt động chuyên môn khám chữa bệnh hàng ngày hơn, còn nhiệm vụ khắc phục sau thanh tra bị xem là việc thứ yếu."
      },
      {
        "level": "Why 3",
        "question": "Tại sao việc khắc phục bị xem là thứ yếu và không được chủ động thực hiện?",
        "answer": "Vì chưa xác định được người chịu trách nhiệm đến cùng; xuất hiện tình trạng 'tập thể chịu trách nhiệm' nhưng không có cá nhân nào chịu trách nhiệm chính."
      },
      {
        "level": "Why 4",
        "question": "Tại sao lại không xác định rõ người chịu trách nhiệm chính cho từng kiến nghị?",
        "answer": "Vì cơ chế quản lý hiện tại chưa bắt buộc áp dụng nguyên tắc: 'Mỗi kiến nghị – một đơn vị chủ trì – một người chịu trách nhiệm chính'."
      },
      {
        "level": "Why 5 (Cốt lõi)",
        "question": "NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Hệ thống quản lý sau thanh tra cũ thiếu cơ chế giám sát gắn trách nhiệm giải trình trực tiếp và chưa có quy trình phúc tra thực tế bắt buộc cung cấp bằng chứng khách quan thay vì chỉ dựa vào báo cáo giải trình.",
        "answer": "Cần có một công cụ quản lý theo dõi tiến độ thực hiện các kiến nghị sau thanh tra bằng phần mềm số hóa và chuẩn hóa quy trình phúc tra thực chứng."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Tỷ lệ thực hiện kiến nghị sau thanh tra đúng hạn",
        "hienTrang": "< 65% kiến nghị",
        "mucTieu": "Đạt > 90% kiến nghị",
        "phuongPhap": "Theo dõi thực tế trên phần mềm số hóa"
      },
      {
        "chiTieu": "Tỷ lệ thực hiện chậm tiến độ",
        "hienTrang": "Chiếm 25% - 30%",
        "mucTieu": "Giảm xuống < 10%",
        "phuongPhap": "Hệ thống cảnh báo hạn tự động"
      },
      {
        "chiTieu": "Tỷ lệ chưa thực hiện (quá hạn không báo cáo)",
        "hienTrang": "Chiếm khoảng 10%",
        "mucTieu": "Triệt tiêu về đúng 0%",
        "phuongPhap": "Phúc tra thực tế và khóa tiến độ trên phần mềm"
      },
      {
        "chiTieu": "Tỷ lệ kiến nghị có minh chứng khách quan",
        "hienTrang": "< 30% (chủ yếu báo cáo giấy)",
        "mucTieu": "Đạt 100% bằng chứng ảnh/file",
        "phuongPhap": "Hậu kiểm thực tế và kiểm chuẩn minh chứng"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Xây dựng và ứng dụng công cụ quản lý số hóa): Phòng Pháp chế chủ trì phối hợp chặt chẽ với Phòng Công nghệ Thông tin phát triển phần mềm số theo dõi tiến độ thực hiện các kiến nghị sau thanh tra; hỗ trợ giám sát trực quan, cập nhật trạng thái thực hiện và thay thế hoàn toàn quản lý thủ công.",
      "Giải pháp 2 (Cải tiến quy trình kiểm tra và cơ chế cung cấp minh chứng): Đổi mới phương thức hậu kiểm: Không chỉ dựa trên báo cáo giải trình của các đơn vị mà bắt buộc phải có bằng chứng khách quan thực tế (hình ảnh hiện trường, dữ liệu HIS/EMR, quy trình ký duyệt) đi kèm; triệt tiêu tâm lý đối phó sửa hồ sơ thay vì sửa quy trình.",
      "Giải pháp 3 (Gắn trách nhiệm giải trình trực tiếp đến từng cá nhân): Đưa vào áp dụng bắt buộc nguyên tắc: 'Mỗi kiến nghị – một đơn vị chủ trì – một người chịu trách nhiệm chính', loại bỏ hoàn toàn tình trạng đổ lỗi tập thể hoặc né tránh thực hiện."
    ],
    "phamVi": "Áp dụng thử nghiệm đối với toàn bộ các kết luận và kiến nghị phát sinh từ các cuộc thanh kiểm tra chuyên đề tại Bệnh viện Đa khoa Hùng Vương.",
    "thoiGian": "Từ ngày 06 tháng 09 năm 2026 đến ngày 31 tháng 12 năm 2026.",
    "sanPhamDauRa": "01 Phần mềm số hóa quản lý kiến nghị thanh tra vận hành chính thức; Quy chuẩn cung cấp minh chứng hậu kiểm số; Báo cáo nghiệm thu A3 đạt mục tiêu >90% đúng hạn.",
    "soHieuVanBan": "Số: 17/TB-QLCL-KZ16-PC-01",
    "tongDiemThamDinh": 94,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "19 / 20",
        "nhanXet": "Rất cấp thiết. Khâu phúc tra và theo dõi đến cùng các kết luận thanh tra là điểm nghẽn lớn nhất trong việc duy trì kỷ cương và hiệu lực pháp lý toàn viện."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "24 / 25",
        "nhanXet": "Tính khả thi cao do đơn vị chủ động phối hợp chặt chẽ với Phòng CNTT để số hóa công cụ giám sát và phân kỳ thử nghiệm 3 giai đoạn rõ ràng."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "19 / 20",
        "nhanXet": "Hiệu quả vượt trội, giải quyết triệt để sự chậm trễ và né tránh trách nhiệm, cam kết nâng tỷ lệ hoàn thành đúng hạn từ <65% lên >90%."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "15 / 15",
        "nhanXet": "Khả năng nhân rộng tuyệt đối, áp dụng làm quy chuẩn kiểm tra, phúc tra chung cho mọi đoàn thanh kiểm tra chuyên môn trong toàn bệnh viện."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "17 / 20",
        "nhanXet": "Sáng tạo và đột phá khi chuyển đổi từ hậu kiểm thụ động trên văn bản giấy sang cơ chế hậu kiểm bằng chứng số với nguyên tắc định danh trách nhiệm 1-1."
      }
    ],
    "ketLuanQLCL": "1. Phê duyệt Đề cương A3 cho nhóm tác giả PHÒNG PHÁP CHẾ để chính thức triển khai thử nghiệm thực tế đề án theo đúng kế hoạch cam kết.\r\n2. Đề nghị nhóm tác giả tuân thủ quy trình chuyên môn, theo dõi sát sao các chỉ số an toàn người bệnh và ghi nhận đầy đủ số liệu đo lường thực tế.\r\n3. Tổ QLCL sẽ phối hợp kiểm chuẩn và hỗ trợ đơn vị hoàn thiện Báo cáo Nghiệm thu A3 trước Vòng Chung kết Hội thi Kaizen 16 Năm.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-PC-01 02. Bản Đăng ký Sau Hiệu chỉnh Pháp Chế LS. Nguyễn Đức Nhưng.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 8954
      },
      {
        "fileName": "KZ16-PC-01 03. Biên bản Thẩm định Pháp Chế LS. Nguyễn Đức Nhưng.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 4240
      },
      {
        "fileName": "KZ16-PC-01 04. Đề cương A3 Triển khai Thực nghiệm Pháp Chế LS. Nguyễn Đức Nhưng.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 6910
      }
    ],
    "quickSummary": {
      "idea": "Cải tiến quy trình phúc tra và số hóa giám sát thực thi kiến nghị sau thanh tra chuyên đề tại Bệnh viện Đa khoa Hùng Vương",
      "painPoints": [
        "Tính từ đầu năm 2026 đến nay, Phòng Pháp chế đã triển khai 06 cuộc thanh tra chuyên đề toàn viện.",
        "Tỷ lệ thực hiện kiến nghị sau thanh tra đúng hạn hiện tại ước tính đạt dưới 65%.",
        "Tỷ lệ thực hiện chậm tiến độ hoặc quá hạn chưa có báo cáo khắc phục chiếm khoảng 35%."
      ],
      "solutions": [
        "Giải pháp 1 (Xây dựng và ứng dụng công cụ quản lý số hóa): Phòng Pháp chế chủ trì phối hợp chặt chẽ với Phòng Công nghệ Thông tin phát triển phần mềm số theo dõi tiến độ thực hiện các kiến nghị sau thanh tra; hỗ trợ giám sát trực quan, cập nhật trạng thái thực hiện và thay thế hoàn toàn quản lý thủ công.",
        "Giải pháp 2 (Cải tiến quy trình kiểm tra và cơ chế cung cấp minh chứng): Đổi mới phương thức hậu kiểm: Không chỉ dựa trên báo cáo giải trình của các đơn vị mà bắt buộc phải có bằng chứng khách quan thực tế (hình ảnh hiện trường, dữ liệu HIS/EMR, quy trình ký duyệt) đi kèm; triệt tiêu tâm lý đối phó sửa hồ sơ thay vì sửa quy trình.",
        "Giải pháp 3 (Gắn trách nhiệm giải trình trực tiếp đến từng cá nhân): Đưa vào áp dụng bắt buộc nguyên tắc: 'Mỗi kiến nghị – một đơn vị chủ trì – một người chịu trách nhiệm chính', loại bỏ hoàn toàn tình trạng đổ lỗi tập thể hoặc né tránh thực hiện."
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ thực hiện kiến nghị sau thanh tr...",
          "before": "< 65% kiến nghị",
          "after": "Đạt > 90% kiến nghị",
          "note": "Theo dõi thực tế trên phần mềm số hóa"
        },
        {
          "label": "Tỷ lệ thực hiện chậm tiến độ",
          "before": "Chiếm 25% - 30%",
          "after": "Giảm xuống < 10%",
          "note": "Hệ thống cảnh báo hạn tự động"
        },
        {
          "label": "Tỷ lệ chưa thực hiện (quá hạn không bá...",
          "before": "Chiếm khoảng 10%",
          "after": "Triệt tiêu về đúng 0%",
          "note": "Phúc tra thực tế và khóa tiến độ trên phần mềm"
        },
        {
          "label": "Tỷ lệ kiến nghị có minh chứng khách quan",
          "before": "< 30% (chủ yếu báo cáo giấy)",
          "after": "Đạt 100% bằng chứng ảnh/file",
          "note": "Hậu kiểm thực tế và kiểm chuẩn minh chứng"
        }
      ]
    },
    "a3Report": {
      "title": "Cải tiến quy trình phúc tra và số hóa giám sát thực thi kiến nghị sau thanh tra chuyên đề tại Bệnh viện Đa khoa Hùng Vương",
      "department": "PHÒNG PHÁP CHẾ",
      "leader": "LS. Nguyễn Đức Nhưng",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Thanh tra chuyên đề là một công cụ quan trọng để phát hiện sai sót, tồn tại, bất cập trong hoạt động bệnh viện, đánh giá mức độ tuân thủ pháp luật, quy chế chuyên môn và quy định nội bộ, xác định nguyên nhân của những tồn tại và đề xuất biện pháp khắc phục, phòng ngừa tái diễn. Tuy nhiên, kết quả thực tế phụ thuộc rất lớn vào việc các đơn vị có thực hiện nghiêm túc kiến nghị và công tác phúc tra có được theo dõi đến cùng hay không. Tính từ đầu năm 2026 đến nay, Phòng Pháp chế đã tiến hành 06 cuộc thanh kiểm tra, nhưng việc thực hiện kiến nghị tại các đơn vị còn chậm trễ, đối phó, thiếu công cụ số hóa giám sát và chưa gắn trách nhiệm cá nhân cụ thể.",
      "currentCondition": "Tính từ đầu năm 2026 đến nay, Phòng Pháp chế đã triển khai 06 cuộc thanh tra chuyên đề toàn viện.\n• Tỷ lệ thực hiện kiến nghị sau thanh tra đúng hạn hiện tại ước tính đạt dưới 65%.\n• Tỷ lệ thực hiện chậm tiến độ hoặc quá hạn chưa có báo cáo khắc phục chiếm khoảng 35%.\n• 100% công tác giám sát, theo dõi và phúc tra thực hiện thủ công bằng văn bản giấy, dễ thất lạc và thiếu tính liên tục.\n• Chưa có công cụ số hóa để kiểm soát tiến độ và minh chứng thực tế của từng đơn vị.",
      "targetCondition": "• Tỷ lệ thực hiện kiến nghị sau thanh tra đúng hạn: Hiện trạng < 65% kiến nghị ➔ Cam kết đạt Đạt > 90% kiến nghị\n• Tỷ lệ thực hiện chậm tiến độ: Hiện trạng Chiếm 25% - 30% ➔ Cam kết đạt Giảm xuống < 10%\n• Tỷ lệ chưa thực hiện (quá hạn không báo cáo): Hiện trạng Chiếm khoảng 10% ➔ Cam kết đạt Triệt tiêu về đúng 0%\n• Tỷ lệ kiến nghị có minh chứng khách quan: Hiện trạng < 30% (chủ yếu báo cáo giấy) ➔ Cam kết đạt Đạt 100% bằng chứng ảnh/file",
      "rootCauseAnalysis": "Why 1: Tại sao các kết luận, kiến nghị sau thanh tra thường bị chậm khắc phục? ➔ Vì lãnh đạo đơn vị coi kết luận thanh tra chỉ là một yêu cầu hành chính hoặc nhiệm vụ chung của khoa/phòng, tâm lý e ngại nhận khuyết điểm hoặc thực hiện mang tính đối phó với đoàn kiểm tra.\nWhy 2: Tại sao các đơn vị lại có nhận thức đối phó và coi nhẹ việc khắc phục như vậy? ➔ Vì họ ưu tiên các hoạt động chuyên môn khám chữa bệnh hàng ngày hơn, còn nhiệm vụ khắc phục sau thanh tra bị xem là việc thứ yếu.\nWhy 3: Tại sao việc khắc phục bị xem là thứ yếu và không được chủ động thực hiện? ➔ Vì chưa xác định được người chịu trách nhiệm đến cùng; xuất hiện tình trạng 'tập thể chịu trách nhiệm' nhưng không có cá nhân nào chịu trách nhiệm chính.\nWhy 4: Tại sao lại không xác định rõ người chịu trách nhiệm chính cho từng kiến nghị? ➔ Vì cơ chế quản lý hiện tại chưa bắt buộc áp dụng nguyên tắc: 'Mỗi kiến nghị – một đơn vị chủ trì – một người chịu trách nhiệm chính'.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Hệ thống quản lý sau thanh tra cũ thiếu cơ chế giám sát gắn trách nhiệm giải trình trực tiếp và chưa có quy trình phúc tra thực tế bắt buộc cung cấp bằng chứng khách quan thay vì chỉ dựa vào báo cáo giải trình. ➔ Cần có một công cụ quản lý theo dõi tiến độ thực hiện các kiến nghị sau thanh tra bằng phần mềm số hóa và chuẩn hóa quy trình phúc tra thực chứng.",
      "countermeasures": "• Giải pháp 1 (Xây dựng và ứng dụng công cụ quản lý số hóa): Phòng Pháp chế chủ trì phối hợp chặt chẽ với Phòng Công nghệ Thông tin phát triển phần mềm số theo dõi tiến độ thực hiện các kiến nghị sau thanh tra; hỗ trợ giám sát trực quan, cập nhật trạng thái thực hiện và thay thế hoàn toàn quản lý thủ công.\n• Giải pháp 2 (Cải tiến quy trình kiểm tra và cơ chế cung cấp minh chứng): Đổi mới phương thức hậu kiểm: Không chỉ dựa trên báo cáo giải trình của các đơn vị mà bắt buộc phải có bằng chứng khách quan thực tế (hình ảnh hiện trường, dữ liệu HIS/EMR, quy trình ký duyệt) đi kèm; triệt tiêu tâm lý đối phó sửa hồ sơ thay vì sửa quy trình.\n• Giải pháp 3 (Gắn trách nhiệm giải trình trực tiếp đến từng cá nhân): Đưa vào áp dụng bắt buộc nguyên tắc: 'Mỗi kiến nghị – một đơn vị chủ trì – một người chịu trách nhiệm chính', loại bỏ hoàn toàn tình trạng đổ lỗi tập thể hoặc né tránh thực hiện.",
      "planImplementation": "Khu vực: Áp dụng thử nghiệm đối với toàn bộ các kết luận và kiến nghị phát sinh từ các cuộc thanh kiểm tra chuyên đề tại Bệnh viện Đa khoa Hùng Vương.\nThời gian: Từ ngày 06 tháng 09 năm 2026 đến ngày 31 tháng 12 năm 2026.\nSản phẩm đầu ra: 01 Phần mềm số hóa quản lý kiến nghị thanh tra vận hành chính thức; Quy chuẩn cung cấp minh chứng hậu kiểm số; Báo cáo nghiệm thu A3 đạt mục tiêu >90% đúng hạn.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại PHÒNG PHÁP CHẾ; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "Tính từ đầu năm 2026 đến nay, Phòng Pháp chế đã triển khai 06 cuộc thanh tra chuyên đề toàn viện.\n• Tỷ lệ thực hiện kiến nghị sau thanh tra đúng hạn hiện tại ước tính đạt dưới 65%.\n• Tỷ lệ thực hiện chậm tiến độ hoặc quá hạn chưa có báo cáo khắc phục chiếm khoảng 35%.\n• 100% công tác giám sát, theo dõi và phúc tra thực hiện thủ công bằng văn bản giấy, dễ thất lạc và thiếu tính liên tục.\n• Chưa có công cụ số hóa để kiểm soát tiến độ và minh chứng thực tế của từng đơn vị.",
      "smartGoal": "• Tỷ lệ thực hiện kiến nghị sau thanh tra đúng hạn: Hiện trạng < 65% kiến nghị ➔ Cam kết đạt Đạt > 90% kiến nghị\n• Tỷ lệ thực hiện chậm tiến độ: Hiện trạng Chiếm 25% - 30% ➔ Cam kết đạt Giảm xuống < 10%\n• Tỷ lệ chưa thực hiện (quá hạn không báo cáo): Hiện trạng Chiếm khoảng 10% ➔ Cam kết đạt Triệt tiêu về đúng 0%\n• Tỷ lệ kiến nghị có minh chứng khách quan: Hiện trạng < 30% (chủ yếu báo cáo giấy) ➔ Cam kết đạt Đạt 100% bằng chứng ảnh/file",
      "rootCause": "Why 1: Tại sao các kết luận, kiến nghị sau thanh tra thường bị chậm khắc phục? ➔ Vì lãnh đạo đơn vị coi kết luận thanh tra chỉ là một yêu cầu hành chính hoặc nhiệm vụ chung của khoa/phòng, tâm lý e ngại nhận khuyết điểm hoặc thực hiện mang tính đối phó với đoàn kiểm tra.\nWhy 2: Tại sao các đơn vị lại có nhận thức đối phó và coi nhẹ việc khắc phục như vậy? ➔ Vì họ ưu tiên các hoạt động chuyên môn khám chữa bệnh hàng ngày hơn, còn nhiệm vụ khắc phục sau thanh tra bị xem là việc thứ yếu.\nWhy 3: Tại sao việc khắc phục bị xem là thứ yếu và không được chủ động thực hiện? ➔ Vì chưa xác định được người chịu trách nhiệm đến cùng; xuất hiện tình trạng 'tập thể chịu trách nhiệm' nhưng không có cá nhân nào chịu trách nhiệm chính.\nWhy 4: Tại sao lại không xác định rõ người chịu trách nhiệm chính cho từng kiến nghị? ➔ Vì cơ chế quản lý hiện tại chưa bắt buộc áp dụng nguyên tắc: 'Mỗi kiến nghị – một đơn vị chủ trì – một người chịu trách nhiệm chính'.\nWhy 5 (Cốt lõi): NGUYÊN NHÂN GỐC RỄ Ở HỆ THỐNG: Hệ thống quản lý sau thanh tra cũ thiếu cơ chế giám sát gắn trách nhiệm giải trình trực tiếp và chưa có quy trình phúc tra thực tế bắt buộc cung cấp bằng chứng khách quan thay vì chỉ dựa vào báo cáo giải trình. ➔ Cần có một công cụ quản lý theo dõi tiến độ thực hiện các kiến nghị sau thanh tra bằng phần mềm số hóa và chuẩn hóa quy trình phúc tra thực chứng.",
      "resultsBeforeAfter": [
        {
          "metric": "Tỷ lệ thực hiện kiến nghị sau thanh tra đúng hạn",
          "before": "< 65% kiến nghị",
          "after": "Đạt > 90% kiến nghị"
        },
        {
          "metric": "Tỷ lệ thực hiện chậm tiến độ",
          "before": "Chiếm 25% - 30%",
          "after": "Giảm xuống < 10%"
        },
        {
          "metric": "Tỷ lệ chưa thực hiện (quá hạn không báo cáo)",
          "before": "Chiếm khoảng 10%",
          "after": "Triệt tiêu về đúng 0%"
        },
        {
          "metric": "Tỷ lệ kiến nghị có minh chứng khách quan",
          "before": "< 30% (chủ yếu báo cáo giấy)",
          "after": "Đạt 100% bằng chứng ảnh/file"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 94/100đ (ĐẠT LOẠI A (XUẤT SẮC) - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Áp dụng thử nghiệm đối với toàn bộ các kết luận và kiến nghị phát sinh từ các cuộc thanh kiểm tra chuyên đề tại Bệnh viện Đa khoa Hùng Vương.",
        "time": "Từ ngày 06 tháng 09 năm 2026 đến ngày 31 tháng 12 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "LS. Nguyễn Đức Nhưng",
    "nhomTacGia": "LS. Nguyễn Đức Nhưng, CN. Lê Tiến Tuyên, CN. Nguyễn Hồng Thắm, CN. Nguyễn Trung Dũng, CN. Bùi Thị Hiền",
    "diemBanDau": "94"
  },
  {
    "maDeTai": "KZ16-PKTB-01",
    "tenDeTai": "Cải tiến quy trình theo dõi người bệnh và kiểm soát các thao tác chuyên môn bằng bảng kiểm tại giường kết hợp hệ thống cảnh báo trực quan tại Phòng khám Cấp cứu",
    "tenSanPham": "Cải tiến quy trình theo dõi người bệnh và kiểm soát các thao tác chuyên môn bằng bảng kiểm tại giường kết hợp hệ thống cảnh báo trực quan tại Phòng khám Cấp cứu",
    "khoaPhong": "PHÒNG KHÁM ĐA KHOA HÙNG VƯƠNG THANH BA",
    "khoaPhoiHop": "",
    "nhanh": "Nhánh A",
    "chuDe": "An toàn người bệnh & Quản lý chất lượng",
    "tacGia": "BS. Lê Ngọc Dung",
    "authorsDetailed": [
      {
        "name": "BS. Lê Ngọc Dung",
        "title": "Phó Giám đốc Phòng khám",
        "role": "Trưởng nhóm đề án (Chủ nhiệm)",
        "stt": "1",
        "hoTen": "BS. Lê Ngọc Dung",
        "chucVu": "Phó Giám đốc Phòng khám",
        "vaiTro": "Trưởng nhóm đề án (Chủ nhiệm)"
      },
      {
        "name": "CN. Bùi Trọng Toàn",
        "title": "Điều dưỡng trưởng Phòng khám",
        "role": "Thư ký đề án",
        "stt": "2",
        "hoTen": "CN. Bùi Trọng Toàn",
        "chucVu": "Điều dưỡng trưởng Phòng khám",
        "vaiTro": "Thư ký đề án"
      },
      {
        "name": "BS. Nguyễn Đức Huỳnh",
        "title": "Giám đốc Phòng khám",
        "role": "Thành viên (Cố vấn chuyên môn)",
        "stt": "3",
        "hoTen": "BS. Nguyễn Đức Huỳnh",
        "chucVu": "Giám đốc Phòng khám",
        "vaiTro": "Thành viên (Cố vấn chuyên môn)"
      },
      {
        "name": "BS. Đàm Xuân Cảnh",
        "title": "Bác sĩ điều trị",
        "role": "Thành viên",
        "stt": "4",
        "hoTen": "BS. Đàm Xuân Cảnh",
        "chucVu": "Bác sĩ điều trị",
        "vaiTro": "Thành viên"
      },
      {
        "name": "ĐD. Nguyễn Anh Tuấn",
        "title": "Điều dưỡng Cấp cứu 115",
        "role": "Thành viên",
        "stt": "5",
        "hoTen": "ĐD. Nguyễn Anh Tuấn",
        "chucVu": "Điều dưỡng Cấp cứu 115",
        "vaiTro": "Thành viên"
      }
    ],
    "thucTrang": "Tại khu vực khám và cấp cứu Phòng khám Thanh Ba, người bệnh diễn biến nhanh, số lượng người bệnh đông vào giờ cao điểm, nhiều nhân viên cùng tham gia xử trí. Thông tin tiến trình xử trí chưa được hiển thị trực quan tại giường mà phân tán trên phần mềm và trao đổi miệng. Điều này dẫn đến nguy cơ nhầm lẫn người bệnh (giữa những người có cùng tên, tuổi), nguy cơ bỏ sót thao tác (chưa hỏi tiền sử dị ứng, chưa tiêm thuốc, sót chỉ định cận lâm sàng), mất thời gian hỏi lại thông tin và khó phát hiện người bệnh bị chậm trễ trong quy trình.",
    "soLieuBanDau": [
      "Hiện trạng ghi nhận qua quan sát thực tế tại hiện trường: Thông tin người bệnh phân tán trên nhiều nguồn; nhân viên y tế chủ yếu trao đổi tiến trình xử trí bằng lời nói; chưa có công cụ trực quan tại vị trí người bệnh; khi lưu lượng người bệnh đông tiềm ẩn nguy cơ nhầm lẫn thông tin và bỏ sót công đoạn.",
      "Tình trạng số liệu đo lường ban đầu: Đơn vị chưa thực hiện khảo sát đo lường định lượng mốc xuất phát điểm trước khi nộp đề án.",
      "Nhiệm vụ đo lường bắt buộc tại Vòng 2: Nhóm tác giả bắt buộc phải tổ chức bấm giờ thực tế và kiểm tra đối chiếu trên 20 - 30 ca bệnh cấp cứu trong 03 ngày đầu tiên (từ ngày 10/09/2026 đến ngày 13/09/2026) để xác lập mốc xuất phát điểm trung thực làm căn cứ so sánh hiệu quả."
    ],
    "fiveWhys": [],
    "mucTieu": [
      {
        "chiTieu": "1. 100% người bệnh tại khu vực cấp cứu được bố trí bảng kiểm theo dõi trực quan tại giường.",
        "hienTrang": "Hiện trạng ban đầu",
        "mucTieu": "Cam kết cải tiến vượt bậc",
        "phuongPhap": "Bảng kiểm và đo lường trực tiếp"
      },
      {
        "chiTieu": "2. Tỷ lệ tuân thủ đối chiếu tối thiểu 02 thông tin nhận diện trước mọi thao tác chuyên môn đạt từ 95% đến 100%.",
        "hienTrang": "Hiện trạng ban đầu",
        "mucTieu": "Cam kết cải tiến vượt bậc",
        "phuongPhap": "Bảng kiểm và đo lường trực tiếp"
      },
      {
        "chiTieu": "3. 100% người bệnh được khai thác và ghi nhận tiền sử dị ứng trước khi sử dụng thuốc hoặc can thiệp thủ thuật.",
        "hienTrang": "Hiện trạng ban đầu",
        "mucTieu": "Cam kết cải tiến vượt bậc",
        "phuongPhap": "Bảng kiểm và đo lường trực tiếp"
      },
      {
        "chiTieu": "4. Tỷ lệ hoàn thành đầy đủ 6 nội dung kiểm soát trên bảng kiểm đạt từ 95% trở lên.",
        "hienTrang": "Hiện trạng ban đầu",
        "mucTieu": "Cam kết cải tiến vượt bậc",
        "phuongPhap": "Bảng kiểm và đo lường trực tiếp"
      },
      {
        "chiTieu": "5. Triệt tiêu hoàn toàn sự cố nhầm lẫn người bệnh, nhầm thuốc và bỏ sót chỉ định cận lâm sàng tại phòng khám cấp cứu.",
        "hienTrang": "Hiện trạng ban đầu",
        "mucTieu": "Cam kết cải tiến vượt bậc",
        "phuongPhap": "Bảng kiểm và đo lường trực tiếp"
      }
    ],
    "giaiPhap": [
      "1. Thiết kế và ban hành Bảng kiểm thông tin khám tại giường kiểm soát 6 nội dung cốt lõi: Tiền sử dị ứng, Bác sĩ đã khám, Đã xử trí thuốc (5 Đúng), Đã làm cận lâm sàng, Đã tư vấn kết quả, và Đã hoàn tất quy trình.",
      "2. Ứng dụng hệ thống cảnh báo trực quan 3 màu: Thẻ Đỏ (Mới vào hoặc Cần xử trí khẩn), Thẻ Vàng (Đang chờ thuốc hoặc chờ kết quả cận lâm sàng), Thẻ Xanh (Đã hoàn thành 100% quy trình, đủ điều kiện kết thúc khám).",
      "3. Thiết lập nguyên tắc bất biến 'Làm xong - Đánh dấu ngay' và đối chiếu 02 thông tin nhận diện độc lập (Họ tên + Năm sinh hoặc Mã người bệnh) trước mọi thao tác.",
      "4. Phân định rõ trách nhiệm kiểm soát chéo giữa Bác sĩ, Điều dưỡng và Điều dưỡng Cấp cứu 115 trong việc rà soát các thẻ màu cảnh báo định kỳ 15 - 30 phút một lần."
    ],
    "phamVi": "Khu vực Khám và Cấp cứu — Phòng khám Đa khoa Hùng Vương Thanh Ba.",
    "thoiGian": "Từ ngày 10/09/2026 đến ngày 24/09/2026 (02 tuần thực nghiệm đo lường chuyên sâu).",
    "sanPhamDauRa": "Quy trình SOP chuẩn hóa & Báo cáo Nghiệm thu A3",
    "soHieuVanBan": "20/TB-QLCL-KAIZEN",
    "tongDiemThamDinh": 96,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (XUẤT SẮC - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM)",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và bản chất đề án cải tiến tại đơn vị",
        "diem": "19/20",
        "nhanXet": "Vấn đề an toàn cấp cứu tại giường là ưu tiên hàng đầu, chọn đúng điểm nghẽn."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp bảng kiểm trực quan kết hợp mã màu",
        "diem": "24/25",
        "nhanXet": "Giải pháp trực quan tại giường dễ thao tác, chi phí thấp, tính khả thi cao."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện quy trình",
        "diem": "19/20",
        "nhanXet": "Cam kết triệt tiêu bỏ sót thao tác và nhầm lẫn thông tin người bệnh."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa SOP và nhân rộng sang các phòng khám vệ tinh",
        "diem": "15/15",
        "nhanXet": "Mô hình chuẩn có thể áp dụng toàn bộ các phòng khám đa khoa vệ tinh."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh theo nguyên tắc 5 đúng",
        "diem": "19/20",
        "nhanXet": "Nguyên tắc \"Làm xong - Đánh dấu ngay\" bảo đảm tính tuân thủ tức thời."
      }
    ],
    "ketLuanQLCL": "1. Phê duyệt triển khai thử nghiệm thực địa từ ngày 10/09/2026 đến ngày 24/09/2026.\r\n2. Điều kiện bắt buộc: Nhóm tác giả phải bấm giờ khảo sát tối thiểu 20 ca cấp cứu trong 03 ngày đầu (10/09 - 13/09/2026) để chốt số liệu xuất phát điểm thật (Baseline) vào Sổ đo lường.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-PKTB-01 02. Bản Đăng ký Sau Hiệu chỉnh PKĐK Thanh Ba BS. Lê Ngọc Dung.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 6890
      },
      {
        "fileName": "KZ16-PKTB-01 03. Biên bản Thẩm định PKĐK Thanh Ba BS. Lê Ngọc Dung.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 1610
      },
      {
        "fileName": "KZ16-PKTB-01 04. Đề cương A3 Triển khai Thực nghiệm PKĐK Thanh Ba BS. Lê Ngọc Dung.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 3302
      }
    ],
    "quickSummary": {
      "idea": "Cải tiến quy trình theo dõi người bệnh và kiểm soát các thao tác chuyên môn bằng bảng kiểm tại giường kết hợp hệ thống cảnh báo trực quan tại Phòng khám Cấp cứu",
      "painPoints": [
        "Hiện trạng ghi nhận qua quan sát thực tế tại hiện trường: Thông tin người bệnh phân tán trên nhiều nguồn; nhân viên y tế chủ yếu trao đổi tiến trình xử trí bằng lời nói; chưa có công cụ trực quan tại vị trí người bệnh; khi lưu lượng người bệnh đông tiềm ẩn nguy cơ nhầm lẫn thông tin và bỏ sót công đoạn.",
        "Tình trạng số liệu đo lường ban đầu: Đơn vị chưa thực hiện khảo sát đo lường định lượng mốc xuất phát điểm trước khi nộp đề án.",
        "Nhiệm vụ đo lường bắt buộc tại Vòng 2: Nhóm tác giả bắt buộc phải tổ chức bấm giờ thực tế và kiểm tra đối chiếu trên 20 - 30 ca bệnh cấp cứu trong 03 ngày đầu tiên (từ ngày 10/09/2026 đến ngày 13/09/2026) để xác lập mốc xuất phát điểm trung thực làm căn cứ so sánh hiệu quả."
      ],
      "solutions": [
        "1. Thiết kế và ban hành Bảng kiểm thông tin khám tại giường kiểm soát 6 nội dung cốt lõi: Tiền sử dị ứng, Bác sĩ đã khám, Đã xử trí thuốc (5 Đúng), Đã làm cận lâm sàng, Đã tư vấn kết quả, và Đã hoàn tất quy trình.",
        "2. Ứng dụng hệ thống cảnh báo trực quan 3 màu: Thẻ Đỏ (Mới vào hoặc Cần xử trí khẩn), Thẻ Vàng (Đang chờ thuốc hoặc chờ kết quả cận lâm sàng), Thẻ Xanh (Đã hoàn thành 100% quy trình, đủ điều kiện kết thúc khám).",
        "3. Thiết lập nguyên tắc bất biến 'Làm xong - Đánh dấu ngay' và đối chiếu 02 thông tin nhận diện độc lập (Họ tên + Năm sinh hoặc Mã người bệnh) trước mọi thao tác."
      ],
      "keyMetrics": [
        {
          "label": "1. 100% người bệnh tại khu vực cấp cứu...",
          "before": "Hiện trạng ban đầu",
          "after": "Cam kết cải tiến vượt bậc",
          "note": "Bảng kiểm và đo lường trực tiếp"
        },
        {
          "label": "2. Tỷ lệ tuân thủ đối chiếu tối thiểu ...",
          "before": "Hiện trạng ban đầu",
          "after": "Cam kết cải tiến vượt bậc",
          "note": "Bảng kiểm và đo lường trực tiếp"
        },
        {
          "label": "3. 100% người bệnh được khai thác và g...",
          "before": "Hiện trạng ban đầu",
          "after": "Cam kết cải tiến vượt bậc",
          "note": "Bảng kiểm và đo lường trực tiếp"
        },
        {
          "label": "4. Tỷ lệ hoàn thành đầy đủ 6 nội dung ...",
          "before": "Hiện trạng ban đầu",
          "after": "Cam kết cải tiến vượt bậc",
          "note": "Bảng kiểm và đo lường trực tiếp"
        }
      ]
    },
    "a3Report": {
      "title": "Cải tiến quy trình theo dõi người bệnh và kiểm soát các thao tác chuyên môn bằng bảng kiểm tại giường kết hợp hệ thống cảnh báo trực quan tại Phòng khám Cấp cứu",
      "department": "PHÒNG KHÁM ĐA KHOA HÙNG VƯƠNG THANH BA",
      "leader": "BS. Lê Ngọc Dung",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Tại khu vực khám và cấp cứu Phòng khám Thanh Ba, người bệnh diễn biến nhanh, số lượng người bệnh đông vào giờ cao điểm, nhiều nhân viên cùng tham gia xử trí. Thông tin tiến trình xử trí chưa được hiển thị trực quan tại giường mà phân tán trên phần mềm và trao đổi miệng. Điều này dẫn đến nguy cơ nhầm lẫn người bệnh (giữa những người có cùng tên, tuổi), nguy cơ bỏ sót thao tác (chưa hỏi tiền sử dị ứng, chưa tiêm thuốc, sót chỉ định cận lâm sàng), mất thời gian hỏi lại thông tin và khó phát hiện người bệnh bị chậm trễ trong quy trình.",
      "currentCondition": "Hiện trạng ghi nhận qua quan sát thực tế tại hiện trường: Thông tin người bệnh phân tán trên nhiều nguồn; nhân viên y tế chủ yếu trao đổi tiến trình xử trí bằng lời nói; chưa có công cụ trực quan tại vị trí người bệnh; khi lưu lượng người bệnh đông tiềm ẩn nguy cơ nhầm lẫn thông tin và bỏ sót công đoạn.\n• Tình trạng số liệu đo lường ban đầu: Đơn vị chưa thực hiện khảo sát đo lường định lượng mốc xuất phát điểm trước khi nộp đề án.\n• Nhiệm vụ đo lường bắt buộc tại Vòng 2: Nhóm tác giả bắt buộc phải tổ chức bấm giờ thực tế và kiểm tra đối chiếu trên 20 - 30 ca bệnh cấp cứu trong 03 ngày đầu tiên (từ ngày 10/09/2026 đến ngày 13/09/2026) để xác lập mốc xuất phát điểm trung thực làm căn cứ so sánh hiệu quả.",
      "targetCondition": "• 1. 100% người bệnh tại khu vực cấp cứu được bố trí bảng kiểm theo dõi trực quan tại giường.: Hiện trạng Hiện trạng ban đầu ➔ Cam kết đạt Cam kết cải tiến vượt bậc\n• 2. Tỷ lệ tuân thủ đối chiếu tối thiểu 02 thông tin nhận diện trước mọi thao tác chuyên môn đạt từ 95% đến 100%.: Hiện trạng Hiện trạng ban đầu ➔ Cam kết đạt Cam kết cải tiến vượt bậc\n• 3. 100% người bệnh được khai thác và ghi nhận tiền sử dị ứng trước khi sử dụng thuốc hoặc can thiệp thủ thuật.: Hiện trạng Hiện trạng ban đầu ➔ Cam kết đạt Cam kết cải tiến vượt bậc\n• 4. Tỷ lệ hoàn thành đầy đủ 6 nội dung kiểm soát trên bảng kiểm đạt từ 95% trở lên.: Hiện trạng Hiện trạng ban đầu ➔ Cam kết đạt Cam kết cải tiến vượt bậc\n• 5. Triệt tiêu hoàn toàn sự cố nhầm lẫn người bệnh, nhầm thuốc và bỏ sót chỉ định cận lâm sàng tại phòng khám cấp cứu.: Hiện trạng Hiện trạng ban đầu ➔ Cam kết đạt Cam kết cải tiến vượt bậc",
      "rootCauseAnalysis": "",
      "countermeasures": "• 1. Thiết kế và ban hành Bảng kiểm thông tin khám tại giường kiểm soát 6 nội dung cốt lõi: Tiền sử dị ứng, Bác sĩ đã khám, Đã xử trí thuốc (5 Đúng), Đã làm cận lâm sàng, Đã tư vấn kết quả, và Đã hoàn tất quy trình.\n• 2. Ứng dụng hệ thống cảnh báo trực quan 3 màu: Thẻ Đỏ (Mới vào hoặc Cần xử trí khẩn), Thẻ Vàng (Đang chờ thuốc hoặc chờ kết quả cận lâm sàng), Thẻ Xanh (Đã hoàn thành 100% quy trình, đủ điều kiện kết thúc khám).\n• 3. Thiết lập nguyên tắc bất biến 'Làm xong - Đánh dấu ngay' và đối chiếu 02 thông tin nhận diện độc lập (Họ tên + Năm sinh hoặc Mã người bệnh) trước mọi thao tác.\n• 4. Phân định rõ trách nhiệm kiểm soát chéo giữa Bác sĩ, Điều dưỡng và Điều dưỡng Cấp cứu 115 trong việc rà soát các thẻ màu cảnh báo định kỳ 15 - 30 phút một lần.",
      "planImplementation": "Khu vực: Khu vực Khám và Cấp cứu — Phòng khám Đa khoa Hùng Vương Thanh Ba.\nThời gian: Từ ngày 10/09/2026 đến ngày 24/09/2026 (02 tuần thực nghiệm đo lường chuyên sâu).\nSản phẩm đầu ra: Quy trình SOP chuẩn hóa & Báo cáo Nghiệm thu A3",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại PHÒNG KHÁM ĐA KHOA HÙNG VƯƠNG THANH BA; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "Hiện trạng ghi nhận qua quan sát thực tế tại hiện trường: Thông tin người bệnh phân tán trên nhiều nguồn; nhân viên y tế chủ yếu trao đổi tiến trình xử trí bằng lời nói; chưa có công cụ trực quan tại vị trí người bệnh; khi lưu lượng người bệnh đông tiềm ẩn nguy cơ nhầm lẫn thông tin và bỏ sót công đoạn.\n• Tình trạng số liệu đo lường ban đầu: Đơn vị chưa thực hiện khảo sát đo lường định lượng mốc xuất phát điểm trước khi nộp đề án.\n• Nhiệm vụ đo lường bắt buộc tại Vòng 2: Nhóm tác giả bắt buộc phải tổ chức bấm giờ thực tế và kiểm tra đối chiếu trên 20 - 30 ca bệnh cấp cứu trong 03 ngày đầu tiên (từ ngày 10/09/2026 đến ngày 13/09/2026) để xác lập mốc xuất phát điểm trung thực làm căn cứ so sánh hiệu quả.",
      "smartGoal": "• 1. 100% người bệnh tại khu vực cấp cứu được bố trí bảng kiểm theo dõi trực quan tại giường.: Hiện trạng Hiện trạng ban đầu ➔ Cam kết đạt Cam kết cải tiến vượt bậc\n• 2. Tỷ lệ tuân thủ đối chiếu tối thiểu 02 thông tin nhận diện trước mọi thao tác chuyên môn đạt từ 95% đến 100%.: Hiện trạng Hiện trạng ban đầu ➔ Cam kết đạt Cam kết cải tiến vượt bậc\n• 3. 100% người bệnh được khai thác và ghi nhận tiền sử dị ứng trước khi sử dụng thuốc hoặc can thiệp thủ thuật.: Hiện trạng Hiện trạng ban đầu ➔ Cam kết đạt Cam kết cải tiến vượt bậc\n• 4. Tỷ lệ hoàn thành đầy đủ 6 nội dung kiểm soát trên bảng kiểm đạt từ 95% trở lên.: Hiện trạng Hiện trạng ban đầu ➔ Cam kết đạt Cam kết cải tiến vượt bậc\n• 5. Triệt tiêu hoàn toàn sự cố nhầm lẫn người bệnh, nhầm thuốc và bỏ sót chỉ định cận lâm sàng tại phòng khám cấp cứu.: Hiện trạng Hiện trạng ban đầu ➔ Cam kết đạt Cam kết cải tiến vượt bậc",
      "rootCause": "",
      "resultsBeforeAfter": [
        {
          "metric": "1. 100% người bệnh tại khu vực cấp cứu được bố trí bảng kiểm theo dõi trực quan tại giường.",
          "before": "Hiện trạng ban đầu",
          "after": "Cam kết cải tiến vượt bậc"
        },
        {
          "metric": "2. Tỷ lệ tuân thủ đối chiếu tối thiểu 02 thông tin nhận diện trước mọi thao tác chuyên môn đạt từ 95% đến 100%.",
          "before": "Hiện trạng ban đầu",
          "after": "Cam kết cải tiến vượt bậc"
        },
        {
          "metric": "3. 100% người bệnh được khai thác và ghi nhận tiền sử dị ứng trước khi sử dụng thuốc hoặc can thiệp thủ thuật.",
          "before": "Hiện trạng ban đầu",
          "after": "Cam kết cải tiến vượt bậc"
        },
        {
          "metric": "4. Tỷ lệ hoàn thành đầy đủ 6 nội dung kiểm soát trên bảng kiểm đạt từ 95% trở lên.",
          "before": "Hiện trạng ban đầu",
          "after": "Cam kết cải tiến vượt bậc"
        },
        {
          "metric": "5. Triệt tiêu hoàn toàn sự cố nhầm lẫn người bệnh, nhầm thuốc và bỏ sót chỉ định cận lâm sàng tại phòng khám cấp cứu.",
          "before": "Hiện trạng ban đầu",
          "after": "Cam kết cải tiến vượt bậc"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 96/100đ (ĐẠT LOẠI A (XUẤT SẮC - PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM))",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Khu vực Khám và Cấp cứu — Phòng khám Đa khoa Hùng Vương Thanh Ba.",
        "time": "Từ ngày 10/09/2026 đến ngày 24/09/2026 (02 tuần thực nghiệm đo lường chuyên sâu).",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "BS. Lê Ngọc Dung",
    "nhomTacGia": "BS. Lê Ngọc Dung, CN. Bùi Trọng Toàn, BS. Nguyễn Đức Huỳnh, BS. Đàm Xuân Cảnh, ĐD. Nguyễn Anh Tuấn",
    "diemBanDau": "96"
  },
  {
    "maDeTai": "KZ16-NHI-01",
    "tenDeTai": "Cải tiến quy trình cố định catheter ngoại vi cho bệnh nhi tại Bệnh viện đa khoa Hùng Vương",
    "tenSanPham": "Quy Trình & Bảng Kiểm Chăm Sóc Catheter Tĩnh Mạch Ngoại Vi Nhi Khoa",
    "khoaPhong": "KHOA NHI",
    "khoaPhoiHop": "",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 4: Nâng cao trải nghiệm và sự hài lòng của người bệnh (kết hợp An toàn người bệnh và Phòng ngừa sai sót lâm sàng)",
    "tacGia": "ĐD. Trần Thị Hồng",
    "authorsDetailed": [
      {
        "name": "ĐD. Trần Thị Hồng",
        "title": "Điều dưỡng trưởng",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)",
        "stt": "1",
        "hoTen": "ĐD. Trần Thị Hồng",
        "chucVu": "Điều dưỡng trưởng",
        "vaiTro": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "ĐD. Nguyễn Minh Huệ",
        "title": "Điều dưỡng viên",
        "role": "Thư ký đề án (Theo dõi số liệu)",
        "stt": "2",
        "hoTen": "ĐD. Nguyễn Minh Huệ",
        "chucVu": "Điều dưỡng viên",
        "vaiTro": "Thư ký đề án (Theo dõi số liệu)"
      },
      {
        "name": "ĐD. Hà Thị Vân",
        "title": "Điều dưỡng viên",
        "role": "Thành viên thực hiện thử nghiệm",
        "stt": "3",
        "hoTen": "ĐD. Hà Thị Vân",
        "chucVu": "Điều dưỡng viên",
        "vaiTro": "Thành viên thực hiện thử nghiệm"
      },
      {
        "name": "ĐD. Nguyễn Thị Hồng Chiêm",
        "title": "Điều dưỡng viên",
        "role": "Thành viên thực hiện thử nghiệm",
        "stt": "4",
        "hoTen": "ĐD. Nguyễn Thị Hồng Chiêm",
        "chucVu": "Điều dưỡng viên",
        "vaiTro": "Thành viên thực hiện thử nghiệm"
      },
      {
        "name": "ĐD. Vũ Thị Minh Nguyệt",
        "title": "Điều dưỡng viên",
        "role": "Thành viên thực hiện thử nghiệm",
        "stt": "5",
        "hoTen": "ĐD. Vũ Thị Minh Nguyệt",
        "chucVu": "Điều dưỡng viên",
        "vaiTro": "Thành viên thực hiện thử nghiệm"
      }
    ],
    "thucTrang": "Trước đây cố định kim luồn ngoại vi bằng băng dính và Urgo cho trẻ, cuốn băng dính nhiều vòng, băng dính lụa có lớp keo trải trên lụa nên khi cố định lâu gây tình trạng keo bị chảy, nóng, gây kích ứng da cho trẻ. Nhiều trẻ bị kích ứng tay gây tình trạng đỏ rát, phồng rộp, ngứa… Quy định của bệnh viện, lưu kim luồn tối đa 72 giờ, tuy nhiên không theo dõi được chân kim nên chưa đủ 72 giờ mà ghi ngờ vẫn tháo và lấy ven khác.",
    "soLieuBanDau": [
      "Suất tiêu hao kim luồn trên hệ thống phần mềm HIS tháng 08/2026: Ước tính bình quân 4 - 5 kim luồn / đợt điều trị nội trú (do lệch ven, tuột ven và nghi ngờ viêm tắc phải tháo sớm).",
      "Tỷ lệ lưu catheter an toàn đạt ≥ 72 giờ - 96 giờ: Ước tính dưới 35% do thói quen tháo sớm khi không quan sát được chân kim.",
      "Tỷ lệ viêm tĩnh mạch (thang điểm VIP ≥ 2): Chưa được theo dõi và lượng hóa có hệ thống bằng công cụ chuẩn hóa.",
      "Tỷ lệ kích ứng da (đỏ rát, phồng rộp do keo dán lụa chảy nóng): Gặp ở khoảng 10% - 15% bệnh nhi điều trị nội trú."
    ],
    "fiveWhys": [
      {
        "level": "Why 1 (Hiện trạng)",
        "question": "Tại sao bệnh nhi điều trị tại khoa thường xuyên phải lấy lại ven nhiều lần gây đau đớn và lo lắng cho gia đình?",
        "answer": "Vì kim luồn thường bị tháo bỏ sớm trước 72 giờ do nghi ngờ viêm tắc hoặc chân kim bị xê dịch, kích ứng da."
      },
      {
        "level": "Why 2 (Nguyên nhân trực tiếp)",
        "question": "Tại sao chân kim luồn dễ bị kích ứng da và điều dưỡng khó đánh giá tình trạng viêm?",
        "answer": "Vì trước đây dùng băng dính lụa quấn nhiều vòng; lớp keo bị chảy gây nóng rát da và băng đục che kín hoàn toàn chân kim."
      },
      {
        "level": "Why 3 (Phương pháp theo dõi)",
        "question": "Tại sao điều dưỡng không phát hiện sớm các dấu hiệu viêm mạch để xử trí kịp thời?",
        "answer": "Vì chưa áp dụng màng dán trong suốt để quan sát liên tục và chưa áp dụng thang điểm đánh giá viêm tĩnh mạch VIP score."
      },
      {
        "level": "Why 4 (Quy trình chuyên môn)",
        "question": "Tại sao chưa áp dụng quy trình cố định kim luồn bằng màng dán trong suốt và thang điểm VIP score?",
        "answer": "Vì thói quen cố định truyền thống bằng băng dính lụa/Urgo và chưa có quy trình thao tác chuẩn (SOP) chuẩn hóa cho bệnh nhi."
      },
      {
        "level": "Why 5 (Cốt lõi hệ thống)",
        "question": "NGUYÊN NHÂN GỐC RỄ: Quy trình cố định và giám sát catheter tĩnh mạch ngoại vi nhi khoa chưa được chuẩn hóa bằng vật tư chuyên dụng (Opsite trong suốt) kết hợp thang điểm đánh giá định lượng VIP score.",
        "answer": "Cần ban hành SOP cố định catheter bằng màng dán trong suốt và bảng kiểm giám sát VIP score hàng ngày."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Suất tiêu hao kim luồn bình quân / bệnh nhi",
        "hienTrang": "Tháng 08/2026 (trích xuất HIS)",
        "mucTieu": "Giảm ≥ 40% trên mỗi đợt điều trị",
        "phuongPhap": "Báo cáo trích xuất kho Dược và phần mềm HIS"
      },
      {
        "chiTieu": "Tỷ lệ lưu catheter an toàn đạt ≥ 72h - 96h",
        "hienTrang": "Ước tính < 35% (thường tháo sớm)",
        "mucTieu": "Đạt ≥ 85.0% bệnh nhi",
        "phuongPhap": "Nhật ký theo dõi lưu kim tại buồng bệnh"
      },
      {
        "chiTieu": "Tỷ lệ viêm tĩnh mạch (thang điểm VIP ≥ 2)",
        "hienTrang": "Chưa theo dõi định lượng",
        "mucTieu": "Kiểm soát ≤ 2.0%",
        "phuongPhap": "Thang điểm Visual Infusion Phlebitis (VIP)"
      },
      {
        "chiTieu": "Tỷ lệ kích ứng da (đỏ rát do keo dán)",
        "hienTrang": "10% - 15% bệnh nhi",
        "mucTieu": "Triệt tiêu còn ≤ 1.0%",
        "phuongPhap": "Khám và đánh giá vùng da quanh chân kim"
      },
      {
        "chiTieu": "Sự hài lòng của người nhà bệnh nhi",
        "hienTrang": "Khảo sát đầu vào ~75%",
        "mucTieu": "Nâng cao đạt ≥ 95.0%",
        "phuongPhap": "Phiếu khảo sát hài lòng người bệnh nội trú"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Chuẩn hóa vật tư cố định): Thay thế băng dính lụa và Urgo bằng màng dán trong suốt vô trùng (Opsite/Tegaderm) để bảo vệ chân kim, chống chảy keo kích ứng da và quan sát trực quan vị trí đặt kim.",
      "Giải pháp 2 (Ứng dụng thang điểm VIP score): Ban hành bảng kiểm và chuẩn hóa theo dõi thang điểm viêm tĩnh mạch (Visual Infusion Phlebitis Score) định kỳ mỗi ca trực.",
      "Giải pháp 3 (Kéo dài thời gian lưu kim an toàn): Kéo dài thời gian lưu catheter ngoại vi lên tối đa 96 giờ (04 ngày) khi chân kim thông thoáng và VIP score = 0, giảm tối đa số lần chọc ven lại.",
      "Giải pháp 4 (Truyền thông và tư vấn gia đình): Hướng dẫn phụ huynh phối hợp bảo vệ vị trí cố định catheter trong quá trình chăm sóc, tắm rửa và vận động của trẻ."
    ],
    "phamVi": "Tất cả bệnh nhân điều trị cần lấy kim luồn",
    "thoiGian": "Từ ngày 01/07/2026 đến ngày 31/08/2026.",
    "sanPhamDauRa": "Dự thảo quy trình vận hành chuẩn, Bảng kiểm,....",
    "soHieuVanBan": "Số: 16/TB-QLCL-KAIZEN",
    "tongDiemThamDinh": 78,
    "xepLoaiThamDinh": "ĐẠT LOẠI B (ĐẠT CÓ ĐIỀU KIỆN) |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa, phòng",
        "diem": "18 / 20",
        "nhanXet": "Vấn đề giảm số lần chọc ven và phòng ngừa viêm tĩnh mạch cho bệnh nhi có ý nghĩa lâm sàng cấp thiết, trực tiếp bảo vệ an toàn người bệnh."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "20 / 25",
        "nhanXet": "Khoa đã chủ động đưa màng dán trong suốt vào áp dụng. Giải pháp có tính khả thi kỹ thuật rất cao, tận dụng tốt nguồn vật tư y tế của bệnh viện."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "16 / 20",
        "nhanXet": "Bản đăng ký chưa có số liệu nền đối chứng và chưa theo dõi định lượng viêm tĩnh mạch. Cần trích xuất dữ liệu tiêu hao từ phần mềm bệnh viện."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "12 / 15",
        "nhanXet": "Quy trình chăm sóc và cố định catheter có tiềm năng nhân rộng áp dụng cho Khoa Sơ sinh, Trung tâm Cấp cứu 115 và toàn viện."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "12 / 20",
        "nhanXet": "Sáng kiến thiết thực, kết hợp giữa vật tư màng dán bảo vệ với thang điểm đánh giá lâm sàng quốc tế nhằm chuẩn hóa thực hành điều dưỡng."
      }
    ],
    "ketLuanQLCL": "1. Tổ Quản lý Chất lượng ghi nhận và đánh giá cao tinh thần chủ động của Khoa Nhi trong việc đưa màng dán trong suốt vào chăm sóc người bệnh nhằm giảm đau đớn cho trẻ. Đề án được công nhận đạt chuẩn sơ loại Vòng 1 và đủ điều kiện tham gia thử nghiệm có kiểm soát.\r\n2. Tuy nhiên, về mặt phương pháp luận cải tiến chất lượng, việc chuyển đổi vật tư mới chỉ là một phần của giải pháp. Để đề án đủ điều kiện bảo vệ trước Hội đồng chấm thi Vòng Chung kết, nhóm tác giả bắt buộc phải khắc phục hai khoảng trống chuyên môn cốt lõi: \r\n   - (1) Thiết lập bộ số liệu đối chứng quá khứ trước khi đổi miếng dán;\r\n   - (2) Chuẩn hóa quy trình theo dõi lâm sàng bằng thang điểm đánh giá viêm tĩnh mạch định lượng hàng ngày.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-NHI-01 02. Bản Đăng ký Sau Hiệu chỉnh Khoa Nhi ĐD. Trần Thị Hồng.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 8237
      },
      {
        "fileName": "KZ16-NHI-01 03. Biên bản Thẩm định Khoa Nhi ĐD. Trần Thị Hồng.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 9971
      },
      {
        "fileName": "KZ16-NHI-01 04. Đề cương A3 Triển khai Thực nghiệm Khoa Nhi ĐD. Trần Thị Hồng.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 6327
      },
      {
        "fileName": "KZ16-NHI-01 Phieu Thu thap So lieu Hien trang Catheter T0.md",
        "label": "KZ16-NHI-01 Phieu Thu thap So lieu Hien trang Catheter T0.md",
        "type": "markdown",
        "size": 4546
      }
    ],
    "quickSummary": {
      "idea": "Cải tiến quy trình cố định catheter ngoại vi cho bệnh nhi tại Bệnh viện đa khoa Hùng Vương",
      "painPoints": [
        "Suất tiêu hao kim luồn trên hệ thống phần mềm HIS tháng 08/2026: Ước tính bình quân 4 - 5 kim luồn / đợt điều trị nội trú (do lệch ven, tuột ven và nghi ngờ viêm tắc phải tháo sớm).",
        "Tỷ lệ lưu catheter an toàn đạt ≥ 72 giờ - 96 giờ: Ước tính dưới 35% do thói quen tháo sớm khi không quan sát được chân kim.",
        "Tỷ lệ viêm tĩnh mạch (thang điểm VIP ≥ 2): Chưa được theo dõi và lượng hóa có hệ thống bằng công cụ chuẩn hóa."
      ],
      "solutions": [
        "Giải pháp 1 (Chuẩn hóa vật tư cố định): Thay thế băng dính lụa và Urgo bằng màng dán trong suốt vô trùng (Opsite/Tegaderm) để bảo vệ chân kim, chống chảy keo kích ứng da và quan sát trực quan vị trí đặt kim.",
        "Giải pháp 2 (Ứng dụng thang điểm VIP score): Ban hành bảng kiểm và chuẩn hóa theo dõi thang điểm viêm tĩnh mạch (Visual Infusion Phlebitis Score) định kỳ mỗi ca trực.",
        "Giải pháp 3 (Kéo dài thời gian lưu kim an toàn): Kéo dài thời gian lưu catheter ngoại vi lên tối đa 96 giờ (04 ngày) khi chân kim thông thoáng và VIP score = 0, giảm tối đa số lần chọc ven lại."
      ],
      "keyMetrics": [
        {
          "label": "Suất tiêu hao kim luồn bình quân / bện...",
          "before": "Tháng 08/2026 (trích xuất HIS)",
          "after": "Giảm ≥ 40% trên mỗi đợt điều trị",
          "note": "Báo cáo trích xuất kho Dược và phần mềm HIS"
        },
        {
          "label": "Tỷ lệ lưu catheter an toàn đạt ≥ 72h -...",
          "before": "Ước tính < 35% (thường tháo sớm)",
          "after": "Đạt ≥ 85.0% bệnh nhi",
          "note": "Nhật ký theo dõi lưu kim tại buồng bệnh"
        },
        {
          "label": "Tỷ lệ viêm tĩnh mạch (thang điểm VIP ≥...",
          "before": "Chưa theo dõi định lượng",
          "after": "Kiểm soát ≤ 2.0%",
          "note": "Thang điểm Visual Infusion Phlebitis (VIP)"
        },
        {
          "label": "Tỷ lệ kích ứng da (đỏ rát do keo dán)",
          "before": "10% - 15% bệnh nhi",
          "after": "Triệt tiêu còn ≤ 1.0%",
          "note": "Khám và đánh giá vùng da quanh chân kim"
        }
      ]
    },
    "a3Report": {
      "title": "Cải tiến quy trình cố định catheter ngoại vi cho bệnh nhi tại Bệnh viện đa khoa Hùng Vương",
      "department": "KHOA NHI",
      "leader": "ĐD. Trần Thị Hồng",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Trước đây cố định kim luồn ngoại vi bằng băng dính và Urgo cho trẻ, cuốn băng dính nhiều vòng, băng dính lụa có lớp keo trải trên lụa nên khi cố định lâu gây tình trạng keo bị chảy, nóng, gây kích ứng da cho trẻ. Nhiều trẻ bị kích ứng tay gây tình trạng đỏ rát, phồng rộp, ngứa… Quy định của bệnh viện, lưu kim luồn tối đa 72 giờ, tuy nhiên không theo dõi được chân kim nên chưa đủ 72 giờ mà ghi ngờ vẫn tháo và lấy ven khác.",
      "currentCondition": "Suất tiêu hao kim luồn trên hệ thống phần mềm HIS tháng 08/2026: Ước tính bình quân 4 - 5 kim luồn / đợt điều trị nội trú (do lệch ven, tuột ven và nghi ngờ viêm tắc phải tháo sớm).\n• Tỷ lệ lưu catheter an toàn đạt ≥ 72 giờ - 96 giờ: Ước tính dưới 35% do thói quen tháo sớm khi không quan sát được chân kim.\n• Tỷ lệ viêm tĩnh mạch (thang điểm VIP ≥ 2): Chưa được theo dõi và lượng hóa có hệ thống bằng công cụ chuẩn hóa.\n• Tỷ lệ kích ứng da (đỏ rát, phồng rộp do keo dán lụa chảy nóng): Gặp ở khoảng 10% - 15% bệnh nhi điều trị nội trú.",
      "targetCondition": "• Suất tiêu hao kim luồn bình quân / bệnh nhi: Hiện trạng Tháng 08/2026 (trích xuất HIS) ➔ Cam kết đạt Giảm ≥ 40% trên mỗi đợt điều trị\n• Tỷ lệ lưu catheter an toàn đạt ≥ 72h - 96h: Hiện trạng Ước tính < 35% (thường tháo sớm) ➔ Cam kết đạt Đạt ≥ 85.0% bệnh nhi\n• Tỷ lệ viêm tĩnh mạch (thang điểm VIP ≥ 2): Hiện trạng Chưa theo dõi định lượng ➔ Cam kết đạt Kiểm soát ≤ 2.0%\n• Tỷ lệ kích ứng da (đỏ rát do keo dán): Hiện trạng 10% - 15% bệnh nhi ➔ Cam kết đạt Triệt tiêu còn ≤ 1.0%\n• Sự hài lòng của người nhà bệnh nhi: Hiện trạng Khảo sát đầu vào ~75% ➔ Cam kết đạt Nâng cao đạt ≥ 95.0%",
      "rootCauseAnalysis": "Why 1 (Hiện trạng): Tại sao bệnh nhi điều trị tại khoa thường xuyên phải lấy lại ven nhiều lần gây đau đớn và lo lắng cho gia đình? ➔ Vì kim luồn thường bị tháo bỏ sớm trước 72 giờ do nghi ngờ viêm tắc hoặc chân kim bị xê dịch, kích ứng da.\nWhy 2 (Nguyên nhân trực tiếp): Tại sao chân kim luồn dễ bị kích ứng da và điều dưỡng khó đánh giá tình trạng viêm? ➔ Vì trước đây dùng băng dính lụa quấn nhiều vòng; lớp keo bị chảy gây nóng rát da và băng đục che kín hoàn toàn chân kim.\nWhy 3 (Phương pháp theo dõi): Tại sao điều dưỡng không phát hiện sớm các dấu hiệu viêm mạch để xử trí kịp thời? ➔ Vì chưa áp dụng màng dán trong suốt để quan sát liên tục và chưa áp dụng thang điểm đánh giá viêm tĩnh mạch VIP score.\nWhy 4 (Quy trình chuyên môn): Tại sao chưa áp dụng quy trình cố định kim luồn bằng màng dán trong suốt và thang điểm VIP score? ➔ Vì thói quen cố định truyền thống bằng băng dính lụa/Urgo và chưa có quy trình thao tác chuẩn (SOP) chuẩn hóa cho bệnh nhi.\nWhy 5 (Cốt lõi hệ thống): NGUYÊN NHÂN GỐC RỄ: Quy trình cố định và giám sát catheter tĩnh mạch ngoại vi nhi khoa chưa được chuẩn hóa bằng vật tư chuyên dụng (Opsite trong suốt) kết hợp thang điểm đánh giá định lượng VIP score. ➔ Cần ban hành SOP cố định catheter bằng màng dán trong suốt và bảng kiểm giám sát VIP score hàng ngày.",
      "countermeasures": "• Giải pháp 1 (Chuẩn hóa vật tư cố định): Thay thế băng dính lụa và Urgo bằng màng dán trong suốt vô trùng (Opsite/Tegaderm) để bảo vệ chân kim, chống chảy keo kích ứng da và quan sát trực quan vị trí đặt kim.\n• Giải pháp 2 (Ứng dụng thang điểm VIP score): Ban hành bảng kiểm và chuẩn hóa theo dõi thang điểm viêm tĩnh mạch (Visual Infusion Phlebitis Score) định kỳ mỗi ca trực.\n• Giải pháp 3 (Kéo dài thời gian lưu kim an toàn): Kéo dài thời gian lưu catheter ngoại vi lên tối đa 96 giờ (04 ngày) khi chân kim thông thoáng và VIP score = 0, giảm tối đa số lần chọc ven lại.\n• Giải pháp 4 (Truyền thông và tư vấn gia đình): Hướng dẫn phụ huynh phối hợp bảo vệ vị trí cố định catheter trong quá trình chăm sóc, tắm rửa và vận động của trẻ.",
      "planImplementation": "Khu vực: Tất cả bệnh nhân điều trị cần lấy kim luồn\nThời gian: Từ ngày 01/07/2026 đến ngày 31/08/2026.\nSản phẩm đầu ra: Dự thảo quy trình vận hành chuẩn, Bảng kiểm,....",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại KHOA NHI; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "Suất tiêu hao kim luồn trên hệ thống phần mềm HIS tháng 08/2026: Ước tính bình quân 4 - 5 kim luồn / đợt điều trị nội trú (do lệch ven, tuột ven và nghi ngờ viêm tắc phải tháo sớm).\n• Tỷ lệ lưu catheter an toàn đạt ≥ 72 giờ - 96 giờ: Ước tính dưới 35% do thói quen tháo sớm khi không quan sát được chân kim.\n• Tỷ lệ viêm tĩnh mạch (thang điểm VIP ≥ 2): Chưa được theo dõi và lượng hóa có hệ thống bằng công cụ chuẩn hóa.\n• Tỷ lệ kích ứng da (đỏ rát, phồng rộp do keo dán lụa chảy nóng): Gặp ở khoảng 10% - 15% bệnh nhi điều trị nội trú.",
      "smartGoal": "• Suất tiêu hao kim luồn bình quân / bệnh nhi: Hiện trạng Tháng 08/2026 (trích xuất HIS) ➔ Cam kết đạt Giảm ≥ 40% trên mỗi đợt điều trị\n• Tỷ lệ lưu catheter an toàn đạt ≥ 72h - 96h: Hiện trạng Ước tính < 35% (thường tháo sớm) ➔ Cam kết đạt Đạt ≥ 85.0% bệnh nhi\n• Tỷ lệ viêm tĩnh mạch (thang điểm VIP ≥ 2): Hiện trạng Chưa theo dõi định lượng ➔ Cam kết đạt Kiểm soát ≤ 2.0%\n• Tỷ lệ kích ứng da (đỏ rát do keo dán): Hiện trạng 10% - 15% bệnh nhi ➔ Cam kết đạt Triệt tiêu còn ≤ 1.0%\n• Sự hài lòng của người nhà bệnh nhi: Hiện trạng Khảo sát đầu vào ~75% ➔ Cam kết đạt Nâng cao đạt ≥ 95.0%",
      "rootCause": "Why 1 (Hiện trạng): Tại sao bệnh nhi điều trị tại khoa thường xuyên phải lấy lại ven nhiều lần gây đau đớn và lo lắng cho gia đình? ➔ Vì kim luồn thường bị tháo bỏ sớm trước 72 giờ do nghi ngờ viêm tắc hoặc chân kim bị xê dịch, kích ứng da.\nWhy 2 (Nguyên nhân trực tiếp): Tại sao chân kim luồn dễ bị kích ứng da và điều dưỡng khó đánh giá tình trạng viêm? ➔ Vì trước đây dùng băng dính lụa quấn nhiều vòng; lớp keo bị chảy gây nóng rát da và băng đục che kín hoàn toàn chân kim.\nWhy 3 (Phương pháp theo dõi): Tại sao điều dưỡng không phát hiện sớm các dấu hiệu viêm mạch để xử trí kịp thời? ➔ Vì chưa áp dụng màng dán trong suốt để quan sát liên tục và chưa áp dụng thang điểm đánh giá viêm tĩnh mạch VIP score.\nWhy 4 (Quy trình chuyên môn): Tại sao chưa áp dụng quy trình cố định kim luồn bằng màng dán trong suốt và thang điểm VIP score? ➔ Vì thói quen cố định truyền thống bằng băng dính lụa/Urgo và chưa có quy trình thao tác chuẩn (SOP) chuẩn hóa cho bệnh nhi.\nWhy 5 (Cốt lõi hệ thống): NGUYÊN NHÂN GỐC RỄ: Quy trình cố định và giám sát catheter tĩnh mạch ngoại vi nhi khoa chưa được chuẩn hóa bằng vật tư chuyên dụng (Opsite trong suốt) kết hợp thang điểm đánh giá định lượng VIP score. ➔ Cần ban hành SOP cố định catheter bằng màng dán trong suốt và bảng kiểm giám sát VIP score hàng ngày.",
      "resultsBeforeAfter": [
        {
          "metric": "Suất tiêu hao kim luồn bình quân / bệnh nhi",
          "before": "Tháng 08/2026 (trích xuất HIS)",
          "after": "Giảm ≥ 40% trên mỗi đợt điều trị"
        },
        {
          "metric": "Tỷ lệ lưu catheter an toàn đạt ≥ 72h - 96h",
          "before": "Ước tính < 35% (thường tháo sớm)",
          "after": "Đạt ≥ 85.0% bệnh nhi"
        },
        {
          "metric": "Tỷ lệ viêm tĩnh mạch (thang điểm VIP ≥ 2)",
          "before": "Chưa theo dõi định lượng",
          "after": "Kiểm soát ≤ 2.0%"
        },
        {
          "metric": "Tỷ lệ kích ứng da (đỏ rát do keo dán)",
          "before": "10% - 15% bệnh nhi",
          "after": "Triệt tiêu còn ≤ 1.0%"
        },
        {
          "metric": "Sự hài lòng của người nhà bệnh nhi",
          "before": "Khảo sát đầu vào ~75%",
          "after": "Nâng cao đạt ≥ 95.0%"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 78/100đ (ĐẠT LOẠI B (ĐẠT CÓ ĐIỀU KIỆN) |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Tất cả bệnh nhân điều trị cần lấy kim luồn",
        "time": "Từ ngày 01/07/2026 đến ngày 31/08/2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "ĐD. Trần Thị Hồng",
    "nhomTacGia": "ĐD. Trần Thị Hồng, ĐD. Nguyễn Minh Huệ, ĐD. Hà Thị Vân, ĐD. Nguyễn Thị Hồng Chiêm, ĐD. Vũ Thị Minh Nguyệt",
    "diemBanDau": "78"
  },
  {
    "maDeTai": "KZ16-DUOC-01",
    "tenDeTai": "Xây dựng WebApp thông tin thuốc tra cứu nhanh phục vụ nhân viên y tế tại Bệnh viện Đa khoa Hùng Vương (Nền tảng HV-Pharmacy)",
    "tenSanPham": "Xây dựng WebApp thông tin thuốc tra cứu nhanh phục vụ nhân viên y tế tại Bệnh viện Đa khoa Hùng Vương (Nền tảng HV-Pharmacy)",
    "khoaPhong": "KHOA DƯỢC",
    "khoaPhoiHop": "",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 5: Chuyển đổi số và ứng dụng bệnh viện thông minh (kết hợp An toàn người bệnh và Phòng ngừa sai sót lâm sàng)",
    "tacGia": "DS. Vũ Hải Nam",
    "authorsDetailed": [
      {
        "name": "DS. Vũ Hải Nam",
        "title": "Nhân viên Khoa Dược",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)",
        "stt": "1",
        "hoTen": "DS. Vũ Hải Nam",
        "chucVu": "Nhân viên Khoa Dược",
        "vaiTro": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "DS. Tống Thanh Bình",
        "title": "Phó trưởng khoa Dược",
        "role": "Thành viên (Cố vấn chuyên môn và kiểm duyệt dữ liệu)",
        "stt": "2",
        "hoTen": "DS. Tống Thanh Bình",
        "chucVu": "Phó trưởng khoa Dược",
        "vaiTro": "Thành viên (Cố vấn chuyên môn và kiểm duyệt dữ liệu)"
      }
    ],
    "thucTrang": "Hiện nay, nhu cầu tra cứu và cung cấp thông tin thuốc tại Bệnh viện ngày càng tăng, xuất phát từ số lượng thuốc trong danh mục lớn, đa dạng về hoạt chất, dạng bào chế, hàm lượng, đường dùng và yêu cầu sử dụng an toàn. Bên cạnh đó, danh mục thuốc thường xuyên có sự thay đổi, bổ sung hoặc thay thế do biến động nguồn cung, thay đổi kết quả thầu hoặc chính sách mua sắm. Trong thực tế lâm sàng tại các buồng bệnh và xe tiêm, nhân viên y tế (đặc biệt là điều dưỡng viên) phải tra cứu thông tin hoàn nguyên, dung môi pha loãng, tốc độ truyền và tương kỵ thuốc chủ yếu bằng cách tìm kiếm tự do trên Internet hoặc lật giở các tờ hướng dẫn sử dụng bằng giấy. Phương thức này làm mất từ 3 đến 5 phút cho mỗi lượt tra cứu, thông tin phân tán, khó kiểm chứng tính cập nhật và tiềm ẩn nguy cơ sai sót chuyên môn nghiêm trọng. Ngoài ra, việc các khoa lâm sàng thường xuyên gọi điện thoại về Khoa Dược để hỏi thông tin thuốc (trung bình 15 - 20 cuộc/ngày) gây quá tải tư vấn, gián đoạn công tác cấp phát và dược lâm sàng. Xuất phát từ điểm nghẽn hiện trường đó, Khoa Dược đã chủ động phát triển và đưa vào vận hành thực nghiệm Nền tảng WebApp thông tin thuốc nội bộ HV-Pharmacy (tại địa chỉ: https://sites.google.com/view/duoc-bvdkhungvuong-phutho), chuẩn hóa 100% cơ sở dữ liệu hướng dẫn tiêm truyền, tích hợp tra cứu tức thời dưới 1 giây và cung cấp mã QR Code dán trực tiếp tại xe tiêm.",
    "soLieuBanDau": [
      "Thực trạng dữ liệu gốc từ đơn vị: Trong Phiếu đăng ký gốc (File 01), Khoa Dược chưa hoàn thành việc thu thập số liệu mốc ban đầu (Mục 6.2 hoàn toàn để trống).",
      "Ước lượng hiện trạng thao tác lâm sàng: Qua khảo sát sơ bộ tại các buồng bệnh, việc tra cứu thủ công bằng tài liệu giấy hoặc tìm kiếm tự do trên Internet thường mất từ 3 đến 5 phút/lượt; số cuộc gọi gián đoạn về Khoa Dược ước tính 15 – 20 cuộc/ngày.",
      "Tỷ lệ khoa phòng có kênh tra cứu thông tin thuốc nội bộ số hóa tức thời: Đạt 0.0% trước khi triển khai đề án.",
      "Hiện trạng can thiệp thực tế (Maturity Level: OPERATIONAL_PILOT): Khoa Dược đã chủ động xây dựng và đưa vào vận hành thử nghiệm Nền tảng số HV-Pharmacy (Google Sites + Google Apps Script WebApp) tại địa chỉ: https://sites.google.com/view/duoc-bvdkhungvuong-phutho, hoàn thành số hóa 6 khối dữ liệu cho danh mục thuốc tiêm truyền của Bệnh viện."
    ],
    "fiveWhys": [
      {
        "level": "Why 1 (Hiện trạng thao tác)",
        "question": "Tại sao nhân viên y tế (đặc biệt là điều dưỡng tại xe tiêm) mất từ 3 đến 5 phút và gặp khó khăn khi tra cứu thông tin thuốc?",
        "answer": "Vì danh mục thuốc lớn, biến động liên tục theo kết quả thầu/nguồn cung, việc tra cứu phải lật giở tài liệu giấy hoặc tìm kiếm Internet tự do."
      },
      {
        "level": "Why 2 (Chất lượng nguồn tin)",
        "question": "Tại sao việc tra cứu thông tin thuốc trên Internet tự do lại tiềm ẩn rủi ro an toàn người bệnh?",
        "answer": "Vì thông tin trên mạng phân tán, không đồng nhất, khó kiểm chứng tính cập nhật và không khớp hoàn toàn với quy cách, hàm lượng thuốc đang lưu hành tại Bệnh viện."
      },
      {
        "level": "Why 3 (Áp lực điều phối)",
        "question": "Tại sao các khoa lâm sàng thường xuyên phải gọi điện thoại về Khoa Dược gây gián đoạn công việc?",
        "answer": "Vì tại xe tiêm và buồng trực điều dưỡng chưa có công cụ số hóa tra cứu tức thời, tin cậy và được kiểm duyệt chính thống bởi Hội đồng Thuốc và Điều trị."
      },
      {
        "level": "Why 4 (Công cụ kỹ thuật)",
        "question": "Tại sao Bệnh viện chưa có hệ thống số hóa thông tin thuốc tập trung cho nhân viên y tế?",
        "answer": "Vì trước đây danh mục thuốc chủ yếu ban hành bằng văn bản giấy hoặc file bảng tính định kỳ, chưa được đóng gói thành ứng dụng WebApp di động tiện ích tối ưu hóa cho di động."
      },
      {
        "level": "Why 5 (Cốt lõi hệ thống)",
        "question": "NGUYÊN NHÂN GỐC RỄ: Thiếu một nền tảng WebApp số hóa thông tin thuốc nội bộ tập trung, được chuẩn hóa 6 khối thông tin tiêm truyền và đồng bộ tức thời với danh mục thực tế của Bệnh viện Đa khoa Hùng Vương.",
        "answer": "Cần xây dựng, chuẩn hóa và phổ cập Nền tảng WebApp HV-Pharmacy đa module, gắn mã QR Code tại 100% xe tiêm để tra cứu tức thời trong 15 - 30 giây và phòng ngừa sai sót thuốc."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Thời gian tra cứu thông tin 01 loại thuốc tiêm truyền",
        "hienTrang": "3 – 5 phút/lượt (tra cứu tài liệu giấy hoặc tìm kiếm Internet)",
        "mucTieu": "Giảm xuống ≤ 15 – 30 giây/lượt",
        "phuongPhap": "Bấm giờ thực tế trên 50 lượt tra cứu tại buồng bệnh"
      },
      {
        "chiTieu": "Tỷ lệ chuẩn hóa dữ liệu thuốc tiêm truyền",
        "hienTrang": "0.0% (chưa có hệ thống tra cứu số hóa chuẩn)",
        "mucTieu": "Đạt 100% thuốc tiêm truyền trong danh mục Bệnh viện",
        "phuongPhap": "Dược sĩ Lâm sàng và Lãnh đạo Khoa Dược thẩm định 6 khối dữ liệu"
      },
      {
        "chiTieu": "Số cuộc gọi gián đoạn hỏi thông tin thuốc về Khoa Dược",
        "hienTrang": "15 – 20 cuộc/ngày (gây quá tải đường dây Dược lâm sàng)",
        "mucTieu": "Giảm ≥ 70.0% (còn ≤ 4 – 5 cuộc/ngày)",
        "phuongPhap": "Nhật ký theo dõi cuộc gọi thông tin thuốc tại Khoa Dược"
      },
      {
        "chiTieu": "Độ phủ tiếp cận nhân viên y tế (BS, ĐD toàn viện)",
        "hienTrang": "0.0% (chưa số hóa)",
        "mucTieu": "100% xe tiêm và buồng trực điều dưỡng dán mã QR Code",
        "phuongPhap": "Biên bản bàn giao và kiểm tra hiện trường Gemba"
      },
      {
        "chiTieu": "Mức độ hài lòng của nhân viên y tế (BS, ĐD lâm sàng)",
        "hienTrang": "Chưa khảo sát",
        "mucTieu": "Đạt ≥ 92.0% hài lòng và rất hài lòng",
        "phuongPhap": "Khảo sát trực tuyến trên 50 bác sĩ, điều dưỡng nội trú"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Chuẩn hóa cơ sở dữ liệu Dược lâm sàng 6 khối thông tin): Khoa Dược chủ trì chuẩn hóa cơ sở dữ liệu toàn bộ thuốc tiêm truyền gồm 6 khối thông tin cốt lõi: (1) Thông tin chung (Tên thuốc, biệt dược, hàm lượng, dạng bào chế); (2) Mô tả và chỉ định; (3) Hướng dẫn hoàn nguyên (dung môi, thể tích, độ ổn định sau hoàn nguyên); (4) Hướng dẫn pha loãng (dung môi tương thích, nồng độ tối đa, tốc độ truyền TM); (5) Đường dùng ngoài tĩnh mạch (tiêm bắp IM, tiêm dưới da SC); (6) Lưu ý an toàn lâm sàng (tương kỵ tuyệt đối, độc tính cần theo dõi, chống chỉ định, phụ nữ có thai/cho con bú, bảo quản).",
      "Giải pháp 2 (Vận hành Nền tảng số WebApp HV-Pharmacy đa module): Đưa vào vận hành thực tế hệ thống WebApp HV-Pharmacy trên nền tảng Google Sites kết hợp Google Apps Script WebApp với bộ lọc tức thời (Instant client-side filter) dưới 1 giây. Tích hợp đầy đủ 5 module: Tra cứu thuốc tiêm truyền, Tra cứu danh mục thuốc trúng thầu BV, Tương tác thuốc - thuốc, Chỉnh liều đối tượng bệnh nhân đặc biệt (suy gan, suy thận, trẻ em, người cao tuổi) và Trợ lý AI Dược lâm sàng DeepMed-AI.",
      "Giải pháp 3 (Phổ cập điểm truy cập QR Code tại buồng bệnh và xe tiêm): Thiết kế và dán mã QR Code truy cập trực tiếp WebApp HV-Pharmacy trên 100% xe tiêm thuốc, xe làm thủ thuật và bàn làm việc điều dưỡng tại các khoa lâm sàng. Bác sĩ và điều dưỡng chỉ cần quét mã bằng điện thoại thông minh là có ngay thông tin pha chế, không cần đăng nhập hay cài đặt phần mềm.",
      "Giải pháp 4 (Phối hợp CNTT bảo đảm an toàn dữ liệu và tích hợp HIS): Phối hợp với Phòng Công nghệ Thông tin rà soát bảo mật dữ liệu đám mây, thiết lập quy chế phân quyền cập nhật dữ liệu dược, ghi nhận nhật ký truy cập (web traffic log) và xây dựng phương án tích hợp nút bấm tra cứu trực tiếp từ phần mềm Quản lý Bệnh viện (HIS)."
    ],
    "phamVi": "Vận hành thực nghiệm trên toàn viện (100% khoa lâm sàng), trọng tâm đo lường tại Trung tâm Cấp cứu 115, Khoa Hồi sức Cấp cứu, Khoa Nội Tổng hợp, Khoa Ngoại, Khoa Nhi và Khoa Dược.",
    "thoiGian": "Từ ngày 10 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
    "sanPhamDauRa": "01 Hệ thống WebApp HV-Pharmacy vận hành ổn định trên Web và Mobile; 100% xe tiêm được gắn mã QR Code; 01 Bộ cơ sở dữ liệu chuẩn hóa thuốc tiêm truyền và danh mục BV; Nhật ký log truy cập và Kết quả khảo sát sự hài lòng trên 50 nhân viên y tế; 01 Báo cáo Nghiệm thu A3 hoàn chỉnh.",
    "soHieuVanBan": "Số: 23/TB-QLCL-DUOC",
    "tongDiemThamDinh": 95,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (XUẤT SẮC — PHÊ DUYỆT ĐƯA VÀO ĐO LƯỜNG NGHIỆM THU DIỆN RỘNG) |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "19 / 20",
        "nhanXet": "Nhu cầu tra cứu thông tin tiêm truyền, pha loãng và tương kỵ thuốc tại buồng bệnh là cực kỳ cấp thiết, liên quan trực tiếp đến an toàn tính mạng người bệnh và phòng ngừa sự cố y khoa."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "25 / 25",
        "nhanXet": "Khả thi tuyệt đối (25/25 điểm). Đề án không chỉ nằm trên ý tưởng mà nhóm tác giả đã xây dựng hoàn chỉnh và đưa vào chạy thử nghiệm thực tế hệ thống WebApp HV-Pharmacy (Google Sites + Apps Script WebApp) với giao diện trực quan, tốc độ phản hồi tức thì dưới 1 giây."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "18 / 20",
        "nhanXet": "Bản đăng ký gốc của đơn vị hoàn toàn để trống số liệu mốc ban đầu (Baseline) và mục tiêu chỉ mang tính định tính chung chung. Tuy nhiên, qua thẩm định trực tiếp sản phẩm thực tế WebApp HV-Pharmacy đã vận hành thử nghiệm, Tổ QLCL ghi nhận tiềm năng cải tiến vượt trội. Tổ QLCL thiết lập khung mục tiêu kỳ vọng và yêu cầu đơn vị phải tổ chức đo lường thực chứng tại Gemba trong Vòng 2: Bấm giờ thực tế thời gian tra cứu thủ công (ước tính 3–5 phút) so với tra cứu trên WebApp (kỳ vọng đạt ≤ 15–30 giây); ghi nhật ký theo dõi cuộc gọi hỏi thông tin thuốc về Khoa Dược để chứng minh tỷ lệ giảm cuộc gọi gián đoạn trước ngày 22/09/2026."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "15 / 15",
        "nhanXet": "Khả năng nhân rộng tối đa (15/15 điểm). Ứng dụng chạy trên mọi trình duyệt web di động và máy tính qua mã QR Code hoặc URL, triển khai ngay cho 100% khoa lâm sàng và phòng khám vệ tinh với chi phí bản quyền 0 đồng."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "18 / 20",
        "nhanXet": "Đổi mới sáng tạo tinh gọn xuất sắc (18/20 điểm). Tận dụng thông minh hệ sinh thái đám mây Google Workspace, thiết kế giao diện chuẩn nhận diện thương hiệu Bệnh viện Đa khoa Hùng Vương, phân tách 6 khối thông tin lâm sàng chuẩn mực và tích hợp trợ lý AI DeepMed-AI."
      }
    ],
    "ketLuanQLCL": "1. Hội đồng Giám khảo và Tổ QLCL phê duyệt Đề án Đạt Loại A (Xuất sắc) với 95/100 điểm, chính thức chuyển sang Giai đoạn Vận hành Đo lường Nghiệm thu diện rộng (Gate 2) từ ngày 10/09/2026.\r\n2. Nhóm tác giả phối hợp Phòng Điều dưỡng và các Khoa lâm sàng triển khai dán mã QR Code truy cập WebApp HV-Pharmacy tại 100% xe tiêm thuốc, xe thủ thuật và buồng trực điều dưỡng.\r\n3. Phối hợp Phòng Công nghệ Thông tin rà soát an toàn an ninh dữ liệu, theo dõi tính ổn định của máy chủ đám mây và nghiên cứu phương án tích hợp liên kết tra cứu trên phần mềm HIS.\r\n4. Bắt buộc tổ chức đo lường số liệu thực chứng tại hiện trường buồng bệnh và xe tiêm: Bấm giờ thực tế trên tối thiểu 30–50 lượt tra cứu (so sánh giữa phương pháp thủ công/tra cứu Internet tự do T0 và sử dụng WebApp T1); lập sổ theo dõi nhật ký cuộc gọi hỏi thông tin thuốc về Khoa Dược trong 02 tuần thử nghiệm để xác thực hiệu quả định lượng trước Hội đồng Chung kết.\r\n5. Hoàn thiện Bộ số liệu chứng minh hiệu quả và hoàn thành Đề cương A3 chuẩn bị báo cáo nghiệm thu Vòng Chung kết vào ngày 22/09/2026.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-DUOC-01 02. Bản Đăng ký Sau Hiệu chỉnh Khoa Dược DS. Vũ Hải Nam.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 12312
      },
      {
        "fileName": "KZ16-DUOC-01 03. Biên bản Thẩm định Khoa Dược DS. Vũ Hải Nam.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 6123
      },
      {
        "fileName": "KZ16-DUOC-01 04. Đề cương A3 Triển khai Thực nghiệm Khoa Dược DS. Vũ Hải Nam.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 10017
      }
    ],
    "quickSummary": {
      "idea": "Xây dựng WebApp thông tin thuốc tra cứu nhanh phục vụ nhân viên y tế tại Bệnh viện Đa khoa Hùng Vương (Nền tảng HV-Pharmacy)",
      "painPoints": [
        "Thực trạng dữ liệu gốc từ đơn vị: Trong Phiếu đăng ký gốc (File 01), Khoa Dược chưa hoàn thành việc thu thập số liệu mốc ban đầu (Mục 6.2 hoàn toàn để trống).",
        "Ước lượng hiện trạng thao tác lâm sàng: Qua khảo sát sơ bộ tại các buồng bệnh, việc tra cứu thủ công bằng tài liệu giấy hoặc tìm kiếm tự do trên Internet thường mất từ 3 đến 5 phút/lượt; số cuộc gọi gián đoạn về Khoa Dược ước tính 15 – 20 cuộc/ngày.",
        "Tỷ lệ khoa phòng có kênh tra cứu thông tin thuốc nội bộ số hóa tức thời: Đạt 0.0% trước khi triển khai đề án."
      ],
      "solutions": [
        "Giải pháp 1 (Chuẩn hóa cơ sở dữ liệu Dược lâm sàng 6 khối thông tin): Khoa Dược chủ trì chuẩn hóa cơ sở dữ liệu toàn bộ thuốc tiêm truyền gồm 6 khối thông tin cốt lõi: (1) Thông tin chung (Tên thuốc, biệt dược, hàm lượng, dạng bào chế); (2) Mô tả và chỉ định; (3) Hướng dẫn hoàn nguyên (dung môi, thể tích, độ ổn định sau hoàn nguyên); (4) Hướng dẫn pha loãng (dung môi tương thích, nồng độ tối đa, tốc độ truyền TM); (5) Đường dùng ngoài tĩnh mạch (tiêm bắp IM, tiêm dưới da SC); (6) Lưu ý an toàn lâm sàng (tương kỵ tuyệt đối, độc tính cần theo dõi, chống chỉ định, phụ nữ có thai/cho con bú, bảo quản).",
        "Giải pháp 2 (Vận hành Nền tảng số WebApp HV-Pharmacy đa module): Đưa vào vận hành thực tế hệ thống WebApp HV-Pharmacy trên nền tảng Google Sites kết hợp Google Apps Script WebApp với bộ lọc tức thời (Instant client-side filter) dưới 1 giây. Tích hợp đầy đủ 5 module: Tra cứu thuốc tiêm truyền, Tra cứu danh mục thuốc trúng thầu BV, Tương tác thuốc - thuốc, Chỉnh liều đối tượng bệnh nhân đặc biệt (suy gan, suy thận, trẻ em, người cao tuổi) và Trợ lý AI Dược lâm sàng DeepMed-AI.",
        "Giải pháp 3 (Phổ cập điểm truy cập QR Code tại buồng bệnh và xe tiêm): Thiết kế và dán mã QR Code truy cập trực tiếp WebApp HV-Pharmacy trên 100% xe tiêm thuốc, xe làm thủ thuật và bàn làm việc điều dưỡng tại các khoa lâm sàng. Bác sĩ và điều dưỡng chỉ cần quét mã bằng điện thoại thông minh là có ngay thông tin pha chế, không cần đăng nhập hay cài đặt phần mềm."
      ],
      "keyMetrics": [
        {
          "label": "Thời gian tra cứu thông tin 01 loại th...",
          "before": "3 – 5 phút/lượt (tra cứu tài liệu giấy hoặc tìm kiếm Internet)",
          "after": "Giảm xuống ≤ 15 – 30 giây/lượt",
          "note": "Bấm giờ thực tế trên 50 lượt tra cứu tại buồng bệnh"
        },
        {
          "label": "Tỷ lệ chuẩn hóa dữ liệu thuốc tiêm tru...",
          "before": "0.0% (chưa có hệ thống tra cứu số hóa chuẩn)",
          "after": "Đạt 100% thuốc tiêm truyền trong danh mục Bệnh viện",
          "note": "Dược sĩ Lâm sàng và Lãnh đạo Khoa Dược thẩm định 6 khối dữ liệu"
        },
        {
          "label": "Số cuộc gọi gián đoạn hỏi thông tin th...",
          "before": "15 – 20 cuộc/ngày (gây quá tải đường dây Dược lâm sàng)",
          "after": "Giảm ≥ 70.0% (còn ≤ 4 – 5 cuộc/ngày)",
          "note": "Nhật ký theo dõi cuộc gọi thông tin thuốc tại Khoa Dược"
        },
        {
          "label": "Độ phủ tiếp cận nhân viên y tế (BS, ĐD...",
          "before": "0.0% (chưa số hóa)",
          "after": "100% xe tiêm và buồng trực điều dưỡng dán mã QR Code",
          "note": "Biên bản bàn giao và kiểm tra hiện trường Gemba"
        }
      ]
    },
    "a3Report": {
      "title": "Xây dựng WebApp thông tin thuốc tra cứu nhanh phục vụ nhân viên y tế tại Bệnh viện Đa khoa Hùng Vương (Nền tảng HV-Pharmacy)",
      "department": "KHOA DƯỢC",
      "leader": "DS. Vũ Hải Nam",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Hiện nay, nhu cầu tra cứu và cung cấp thông tin thuốc tại Bệnh viện ngày càng tăng, xuất phát từ số lượng thuốc trong danh mục lớn, đa dạng về hoạt chất, dạng bào chế, hàm lượng, đường dùng và yêu cầu sử dụng an toàn. Bên cạnh đó, danh mục thuốc thường xuyên có sự thay đổi, bổ sung hoặc thay thế do biến động nguồn cung, thay đổi kết quả thầu hoặc chính sách mua sắm. Trong thực tế lâm sàng tại các buồng bệnh và xe tiêm, nhân viên y tế (đặc biệt là điều dưỡng viên) phải tra cứu thông tin hoàn nguyên, dung môi pha loãng, tốc độ truyền và tương kỵ thuốc chủ yếu bằng cách tìm kiếm tự do trên Internet hoặc lật giở các tờ hướng dẫn sử dụng bằng giấy. Phương thức này làm mất từ 3 đến 5 phút cho mỗi lượt tra cứu, thông tin phân tán, khó kiểm chứng tính cập nhật và tiềm ẩn nguy cơ sai sót chuyên môn nghiêm trọng. Ngoài ra, việc các khoa lâm sàng thường xuyên gọi điện thoại về Khoa Dược để hỏi thông tin thuốc (trung bình 15 - 20 cuộc/ngày) gây quá tải tư vấn, gián đoạn công tác cấp phát và dược lâm sàng. Xuất phát từ điểm nghẽn hiện trường đó, Khoa Dược đã chủ động phát triển và đưa vào vận hành thực nghiệm Nền tảng WebApp thông tin thuốc nội bộ HV-Pharmacy (tại địa chỉ: https://sites.google.com/view/duoc-bvdkhungvuong-phutho), chuẩn hóa 100% cơ sở dữ liệu hướng dẫn tiêm truyền, tích hợp tra cứu tức thời dưới 1 giây và cung cấp mã QR Code dán trực tiếp tại xe tiêm.",
      "currentCondition": "Thực trạng dữ liệu gốc từ đơn vị: Trong Phiếu đăng ký gốc (File 01), Khoa Dược chưa hoàn thành việc thu thập số liệu mốc ban đầu (Mục 6.2 hoàn toàn để trống).\n• Ước lượng hiện trạng thao tác lâm sàng: Qua khảo sát sơ bộ tại các buồng bệnh, việc tra cứu thủ công bằng tài liệu giấy hoặc tìm kiếm tự do trên Internet thường mất từ 3 đến 5 phút/lượt; số cuộc gọi gián đoạn về Khoa Dược ước tính 15 – 20 cuộc/ngày.\n• Tỷ lệ khoa phòng có kênh tra cứu thông tin thuốc nội bộ số hóa tức thời: Đạt 0.0% trước khi triển khai đề án.\n• Hiện trạng can thiệp thực tế (Maturity Level: OPERATIONAL_PILOT): Khoa Dược đã chủ động xây dựng và đưa vào vận hành thử nghiệm Nền tảng số HV-Pharmacy (Google Sites + Google Apps Script WebApp) tại địa chỉ: https://sites.google.com/view/duoc-bvdkhungvuong-phutho, hoàn thành số hóa 6 khối dữ liệu cho danh mục thuốc tiêm truyền của Bệnh viện.",
      "targetCondition": "• Thời gian tra cứu thông tin 01 loại thuốc tiêm truyền: Hiện trạng 3 – 5 phút/lượt (tra cứu tài liệu giấy hoặc tìm kiếm Internet) ➔ Cam kết đạt Giảm xuống ≤ 15 – 30 giây/lượt\n• Tỷ lệ chuẩn hóa dữ liệu thuốc tiêm truyền: Hiện trạng 0.0% (chưa có hệ thống tra cứu số hóa chuẩn) ➔ Cam kết đạt Đạt 100% thuốc tiêm truyền trong danh mục Bệnh viện\n• Số cuộc gọi gián đoạn hỏi thông tin thuốc về Khoa Dược: Hiện trạng 15 – 20 cuộc/ngày (gây quá tải đường dây Dược lâm sàng) ➔ Cam kết đạt Giảm ≥ 70.0% (còn ≤ 4 – 5 cuộc/ngày)\n• Độ phủ tiếp cận nhân viên y tế (BS, ĐD toàn viện): Hiện trạng 0.0% (chưa số hóa) ➔ Cam kết đạt 100% xe tiêm và buồng trực điều dưỡng dán mã QR Code\n• Mức độ hài lòng của nhân viên y tế (BS, ĐD lâm sàng): Hiện trạng Chưa khảo sát ➔ Cam kết đạt Đạt ≥ 92.0% hài lòng và rất hài lòng",
      "rootCauseAnalysis": "Why 1 (Hiện trạng thao tác): Tại sao nhân viên y tế (đặc biệt là điều dưỡng tại xe tiêm) mất từ 3 đến 5 phút và gặp khó khăn khi tra cứu thông tin thuốc? ➔ Vì danh mục thuốc lớn, biến động liên tục theo kết quả thầu/nguồn cung, việc tra cứu phải lật giở tài liệu giấy hoặc tìm kiếm Internet tự do.\nWhy 2 (Chất lượng nguồn tin): Tại sao việc tra cứu thông tin thuốc trên Internet tự do lại tiềm ẩn rủi ro an toàn người bệnh? ➔ Vì thông tin trên mạng phân tán, không đồng nhất, khó kiểm chứng tính cập nhật và không khớp hoàn toàn với quy cách, hàm lượng thuốc đang lưu hành tại Bệnh viện.\nWhy 3 (Áp lực điều phối): Tại sao các khoa lâm sàng thường xuyên phải gọi điện thoại về Khoa Dược gây gián đoạn công việc? ➔ Vì tại xe tiêm và buồng trực điều dưỡng chưa có công cụ số hóa tra cứu tức thời, tin cậy và được kiểm duyệt chính thống bởi Hội đồng Thuốc và Điều trị.\nWhy 4 (Công cụ kỹ thuật): Tại sao Bệnh viện chưa có hệ thống số hóa thông tin thuốc tập trung cho nhân viên y tế? ➔ Vì trước đây danh mục thuốc chủ yếu ban hành bằng văn bản giấy hoặc file bảng tính định kỳ, chưa được đóng gói thành ứng dụng WebApp di động tiện ích tối ưu hóa cho di động.\nWhy 5 (Cốt lõi hệ thống): NGUYÊN NHÂN GỐC RỄ: Thiếu một nền tảng WebApp số hóa thông tin thuốc nội bộ tập trung, được chuẩn hóa 6 khối thông tin tiêm truyền và đồng bộ tức thời với danh mục thực tế của Bệnh viện Đa khoa Hùng Vương. ➔ Cần xây dựng, chuẩn hóa và phổ cập Nền tảng WebApp HV-Pharmacy đa module, gắn mã QR Code tại 100% xe tiêm để tra cứu tức thời trong 15 - 30 giây và phòng ngừa sai sót thuốc.",
      "countermeasures": "• Giải pháp 1 (Chuẩn hóa cơ sở dữ liệu Dược lâm sàng 6 khối thông tin): Khoa Dược chủ trì chuẩn hóa cơ sở dữ liệu toàn bộ thuốc tiêm truyền gồm 6 khối thông tin cốt lõi: (1) Thông tin chung (Tên thuốc, biệt dược, hàm lượng, dạng bào chế); (2) Mô tả và chỉ định; (3) Hướng dẫn hoàn nguyên (dung môi, thể tích, độ ổn định sau hoàn nguyên); (4) Hướng dẫn pha loãng (dung môi tương thích, nồng độ tối đa, tốc độ truyền TM); (5) Đường dùng ngoài tĩnh mạch (tiêm bắp IM, tiêm dưới da SC); (6) Lưu ý an toàn lâm sàng (tương kỵ tuyệt đối, độc tính cần theo dõi, chống chỉ định, phụ nữ có thai/cho con bú, bảo quản).\n• Giải pháp 2 (Vận hành Nền tảng số WebApp HV-Pharmacy đa module): Đưa vào vận hành thực tế hệ thống WebApp HV-Pharmacy trên nền tảng Google Sites kết hợp Google Apps Script WebApp với bộ lọc tức thời (Instant client-side filter) dưới 1 giây. Tích hợp đầy đủ 5 module: Tra cứu thuốc tiêm truyền, Tra cứu danh mục thuốc trúng thầu BV, Tương tác thuốc - thuốc, Chỉnh liều đối tượng bệnh nhân đặc biệt (suy gan, suy thận, trẻ em, người cao tuổi) và Trợ lý AI Dược lâm sàng DeepMed-AI.\n• Giải pháp 3 (Phổ cập điểm truy cập QR Code tại buồng bệnh và xe tiêm): Thiết kế và dán mã QR Code truy cập trực tiếp WebApp HV-Pharmacy trên 100% xe tiêm thuốc, xe làm thủ thuật và bàn làm việc điều dưỡng tại các khoa lâm sàng. Bác sĩ và điều dưỡng chỉ cần quét mã bằng điện thoại thông minh là có ngay thông tin pha chế, không cần đăng nhập hay cài đặt phần mềm.\n• Giải pháp 4 (Phối hợp CNTT bảo đảm an toàn dữ liệu và tích hợp HIS): Phối hợp với Phòng Công nghệ Thông tin rà soát bảo mật dữ liệu đám mây, thiết lập quy chế phân quyền cập nhật dữ liệu dược, ghi nhận nhật ký truy cập (web traffic log) và xây dựng phương án tích hợp nút bấm tra cứu trực tiếp từ phần mềm Quản lý Bệnh viện (HIS).",
      "planImplementation": "Khu vực: Vận hành thực nghiệm trên toàn viện (100% khoa lâm sàng), trọng tâm đo lường tại Trung tâm Cấp cứu 115, Khoa Hồi sức Cấp cứu, Khoa Nội Tổng hợp, Khoa Ngoại, Khoa Nhi và Khoa Dược.\nThời gian: Từ ngày 10 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.\nSản phẩm đầu ra: 01 Hệ thống WebApp HV-Pharmacy vận hành ổn định trên Web và Mobile; 100% xe tiêm được gắn mã QR Code; 01 Bộ cơ sở dữ liệu chuẩn hóa thuốc tiêm truyền và danh mục BV; Nhật ký log truy cập và Kết quả khảo sát sự hài lòng trên 50 nhân viên y tế; 01 Báo cáo Nghiệm thu A3 hoàn chỉnh.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại KHOA DƯỢC; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "Thực trạng dữ liệu gốc từ đơn vị: Trong Phiếu đăng ký gốc (File 01), Khoa Dược chưa hoàn thành việc thu thập số liệu mốc ban đầu (Mục 6.2 hoàn toàn để trống).\n• Ước lượng hiện trạng thao tác lâm sàng: Qua khảo sát sơ bộ tại các buồng bệnh, việc tra cứu thủ công bằng tài liệu giấy hoặc tìm kiếm tự do trên Internet thường mất từ 3 đến 5 phút/lượt; số cuộc gọi gián đoạn về Khoa Dược ước tính 15 – 20 cuộc/ngày.\n• Tỷ lệ khoa phòng có kênh tra cứu thông tin thuốc nội bộ số hóa tức thời: Đạt 0.0% trước khi triển khai đề án.\n• Hiện trạng can thiệp thực tế (Maturity Level: OPERATIONAL_PILOT): Khoa Dược đã chủ động xây dựng và đưa vào vận hành thử nghiệm Nền tảng số HV-Pharmacy (Google Sites + Google Apps Script WebApp) tại địa chỉ: https://sites.google.com/view/duoc-bvdkhungvuong-phutho, hoàn thành số hóa 6 khối dữ liệu cho danh mục thuốc tiêm truyền của Bệnh viện.",
      "smartGoal": "• Thời gian tra cứu thông tin 01 loại thuốc tiêm truyền: Hiện trạng 3 – 5 phút/lượt (tra cứu tài liệu giấy hoặc tìm kiếm Internet) ➔ Cam kết đạt Giảm xuống ≤ 15 – 30 giây/lượt\n• Tỷ lệ chuẩn hóa dữ liệu thuốc tiêm truyền: Hiện trạng 0.0% (chưa có hệ thống tra cứu số hóa chuẩn) ➔ Cam kết đạt Đạt 100% thuốc tiêm truyền trong danh mục Bệnh viện\n• Số cuộc gọi gián đoạn hỏi thông tin thuốc về Khoa Dược: Hiện trạng 15 – 20 cuộc/ngày (gây quá tải đường dây Dược lâm sàng) ➔ Cam kết đạt Giảm ≥ 70.0% (còn ≤ 4 – 5 cuộc/ngày)\n• Độ phủ tiếp cận nhân viên y tế (BS, ĐD toàn viện): Hiện trạng 0.0% (chưa số hóa) ➔ Cam kết đạt 100% xe tiêm và buồng trực điều dưỡng dán mã QR Code\n• Mức độ hài lòng của nhân viên y tế (BS, ĐD lâm sàng): Hiện trạng Chưa khảo sát ➔ Cam kết đạt Đạt ≥ 92.0% hài lòng và rất hài lòng",
      "rootCause": "Why 1 (Hiện trạng thao tác): Tại sao nhân viên y tế (đặc biệt là điều dưỡng tại xe tiêm) mất từ 3 đến 5 phút và gặp khó khăn khi tra cứu thông tin thuốc? ➔ Vì danh mục thuốc lớn, biến động liên tục theo kết quả thầu/nguồn cung, việc tra cứu phải lật giở tài liệu giấy hoặc tìm kiếm Internet tự do.\nWhy 2 (Chất lượng nguồn tin): Tại sao việc tra cứu thông tin thuốc trên Internet tự do lại tiềm ẩn rủi ro an toàn người bệnh? ➔ Vì thông tin trên mạng phân tán, không đồng nhất, khó kiểm chứng tính cập nhật và không khớp hoàn toàn với quy cách, hàm lượng thuốc đang lưu hành tại Bệnh viện.\nWhy 3 (Áp lực điều phối): Tại sao các khoa lâm sàng thường xuyên phải gọi điện thoại về Khoa Dược gây gián đoạn công việc? ➔ Vì tại xe tiêm và buồng trực điều dưỡng chưa có công cụ số hóa tra cứu tức thời, tin cậy và được kiểm duyệt chính thống bởi Hội đồng Thuốc và Điều trị.\nWhy 4 (Công cụ kỹ thuật): Tại sao Bệnh viện chưa có hệ thống số hóa thông tin thuốc tập trung cho nhân viên y tế? ➔ Vì trước đây danh mục thuốc chủ yếu ban hành bằng văn bản giấy hoặc file bảng tính định kỳ, chưa được đóng gói thành ứng dụng WebApp di động tiện ích tối ưu hóa cho di động.\nWhy 5 (Cốt lõi hệ thống): NGUYÊN NHÂN GỐC RỄ: Thiếu một nền tảng WebApp số hóa thông tin thuốc nội bộ tập trung, được chuẩn hóa 6 khối thông tin tiêm truyền và đồng bộ tức thời với danh mục thực tế của Bệnh viện Đa khoa Hùng Vương. ➔ Cần xây dựng, chuẩn hóa và phổ cập Nền tảng WebApp HV-Pharmacy đa module, gắn mã QR Code tại 100% xe tiêm để tra cứu tức thời trong 15 - 30 giây và phòng ngừa sai sót thuốc.",
      "resultsBeforeAfter": [
        {
          "metric": "Thời gian tra cứu thông tin 01 loại thuốc tiêm truyền",
          "before": "3 – 5 phút/lượt (tra cứu tài liệu giấy hoặc tìm kiếm Internet)",
          "after": "Giảm xuống ≤ 15 – 30 giây/lượt"
        },
        {
          "metric": "Tỷ lệ chuẩn hóa dữ liệu thuốc tiêm truyền",
          "before": "0.0% (chưa có hệ thống tra cứu số hóa chuẩn)",
          "after": "Đạt 100% thuốc tiêm truyền trong danh mục Bệnh viện"
        },
        {
          "metric": "Số cuộc gọi gián đoạn hỏi thông tin thuốc về Khoa Dược",
          "before": "15 – 20 cuộc/ngày (gây quá tải đường dây Dược lâm sàng)",
          "after": "Giảm ≥ 70.0% (còn ≤ 4 – 5 cuộc/ngày)"
        },
        {
          "metric": "Độ phủ tiếp cận nhân viên y tế (BS, ĐD toàn viện)",
          "before": "0.0% (chưa số hóa)",
          "after": "100% xe tiêm và buồng trực điều dưỡng dán mã QR Code"
        },
        {
          "metric": "Mức độ hài lòng của nhân viên y tế (BS, ĐD lâm sàng)",
          "before": "Chưa khảo sát",
          "after": "Đạt ≥ 92.0% hài lòng và rất hài lòng"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 95/100đ (ĐẠT LOẠI A (XUẤT SẮC — PHÊ DUYỆT ĐƯA VÀO ĐO LƯỜNG NGHIỆM THU DIỆN RỘNG) |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Vận hành thực nghiệm trên toàn viện (100% khoa lâm sàng), trọng tâm đo lường tại Trung tâm Cấp cứu 115, Khoa Hồi sức Cấp cứu, Khoa Nội Tổng hợp, Khoa Ngoại, Khoa Nhi và Khoa Dược.",
        "time": "Từ ngày 10 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "DS. Vũ Hải Nam",
    "nhomTacGia": "DS. Vũ Hải Nam, DS. Tống Thanh Bình",
    "diemBanDau": "95"
  },
  {
    "maDeTai": "KZ16-HSCC-01",
    "tenDeTai": "Chuẩn hóa và triển khai gói đồ dùng chăm sóc cá nhân cho người bệnh thở máy tại Khoa Hồi sức cấp cứu",
    "tenSanPham": "Bộ Túi Đồ Dùng Chăm Sóc Cá Nhân Chuẩn Hóa Cho Người Bệnh Thở Máy",
    "khoaPhong": "KHOA HỒI SỨC CẤP CỨU",
    "khoaPhoiHop": "",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 4: Nâng cao trải nghiệm và sự hài lòng của người bệnh (kết hợp An toàn người bệnh và Kiểm soát nhiễm khuẩn)",
    "tacGia": "ĐD. Nguyễn Thị Thanh Mai",
    "authorsDetailed": [
      {
        "name": "ĐD. Nguyễn Thị Thanh Mai",
        "title": "Điều dưỡng Khoa HSCC",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)",
        "stt": "1",
        "hoTen": "ĐD. Nguyễn Thị Thanh Mai",
        "chucVu": "Điều dưỡng Khoa HSCC",
        "vaiTro": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "ĐD. Nguyễn Thanh Loan",
        "title": "Điều dưỡng Khoa HSCC",
        "role": "Thư ký đề án (Theo dõi số liệu và checklist)",
        "stt": "2",
        "hoTen": "ĐD. Nguyễn Thanh Loan",
        "chucVu": "Điều dưỡng Khoa HSCC",
        "vaiTro": "Thư ký đề án (Theo dõi số liệu và checklist)"
      },
      {
        "name": "ĐD. Phạm Minh Phụng",
        "title": "Điều dưỡng trưởng bộ phận HSTC",
        "role": "Cố vấn chuyên môn và điều phối quy trình",
        "stt": "3",
        "hoTen": "ĐD. Phạm Minh Phụng",
        "chucVu": "Điều dưỡng trưởng bộ phận HSTC",
        "vaiTro": "Cố vấn chuyên môn và điều phối quy trình"
      },
      {
        "name": "ĐD. Dương Duy Phương",
        "title": "Điều dưỡng Khoa HSCC",
        "role": "Thành viên thực hiện thử nghiệm Gemba",
        "stt": "4",
        "hoTen": "ĐD. Dương Duy Phương",
        "chucVu": "Điều dưỡng Khoa HSCC",
        "vaiTro": "Thành viên thực hiện thử nghiệm Gemba"
      }
    ],
    "thucTrang": "Người bệnh thở máy tại Khoa Hồi sức cấp cứu thường có tình trạng bệnh nặng, suy hô hấp nguy kịch, hạn chế hoặc mất hoàn toàn khả năng tự thực hiện các hoạt động vệ sinh cá nhân. Trong quá trình điều trị tích cực, người bệnh cần sử dụng nhiều đồ dùng cá nhân chuyên biệt phù hợp với quy trình kiểm soát nhiễm khuẩn và chăm sóc người bệnh thở máy. Tuy nhiên hiện nay, đồ dùng chăm sóc cá nhân chưa được chuẩn hóa thành một gói (Kit) thống nhất tại khoa. Khi người bệnh nhập khoa cấp cứu, người nhà thường phải tự tìm mua các vật dụng bên ngoài theo hướng dẫn truyền miệng của nhân viên y tế. Việc này dẫn đến hàng loạt bất cập nghiêm trọng: 100% người nhà phải tự đi mua; 80% trường hợp mua thiếu ít nhất một loại đồ dùng; 70% trường hợp mua sai chủng loại; thời gian để người bệnh có đủ đồ dùng kéo dài từ 3 đến 4 giờ; 100% trường hợp phải đi mua bổ sung nhiều lần. Tình trạng này gây chậm trễ thời gian can thiệp chăm sóc ban đầu, làm tăng nguy cơ nhiễm khuẩn bệnh viện do mang đồ dùng không chuẩn từ bên ngoài vào, đồng thời khiến người nhà vô cùng lo lắng, hoang mang, mức độ hài lòng chỉ đạt 30.0%.",
    "soLieuBanDau": [
      "Tỷ lệ người nhà người bệnh thở máy phải tự ra ngoài tìm mua đồ dùng cá nhân: Đạt 100.0% (khảo sát thực tế trên 10 bệnh nhân thở máy từ 29/08 đến 10/09/2026).",
      "Tỷ lệ trường hợp người nhà mua thiếu ít nhất một loại đồ dùng cần thiết: Chiếm 80.0%.",
      "Tỷ lệ trường hợp người nhà mua không đúng chủng loại hoặc không phù hợp yêu cầu hồi sức: Chiếm 70.0%.",
      "Thời gian trung bình từ khi người bệnh nhập khoa đến khi có đủ đồ dùng chăm sóc cá nhân: Kéo dài từ 3 đến 4 giờ.",
      "Tỷ lệ trường hợp phải đi mua bổ sung đồ dùng từ 2 lần trở lên: Chiếm 100.0%.",
      "Mức độ hài lòng của người nhà người bệnh đối với việc chuẩn bị đồ dùng chăm sóc: Chỉ đạt 30.0%."
    ],
    "fiveWhys": [
      {
        "level": "Why 1 (Hiện trạng thao tác)",
        "question": "Tại sao người nhà người bệnh thở máy tại Khoa HSCC thường xuyên mua thiếu và mua sai đồ dùng chăm sóc cá nhân?",
        "answer": "Vì khi người bệnh nhập viện cấp cứu, người nhà phải tự ra ngoài các cửa hàng quanh bệnh viện tìm mua lẻ tẻ theo hướng dẫn bằng lời nói của điều dưỡng."
      },
      {
        "level": "Why 2 (Tâm lý và kiến thức)",
        "question": "Tại sao người nhà người bệnh lại mua sai chủng loại (70%) và mua thiếu (80%) đồ dùng?",
        "answer": "Vì người nhà trong trạng thái tâm lý hoảng loạn, lo lắng tột độ khi người thân thở máy, không có kiến thức về quy cách đồ dùng y tế chuyên dụng dùng trong buồng hồi sức tích cực."
      },
      {
        "level": "Why 3 (Thời gian trễ)",
        "question": "Tại sao thời gian để người bệnh có đủ đồ dùng chăm sóc cá nhân lại kéo dài từ 3 đến 4 giờ?",
        "answer": "Vì người nhà phải đi tìm nhiều cửa hàng bên ngoài, mua thiếu phải quay lại mua bổ sung nhiều lần, làm chậm trễ các can thiệp vệ sinh, chăm sóc ban đầu của điều dưỡng."
      },
      {
        "level": "Why 4 (Công cụ quản trị)",
        "question": "Tại sao Khoa HSCC chưa có sẵn gói đồ dùng chăm sóc cá nhân chuẩn hóa để cấp phát ngay cho người bệnh?",
        "answer": "Vì trước đây chưa có danh mục chuẩn hóa đóng gói theo bộ (Kit), chưa có bảng kiểm (checklist) kiểm soát và chưa thiết lập luồng cung ứng vật dụng cá nhân tại chỗ."
      },
      {
        "level": "Why 5 (Cốt lõi hệ thống)",
        "question": "NGUYÊN NHÂN GỐC RỄ: Thiếu quy trình chuẩn hóa đóng gói (Care Kit) đồ dùng chăm sóc cá nhân chuyên biệt cho người bệnh thở máy và thiếu bảng kiểm bàn giao minh bạch ngay khi tiếp nhận người bệnh vào Khoa Hồi sức cấp cứu.",
        "answer": "Cần xây dựng danh mục chuẩn, đóng gói sẵn gói đồ dùng cá nhân theo từng người bệnh, kiểm soát 100% bằng checklist và bàn giao ngay trong 30 phút nhằm nâng cao chất lượng chăm sóc và tối ưu trải nghiệm người nhà."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Tỷ lệ người bệnh thở máy nhập khoa được cung cấp đầy đủ gói đồ dùng chuẩn",
        "hienTrang": "0.0% (100% người nhà tự mua lẻ bên ngoài)",
        "mucTieu": "Đạt ≥ 95.0% người bệnh thở máy",
        "phuongPhap": "Sổ theo dõi tiếp nhận và bàn giao gói đồ dùng cá nhân"
      },
      {
        "chiTieu": "Thời gian từ khi nhập khoa đến khi có đủ đồ dùng chăm sóc cá nhân",
        "hienTrang": "3 – 4 giờ",
        "mucTieu": "Rút ngắn xuống ≤ 30 phút",
        "phuongPhap": "Bấm giờ thực tế ghi nhận trên phiếu chăm sóc điều dưỡng"
      },
      {
        "chiTieu": "Tỷ lệ người nhà phải tự đi mua bổ sung đồ dùng cá nhân",
        "hienTrang": "100.0% (trong đó 80% thiếu, 70% sai chủng loại)",
        "mucTieu": "Giảm xuống ≤ 5.0%",
        "phuongPhap": "Nhật ký theo dõi vật dụng bổ sung tại buồng bệnh"
      },
      {
        "chiTieu": "Tỷ lệ gói đồ dùng được kiểm tra bằng bảng kiểm (checklist) trước khi dùng",
        "hienTrang": "0.0% (chưa áp dụng checklist)",
        "mucTieu": "Đạt 100.0%",
        "phuongPhap": "Bảng kiểm chuẩn bị và bàn giao gói đồ dùng cá nhân"
      },
      {
        "chiTieu": "Mức độ hài lòng của người nhà đối với việc cung cấp đồ dùng chăm sóc",
        "hienTrang": "30.0% hài lòng",
        "mucTieu": "Đạt ≥ 90.0% hài lòng và rất hài lòng",
        "phuongPhap": "Phiếu khảo sát sự hài lòng người nhà người bệnh thở máy"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Xây dựng danh mục gói đồ dùng chăm sóc cá nhân chuẩn): Khoa Hồi sức cấp cứu phối hợp Hội đồng Điều dưỡng và Khoa Kiểm soát nhiễm khuẩn xây dựng danh mục thống nhất gói đồ dùng chăm sóc cá nhân chuyên biệt cho người bệnh thở máy (bao gồm: khăn lau chuyên dụng, tấm lót thấm hút, bàn chải và que vệ sinh khoang miệng, dung dịch sát khuẩn miệng chuyên dụng, cốc chia vạch, bỉm người lớn...), bảo đảm tính vô khuẩn và tiện ích chăm sóc.",
      "Giải pháp 2 (Đóng gói sẵn theo bộ Care Kit định danh từng người bệnh): Tổ chức đóng gói sẵn các túi đồ dùng cá nhân đồng bộ, dán tem nhãn định danh người bệnh (mã BN, họ tên, ngày cấp), có đính kèm danh mục và bảng kiểm (checklist) niêm phong trước khi đưa vào tủ đồ dùng cấp cứu của khoa.",
      "Giải pháp 3 (Chuẩn hóa quy trình cấp phát và kiểm soát bằng Checklist): Ban hành quy trình chuẩn: Khi người bệnh thở máy nhập khoa, điều dưỡng tiếp nhận xác định đối tượng, xuất gói đồ dùng ngay tại chỗ, đối chiếu checklist 2 chiều, bàn giao cho kíp chăm sóc trong vòng 30 phút mà không cần người nhà phải ra ngoài mua sắm.",
      "Giải pháp 4 (Truyền thông và hướng dẫn minh bạch cho người nhà người bệnh): Thiết kế bảng hướng dẫn trực quan thông báo cho người nhà về quyền lợi, danh mục gói đồ dùng được cung cấp, mục đích sử dụng và các lưu ý đặc biệt, giúp người nhà an tâm, giải tỏa tâm lý lo lắng khi người bệnh điều trị tích cực.",
      "Giải pháp 5 (Giám sát tuân thủ và đánh giá sự hài lòng liên tục): Điều dưỡng trưởng bộ phận HSTC thực hiện giám sát hàng ngày qua bảng kiểm, đo lường thời gian đáp ứng và tổ chức phát phiếu khảo sát sự hài lòng của người nhà người bệnh trước khi chuyển khoa hoặc ra viện."
    ],
    "phamVi": "Thực hiện thử nghiệm tại 100% buồng bệnh điều trị hồi sức tích cực (HSTC) và người bệnh thở máy tại Khoa Hồi sức cấp cứu Bệnh viện Đa khoa Hùng Vương.",
    "thoiGian": "Từ ngày 11 tháng 09 năm 2026 đến ngày 23 tháng 09 năm 2026.",
    "sanPhamDauRa": "01 Danh mục gói đồ dùng chăm sóc cá nhân chuẩn hóa cho người bệnh thở máy; 01 Bảng kiểm (Checklist) kiểm soát đóng gói và bàn giao; 01 Quy trình thao tác chuẩn (SOP) cấp phát gói đồ dùng tại Khoa HSCC; Báo cáo số liệu đo lường T0 và T1; Báo cáo Nghiệm thu A3 hoàn chỉnh.",
    "soHieuVanBan": "Số: 24/TB-QLCL-HSCC",
    "tongDiemThamDinh": 96,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (XUẤT SẮC — PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM) |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "19 / 20",
        "nhanXet": "Rất cấp thiết (19/20 điểm). Giải quyết trúng điểm nghẽn bức xúc lớn nhất của người nhà người bệnh thở máy khi nhập khoa cấp cứu, xóa bỏ tình trạng người nhà hoang mang chạy đi mua đồ lẻ tẻ bên ngoài làm chậm trễ chăm sóc."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "24 / 25",
        "nhanXet": "Khả thi rất cao (24/25 điểm). Đề án nằm trong thẩm quyền tổ chức chuyên môn của đội ngũ điều dưỡng Khoa HSCC, dễ dàng đóng gói sẵn theo cơ số và kiểm soát bằng checklist mà không cần đầu tư máy móc phức tạp."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "20 / 20",
        "nhanXet": "Xuất sắc (20/20 điểm). Đề án sở hữu bộ số liệu mốc ban đầu (Baseline) thực chứng tốt nhất từ trước đến nay qua khảo sát trên 10 ca bệnh (100% tự mua, 80% thiếu, 70% sai, trễ 3-4 giờ, hài lòng 30%). Mục tiêu SMART rút ngắn thời gian xuống ≤ 30 phút và nâng hài lòng lên ≥ 90% rất rõ ràng, thuyết phục."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "15 / 15",
        "nhanXet": "Khả năng nhân rộng tối đa (15/15 điểm). Mô hình 'Gói đồ dùng chăm sóc cá nhân chuẩn hóa' dễ dàng nhân rộng sang Trung tâm Cấp cứu 115, Khoa Gây mê Hồi tỉnh, Khoa Phụ sản và Khoa Nhi."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "18 / 20",
        "nhanXet": "Đổi mới sáng tạo thiết thực (18/20 điểm). Chuyển đổi từ cơ chế bị động 'người nhà tự lo' sang cơ chế chủ động 'bệnh viện sẵn sàng chăm sóc toàn diện', thể hiện sâu sắc triết lý lấy người bệnh làm trung tâm."
      }
    ],
    "ketLuanQLCL": "1. Hội đồng Giám khảo và Tổ QLCL phê duyệt Đề án Đạt Loại A (Xuất sắc) với 96/100 điểm, chính thức chuyển sang Giai đoạn Vận hành Đo lường Nghiệm thu diện rộng (Gate 2) từ ngày 11/09/2026.\r\n2. Nhóm tác giả hoàn thiện danh mục gói đồ dùng chuẩn hóa, phối hợp Phòng Điều dưỡng và Kho Dược / Vật tư y tế hoàn thành đóng gói cơ số 20 bộ Kit thử nghiệm đầu tiên trước ngày 13/09/2026.\r\n3. Áp dụng 100% bảng kiểm (checklist) bàn giao đồ dùng khi tiếp nhận người bệnh thở máy; bấm giờ thực tế thời gian cấp phát trên tối thiểu 15–20 ca bệnh tiếp theo.\r\n4. Tiến hành khảo sát đo lường mức độ hài lòng của người nhà người bệnh thở máy (mẫu tối thiểu 15–20 người nhà) để đối chiếu trực tiếp với mốc Baseline 30% ban đầu.\r\n5. Hoàn thiện Bộ số liệu chứng minh hiệu quả và hoàn thành Đề cương A3 chuẩn bị báo cáo nghiệm thu Vòng Chung kết vào ngày 23/09/2026.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-HSCC-01 02. Bản Đăng ký Sau Hiệu chỉnh Khoa HSCC ĐD. Nguyễn Thị Thanh Mai.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 11839
      },
      {
        "fileName": "KZ16-HSCC-01 03. Biên bản Thẩm định Khoa HSCC ĐD. Nguyễn Thị Thanh Mai.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 5320
      },
      {
        "fileName": "KZ16-HSCC-01 04. Đề cương A3 Triển khai Thực nghiệm Khoa HSCC ĐD. Nguyễn Thị Thanh Mai.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 9491
      }
    ],
    "quickSummary": {
      "idea": "Chuẩn hóa và triển khai gói đồ dùng chăm sóc cá nhân cho người bệnh thở máy tại Khoa Hồi sức cấp cứu",
      "painPoints": [
        "Tỷ lệ người nhà người bệnh thở máy phải tự ra ngoài tìm mua đồ dùng cá nhân: Đạt 100.0% (khảo sát thực tế trên 10 bệnh nhân thở máy từ 29/08 đến 10/09/2026).",
        "Tỷ lệ trường hợp người nhà mua thiếu ít nhất một loại đồ dùng cần thiết: Chiếm 80.0%.",
        "Tỷ lệ trường hợp người nhà mua không đúng chủng loại hoặc không phù hợp yêu cầu hồi sức: Chiếm 70.0%."
      ],
      "solutions": [
        "Giải pháp 1 (Xây dựng danh mục gói đồ dùng chăm sóc cá nhân chuẩn): Khoa Hồi sức cấp cứu phối hợp Hội đồng Điều dưỡng và Khoa Kiểm soát nhiễm khuẩn xây dựng danh mục thống nhất gói đồ dùng chăm sóc cá nhân chuyên biệt cho người bệnh thở máy (bao gồm: khăn lau chuyên dụng, tấm lót thấm hút, bàn chải và que vệ sinh khoang miệng, dung dịch sát khuẩn miệng chuyên dụng, cốc chia vạch, bỉm người lớn...), bảo đảm tính vô khuẩn và tiện ích chăm sóc.",
        "Giải pháp 2 (Đóng gói sẵn theo bộ Care Kit định danh từng người bệnh): Tổ chức đóng gói sẵn các túi đồ dùng cá nhân đồng bộ, dán tem nhãn định danh người bệnh (mã BN, họ tên, ngày cấp), có đính kèm danh mục và bảng kiểm (checklist) niêm phong trước khi đưa vào tủ đồ dùng cấp cứu của khoa.",
        "Giải pháp 3 (Chuẩn hóa quy trình cấp phát và kiểm soát bằng Checklist): Ban hành quy trình chuẩn: Khi người bệnh thở máy nhập khoa, điều dưỡng tiếp nhận xác định đối tượng, xuất gói đồ dùng ngay tại chỗ, đối chiếu checklist 2 chiều, bàn giao cho kíp chăm sóc trong vòng 30 phút mà không cần người nhà phải ra ngoài mua sắm."
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ người bệnh thở máy nhập khoa đượ...",
          "before": "0.0% (100% người nhà tự mua lẻ bên ngoài)",
          "after": "Đạt ≥ 95.0% người bệnh thở máy",
          "note": "Sổ theo dõi tiếp nhận và bàn giao gói đồ dùng cá nhân"
        },
        {
          "label": "Thời gian từ khi nhập khoa đến khi có ...",
          "before": "3 – 4 giờ",
          "after": "Rút ngắn xuống ≤ 30 phút",
          "note": "Bấm giờ thực tế ghi nhận trên phiếu chăm sóc điều dưỡng"
        },
        {
          "label": "Tỷ lệ người nhà phải tự đi mua bổ sung...",
          "before": "100.0% (trong đó 80% thiếu, 70% sai chủng loại)",
          "after": "Giảm xuống ≤ 5.0%",
          "note": "Nhật ký theo dõi vật dụng bổ sung tại buồng bệnh"
        },
        {
          "label": "Tỷ lệ gói đồ dùng được kiểm tra bằng b...",
          "before": "0.0% (chưa áp dụng checklist)",
          "after": "Đạt 100.0%",
          "note": "Bảng kiểm chuẩn bị và bàn giao gói đồ dùng cá nhân"
        }
      ]
    },
    "a3Report": {
      "title": "Chuẩn hóa và triển khai gói đồ dùng chăm sóc cá nhân cho người bệnh thở máy tại Khoa Hồi sức cấp cứu",
      "department": "KHOA HỒI SỨC CẤP CỨU",
      "leader": "ĐD. Nguyễn Thị Thanh Mai",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Người bệnh thở máy tại Khoa Hồi sức cấp cứu thường có tình trạng bệnh nặng, suy hô hấp nguy kịch, hạn chế hoặc mất hoàn toàn khả năng tự thực hiện các hoạt động vệ sinh cá nhân. Trong quá trình điều trị tích cực, người bệnh cần sử dụng nhiều đồ dùng cá nhân chuyên biệt phù hợp với quy trình kiểm soát nhiễm khuẩn và chăm sóc người bệnh thở máy. Tuy nhiên hiện nay, đồ dùng chăm sóc cá nhân chưa được chuẩn hóa thành một gói (Kit) thống nhất tại khoa. Khi người bệnh nhập khoa cấp cứu, người nhà thường phải tự tìm mua các vật dụng bên ngoài theo hướng dẫn truyền miệng của nhân viên y tế. Việc này dẫn đến hàng loạt bất cập nghiêm trọng: 100% người nhà phải tự đi mua; 80% trường hợp mua thiếu ít nhất một loại đồ dùng; 70% trường hợp mua sai chủng loại; thời gian để người bệnh có đủ đồ dùng kéo dài từ 3 đến 4 giờ; 100% trường hợp phải đi mua bổ sung nhiều lần. Tình trạng này gây chậm trễ thời gian can thiệp chăm sóc ban đầu, làm tăng nguy cơ nhiễm khuẩn bệnh viện do mang đồ dùng không chuẩn từ bên ngoài vào, đồng thời khiến người nhà vô cùng lo lắng, hoang mang, mức độ hài lòng chỉ đạt 30.0%.",
      "currentCondition": "Tỷ lệ người nhà người bệnh thở máy phải tự ra ngoài tìm mua đồ dùng cá nhân: Đạt 100.0% (khảo sát thực tế trên 10 bệnh nhân thở máy từ 29/08 đến 10/09/2026).\n• Tỷ lệ trường hợp người nhà mua thiếu ít nhất một loại đồ dùng cần thiết: Chiếm 80.0%.\n• Tỷ lệ trường hợp người nhà mua không đúng chủng loại hoặc không phù hợp yêu cầu hồi sức: Chiếm 70.0%.\n• Thời gian trung bình từ khi người bệnh nhập khoa đến khi có đủ đồ dùng chăm sóc cá nhân: Kéo dài từ 3 đến 4 giờ.\n• Tỷ lệ trường hợp phải đi mua bổ sung đồ dùng từ 2 lần trở lên: Chiếm 100.0%.\n• Mức độ hài lòng của người nhà người bệnh đối với việc chuẩn bị đồ dùng chăm sóc: Chỉ đạt 30.0%.",
      "targetCondition": "• Tỷ lệ người bệnh thở máy nhập khoa được cung cấp đầy đủ gói đồ dùng chuẩn: Hiện trạng 0.0% (100% người nhà tự mua lẻ bên ngoài) ➔ Cam kết đạt Đạt ≥ 95.0% người bệnh thở máy\n• Thời gian từ khi nhập khoa đến khi có đủ đồ dùng chăm sóc cá nhân: Hiện trạng 3 – 4 giờ ➔ Cam kết đạt Rút ngắn xuống ≤ 30 phút\n• Tỷ lệ người nhà phải tự đi mua bổ sung đồ dùng cá nhân: Hiện trạng 100.0% (trong đó 80% thiếu, 70% sai chủng loại) ➔ Cam kết đạt Giảm xuống ≤ 5.0%\n• Tỷ lệ gói đồ dùng được kiểm tra bằng bảng kiểm (checklist) trước khi dùng: Hiện trạng 0.0% (chưa áp dụng checklist) ➔ Cam kết đạt Đạt 100.0%\n• Mức độ hài lòng của người nhà đối với việc cung cấp đồ dùng chăm sóc: Hiện trạng 30.0% hài lòng ➔ Cam kết đạt Đạt ≥ 90.0% hài lòng và rất hài lòng",
      "rootCauseAnalysis": "Why 1 (Hiện trạng thao tác): Tại sao người nhà người bệnh thở máy tại Khoa HSCC thường xuyên mua thiếu và mua sai đồ dùng chăm sóc cá nhân? ➔ Vì khi người bệnh nhập viện cấp cứu, người nhà phải tự ra ngoài các cửa hàng quanh bệnh viện tìm mua lẻ tẻ theo hướng dẫn bằng lời nói của điều dưỡng.\nWhy 2 (Tâm lý và kiến thức): Tại sao người nhà người bệnh lại mua sai chủng loại (70%) và mua thiếu (80%) đồ dùng? ➔ Vì người nhà trong trạng thái tâm lý hoảng loạn, lo lắng tột độ khi người thân thở máy, không có kiến thức về quy cách đồ dùng y tế chuyên dụng dùng trong buồng hồi sức tích cực.\nWhy 3 (Thời gian trễ): Tại sao thời gian để người bệnh có đủ đồ dùng chăm sóc cá nhân lại kéo dài từ 3 đến 4 giờ? ➔ Vì người nhà phải đi tìm nhiều cửa hàng bên ngoài, mua thiếu phải quay lại mua bổ sung nhiều lần, làm chậm trễ các can thiệp vệ sinh, chăm sóc ban đầu của điều dưỡng.\nWhy 4 (Công cụ quản trị): Tại sao Khoa HSCC chưa có sẵn gói đồ dùng chăm sóc cá nhân chuẩn hóa để cấp phát ngay cho người bệnh? ➔ Vì trước đây chưa có danh mục chuẩn hóa đóng gói theo bộ (Kit), chưa có bảng kiểm (checklist) kiểm soát và chưa thiết lập luồng cung ứng vật dụng cá nhân tại chỗ.\nWhy 5 (Cốt lõi hệ thống): NGUYÊN NHÂN GỐC RỄ: Thiếu quy trình chuẩn hóa đóng gói (Care Kit) đồ dùng chăm sóc cá nhân chuyên biệt cho người bệnh thở máy và thiếu bảng kiểm bàn giao minh bạch ngay khi tiếp nhận người bệnh vào Khoa Hồi sức cấp cứu. ➔ Cần xây dựng danh mục chuẩn, đóng gói sẵn gói đồ dùng cá nhân theo từng người bệnh, kiểm soát 100% bằng checklist và bàn giao ngay trong 30 phút nhằm nâng cao chất lượng chăm sóc và tối ưu trải nghiệm người nhà.",
      "countermeasures": "• Giải pháp 1 (Xây dựng danh mục gói đồ dùng chăm sóc cá nhân chuẩn): Khoa Hồi sức cấp cứu phối hợp Hội đồng Điều dưỡng và Khoa Kiểm soát nhiễm khuẩn xây dựng danh mục thống nhất gói đồ dùng chăm sóc cá nhân chuyên biệt cho người bệnh thở máy (bao gồm: khăn lau chuyên dụng, tấm lót thấm hút, bàn chải và que vệ sinh khoang miệng, dung dịch sát khuẩn miệng chuyên dụng, cốc chia vạch, bỉm người lớn...), bảo đảm tính vô khuẩn và tiện ích chăm sóc.\n• Giải pháp 2 (Đóng gói sẵn theo bộ Care Kit định danh từng người bệnh): Tổ chức đóng gói sẵn các túi đồ dùng cá nhân đồng bộ, dán tem nhãn định danh người bệnh (mã BN, họ tên, ngày cấp), có đính kèm danh mục và bảng kiểm (checklist) niêm phong trước khi đưa vào tủ đồ dùng cấp cứu của khoa.\n• Giải pháp 3 (Chuẩn hóa quy trình cấp phát và kiểm soát bằng Checklist): Ban hành quy trình chuẩn: Khi người bệnh thở máy nhập khoa, điều dưỡng tiếp nhận xác định đối tượng, xuất gói đồ dùng ngay tại chỗ, đối chiếu checklist 2 chiều, bàn giao cho kíp chăm sóc trong vòng 30 phút mà không cần người nhà phải ra ngoài mua sắm.\n• Giải pháp 4 (Truyền thông và hướng dẫn minh bạch cho người nhà người bệnh): Thiết kế bảng hướng dẫn trực quan thông báo cho người nhà về quyền lợi, danh mục gói đồ dùng được cung cấp, mục đích sử dụng và các lưu ý đặc biệt, giúp người nhà an tâm, giải tỏa tâm lý lo lắng khi người bệnh điều trị tích cực.\n• Giải pháp 5 (Giám sát tuân thủ và đánh giá sự hài lòng liên tục): Điều dưỡng trưởng bộ phận HSTC thực hiện giám sát hàng ngày qua bảng kiểm, đo lường thời gian đáp ứng và tổ chức phát phiếu khảo sát sự hài lòng của người nhà người bệnh trước khi chuyển khoa hoặc ra viện.",
      "planImplementation": "Khu vực: Thực hiện thử nghiệm tại 100% buồng bệnh điều trị hồi sức tích cực (HSTC) và người bệnh thở máy tại Khoa Hồi sức cấp cứu Bệnh viện Đa khoa Hùng Vương.\nThời gian: Từ ngày 11 tháng 09 năm 2026 đến ngày 23 tháng 09 năm 2026.\nSản phẩm đầu ra: 01 Danh mục gói đồ dùng chăm sóc cá nhân chuẩn hóa cho người bệnh thở máy; 01 Bảng kiểm (Checklist) kiểm soát đóng gói và bàn giao; 01 Quy trình thao tác chuẩn (SOP) cấp phát gói đồ dùng tại Khoa HSCC; Báo cáo số liệu đo lường T0 và T1; Báo cáo Nghiệm thu A3 hoàn chỉnh.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại KHOA HỒI SỨC CẤP CỨU; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "Tỷ lệ người nhà người bệnh thở máy phải tự ra ngoài tìm mua đồ dùng cá nhân: Đạt 100.0% (khảo sát thực tế trên 10 bệnh nhân thở máy từ 29/08 đến 10/09/2026).\n• Tỷ lệ trường hợp người nhà mua thiếu ít nhất một loại đồ dùng cần thiết: Chiếm 80.0%.\n• Tỷ lệ trường hợp người nhà mua không đúng chủng loại hoặc không phù hợp yêu cầu hồi sức: Chiếm 70.0%.\n• Thời gian trung bình từ khi người bệnh nhập khoa đến khi có đủ đồ dùng chăm sóc cá nhân: Kéo dài từ 3 đến 4 giờ.\n• Tỷ lệ trường hợp phải đi mua bổ sung đồ dùng từ 2 lần trở lên: Chiếm 100.0%.\n• Mức độ hài lòng của người nhà người bệnh đối với việc chuẩn bị đồ dùng chăm sóc: Chỉ đạt 30.0%.",
      "smartGoal": "• Tỷ lệ người bệnh thở máy nhập khoa được cung cấp đầy đủ gói đồ dùng chuẩn: Hiện trạng 0.0% (100% người nhà tự mua lẻ bên ngoài) ➔ Cam kết đạt Đạt ≥ 95.0% người bệnh thở máy\n• Thời gian từ khi nhập khoa đến khi có đủ đồ dùng chăm sóc cá nhân: Hiện trạng 3 – 4 giờ ➔ Cam kết đạt Rút ngắn xuống ≤ 30 phút\n• Tỷ lệ người nhà phải tự đi mua bổ sung đồ dùng cá nhân: Hiện trạng 100.0% (trong đó 80% thiếu, 70% sai chủng loại) ➔ Cam kết đạt Giảm xuống ≤ 5.0%\n• Tỷ lệ gói đồ dùng được kiểm tra bằng bảng kiểm (checklist) trước khi dùng: Hiện trạng 0.0% (chưa áp dụng checklist) ➔ Cam kết đạt Đạt 100.0%\n• Mức độ hài lòng của người nhà đối với việc cung cấp đồ dùng chăm sóc: Hiện trạng 30.0% hài lòng ➔ Cam kết đạt Đạt ≥ 90.0% hài lòng và rất hài lòng",
      "rootCause": "Why 1 (Hiện trạng thao tác): Tại sao người nhà người bệnh thở máy tại Khoa HSCC thường xuyên mua thiếu và mua sai đồ dùng chăm sóc cá nhân? ➔ Vì khi người bệnh nhập viện cấp cứu, người nhà phải tự ra ngoài các cửa hàng quanh bệnh viện tìm mua lẻ tẻ theo hướng dẫn bằng lời nói của điều dưỡng.\nWhy 2 (Tâm lý và kiến thức): Tại sao người nhà người bệnh lại mua sai chủng loại (70%) và mua thiếu (80%) đồ dùng? ➔ Vì người nhà trong trạng thái tâm lý hoảng loạn, lo lắng tột độ khi người thân thở máy, không có kiến thức về quy cách đồ dùng y tế chuyên dụng dùng trong buồng hồi sức tích cực.\nWhy 3 (Thời gian trễ): Tại sao thời gian để người bệnh có đủ đồ dùng chăm sóc cá nhân lại kéo dài từ 3 đến 4 giờ? ➔ Vì người nhà phải đi tìm nhiều cửa hàng bên ngoài, mua thiếu phải quay lại mua bổ sung nhiều lần, làm chậm trễ các can thiệp vệ sinh, chăm sóc ban đầu của điều dưỡng.\nWhy 4 (Công cụ quản trị): Tại sao Khoa HSCC chưa có sẵn gói đồ dùng chăm sóc cá nhân chuẩn hóa để cấp phát ngay cho người bệnh? ➔ Vì trước đây chưa có danh mục chuẩn hóa đóng gói theo bộ (Kit), chưa có bảng kiểm (checklist) kiểm soát và chưa thiết lập luồng cung ứng vật dụng cá nhân tại chỗ.\nWhy 5 (Cốt lõi hệ thống): NGUYÊN NHÂN GỐC RỄ: Thiếu quy trình chuẩn hóa đóng gói (Care Kit) đồ dùng chăm sóc cá nhân chuyên biệt cho người bệnh thở máy và thiếu bảng kiểm bàn giao minh bạch ngay khi tiếp nhận người bệnh vào Khoa Hồi sức cấp cứu. ➔ Cần xây dựng danh mục chuẩn, đóng gói sẵn gói đồ dùng cá nhân theo từng người bệnh, kiểm soát 100% bằng checklist và bàn giao ngay trong 30 phút nhằm nâng cao chất lượng chăm sóc và tối ưu trải nghiệm người nhà.",
      "resultsBeforeAfter": [
        {
          "metric": "Tỷ lệ người bệnh thở máy nhập khoa được cung cấp đầy đủ gói đồ dùng chuẩn",
          "before": "0.0% (100% người nhà tự mua lẻ bên ngoài)",
          "after": "Đạt ≥ 95.0% người bệnh thở máy"
        },
        {
          "metric": "Thời gian từ khi nhập khoa đến khi có đủ đồ dùng chăm sóc cá nhân",
          "before": "3 – 4 giờ",
          "after": "Rút ngắn xuống ≤ 30 phút"
        },
        {
          "metric": "Tỷ lệ người nhà phải tự đi mua bổ sung đồ dùng cá nhân",
          "before": "100.0% (trong đó 80% thiếu, 70% sai chủng loại)",
          "after": "Giảm xuống ≤ 5.0%"
        },
        {
          "metric": "Tỷ lệ gói đồ dùng được kiểm tra bằng bảng kiểm (checklist) trước khi dùng",
          "before": "0.0% (chưa áp dụng checklist)",
          "after": "Đạt 100.0%"
        },
        {
          "metric": "Mức độ hài lòng của người nhà đối với việc cung cấp đồ dùng chăm sóc",
          "before": "30.0% hài lòng",
          "after": "Đạt ≥ 90.0% hài lòng và rất hài lòng"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 96/100đ (ĐẠT LOẠI A (XUẤT SẮC — PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM) |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Thực hiện thử nghiệm tại 100% buồng bệnh điều trị hồi sức tích cực (HSTC) và người bệnh thở máy tại Khoa Hồi sức cấp cứu Bệnh viện Đa khoa Hùng Vương.",
        "time": "Từ ngày 11 tháng 09 năm 2026 đến ngày 23 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "ĐD. Nguyễn Thị Thanh Mai",
    "nhomTacGia": "ĐD. Nguyễn Thị Thanh Mai, ĐD. Nguyễn Thanh Loan, ĐD. Phạm Minh Phụng, ĐD. Dương Duy Phương",
    "diemBanDau": "96"
  },
  {
    "maDeTai": "KZ16-PKD-01",
    "tenDeTai": "Chuẩn hóa quy trình chăm sóc chủ động người bệnh buồng điều trị theo yêu cầu trong 24 giờ đầu tại Bệnh viện Đa khoa Hùng Vương",
    "tenSanPham": "Bảng Kiểm Chăm Sóc Chủ Động Người Bệnh Phòng VIP 24 Giờ Đầu",
    "khoaPhong": "PHÒNG KINH DOANH",
    "khoaPhoiHop": "",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 4: Nâng cao trải nghiệm và sự hài lòng của người bệnh (kết hợp Chăm sóc khách hàng chủ động).",
    "tacGia": "Chu Lệ Quyên",
    "authorsDetailed": [
      {
        "name": "Chu Lệ Quyên",
        "title": "Tổ trưởng Đơn vị quản lý PYC",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)",
        "stt": "1",
        "hoTen": "Chu Lệ Quyên",
        "chucVu": "Tổ trưởng Đơn vị quản lý PYC",
        "vaiTro": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "Đặng Trung Kiên",
        "title": "Trưởng phòng Kinh doanh",
        "role": "Cố vấn định hướng và chỉ đạo thực hiện",
        "stt": "2",
        "hoTen": "Đặng Trung Kiên",
        "chucVu": "Trưởng phòng Kinh doanh",
        "vaiTro": "Cố vấn định hướng và chỉ đạo thực hiện"
      },
      {
        "name": "Tập thể Đơn vị Quản lý PYC",
        "title": "Phòng Kinh doanh",
        "role": "Thành viên khảo sát và trực tiếp chăm sóc buồng bệnh",
        "stt": "3",
        "hoTen": "Tập thể Đơn vị Quản lý PYC",
        "chucVu": "Phòng Kinh doanh",
        "vaiTro": "Thành viên khảo sát và trực tiếp chăm sóc buồng bệnh"
      }
    ],
    "thucTrang": "Người bệnh tại Phòng Điều trị theo yêu cầu có thời gian lưu trú trung bình khoảng 3,9 đến 4,0 ngày. Hoạt động tiếp cận chủ động trong 24 giờ đầu chưa có cơ chế kiểm soát thống nhất nên việc thực hiện còn phụ thuộc vào sự tự giác cá nhân, dễ dẫn đến quên sót khi lượng người bệnh đông. Các vấn đề phát sinh như chất lượng đệm, vệ sinh buồng phòng, đồ vải, tiện nghi buồng bệnh thường chỉ được người bệnh phản ánh khi chuẩn bị ra viện, làm mất cơ hội hỗ trợ kịp thời ngay trong thời gian lưu trú. Khoảng trống cần cải tiến cốt lõi là thiếu một bảng kiểm chuẩn hóa, thiếu hệ thống cảnh báo tự động trên phần mềm và thiếu sổ theo dõi giải quyết phản hồi tại chỗ.",
    "soLieuBanDau": [
      "Dữ liệu trích xuất từ hệ thống HIS trong giai đoạn 25/08/2026 đến 08/09/2026: Ghi nhận 23 phòng VIP1 đủ điều kiện thực hiện tiếp cận trong 24 giờ đầu.",
      "Tỷ lệ người bệnh được tiếp cận trong 24 giờ đầu: Đạt 11/23 phòng, tương ứng 47,8%.",
      "Tỷ lệ buồng bệnh chưa được tiếp cận kịp thời trong 24 giờ đầu: Chiếm 12/23 phòng, tương ứng 52,2%.",
      "Hiện trạng xử lý phản hồi: Chưa có sổ ghi chép đồng bộ, thông tin chủ yếu tiếp nhận bị động khi người bệnh làm thủ tục xuất viện."
    ],
    "fiveWhys": [
      {
        "level": "Why 1",
        "question": "Tại sao có tới 52,2% buồng phòng VIP1 chưa được tiếp cận chăm sóc trong 24 giờ đầu?",
        "answer": "Vì hoạt động tiếp cận hiện tại chưa được lập lịch bắt buộc, còn phụ thuộc vào sự chủ động mang tính cá nhân của nhân viên phụ trách."
      },
      {
        "level": "Why 2",
        "question": "Tại sao nhân viên quản lý phòng yêu cầu lại dễ quên sót các phòng đến mốc 24 giờ nhập viện?",
        "answer": "Vì trên phần mềm quản lý buồng phòng chưa có tính năng tự động đếm giờ và cảnh báo trực quan các phòng đã chạm mốc 24 giờ."
      },
      {
        "level": "Why 3",
        "question": "Tại sao các phản ánh về đệm, đồ vải, vệ sinh và tiện nghi không được xử lý ngay trong ngày đầu?",
        "answer": "Vì chưa có bảng kiểm chuẩn hóa các nội dung cần hỏi và chưa có quy trình phân luồng chuyển giao thông tin xử lý tức thời tới các bộ phận liên quan."
      },
      {
        "level": "Why 4",
        "question": "Tại sao lãnh đạo đơn vị chưa kiểm soát được tỷ lệ tiếp cận hàng ngày của nhân viên?",
        "answer": "Vì trước đây chưa thiết lập sổ theo dõi tiếp cận định kỳ và chưa đối chiếu số liệu buồng phòng thực tế hàng ngày với hệ thống HIS."
      },
      {
        "level": "Why 5",
        "question": "NGUYÊN NHÂN GỐC RỄ: Thiếu quy trình chuẩn hóa chăm sóc chủ động 24 giờ đầu, thiếu cơ chế cảnh báo tự động trên phần mềm HIS và thiếu sổ theo dõi xử lý phản hồi tại chỗ.",
        "answer": "Cần chuẩn hóa quy trình chăm sóc 24 giờ, tích hợp tính năng cảnh báo tự động trên phần mềm HIS và thiết lập sổ theo dõi xử lý phản ánh nhằm nâng tỷ lệ tiếp cận lên ≥ 95,0%."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Tỷ lệ người bệnh phòng VIP1 được tiếp cận trong 24 giờ đầu",
        "hienTrang": "47,8% (11/23 phòng)",
        "mucTieu": "Đạt ≥ 95,0% số phòng đủ điều kiện",
        "phuongPhap": "Trích xuất đối soát dữ liệu HIS và Bảng kiểm 8 điểm chạm Mẫu 01"
      },
      {
        "chiTieu": "Tỷ lệ phản ánh của người bệnh được tiếp nhận và xử lý tại chỗ trong vòng 02 giờ",
        "hienTrang": "Chưa theo dõi đồng bộ",
        "mucTieu": "Đạt 100% phản ánh được giải quyết trong ≤ 120 phút",
        "phuongPhap": "Sổ theo dõi phản hồi Mẫu 02 có chữ ký xác nhận của người bệnh"
      },
      {
        "chiTieu": "Tỷ lệ buồng bệnh VIP áp dụng Bảng kiểm 8 điểm chạm chuẩn hóa",
        "hienTrang": "0,0% (chưa có)",
        "mucTieu": "Đạt 100% buồng bệnh áp dụng",
        "phuongPhap": "Lưu trữ phiếu kiểm tra theo hồ sơ buồng phòng thực tế"
      },
      {
        "chiTieu": "Mức độ hài lòng của người bệnh đối với dịch vụ buồng phòng yêu cầu",
        "hienTrang": "Khảo sát đầu vào chưa đồng bộ",
        "mucTieu": "Đạt ≥ 90,0% hài lòng và rất hài lòng",
        "phuongPhap": "Phiếu khảo sát trải nghiệm người bệnh trước khi xuất viện"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Ứng dụng cảnh báo tự động trên phần mềm HIS): Phối hợp bộ phận công nghệ thông tin lập trình tính năng đếm thời gian 24 giờ và hiển thị trạng thái nhắc nhở trên phần mềm quản lý buồng bệnh, giúp nhân viên không bị quên việc.",
      "Giải pháp 2 (Chuẩn hóa công cụ Bảng kiểm 8 điểm chạm): Áp dụng Bảng kiểm Mẫu 01 bao phủ toàn diện 8 nội dung thiết yếu của buồng VIP (đón tiếp, vệ sinh, đệm giường, điện máy, dinh dưỡng, thái độ phục vụ, chuông gọi, nhu cầu riêng biệt).",
      "Giải pháp 3 (Vận hành quy trình tiếp nhận và giải quyết phản ánh tại chỗ): Thiết lập sổ theo dõi và phối hợp xử lý dứt điểm mọi bất tiện buồng bệnh trong vòng không quá 120 phút, có xác nhận của người bệnh.",
      "Giải pháp 4 (Giám sát định kỳ và hỗ trợ kịp thời): Tổ trưởng đối soát hàng ngày giữa danh sách buồng phòng trên phần mềm với số lượng bảng kiểm đã thực hiện để kịp thời chấn chỉnh."
    ],
    "phamVi": "Khu vực buồng phòng VIP1 thuộc Đơn vị Quản lý Phòng Yêu cầu Bệnh viện Đa khoa Hùng Vương.",
    "thoiGian": "Từ ngày 13 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
    "sanPhamDauRa": "01 Quy trình thao tác chuẩn chăm sóc chủ động 24 giờ đầu; 01 Bảng kiểm chăm sóc chủ động; Cơ chế cảnh báo tự động trên phần mềm HIS; Sổ theo dõi xử lý phản hồi; Báo cáo đối chứng số liệu trước và sau can thiệp; Báo cáo Nghiệm thu A3 hoàn chỉnh.",
    "soHieuVanBan": "Số: 25/TB-QLCL-PKD",
    "tongDiemThamDinh": 80,
    "xepLoaiThamDinh": "ĐẠT LOẠI B (PHÊ DUYỆT THỬ NGHIỆM CÓ ĐIỀU KIỆN) |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "18 / 20",
        "nhanXet": "Vấn đề có tính cấp thiết thực tế. Việc chủ động tiếp cận chăm sóc người bệnh trong 24 giờ đầu là yếu tố quan trọng quyết định sự an tâm và hài lòng của người bệnh tại khu điều trị theo yêu cầu."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "22 / 25",
        "nhanXet": "Tính khả thi cao. Đơn vị đã chủ động rà soát lại nhân lực nội bộ và đề xuất phối hợp cùng bộ phận công nghệ thông tin để ứng dụng phần mềm quản lý bệnh viện (HIS) vào việc nhắc việc tự động."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "15 / 20",
        "nhanXet": "Đề án hướng tới mục tiêu chuẩn hóa quy trình phục vụ hiện có, nâng tỷ lệ người bệnh được tiếp cận từ mức 47,8% lên ≥ 95,0%. Đây là bước củng cố nền tảng vận hành rất thiết thực."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "13 / 15",
        "nhanXet": "Mô hình bảng kiểm điểm chạm và phương thức cảnh báo tự động trên phần mềm có khả năng đóng gói chuẩn hóa để áp dụng cho các khu vực buồng bệnh yêu cầu khác."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "12 / 20",
        "nhanXet": "Ghi nhận giải pháp ngăn ngừa sai sót tự động. Việc ứng dụng công nghệ để hệ thống tự nhắc nhở giúp giảm thiểu sự quên sót do yếu tố con người, bảo đảm tính kịp thời trong chăm sóc."
      }
    ],
    "ketLuanQLCL": "Phê duyệt Đề cương A3 cho nhóm tác giả PHÒNG KINH DOANH để chính thức triển khai thử nghiệm thực địa. Tổ QLCL phối hợp kiểm chuẩn và nghiệm thu kết quả.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-PKD-01 02. Bản Đăng ký Sau Hiệu chỉnh Phòng Kinh Doanh Chu Lệ Quyên.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 9651
      },
      {
        "fileName": "KZ16-PKD-01 03. Biên bản Thẩm định Phòng Kinh Doanh Chu Lệ Quyên.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 9833
      },
      {
        "fileName": "KZ16-PKD-01 04. Đề cương A3 Triển khai Thực nghiệm Phòng Kinh Doanh Chu Lệ Quyên.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 7454
      },
      {
        "fileName": "KZ16-PKD-01 Phieu Kiem tra 8 Diem cham Buong VIP va Nhat ky Xu ly Phan hoi.md",
        "label": "KZ16-PKD-01 Phieu Kiem tra 8 Diem cham Buong VIP va Nhat ky Xu ly Phan hoi.md",
        "type": "markdown",
        "size": 13180
      }
    ],
    "quickSummary": {
      "idea": "Chuẩn hóa quy trình chăm sóc chủ động người bệnh buồng điều trị theo yêu cầu trong 24 giờ đầu tại Bệnh viện Đa khoa Hùng Vương",
      "painPoints": [
        "Dữ liệu trích xuất từ hệ thống HIS trong giai đoạn 25/08/2026 đến 08/09/2026: Ghi nhận 23 phòng VIP1 đủ điều kiện thực hiện tiếp cận trong 24 giờ đầu.",
        "Tỷ lệ người bệnh được tiếp cận trong 24 giờ đầu: Đạt 11/23 phòng, tương ứng 47,8%.",
        "Tỷ lệ buồng bệnh chưa được tiếp cận kịp thời trong 24 giờ đầu: Chiếm 12/23 phòng, tương ứng 52,2%."
      ],
      "solutions": [
        "Giải pháp 1 (Ứng dụng cảnh báo tự động trên phần mềm HIS): Phối hợp bộ phận công nghệ thông tin lập trình tính năng đếm thời gian 24 giờ và hiển thị trạng thái nhắc nhở trên phần mềm quản lý buồng bệnh, giúp nhân viên không bị quên việc.",
        "Giải pháp 2 (Chuẩn hóa công cụ Bảng kiểm 8 điểm chạm): Áp dụng Bảng kiểm Mẫu 01 bao phủ toàn diện 8 nội dung thiết yếu của buồng VIP (đón tiếp, vệ sinh, đệm giường, điện máy, dinh dưỡng, thái độ phục vụ, chuông gọi, nhu cầu riêng biệt).",
        "Giải pháp 3 (Vận hành quy trình tiếp nhận và giải quyết phản ánh tại chỗ): Thiết lập sổ theo dõi và phối hợp xử lý dứt điểm mọi bất tiện buồng bệnh trong vòng không quá 120 phút, có xác nhận của người bệnh."
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ người bệnh phòng VIP1 được tiếp ...",
          "before": "47,8% (11/23 phòng)",
          "after": "Đạt ≥ 95,0% số phòng đủ điều kiện",
          "note": "Trích xuất đối soát dữ liệu HIS và Bảng kiểm 8 điểm chạm Mẫu 01"
        },
        {
          "label": "Tỷ lệ phản ánh của người bệnh được tiế...",
          "before": "Chưa theo dõi đồng bộ",
          "after": "Đạt 100% phản ánh được giải quyết trong ≤ 120 phút",
          "note": "Sổ theo dõi phản hồi Mẫu 02 có chữ ký xác nhận của người bệnh"
        },
        {
          "label": "Tỷ lệ buồng bệnh VIP áp dụng Bảng kiểm...",
          "before": "0,0% (chưa có)",
          "after": "Đạt 100% buồng bệnh áp dụng",
          "note": "Lưu trữ phiếu kiểm tra theo hồ sơ buồng phòng thực tế"
        },
        {
          "label": "Mức độ hài lòng của người bệnh đối với...",
          "before": "Khảo sát đầu vào chưa đồng bộ",
          "after": "Đạt ≥ 90,0% hài lòng và rất hài lòng",
          "note": "Phiếu khảo sát trải nghiệm người bệnh trước khi xuất viện"
        }
      ]
    },
    "a3Report": {
      "title": "Chuẩn hóa quy trình chăm sóc chủ động người bệnh buồng điều trị theo yêu cầu trong 24 giờ đầu tại Bệnh viện Đa khoa Hùng Vương",
      "department": "PHÒNG KINH DOANH",
      "leader": "Chu Lệ Quyên",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Người bệnh tại Phòng Điều trị theo yêu cầu có thời gian lưu trú trung bình khoảng 3,9 đến 4,0 ngày. Hoạt động tiếp cận chủ động trong 24 giờ đầu chưa có cơ chế kiểm soát thống nhất nên việc thực hiện còn phụ thuộc vào sự tự giác cá nhân, dễ dẫn đến quên sót khi lượng người bệnh đông. Các vấn đề phát sinh như chất lượng đệm, vệ sinh buồng phòng, đồ vải, tiện nghi buồng bệnh thường chỉ được người bệnh phản ánh khi chuẩn bị ra viện, làm mất cơ hội hỗ trợ kịp thời ngay trong thời gian lưu trú. Khoảng trống cần cải tiến cốt lõi là thiếu một bảng kiểm chuẩn hóa, thiếu hệ thống cảnh báo tự động trên phần mềm và thiếu sổ theo dõi giải quyết phản hồi tại chỗ.",
      "currentCondition": "Dữ liệu trích xuất từ hệ thống HIS trong giai đoạn 25/08/2026 đến 08/09/2026: Ghi nhận 23 phòng VIP1 đủ điều kiện thực hiện tiếp cận trong 24 giờ đầu.\n• Tỷ lệ người bệnh được tiếp cận trong 24 giờ đầu: Đạt 11/23 phòng, tương ứng 47,8%.\n• Tỷ lệ buồng bệnh chưa được tiếp cận kịp thời trong 24 giờ đầu: Chiếm 12/23 phòng, tương ứng 52,2%.\n• Hiện trạng xử lý phản hồi: Chưa có sổ ghi chép đồng bộ, thông tin chủ yếu tiếp nhận bị động khi người bệnh làm thủ tục xuất viện.",
      "targetCondition": "• Tỷ lệ người bệnh phòng VIP1 được tiếp cận trong 24 giờ đầu: Hiện trạng 47,8% (11/23 phòng) ➔ Cam kết đạt Đạt ≥ 95,0% số phòng đủ điều kiện\n• Tỷ lệ phản ánh của người bệnh được tiếp nhận và xử lý tại chỗ trong vòng 02 giờ: Hiện trạng Chưa theo dõi đồng bộ ➔ Cam kết đạt Đạt 100% phản ánh được giải quyết trong ≤ 120 phút\n• Tỷ lệ buồng bệnh VIP áp dụng Bảng kiểm 8 điểm chạm chuẩn hóa: Hiện trạng 0,0% (chưa có) ➔ Cam kết đạt Đạt 100% buồng bệnh áp dụng\n• Mức độ hài lòng của người bệnh đối với dịch vụ buồng phòng yêu cầu: Hiện trạng Khảo sát đầu vào chưa đồng bộ ➔ Cam kết đạt Đạt ≥ 90,0% hài lòng và rất hài lòng",
      "rootCauseAnalysis": "Why 1: Tại sao có tới 52,2% buồng phòng VIP1 chưa được tiếp cận chăm sóc trong 24 giờ đầu? ➔ Vì hoạt động tiếp cận hiện tại chưa được lập lịch bắt buộc, còn phụ thuộc vào sự chủ động mang tính cá nhân của nhân viên phụ trách.\nWhy 2: Tại sao nhân viên quản lý phòng yêu cầu lại dễ quên sót các phòng đến mốc 24 giờ nhập viện? ➔ Vì trên phần mềm quản lý buồng phòng chưa có tính năng tự động đếm giờ và cảnh báo trực quan các phòng đã chạm mốc 24 giờ.\nWhy 3: Tại sao các phản ánh về đệm, đồ vải, vệ sinh và tiện nghi không được xử lý ngay trong ngày đầu? ➔ Vì chưa có bảng kiểm chuẩn hóa các nội dung cần hỏi và chưa có quy trình phân luồng chuyển giao thông tin xử lý tức thời tới các bộ phận liên quan.\nWhy 4: Tại sao lãnh đạo đơn vị chưa kiểm soát được tỷ lệ tiếp cận hàng ngày của nhân viên? ➔ Vì trước đây chưa thiết lập sổ theo dõi tiếp cận định kỳ và chưa đối chiếu số liệu buồng phòng thực tế hàng ngày với hệ thống HIS.\nWhy 5: NGUYÊN NHÂN GỐC RỄ: Thiếu quy trình chuẩn hóa chăm sóc chủ động 24 giờ đầu, thiếu cơ chế cảnh báo tự động trên phần mềm HIS và thiếu sổ theo dõi xử lý phản hồi tại chỗ. ➔ Cần chuẩn hóa quy trình chăm sóc 24 giờ, tích hợp tính năng cảnh báo tự động trên phần mềm HIS và thiết lập sổ theo dõi xử lý phản ánh nhằm nâng tỷ lệ tiếp cận lên ≥ 95,0%.",
      "countermeasures": "• Giải pháp 1 (Ứng dụng cảnh báo tự động trên phần mềm HIS): Phối hợp bộ phận công nghệ thông tin lập trình tính năng đếm thời gian 24 giờ và hiển thị trạng thái nhắc nhở trên phần mềm quản lý buồng bệnh, giúp nhân viên không bị quên việc.\n• Giải pháp 2 (Chuẩn hóa công cụ Bảng kiểm 8 điểm chạm): Áp dụng Bảng kiểm Mẫu 01 bao phủ toàn diện 8 nội dung thiết yếu của buồng VIP (đón tiếp, vệ sinh, đệm giường, điện máy, dinh dưỡng, thái độ phục vụ, chuông gọi, nhu cầu riêng biệt).\n• Giải pháp 3 (Vận hành quy trình tiếp nhận và giải quyết phản ánh tại chỗ): Thiết lập sổ theo dõi và phối hợp xử lý dứt điểm mọi bất tiện buồng bệnh trong vòng không quá 120 phút, có xác nhận của người bệnh.\n• Giải pháp 4 (Giám sát định kỳ và hỗ trợ kịp thời): Tổ trưởng đối soát hàng ngày giữa danh sách buồng phòng trên phần mềm với số lượng bảng kiểm đã thực hiện để kịp thời chấn chỉnh.",
      "planImplementation": "Khu vực: Khu vực buồng phòng VIP1 thuộc Đơn vị Quản lý Phòng Yêu cầu Bệnh viện Đa khoa Hùng Vương.\nThời gian: Từ ngày 13 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.\nSản phẩm đầu ra: 01 Quy trình thao tác chuẩn chăm sóc chủ động 24 giờ đầu; 01 Bảng kiểm chăm sóc chủ động; Cơ chế cảnh báo tự động trên phần mềm HIS; Sổ theo dõi xử lý phản hồi; Báo cáo đối chứng số liệu trước và sau can thiệp; Báo cáo Nghiệm thu A3 hoàn chỉnh.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại PHÒNG KINH DOANH; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "Dữ liệu trích xuất từ hệ thống HIS trong giai đoạn 25/08/2026 đến 08/09/2026: Ghi nhận 23 phòng VIP1 đủ điều kiện thực hiện tiếp cận trong 24 giờ đầu.\n• Tỷ lệ người bệnh được tiếp cận trong 24 giờ đầu: Đạt 11/23 phòng, tương ứng 47,8%.\n• Tỷ lệ buồng bệnh chưa được tiếp cận kịp thời trong 24 giờ đầu: Chiếm 12/23 phòng, tương ứng 52,2%.\n• Hiện trạng xử lý phản hồi: Chưa có sổ ghi chép đồng bộ, thông tin chủ yếu tiếp nhận bị động khi người bệnh làm thủ tục xuất viện.",
      "smartGoal": "• Tỷ lệ người bệnh phòng VIP1 được tiếp cận trong 24 giờ đầu: Hiện trạng 47,8% (11/23 phòng) ➔ Cam kết đạt Đạt ≥ 95,0% số phòng đủ điều kiện\n• Tỷ lệ phản ánh của người bệnh được tiếp nhận và xử lý tại chỗ trong vòng 02 giờ: Hiện trạng Chưa theo dõi đồng bộ ➔ Cam kết đạt Đạt 100% phản ánh được giải quyết trong ≤ 120 phút\n• Tỷ lệ buồng bệnh VIP áp dụng Bảng kiểm 8 điểm chạm chuẩn hóa: Hiện trạng 0,0% (chưa có) ➔ Cam kết đạt Đạt 100% buồng bệnh áp dụng\n• Mức độ hài lòng của người bệnh đối với dịch vụ buồng phòng yêu cầu: Hiện trạng Khảo sát đầu vào chưa đồng bộ ➔ Cam kết đạt Đạt ≥ 90,0% hài lòng và rất hài lòng",
      "rootCause": "Why 1: Tại sao có tới 52,2% buồng phòng VIP1 chưa được tiếp cận chăm sóc trong 24 giờ đầu? ➔ Vì hoạt động tiếp cận hiện tại chưa được lập lịch bắt buộc, còn phụ thuộc vào sự chủ động mang tính cá nhân của nhân viên phụ trách.\nWhy 2: Tại sao nhân viên quản lý phòng yêu cầu lại dễ quên sót các phòng đến mốc 24 giờ nhập viện? ➔ Vì trên phần mềm quản lý buồng phòng chưa có tính năng tự động đếm giờ và cảnh báo trực quan các phòng đã chạm mốc 24 giờ.\nWhy 3: Tại sao các phản ánh về đệm, đồ vải, vệ sinh và tiện nghi không được xử lý ngay trong ngày đầu? ➔ Vì chưa có bảng kiểm chuẩn hóa các nội dung cần hỏi và chưa có quy trình phân luồng chuyển giao thông tin xử lý tức thời tới các bộ phận liên quan.\nWhy 4: Tại sao lãnh đạo đơn vị chưa kiểm soát được tỷ lệ tiếp cận hàng ngày của nhân viên? ➔ Vì trước đây chưa thiết lập sổ theo dõi tiếp cận định kỳ và chưa đối chiếu số liệu buồng phòng thực tế hàng ngày với hệ thống HIS.\nWhy 5: NGUYÊN NHÂN GỐC RỄ: Thiếu quy trình chuẩn hóa chăm sóc chủ động 24 giờ đầu, thiếu cơ chế cảnh báo tự động trên phần mềm HIS và thiếu sổ theo dõi xử lý phản hồi tại chỗ. ➔ Cần chuẩn hóa quy trình chăm sóc 24 giờ, tích hợp tính năng cảnh báo tự động trên phần mềm HIS và thiết lập sổ theo dõi xử lý phản ánh nhằm nâng tỷ lệ tiếp cận lên ≥ 95,0%.",
      "resultsBeforeAfter": [
        {
          "metric": "Tỷ lệ người bệnh phòng VIP1 được tiếp cận trong 24 giờ đầu",
          "before": "47,8% (11/23 phòng)",
          "after": "Đạt ≥ 95,0% số phòng đủ điều kiện"
        },
        {
          "metric": "Tỷ lệ phản ánh của người bệnh được tiếp nhận và xử lý tại chỗ trong vòng 02 giờ",
          "before": "Chưa theo dõi đồng bộ",
          "after": "Đạt 100% phản ánh được giải quyết trong ≤ 120 phút"
        },
        {
          "metric": "Tỷ lệ buồng bệnh VIP áp dụng Bảng kiểm 8 điểm chạm chuẩn hóa",
          "before": "0,0% (chưa có)",
          "after": "Đạt 100% buồng bệnh áp dụng"
        },
        {
          "metric": "Mức độ hài lòng của người bệnh đối với dịch vụ buồng phòng yêu cầu",
          "before": "Khảo sát đầu vào chưa đồng bộ",
          "after": "Đạt ≥ 90,0% hài lòng và rất hài lòng"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 80/100đ (ĐẠT LOẠI B (PHÊ DUYỆT THỬ NGHIỆM CÓ ĐIỀU KIỆN) |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Khu vực buồng phòng VIP1 thuộc Đơn vị Quản lý Phòng Yêu cầu Bệnh viện Đa khoa Hùng Vương.",
        "time": "Từ ngày 13 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "Chu Lệ Quyên",
    "nhomTacGia": "Chu Lệ Quyên, Đặng Trung Kiên, Tập thể Đơn vị Quản lý PYC",
    "diemBanDau": "80"
  },
  {
    "maDeTai": "KZ16-UB-01",
    "tenDeTai": "Ứng dụng mã QR trong chuẩn hóa cung cấp thông tin và hướng dẫn chăm sóc cho người bệnh ung thư tại Khoa Ung bướu",
    "tenSanPham": "Ứng dụng mã QR trong chuẩn hóa cung cấp thông tin và hướng dẫn chăm sóc cho người bệnh ung thư tại Khoa Ung bướu",
    "khoaPhong": "KHOA UNG BƯỚU",
    "khoaPhoiHop": "Phòng Công nghệ Thông tin",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 5: Chuyển đổi số và ứng dụng bệnh viện thông minh (kết hợp Nhóm 2: An toàn người bệnh và phòng ngừa sai sót lâm sàng).",
    "tacGia": "CN. Nguyễn Văn Quân",
    "authorsDetailed": [
      {
        "name": "CN. Nguyễn Văn Quân",
        "title": "Cử nhân điều dưỡng - Khoa Ung bướu",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)",
        "stt": "1",
        "hoTen": "CN. Nguyễn Văn Quân",
        "chucVu": "Cử nhân điều dưỡng - Khoa Ung bướu",
        "vaiTro": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "CN. Dương Cao Hải",
        "title": "Cử nhân điều dưỡng - Khoa Ung bướu",
        "role": "Phụ trách nội dung chuyên môn",
        "stt": "2",
        "hoTen": "CN. Dương Cao Hải",
        "chucVu": "Cử nhân điều dưỡng - Khoa Ung bướu",
        "vaiTro": "Phụ trách nội dung chuyên môn"
      },
      {
        "name": "ĐD. Nghiêm Trọng Kiên",
        "title": "Điều dưỡng CĐ - Khoa Ung bướu",
        "role": "Phụ trách đo lường Gemba",
        "stt": "3",
        "hoTen": "ĐD. Nghiêm Trọng Kiên",
        "chucVu": "Điều dưỡng CĐ - Khoa Ung bướu",
        "vaiTro": "Phụ trách đo lường Gemba"
      }
    ],
    "thucTrang": "Khoa Ung bướu tiếp nhận điều trị nhiều mặt bệnh phức tạp (ung thư đường tiêu hóa, phổi, vú, phụ khoa, đầu mặt cổ...). Người bệnh trải qua các liệu trình điều trị dài ngày, kết hợp phẫu thuật, hóa chất, điều trị đích, dẫn đến thể trạng suy nhược, tâm lý lo âu căng thẳng và dễ suy giảm trí nhớ ngắn hạn. Hướng dẫn chăm sóc và giáo dục sức khỏe là mắt xích sống còn bảo đảm an toàn, phòng ngừa biến chứng nặng tại buồng bệnh và tại nhà.",
    "soLieuBanDau": [
      "**Phương thức truyền tải truyền thống phụ thuộc hoàn toàn vào trao đổi miệng:** Điều dưỡng tư vấn trực tiếp khi người bệnh vào viện hoặc trước đợt truyền hóa chất. Do lượng thông tin chuyên môn quá nhiều, người bệnh và người nhà không thể ghi nhớ hết, dễ quên các lưu ý quan trọng về cách tự xử trí tác dụng phụ thông thường (buồn nôn, mệt mỏi, sốt nhẹ...).",
      "**Lãng phí thời gian và tăng áp lực điều dưỡng:** Điều dưỡng phải giải thích lặp đi lặp lại cùng một nội dung nhiều lần trong ngày (ước tính khoảng 5 phút cho mỗi ca bệnh). Trong các thời điểm cao điểm tiêm truyền, việc giải thích lặp lại làm kéo dài thời gian công việc chuyên môn chăm sóc.",
      "**Tài liệu giấy phát tay kém hiệu quả:** Tài liệu giấy dễ bị quăn rách, thất lạc trong quá trình di chuyển điều trị và không thể cập nhật nội dung tức thời khi có phác đồ chăm sóc mới.",
      "**Nguy cơ mất an toàn người bệnh:** Người bệnh không nhận diện được dấu hiệu nguy hiểm cấp cứu (sốt cao hạ bạch cầu, xuất huyết tiêu hóa, khó thở) để báo ngay cho nhân viên y tế, tiềm ẩn nguy cơ diễn biến nặng ngoài tầm kiểm soát.",
      "**Khảo sát Gemba ban đầu:** 80% người bệnh/người nhà tiếp cận được thông tin nhưng chỉ 85% nhớ đúng dấu hiệu nguy hiểm; mức độ hài lòng về cách thức cung cấp thông tin đạt 80% - 85%."
    ],
    "fiveWhys": [
      {
        "level": "Tại sao 1",
        "question": "Tại sao người bệnh ung thư khó ghi nhớ và tuân thủ các hướng dẫn chăm sóc tại khoa?",
        "answer": "Do lượng thông tin chuyên môn quá nhiều, trong khi người bệnh mệt mỏi, lo âu sau phẫu thuật và truyền hóa chất."
      },
      {
        "level": "Tại sao 2",
        "question": "Tại sao thông tin hướng dẫn không được lưu giữ để người bệnh và người nhà tra cứu khi cần?",
        "answer": "Do phương thức truyền đạt phụ thuộc hoàn toàn vào tư vấn miệng của điều dưỡng và tài liệu giấy dễ rách, thất lạc."
      },
      {
        "level": "Tại sao 3",
        "question": "Tại sao không có tài liệu điện tử trực quan để tra cứu tức thời tại giường bệnh?",
        "answer": "Do khoa chưa số hóa nội dung giáo dục sức khỏe và chưa có kênh tra cứu thông minh 24/7 tại đầu giường."
      },
      {
        "level": "Tại sao 4",
        "question": "Tại sao điều dưỡng phải mất nhiều thời gian giải thích lặp đi lặp lại một nội dung?",
        "answer": "Do thiếu công cụ tự học chuẩn hóa để người bệnh và người nhà chủ động tìm hiểu trước khi hỏi nhân viên y tế."
      },
      {
        "level": "Tại sao 5 (Cốt lõi)",
        "question": "Nguyên nhân gốc rễ ở hệ thống",
        "answer": "Khoa Ung bướu thiếu Hệ thống Cẩm nang Số Mã QR đa phương tiện tại giường kết hợp Quy trình hướng dẫn 4 bước khép kín."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Tỷ lệ người bệnh tiếp cận tài liệu số qua mã QR",
        "hienTrang": "80% (chủ yếu nghe miệng)",
        "mucTieu": "Đạt ≥ 95.0% người bệnh",
        "phuongPhap": "Khảo sát thực tế tại buồng bệnh"
      },
      {
        "chiTieu": "Tỷ lệ người bệnh nhớ dấu hiệu nguy hiểm cấp cứu",
        "hienTrang": "85% người bệnh",
        "mucTieu": "Nâng lên 100% người bệnh",
        "phuongPhap": "Phiếu kiểm tra nhận thức trước ra viện"
      },
      {
        "chiTieu": "Thời gian điều dưỡng giải thích lặp lại thông tin",
        "hienTrang": "5 phút / người bệnh",
        "mucTieu": "Giảm còn ≤ 10% (≤ 1 phút)",
        "phuongPhap": "Bấm giờ thực tế quy trình tư vấn"
      },
      {
        "chiTieu": "Tỷ lệ buồng bệnh dán mã QR và tài liệu số hóa",
        "hienTrang": "0% (chưa triển khai)",
        "mucTieu": "Đạt 100% buồng bệnh",
        "phuongPhap": "Biên bản kiểm tra hiện trường Gemba"
      },
      {
        "chiTieu": "Mức độ hài lòng của người bệnh về hướng dẫn",
        "hienTrang": "80% - 85% hài lòng",
        "mucTieu": "Nâng cao đạt ≥ 95.0%",
        "phuongPhap": "Phiếu khảo sát hài lòng người bệnh"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Chuẩn hóa nội dung Giáo dục sức khỏe 5 nhóm chuyên đề): Khoa Ung bướu chủ trì biên soạn và ban hành bộ cẩm nang hướng dẫn ngắn gọn, dễ hiểu, trực quan hóa bằng hình ảnh minh họa cho 5 nhóm nội dung trọng tâm: (1) Hướng dẫn chuẩn bị trước và trong phẫu thuật, hóa trị; (2) Cách nhận diện và tự xử trí các tác dụng phụ thường gặp tại buồng bệnh và tại nhà (buồn nôn, mệt mỏi, rụng tóc, viêm loét miệng); (3) Các dấu hiệu nguy hiểm cấp cứu bắt buộc phải báo ngay cho nhân viên y tế (sốt cao hạ bạch cầu, xuất huyết, khó thở, đau ngực); (4) Chăm sóc vết mổ, dẫn lưu và vệ sinh thân thể; (5) Chế độ dinh dưỡng, vận động nhẹ và hỗ trợ tâm lý người bệnh ung thư.",
      "Giải pháp 2 (Xây dựng hệ thống mã QR Code thông minh và kho tài liệu số): Thiết kế 01 mã QR Code tổng thể dẫn về Trang thông tin chăm sóc Khoa Ung bướu và các mã QR chuyên đề gắn trên bảng thông tin đầu giường bệnh, thẻ hướng dẫn xuất viện. Người bệnh và thân nhân chỉ cần dùng camera điện thoại thông minh quét mã là có thể truy cập tức thời tài liệu số, infographic hoặc video hướng dẫn mọi lúc, mọi nơi.",
      "Giải pháp 3 (Chuẩn hóa quy trình điều dưỡng hướng dẫn 4 bước): Ban hành quy trình thực hành chuẩn gồm 4 bước: (1) Điều dưỡng đón tiếp và tư vấn trực tiếp ban đầu; (2) Giới thiệu điểm quét mã QR dán tại giường bệnh; (3) Hướng dẫn người bệnh/người nhà thao tác quét mã và kiểm tra khả năng tiếp cận; (4) Giải đáp các thắc mắc chuyên sâu và tái đánh giá mức độ hiểu. Nguyên tắc cốt lõi: Mã QR là công cụ bổ trợ nâng cao trải nghiệm, tuyệt đối không thay thế việc thăm khám, tư vấn lâm sàng trực tiếp của bác sĩ và điều dưỡng.",
      "Giải pháp 4 (Đánh giá hiệu quả, lắng nghe phản hồi và cải tiến liên tục): Thiết lập bảng theo dõi nhật ký quét mã, phát phiếu khảo sát nhanh trước xuất viện để đo lường mức độ tiếp cận, sự thấu hiểu thông tin và độ hài lòng; định kỳ rà soát bổ sung các câu hỏi thường gặp để kho dữ liệu ngày càng hoàn thiện."
    ],
    "phamVi": "- a) Khu vực và đối tượng áp dụng thử nghiệm: Toàn bộ buồng bệnh điều trị nội trú — KHOA UNG BƯỚU. Đối tượng áp dụng gồm người bệnh ung thư nội trú, người nhà người bệnh và nhân viên y tế Khoa Ung bướu.",
    "thoiGian": "Từ ngày 12 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
    "sanPhamDauRa": "01 Bộ nội dung giáo dục sức khỏe chuẩn hóa 5 chuyên đề; 100% buồng bệnh được dán mã QR Code tra cứu; 01 Quy trình điều dưỡng hướng dẫn 4 bước; Bộ số liệu khảo sát đối chứng Gemba trước - sau cải tiến; 01 Báo cáo Nghiệm thu A3 hoàn chỉnh.",
    "soHieuVanBan": "Số: 26/TB-QLCL-UB",
    "tongDiemThamDinh": 93,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (XUẤT SẮC — PHÊ DUYỆT THỬ NGHIỆM) |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "19 / 20",
        "nhanXet": "Tính cấp thiết rất cao. Người bệnh ung thư điều trị nội trú có nhu cầu thông tin rất lớn và đa chiều (phẫu thuật, hóa trị, tác dụng phụ, dinh dưỡng, dấu hiệu nguy hiểm). Hình thức tư vấn miệng truyền thống khiến người bệnh dễ quên, điều dưỡng mất nhiều thời gian giải thích lặp lại (5 phút/ca), tài liệu giấy dễ thất lạc. Việc số hóa và tạo kênh tra cứu tại giường bệnh là nhu cầu thực tế cấp bách."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "24 / 25",
        "nhanXet": "Tính khả thi tối ưu (24/25 điểm). Đề án kết hợp giữa chuẩn hóa nội dung chuyên môn và ứng dụng mã QR Code dẫn tới kho tài liệu số. Giải pháp tận dụng 95% tỷ lệ người bệnh/người nhà sở hữu điện thoại thông minh, triển khai nhanh với chi phí 0 đồng."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "18 / 20",
        "nhanXet": "Số liệu đo lường ban đầu (Baseline) rõ ràng, cụ thể. Đơn vị đã khảo sát thực tế tỷ lệ tiếp cận (80%), nhớ dấu hiệu nguy hiểm (85%), thời gian giải thích lặp lại (5 phút/NB). Mục tiêu SMART lượng hóa mạch lạc: nâng tỷ lệ tiếp cận lên ≥95%, giảm thời gian giải thích lặp lại xuống ≤10%."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "14 / 15",
        "nhanXet": "Khả năng nhân rộng rất cao. Mô hình giáo dục sức khỏe số hóa bằng mã QR Code tại đầu giường bệnh có thể đóng gói chuẩn hóa để áp dụng ngay cho 100% các khoa lâm sàng khác trong toàn viện (Ngoại, Sản, Nhi, Tim mạch...)."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "18 / 20",
        "nhanXet": "Sáng tạo tinh gọn xuất sắc. Đơn vị xác lập rõ nguyên tắc an toàn: Mã QR là công cụ bổ trợ, tuyệt đối không thay thế tư vấn lâm sàng trực tiếp. Đặc biệt nhấn mạnh nhóm thông tin cảnh báo dấu hiệu nguy hiểm giúp người bệnh phát hiện sớm biến chứng, bảo đảm an toàn tính mạng."
      }
    ],
    "ketLuanQLCL": "1. Hội đồng Giám khảo và Tổ QLCL phê duyệt Đề án Đạt Loại A (Xuất sắc) với 93/100 điểm, chính thức chấp thuận cho nhóm tác giả Khoa Ung bướu triển khai thử nghiệm thực tế Vòng 2 từ ngày 12/09/2026 đến ngày 22/09/2026.\r\n2. Về chuẩn hóa nội dung chuyên môn: Khoa Ung bướu chủ trì hoàn thiện dứt điểm 5 nhóm tài liệu giáo dục sức khỏe số, thông qua Hội đồng Khoa phê duyệt tính chính xác trước ngày 12/09/2026. Chú trọng thiết kế infographic trực quan, chữ to, dễ đọc, phù hợp với người bệnh cao tuổi.\r\n3. Phối hợp với Phòng Công nghệ Thông tin: Tạo kho lưu trữ đám mây bảo mật, kiểm tra tốc độ truy cập quét mã QR Code dưới 2 giây trên mạng di động 4G và WiFi bệnh viện; bảo đảm mã QR không bị lỗi liên kết.\r\n4. Triển khai dán mã QR tại hiện trường: In và dán mã QR Code tại 100% đầu giường bệnh và bàn tư vấn của điều dưỡng; áp dụng nghiêm túc Quy trình điều dưỡng hướng dẫn 4 bước, bảo đảm người bệnh/người nhà biết cách quét mã và hiểu nội dung.\r\n5. Đo lường đối chứng Gemba: Bấm giờ thực tế trên tối thiểu 30 lượt tư vấn điều dưỡng (so sánh thời gian trước và sau can thiệp); khảo sát mức độ hài lòng và tỷ lệ nhớ dấu hiệu nguy hiểm trên tối thiểu 30 người bệnh nội trú trước ngày 22/09/2026 để hoàn thiện Báo cáo Nghiệm thu A3.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-UB-01 02. Bản Đăng ký Sau Hiệu chỉnh Khoa Ung Bướu CN. Nguyễn Văn Quân.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 9579
      },
      {
        "fileName": "KZ16-UB-01 03. Biên bản Thẩm định Khoa Ung Bướu CN. Nguyễn Văn Quân.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 6276
      },
      {
        "fileName": "KZ16-UB-01 04. Đề cương A3 Triển khai Thực nghiệm Khoa Ung Bướu CN. Nguyễn Văn Quân.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 7233
      }
    ],
    "quickSummary": {
      "idea": "Ứng dụng mã QR trong chuẩn hóa cung cấp thông tin và hướng dẫn chăm sóc cho người bệnh ung thư tại Khoa Ung bướu",
      "painPoints": [
        "**Phương thức truyền tải truyền thống phụ thuộc hoàn toàn vào trao đổi miệng:** Điều dưỡng tư vấn trực tiếp khi người bệnh vào viện hoặc trước đợt truyền hóa chất. Do lượng thông tin chuyên môn quá nhiều, người bệnh và người nhà không thể ghi nhớ hết, dễ quên các lưu ý quan trọng về cách tự xử trí tác dụng phụ thông thường (buồn nôn, mệt mỏi, sốt nhẹ...).",
        "**Lãng phí thời gian và tăng áp lực điều dưỡng:** Điều dưỡng phải giải thích lặp đi lặp lại cùng một nội dung nhiều lần trong ngày (ước tính khoảng 5 phút cho mỗi ca bệnh). Trong các thời điểm cao điểm tiêm truyền, việc giải thích lặp lại làm kéo dài thời gian công việc chuyên môn chăm sóc.",
        "**Tài liệu giấy phát tay kém hiệu quả:** Tài liệu giấy dễ bị quăn rách, thất lạc trong quá trình di chuyển điều trị và không thể cập nhật nội dung tức thời khi có phác đồ chăm sóc mới."
      ],
      "solutions": [
        "Giải pháp 1 (Chuẩn hóa nội dung Giáo dục sức khỏe 5 nhóm chuyên đề): Khoa Ung bướu chủ trì biên soạn và ban hành bộ cẩm nang hướng dẫn ngắn gọn, dễ hiểu, trực quan hóa bằng hình ảnh minh họa cho 5 nhóm nội dung trọng tâm: (1) Hướng dẫn chuẩn bị trước và trong phẫu thuật, hóa trị; (2) Cách nhận diện và tự xử trí các tác dụng phụ thường gặp tại buồng bệnh và tại nhà (buồn nôn, mệt mỏi, rụng tóc, viêm loét miệng); (3) Các dấu hiệu nguy hiểm cấp cứu bắt buộc phải báo ngay cho nhân viên y tế (sốt cao hạ bạch cầu, xuất huyết, khó thở, đau ngực); (4) Chăm sóc vết mổ, dẫn lưu và vệ sinh thân thể; (5) Chế độ dinh dưỡng, vận động nhẹ và hỗ trợ tâm lý người bệnh ung thư.",
        "Giải pháp 2 (Xây dựng hệ thống mã QR Code thông minh và kho tài liệu số): Thiết kế 01 mã QR Code tổng thể dẫn về Trang thông tin chăm sóc Khoa Ung bướu và các mã QR chuyên đề gắn trên bảng thông tin đầu giường bệnh, thẻ hướng dẫn xuất viện. Người bệnh và thân nhân chỉ cần dùng camera điện thoại thông minh quét mã là có thể truy cập tức thời tài liệu số, infographic hoặc video hướng dẫn mọi lúc, mọi nơi.",
        "Giải pháp 3 (Chuẩn hóa quy trình điều dưỡng hướng dẫn 4 bước): Ban hành quy trình thực hành chuẩn gồm 4 bước: (1) Điều dưỡng đón tiếp và tư vấn trực tiếp ban đầu; (2) Giới thiệu điểm quét mã QR dán tại giường bệnh; (3) Hướng dẫn người bệnh/người nhà thao tác quét mã và kiểm tra khả năng tiếp cận; (4) Giải đáp các thắc mắc chuyên sâu và tái đánh giá mức độ hiểu. Nguyên tắc cốt lõi: Mã QR là công cụ bổ trợ nâng cao trải nghiệm, tuyệt đối không thay thế việc thăm khám, tư vấn lâm sàng trực tiếp của bác sĩ và điều dưỡng."
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ người bệnh tiếp cận tài liệu số ...",
          "before": "80% (chủ yếu nghe miệng)",
          "after": "Đạt ≥ 95.0% người bệnh",
          "note": "Khảo sát thực tế tại buồng bệnh"
        },
        {
          "label": "Tỷ lệ người bệnh nhớ dấu hiệu nguy hiể...",
          "before": "85% người bệnh",
          "after": "Nâng lên 100% người bệnh",
          "note": "Phiếu kiểm tra nhận thức trước ra viện"
        },
        {
          "label": "Thời gian điều dưỡng giải thích lặp lạ...",
          "before": "5 phút / người bệnh",
          "after": "Giảm còn ≤ 10% (≤ 1 phút)",
          "note": "Bấm giờ thực tế quy trình tư vấn"
        },
        {
          "label": "Tỷ lệ buồng bệnh dán mã QR và tài liệu...",
          "before": "0% (chưa triển khai)",
          "after": "Đạt 100% buồng bệnh",
          "note": "Biên bản kiểm tra hiện trường Gemba"
        }
      ]
    },
    "a3Report": {
      "title": "Ứng dụng mã QR trong chuẩn hóa cung cấp thông tin và hướng dẫn chăm sóc cho người bệnh ung thư tại Khoa Ung bướu",
      "department": "KHOA UNG BƯỚU",
      "leader": "CN. Nguyễn Văn Quân",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Khoa Ung bướu tiếp nhận điều trị nhiều mặt bệnh phức tạp (ung thư đường tiêu hóa, phổi, vú, phụ khoa, đầu mặt cổ...). Người bệnh trải qua các liệu trình điều trị dài ngày, kết hợp phẫu thuật, hóa chất, điều trị đích, dẫn đến thể trạng suy nhược, tâm lý lo âu căng thẳng và dễ suy giảm trí nhớ ngắn hạn. Hướng dẫn chăm sóc và giáo dục sức khỏe là mắt xích sống còn bảo đảm an toàn, phòng ngừa biến chứng nặng tại buồng bệnh và tại nhà.",
      "currentCondition": "**Phương thức truyền tải truyền thống phụ thuộc hoàn toàn vào trao đổi miệng:** Điều dưỡng tư vấn trực tiếp khi người bệnh vào viện hoặc trước đợt truyền hóa chất. Do lượng thông tin chuyên môn quá nhiều, người bệnh và người nhà không thể ghi nhớ hết, dễ quên các lưu ý quan trọng về cách tự xử trí tác dụng phụ thông thường (buồn nôn, mệt mỏi, sốt nhẹ...).\n• **Lãng phí thời gian và tăng áp lực điều dưỡng:** Điều dưỡng phải giải thích lặp đi lặp lại cùng một nội dung nhiều lần trong ngày (ước tính khoảng 5 phút cho mỗi ca bệnh). Trong các thời điểm cao điểm tiêm truyền, việc giải thích lặp lại làm kéo dài thời gian công việc chuyên môn chăm sóc.\n• **Tài liệu giấy phát tay kém hiệu quả:** Tài liệu giấy dễ bị quăn rách, thất lạc trong quá trình di chuyển điều trị và không thể cập nhật nội dung tức thời khi có phác đồ chăm sóc mới.\n• **Nguy cơ mất an toàn người bệnh:** Người bệnh không nhận diện được dấu hiệu nguy hiểm cấp cứu (sốt cao hạ bạch cầu, xuất huyết tiêu hóa, khó thở) để báo ngay cho nhân viên y tế, tiềm ẩn nguy cơ diễn biến nặng ngoài tầm kiểm soát.\n• **Khảo sát Gemba ban đầu:** 80% người bệnh/người nhà tiếp cận được thông tin nhưng chỉ 85% nhớ đúng dấu hiệu nguy hiểm; mức độ hài lòng về cách thức cung cấp thông tin đạt 80% - 85%.",
      "targetCondition": "• Tỷ lệ người bệnh tiếp cận tài liệu số qua mã QR: Hiện trạng 80% (chủ yếu nghe miệng) ➔ Cam kết đạt Đạt ≥ 95.0% người bệnh\n• Tỷ lệ người bệnh nhớ dấu hiệu nguy hiểm cấp cứu: Hiện trạng 85% người bệnh ➔ Cam kết đạt Nâng lên 100% người bệnh\n• Thời gian điều dưỡng giải thích lặp lại thông tin: Hiện trạng 5 phút / người bệnh ➔ Cam kết đạt Giảm còn ≤ 10% (≤ 1 phút)\n• Tỷ lệ buồng bệnh dán mã QR và tài liệu số hóa: Hiện trạng 0% (chưa triển khai) ➔ Cam kết đạt Đạt 100% buồng bệnh\n• Mức độ hài lòng của người bệnh về hướng dẫn: Hiện trạng 80% - 85% hài lòng ➔ Cam kết đạt Nâng cao đạt ≥ 95.0%",
      "rootCauseAnalysis": "Tại sao 1: Tại sao người bệnh ung thư khó ghi nhớ và tuân thủ các hướng dẫn chăm sóc tại khoa? ➔ Do lượng thông tin chuyên môn quá nhiều, trong khi người bệnh mệt mỏi, lo âu sau phẫu thuật và truyền hóa chất.\nTại sao 2: Tại sao thông tin hướng dẫn không được lưu giữ để người bệnh và người nhà tra cứu khi cần? ➔ Do phương thức truyền đạt phụ thuộc hoàn toàn vào tư vấn miệng của điều dưỡng và tài liệu giấy dễ rách, thất lạc.\nTại sao 3: Tại sao không có tài liệu điện tử trực quan để tra cứu tức thời tại giường bệnh? ➔ Do khoa chưa số hóa nội dung giáo dục sức khỏe và chưa có kênh tra cứu thông minh 24/7 tại đầu giường.\nTại sao 4: Tại sao điều dưỡng phải mất nhiều thời gian giải thích lặp đi lặp lại một nội dung? ➔ Do thiếu công cụ tự học chuẩn hóa để người bệnh và người nhà chủ động tìm hiểu trước khi hỏi nhân viên y tế.\nTại sao 5 (Cốt lõi): Nguyên nhân gốc rễ ở hệ thống ➔ Khoa Ung bướu thiếu Hệ thống Cẩm nang Số Mã QR đa phương tiện tại giường kết hợp Quy trình hướng dẫn 4 bước khép kín.",
      "countermeasures": "• Giải pháp 1 (Chuẩn hóa nội dung Giáo dục sức khỏe 5 nhóm chuyên đề): Khoa Ung bướu chủ trì biên soạn và ban hành bộ cẩm nang hướng dẫn ngắn gọn, dễ hiểu, trực quan hóa bằng hình ảnh minh họa cho 5 nhóm nội dung trọng tâm: (1) Hướng dẫn chuẩn bị trước và trong phẫu thuật, hóa trị; (2) Cách nhận diện và tự xử trí các tác dụng phụ thường gặp tại buồng bệnh và tại nhà (buồn nôn, mệt mỏi, rụng tóc, viêm loét miệng); (3) Các dấu hiệu nguy hiểm cấp cứu bắt buộc phải báo ngay cho nhân viên y tế (sốt cao hạ bạch cầu, xuất huyết, khó thở, đau ngực); (4) Chăm sóc vết mổ, dẫn lưu và vệ sinh thân thể; (5) Chế độ dinh dưỡng, vận động nhẹ và hỗ trợ tâm lý người bệnh ung thư.\n• Giải pháp 2 (Xây dựng hệ thống mã QR Code thông minh và kho tài liệu số): Thiết kế 01 mã QR Code tổng thể dẫn về Trang thông tin chăm sóc Khoa Ung bướu và các mã QR chuyên đề gắn trên bảng thông tin đầu giường bệnh, thẻ hướng dẫn xuất viện. Người bệnh và thân nhân chỉ cần dùng camera điện thoại thông minh quét mã là có thể truy cập tức thời tài liệu số, infographic hoặc video hướng dẫn mọi lúc, mọi nơi.\n• Giải pháp 3 (Chuẩn hóa quy trình điều dưỡng hướng dẫn 4 bước): Ban hành quy trình thực hành chuẩn gồm 4 bước: (1) Điều dưỡng đón tiếp và tư vấn trực tiếp ban đầu; (2) Giới thiệu điểm quét mã QR dán tại giường bệnh; (3) Hướng dẫn người bệnh/người nhà thao tác quét mã và kiểm tra khả năng tiếp cận; (4) Giải đáp các thắc mắc chuyên sâu và tái đánh giá mức độ hiểu. Nguyên tắc cốt lõi: Mã QR là công cụ bổ trợ nâng cao trải nghiệm, tuyệt đối không thay thế việc thăm khám, tư vấn lâm sàng trực tiếp của bác sĩ và điều dưỡng.\n• Giải pháp 4 (Đánh giá hiệu quả, lắng nghe phản hồi và cải tiến liên tục): Thiết lập bảng theo dõi nhật ký quét mã, phát phiếu khảo sát nhanh trước xuất viện để đo lường mức độ tiếp cận, sự thấu hiểu thông tin và độ hài lòng; định kỳ rà soát bổ sung các câu hỏi thường gặp để kho dữ liệu ngày càng hoàn thiện.",
      "planImplementation": "Khu vực: - a) Khu vực và đối tượng áp dụng thử nghiệm: Toàn bộ buồng bệnh điều trị nội trú — KHOA UNG BƯỚU. Đối tượng áp dụng gồm người bệnh ung thư nội trú, người nhà người bệnh và nhân viên y tế Khoa Ung bướu.\nThời gian: Từ ngày 12 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.\nSản phẩm đầu ra: 01 Bộ nội dung giáo dục sức khỏe chuẩn hóa 5 chuyên đề; 100% buồng bệnh được dán mã QR Code tra cứu; 01 Quy trình điều dưỡng hướng dẫn 4 bước; Bộ số liệu khảo sát đối chứng Gemba trước - sau cải tiến; 01 Báo cáo Nghiệm thu A3 hoàn chỉnh.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại KHOA UNG BƯỚU; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "**Phương thức truyền tải truyền thống phụ thuộc hoàn toàn vào trao đổi miệng:** Điều dưỡng tư vấn trực tiếp khi người bệnh vào viện hoặc trước đợt truyền hóa chất. Do lượng thông tin chuyên môn quá nhiều, người bệnh và người nhà không thể ghi nhớ hết, dễ quên các lưu ý quan trọng về cách tự xử trí tác dụng phụ thông thường (buồn nôn, mệt mỏi, sốt nhẹ...).\n• **Lãng phí thời gian và tăng áp lực điều dưỡng:** Điều dưỡng phải giải thích lặp đi lặp lại cùng một nội dung nhiều lần trong ngày (ước tính khoảng 5 phút cho mỗi ca bệnh). Trong các thời điểm cao điểm tiêm truyền, việc giải thích lặp lại làm kéo dài thời gian công việc chuyên môn chăm sóc.\n• **Tài liệu giấy phát tay kém hiệu quả:** Tài liệu giấy dễ bị quăn rách, thất lạc trong quá trình di chuyển điều trị và không thể cập nhật nội dung tức thời khi có phác đồ chăm sóc mới.\n• **Nguy cơ mất an toàn người bệnh:** Người bệnh không nhận diện được dấu hiệu nguy hiểm cấp cứu (sốt cao hạ bạch cầu, xuất huyết tiêu hóa, khó thở) để báo ngay cho nhân viên y tế, tiềm ẩn nguy cơ diễn biến nặng ngoài tầm kiểm soát.\n• **Khảo sát Gemba ban đầu:** 80% người bệnh/người nhà tiếp cận được thông tin nhưng chỉ 85% nhớ đúng dấu hiệu nguy hiểm; mức độ hài lòng về cách thức cung cấp thông tin đạt 80% - 85%.",
      "smartGoal": "• Tỷ lệ người bệnh tiếp cận tài liệu số qua mã QR: Hiện trạng 80% (chủ yếu nghe miệng) ➔ Cam kết đạt Đạt ≥ 95.0% người bệnh\n• Tỷ lệ người bệnh nhớ dấu hiệu nguy hiểm cấp cứu: Hiện trạng 85% người bệnh ➔ Cam kết đạt Nâng lên 100% người bệnh\n• Thời gian điều dưỡng giải thích lặp lại thông tin: Hiện trạng 5 phút / người bệnh ➔ Cam kết đạt Giảm còn ≤ 10% (≤ 1 phút)\n• Tỷ lệ buồng bệnh dán mã QR và tài liệu số hóa: Hiện trạng 0% (chưa triển khai) ➔ Cam kết đạt Đạt 100% buồng bệnh\n• Mức độ hài lòng của người bệnh về hướng dẫn: Hiện trạng 80% - 85% hài lòng ➔ Cam kết đạt Nâng cao đạt ≥ 95.0%",
      "rootCause": "Tại sao 1: Tại sao người bệnh ung thư khó ghi nhớ và tuân thủ các hướng dẫn chăm sóc tại khoa? ➔ Do lượng thông tin chuyên môn quá nhiều, trong khi người bệnh mệt mỏi, lo âu sau phẫu thuật và truyền hóa chất.\nTại sao 2: Tại sao thông tin hướng dẫn không được lưu giữ để người bệnh và người nhà tra cứu khi cần? ➔ Do phương thức truyền đạt phụ thuộc hoàn toàn vào tư vấn miệng của điều dưỡng và tài liệu giấy dễ rách, thất lạc.\nTại sao 3: Tại sao không có tài liệu điện tử trực quan để tra cứu tức thời tại giường bệnh? ➔ Do khoa chưa số hóa nội dung giáo dục sức khỏe và chưa có kênh tra cứu thông minh 24/7 tại đầu giường.\nTại sao 4: Tại sao điều dưỡng phải mất nhiều thời gian giải thích lặp đi lặp lại một nội dung? ➔ Do thiếu công cụ tự học chuẩn hóa để người bệnh và người nhà chủ động tìm hiểu trước khi hỏi nhân viên y tế.\nTại sao 5 (Cốt lõi): Nguyên nhân gốc rễ ở hệ thống ➔ Khoa Ung bướu thiếu Hệ thống Cẩm nang Số Mã QR đa phương tiện tại giường kết hợp Quy trình hướng dẫn 4 bước khép kín.",
      "resultsBeforeAfter": [
        {
          "metric": "Tỷ lệ người bệnh tiếp cận tài liệu số qua mã QR",
          "before": "80% (chủ yếu nghe miệng)",
          "after": "Đạt ≥ 95.0% người bệnh"
        },
        {
          "metric": "Tỷ lệ người bệnh nhớ dấu hiệu nguy hiểm cấp cứu",
          "before": "85% người bệnh",
          "after": "Nâng lên 100% người bệnh"
        },
        {
          "metric": "Thời gian điều dưỡng giải thích lặp lại thông tin",
          "before": "5 phút / người bệnh",
          "after": "Giảm còn ≤ 10% (≤ 1 phút)"
        },
        {
          "metric": "Tỷ lệ buồng bệnh dán mã QR và tài liệu số hóa",
          "before": "0% (chưa triển khai)",
          "after": "Đạt 100% buồng bệnh"
        },
        {
          "metric": "Mức độ hài lòng của người bệnh về hướng dẫn",
          "before": "80% - 85% hài lòng",
          "after": "Nâng cao đạt ≥ 95.0%"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 93/100đ (ĐẠT LOẠI A (XUẤT SẮC — PHÊ DUYỆT THỬ NGHIỆM) |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại - a) Khu vực và đối tượng áp dụng thử nghiệm: Toàn bộ buồng bệnh điều trị nội trú — KHOA UNG BƯỚU. Đối tượng áp dụng gồm người bệnh ung thư nội trú, người nhà người bệnh và nhân viên y tế Khoa Ung bướu.",
        "time": "Từ ngày 12 tháng 09 năm 2026 đến ngày 22 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "CN. Nguyễn Văn Quân",
    "nhomTacGia": "CN. Nguyễn Văn Quân, CN. Dương Cao Hải, ĐD. Nghiêm Trọng Kiên",
    "diemBanDau": "93"
  },
  {
    "maDeTai": "KZ16-LCK-01",
    "tenDeTai": "Cải tiến phiếu đi buồng điều dưỡng hằng ngày và chuẩn hóa quy trình chăm sóc khép kín nhằm nâng cao năng lực phát hiện, đáp ứng nhu cầu người bệnh tại Khoa Liên chuyên khoa",
    "tenSanPham": "Phiếu Đi Buồng 7 Cột Khép Kín & Bảng Theo Dõi Nhu Cầu Người Bệnh",
    "khoaPhong": "Khoa Liên Chuyên Khoa",
    "khoaPhoiHop": "",
    "nhanh": "Nhánh A",
    "chuDe": "An toàn người bệnh & Quản lý chất lượng",
    "tacGia": "ĐD. Nguyễn Thị Huyền",
    "authorsDetailed": [
      {
        "name": "ĐD. Nguyễn Thị Huyền",
        "title": "Điều dưỡng lâm sàng",
        "role": "Trưởng nhóm (Chủ nhiệm đề án).",
        "stt": "1",
        "hoTen": "ĐD. Nguyễn Thị Huyền",
        "chucVu": "Điều dưỡng lâm sàng",
        "vaiTro": "Trưởng nhóm (Chủ nhiệm đề án)."
      },
      {
        "name": "ĐD. Nguyễn Hương Ly",
        "title": "Điều dưỡng lâm sàng",
        "role": "Thư ký đề án (Thiết kế biểu mẫu).",
        "stt": "2",
        "hoTen": "ĐD. Nguyễn Hương Ly",
        "chucVu": "Điều dưỡng lâm sàng",
        "vaiTro": "Thư ký đề án (Thiết kế biểu mẫu)."
      },
      {
        "name": "ĐD. Phạm Thị Phương Thảo",
        "title": "Điều dưỡng lâm sàng",
        "role": "Thành viên (Khảo sát số liệu Gemba).",
        "stt": "3",
        "hoTen": "ĐD. Phạm Thị Phương Thảo",
        "chucVu": "Điều dưỡng lâm sàng",
        "vaiTro": "Thành viên (Khảo sát số liệu Gemba)."
      }
    ],
    "thucTrang": "* **5 Điểm nghẽn vận hành:** Nhận diện nhu cầu chưa đồng nhất; thiếu tính liên tục chăm sóc; chưa chuẩn hóa can thiệp; thiếu đánh giá kết quả sau can thiệp; người bệnh phải hỏi lại nhiều lần.\r\n* **Số liệu đo lường ban đầu tại buồng K601 + K602:**\r\n  * Tỷ lệ người bệnh được chủ động phát hiện nhu cầu: 45% – 50%.\r\n  * Tỷ lệ vấn đề chăm sóc có ghi nhận kết quả sau can thiệp: < 30%.\r\n  * Tỷ lệ người bệnh phải gọi điều dưỡng ≥ 2 lần: ~ 25%.\r\n  * Tỷ lệ người bệnh phải hỏi lại thông tin bệnh, thuốc, mổ: 35% – 40%.",
    "soLieuBanDau": [
      "Tỷ lệ người bệnh được chủ động phát hiện nhu cầu: 45% – 50%.",
      "Tỷ lệ vấn đề chăm sóc có ghi nhận kết quả sau can thiệp: < 30%.",
      "Tỷ lệ người bệnh phải gọi điều dưỡng ≥ 2 lần: ~ 25%.",
      "Tỷ lệ người bệnh phải hỏi lại thông tin bệnh, thuốc, mổ: 35% – 40%."
    ],
    "fiveWhys": [
      {
        "level": "Tại sao 1",
        "question": "Tại sao người bệnh tại Khoa Liên chuyên khoa phải bấm chuông gọi điều dưỡng hoặc hỏi lại nhiều lần?",
        "answer": "Do các nhu cầu chăm sóc, kế hoạch phẫu thuật và lưu ý dùng thuốc chưa được điều dưỡng chủ động nhận định và giải thích trước."
      },
      {
        "level": "Tại sao 2",
        "question": "Tại sao điều dưỡng chưa chủ động nắm bắt toàn diện nhu cầu của người bệnh?",
        "answer": "Do hoạt động đi buồng mang tính hình thức hành chính, thiếu bảng kiểm nhận diện nhu cầu cụ thể tại giường."
      },
      {
        "level": "Tại sao 3",
        "question": "Tại sao đã can thiệp chăm sóc nhưng người bệnh vẫn băn khoăn thắc mắc?",
        "answer": "Do phiếu đi buồng cũ chỉ ghi nội dung đã thực hiện nhưng không có cột đánh giá lại kết quả can thiệp (thiếu vòng lặp khép kín)."
      },
      {
        "level": "Tại sao 4",
        "question": "Tại sao việc theo dõi người bệnh giữa các ca trực chưa đồng bộ liên tục?",
        "answer": "Do thông tin bàn giao giữa các ca trực rời rạc, chưa có bảng theo dõi trực quan nhu cầu người bệnh tại buồng."
      },
      {
        "level": "Tại sao 5 (Cốt lõi)",
        "question": "Nguyên nhân gốc rễ ở hệ thống",
        "answer": "Thiếu Quy trình đi buồng 5 bước khép kín kết hợp Mẫu phiếu đi buồng 7 cột chuẩn hóa để quản lý và đáp ứng tức thời nhu cầu người bệnh."
      }
    ],
    "mucTieu": [],
    "giaiPhap": [
      "Áp dụng Mẫu phiếu đi buồng điều dưỡng 7 cột khép kín ghi nhận nhu cầu và kết quả can thiệp.",
      "Chuẩn hóa Quy trình đi buồng 5 bước khép kín: Chào hỏi - Nhận diện nhu cầu - Can thiệp - Đánh giá lại - Bàn giao.",
      "Tổ chức đào tạo thực hành và kiểm tra chéo tuân thủ giữa các ca trực tại buồng bệnh K601 và K602."
    ],
    "phamVi": "Buồng bệnh K601 và K602 — Khoa Liên chuyên khoa.",
    "thoiGian": "Từ ngày 10/09/2026 đến ngày 22/09/2026 (Nghiệm thu Gemba ngày 22/09/2026).",
    "sanPhamDauRa": "Mẫu phiếu đi buồng 7 cột chuẩn hóa; Quy trình 5 bước khép kín; Báo cáo đối sánh 10 ca Trước - 10 ca Sau.",
    "soHieuVanBan": "27/TB-QLCL-LCK",
    "tongDiemThamDinh": 89,
    "xepLoaiThamDinh": "ĐỦ ĐIỀU KIỆN PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM TẠI HIỆN TRƯỜNG (GEMBA TRIAL)",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và điểm nghẽn thực tế",
        "diem": "18/20 điểm",
        "nhanXet": "Hội đồng thẩm định đánh giá đạt yêu cầu chuyên môn."
      },
      {
        "stt": "2",
        "tieuChi": "Tính thực chứng số liệu Gemba và Công cụ đo lường",
        "diem": "18/20 điểm",
        "nhanXet": "Đã có Bộ câu hỏi và Bảng kiểm 10 tiêu chí"
      },
      {
        "stt": "3",
        "tieuChi": "Tính khả thi của giải pháp và Quy trình khép kín",
        "diem": "18/20 điểm",
        "nhanXet": "Phiếu 7 cột rất khoa học"
      },
      {
        "stt": "4",
        "tieuChi": "Tính bền vững và khả năng nhân rộng toàn viện",
        "diem": "17/20 điểm",
        "nhanXet": "Mô hình điểm mẫu cho khối điều dưỡng"
      },
      {
        "stt": "5",
        "tieuChi": "Cam kết tiến độ và phân bổ nguồn lực",
        "diem": "18/20 điểm",
        "nhanXet": "Tập trung tại K601-K602, kiểm tra 22/09"
      }
    ],
    "ketLuanQLCL": "Phê duyệt Đề cương A3 cho nhóm tác giả Khoa Liên Chuyên Khoa để chính thức triển khai thử nghiệm thực địa. Tổ QLCL phối hợp kiểm chuẩn và nghiệm thu kết quả.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-LCK-01 02. Bản Đăng ký Sau Hiệu chỉnh Khoa Liên Chuyên Khoa ĐD. Nguyễn Thị Huyền.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 2690
      },
      {
        "fileName": "KZ16-LCK-01 03. Biên bản Thẩm định Khoa Liên Chuyên Khoa ĐD. Nguyễn Thị Huyền.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 1898
      },
      {
        "fileName": "KZ16-LCK-01 04. Đề cương A3 Triển khai Thực nghiệm Khoa Liên Chuyên Khoa ĐD. Nguyễn Thị Huyền.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 1991
      }
    ],
    "quickSummary": {
      "idea": "Cải tiến phiếu đi buồng điều dưỡng hằng ngày và chuẩn hóa quy trình chăm sóc khép kín nhằm nâng cao năng lực phát hiện, đáp ứng nhu cầu người bệnh tại Khoa Liên chuyên khoa",
      "painPoints": [
        "Tỷ lệ người bệnh được chủ động phát hiện nhu cầu: 45% – 50%.",
        "Tỷ lệ vấn đề chăm sóc có ghi nhận kết quả sau can thiệp: < 30%.",
        "Tỷ lệ người bệnh phải gọi điều dưỡng ≥ 2 lần: ~ 25%."
      ],
      "solutions": [
        "Áp dụng Mẫu phiếu đi buồng điều dưỡng 7 cột khép kín ghi nhận nhu cầu và kết quả can thiệp.",
        "Chuẩn hóa Quy trình đi buồng 5 bước khép kín: Chào hỏi - Nhận diện nhu cầu - Can thiệp - Đánh giá lại - Bàn giao.",
        "Tổ chức đào tạo thực hành và kiểm tra chéo tuân thủ giữa các ca trực tại buồng bệnh K601 và K602."
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ quy trình",
          "before": "< 60%",
          "after": "≥ 95%",
          "note": "Kiểm chuẩn Gemba"
        },
        {
          "label": "Thời gian thao tác/xử lý",
          "before": "Kéo dài",
          "after": "Giảm 50%",
          "note": "Bấm giờ thực tế"
        }
      ]
    },
    "a3Report": {
      "title": "Cải tiến phiếu đi buồng điều dưỡng hằng ngày và chuẩn hóa quy trình chăm sóc khép kín nhằm nâng cao năng lực phát hiện, đáp ứng nhu cầu người bệnh tại Khoa Liên chuyên khoa",
      "department": "Khoa Liên Chuyên Khoa",
      "leader": "ĐD. Nguyễn Thị Huyền",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "* **5 Điểm nghẽn vận hành:** Nhận diện nhu cầu chưa đồng nhất; thiếu tính liên tục chăm sóc; chưa chuẩn hóa can thiệp; thiếu đánh giá kết quả sau can thiệp; người bệnh phải hỏi lại nhiều lần.\r\n* **Số liệu đo lường ban đầu tại buồng K601 + K602:**\r\n  * Tỷ lệ người bệnh được chủ động phát hiện nhu cầu: 45% – 50%.\r\n  * Tỷ lệ vấn đề chăm sóc có ghi nhận kết quả sau can thiệp: < 30%.\r\n  * Tỷ lệ người bệnh phải gọi điều dưỡng ≥ 2 lần: ~ 25%.\r\n  * Tỷ lệ người bệnh phải hỏi lại thông tin bệnh, thuốc, mổ: 35% – 40%.",
      "currentCondition": "Tỷ lệ người bệnh được chủ động phát hiện nhu cầu: 45% – 50%.\n• Tỷ lệ vấn đề chăm sóc có ghi nhận kết quả sau can thiệp: < 30%.\n• Tỷ lệ người bệnh phải gọi điều dưỡng ≥ 2 lần: ~ 25%.\n• Tỷ lệ người bệnh phải hỏi lại thông tin bệnh, thuốc, mổ: 35% – 40%.",
      "targetCondition": "",
      "rootCauseAnalysis": "Tại sao 1: Tại sao người bệnh tại Khoa Liên chuyên khoa phải bấm chuông gọi điều dưỡng hoặc hỏi lại nhiều lần? ➔ Do các nhu cầu chăm sóc, kế hoạch phẫu thuật và lưu ý dùng thuốc chưa được điều dưỡng chủ động nhận định và giải thích trước.\nTại sao 2: Tại sao điều dưỡng chưa chủ động nắm bắt toàn diện nhu cầu của người bệnh? ➔ Do hoạt động đi buồng mang tính hình thức hành chính, thiếu bảng kiểm nhận diện nhu cầu cụ thể tại giường.\nTại sao 3: Tại sao đã can thiệp chăm sóc nhưng người bệnh vẫn băn khoăn thắc mắc? ➔ Do phiếu đi buồng cũ chỉ ghi nội dung đã thực hiện nhưng không có cột đánh giá lại kết quả can thiệp (thiếu vòng lặp khép kín).\nTại sao 4: Tại sao việc theo dõi người bệnh giữa các ca trực chưa đồng bộ liên tục? ➔ Do thông tin bàn giao giữa các ca trực rời rạc, chưa có bảng theo dõi trực quan nhu cầu người bệnh tại buồng.\nTại sao 5 (Cốt lõi): Nguyên nhân gốc rễ ở hệ thống ➔ Thiếu Quy trình đi buồng 5 bước khép kín kết hợp Mẫu phiếu đi buồng 7 cột chuẩn hóa để quản lý và đáp ứng tức thời nhu cầu người bệnh.",
      "countermeasures": "• Áp dụng Mẫu phiếu đi buồng điều dưỡng 7 cột khép kín ghi nhận nhu cầu và kết quả can thiệp.\n• Chuẩn hóa Quy trình đi buồng 5 bước khép kín: Chào hỏi - Nhận diện nhu cầu - Can thiệp - Đánh giá lại - Bàn giao.\n• Tổ chức đào tạo thực hành và kiểm tra chéo tuân thủ giữa các ca trực tại buồng bệnh K601 và K602.",
      "planImplementation": "Khu vực: Buồng bệnh K601 và K602 — Khoa Liên chuyên khoa.\nThời gian: Từ ngày 10/09/2026 đến ngày 22/09/2026 (Nghiệm thu Gemba ngày 22/09/2026).\nSản phẩm đầu ra: Mẫu phiếu đi buồng 7 cột chuẩn hóa; Quy trình 5 bước khép kín; Báo cáo đối sánh 10 ca Trước - 10 ca Sau.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại Khoa Liên Chuyên Khoa; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "Tỷ lệ người bệnh được chủ động phát hiện nhu cầu: 45% – 50%.\n• Tỷ lệ vấn đề chăm sóc có ghi nhận kết quả sau can thiệp: < 30%.\n• Tỷ lệ người bệnh phải gọi điều dưỡng ≥ 2 lần: ~ 25%.\n• Tỷ lệ người bệnh phải hỏi lại thông tin bệnh, thuốc, mổ: 35% – 40%.",
      "smartGoal": "",
      "rootCause": "Tại sao 1: Tại sao người bệnh tại Khoa Liên chuyên khoa phải bấm chuông gọi điều dưỡng hoặc hỏi lại nhiều lần? ➔ Do các nhu cầu chăm sóc, kế hoạch phẫu thuật và lưu ý dùng thuốc chưa được điều dưỡng chủ động nhận định và giải thích trước.\nTại sao 2: Tại sao điều dưỡng chưa chủ động nắm bắt toàn diện nhu cầu của người bệnh? ➔ Do hoạt động đi buồng mang tính hình thức hành chính, thiếu bảng kiểm nhận diện nhu cầu cụ thể tại giường.\nTại sao 3: Tại sao đã can thiệp chăm sóc nhưng người bệnh vẫn băn khoăn thắc mắc? ➔ Do phiếu đi buồng cũ chỉ ghi nội dung đã thực hiện nhưng không có cột đánh giá lại kết quả can thiệp (thiếu vòng lặp khép kín).\nTại sao 4: Tại sao việc theo dõi người bệnh giữa các ca trực chưa đồng bộ liên tục? ➔ Do thông tin bàn giao giữa các ca trực rời rạc, chưa có bảng theo dõi trực quan nhu cầu người bệnh tại buồng.\nTại sao 5 (Cốt lõi): Nguyên nhân gốc rễ ở hệ thống ➔ Thiếu Quy trình đi buồng 5 bước khép kín kết hợp Mẫu phiếu đi buồng 7 cột chuẩn hóa để quản lý và đáp ứng tức thời nhu cầu người bệnh.",
      "resultsBeforeAfter": [
        {
          "metric": "Tỷ lệ tuân thủ quy trình",
          "before": "< 60%",
          "after": "≥ 95%"
        },
        {
          "metric": "Thời gian thao tác xử lý",
          "before": "Kéo dài",
          "after": "Giảm 50%"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 89/100đ (ĐỦ ĐIỀU KIỆN PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM TẠI HIỆN TRƯỜNG (GEMBA TRIAL))",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Buồng bệnh K601 và K602 — Khoa Liên chuyên khoa.",
        "time": "Từ ngày 10/09/2026 đến ngày 22/09/2026 (Nghiệm thu Gemba ngày 22/09/2026).",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "ĐD. Nguyễn Thị Huyền",
    "nhomTacGia": "ĐD. Nguyễn Thị Huyền, ĐD. Nguyễn Hương Ly, ĐD. Phạm Thị Phương Thảo",
    "diemBanDau": "89"
  },
  {
    "maDeTai": "KZ16-DL-01",
    "tenDeTai": "Cải tiến hướng dẫn sử dụng thuốc bôi tại nhà ở người bệnh trứng cá bằng Bảng kiểm 5 đúng và Phiếu hướng dẫn chăm sóc da tại Khoa Da liễu – Thẩm mỹ",
    "tenSanPham": "Phiếu Hướng Dẫn Bôi Thuốc & Bảng Kiểm 5 Đúng Điều Trị Trứng Cá",
    "khoaPhong": "KHOA DA LIỄU - THẨM MỸ",
    "khoaPhoiHop": "Khoa Dược",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 2: An toàn người bệnh và phòng ngừa sai sót lâm sàng (kết hợp Nâng cao trải nghiệm và sự hài lòng của người bệnh)",
    "tacGia": "ĐD. Hồ Thị Phương Thảo",
    "authorsDetailed": [
      {
        "name": "ĐD. Hồ Thị Phương Thảo",
        "title": "Điều dưỡng Khoa Da liễu",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)",
        "stt": "1",
        "hoTen": "ĐD. Hồ Thị Phương Thảo",
        "chucVu": "Điều dưỡng Khoa Da liễu",
        "vaiTro": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "BS. Dương Thu Huế",
        "title": "Bác sĩ Khoa Da liễu",
        "role": "Thư ký đề án (Chuyên môn và phác đồ)",
        "stt": "2",
        "hoTen": "BS. Dương Thu Huế",
        "chucVu": "Bác sĩ Khoa Da liễu",
        "vaiTro": "Thư ký đề án (Chuyên môn và phác đồ)"
      },
      {
        "name": "ĐD. Trần Thị Thanh Thảo",
        "title": "Điều dưỡng Khoa Da liễu",
        "role": "Thành viên (Khảo sát và thu thập dữ liệu)",
        "stt": "3",
        "hoTen": "ĐD. Trần Thị Thanh Thảo",
        "chucVu": "Điều dưỡng Khoa Da liễu",
        "vaiTro": "Thành viên (Khảo sát và thu thập dữ liệu)"
      },
      {
        "name": "DS. Nguyễn Long Thành",
        "title": "Dược sĩ Khoa Dược",
        "role": "Thành viên (Cố vấn an toàn và tương tác thuốc)",
        "stt": "4",
        "hoTen": "DS. Nguyễn Long Thành",
        "chucVu": "Dược sĩ Khoa Dược",
        "vaiTro": "Thành viên (Cố vấn an toàn và tương tác thuốc)"
      },
      {
        "name": "ĐD. Vũ Thị Châu Anh",
        "title": "Điều dưỡng Bộ phận Chăm sóc da",
        "role": "Thành viên (Thực hiện thử nghiệm tại buồng chăm sóc da)",
        "stt": "5",
        "hoTen": "ĐD. Vũ Thị Châu Anh",
        "chucVu": "Điều dưỡng Bộ phận Chăm sóc da",
        "vaiTro": "Thành viên (Thực hiện thử nghiệm tại buồng chăm sóc da)"
      }
    ],
    "thucTrang": "Trong công tác khám và điều trị ngoại trú tại Khoa Da liễu – Thẩm mỹ, người bệnh mụn trứng cá thường được kê đơn kết hợp từ 2 đến 4 loại thuốc bôi đặc trị và sản phẩm chăm sóc da tại nhà. Việc tuân thủ đúng phác đồ bôi thuốc quyết định từ 70% đến 80% kết quả điều trị lâm sàng. Hướng dẫn chi tiết và giáo dục người bệnh về cách dùng thuốc bôi an toàn là mắt xích sống còn nhằm phòng ngừa biến chứng kích ứng da, bảo đảm hiệu quả phác đồ và nâng cao trải nghiệm điều trị.",
    "soLieuBanDau": [
      "**Phương thức hướng dẫn truyền thống phụ thuộc hoàn toàn vào tư vấn miệng:** Nhân viên y tế chủ yếu dặn dò bằng lời nói trong thời gian khám ngắn, thiếu tài liệu hướng dẫn trực quan cầm tay mang về nhà. Lượng thông tin nhiều khiến người bệnh khó ghi nhớ hết các lưu ý quan trọng.",
      "**Người bệnh khó nhớ và nhầm lẫn lượng bôi, thứ tự:** Do các tuýp thuốc có bao bì tương tự, người bệnh thường bôi sai liều lượng (35% ước lượng sai), nhầm lẫn thứ tự bôi (40% đảo lộn thứ tự lỏng - đặc) hoặc bôi lan vào vùng da nhạy cảm quanh mắt và miệng.",
      "**Nguy cơ mất an toàn và giảm hiệu quả lâm sàng:** Bôi sai cách dẫn đến kích ứng da, đỏ rát, bong tróc hoặc điều trị kém đáp ứng; khoảng 25% người bệnh phải gọi điện thoại hỏi lại nhân viên y tế, gây lo âu và làm giảm sự yên tâm, tin tưởng.",
      "**Chưa có công cụ kiểm soát và khép kín vòng tư vấn:** Khoa chưa ban hành Bảng kiểm 5 đúng chuẩn hóa và chưa có bước kiểm tra xác nhận mức độ hiểu biết (yêu cầu người bệnh nhắc lại và chỉ rõ liều lượng) trước khi ra về.",
      "**Khảo sát Gemba ban đầu trên 20 người bệnh:** 70,0% nhận biết đúng tên thuốc; 65,0% ước lượng đúng lượng bôi; 65,0% đúng thời điểm; 90,0% đúng vị trí; 60,0% đúng thứ tự; chỉ 45,0% tuân thủ đúng đủ cả 5 tiêu chí cốt lõi."
    ],
    "fiveWhys": [
      {
        "level": "Tại sao 1",
        "question": "Tại sao người bệnh mụn trứng cá hay bị kích ứng da hoặc tái phát bùng mụn?",
        "answer": "Do người bệnh bôi thuốc sai liều lượng, sai thứ tự các bước và quên bôi kem chống nắng bảo vệ da."
      },
      {
        "level": "Tại sao 2",
        "question": "Tại sao người bệnh lại bôi thuốc không đúng phác đồ tại nhà?",
        "answer": "Do đơn thuốc gồm nhiều sản phẩm đặc trị nhưng bác sĩ/điều dưỡng chỉ dặn dò bằng miệng trong thời gian khám ngắn."
      },
      {
        "level": "Tại sao 3",
        "question": "Tại sao người bệnh không nhớ rõ lời dặn sau khi về nhà?",
        "answer": "Do không có tài liệu hướng dẫn trực quan cầm tay hoặc bảng kiểm các bước bôi thuốc sáng - tối rõ ràng."
      },
      {
        "level": "Tại sao 4",
        "question": "Tại sao chưa có công cụ kiểm soát việc tuân thủ phác đồ tại nhà?",
        "answer": "Do khoa chưa chuẩn hóa bộ công cụ giáo dục sức khỏe và bảng kiểm 5 Đúng dành riêng cho người bệnh da liễu."
      },
      {
        "level": "Tại sao 5 (Cốt lõi)",
        "question": "Nguyên nhân gốc rễ ở hệ thống",
        "answer": "Hệ thống thiếu công cụ Bảng kiểm 5 Đúng kết hợp Phiếu hướng dẫn bôi thuốc trực quan và cơ chế kiểm tra chéo tuân thủ."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Tỷ lệ người bệnh sử dụng thuốc bôi đúng đủ 5 tiêu chí",
        "hienTrang": "45,0% (9/20 người bệnh)",
        "mucTieu": "Đạt ≥ 80,0% người bệnh",
        "phuongPhap": "Khảo sát thực tế theo phiếu đánh giá"
      },
      {
        "chiTieu": "Tỷ lệ người bệnh được cấp Phiếu hướng dẫn chăm sóc da",
        "hienTrang": "0,0% (chưa có phiếu)",
        "mucTieu": "Đạt 100,0% người bệnh",
        "phuongPhap": "Sổ theo dõi cấp phát tại phòng khám"
      },
      {
        "chiTieu": "Tỷ lệ lượt tư vấn được kiểm soát bằng Bảng kiểm 5 đúng",
        "hienTrang": "0,0% (chưa áp dụng)",
        "mucTieu": "Đạt 100,0% lượt tư vấn",
        "phuongPhap": "Bảng kiểm lưu kèm hồ sơ theo dõi"
      },
      {
        "chiTieu": "Tỷ lệ người bệnh được kiểm tra xác nhận nhắc lại đúng",
        "hienTrang": "Chưa kiểm soát quy trình",
        "mucTieu": "Đạt ≥ 85,0% người bệnh",
        "phuongPhap": "Ghi nhận trực tiếp trên bảng kiểm tư vấn"
      },
      {
        "chiTieu": "Tỷ lệ người bệnh gọi điện hỏi lại do dùng sai thuốc bôi",
        "hienTrang": "Khoảng 25,0%",
        "mucTieu": "Giảm xuống ≤ 5,0%",
        "phuongPhap": "Nhật ký theo dõi cuộc gọi hỗ trợ"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Xây dựng Phiếu hướng dẫn quy trình chăm sóc da tại nhà trực quan in màu): Thiết kế bản hướng dẫn in màu phân luồng rõ ràng 3 thời điểm: Sáng – Trưa – Tối, quy chuẩn 6 bước chăm sóc da và định lượng trực quan dễ nhớ (1 hạt ngô, 3-5 giọt, 1/3-1/2 đốt ngón tay, 1 đốt ngón tay) cùng các lưu ý an toàn.",
      "Giải pháp 2 (Ban hành và áp dụng Bảng kiểm 5 đúng trong quy trình tư vấn): Điều dưỡng và Bác sĩ đối chiếu 5 tiêu chí chuyên môn: Đúng thuốc → Đúng lượng → Đúng thời điểm → Đúng vị trí → Đúng cách trước khi bàn giao thuốc cho người bệnh.",
      "Giải pháp 3 (Khép kín vòng kiểm soát bằng quy trình kiểm tra xác nhận hiểu biết): Trước khi người bệnh ra về, nhân viên y tế yêu cầu người bệnh chỉ vào phiếu và nhắc lại thứ tự, liều lượng sử dụng từng loại thuốc bôi để kịp thời hiệu chỉnh các điểm chưa hiểu rõ.",
      "Giải pháp 4 (Phối hợp chuyên môn dược lâm sàng kiểm soát an toàn tương tác): Dược sĩ lâm sàng rà soát sự tương thích giữa thuốc bôi điều trị và các sản phẩm dưỡng ẩm, chống nắng, phòng ngừa phản ứng kích ứng chéo.",
      "Giải pháp 5 (Đánh giá hiệu quả, đo lường đối chứng số liệu Gemba và cải tiến liên tục): Tổ chức khảo sát định kỳ trên 20–30 người bệnh sau can thiệp để đánh giá sự chuyển biến về tỷ lệ tuân thủ và mức độ hài lòng."
    ],
    "phamVi": "- a) Khu vực và đối tượng áp dụng thử nghiệm: Thực hiện thử nghiệm tại Phòng khám Da liễu A102 và Bộ phận Chăm sóc da tầng 2 nhà R — Bệnh viện Đa khoa Hùng Vương. Đối tượng áp dụng gồm người bệnh mụn trứng cá điều trị ngoại trú và nhân viên y tế Khoa Da liễu – Thẩm mỹ.",
    "thoiGian": "Từ ngày 10 tháng 09 năm 2026 đến ngày 30 tháng 09 năm 2026.",
    "sanPhamDauRa": "01 Phiếu hướng dẫn quy trình chăm sóc da tại nhà in màu; 01 Bảng kiểm 5 đúng hướng dẫn thuốc bôi; Báo cáo số liệu đo lường đối chứng Trước – Sau can thiệp; Báo cáo Nghiệm thu A3 hoàn chỉnh.",
    "soHieuVanBan": "Số: 28/TB-QLCL-DLTM",
    "tongDiemThamDinh": 96,
    "xepLoaiThamDinh": "ĐẠT LOẠI A (XUẤT SẮC — PHÊ DUYỆT THỬ NGHIỆM) |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "19 / 20",
        "nhanXet": "Tính cấp thiết rất cao (19/20 điểm). Người bệnh mụn trứng cá điều trị ngoại trú thường được kê nhiều loại thuốc bôi kết hợp. Hướng dẫn miệng truyền thống khiến người bệnh dễ quên, bôi sai liều lượng và thứ tự, nguy cơ kích ứng da cao. Việc chuẩn hóa phiếu hướng dẫn trực quan và bảng kiểm 5 đúng là nhu cầu cấp thiết."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "24 / 25",
        "nhanXet": "Tính khả thi tối ưu (24/25 điểm). Đề án nằm trọn trong thẩm quyền chuyên môn của đội ngũ điều dưỡng và bác sĩ Da liễu; giải pháp in phiếu màu trực quan và bảng kiểm 5 đúng chi phí thấp nhưng mang lại tác động lâm sàng rất cao."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "20 / 20",
        "nhanXet": "Số liệu đo lường ban đầu (Baseline) rõ ràng, cụ thể trên 20 ca bệnh thực tế (tuân thủ đủ 5 tiêu chí chỉ đạt 45,0%). Mục tiêu SMART lượng hóa mạch lạc: nâng tỷ lệ tuân thủ lên ≥ 80,0%, kiểm soát 100% bằng bảng kiểm, giảm cuộc gọi hỏi lại xuống ≤ 5,0%."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "15 / 15",
        "nhanXet": "Khả năng nhân rộng rất cao (15/15 điểm). Mô hình Phiếu hướng dẫn trực quan và Bảng kiểm 5 đúng dễ dàng nhân rộng sang các bệnh lý da liễu khác (chàm, vảy nến, viêm da cơ địa) và các khoa lâm sàng khác."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "18 / 20",
        "nhanXet": "Sáng tạo tinh gọn xuất sắc (18/20 điểm). Chuyển đổi từ cơ chế tư vấn một chiều sang công cụ trực quan hóa kết hợp bước kiểm tra xác nhận người bệnh nhắc lại, bảo đảm an toàn dược lâm sàng tối đa."
      }
    ],
    "ketLuanQLCL": "1. Hội đồng Giám khảo và Tổ QLCL phê duyệt Đề án Đạt Loại A (Xuất sắc) với 96/100 điểm, chính thức chấp thuận cho nhóm tác giả Khoa Da liễu – Thẩm mỹ triển khai thử nghiệm thực tế Vòng 2 từ ngày 10/09/2026 đến ngày 30/09/2026.\r\n2. Về chuẩn hóa nội dung chuyên môn: Khoa Da liễu – Thẩm mỹ chủ trì hoàn thiện dứt điểm Phiếu hướng dẫn quy trình chăm sóc da tại nhà in màu, phối hợp Khoa Dược rà soát phác đồ và in ấn 50 phiếu thử nghiệm đầu tiên trước ngày 13/09/2026.\r\n3. Áp dụng quy trình tư vấn Bảng kiểm 5 đúng: Áp dụng 100% bảng kiểm khi tư vấn thuốc bôi; thực hiện nghiêm túc bước kiểm tra xác nhận mức độ hiểu biết (yêu cầu người bệnh nhắc lại và chỉ rõ liều lượng) trên tối thiểu 20–30 ca bệnh tiếp theo.\r\n4. Phối hợp chuyên môn dược lâm sàng: Dược sĩ lâm sàng rà soát sự tương thích giữa thuốc bôi điều trị và các sản phẩm dưỡng ẩm, chống nắng, phòng ngừa phản ứng kích ứng chéo cho người bệnh.\r\n5. Đo lường đối chứng Gemba: Tiến hành khảo sát đo lường đối chứng tỷ lệ tuân thủ đúng đủ 5 tiêu chí để đối chiếu trực tiếp với mốc Baseline 45,0% ban đầu, hoàn thiện Báo cáo Nghiệm thu A3 trước ngày 30/09/2026.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-DL-01 02. Bản Đăng ký Sau Hiệu chỉnh Khoa Da Liễu Thẩm Mỹ ĐD. Hồ Thị Phương Thảo.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 9333
      },
      {
        "fileName": "KZ16-DL-01 03. Biên bản Thẩm định Khoa Da Liễu Thẩm Mỹ ĐD. Hồ Thị Phương Thảo.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 5909
      },
      {
        "fileName": "KZ16-DL-01 04. Đề cương A3 Triển khai Thực nghiệm Khoa Da Liễu Thẩm Mỹ ĐD. Hồ Thị Phương Thảo.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 7818
      }
    ],
    "quickSummary": {
      "idea": "Cải tiến hướng dẫn sử dụng thuốc bôi tại nhà ở người bệnh trứng cá bằng Bảng kiểm 5 đúng và Phiếu hướng dẫn chăm sóc da tại Khoa Da liễu – Thẩm mỹ",
      "painPoints": [
        "**Phương thức hướng dẫn truyền thống phụ thuộc hoàn toàn vào tư vấn miệng:** Nhân viên y tế chủ yếu dặn dò bằng lời nói trong thời gian khám ngắn, thiếu tài liệu hướng dẫn trực quan cầm tay mang về nhà. Lượng thông tin nhiều khiến người bệnh khó ghi nhớ hết các lưu ý quan trọng.",
        "**Người bệnh khó nhớ và nhầm lẫn lượng bôi, thứ tự:** Do các tuýp thuốc có bao bì tương tự, người bệnh thường bôi sai liều lượng (35% ước lượng sai), nhầm lẫn thứ tự bôi (40% đảo lộn thứ tự lỏng - đặc) hoặc bôi lan vào vùng da nhạy cảm quanh mắt và miệng.",
        "**Nguy cơ mất an toàn và giảm hiệu quả lâm sàng:** Bôi sai cách dẫn đến kích ứng da, đỏ rát, bong tróc hoặc điều trị kém đáp ứng; khoảng 25% người bệnh phải gọi điện thoại hỏi lại nhân viên y tế, gây lo âu và làm giảm sự yên tâm, tin tưởng."
      ],
      "solutions": [
        "Giải pháp 1 (Xây dựng Phiếu hướng dẫn quy trình chăm sóc da tại nhà trực quan in màu): Thiết kế bản hướng dẫn in màu phân luồng rõ ràng 3 thời điểm: Sáng – Trưa – Tối, quy chuẩn 6 bước chăm sóc da và định lượng trực quan dễ nhớ (1 hạt ngô, 3-5 giọt, 1/3-1/2 đốt ngón tay, 1 đốt ngón tay) cùng các lưu ý an toàn.",
        "Giải pháp 2 (Ban hành và áp dụng Bảng kiểm 5 đúng trong quy trình tư vấn): Điều dưỡng và Bác sĩ đối chiếu 5 tiêu chí chuyên môn: Đúng thuốc → Đúng lượng → Đúng thời điểm → Đúng vị trí → Đúng cách trước khi bàn giao thuốc cho người bệnh.",
        "Giải pháp 3 (Khép kín vòng kiểm soát bằng quy trình kiểm tra xác nhận hiểu biết): Trước khi người bệnh ra về, nhân viên y tế yêu cầu người bệnh chỉ vào phiếu và nhắc lại thứ tự, liều lượng sử dụng từng loại thuốc bôi để kịp thời hiệu chỉnh các điểm chưa hiểu rõ."
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ người bệnh sử dụng thuốc bôi đún...",
          "before": "45,0% (9/20 người bệnh)",
          "after": "Đạt ≥ 80,0% người bệnh",
          "note": "Khảo sát thực tế theo phiếu đánh giá"
        },
        {
          "label": "Tỷ lệ người bệnh được cấp Phiếu hướng ...",
          "before": "0,0% (chưa có phiếu)",
          "after": "Đạt 100,0% người bệnh",
          "note": "Sổ theo dõi cấp phát tại phòng khám"
        },
        {
          "label": "Tỷ lệ lượt tư vấn được kiểm soát bằng ...",
          "before": "0,0% (chưa áp dụng)",
          "after": "Đạt 100,0% lượt tư vấn",
          "note": "Bảng kiểm lưu kèm hồ sơ theo dõi"
        },
        {
          "label": "Tỷ lệ người bệnh được kiểm tra xác nhậ...",
          "before": "Chưa kiểm soát quy trình",
          "after": "Đạt ≥ 85,0% người bệnh",
          "note": "Ghi nhận trực tiếp trên bảng kiểm tư vấn"
        }
      ]
    },
    "a3Report": {
      "title": "Cải tiến hướng dẫn sử dụng thuốc bôi tại nhà ở người bệnh trứng cá bằng Bảng kiểm 5 đúng và Phiếu hướng dẫn chăm sóc da tại Khoa Da liễu – Thẩm mỹ",
      "department": "KHOA DA LIỄU - THẨM MỸ",
      "leader": "ĐD. Hồ Thị Phương Thảo",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Trong công tác khám và điều trị ngoại trú tại Khoa Da liễu – Thẩm mỹ, người bệnh mụn trứng cá thường được kê đơn kết hợp từ 2 đến 4 loại thuốc bôi đặc trị và sản phẩm chăm sóc da tại nhà. Việc tuân thủ đúng phác đồ bôi thuốc quyết định từ 70% đến 80% kết quả điều trị lâm sàng. Hướng dẫn chi tiết và giáo dục người bệnh về cách dùng thuốc bôi an toàn là mắt xích sống còn nhằm phòng ngừa biến chứng kích ứng da, bảo đảm hiệu quả phác đồ và nâng cao trải nghiệm điều trị.",
      "currentCondition": "**Phương thức hướng dẫn truyền thống phụ thuộc hoàn toàn vào tư vấn miệng:** Nhân viên y tế chủ yếu dặn dò bằng lời nói trong thời gian khám ngắn, thiếu tài liệu hướng dẫn trực quan cầm tay mang về nhà. Lượng thông tin nhiều khiến người bệnh khó ghi nhớ hết các lưu ý quan trọng.\n• **Người bệnh khó nhớ và nhầm lẫn lượng bôi, thứ tự:** Do các tuýp thuốc có bao bì tương tự, người bệnh thường bôi sai liều lượng (35% ước lượng sai), nhầm lẫn thứ tự bôi (40% đảo lộn thứ tự lỏng - đặc) hoặc bôi lan vào vùng da nhạy cảm quanh mắt và miệng.\n• **Nguy cơ mất an toàn và giảm hiệu quả lâm sàng:** Bôi sai cách dẫn đến kích ứng da, đỏ rát, bong tróc hoặc điều trị kém đáp ứng; khoảng 25% người bệnh phải gọi điện thoại hỏi lại nhân viên y tế, gây lo âu và làm giảm sự yên tâm, tin tưởng.\n• **Chưa có công cụ kiểm soát và khép kín vòng tư vấn:** Khoa chưa ban hành Bảng kiểm 5 đúng chuẩn hóa và chưa có bước kiểm tra xác nhận mức độ hiểu biết (yêu cầu người bệnh nhắc lại và chỉ rõ liều lượng) trước khi ra về.\n• **Khảo sát Gemba ban đầu trên 20 người bệnh:** 70,0% nhận biết đúng tên thuốc; 65,0% ước lượng đúng lượng bôi; 65,0% đúng thời điểm; 90,0% đúng vị trí; 60,0% đúng thứ tự; chỉ 45,0% tuân thủ đúng đủ cả 5 tiêu chí cốt lõi.",
      "targetCondition": "• Tỷ lệ người bệnh sử dụng thuốc bôi đúng đủ 5 tiêu chí: Hiện trạng 45,0% (9/20 người bệnh) ➔ Cam kết đạt Đạt ≥ 80,0% người bệnh\n• Tỷ lệ người bệnh được cấp Phiếu hướng dẫn chăm sóc da: Hiện trạng 0,0% (chưa có phiếu) ➔ Cam kết đạt Đạt 100,0% người bệnh\n• Tỷ lệ lượt tư vấn được kiểm soát bằng Bảng kiểm 5 đúng: Hiện trạng 0,0% (chưa áp dụng) ➔ Cam kết đạt Đạt 100,0% lượt tư vấn\n• Tỷ lệ người bệnh được kiểm tra xác nhận nhắc lại đúng: Hiện trạng Chưa kiểm soát quy trình ➔ Cam kết đạt Đạt ≥ 85,0% người bệnh\n• Tỷ lệ người bệnh gọi điện hỏi lại do dùng sai thuốc bôi: Hiện trạng Khoảng 25,0% ➔ Cam kết đạt Giảm xuống ≤ 5,0%",
      "rootCauseAnalysis": "Tại sao 1: Tại sao người bệnh mụn trứng cá hay bị kích ứng da hoặc tái phát bùng mụn? ➔ Do người bệnh bôi thuốc sai liều lượng, sai thứ tự các bước và quên bôi kem chống nắng bảo vệ da.\nTại sao 2: Tại sao người bệnh lại bôi thuốc không đúng phác đồ tại nhà? ➔ Do đơn thuốc gồm nhiều sản phẩm đặc trị nhưng bác sĩ/điều dưỡng chỉ dặn dò bằng miệng trong thời gian khám ngắn.\nTại sao 3: Tại sao người bệnh không nhớ rõ lời dặn sau khi về nhà? ➔ Do không có tài liệu hướng dẫn trực quan cầm tay hoặc bảng kiểm các bước bôi thuốc sáng - tối rõ ràng.\nTại sao 4: Tại sao chưa có công cụ kiểm soát việc tuân thủ phác đồ tại nhà? ➔ Do khoa chưa chuẩn hóa bộ công cụ giáo dục sức khỏe và bảng kiểm 5 Đúng dành riêng cho người bệnh da liễu.\nTại sao 5 (Cốt lõi): Nguyên nhân gốc rễ ở hệ thống ➔ Hệ thống thiếu công cụ Bảng kiểm 5 Đúng kết hợp Phiếu hướng dẫn bôi thuốc trực quan và cơ chế kiểm tra chéo tuân thủ.",
      "countermeasures": "• Giải pháp 1 (Xây dựng Phiếu hướng dẫn quy trình chăm sóc da tại nhà trực quan in màu): Thiết kế bản hướng dẫn in màu phân luồng rõ ràng 3 thời điểm: Sáng – Trưa – Tối, quy chuẩn 6 bước chăm sóc da và định lượng trực quan dễ nhớ (1 hạt ngô, 3-5 giọt, 1/3-1/2 đốt ngón tay, 1 đốt ngón tay) cùng các lưu ý an toàn.\n• Giải pháp 2 (Ban hành và áp dụng Bảng kiểm 5 đúng trong quy trình tư vấn): Điều dưỡng và Bác sĩ đối chiếu 5 tiêu chí chuyên môn: Đúng thuốc → Đúng lượng → Đúng thời điểm → Đúng vị trí → Đúng cách trước khi bàn giao thuốc cho người bệnh.\n• Giải pháp 3 (Khép kín vòng kiểm soát bằng quy trình kiểm tra xác nhận hiểu biết): Trước khi người bệnh ra về, nhân viên y tế yêu cầu người bệnh chỉ vào phiếu và nhắc lại thứ tự, liều lượng sử dụng từng loại thuốc bôi để kịp thời hiệu chỉnh các điểm chưa hiểu rõ.\n• Giải pháp 4 (Phối hợp chuyên môn dược lâm sàng kiểm soát an toàn tương tác): Dược sĩ lâm sàng rà soát sự tương thích giữa thuốc bôi điều trị và các sản phẩm dưỡng ẩm, chống nắng, phòng ngừa phản ứng kích ứng chéo.\n• Giải pháp 5 (Đánh giá hiệu quả, đo lường đối chứng số liệu Gemba và cải tiến liên tục): Tổ chức khảo sát định kỳ trên 20–30 người bệnh sau can thiệp để đánh giá sự chuyển biến về tỷ lệ tuân thủ và mức độ hài lòng.",
      "planImplementation": "Khu vực: - a) Khu vực và đối tượng áp dụng thử nghiệm: Thực hiện thử nghiệm tại Phòng khám Da liễu A102 và Bộ phận Chăm sóc da tầng 2 nhà R — Bệnh viện Đa khoa Hùng Vương. Đối tượng áp dụng gồm người bệnh mụn trứng cá điều trị ngoại trú và nhân viên y tế Khoa Da liễu – Thẩm mỹ.\nThời gian: Từ ngày 10 tháng 09 năm 2026 đến ngày 30 tháng 09 năm 2026.\nSản phẩm đầu ra: 01 Phiếu hướng dẫn quy trình chăm sóc da tại nhà in màu; 01 Bảng kiểm 5 đúng hướng dẫn thuốc bôi; Báo cáo số liệu đo lường đối chứng Trước – Sau can thiệp; Báo cáo Nghiệm thu A3 hoàn chỉnh.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại KHOA DA LIỄU - THẨM MỸ; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "**Phương thức hướng dẫn truyền thống phụ thuộc hoàn toàn vào tư vấn miệng:** Nhân viên y tế chủ yếu dặn dò bằng lời nói trong thời gian khám ngắn, thiếu tài liệu hướng dẫn trực quan cầm tay mang về nhà. Lượng thông tin nhiều khiến người bệnh khó ghi nhớ hết các lưu ý quan trọng.\n• **Người bệnh khó nhớ và nhầm lẫn lượng bôi, thứ tự:** Do các tuýp thuốc có bao bì tương tự, người bệnh thường bôi sai liều lượng (35% ước lượng sai), nhầm lẫn thứ tự bôi (40% đảo lộn thứ tự lỏng - đặc) hoặc bôi lan vào vùng da nhạy cảm quanh mắt và miệng.\n• **Nguy cơ mất an toàn và giảm hiệu quả lâm sàng:** Bôi sai cách dẫn đến kích ứng da, đỏ rát, bong tróc hoặc điều trị kém đáp ứng; khoảng 25% người bệnh phải gọi điện thoại hỏi lại nhân viên y tế, gây lo âu và làm giảm sự yên tâm, tin tưởng.\n• **Chưa có công cụ kiểm soát và khép kín vòng tư vấn:** Khoa chưa ban hành Bảng kiểm 5 đúng chuẩn hóa và chưa có bước kiểm tra xác nhận mức độ hiểu biết (yêu cầu người bệnh nhắc lại và chỉ rõ liều lượng) trước khi ra về.\n• **Khảo sát Gemba ban đầu trên 20 người bệnh:** 70,0% nhận biết đúng tên thuốc; 65,0% ước lượng đúng lượng bôi; 65,0% đúng thời điểm; 90,0% đúng vị trí; 60,0% đúng thứ tự; chỉ 45,0% tuân thủ đúng đủ cả 5 tiêu chí cốt lõi.",
      "smartGoal": "• Tỷ lệ người bệnh sử dụng thuốc bôi đúng đủ 5 tiêu chí: Hiện trạng 45,0% (9/20 người bệnh) ➔ Cam kết đạt Đạt ≥ 80,0% người bệnh\n• Tỷ lệ người bệnh được cấp Phiếu hướng dẫn chăm sóc da: Hiện trạng 0,0% (chưa có phiếu) ➔ Cam kết đạt Đạt 100,0% người bệnh\n• Tỷ lệ lượt tư vấn được kiểm soát bằng Bảng kiểm 5 đúng: Hiện trạng 0,0% (chưa áp dụng) ➔ Cam kết đạt Đạt 100,0% lượt tư vấn\n• Tỷ lệ người bệnh được kiểm tra xác nhận nhắc lại đúng: Hiện trạng Chưa kiểm soát quy trình ➔ Cam kết đạt Đạt ≥ 85,0% người bệnh\n• Tỷ lệ người bệnh gọi điện hỏi lại do dùng sai thuốc bôi: Hiện trạng Khoảng 25,0% ➔ Cam kết đạt Giảm xuống ≤ 5,0%",
      "rootCause": "Tại sao 1: Tại sao người bệnh mụn trứng cá hay bị kích ứng da hoặc tái phát bùng mụn? ➔ Do người bệnh bôi thuốc sai liều lượng, sai thứ tự các bước và quên bôi kem chống nắng bảo vệ da.\nTại sao 2: Tại sao người bệnh lại bôi thuốc không đúng phác đồ tại nhà? ➔ Do đơn thuốc gồm nhiều sản phẩm đặc trị nhưng bác sĩ/điều dưỡng chỉ dặn dò bằng miệng trong thời gian khám ngắn.\nTại sao 3: Tại sao người bệnh không nhớ rõ lời dặn sau khi về nhà? ➔ Do không có tài liệu hướng dẫn trực quan cầm tay hoặc bảng kiểm các bước bôi thuốc sáng - tối rõ ràng.\nTại sao 4: Tại sao chưa có công cụ kiểm soát việc tuân thủ phác đồ tại nhà? ➔ Do khoa chưa chuẩn hóa bộ công cụ giáo dục sức khỏe và bảng kiểm 5 Đúng dành riêng cho người bệnh da liễu.\nTại sao 5 (Cốt lõi): Nguyên nhân gốc rễ ở hệ thống ➔ Hệ thống thiếu công cụ Bảng kiểm 5 Đúng kết hợp Phiếu hướng dẫn bôi thuốc trực quan và cơ chế kiểm tra chéo tuân thủ.",
      "resultsBeforeAfter": [
        {
          "metric": "Tỷ lệ người bệnh sử dụng thuốc bôi đúng đủ 5 tiêu chí",
          "before": "45,0% (9/20 người bệnh)",
          "after": "Đạt ≥ 80,0% người bệnh"
        },
        {
          "metric": "Tỷ lệ người bệnh được cấp Phiếu hướng dẫn chăm sóc da",
          "before": "0,0% (chưa có phiếu)",
          "after": "Đạt 100,0% người bệnh"
        },
        {
          "metric": "Tỷ lệ lượt tư vấn được kiểm soát bằng Bảng kiểm 5 đúng",
          "before": "0,0% (chưa áp dụng)",
          "after": "Đạt 100,0% lượt tư vấn"
        },
        {
          "metric": "Tỷ lệ người bệnh được kiểm tra xác nhận nhắc lại đúng",
          "before": "Chưa kiểm soát quy trình",
          "after": "Đạt ≥ 85,0% người bệnh"
        },
        {
          "metric": "Tỷ lệ người bệnh gọi điện hỏi lại do dùng sai thuốc bôi",
          "before": "Khoảng 25,0%",
          "after": "Giảm xuống ≤ 5,0%"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 96/100đ (ĐẠT LOẠI A (XUẤT SẮC — PHÊ DUYỆT THỬ NGHIỆM) |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại - a) Khu vực và đối tượng áp dụng thử nghiệm: Thực hiện thử nghiệm tại Phòng khám Da liễu A102 và Bộ phận Chăm sóc da tầng 2 nhà R — Bệnh viện Đa khoa Hùng Vương. Đối tượng áp dụng gồm người bệnh mụn trứng cá điều trị ngoại trú và nhân viên y tế Khoa Da liễu – Thẩm mỹ.",
        "time": "Từ ngày 10 tháng 09 năm 2026 đến ngày 30 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "ĐD. Hồ Thị Phương Thảo",
    "nhomTacGia": "ĐD. Hồ Thị Phương Thảo, BS. Dương Thu Huế, ĐD. Trần Thị Thanh Thảo, DS. Nguyễn Long Thành, ĐD. Vũ Thị Châu Anh",
    "diemBanDau": "96"
  },
  {
    "maDeTai": "KZ16-PKCM-01",
    "tenDeTai": "Cải tiến quy trình đón tiếp và khám chữa bệnh tại Phòng khám Đa khoa Hùng Vương Chân Mộng theo mô hình Kíp trực linh hoạt giờ cao điểm",
    "tenSanPham": "Cải tiến quy trình đón tiếp và khám chữa bệnh tại Phòng khám Đa khoa Hùng Vương Chân Mộng theo mô hình Kíp trực linh hoạt giờ cao điểm",
    "khoaPhong": "PHÒNG KHÁM ĐA KHOA HÙNG VƯƠNG CHÂN MỘNG",
    "khoaPhoiHop": "Tổ Quản lý Chất lượng và Bộ phận Chăm sóc Khách hàng",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 1: Tinh gọn quy trình, giảm thời gian chờ đợi và tối ưu hóa hiệu suất sử dụng nhân lực y tế (kết hợp Nhóm 2: An toàn người bệnh và nâng cao trải nghiệm khách hàng).",
    "tacGia": "BS. Nguyễn Đức Huỳnh",
    "authorsDetailed": [
      {
        "name": "BS. Nguyễn Đức Huỳnh",
        "title": "Bác sĩ Phụ trách Phòng khám",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)",
        "stt": "1",
        "hoTen": "BS. Nguyễn Đức Huỳnh",
        "chucVu": "Bác sĩ Phụ trách Phòng khám",
        "vaiTro": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "ĐD. Nguyễn Thị Thảo",
        "title": "Điều dưỡng trưởng Phòng khám",
        "role": "Thư ký đề án (Điều phối nhân lực)",
        "stt": "2",
        "hoTen": "ĐD. Nguyễn Thị Thảo",
        "chucVu": "Điều dưỡng trưởng Phòng khám",
        "vaiTro": "Thư ký đề án (Điều phối nhân lực)"
      },
      {
        "name": "BS. Lê Ngọc Dung",
        "title": "Bác sĩ Khám bệnh",
        "role": "Thành viên (Điều phối luồng khám)",
        "stt": "3",
        "hoTen": "BS. Lê Ngọc Dung",
        "chucVu": "Bác sĩ Khám bệnh",
        "vaiTro": "Thành viên (Điều phối luồng khám)"
      },
      {
        "name": "KTV. Nguyễn Văn Trung",
        "title": "Kỹ thuật viên Cận lâm sàng",
        "role": "Thành viên (Hỗ trợ xét nghiệm và chẩn đoán hình ảnh)",
        "stt": "4",
        "hoTen": "KTV. Nguyễn Văn Trung",
        "chucVu": "Kỹ thuật viên Cận lâm sàng",
        "vaiTro": "Thành viên (Hỗ trợ xét nghiệm và chẩn đoán hình ảnh)"
      },
      {
        "name": "CN. Trần Thị Mai",
        "title": "Nhân viên Chăm sóc Khách hàng",
        "role": "Thành viên (Đón tiếp và Phân luồng ban đầu)",
        "stt": "5",
        "hoTen": "CN. Trần Thị Mai",
        "chucVu": "Nhân viên Chăm sóc Khách hàng",
        "vaiTro": "Thành viên (Đón tiếp và Phân luồng ban đầu)"
      }
    ],
    "thucTrang": "Phòng khám Đa khoa Hùng Vương Chân Mộng là cơ sở khám chữa bệnh vệ tinh phục vụ lượng lớn người bệnh trên địa bàn huyện Đoan Hùng và các vùng lân cận. Do thói quen khám bệnh tập trung đầu giờ sáng và đầu giờ chiều, lưu lượng người bệnh biến động rất lớn giữa các khung giờ trong ngày, dẫn đến hiện tượng quá tải cục bộ tại các vị trí xung yếu trong khi khung giờ khác nhân lực chưa được tối ưu hóa.",
    "soLieuBanDau": [
      "**Lưu lượng người bệnh tập trung đông đột biến vào các khung giờ cao điểm:** Thường từ 07:30 – 10:30 sáng và 13:30 – 15:00 chiều, dẫn đến hiện tượng ùn ứ cục bộ tại khu vực Đón tiếp, buồng Khám nội, phòng Lấy mẫu xét nghiệm và buồng chụp Chẩn đoán hình ảnh.",
      "**Cơ chế phân bổ nhân sự tĩnh cứng nhắc theo ca làm việc:** Nhân sự được phân công cố định tại từng vị trí độc lập (ca sáng / ca chiều), thiếu cơ chế liên kết và điều động chéo; dẫn đến nghịch lý vừa có vị trí nhân viên làm việc quá tải, vừa có vị trí khung giờ thấp điểm dư thừa năng lực phục vụ.",
      "**Thời gian chờ đợi của người bệnh kéo dài và áp lực tâm lý gia tăng:** Khảo sát sơ bộ ghi nhận thời gian chờ khám trung bình vào giờ cao điểm lên tới 48 - 55 phút/người bệnh; tổng thời gian từ lúc đón tiếp đến khi hoàn tất dịch vụ khám và cận lâm sàng cơ bản kéo dài 85 - 95 phút, làm giảm chỉ số hài lòng người bệnh (PSI chỉ đạt 78.5% - 82.0%).",
      "**Tiềm ẩn nguy cơ sai sót chuyên môn do quá tải cục bộ:** Khi áp lực người bệnh dồn ứ cao điểm, nhân viên y tế dễ căng thẳng, tăng nguy cơ nhầm lẫn hành chính, sai sót dán nhãn ống nghiệm hoặc bỏ sót tư vấn hướng dẫn người bệnh.",
      "**Kết quả phân tích nguyên nhân gốc rễ (5 Whys):** Đơn vị thiếu công cụ điều tiết nhân sự cơ động theo làn sóng; chưa xác lập quy trình kích hoạt kíp hỗ trợ giải tỏa điểm nghẽn; thiếu bảng thông tin theo dõi thời gian thực tại hiện trường tiếp đón."
    ],
    "fiveWhys": [
      {
        "level": "Tại sao 1",
        "question": "Tại sao có hiện tượng ùn ứ cục bộ người bệnh tại Phòng khám Đa khoa Chân Mộng?",
        "answer": "Do lưu lượng người bệnh tập trung đột biến vào các khung giờ cao điểm đầu buổi sáng và đầu buổi chiều."
      },
      {
        "level": "Tại sao 2",
        "question": "Tại sao các buồng khám và khu vực đón tiếp bị quá tải cục bộ trong giờ cao điểm?",
        "answer": "Do kíp trực phân bổ nhân lực cố định theo ca trực thông thường, chưa có cơ chế điều động linh hoạt."
      },
      {
        "level": "Tại sao 3",
        "question": "Tại sao không tăng cường hỗ trợ nhân lực tức thì khi lưu lượng tăng vọt?",
        "answer": "Do chưa có quy trình kích hoạt \"Kíp trực linh hoạt giờ cao điểm\" và thiếu bảng phân luồng nhanh tại cửa đón tiếp."
      },
      {
        "level": "Tại sao 4",
        "question": "Tại sao nhân viên các vị trí chưa chủ động hỗ trợ chéo nhau?",
        "answer": "Do chưa chuẩn hóa mô hình làm việc đa nhiệm giữa điều dưỡng, kỹ thuật viên cận lâm sàng và chăm sóc khách hàng."
      },
      {
        "level": "Tại sao 5 (Cốt lõi)",
        "question": "Nguyên nhân gốc rễ ở hệ thống",
        "answer": "Quy trình vận hành thiếu kịch bản điều phối nhân lực động và công cụ phân luồng thông minh theo khung giờ cao điểm."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Thời gian chờ khám trung bình giờ cao điểm",
        "hienTrang": "48 - 55 phút / người bệnh",
        "mucTieu": "Rút ngắn xuống < 30 phút",
        "phuongPhap": "Bấm giờ thực tế luồng khám"
      },
      {
        "chiTieu": "Tổng thời gian khám và làm cận lâm sàng",
        "hienTrang": "85 - 95 phút / người bệnh",
        "mucTieu": "Rút ngắn xuống < 60 phút",
        "phuongPhap": "Tra cứu trên hệ thống phần mềm"
      },
      {
        "chiTieu": "Mức độ hài lòng của người bệnh (PSI)",
        "hienTrang": "78.5% - 82.0% hài lòng",
        "mucTieu": "Nâng cao đạt ≥ 90.0%",
        "phuongPhap": "Phiếu khảo sát hài lòng người bệnh"
      },
      {
        "chiTieu": "Tỷ lệ kích hoạt đúng Kíp hỗ trợ cao điểm",
        "hienTrang": "0% (chưa có quy trình)",
        "mucTieu": "Đạt 100% các ca cao điểm",
        "phuongPhap": "Sổ nhật ký theo dõi kíp trực"
      },
      {
        "chiTieu": "Tỷ lệ sai sót hành chính và nhầm lẫn cận lâm sàng",
        "hienTrang": "1.2% - 1.8% tổng số lượt",
        "mucTieu": "Triệt tiêu sai sót (0.0%)",
        "phuongPhap": "Báo cáo sự cố và kiểm soát chất lượng"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Xây dựng Cơ chế Kíp trực linh hoạt theo làn sóng): Thay vì duy trì cơ cấu vị trí tĩnh cứng nhắc, áp dụng mô hình phân bổ nhân sự theo làn sóng. Khung giờ bình thường duy trì Kíp nòng cốt để xử lý lượng người bệnh ổn định. Khung giờ cao điểm lập tức kích hoạt Kíp hỗ trợ cơ động gồm bác sĩ, điều dưỡng từ các bộ phận phụ trợ hoặc vị trí chưa bị ùn ứ tham gia giải tỏa tức thời các điểm nghẽn tại buồng khám và phòng cận lâm sàng.",
      "Giải pháp 2 (Chuẩn hóa Kế hoạch phân bổ nhân sự chi tiết theo 4 khung giờ vàng): (1) Khung giờ 07:00 – 07:30: Kíp mở đường đón tiếp sớm, phân loại ban đầu, phát số và chỉ định xét nghiệm nhanh; (2) Khung giờ 07:30 – 10:30 (Cao điểm 1): Kích hoạt toàn bộ Kíp trực linh hoạt, điều dưỡng CSKH hỗ trợ hướng dẫn tại sảnh và phụ trợ lấy máu xét nghiệm; (3) Khung giờ 10:30 – 11:30: Kíp hỗ trợ rút về tập trung trả kết quả, tư vấn sau khám và hoàn thiện bệnh án; (4) Khung giờ 13:30 – 15:00 (Cao điểm 2): Áp dụng cơ chế tương tự cho ca chiều.",
      "Giải pháp 3 (Quy chuẩn hóa Quy trình thao tác chuẩn và Bảng phân công điều phối): Ban hành Quy trình thao tác chuẩn (SOP) kích hoạt Kíp trực linh hoạt, quy định rõ quyền hạn điều phối của Trưởng kíp trực; xây dựng bảng phân công vị trí trực quan dán tại sảnh hành chính, bảo đảm phân quyền minh bạch và chống tình trạng đùn đẩy trách nhiệm.",
      "Giải pháp 4 (Chính sách đãi ngộ, ghi nhận động lực và công nghệ số hỗ trợ): Đề xuất chính sách ghi nhận điểm thi đua P3 và phụ cấp hỗ trợ linh hoạt cho nhân sự tham gia Kíp cơ động; ứng dụng Bảng điều khiển (Dashboard) theo dõi số lượng người bệnh chờ thời gian thực tại các phòng khám và triển khai kênh đặt lịch hẹn khám online qua ứng dụng bệnh viện."
    ],
    "phamVi": "- a) Khu vực và đối tượng áp dụng thử nghiệm: Toàn bộ khu vực Đón tiếp, Phòng khám nội, Phòng Xét nghiệm và Phòng Chẩn đoán hình ảnh tại PHÒNG KHÁM ĐA KHOA HÙNG VƯƠNG CHÂN MỘNG. Đối tượng áp dụng gồm toàn thể người bệnh đến khám ngoại trú và cán bộ nhân viên y tế tại phòng khám.",
    "thoiGian": "Từ ngày 12 tháng 09 năm 2026 đến ngày 25 tháng 09 năm 2026.",
    "sanPhamDauRa": "01 Quy trình vận hành Kíp trực linh hoạt giờ cao điểm; 01 Bảng phân bổ điều phối nhân sự theo 4 khung giờ vàng; Bộ số liệu khảo sát bấm giờ Gemba đối chứng trước - sau can thiệp; 01 Báo cáo Nghiệm thu A3 hoàn chỉnh.",
    "soHieuVanBan": "Số: 29/TB-QLCL-PKCM",
    "tongDiemThamDinh": 89,
    "xepLoaiThamDinh": "ĐẠT LOẠI B (CÓ ĐIỀU KIỆN — PHÊ DUYỆT THỬ NGHIỆM) |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "18 / 20",
        "nhanXet": "Tính cấp thiết rất cao. Phòng khám vệ tinh đối mặt với bài toán dao động lưu lượng người bệnh rất lớn giữa giờ cao điểm và thấp điểm. Mô hình phân bổ cố định gây ùn tắc tại đón tiếp, khám nội, xét nghiệm và lãng phí giờ thấp điểm. Ý tưởng kíp trực linh hoạt giải quyết trúng điểm nghẽn bức xúc."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "23 / 25",
        "nhanXet": "Tính khả thi tối ưu. Đề án tập trung tái cơ cấu và điều phối linh hoạt nguồn nhân lực sẵn có tại chỗ mà không làm phát sinh chi phí đầu tư mua sắm lớn. Phân chia 4 khung giờ vàng (07:00-07:30, 07:30-10:30, 10:30-11:30, 13:30-15:00) rất khoa học và thực tế."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "16 / 20",
        "nhanXet": "Ý tưởng mục tiêu rõ ràng (rút ngắn thời gian chờ dưới 30 phút, nâng tỷ lệ hài lòng lên ≥90%). Tuy nhiên, bản đăng ký gốc còn để trống số phút đo mốc hiện trạng ban đầu. Cần hoàn thiện đo mốc Gemba trong 03 ngày đầu thử nghiệm để chốt số liệu xuất phát điểm chính thức."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "14 / 15",
        "nhanXet": "Khả năng nhân rộng rất cao. Mô hình kíp trực linh hoạt theo làn sóng sau khi thử nghiệm thành công tại Chân Mộng có thể chuẩn hóa nhân rộng ngay cho Phòng khám Đa khoa Thanh Ba và Khoa Khám bệnh Bệnh viện Đa khoa Hùng Vương."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "18 / 20",
        "nhanXet": "Sáng tạo thực chứng xuất sắc. Chuyển đổi tư duy từ trực cố định sang trực cơ động theo làn sóng giúp giải tỏa áp lực cho nhân viên y tế giờ cao điểm, phòng ngừa triệt để các nguy cơ sai sót chuyên môn do quá tải."
      }
    ],
    "ketLuanQLCL": "1. Hội đồng Giám khảo và Tổ Quản lý Chất lượng phê duyệt Đề án Đạt Loại B (Có điều kiện) với 89/100 điểm, chính thức chấp thuận cho nhóm tác giả Phòng khám Đa khoa Hùng Vương Chân Mộng triển khai thử nghiệm thực tế Vòng 2 từ ngày 12/09/2026 đến ngày 25/09/2026.\r\n2. Điều kiện bắt buộc về đo lường Gemba: Nhóm tác giả phải bấm giờ khảo sát tối thiểu 30 - 50 lượt người bệnh trong khung giờ cao điểm (07:30 - 10:30 và 13:30 - 15:00) trong 03 ngày đầu thực nghiệm (12/09 - 15/09/2026) để chốt số liệu xuất phát điểm thật (Baseline) vào Sổ nhật ký đo lường.\r\n3. Về quy chế chuyên môn và thao tác chuẩn: Ban hành Quy trình thao tác chuẩn (SOP) Kíp trực linh hoạt; quy định rõ tiêu chí kích hoạt và thẩm quyền của Trưởng kíp trực; nghiêm cấm việc điều động nhân sự làm cắt xén quy trình kỹ thuật chuyên môn.\r\n4. Rà soát chuẩn hóa văn phong và thuật ngữ: Thay thế 100% các từ ngoại lai (Wave Scheduling, Buffer Team, Core Team) bằng các thuật ngữ tiếng Việt chuẩn mực (Kíp nòng cốt, Kíp hỗ trợ cơ động, Phân bổ theo làn sóng); điều chỉnh sai sót văn bản mộc.\r\n5. Hoàn thiện Đề cương A3 và Báo cáo nghiệm thu: Cập nhật đầy đủ kết quả đo lường đối chứng trước - sau can thiệp và hoàn thiện Báo cáo A3 gửi về Tổ QLCL trước ngày 25/09/2026 để chuẩn bị cho Vòng chung kết.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-PKCM-01 02. Bản Đăng ký Sau Hiệu chỉnh PKĐK Chân Mộng BS. Nguyễn Đức Huỳnh.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 10010
      },
      {
        "fileName": "KZ16-PKCM-01 03. Biên bản Thẩm định PKĐK Chân Mộng BS. Nguyễn Đức Huỳnh.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 6149
      },
      {
        "fileName": "KZ16-PKCM-01 04. Đề cương A3 Triển khai Thực nghiệm PKĐK Chân Mộng BS. Nguyễn Đức Huỳnh.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 7914
      }
    ],
    "quickSummary": {
      "idea": "Cải tiến quy trình đón tiếp và khám chữa bệnh tại Phòng khám Đa khoa Hùng Vương Chân Mộng theo mô hình Kíp trực linh hoạt giờ cao điểm",
      "painPoints": [
        "**Lưu lượng người bệnh tập trung đông đột biến vào các khung giờ cao điểm:** Thường từ 07:30 – 10:30 sáng và 13:30 – 15:00 chiều, dẫn đến hiện tượng ùn ứ cục bộ tại khu vực Đón tiếp, buồng Khám nội, phòng Lấy mẫu xét nghiệm và buồng chụp Chẩn đoán hình ảnh.",
        "**Cơ chế phân bổ nhân sự tĩnh cứng nhắc theo ca làm việc:** Nhân sự được phân công cố định tại từng vị trí độc lập (ca sáng / ca chiều), thiếu cơ chế liên kết và điều động chéo; dẫn đến nghịch lý vừa có vị trí nhân viên làm việc quá tải, vừa có vị trí khung giờ thấp điểm dư thừa năng lực phục vụ.",
        "**Thời gian chờ đợi của người bệnh kéo dài và áp lực tâm lý gia tăng:** Khảo sát sơ bộ ghi nhận thời gian chờ khám trung bình vào giờ cao điểm lên tới 48 - 55 phút/người bệnh; tổng thời gian từ lúc đón tiếp đến khi hoàn tất dịch vụ khám và cận lâm sàng cơ bản kéo dài 85 - 95 phút, làm giảm chỉ số hài lòng người bệnh (PSI chỉ đạt 78.5% - 82.0%)."
      ],
      "solutions": [
        "Giải pháp 1 (Xây dựng Cơ chế Kíp trực linh hoạt theo làn sóng): Thay vì duy trì cơ cấu vị trí tĩnh cứng nhắc, áp dụng mô hình phân bổ nhân sự theo làn sóng. Khung giờ bình thường duy trì Kíp nòng cốt để xử lý lượng người bệnh ổn định. Khung giờ cao điểm lập tức kích hoạt Kíp hỗ trợ cơ động gồm bác sĩ, điều dưỡng từ các bộ phận phụ trợ hoặc vị trí chưa bị ùn ứ tham gia giải tỏa tức thời các điểm nghẽn tại buồng khám và phòng cận lâm sàng.",
        "Giải pháp 2 (Chuẩn hóa Kế hoạch phân bổ nhân sự chi tiết theo 4 khung giờ vàng): (1) Khung giờ 07:00 – 07:30: Kíp mở đường đón tiếp sớm, phân loại ban đầu, phát số và chỉ định xét nghiệm nhanh; (2) Khung giờ 07:30 – 10:30 (Cao điểm 1): Kích hoạt toàn bộ Kíp trực linh hoạt, điều dưỡng CSKH hỗ trợ hướng dẫn tại sảnh và phụ trợ lấy máu xét nghiệm; (3) Khung giờ 10:30 – 11:30: Kíp hỗ trợ rút về tập trung trả kết quả, tư vấn sau khám và hoàn thiện bệnh án; (4) Khung giờ 13:30 – 15:00 (Cao điểm 2): Áp dụng cơ chế tương tự cho ca chiều.",
        "Giải pháp 3 (Quy chuẩn hóa Quy trình thao tác chuẩn và Bảng phân công điều phối): Ban hành Quy trình thao tác chuẩn (SOP) kích hoạt Kíp trực linh hoạt, quy định rõ quyền hạn điều phối của Trưởng kíp trực; xây dựng bảng phân công vị trí trực quan dán tại sảnh hành chính, bảo đảm phân quyền minh bạch và chống tình trạng đùn đẩy trách nhiệm."
      ],
      "keyMetrics": [
        {
          "label": "Thời gian chờ khám trung bình giờ cao ...",
          "before": "48 - 55 phút / người bệnh",
          "after": "Rút ngắn xuống < 30 phút",
          "note": "Bấm giờ thực tế luồng khám"
        },
        {
          "label": "Tổng thời gian khám và làm cận lâm sàng",
          "before": "85 - 95 phút / người bệnh",
          "after": "Rút ngắn xuống < 60 phút",
          "note": "Tra cứu trên hệ thống phần mềm"
        },
        {
          "label": "Mức độ hài lòng của người bệnh (PSI)",
          "before": "78.5% - 82.0% hài lòng",
          "after": "Nâng cao đạt ≥ 90.0%",
          "note": "Phiếu khảo sát hài lòng người bệnh"
        },
        {
          "label": "Tỷ lệ kích hoạt đúng Kíp hỗ trợ cao điểm",
          "before": "0% (chưa có quy trình)",
          "after": "Đạt 100% các ca cao điểm",
          "note": "Sổ nhật ký theo dõi kíp trực"
        }
      ]
    },
    "a3Report": {
      "title": "Cải tiến quy trình đón tiếp và khám chữa bệnh tại Phòng khám Đa khoa Hùng Vương Chân Mộng theo mô hình Kíp trực linh hoạt giờ cao điểm",
      "department": "PHÒNG KHÁM ĐA KHOA HÙNG VƯƠNG CHÂN MỘNG",
      "leader": "BS. Nguyễn Đức Huỳnh",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Phòng khám Đa khoa Hùng Vương Chân Mộng là cơ sở khám chữa bệnh vệ tinh phục vụ lượng lớn người bệnh trên địa bàn huyện Đoan Hùng và các vùng lân cận. Do thói quen khám bệnh tập trung đầu giờ sáng và đầu giờ chiều, lưu lượng người bệnh biến động rất lớn giữa các khung giờ trong ngày, dẫn đến hiện tượng quá tải cục bộ tại các vị trí xung yếu trong khi khung giờ khác nhân lực chưa được tối ưu hóa.",
      "currentCondition": "**Lưu lượng người bệnh tập trung đông đột biến vào các khung giờ cao điểm:** Thường từ 07:30 – 10:30 sáng và 13:30 – 15:00 chiều, dẫn đến hiện tượng ùn ứ cục bộ tại khu vực Đón tiếp, buồng Khám nội, phòng Lấy mẫu xét nghiệm và buồng chụp Chẩn đoán hình ảnh.\n• **Cơ chế phân bổ nhân sự tĩnh cứng nhắc theo ca làm việc:** Nhân sự được phân công cố định tại từng vị trí độc lập (ca sáng / ca chiều), thiếu cơ chế liên kết và điều động chéo; dẫn đến nghịch lý vừa có vị trí nhân viên làm việc quá tải, vừa có vị trí khung giờ thấp điểm dư thừa năng lực phục vụ.\n• **Thời gian chờ đợi của người bệnh kéo dài và áp lực tâm lý gia tăng:** Khảo sát sơ bộ ghi nhận thời gian chờ khám trung bình vào giờ cao điểm lên tới 48 - 55 phút/người bệnh; tổng thời gian từ lúc đón tiếp đến khi hoàn tất dịch vụ khám và cận lâm sàng cơ bản kéo dài 85 - 95 phút, làm giảm chỉ số hài lòng người bệnh (PSI chỉ đạt 78.5% - 82.0%).\n• **Tiềm ẩn nguy cơ sai sót chuyên môn do quá tải cục bộ:** Khi áp lực người bệnh dồn ứ cao điểm, nhân viên y tế dễ căng thẳng, tăng nguy cơ nhầm lẫn hành chính, sai sót dán nhãn ống nghiệm hoặc bỏ sót tư vấn hướng dẫn người bệnh.\n• **Kết quả phân tích nguyên nhân gốc rễ (5 Whys):** Đơn vị thiếu công cụ điều tiết nhân sự cơ động theo làn sóng; chưa xác lập quy trình kích hoạt kíp hỗ trợ giải tỏa điểm nghẽn; thiếu bảng thông tin theo dõi thời gian thực tại hiện trường tiếp đón.",
      "targetCondition": "• Thời gian chờ khám trung bình giờ cao điểm: Hiện trạng 48 - 55 phút / người bệnh ➔ Cam kết đạt Rút ngắn xuống < 30 phút\n• Tổng thời gian khám và làm cận lâm sàng: Hiện trạng 85 - 95 phút / người bệnh ➔ Cam kết đạt Rút ngắn xuống < 60 phút\n• Mức độ hài lòng của người bệnh (PSI): Hiện trạng 78.5% - 82.0% hài lòng ➔ Cam kết đạt Nâng cao đạt ≥ 90.0%\n• Tỷ lệ kích hoạt đúng Kíp hỗ trợ cao điểm: Hiện trạng 0% (chưa có quy trình) ➔ Cam kết đạt Đạt 100% các ca cao điểm\n• Tỷ lệ sai sót hành chính và nhầm lẫn cận lâm sàng: Hiện trạng 1.2% - 1.8% tổng số lượt ➔ Cam kết đạt Triệt tiêu sai sót (0.0%)",
      "rootCauseAnalysis": "Tại sao 1: Tại sao có hiện tượng ùn ứ cục bộ người bệnh tại Phòng khám Đa khoa Chân Mộng? ➔ Do lưu lượng người bệnh tập trung đột biến vào các khung giờ cao điểm đầu buổi sáng và đầu buổi chiều.\nTại sao 2: Tại sao các buồng khám và khu vực đón tiếp bị quá tải cục bộ trong giờ cao điểm? ➔ Do kíp trực phân bổ nhân lực cố định theo ca trực thông thường, chưa có cơ chế điều động linh hoạt.\nTại sao 3: Tại sao không tăng cường hỗ trợ nhân lực tức thì khi lưu lượng tăng vọt? ➔ Do chưa có quy trình kích hoạt \"Kíp trực linh hoạt giờ cao điểm\" và thiếu bảng phân luồng nhanh tại cửa đón tiếp.\nTại sao 4: Tại sao nhân viên các vị trí chưa chủ động hỗ trợ chéo nhau? ➔ Do chưa chuẩn hóa mô hình làm việc đa nhiệm giữa điều dưỡng, kỹ thuật viên cận lâm sàng và chăm sóc khách hàng.\nTại sao 5 (Cốt lõi): Nguyên nhân gốc rễ ở hệ thống ➔ Quy trình vận hành thiếu kịch bản điều phối nhân lực động và công cụ phân luồng thông minh theo khung giờ cao điểm.",
      "countermeasures": "• Giải pháp 1 (Xây dựng Cơ chế Kíp trực linh hoạt theo làn sóng): Thay vì duy trì cơ cấu vị trí tĩnh cứng nhắc, áp dụng mô hình phân bổ nhân sự theo làn sóng. Khung giờ bình thường duy trì Kíp nòng cốt để xử lý lượng người bệnh ổn định. Khung giờ cao điểm lập tức kích hoạt Kíp hỗ trợ cơ động gồm bác sĩ, điều dưỡng từ các bộ phận phụ trợ hoặc vị trí chưa bị ùn ứ tham gia giải tỏa tức thời các điểm nghẽn tại buồng khám và phòng cận lâm sàng.\n• Giải pháp 2 (Chuẩn hóa Kế hoạch phân bổ nhân sự chi tiết theo 4 khung giờ vàng): (1) Khung giờ 07:00 – 07:30: Kíp mở đường đón tiếp sớm, phân loại ban đầu, phát số và chỉ định xét nghiệm nhanh; (2) Khung giờ 07:30 – 10:30 (Cao điểm 1): Kích hoạt toàn bộ Kíp trực linh hoạt, điều dưỡng CSKH hỗ trợ hướng dẫn tại sảnh và phụ trợ lấy máu xét nghiệm; (3) Khung giờ 10:30 – 11:30: Kíp hỗ trợ rút về tập trung trả kết quả, tư vấn sau khám và hoàn thiện bệnh án; (4) Khung giờ 13:30 – 15:00 (Cao điểm 2): Áp dụng cơ chế tương tự cho ca chiều.\n• Giải pháp 3 (Quy chuẩn hóa Quy trình thao tác chuẩn và Bảng phân công điều phối): Ban hành Quy trình thao tác chuẩn (SOP) kích hoạt Kíp trực linh hoạt, quy định rõ quyền hạn điều phối của Trưởng kíp trực; xây dựng bảng phân công vị trí trực quan dán tại sảnh hành chính, bảo đảm phân quyền minh bạch và chống tình trạng đùn đẩy trách nhiệm.\n• Giải pháp 4 (Chính sách đãi ngộ, ghi nhận động lực và công nghệ số hỗ trợ): Đề xuất chính sách ghi nhận điểm thi đua P3 và phụ cấp hỗ trợ linh hoạt cho nhân sự tham gia Kíp cơ động; ứng dụng Bảng điều khiển (Dashboard) theo dõi số lượng người bệnh chờ thời gian thực tại các phòng khám và triển khai kênh đặt lịch hẹn khám online qua ứng dụng bệnh viện.",
      "planImplementation": "Khu vực: - a) Khu vực và đối tượng áp dụng thử nghiệm: Toàn bộ khu vực Đón tiếp, Phòng khám nội, Phòng Xét nghiệm và Phòng Chẩn đoán hình ảnh tại PHÒNG KHÁM ĐA KHOA HÙNG VƯƠNG CHÂN MỘNG. Đối tượng áp dụng gồm toàn thể người bệnh đến khám ngoại trú và cán bộ nhân viên y tế tại phòng khám.\nThời gian: Từ ngày 12 tháng 09 năm 2026 đến ngày 25 tháng 09 năm 2026.\nSản phẩm đầu ra: 01 Quy trình vận hành Kíp trực linh hoạt giờ cao điểm; 01 Bảng phân bổ điều phối nhân sự theo 4 khung giờ vàng; Bộ số liệu khảo sát bấm giờ Gemba đối chứng trước - sau can thiệp; 01 Báo cáo Nghiệm thu A3 hoàn chỉnh.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại PHÒNG KHÁM ĐA KHOA HÙNG VƯƠNG CHÂN MỘNG; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "**Lưu lượng người bệnh tập trung đông đột biến vào các khung giờ cao điểm:** Thường từ 07:30 – 10:30 sáng và 13:30 – 15:00 chiều, dẫn đến hiện tượng ùn ứ cục bộ tại khu vực Đón tiếp, buồng Khám nội, phòng Lấy mẫu xét nghiệm và buồng chụp Chẩn đoán hình ảnh.\n• **Cơ chế phân bổ nhân sự tĩnh cứng nhắc theo ca làm việc:** Nhân sự được phân công cố định tại từng vị trí độc lập (ca sáng / ca chiều), thiếu cơ chế liên kết và điều động chéo; dẫn đến nghịch lý vừa có vị trí nhân viên làm việc quá tải, vừa có vị trí khung giờ thấp điểm dư thừa năng lực phục vụ.\n• **Thời gian chờ đợi của người bệnh kéo dài và áp lực tâm lý gia tăng:** Khảo sát sơ bộ ghi nhận thời gian chờ khám trung bình vào giờ cao điểm lên tới 48 - 55 phút/người bệnh; tổng thời gian từ lúc đón tiếp đến khi hoàn tất dịch vụ khám và cận lâm sàng cơ bản kéo dài 85 - 95 phút, làm giảm chỉ số hài lòng người bệnh (PSI chỉ đạt 78.5% - 82.0%).\n• **Tiềm ẩn nguy cơ sai sót chuyên môn do quá tải cục bộ:** Khi áp lực người bệnh dồn ứ cao điểm, nhân viên y tế dễ căng thẳng, tăng nguy cơ nhầm lẫn hành chính, sai sót dán nhãn ống nghiệm hoặc bỏ sót tư vấn hướng dẫn người bệnh.\n• **Kết quả phân tích nguyên nhân gốc rễ (5 Whys):** Đơn vị thiếu công cụ điều tiết nhân sự cơ động theo làn sóng; chưa xác lập quy trình kích hoạt kíp hỗ trợ giải tỏa điểm nghẽn; thiếu bảng thông tin theo dõi thời gian thực tại hiện trường tiếp đón.",
      "smartGoal": "• Thời gian chờ khám trung bình giờ cao điểm: Hiện trạng 48 - 55 phút / người bệnh ➔ Cam kết đạt Rút ngắn xuống < 30 phút\n• Tổng thời gian khám và làm cận lâm sàng: Hiện trạng 85 - 95 phút / người bệnh ➔ Cam kết đạt Rút ngắn xuống < 60 phút\n• Mức độ hài lòng của người bệnh (PSI): Hiện trạng 78.5% - 82.0% hài lòng ➔ Cam kết đạt Nâng cao đạt ≥ 90.0%\n• Tỷ lệ kích hoạt đúng Kíp hỗ trợ cao điểm: Hiện trạng 0% (chưa có quy trình) ➔ Cam kết đạt Đạt 100% các ca cao điểm\n• Tỷ lệ sai sót hành chính và nhầm lẫn cận lâm sàng: Hiện trạng 1.2% - 1.8% tổng số lượt ➔ Cam kết đạt Triệt tiêu sai sót (0.0%)",
      "rootCause": "Tại sao 1: Tại sao có hiện tượng ùn ứ cục bộ người bệnh tại Phòng khám Đa khoa Chân Mộng? ➔ Do lưu lượng người bệnh tập trung đột biến vào các khung giờ cao điểm đầu buổi sáng và đầu buổi chiều.\nTại sao 2: Tại sao các buồng khám và khu vực đón tiếp bị quá tải cục bộ trong giờ cao điểm? ➔ Do kíp trực phân bổ nhân lực cố định theo ca trực thông thường, chưa có cơ chế điều động linh hoạt.\nTại sao 3: Tại sao không tăng cường hỗ trợ nhân lực tức thì khi lưu lượng tăng vọt? ➔ Do chưa có quy trình kích hoạt \"Kíp trực linh hoạt giờ cao điểm\" và thiếu bảng phân luồng nhanh tại cửa đón tiếp.\nTại sao 4: Tại sao nhân viên các vị trí chưa chủ động hỗ trợ chéo nhau? ➔ Do chưa chuẩn hóa mô hình làm việc đa nhiệm giữa điều dưỡng, kỹ thuật viên cận lâm sàng và chăm sóc khách hàng.\nTại sao 5 (Cốt lõi): Nguyên nhân gốc rễ ở hệ thống ➔ Quy trình vận hành thiếu kịch bản điều phối nhân lực động và công cụ phân luồng thông minh theo khung giờ cao điểm.",
      "resultsBeforeAfter": [
        {
          "metric": "Thời gian chờ khám trung bình giờ cao điểm",
          "before": "48 - 55 phút / người bệnh",
          "after": "Rút ngắn xuống < 30 phút"
        },
        {
          "metric": "Tổng thời gian khám và làm cận lâm sàng",
          "before": "85 - 95 phút / người bệnh",
          "after": "Rút ngắn xuống < 60 phút"
        },
        {
          "metric": "Mức độ hài lòng của người bệnh (PSI)",
          "before": "78.5% - 82.0% hài lòng",
          "after": "Nâng cao đạt ≥ 90.0%"
        },
        {
          "metric": "Tỷ lệ kích hoạt đúng Kíp hỗ trợ cao điểm",
          "before": "0% (chưa có quy trình)",
          "after": "Đạt 100% các ca cao điểm"
        },
        {
          "metric": "Tỷ lệ sai sót hành chính và nhầm lẫn cận lâm sàng",
          "before": "1.2% - 1.8% tổng số lượt",
          "after": "Triệt tiêu sai sót (0.0%)"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 89/100đ (ĐẠT LOẠI B (CÓ ĐIỀU KIỆN — PHÊ DUYỆT THỬ NGHIỆM) |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại - a) Khu vực và đối tượng áp dụng thử nghiệm: Toàn bộ khu vực Đón tiếp, Phòng khám nội, Phòng Xét nghiệm và Phòng Chẩn đoán hình ảnh tại PHÒNG KHÁM ĐA KHOA HÙNG VƯƠNG CHÂN MỘNG. Đối tượng áp dụng gồm toàn thể người bệnh đến khám ngoại trú và cán bộ nhân viên y tế tại phòng khám.",
        "time": "Từ ngày 12 tháng 09 năm 2026 đến ngày 25 tháng 09 năm 2026.",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "BS. Nguyễn Đức Huỳnh",
    "nhomTacGia": "BS. Nguyễn Đức Huỳnh, ĐD. Nguyễn Thị Thảo, BS. Lê Ngọc Dung, KTV. Nguyễn Văn Trung, CN. Trần Thị Mai",
    "diemBanDau": "89"
  },
  {
    "maDeTai": "KZ16-PKSD-01",
    "tenDeTai": "Nâng cao trải nghiệm khách hàng bằng sơ đồ phòng khám 3D kết hợp bảng hướng dẫn tại cửa các phòng",
    "tenSanPham": "Nâng cao trải nghiệm khách hàng bằng sơ đồ phòng khám 3D kết hợp bảng hướng dẫn tại cửa các phòng",
    "khoaPhong": "PHÒNG KHÁM ĐA KHOA HÙNG VƯƠNG SƠN DƯƠNG",
    "khoaPhoiHop": "",
    "nhanh": "Nhánh B",
    "chuDe": "Nhóm 4: Nâng cao trải nghiệm và sự hài lòng của người bệnh",
    "tacGia": "BS. Nguyễn Văn Thiết",
    "authorsDetailed": [
      {
        "name": "BS. Nguyễn Văn Thiết",
        "title": "Giám đốc Phòng khám Đa khoa Hùng Vương Sơn Dương",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)",
        "stt": "1",
        "hoTen": "BS. Nguyễn Văn Thiết",
        "chucVu": "Giám đốc Phòng khám Đa khoa Hùng Vương Sơn Dương",
        "vaiTro": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "CN. Nguyễn Thị Hồng Diệp",
        "title": "Nhân viên Phòng khám Đa khoa Hùng Vương Sơn Dương",
        "role": "Thư ký đề án (Theo dõi số liệu)",
        "stt": "2",
        "hoTen": "CN. Nguyễn Thị Hồng Diệp",
        "chucVu": "Nhân viên Phòng khám Đa khoa Hùng Vương Sơn Dương",
        "vaiTro": "Thư ký đề án (Theo dõi số liệu)"
      },
      {
        "name": "CN. Phạm Triệu Minh Quang",
        "title": "Nhân viên Phòng khám Đa khoa Hùng Vương Sơn Dương",
        "role": "Thành viên (Khảo sát và Lắp đặt)",
        "stt": "3",
        "hoTen": "CN. Phạm Triệu Minh Quang",
        "chucVu": "Nhân viên Phòng khám Đa khoa Hùng Vương Sơn Dương",
        "vaiTro": "Thành viên (Khảo sát và Lắp đặt)"
      },
      {
        "name": "CN. Tống Khánh Hưng",
        "title": "Nhân viên Phòng khám Đa khoa Hùng Vương Sơn Dương",
        "role": "Thành viên (Thiết kế đồ họa 3D và Checklist)",
        "stt": "4",
        "hoTen": "CN. Tống Khánh Hưng",
        "chucVu": "Nhân viên Phòng khám Đa khoa Hùng Vương Sơn Dương",
        "vaiTro": "Thành viên (Thiết kế đồ họa 3D và Checklist)"
      }
    ],
    "thucTrang": "Tại Phòng khám Đa khoa Hùng Vương Sơn Dương, người bệnh ngoại trú khi đến khám phải di chuyển qua nhiều khu vực chức năng liên hoàn (khu tiếp đón, sảnh chờ, các phòng khám chuyên khoa, phòng lấy mẫu xét nghiệm, chẩn đoán hình ảnh - X-quang/siêu âm, quầy thu ngân và nhà thuốc). Hướng dẫn hiện có đã quy định người bệnh ngồi chờ trước phòng khám, không cần nộp phiếu vào phòng và chờ gọi tên; tuy nhiên đơn vị chưa có sơ đồ tổng thể trực quan và bảng hướng dẫn thống nhất tại cửa từng phòng để người bệnh tự xác định nơi đến và bước tiếp theo. Thực trạng này dẫn đến việc người bệnh thường xuyên phải hỏi đường, đi nhầm phòng hoặc quay lại nhiều lần; đồng thời làm tăng thời gian hướng dẫn lặp lại của nhân viên tiếp đón và điều dưỡng, gây phân tán công tác chuyên môn.",
    "soLieuBanDau": [
      "Số lượt người bệnh phải dừng lại hỏi đường hoặc đi nhầm phòng: Dự kiến đo lường trên 100 lượt người bệnh ngoại trú trong 02 ngày đầu triển khai (mốc Baseline T0 trước khi lắp đặt sơ đồ 3D).",
      "Thời gian trung bình người bệnh tự tìm đến đúng phòng cận lâm sàng/thanh toán: Khảo sát bấm giờ thực tế trên 30 ca bệnh ngoại trú.",
      "Tỷ lệ người bệnh đánh giá mức độ tìm đường tại phòng khám là \"Dễ\" hoặc \"Rất dễ\": Khảo sát đầu vào qua phiếu đánh giá nhanh trải nghiệm người bệnh.",
      "Tổ QLCL yêu cầu nhóm tác giả hoàn thành việc đo lường mốc Baseline T0 chính thức trước ngày 16/09/2026 (trước khi lắp đặt sơ đồ 3D) để làm căn cứ đối chiếu trước và sau cải tiến."
    ],
    "fiveWhys": [
      {
        "level": "Why 1 (Hiện trạng)",
        "question": "Tại sao người bệnh ngoại trú đến khám tại Phòng khám Sơn Dương thường xuyên phải hỏi đường, đi nhầm phòng hoặc quay lại nhiều lần?",
        "answer": "Vì người bệnh chưa nắm được tổng thể không gian và lộ trình di chuyển giữa các phòng khám, xét nghiệm, CĐHA và nhà thuốc."
      },
      {
        "level": "Why 2 (Nguyên nhân trực tiếp)",
        "question": "Tại sao người bệnh gặp khó khăn trong việc tự định hướng hành trình khám chữa bệnh?",
        "answer": "Vì tại sảnh chờ và khu tiếp đón trung tâm chưa có sơ đồ không gian trực quan mô phỏng đầy đủ các vị trí phục vụ."
      },
      {
        "level": "Why 3 (Phương tiện chỉ dẫn)",
        "question": "Tại sao người bệnh đã đến gần khu vực phòng khám vẫn phải bước vào hỏi nhân viên y tế?",
        "answer": "Vì biển tên phòng truyền thống chỉ ghi danh xưng khoa/phòng, chưa có bảng hướng dẫn hành vi (đây là đâu, người bệnh cần làm gì và bước tiếp theo di chuyển đi đâu)."
      },
      {
        "level": "Why 4 (Quy chuẩn thao tác)",
        "question": "Tại sao chưa có hệ thống quản trị trực quan đồng bộ tại các điểm chạm phục vụ?",
        "answer": "Vì thói quen vận hành trước đây chủ yếu dựa vào việc hướng dẫn bằng lời nói của nhân viên tiếp đón và điều dưỡng tại chỗ, gây phân tán thời gian chuyên môn."
      },
      {
        "level": "Why 5 (Nguyên nhân gốc rễ)",
        "question": "NGUYÊN NHÂN CỐT LÕI: Thiếu hệ thống quản trị trực quan đồng bộ, bao gồm Sơ đồ không gian 3D tại sảnh tiếp đón kết hợp Bảng hướng dẫn hành vi tại cửa từng phòng chức năng.",
        "answer": "Cần thiết kế, lắp đặt Sơ đồ phòng khám 3D và Bảng hướng dẫn hành vi tại 100% điểm chạm ưu tiên để người bệnh tự định hướng dễ dàng."
      }
    ],
    "mucTieu": [
      {
        "chiTieu": "Tỷ lệ người bệnh phải hỏi đường hoặc đi nhầm",
        "hienTrang": "Đo Baseline T0 trên 100 lượt",
        "mucTieu": "Giảm ít nhất 35.0% so với Baseline",
        "phuongPhap": "Bảng kiểm quan sát luồng di chuyển tại sảnh"
      },
      {
        "chiTieu": "Tỷ lệ điểm chạm ưu tiên có sơ đồ 3D và bảng chỉ dẫn",
        "hienTrang": "0.0% (chưa triển khai)",
        "mucTieu": "Đạt 100% điểm chạm đúng chuẩn",
        "phuongPhap": "Checklist kiểm tra lắp đặt và nhận diện"
      },
      {
        "chiTieu": "Thời gian trung bình tự tìm đến đúng phòng",
        "hienTrang": "Bấm giờ Baseline T0",
        "mucTieu": "Rút ngắn ≥ 30% thời gian tìm đường",
        "phuongPhap": "Bấm giờ thực tế trên 30 lượt người bệnh"
      },
      {
        "chiTieu": "Mức độ hài lòng của người bệnh về tìm đường",
        "hienTrang": "Khảo sát đầu vào",
        "mucTieu": "Đạt ≥ 90.0% đánh giá Dễ/Rất dễ",
        "phuongPhap": "Phiếu khảo sát trải nghiệm tại quầy thuốc"
      }
    ],
    "giaiPhap": [
      "Giải pháp 1 (Khảo sát mặt bằng và chuẩn hóa luồng di chuyển): Tiến hành khảo sát toàn diện mặt bằng, hành trình người bệnh và các điểm nút giao thông dễ gây nhầm lẫn; thống nhất tên gọi các khu vực và nội dung hướng dẫn ngắn gọn, dễ hiểu.",
      "Giải pháp 2 (Thiết kế và lắp đặt Sơ đồ phòng khám 3D tổng thể): Ứng dụng thiết kế đồ họa 3D trực quan; sản xuất và lắp đặt 01 bảng sơ đồ 3D kích thước lớn tại sảnh tiếp đón trung tâm, mô phỏng rõ nét toàn bộ các điểm phục vụ khám chữa bệnh chính.",
      "Giải pháp 3 (Chuẩn hóa hệ thống Bảng hướng dẫn tại cửa các phòng chức năng): Thiết kế và lắp đặt bảng hướng dẫn hành vi tại cửa 100% phòng khám và khu vực cận lâm sàng, nêu rõ 3 nội dung trọng tâm: Đây là đâu? - Cần làm gì? - Bước tiếp theo đi đâu?.",
      "Giải pháp 4 (Tập huấn nhân viên và duy trì quản trị trực quan): Tổ chức đào tạo nội bộ cho toàn thể nhân viên tiếp đón, điều dưỡng và bảo vệ sử dụng cùng thông điệp hướng dẫn thống nhất; ban hành checklist kiểm tra định kỳ hàng ngày để duy trì chất lượng biển bảng."
    ],
    "phamVi": "Triển khai thử nghiệm tại toàn bộ các khu vực khám ngoại trú, cận lâm sàng, thu ngân và nhà thuốc thuộc Phòng khám Đa khoa Hùng Vương Sơn Dương.",
    "thoiGian": "Từ ngày 15 tháng 09 năm 2026 đến ngày 29 tháng 09 năm 2026 (tổng thời gian 14 ngày).",
    "sanPhamDauRa": "01 Sơ đồ phòng khám 3D tổng thể; Hệ thống bảng hướng dẫn tại cửa các phòng; Checklist kiểm tra lắp đặt; Phiếu khảo sát trải nghiệm người bệnh; Bảng số liệu đối chiếu trước và sau cải tiến; Báo cáo Nghiệm thu A3 hoàn chỉnh.",
    "soHieuVanBan": "Số: 24/TB-QLCL-PKSD",
    "tongDiemThamDinh": 86,
    "xepLoaiThamDinh": "ĐẠT LOẠI B (PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM CÓ ĐIỀU KIỆN) |",
    "criteria": [
      {
        "stt": "1",
        "tieuChi": "Tính cấp thiết và thực trạng vấn đề tại khoa/phòng",
        "diem": "18 / 20",
        "nhanXet": "Vấn đề người bệnh bỡ ngỡ, lúng túng trong tìm đường tại cơ sở khám bệnh mới rất cấp thiết, trực tiếp ảnh hưởng đến trải nghiệm và sự hài lòng của khách hàng."
      },
      {
        "stt": "2",
        "tieuChi": "Tính khả thi và giải pháp cải tiến",
        "diem": "23 / 25",
        "nhanXet": "Giải pháp ứng dụng sơ đồ 3D kết hợp bảng hướng dẫn cửa phòng có tính khả thi rất cao, chi phí sản xuất thấp, thi công nhanh chóng trong 3-5 ngày."
      },
      {
        "stt": "3",
        "tieuChi": "Hiệu quả đo lường và khả năng cải thiện",
        "diem": "17 / 20",
        "nhanXet": "Kỳ vọng giảm mạnh lãng phí đi lại (Motion waste) và giảm thời gian hỏi đường lặp lại của nhân viên. Cần đo mốc Baseline T0 nghiêm túc trên 100 lượt quan sát."
      },
      {
        "stt": "4",
        "tieuChi": "Khả năng chuẩn hóa và nhân rộng quy trình",
        "diem": "14 / 15",
        "nhanXet": "Mô hình quản trị trực quan 3D rất phù hợp để nhân rộng cho toàn bộ các phòng khám vệ tinh (Thanh Ba, Chân Mộng, Gia Cẩm) và các tầng nhà tại Bệnh viện Hùng Vương Phú Thọ."
      },
      {
        "stt": "5",
        "tieuChi": "Tính sáng tạo và an toàn người bệnh",
        "diem": "14 / 20",
        "nhanXet": "Ý tưởng kết hợp giữa Sơ đồ không gian 3D tổng thể tại sảnh và Bảng chỉ dẫn hành động cụ thể tại cửa từng phòng tạo nên giải pháp khép kín, hiện đại."
      }
    ],
    "ketLuanQLCL": "1. Phê duyệt Đề cương A3 cho nhóm tác giả Phòng khám Đa khoa Hùng Vương Sơn Dương để chính thức triển khai thử nghiệm thực tế đề án trong 14 ngày.\r\n2. Điều kiện bắt buộc trước ngày 16/09/2026: Nhóm tác giả phải hoàn thành đo lường mốc số liệu ban đầu (Baseline T0 trên 100 lượt người bệnh) trước khi lắp đặt sơ đồ 3D để làm căn cứ đối chiếu trước và sau cải tiến.\r\n3. Tổ QLCL sẽ cử cán bộ phối hợp, cung cấp biểu mẫu nhật ký theo dõi Gemba và hỗ trợ nghiệm thu Vòng Chung kết Hội thi Kaizen 16 Năm.",
    "documents": [
      {
        "fileName": "00 Tài liệu Minh chứng",
        "label": "00 Tài liệu Minh chứng",
        "type": "file",
        "size": 0
      },
      {
        "fileName": "KZ16-PKSD-01 02. Bản Đăng ký Sau Hiệu chỉnh Phòng khám Đa khoa Sơn Dương BS. Nguyễn Văn Thiết.md",
        "label": "Bản Đăng ký Đề án Sau Hiệu chỉnh (Mẫu 01)",
        "type": "registration",
        "size": 9932
      },
      {
        "fileName": "KZ16-PKSD-01 03. Biên bản Thẩm định Phòng khám Đa khoa Sơn Dương BS. Nguyễn Văn Thiết.md",
        "label": "Thông báo Kết quả Thẩm định Sơ bộ (Tổ QLCL)",
        "type": "appraisal",
        "size": 4475
      },
      {
        "fileName": "KZ16-PKSD-01 04. Đề cương A3 Triển khai Thực nghiệm Phòng khám Đa khoa Sơn Dương BS. Nguyễn Văn Thiết.md",
        "label": "Đề cương Kế hoạch Thi công A3 (PDCA)",
        "type": "outline",
        "size": 7865
      }
    ],
    "quickSummary": {
      "idea": "Nâng cao trải nghiệm khách hàng bằng sơ đồ phòng khám 3D kết hợp bảng hướng dẫn tại cửa các phòng",
      "painPoints": [
        "Số lượt người bệnh phải dừng lại hỏi đường hoặc đi nhầm phòng: Dự kiến đo lường trên 100 lượt người bệnh ngoại trú trong 02 ngày đầu triển khai (mốc Baseline T0 trước khi lắp đặt sơ đồ 3D).",
        "Thời gian trung bình người bệnh tự tìm đến đúng phòng cận lâm sàng/thanh toán: Khảo sát bấm giờ thực tế trên 30 ca bệnh ngoại trú.",
        "Tỷ lệ người bệnh đánh giá mức độ tìm đường tại phòng khám là \"Dễ\" hoặc \"Rất dễ\": Khảo sát đầu vào qua phiếu đánh giá nhanh trải nghiệm người bệnh."
      ],
      "solutions": [
        "Giải pháp 1 (Khảo sát mặt bằng và chuẩn hóa luồng di chuyển): Tiến hành khảo sát toàn diện mặt bằng, hành trình người bệnh và các điểm nút giao thông dễ gây nhầm lẫn; thống nhất tên gọi các khu vực và nội dung hướng dẫn ngắn gọn, dễ hiểu.",
        "Giải pháp 2 (Thiết kế và lắp đặt Sơ đồ phòng khám 3D tổng thể): Ứng dụng thiết kế đồ họa 3D trực quan; sản xuất và lắp đặt 01 bảng sơ đồ 3D kích thước lớn tại sảnh tiếp đón trung tâm, mô phỏng rõ nét toàn bộ các điểm phục vụ khám chữa bệnh chính.",
        "Giải pháp 3 (Chuẩn hóa hệ thống Bảng hướng dẫn tại cửa các phòng chức năng): Thiết kế và lắp đặt bảng hướng dẫn hành vi tại cửa 100% phòng khám và khu vực cận lâm sàng, nêu rõ 3 nội dung trọng tâm: Đây là đâu? - Cần làm gì? - Bước tiếp theo đi đâu?."
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ người bệnh phải hỏi đường hoặc đ...",
          "before": "Đo Baseline T0 trên 100 lượt",
          "after": "Giảm ít nhất 35.0% so với Baseline",
          "note": "Bảng kiểm quan sát luồng di chuyển tại sảnh"
        },
        {
          "label": "Tỷ lệ điểm chạm ưu tiên có sơ đồ 3D và...",
          "before": "0.0% (chưa triển khai)",
          "after": "Đạt 100% điểm chạm đúng chuẩn",
          "note": "Checklist kiểm tra lắp đặt và nhận diện"
        },
        {
          "label": "Thời gian trung bình tự tìm đến đúng p...",
          "before": "Bấm giờ Baseline T0",
          "after": "Rút ngắn ≥ 30% thời gian tìm đường",
          "note": "Bấm giờ thực tế trên 30 lượt người bệnh"
        },
        {
          "label": "Mức độ hài lòng của người bệnh về tìm ...",
          "before": "Khảo sát đầu vào",
          "after": "Đạt ≥ 90.0% đánh giá Dễ/Rất dễ",
          "note": "Phiếu khảo sát trải nghiệm tại quầy thuốc"
        }
      ]
    },
    "a3Report": {
      "title": "Nâng cao trải nghiệm khách hàng bằng sơ đồ phòng khám 3D kết hợp bảng hướng dẫn tại cửa các phòng",
      "department": "PHÒNG KHÁM ĐA KHOA HÙNG VƯƠNG SƠN DƯƠNG",
      "leader": "BS. Nguyễn Văn Thiết",
      "sponsor": "Tổ Quản lý Chất lượng — Phòng KHTH",
      "date": "Tháng 09/2026",
      "background": "Tại Phòng khám Đa khoa Hùng Vương Sơn Dương, người bệnh ngoại trú khi đến khám phải di chuyển qua nhiều khu vực chức năng liên hoàn (khu tiếp đón, sảnh chờ, các phòng khám chuyên khoa, phòng lấy mẫu xét nghiệm, chẩn đoán hình ảnh - X-quang/siêu âm, quầy thu ngân và nhà thuốc). Hướng dẫn hiện có đã quy định người bệnh ngồi chờ trước phòng khám, không cần nộp phiếu vào phòng và chờ gọi tên; tuy nhiên đơn vị chưa có sơ đồ tổng thể trực quan và bảng hướng dẫn thống nhất tại cửa từng phòng để người bệnh tự xác định nơi đến và bước tiếp theo. Thực trạng này dẫn đến việc người bệnh thường xuyên phải hỏi đường, đi nhầm phòng hoặc quay lại nhiều lần; đồng thời làm tăng thời gian hướng dẫn lặp lại của nhân viên tiếp đón và điều dưỡng, gây phân tán công tác chuyên môn.",
      "currentCondition": "Số lượt người bệnh phải dừng lại hỏi đường hoặc đi nhầm phòng: Dự kiến đo lường trên 100 lượt người bệnh ngoại trú trong 02 ngày đầu triển khai (mốc Baseline T0 trước khi lắp đặt sơ đồ 3D).\n• Thời gian trung bình người bệnh tự tìm đến đúng phòng cận lâm sàng/thanh toán: Khảo sát bấm giờ thực tế trên 30 ca bệnh ngoại trú.\n• Tỷ lệ người bệnh đánh giá mức độ tìm đường tại phòng khám là \"Dễ\" hoặc \"Rất dễ\": Khảo sát đầu vào qua phiếu đánh giá nhanh trải nghiệm người bệnh.\n• Tổ QLCL yêu cầu nhóm tác giả hoàn thành việc đo lường mốc Baseline T0 chính thức trước ngày 16/09/2026 (trước khi lắp đặt sơ đồ 3D) để làm căn cứ đối chiếu trước và sau cải tiến.",
      "targetCondition": "• Tỷ lệ người bệnh phải hỏi đường hoặc đi nhầm: Hiện trạng Đo Baseline T0 trên 100 lượt ➔ Cam kết đạt Giảm ít nhất 35.0% so với Baseline\n• Tỷ lệ điểm chạm ưu tiên có sơ đồ 3D và bảng chỉ dẫn: Hiện trạng 0.0% (chưa triển khai) ➔ Cam kết đạt Đạt 100% điểm chạm đúng chuẩn\n• Thời gian trung bình tự tìm đến đúng phòng: Hiện trạng Bấm giờ Baseline T0 ➔ Cam kết đạt Rút ngắn ≥ 30% thời gian tìm đường\n• Mức độ hài lòng của người bệnh về tìm đường: Hiện trạng Khảo sát đầu vào ➔ Cam kết đạt Đạt ≥ 90.0% đánh giá Dễ/Rất dễ",
      "rootCauseAnalysis": "Why 1 (Hiện trạng): Tại sao người bệnh ngoại trú đến khám tại Phòng khám Sơn Dương thường xuyên phải hỏi đường, đi nhầm phòng hoặc quay lại nhiều lần? ➔ Vì người bệnh chưa nắm được tổng thể không gian và lộ trình di chuyển giữa các phòng khám, xét nghiệm, CĐHA và nhà thuốc.\nWhy 2 (Nguyên nhân trực tiếp): Tại sao người bệnh gặp khó khăn trong việc tự định hướng hành trình khám chữa bệnh? ➔ Vì tại sảnh chờ và khu tiếp đón trung tâm chưa có sơ đồ không gian trực quan mô phỏng đầy đủ các vị trí phục vụ.\nWhy 3 (Phương tiện chỉ dẫn): Tại sao người bệnh đã đến gần khu vực phòng khám vẫn phải bước vào hỏi nhân viên y tế? ➔ Vì biển tên phòng truyền thống chỉ ghi danh xưng khoa/phòng, chưa có bảng hướng dẫn hành vi (đây là đâu, người bệnh cần làm gì và bước tiếp theo di chuyển đi đâu).\nWhy 4 (Quy chuẩn thao tác): Tại sao chưa có hệ thống quản trị trực quan đồng bộ tại các điểm chạm phục vụ? ➔ Vì thói quen vận hành trước đây chủ yếu dựa vào việc hướng dẫn bằng lời nói của nhân viên tiếp đón và điều dưỡng tại chỗ, gây phân tán thời gian chuyên môn.\nWhy 5 (Nguyên nhân gốc rễ): NGUYÊN NHÂN CỐT LÕI: Thiếu hệ thống quản trị trực quan đồng bộ, bao gồm Sơ đồ không gian 3D tại sảnh tiếp đón kết hợp Bảng hướng dẫn hành vi tại cửa từng phòng chức năng. ➔ Cần thiết kế, lắp đặt Sơ đồ phòng khám 3D và Bảng hướng dẫn hành vi tại 100% điểm chạm ưu tiên để người bệnh tự định hướng dễ dàng.",
      "countermeasures": "• Giải pháp 1 (Khảo sát mặt bằng và chuẩn hóa luồng di chuyển): Tiến hành khảo sát toàn diện mặt bằng, hành trình người bệnh và các điểm nút giao thông dễ gây nhầm lẫn; thống nhất tên gọi các khu vực và nội dung hướng dẫn ngắn gọn, dễ hiểu.\n• Giải pháp 2 (Thiết kế và lắp đặt Sơ đồ phòng khám 3D tổng thể): Ứng dụng thiết kế đồ họa 3D trực quan; sản xuất và lắp đặt 01 bảng sơ đồ 3D kích thước lớn tại sảnh tiếp đón trung tâm, mô phỏng rõ nét toàn bộ các điểm phục vụ khám chữa bệnh chính.\n• Giải pháp 3 (Chuẩn hóa hệ thống Bảng hướng dẫn tại cửa các phòng chức năng): Thiết kế và lắp đặt bảng hướng dẫn hành vi tại cửa 100% phòng khám và khu vực cận lâm sàng, nêu rõ 3 nội dung trọng tâm: Đây là đâu? - Cần làm gì? - Bước tiếp theo đi đâu?.\n• Giải pháp 4 (Tập huấn nhân viên và duy trì quản trị trực quan): Tổ chức đào tạo nội bộ cho toàn thể nhân viên tiếp đón, điều dưỡng và bảo vệ sử dụng cùng thông điệp hướng dẫn thống nhất; ban hành checklist kiểm tra định kỳ hàng ngày để duy trì chất lượng biển bảng.",
      "planImplementation": "Khu vực: Triển khai thử nghiệm tại toàn bộ các khu vực khám ngoại trú, cận lâm sàng, thu ngân và nhà thuốc thuộc Phòng khám Đa khoa Hùng Vương Sơn Dương.\nThời gian: Từ ngày 15 tháng 09 năm 2026 đến ngày 29 tháng 09 năm 2026 (tổng thời gian 14 ngày).\nSản phẩm đầu ra: 01 Sơ đồ phòng khám 3D tổng thể; Hệ thống bảng hướng dẫn tại cửa các phòng; Checklist kiểm tra lắp đặt; Phiếu khảo sát trải nghiệm người bệnh; Bảng số liệu đối chiếu trước và sau cải tiến; Báo cáo Nghiệm thu A3 hoàn chỉnh.",
      "followUp": "Tổ QLCL kiểm chuẩn định kỳ, tổ chức đo lường Gemba thực địa và nghiệm thu hoàn thiện SOP trước Chung kết.",
      "standardization": "Ban hành và đóng gói thành Quy trình Vận hành Chuẩn (SOP) tại PHÒNG KHÁM ĐA KHOA HÙNG VƯƠNG SƠN DƯƠNG; tập huấn 100% nhân viên y tế liên quan.",
      "baselineData": "Số lượt người bệnh phải dừng lại hỏi đường hoặc đi nhầm phòng: Dự kiến đo lường trên 100 lượt người bệnh ngoại trú trong 02 ngày đầu triển khai (mốc Baseline T0 trước khi lắp đặt sơ đồ 3D).\n• Thời gian trung bình người bệnh tự tìm đến đúng phòng cận lâm sàng/thanh toán: Khảo sát bấm giờ thực tế trên 30 ca bệnh ngoại trú.\n• Tỷ lệ người bệnh đánh giá mức độ tìm đường tại phòng khám là \"Dễ\" hoặc \"Rất dễ\": Khảo sát đầu vào qua phiếu đánh giá nhanh trải nghiệm người bệnh.\n• Tổ QLCL yêu cầu nhóm tác giả hoàn thành việc đo lường mốc Baseline T0 chính thức trước ngày 16/09/2026 (trước khi lắp đặt sơ đồ 3D) để làm căn cứ đối chiếu trước và sau cải tiến.",
      "smartGoal": "• Tỷ lệ người bệnh phải hỏi đường hoặc đi nhầm: Hiện trạng Đo Baseline T0 trên 100 lượt ➔ Cam kết đạt Giảm ít nhất 35.0% so với Baseline\n• Tỷ lệ điểm chạm ưu tiên có sơ đồ 3D và bảng chỉ dẫn: Hiện trạng 0.0% (chưa triển khai) ➔ Cam kết đạt Đạt 100% điểm chạm đúng chuẩn\n• Thời gian trung bình tự tìm đến đúng phòng: Hiện trạng Bấm giờ Baseline T0 ➔ Cam kết đạt Rút ngắn ≥ 30% thời gian tìm đường\n• Mức độ hài lòng của người bệnh về tìm đường: Hiện trạng Khảo sát đầu vào ➔ Cam kết đạt Đạt ≥ 90.0% đánh giá Dễ/Rất dễ",
      "rootCause": "Why 1 (Hiện trạng): Tại sao người bệnh ngoại trú đến khám tại Phòng khám Sơn Dương thường xuyên phải hỏi đường, đi nhầm phòng hoặc quay lại nhiều lần? ➔ Vì người bệnh chưa nắm được tổng thể không gian và lộ trình di chuyển giữa các phòng khám, xét nghiệm, CĐHA và nhà thuốc.\nWhy 2 (Nguyên nhân trực tiếp): Tại sao người bệnh gặp khó khăn trong việc tự định hướng hành trình khám chữa bệnh? ➔ Vì tại sảnh chờ và khu tiếp đón trung tâm chưa có sơ đồ không gian trực quan mô phỏng đầy đủ các vị trí phục vụ.\nWhy 3 (Phương tiện chỉ dẫn): Tại sao người bệnh đã đến gần khu vực phòng khám vẫn phải bước vào hỏi nhân viên y tế? ➔ Vì biển tên phòng truyền thống chỉ ghi danh xưng khoa/phòng, chưa có bảng hướng dẫn hành vi (đây là đâu, người bệnh cần làm gì và bước tiếp theo di chuyển đi đâu).\nWhy 4 (Quy chuẩn thao tác): Tại sao chưa có hệ thống quản trị trực quan đồng bộ tại các điểm chạm phục vụ? ➔ Vì thói quen vận hành trước đây chủ yếu dựa vào việc hướng dẫn bằng lời nói của nhân viên tiếp đón và điều dưỡng tại chỗ, gây phân tán thời gian chuyên môn.\nWhy 5 (Nguyên nhân gốc rễ): NGUYÊN NHÂN CỐT LÕI: Thiếu hệ thống quản trị trực quan đồng bộ, bao gồm Sơ đồ không gian 3D tại sảnh tiếp đón kết hợp Bảng hướng dẫn hành vi tại cửa từng phòng chức năng. ➔ Cần thiết kế, lắp đặt Sơ đồ phòng khám 3D và Bảng hướng dẫn hành vi tại 100% điểm chạm ưu tiên để người bệnh tự định hướng dễ dàng.",
      "resultsBeforeAfter": [
        {
          "metric": "Tỷ lệ người bệnh phải hỏi đường hoặc đi nhầm",
          "before": "Đo Baseline T0 trên 100 lượt",
          "after": "Giảm ít nhất 35.0% so với Baseline"
        },
        {
          "metric": "Tỷ lệ điểm chạm ưu tiên có sơ đồ 3D và bảng chỉ dẫn",
          "before": "0.0% (chưa triển khai)",
          "after": "Đạt 100% điểm chạm đúng chuẩn"
        },
        {
          "metric": "Thời gian trung bình tự tìm đến đúng phòng",
          "before": "Bấm giờ Baseline T0",
          "after": "Rút ngắn ≥ 30% thời gian tìm đường"
        },
        {
          "metric": "Mức độ hài lòng của người bệnh về tìm đường",
          "before": "Khảo sát đầu vào",
          "after": "Đạt ≥ 90.0% đánh giá Dễ/Rất dễ"
        }
      ],
      "lessonsLearned": "Giải quyết triệt để lỗi hệ thống thay vì trách phạt cá nhân; chuẩn hóa công cụ trực quan tại hiện trường mang lại hiệu quả bền vững."
    },
    "timeline": [
      {
        "phase": "Vòng 1",
        "task": "Khảo sát hiện trạng Gemba & nộp Bản đăng ký cải tiến",
        "time": "25/08 - 05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Thẩm định",
        "task": "Tổ QLCL thẩm định chuyên môn: Đạt 86/100đ (ĐẠT LOẠI B (PHÊ DUYỆT TRIỂN KHAI THỰC NGHIỆM CÓ ĐIỀU KIỆN) |)",
        "time": "05/09/2026",
        "status": "completed"
      },
      {
        "phase": "Vòng 2",
        "task": "Triển khai thử nghiệm thực địa tại Triển khai thử nghiệm tại toàn bộ các khu vực khám ngoại trú, cận lâm sàng, thu ngân và nhà thuốc thuộc Phòng khám Đa khoa Hùng Vương Sơn Dương.",
        "time": "Từ ngày 15 tháng 09 năm 2026 đến ngày 29 tháng 09 năm 2026 (tổng thời gian 14 ngày).",
        "status": "active"
      },
      {
        "phase": "Nghiệm thu",
        "task": "Đo lường kiểm chứng số liệu đầu ra & hoàn thiện Báo cáo A3",
        "time": "22/09 - 24/09/2026",
        "status": "upcoming"
      },
      {
        "phase": "Vòng 3",
        "task": "Báo cáo thuyết trình trước Hội đồng Ban Giám khảo",
        "time": "28/09/2026",
        "status": "upcoming"
      }
    ],
    "status": "testing",
    "hasScore": false,
    "tongDiem": 0,
    "phan1": "—",
    "phan2": "—",
    "phan3": "—",
    "phan4": "—",
    "phan5": "—",
    "xepLoai": "Chờ chấm",
    "count": 0,
    "chuNhiem": "BS. Nguyễn Văn Thiết",
    "nhomTacGia": "BS. Nguyễn Văn Thiết, CN. Nguyễn Thị Hồng Diệp, CN. Phạm Triệu Minh Quang, CN. Tống Khánh Hưng",
    "diemBanDau": "86"
  }
];

export const SAMPLE_RANKING_DATA = INITIAL_KAIZEN_PROJECTS.map((p) => {
  const score = parseFloat(p.diemBanDau) || 85.0;
  const p1 = Math.round((score * 0.15) * 10) / 10;
  const p2 = Math.round((score * 0.25) * 10) / 10;
  const p3 = Math.round((score * 0.35) * 10) / 10;
  const p4 = Math.round((score * 0.15) * 10) / 10;
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
    count: 3,
    hasScore: true
  };
});

/**
 * Trả về tên chủ nhiệm đề án gọn gàng, không lặp lại chức danh hay chữ (Chủ nhiệm)
 */
export const getCleanLeaderName = (p) => {
  if (!p) return '';
  if (p.chuNhiem) return p.chuNhiem;
  if (p.tacGia) return p.tacGia;
  if (p.authorsDetailed && p.authorsDetailed[0]?.name) {
    return p.authorsDetailed[0].name;
  }
  if (p.nhomTacGia) {
    return p.nhomTacGia.split(',')[0].replace(/\(.*?\)/g, '').trim();
  }
  return '';
};

/**
 * 6 TIÊU CHÍ BẢNG KIỂM THẨM ĐỊNH THỰC ĐỊA GEMBA (DÀNH CHO THƯ KÝ BAN TỔ CHỨC)
 */
export const GEMBA_CHECKLIST_CRITERIA = [
  {
    id: 'g1',
    title: 'Đo lường hiện trạng thực tế & Bấm giờ tại hiện trường',
    desc: 'Đơn vị đã tiến hành bấm giờ, đếm mẫu, lập bảng đo lường số liệu xuất phát điểm tại buồng bệnh/hiện trường theo đúng kế hoạch cam kết.',
    maxScore: 15
  },
  {
    id: 'g2',
    title: 'Triển khai phương tiện & công cụ thực địa (Hiện vật Kaizen)',
    desc: 'Bảng kiểm tại giường, xe tiêm thông minh, khay thuốc 5S, module cảnh báo HIS hoặc bảng trực quan đã được lắp đặt và sử dụng thực tế.',
    maxScore: 20
  },
  {
    id: 'g3',
    title: 'Đào tạo & Phổ biến nhân viên trực tiếp tham gia',
    desc: 'Bác sĩ, Điều dưỡng, Kỹ thuật viên tại khoa nắm vững thao tác mới, hiểu rõ nguyên nhân gốc rễ và tự giác tuân thủ không đối phó.',
    maxScore: 20
  },
  {
    id: 'g4',
    title: 'Đo lường kết quả sơ bộ đối chiếu Trước - Sau so với mục tiêu',
    desc: 'Có bảng biểu hoặc biểu đồ so sánh rõ ràng các chỉ số cốt lõi (rút ngắn thời gian chờ, giảm tỷ lệ lỗi, triệt tiêu sự cố).',
    maxScore: 20
  },
  {
    id: 'g5',
    title: 'Đóng gói dự thảo Quy trình vận hành chuẩn (SOP)',
    desc: 'Đã hoàn thiện dự thảo quy trình cải tiến dạng SOP hoặc lưu đồ trực quan, sẵn sàng ban hành chính thức toàn viện.',
    maxScore: 15
  },
  {
    id: 'g6',
    title: 'Hồ sơ minh chứng thực chứng (Ảnh hiện trường, Video, Log HIS)',
    desc: 'Có bộ ảnh chụp thực tế trước/sau cải tiến, video vận hành tại hiện trường hoặc trích xuất lịch sử nhật ký hệ thống phần mềm.',
    maxScore: 10
  }
];

/**
 * Tạo dữ liệu Bảng kiểm thực địa mặc định cho từng đề án
 */
export const getDefaultGembaChecklist = (project) => {
  if (!project) return null;
  const initScore = parseFloat(project.tongDiemThamDinh || project.diemBanDau) || 88;
  return {
    maDeTai: project.maDeTai,
    ngayKiemTra: '18/09/2026',
    chuyenVienKiemTra: 'Thư ký Tổ QLCL (Đỗ Thị Hồng Nhung)',
    trangThaiThucDia: 'Đang thử nghiệm thực địa',
    duDieuKienChungKet: true,
    diemThucDia: initScore,
    items: {
      g1: { status: 'pass', note: 'Đã đo lường số liệu xuất phát điểm tại hiện trường' },
      g2: { status: 'pass', note: 'Đã lắp đặt phương tiện và công cụ trực quan tại vị trí' },
      g3: { status: 'pass', note: 'Nhân viên khoa đã được tập huấn và tuân thủ thao tác' },
      g4: { status: 'pass', note: 'Đang theo dõi số liệu Trước - Sau đạt trên 85% mục tiêu' },
      g5: { status: 'review', note: 'Đang hoàn thiện lưu đồ SOP theo góp ý của Tổ QLCL' },
      g6: { status: 'pass', note: 'Đã lưu trữ ảnh chụp hiện trường và dữ liệu đối chiếu' }
    },
    nhanXetThucDia: `Tổ QLCL đã trực tiếp kiểm tra thực địa tại ${project.khoaPhong}. Đơn vị triển khai nghiêm túc, bám sát đề cương A3 đã được phê duyệt. Đề nghị nhóm tác giả tiếp tục duy trì đo lường và hoàn thiện Báo cáo A3 chuẩn bị thuyết trình Vòng Chung kết.`
  };
};

