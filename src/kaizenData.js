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
    "maDeTai": "KZ16-NGOAI-01",
    "tenDeTai": "Ứng dụng xe tiêm thông minh gắn máy tính xách tay tra cứu y lệnh thời gian thực nhằm triệt tiêu sai sót thuốc tại Khoa Ngoại Tổng hợp",
    "tenSanPham": "Xe tiêm thông minh gắn máy tính xách tay tra cứu y lệnh thời gian thực",
    "nhanh": "Nhánh B",
    "khoaPhong": "Khoa Ngoại TH",
    "khoaPhoiHop": "",
    "chuNhiem": "ĐD. Trần Mạnh Giang",
    "nhomTacGia": "ĐD. Trần Mạnh Giang, ĐD. Võ Nguyễn Thúy Hà, ĐD. Phạm Thị Thanh Cần, ĐD. Lê Thị Hồng Nhung, ĐD. Nguyễn Thị Hương Thảo",
    "chuDe": "DIGITAL",
    "chuDeTen": "Chuyển đổi số & Ứng dụng Bệnh viện Thông minh",
    "khoiChuyenMon": "Khối Lâm Sàng",
    "tomTat": "Ứng dụng xe tiêm thông minh gắn máy tính xách tay tra cứu y lệnh thời gian thực nhằm triệt tiêu sai sót thuốc tại Khoa Ngoại Tổng hợp",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Tích hợp máy tính xách tay và máy quét mã vạch lên xe tiêm, tra cứu y lệnh trực tiếp tại giường bệnh.",
      "painPoints": [
        "In sổ tiêm giấy có độ trễ y lệnh khi bác sĩ bổ sung",
        "Nguy cơ nhầm lẫn liều lượng và giờ tiêm"
      ],
      "solutions": [
        "Xe tiêm thông minh tra cứu y lệnh thời gian thực",
        "Đối chiếu 5 đúng điện tử tại giường bệnh"
      ],
      "keyMetrics": [
        {
          "label": "Sai sót thuốc",
          "before": "8 vụ/tháng",
          "after": "0 vụ",
          "note": "Triệt tiêu 100%"
        },
        {
          "label": "Thời gian tra cứu",
          "before": "12 phút",
          "after": "2 phút",
          "note": "Nhanh hơn 80%"
        },
        {
          "label": "Độ trễ y lệnh",
          "before": "45 phút",
          "after": "0 phút",
          "note": "Cập nhật tức thì"
        },
        {
          "label": "Chi phí trang bị",
          "before": "—",
          "after": "Tiết kiệm",
          "note": "Tận dụng laptop viện"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "ĐD. Trần Mạnh Giang",
        "title": "Điều dưỡng trưởng Khoa Ngoại TH",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "ĐD. Võ Nguyễn Thúy Hà",
        "title": "Điều dưỡng viên Khoa Ngoại TH",
        "role": "Thư ký đề án (Theo dõi số liệu)"
      },
      {
        "name": "ĐD. Phạm Thị Thanh Cần",
        "title": "Điều dưỡng viên Khoa Ngoại TH",
        "role": "Thành viên thực hiện thử nghiệm"
      },
      {
        "name": "ĐD. Lê Thị Hồng Nhung",
        "title": "Điều dưỡng viên Khoa Ngoại TH",
        "role": "Thành viên thực hiện thử nghiệm"
      },
      {
        "name": "ĐD. Nguyễn Thị Hương Thảo",
        "title": "Điều dưỡng viên Khoa Ngoại TH",
        "role": "Thành viên thực hiện thử nghiệm"
      }
    ],
    "diemBanDau": "85.0"
  },
  {
    "maDeTai": "KZ16-CC115-01",
    "tenDeTai": "Sáng chế giá treo bình oxy đứng đa năng trên xe cáng cấp cứu nhằm nâng cao an toàn vận chuyển và kiểm soát lưu lượng khí thở tại Trung tâm Cấp cứu 115",
    "tenSanPham": "Giá treo máy phá rung tim trên xe cứu thương chuyên dụng",
    "nhanh": "Nhánh B",
    "khoaPhong": "Trung tâm Cấp cứu 115",
    "khoaPhoiHop": "",
    "chuNhiem": "ĐD. Đỗ Sơn Bắc",
    "nhomTacGia": "ĐD. Đỗ Sơn Bắc, BS. Nguyễn Văn Hùng, ĐD. Hoàng Văn Tuấn",
    "chuDe": "SAFETY",
    "chuDeTen": "An toàn Người bệnh & Phòng ngừa Rủi ro",
    "khoiChuyenMon": "Khối Cận Lâm Sàng & Quản Lý",
    "tomTat": "Sáng chế giá treo bình oxy đứng đa năng trên xe cáng cấp cứu nhằm nâng cao an toàn vận chuyển và kiểm soát lưu lượng khí thở tại Trung tâm Cấp cứu 115",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Thiết kế giá treo Inox 304 giảm rung chấn, cố định máy phá rung tim chuyên dụng ngay cạnh cáng cấp cứu trên xe 115.",
      "painPoints": [
        "Máy phá rung để dưới sàn xe hoặc ghế phụ gây vướng víu",
        "Mất 35-45 giây tìm và chuẩn bị sốc điện khi xe di chuyển xóc"
      ],
      "solutions": [
        "Giá treo Inox 304 chịu lực 80kg, xoay đa hướng 180 độ",
        "Khóa chốt an toàn thao tác 1 chạm trong 3 giây"
      ],
      "keyMetrics": [
        {
          "label": "Thời gian sốc điện",
          "before": "45 giây",
          "after": "15 giây",
          "note": "Nhanh hơn 67%"
        },
        {
          "label": "Nguy cơ rơi vỡ máy",
          "before": "Tiềm ẩn",
          "after": "0%",
          "note": "Cố định tuyệt đối"
        },
        {
          "label": "Chi phí gia công",
          "before": "—",
          "after": "1,2 triệu",
          "note": "Vật tư Inox 304 nội bộ"
        },
        {
          "label": "Độ bền thử nghiệm",
          "before": "—",
          "after": "Chuẩn 100%",
          "note": "Đạt kiểm định an toàn"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "ĐD. Đỗ Sơn Bắc",
        "title": "Điều dưỡng viên Trung tâm Cấp cứu 115",
        "role": "Tác giả sáng chế (Chủ nhiệm đề án)"
      },
      {
        "name": "BS. Nguyễn Văn Hùng",
        "title": "Bác sĩ Cấp cứu 115",
        "role": "Cố vấn chuyên môn cấp cứu ngoại viện"
      },
      {
        "name": "ĐD. Hoàng Văn Tuấn",
        "title": "Điều dưỡng viên Cấp cứu 115",
        "role": "Thành viên thực nghiệm hiện trường"
      }
    ],
    "diemBanDau": "86.2"
  },
  {
    "maDeTai": "KZ16-TIMMACH-01",
    "tenDeTai": "Cải tiến quy trình chuẩn bị thuốc và vật tư can thiệp cấp cứu STEMI bằng mô hình STEMI Emergency Box tại Phòng Can thiệp Tim mạch",
    "tenSanPham": "Hộp cấp cứu STEMI Emergency Box chuyên dụng tại phòng can thiệp",
    "nhanh": "Nhánh B",
    "khoaPhong": "Khoa Tim mạch Can thiệp",
    "khoaPhoiHop": "",
    "chuNhiem": "ĐD. Nguyễn Duy Hùng",
    "nhomTacGia": "ĐD. Nguyễn Duy Hùng, ĐD. Nguyễn Việt Hưng, ĐD. Nguyễn Mạnh Hùng, ĐD. Lê Minh Thắng, ĐD. Nguyễn Phạm Quốc Anh",
    "chuDe": "EXP",
    "chuDeTen": "Nâng cao Trải nghiệm & Sự Hài lòng Người bệnh",
    "khoiChuyenMon": "Khối Lâm Sàng",
    "tomTat": "Cải tiến quy trình chuẩn bị thuốc và vật tư can thiệp cấp cứu STEMI bằng mô hình STEMI Emergency Box tại Phòng Can thiệp Tim mạch",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Đóng gói đồng bộ toàn bộ thuốc chống đông và dụng cụ can thiệp mạch vành vào hộp chuyên dụng niêm phong bảo đảm tại phòng DSA.",
      "painPoints": [
        "Thuốc và dụng cụ nằm tại 3 tủ khác nhau mất thời gian gom",
        "Mất 15-20 phút chuẩn bị ngoài giờ hành chính"
      ],
      "solutions": [
        "Hộp STEMI Box đầy đủ thuốc và dụng cụ mở dùng ngay",
        "Niêm phong 1 lần kèm bảng kiểm trực quan 1 trang"
      ],
      "keyMetrics": [
        {
          "label": "Thời gian chuẩn bị",
          "before": "20 phút",
          "after": "< 3 phút",
          "note": "Rút ngắn 85%"
        },
        {
          "label": "Sai sót vật tư",
          "before": "12%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Door-to-Balloon",
          "before": "65 phút",
          "after": "< 50 phút",
          "note": "Tiết kiệm 15 phút vàng"
        },
        {
          "label": "Chi phí triển khai",
          "before": "—",
          "after": "0 đ",
          "note": "Tận dụng hộp sẵn có"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "ĐD. Nguyễn Duy Hùng",
        "title": "Điều dưỡng viên Phòng Can thiệp Tim mạch",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "ĐD. Nguyễn Việt Hưng",
        "title": "Điều dưỡng viên Phòng Can thiệp",
        "role": "Thư ký đề án (Theo dõi số liệu)"
      },
      {
        "name": "ĐD. Nguyễn Mạnh Hùng",
        "title": "Điều dưỡng viên Phòng Can thiệp",
        "role": "Thành viên thực hiện thử nghiệm"
      },
      {
        "name": "ĐD. Lê Minh Thắng",
        "title": "Điều dưỡng viên Phòng Can thiệp",
        "role": "Thành viên thực hiện thử nghiệm"
      },
      {
        "name": "ĐD. Nguyễn Phạm Quốc Anh",
        "title": "Điều dưỡng viên Phòng Can thiệp",
        "role": "Thành viên thực hiện thử nghiệm"
      }
    ],
    "diemBanDau": "87.4"
  },
  {
    "maDeTai": "KZ16-NOISOI-01",
    "tenDeTai": "Cải tiến quy trình đặt Endoloop trong môi trường nước hỗ trợ cắt polyp đại trực tràng có cuống",
    "tenSanPham": "Hệ thống bảo quản và vận chuyển dây soi mềm vô khuẩn",
    "nhanh": "Nhánh B",
    "khoaPhong": "Trung tâm Nội soi",
    "khoaPhoiHop": "",
    "chuNhiem": "KTV Trưởng Vi Ngọc Tùng",
    "nhomTacGia": "KTV Trưởng Vi Ngọc Tùng, BS. Lò Thị Bích Thùy, BS. Lò Thị Thu Huyền, ĐD. Nguyễn Thu Hằng",
    "chuDe": "SAFETY",
    "chuDeTen": "An toàn Người bệnh & Phòng ngừa Rủi ro",
    "khoiChuyenMon": "Khối Cận Lâm Sàng & Quản Lý",
    "tomTat": "Cải tiến quy trình đặt Endoloop trong môi trường nước hỗ trợ cắt polyp đại trực tràng có cuống",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Hệ thống bảo quản và vận chuyển dây soi mềm vô khuẩn",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "KTV Trưởng Vi Ngọc Tùng",
        "title": "Kỹ thuật viên trưởng Trung tâm Tiêu hóa",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "BS. Lò Thị Bích Thùy",
        "title": "Bác sĩ Nội soi tiêu hóa",
        "role": "Thành viên nghiên cứu kỹ thuật"
      },
      {
        "name": "BS. Lò Thị Thu Huyền",
        "title": "Bác sĩ Nội soi tiêu hóa",
        "role": "Thành viên nghiên cứu kỹ thuật"
      },
      {
        "name": "ĐD. Nguyễn Thu Hằng",
        "title": "Điều dưỡng viên Nội soi",
        "role": "Thành viên phụ tá thủ thuật"
      }
    ],
    "diemBanDau": "88.6"
  },
  {
    "maDeTai": "KZ16-XN-01",
    "tenDeTai": "Ứng dụng tính năng cảnh báo sớm thời gian thực và báo cáo tự động người bệnh trả kết quả muộn trên hệ thống HIS tại Khoa Xét nghiệm",
    "tenSanPham": "Quy trình kiểm soát thời gian trả kết quả xét nghiệm tự động",
    "nhanh": "Nhánh B",
    "khoaPhong": "Khoa Xét nghiệm",
    "khoaPhoiHop": "",
    "chuNhiem": "CN. Nguyễn Quang Trường",
    "nhomTacGia": "CN. Nguyễn Quang Trường, KS. Lê Đức Thịnh, KTV. Trần Văn Tuấn",
    "chuDe": "DIGITAL",
    "chuDeTen": "Chuyển đổi số & Ứng dụng Bệnh viện Thông minh",
    "khoiChuyenMon": "Khối Lâm Sàng",
    "tomTat": "Ứng dụng tính năng cảnh báo sớm thời gian thực và báo cáo tự động người bệnh trả kết quả muộn trên hệ thống HIS tại Khoa Xét nghiệm",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Quy trình kiểm soát thời gian trả kết quả xét nghiệm tự động",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "CN. Nguyễn Quang Trường",
        "title": "Cử nhân Xét nghiệm",
        "role": "Tác giả đề án (Chủ nhiệm)"
      },
      {
        "name": "KS. Lê Đức Thịnh",
        "title": "Kỹ sư Phòng CNTT",
        "role": "Phụ trách kỹ thuật phần mềm HIS"
      },
      {
        "name": "KTV. Trần Văn Tuấn",
        "title": "Kỹ thuật viên Xét nghiệm",
        "role": "Thành viên thực hiện thử nghiệm"
      }
    ],
    "diemBanDau": "89.8"
  },
  {
    "maDeTai": "KZ16-XN-03",
    "tenDeTai": "Chuyển đổi số quy trình trả kết quả xét nghiệm trả sau qua ứng dụng Myhungvuong",
    "tenSanPham": "Hệ thống tra cứu và trả kết quả xét nghiệm qua ứng dụng Myhungvuong",
    "nhanh": "Nhánh B",
    "khoaPhong": "Khoa Xét nghiệm",
    "khoaPhoiHop": "",
    "chuNhiem": "CN. Trần Thị Khanh",
    "nhomTacGia": "CN. Trần Thị Khanh, KS. Nguyễn Minh Tuyên, CN. Bùi Thị Mai",
    "chuDe": "DIGITAL",
    "chuDeTen": "Chuyển đổi số & Ứng dụng Bệnh viện Thông minh",
    "khoiChuyenMon": "Khối Lâm Sàng",
    "tomTat": "Chuyển đổi số quy trình trả kết quả xét nghiệm trả sau qua ứng dụng Myhungvuong",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Hệ thống tra cứu và trả kết quả xét nghiệm qua ứng dụng Myhungvuong",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "CN. Trần Thị Khanh",
        "title": "Kỹ thuật viên Xét nghiệm",
        "role": "Trưởng nhóm đề án (Chủ nhiệm)"
      },
      {
        "name": "KS. Nguyễn Minh Tuyên",
        "title": "Kỹ sư Phòng CNTT",
        "role": "Phó nhóm (Phụ trách nền tảng số)"
      },
      {
        "name": "CN. Bùi Thị Mai",
        "title": "Cử nhân Xét nghiệm",
        "role": "Thành viên phụ trách dữ liệu ký số"
      }
    ],
    "diemBanDau": "91.0"
  },
  {
    "maDeTai": "KZ16-KHTH-01",
    "tenDeTai": "Chuyển đổi số hoạt động quản lý hành nghề nội bộ (HV-MRM)",
    "tenSanPham": "Hệ thống số hóa quản lý hành nghề y tế nội bộ (HV-MRM)",
    "nhanh": "Nhánh B",
    "khoaPhong": "Phòng Kế hoạch Tổng hợp",
    "khoaPhoiHop": "",
    "chuNhiem": "Nguyễn Thành Lâm",
    "nhomTacGia": "Nguyễn Thành Lâm, ĐD. Trần Đình Vũ, CN. Đỗ Văn Nam",
    "chuDe": "DIGITAL",
    "chuDeTen": "Chuyển đổi số & Ứng dụng Bệnh viện Thông minh",
    "khoiChuyenMon": "Khối Cận Lâm Sàng & Quản Lý",
    "tomTat": "Chuyển đổi số hoạt động quản lý hành nghề nội bộ (HV-MRM)",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Hệ thống số hóa quản lý hành nghề y tế nội bộ (HV-MRM)",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "Nguyễn Thành Lâm",
        "title": "Phó Trưởng phòng KHTH",
        "role": "Trưởng nhóm đề án (Chủ nhiệm)"
      },
      {
        "name": "ĐD. Trần Đình Vũ",
        "title": "Tổ trưởng Tổ QLCL",
        "role": "Cố vấn kiểm chuẩn chất lượng"
      },
      {
        "name": "CN. Đỗ Văn Nam",
        "title": "Chuyên viên Phòng KHTH",
        "role": "Thành viên số hóa dữ liệu"
      }
    ],
    "diemBanDau": "92.2"
  },
  {
    "maDeTai": "KZ16-CDHA-01",
    "tenDeTai": "Xây dựng và chuyển đổi số phương pháp 3P tại khoa Chẩn đoán Hình ảnh",
    "tenSanPham": "Phần mềm số hóa phân bổ hiệu suất và lương 3P Khoa CĐHA",
    "nhanh": "Nhánh B",
    "khoaPhong": "Khoa Chẩn đoán Hình ảnh",
    "khoaPhoiHop": "",
    "chuNhiem": "KTV. Nguyễn Thành Lâm",
    "nhomTacGia": "KTV. Nguyễn Thành Lâm, BSCKI. Tạ Tất Thắng, KTV. Trần Văn Chung",
    "chuDe": "DIGITAL",
    "chuDeTen": "Chuyển đổi số & Ứng dụng Bệnh viện Thông minh",
    "khoiChuyenMon": "Khối Lâm Sàng",
    "tomTat": "Xây dựng và chuyển đổi số phương pháp 3P tại khoa Chẩn đoán Hình ảnh",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Phần mềm số hóa phân bổ hiệu suất và lương 3P Khoa CĐHA",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "KTV. Nguyễn Thành Lâm",
        "title": "Kỹ thuật viên trưởng Khoa CĐHA",
        "role": "Trưởng nhóm đề án (Chủ nhiệm)"
      },
      {
        "name": "BSCKI. Tạ Tất Thắng",
        "title": "Trưởng khoa CĐHA",
        "role": "Cố vấn chuyên môn và định mức kỹ thuật"
      },
      {
        "name": "KTV. Trần Văn Chung",
        "title": "Kỹ thuật viên CĐHA",
        "role": "Thành viên phụ trách dữ liệu PACS/RIS"
      }
    ],
    "diemBanDau": "93.4"
  },
  {
    "maDeTai": "KZ16-PC-01",
    "tenDeTai": "Cải tiến quy trình phúc tra và số hóa giám sát thực thi kiến nghị sau thanh tra chuyên đề tại Bệnh viện Đa khoa Hùng Vương",
    "tenSanPham": "Số hóa quy trình phúc tra và giám sát thực thi kiến nghị thanh tra",
    "nhanh": "Nhánh B",
    "khoaPhong": "Phòng Pháp chế",
    "khoaPhoiHop": "",
    "chuNhiem": "LS. Nguyễn Đức Nhưng",
    "nhomTacGia": "LS. Nguyễn Đức Nhưng, CN. Lê Tiến Tuyên, CN. Nguyễn Hồng Thắm, CN. Nguyễn Trung Dũng, CN. Bùi Thị Hiền",
    "chuDe": "DIGITAL",
    "chuDeTen": "Chuyển đổi số & Ứng dụng Bệnh viện Thông minh",
    "khoiChuyenMon": "Khối Cận Lâm Sàng & Quản Lý",
    "tomTat": "Cải tiến quy trình phúc tra và số hóa giám sát thực thi kiến nghị sau thanh tra chuyên đề tại Bệnh viện Đa khoa Hùng Vương",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Số hóa quy trình phúc tra và giám sát thực thi kiến nghị thanh tra",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "LS. Nguyễn Đức Nhưng",
        "title": "Trưởng phòng Pháp chế",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "CN. Lê Tiến Tuyên",
        "title": "Chuyên viên Phòng Pháp chế",
        "role": "Thư ký đề án (Theo dõi số liệu)"
      },
      {
        "name": "CN. Nguyễn Hồng Thắm",
        "title": "Chuyên viên Phòng Pháp chế",
        "role": "Thành viên thực hiện đề án"
      },
      {
        "name": "CN. Nguyễn Trung Dũng",
        "title": "Chuyên viên Phòng Pháp chế",
        "role": "Thành viên thực hiện đề án"
      },
      {
        "name": "CN. Bùi Thị Hiền",
        "title": "Chuyên viên Phòng Pháp chế",
        "role": "Thành viên thực hiện đề án"
      }
    ],
    "diemBanDau": "94.6"
  },
  {
    "maDeTai": "KZ16-PKTB-01",
    "tenDeTai": "Cải tiến quy trình theo dõi người bệnh và kiểm soát các thao tác chuyên môn bằng bảng kiểm tại giường kết hợp hệ thống cảnh báo trực quan tại Phòng khám Cấp cứu",
    "tenSanPham": "Bảng kiểm tại giường kết hợp cảnh báo trực quan cấp cứu",
    "nhanh": "Nhánh A",
    "khoaPhong": "Phòng khám Đa khoa Thanh Ba",
    "khoaPhoiHop": "",
    "chuNhiem": "BS. Lê Ngọc Dung",
    "nhomTacGia": "BS. Lê Ngọc Dung, CN. Bùi Trọng Toàn, BS. Nguyễn Đức Huỳnh, BS. Đàm Xuân Cảnh, ĐD. Nguyễn Anh Tuấn",
    "chuDe": "SAFETY",
    "chuDeTen": "An toàn Người bệnh & Phòng ngừa Rủi ro",
    "khoiChuyenMon": "Khối Phòng Khám Vệ Tinh",
    "tomTat": "Cải tiến quy trình theo dõi người bệnh và kiểm soát các thao tác chuyên môn bằng bảng kiểm tại giường kết hợp hệ thống cảnh báo trực quan tại Phòng khám Cấp cứu",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Bảng kiểm tại giường kết hợp cảnh báo trực quan cấp cứu",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "BS. Lê Ngọc Dung",
        "title": "Phó Giám đốc Phòng khám",
        "role": "Trưởng nhóm đề án (Chủ nhiệm)"
      },
      {
        "name": "CN. Bùi Trọng Toàn",
        "title": "Điều dưỡng trưởng Phòng khám",
        "role": "Thư ký đề án"
      },
      {
        "name": "BS. Nguyễn Đức Huỳnh",
        "title": "Giám đốc Phòng khám",
        "role": "Thành viên (Cố vấn chuyên môn)"
      },
      {
        "name": "BS. Đàm Xuân Cảnh",
        "title": "Bác sĩ điều trị",
        "role": "Thành viên"
      },
      {
        "name": "ĐD. Nguyễn Anh Tuấn",
        "title": "Điều dưỡng Cấp cứu 115",
        "role": "Thành viên"
      }
    ],
    "diemBanDau": "95.8"
  },
  {
    "maDeTai": "KZ16-NHI-01",
    "tenDeTai": "Cải tiến quy trình cố định catheter ngoại vi cho bệnh nhi tại Bệnh viện đa khoa Hùng Vương",
    "tenSanPham": "Bộ nẹp và kỹ thuật cố định catheter ngoại vi an toàn cho bệnh nhi",
    "nhanh": "Nhánh B",
    "khoaPhong": "Khoa Nhi",
    "khoaPhoiHop": "",
    "chuNhiem": "ĐD. Trần Thị Hồng",
    "nhomTacGia": "ĐD. Trần Thị Hồng, ĐD. Nguyễn Minh Huệ, ĐD. Hà Thị Vân, ĐD. Nguyễn Thị Hồng Chiêm, ĐD. Vũ Thị Minh Nguyệt",
    "chuDe": "EXP",
    "chuDeTen": "Nâng cao Trải nghiệm & Sự Hài lòng Người bệnh",
    "khoiChuyenMon": "Khối Lâm Sàng",
    "tomTat": "Cải tiến quy trình cố định catheter ngoại vi cho bệnh nhi tại Bệnh viện đa khoa Hùng Vương",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Bộ nẹp và kỹ thuật cố định catheter ngoại vi an toàn cho bệnh nhi",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "ĐD. Trần Thị Hồng",
        "title": "Điều dưỡng trưởng",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "ĐD. Nguyễn Minh Huệ",
        "title": "Điều dưỡng viên",
        "role": "Thư ký đề án (Theo dõi số liệu)"
      },
      {
        "name": "ĐD. Hà Thị Vân",
        "title": "Điều dưỡng viên",
        "role": "Thành viên thực hiện thử nghiệm"
      },
      {
        "name": "ĐD. Nguyễn Thị Hồng Chiêm",
        "title": "Điều dưỡng viên",
        "role": "Thành viên thực hiện thử nghiệm"
      },
      {
        "name": "ĐD. Vũ Thị Minh Nguyệt",
        "title": "Điều dưỡng viên",
        "role": "Thành viên thực hiện thử nghiệm"
      }
    ],
    "diemBanDau": "85.0"
  },
  {
    "maDeTai": "KZ16-DUOC-01",
    "tenDeTai": "Xây dựng WebApp thông tin thuốc tra cứu nhanh phục vụ nhân viên y tế tại Bệnh viện Đa khoa Hùng Vương (Nền tảng HV-Pharmacy)",
    "tenSanPham": "WebApp thông tin thuốc và tương tác thuốc lâm sàng HV-Pharmacy",
    "nhanh": "Nhánh B",
    "khoaPhong": "Khoa Dược",
    "khoaPhoiHop": "",
    "chuNhiem": "DS. Vũ Hải Nam",
    "nhomTacGia": "DS. Vũ Hải Nam, DS. Tống Thanh Bình",
    "chuDe": "DIGITAL",
    "chuDeTen": "Chuyển đổi số & Ứng dụng Bệnh viện Thông minh",
    "khoiChuyenMon": "Khối Lâm Sàng",
    "tomTat": "Xây dựng WebApp thông tin thuốc tra cứu nhanh phục vụ nhân viên y tế tại Bệnh viện Đa khoa Hùng Vương (Nền tảng HV-Pharmacy)",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "WebApp thông tin thuốc và tương tác thuốc lâm sàng HV-Pharmacy",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "DS. Vũ Hải Nam",
        "title": "Nhân viên Khoa Dược",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "DS. Tống Thanh Bình",
        "title": "Phó trưởng khoa Dược",
        "role": "Thành viên (Cố vấn chuyên môn và kiểm duyệt dữ liệu)"
      }
    ],
    "diemBanDau": "86.2"
  },
  {
    "maDeTai": "KZ16-HSCC-01",
    "tenDeTai": "Chuẩn hóa và triển khai gói đồ dùng chăm sóc cá nhân cho người bệnh thở máy tại Khoa Hồi sức cấp cứu",
    "tenSanPham": "Gói đồ dùng cá nhân chuẩn hóa cho người bệnh thở máy ICU",
    "nhanh": "Nhánh B",
    "khoaPhong": "Khoa Hồi Sức Cấp Cứu",
    "khoaPhoiHop": "",
    "chuNhiem": "ĐD. Nguyễn Thị Thanh Mai",
    "nhomTacGia": "ĐD. Nguyễn Thị Thanh Mai, ĐD. Nguyễn Thanh Loan, ĐD. Phạm Minh Phụng, ĐD. Dương Duy Phương",
    "chuDe": "EXP",
    "chuDeTen": "Nâng cao Trải nghiệm & Sự Hài lòng Người bệnh",
    "khoiChuyenMon": "Khối Lâm Sàng",
    "tomTat": "Chuẩn hóa và triển khai gói đồ dùng chăm sóc cá nhân cho người bệnh thở máy tại Khoa Hồi sức cấp cứu",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Gói đồ dùng cá nhân chuẩn hóa cho người bệnh thở máy ICU",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "ĐD. Nguyễn Thị Thanh Mai",
        "title": "Điều dưỡng Khoa HSCC",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "ĐD. Nguyễn Thanh Loan",
        "title": "Điều dưỡng Khoa HSCC",
        "role": "Thư ký đề án (Theo dõi số liệu và checklist)"
      },
      {
        "name": "ĐD. Phạm Minh Phụng",
        "title": "Điều dưỡng trưởng bộ phận HSTC",
        "role": "Cố vấn chuyên môn và điều phối quy trình"
      },
      {
        "name": "ĐD. Dương Duy Phương",
        "title": "Điều dưỡng Khoa HSCC",
        "role": "Thành viên thực hiện thử nghiệm Gemba"
      }
    ],
    "diemBanDau": "87.4"
  },
  {
    "maDeTai": "KZ16-PKD-01",
    "tenDeTai": "Chuẩn hóa quy trình chăm sóc chủ động người bệnh buồng điều trị theo yêu cầu trong 24 giờ đầu tại Bệnh viện Đa khoa Hùng Vương",
    "tenSanPham": "Bộ quy trình chuẩn hóa điểm chạm chăm sóc chủ động 24h đầu buồng VIP",
    "nhanh": "Nhánh B",
    "khoaPhong": "Phòng Kinh Doanh",
    "khoaPhoiHop": "",
    "chuNhiem": "",
    "nhomTacGia": "",
    "chuDe": "DIGITAL",
    "chuDeTen": "Chuyển đổi số & Ứng dụng Bệnh viện Thông minh",
    "khoiChuyenMon": "Khối Cận Lâm Sàng & Quản Lý",
    "tomTat": "Chuẩn hóa quy trình chăm sóc chủ động người bệnh buồng điều trị theo yêu cầu trong 24 giờ đầu tại Bệnh viện Đa khoa Hùng Vương",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Bộ quy trình chuẩn hóa điểm chạm chăm sóc chủ động 24h đầu buồng VIP",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [],
    "diemBanDau": "88.6"
  },
  {
    "maDeTai": "KZ16-UB-01",
    "tenDeTai": "Ứng dụng mã QR trong chuẩn hóa cung cấp thông tin và hướng dẫn chăm sóc cho người bệnh ung thư tại Khoa Ung bướu",
    "tenSanPham": "Hệ thống mã QR cung cấp thông tin chăm sóc người bệnh ung bướu",
    "nhanh": "Nhánh B",
    "khoaPhong": "Khoa Ung Bướu",
    "khoaPhoiHop": "",
    "chuNhiem": "CN. Nguyễn Văn Quân",
    "nhomTacGia": "CN. Nguyễn Văn Quân, CN. Dương Cao Hải, ĐD. Nghiêm Trọng Kiên",
    "chuDe": "DIGITAL",
    "chuDeTen": "Chuyển đổi số & Ứng dụng Bệnh viện Thông minh",
    "khoiChuyenMon": "Khối Lâm Sàng",
    "tomTat": "Ứng dụng mã QR trong chuẩn hóa cung cấp thông tin và hướng dẫn chăm sóc cho người bệnh ung thư tại Khoa Ung bướu",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Hệ thống mã QR cung cấp thông tin chăm sóc người bệnh ung bướu",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "CN. Nguyễn Văn Quân",
        "title": "Cử nhân điều dưỡng - Khoa Ung bướu",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "CN. Dương Cao Hải",
        "title": "Cử nhân điều dưỡng - Khoa Ung bướu",
        "role": "Phụ trách nội dung chuyên môn"
      },
      {
        "name": "ĐD. Nghiêm Trọng Kiên",
        "title": "Điều dưỡng CĐ - Khoa Ung bướu",
        "role": "Phụ trách đo lường Gemba"
      }
    ],
    "diemBanDau": "89.8"
  },
  {
    "maDeTai": "KZ16-LCK-01",
    "tenDeTai": "Cải tiến phiếu đi buồng điều dưỡng hằng ngày và chuẩn hóa quy trình chăm sóc khép kín nhằm nâng cao năng lực phát hiện, đáp ứng nhu cầu người bệnh tại Khoa Liên chuyên khoa",
    "tenSanPham": "Phiếu đi buồng điều dưỡng hằng ngày và quy trình chăm sóc khép kín",
    "nhanh": "Nhánh A",
    "khoaPhong": "Khoa Liên Chuyên Khoa",
    "khoaPhoiHop": "",
    "chuNhiem": "ĐD. Nguyễn Thị Huyền",
    "nhomTacGia": "ĐD. Nguyễn Thị Huyền",
    "chuDe": "SAFETY",
    "chuDeTen": "An toàn Người bệnh & Phòng ngừa Rủi ro",
    "khoiChuyenMon": "Khối Lâm Sàng",
    "tomTat": "Cải tiến phiếu đi buồng điều dưỡng hằng ngày và chuẩn hóa quy trình chăm sóc khép kín nhằm nâng cao năng lực phát hiện, đáp ứng nhu cầu người bệnh tại Khoa Liên chuyên khoa",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Phiếu đi buồng điều dưỡng hằng ngày và quy trình chăm sóc khép kín",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [],
    "diemBanDau": "91.0"
  },
  {
    "maDeTai": "KZ16-DL-01",
    "tenDeTai": "Cải tiến hướng dẫn sử dụng thuốc bôi tại nhà ở người bệnh trứng cá bằng Bảng kiểm 5 đúng và Phiếu hướng dẫn chăm sóc da tại Khoa Da liễu – Thẩm mỹ",
    "tenSanPham": "Bảng kiểm 5 đúng và phiếu hướng dẫn sử dụng thuốc bôi trứng cá",
    "nhanh": "Nhánh B",
    "khoaPhong": "Khoa Da Liễu Thẩm Mỹ",
    "khoaPhoiHop": "",
    "chuNhiem": "ĐD. Hồ Thị Phương Thảo",
    "nhomTacGia": "ĐD. Hồ Thị Phương Thảo, BS. Dương Thu Huế, ĐD. Trần Thị Thanh Thảo, DS. Nguyễn Long Thành, ĐD. Vũ Thị Châu Anh",
    "chuDe": "EXP",
    "chuDeTen": "Nâng cao Trải nghiệm & Sự Hài lòng Người bệnh",
    "khoiChuyenMon": "Khối Lâm Sàng",
    "tomTat": "Cải tiến hướng dẫn sử dụng thuốc bôi tại nhà ở người bệnh trứng cá bằng Bảng kiểm 5 đúng và Phiếu hướng dẫn chăm sóc da tại Khoa Da liễu – Thẩm mỹ",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Bảng kiểm 5 đúng và phiếu hướng dẫn sử dụng thuốc bôi trứng cá",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "ĐD. Hồ Thị Phương Thảo",
        "title": "Điều dưỡng Khoa Da liễu",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "BS. Dương Thu Huế",
        "title": "Bác sĩ Khoa Da liễu",
        "role": "Thư ký đề án (Chuyên môn và phác đồ)"
      },
      {
        "name": "ĐD. Trần Thị Thanh Thảo",
        "title": "Điều dưỡng Khoa Da liễu",
        "role": "Thành viên (Khảo sát và thu thập dữ liệu)"
      },
      {
        "name": "DS. Nguyễn Long Thành",
        "title": "Dược sĩ Khoa Dược",
        "role": "Thành viên (Cố vấn an toàn và tương tác thuốc)"
      },
      {
        "name": "ĐD. Vũ Thị Châu Anh",
        "title": "Điều dưỡng Bộ phận Chăm sóc da",
        "role": "Thành viên (Thực hiện thử nghiệm tại buồng chăm sóc da)"
      }
    ],
    "diemBanDau": "92.2"
  },
  {
    "maDeTai": "KZ16-PKCM-01",
    "tenDeTai": "Cải tiến quy trình đón tiếp và khám chữa bệnh tại Phòng khám Đa khoa Hùng Vương Chân Mộng theo mô hình Kíp trực linh hoạt giờ cao điểm",
    "tenSanPham": "Mô hình kíp trực linh hoạt giờ cao điểm giảm thời gian chờ khám",
    "nhanh": "Nhánh B",
    "khoaPhong": "Phòng khám Đa khoa Chân Mộng",
    "khoaPhoiHop": "",
    "chuNhiem": "BS. Nguyễn Đức Huỳnh",
    "nhomTacGia": "BS. Nguyễn Đức Huỳnh, ĐD. Nguyễn Thị Thảo, BS. Lê Ngọc Dung, KTV. Nguyễn Văn Trung, CN. Trần Thị Mai",
    "chuDe": "DIGITAL",
    "chuDeTen": "Chuyển đổi số & Ứng dụng Bệnh viện Thông minh",
    "khoiChuyenMon": "Khối Phòng Khám Vệ Tinh",
    "tomTat": "Cải tiến quy trình đón tiếp và khám chữa bệnh tại Phòng khám Đa khoa Hùng Vương Chân Mộng theo mô hình Kíp trực linh hoạt giờ cao điểm",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Mô hình kíp trực linh hoạt giờ cao điểm giảm thời gian chờ khám",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "BS. Nguyễn Đức Huỳnh",
        "title": "Bác sĩ Phụ trách Phòng khám",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "ĐD. Nguyễn Thị Thảo",
        "title": "Điều dưỡng trưởng Phòng khám",
        "role": "Thư ký đề án (Điều phối nhân lực)"
      },
      {
        "name": "BS. Lê Ngọc Dung",
        "title": "Bác sĩ Khám bệnh",
        "role": "Thành viên (Điều phối luồng khám)"
      },
      {
        "name": "KTV. Nguyễn Văn Trung",
        "title": "Kỹ thuật viên Cận lâm sàng",
        "role": "Thành viên (Hỗ trợ xét nghiệm và chẩn đoán hình ảnh)"
      },
      {
        "name": "CN. Trần Thị Mai",
        "title": "Nhân viên Chăm sóc Khách hàng",
        "role": "Thành viên (Đón tiếp và Phân luồng ban đầu)"
      }
    ],
    "diemBanDau": "93.4"
  },
  {
    "maDeTai": "KZ16-PKSD-01",
    "tenDeTai": "Nâng cao trải nghiệm khách hàng bằng sơ đồ phòng khám 3D kết hợp bảng hướng dẫn tại cửa các phòng",
    "tenSanPham": "Sơ đồ định vị 3D và bảng chỉ dẫn trực quan tại phòng khám",
    "nhanh": "Nhánh B",
    "khoaPhong": "Phòng khám Đa khoa Sơn Dương",
    "khoaPhoiHop": "",
    "chuNhiem": "BS. Nguyễn Văn Thiết",
    "nhomTacGia": "BS. Nguyễn Văn Thiết, CN. Nguyễn Thị Hồng Diệp, CN. Phạm Triệu Minh Quang, CN. Tống Khánh Hưng",
    "chuDe": "EXP",
    "chuDeTen": "Nâng cao Trải nghiệm & Sự Hài lòng Người bệnh",
    "khoiChuyenMon": "Khối Phòng Khám Vệ Tinh",
    "tomTat": "Nâng cao trải nghiệm khách hàng bằng sơ đồ phòng khám 3D kết hợp bảng hướng dẫn tại cửa các phòng",
    "ngayDangKy": "05/09/2026",
    "trangThaiDangKy": "Thử nghiệm thực địa",
    "quickSummary": {
      "idea": "Sơ đồ định vị 3D và bảng chỉ dẫn trực quan tại phòng khám",
      "painPoints": [
        "Quy trình thủ công tiềm ẩn nguy cơ sai sót",
        "Thời gian thao tác kéo dài ảnh hưởng người bệnh"
      ],
      "solutions": [
        "Chuẩn hóa quy trình theo nguyên tắc tinh gọn",
        "Triển khai bảng kiểm trực quan và công nghệ số"
      ],
      "keyMetrics": [
        {
          "label": "Tỷ lệ tuân thủ",
          "before": "60%",
          "after": "> 95%",
          "note": "Cải thiện rõ rệt"
        },
        {
          "label": "Thời gian thao tác",
          "before": "15 phút",
          "after": "< 5 phút",
          "note": "Giảm 67%"
        },
        {
          "label": "Sự cố / Sai sót",
          "before": "5 - 10%",
          "after": "0%",
          "note": "Tuyệt đối an toàn"
        },
        {
          "label": "Mức độ hài lòng",
          "before": "75%",
          "after": "> 95%",
          "note": "Đạt mục tiêu"
        }
      ]
    },
    "authorsDetailed": [
      {
        "name": "BS. Nguyễn Văn Thiết",
        "title": "Giám đốc Phòng khám Đa khoa Hùng Vương Sơn Dương",
        "role": "Trưởng nhóm (Chủ nhiệm đề án)"
      },
      {
        "name": "CN. Nguyễn Thị Hồng Diệp",
        "title": "Nhân viên Phòng khám Đa khoa Hùng Vương Sơn Dương",
        "role": "Thư ký đề án (Theo dõi số liệu)"
      },
      {
        "name": "CN. Phạm Triệu Minh Quang",
        "title": "Nhân viên Phòng khám Đa khoa Hùng Vương Sơn Dương",
        "role": "Thành viên (Khảo sát và Lắp đặt)"
      },
      {
        "name": "CN. Tống Khánh Hưng",
        "title": "Nhân viên Phòng khám Đa khoa Hùng Vương Sơn Dương",
        "role": "Thành viên (Thiết kế đồ họa 3D và Checklist)"
      }
    ],
    "diemBanDau": "94.6"
  }
];

export const SAMPLE_RANKING_DATA = INITIAL_KAIZEN_PROJECTS.map((p, idx) => {
  const score = parseFloat(p.diemBanDau) || 85.0;
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
