// DỮ LIỆU CỔNG THÔNG TIN HỘI THI KAIZEN - BỆNH VIỆN ĐA KHOA HÙNG VƯƠNG
// Kỷ niệm 16 năm thành lập (2010 - 2026)

export const COMPETITION_INFO = {
  title: "HỘI THI SÁNG KIẾN & ĐỀ ÁN CẢI TIẾN CHẤT LƯỢNG LẦN THỨ I",
  subtitle: "Chào mừng 16 năm Ngày thành lập Bệnh viện Đa khoa Hùng Vương (2010 – 2026)",
  theme: "HÙNG VƯƠNG KAIZEN 16: ĐỘT PHÁ CHẤT LƯỢNG – TỐI ƯU VẬN HÀNH",
  slogan: "Đột phá chất lượng – Vận hành an toàn",
  organizer: "Công ty TNHH Phát triển Y học Việt — Bệnh viện Đa khoa Hùng Vương",
  focalPoint: "Phòng Kế hoạch Tổng hợp — Tổ Quản lý Chất lượng",
  
  timeline: [
    {
      round: "Vòng 1",
      name: "Khởi động & Đăng ký Đề án",
      time: "28/08 – 05/09/2026",
      status: "completed",
      description: "Các đơn vị khảo sát hiện trạng, đo lường số liệu Baseline và nộp Phiếu đăng ký đề tài."
    },
    {
      round: "Vòng 2",
      name: "Thực thi Thử nghiệm & Thẩm định Gemba",
      time: "06/09 – 22/09/2026",
      status: "active",
      description: "Áp dụng thử nghiệm tại buồng bệnh/khoa phòng; Hội đồng giám khảo kiểm tra thực địa."
    },
    {
      round: "Vòng 3",
      name: "Chung kết Báo cáo & Lễ Trao giải",
      time: "26/09 – 28/09/2026",
      status: "upcoming",
      description: "Thuyết trình Báo cáo A3 trước Hội đồng; Lễ vinh danh Gala 16 năm thành lập Bệnh viện."
    }
  ],

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
    maDeTai: "KZ16-NGOAI-01",
    tenDeTai: "Ứng dụng xe tiêm thông minh gắn thiết bị tra cứu y lệnh thời gian thực nhằm triệt tiêu sai sót thuốc",
    nhanh: "Nhánh A",
    khoaPhong: "Khoa Ngoại Tổng Hợp",
    khoaPhoiHop: "Phòng CNTT",
    nhomTacGia: "BS.CKI Nguyễn Văn Hùng, ĐD. Trần Thị Mai, CN. Lê Tuấn Anh",
    chuDe: "SAFETY",
    chuDeTen: "An toàn Người bệnh & Phòng ngừa Rủi ro",
    khoiChuyenMon: "Khối Ngoại - Phẫu thuật",
    tomTat: "Triển khai xe tiêm tích hợp màn hình tra cứu y lệnh trực tiếp tại giường bệnh, đối soát mã vạch người bệnh trước khi dùng thuốc, chấm dứt hoàn toàn nguy cơ nhầm lẫn thuốc tiêm.",
    
    a3Report: {
      background: "Khoa Ngoại Tổng hợp có mật độ điều trị nội trú từ 60 - 80 bệnh nhân/ngày với số lượng y lệnh tiêm truyền trên 250 mũi/ngày. Nhân viên y tế trước đây phải ghi chép sổ tiêm tay, dễ nhầm lẫn giờ tiêm và tốn 45 phút mỗi đầu ca trực để đối chiếu y lệnh giấy.",
      baselineData: "Tỷ lệ sai sót ghi nhận (near-miss): 3 sự cố/tháng; thời gian chuẩn bị thuốc tiêm bình quân: 5.5 phút/bệnh nhân; tỷ lệ điều dưỡng căng thẳng khi dùng thuốc: 78%.",
      rootCause: "Phân tích 5 Whys: (1) Y lệnh giấy viết tay khó đọc -> (2) Quy trình đối chiếu rời rạc giữa hồ sơ bệnh án và tủ thuốc -> (3) Thiếu công cụ kiểm chứng tự động tại giường bệnh -> (4) Chưa liên thông trực tiếp hệ thống phần mềm HIS tại xe tiêm.",
      smartGoal: "Triệt tiêu 100% sai sót sử dụng thuốc tại giường bệnh; rút ngắn thời gian chuẩn bị xe tiêm từ 5.5 phút xuống dưới 2.5 phút/bệnh nhân trong vòng 3 tuần thử nghiệm.",
      countermeasures: "1. Thiết kế xe tiêm thông minh chống rung lắc, gắn máy tính bảng công nghiệp kết nối mạng Wi-Fi bệnh viện.\n2. Cài đặt phần mềm tra cứu y lệnh theo thời gian thực và tích hợp đầu đọc mã vạch quét vòng đeo tay bệnh nhân.\n3. Ban hành Quy trình kiểm tra 5 đúng điện tử (Đúng bệnh nhân, đúng thuốc, đúng liều, đúng đường dùng, đúng thời điểm).",
      resultsBeforeAfter: [
        { metric: "Sự cố y khoa dùng thuốc (Near-miss)", before: "3 ca/tháng", after: "0 ca (Giảm 100%)" },
        { metric: "Thời gian chuẩn bị và tiêm/BN", before: "5.5 phút", after: "2.2 phút (Rút ngắn 60%)" },
        { metric: "Tỷ lệ tuân thủ quy trình 5 đúng", before: "82%", after: "100%" },
        { metric: "Mức độ hài lòng của điều dưỡng", before: "65%", after: "96%" }
      ],
      standardization: "Ban hành SOP-DD-018: Quy trình chuẩn bị và thực hiện y lệnh tiêm truyền bằng xe tiêm điện tử. Đề xuất nhân rộng cho toàn bộ các khoa Hồi sức tích cực, Nội tổng hợp và Sản.",
      lessonsLearned: "Ứng dụng chuyển đổi số tại điểm chạm buồng bệnh giúp giảm tải áp lực tâm lý cho điều dưỡng viên, đồng thời xây dựng lòng tin vững chắc cho người bệnh nội trú."
    },
    views: 412,
    likes: 68,
    status: "evaluated"
  },
  {
    maDeTai: "KZ16-XN-02",
    tenDeTai: "Tối ưu hóa quy trình lấy mẫu và trả kết quả xét nghiệm máu bằng hệ thống mã vạch tự động liên thông HIS",
    nhanh: "Nhánh B",
    khoaPhong: "Khoa Xét Nghiệm",
    khoaPhoiHop: "Khoa Khám Bệnh, Phòng CNTT",
    nhomTacGia: "CN. Trần Thị Khanh, BS. Nguyễn Hoàng Long, ĐD. Phạm Thu Hà",
    chuDe: "TIME",
    chuDeTen: "Rút ngắn Thời gian Chờ & Tối ưu Luồng khám",
    khoiChuyenMon: "Khối Cận lâm sàng",
    tomTat: "Tự động hóa in nhãn mã vạch ngay tại quầy tiếp đón và gửi kết quả trực tuyến qua hệ thống phần mềm, giảm 35% thời gian chờ đợi nhận kết quả xét nghiệm máu của người bệnh ngoại trú.",
    
    a3Report: {
      background: "Bệnh nhân ngoại trú tại Khoa Khám bệnh trung bình mất 75 - 90 phút từ khi lấy máu đến khi nhận kết quả bản giấy. Quá trình dán nhãn thủ công tiềm ẩn nguy cơ nhầm ống nghiệm vào giờ cao điểm (7h30 - 9h00 sáng).",
      baselineData: "Thời gian trả kết quả công thức máu trung bình: 68 phút; thời gian trả kết quả sinh hóa máu: 85 phút; tỷ lệ người bệnh phàn nàn về thời gian chờ: 28%.",
      rootCause: "Sơ đồ xương cá chỉ rõ: Kỹ thuật viên phải đối chiếu họ tên bệnh nhân bằng mắt thường; nhập mã code thủ công vào máy phân tích; nhân viên phải đi bộ chuyển kết quả bản giấy về từng phòng khám.",
      smartGoal: "Rút ngắn thời gian trả kết quả công thức máu xuống dưới 35 phút và sinh hóa máu xuống dưới 50 phút; giảm 100% sai sót gán nhầm ống nghiệm.",
      countermeasures: "1. Lắp đặt máy in nhãn mã vạch tự động kết nối trực tiếp khi bác sĩ chỉ định trên HIS.\n2. Thiết lập đường truyền 2 chiều giữa máy phân tích huyết học/sinh hóa với máy chủ trung tâm.\n3. Trả kết quả điện tử tức thì về màn hình phòng khám của bác sĩ ngay khi hoàn tất duyệt kết quả.",
      resultsBeforeAfter: [
        { metric: "Thời gian trả kết quả huyết học", before: "68 phút", after: "28 phút (Giảm 58%)" },
        { metric: "Thời gian trả kết quả sinh hóa", before: "85 phút", after: "45 phút (Giảm 47%)" },
        { metric: "Sai sót nhầm lẫn mẫu bệnh phẩm", before: "0.4%", after: "0%" },
        { metric: "Sự hài lòng người bệnh ngoại trú", before: "71%", after: "94.5%" }
      ],
      standardization: "Ban hành Quy chuẩn vận hành xét nghiệm hai chiều barcode SOP-XN-09; áp dụng đồng bộ cho cơ sở vệ tinh Sơn Dương.",
      lessonsLearned: "Loại bỏ hoàn toàn công đoạn in ấn giấy trung gian giúp tiết kiệm chi phí văn phòng phẩm và tăng tốc độ hội chẩn của bác sĩ lâm sàng."
    },
    views: 385,
    likes: 54,
    status: "evaluated"
  },
  {
    maDeTai: "KZ16-CC-03",
    tenDeTai: "Chuẩn hóa quy trình phản ứng nhanh 'Báo động đỏ nội viện' trong tiếp nhận và can thiệp cấp cứu đa chấn thương",
    nhanh: "Nhánh B",
    khoaPhong: "Khoa Cấp Cứu",
    khoaPhoiHop: "Khoa GMHS, Khoa Ngoại, Trung tâm Huyết học",
    nhomTacGia: "BS.CKII Vũ Đình Tuấn, BS. Đặng Văn Nam, ĐD. Nguyễn Thị Thảo",
    chuDe: "SAFETY",
    chuDeTen: "An toàn Người bệnh & Phòng ngừa Rủi ro",
    khoiChuyenMon: "Khối Lâm sàng",
    tomTat: "Xây dựng nút bấm báo động đỏ số và bộ tiêu chí kích hoạt khẩn cấp, rút ngắn thời gian chuẩn bị phòng mổ và kíp can thiệp từ 25 phút xuống dưới 6 phút đối với ca bệnh nguy kịch.",
    
    a3Report: {
      background: "Các trường hợp sốc mất máu do đa chấn thương hoặc vỡ tạng đặc đòi hỏi phẫu thuật khẩn cấp trong 'giờ vàng'. Trước đây việc liên hệ kíp mổ thực hiện qua điện thoại từng khoa, mất nhiều thời gian kết nối.",
      baselineData: "Thời gian từ lúc kích hoạt đến khi bệnh nhân vào phòng mổ: 25.4 phút; thời gian có máu cấp cứu: 18 phút.",
      rootCause: "Thiếu hệ thống phát thanh khẩn cấp nội bộ; quy trình phê duyệt mổ cấp cứu qua nhiều bước trung gian; thiếu túi máu dự phòng O âm tại khoa Cấp cứu.",
      smartGoal: "Rút ngắn thời gian đưa bệnh nhân vào phòng mổ xuống dưới 08 phút kể từ khi kích hoạt quy trình báo động đỏ.",
      countermeasures: "1. Thiết lập nút bấm Báo động đỏ tự động kích hoạt loa phát thanh toàn viện và gửi tin nhắn SMS khẩn đến điện thoại kíp trưởng trực.\n2. Bố trí tủ bảo quản máu cấp cứu chuyên dụng tại khoa Cấp cứu.\n3. Miễn chuẩn bị thủ tục hành chính ban đầu, đưa thẳng bệnh nhân lên bàn mổ.",
      resultsBeforeAfter: [
        { metric: "Thời gian tiếp cận phòng mổ", before: "25.4 phút", after: "5.8 phút (Giảm 77%)" },
        { metric: "Thời gian cung cấp máu nhóm O khẩn", before: "18 phút", after: "3 phút" },
        { metric: "Tỷ lệ cứu sống bệnh nhân sốc mất máu", before: "84%", after: "96.5%" }
      ],
      standardization: "Quy chế Báo động đỏ toàn viện QĐ-BVHV-2026; tổ chức diễn tập định kỳ mỗi quý 01 lần.",
      lessonsLearned: "Sự phối hợp nhịp nhàng giữa các khối chuyên môn là chìa khóa quyết định cứu sống người bệnh trong tình huống ngàn cân treo sợi tóc."
    },
    views: 490,
    likes: 89,
    status: "evaluated"
  },
  {
    maDeTai: "KZ16-GMHS-04",
    tenDeTai: "Thực hành 5S sắp xếp tủ dụng cụ phẫu thuật nội soi, rút ngắn thời gian chuẩn bị bàn mổ",
    nhanh: "Nhánh A",
    khoaPhong: "Khoa Phẫu thuật - Gây mê Hồi sức",
    khoaPhoiHop: "Khoa Kiểm soát Nhiễm khuẩn",
    nhomTacGia: "BS. Lê Minh Trí, ĐD. Hoàng Thị Dung, ĐD. Trần Anh Dũng",
    chuDe: "5S",
    chuDeTen: "Thực hành 5S & Chuẩn hóa Môi trường Làm việc",
    khoiChuyenMon: "Khối Ngoại - Phẫu thuật",
    tomTat: "Quy hoạch và gắn nhãn mã màu vị trí từng khay dụng cụ phẫu thuật nội soi, loại bỏ thao tác tìm kiếm thừa, giảm thời gian chuẩn bị bàn mổ từ 22 phút xuống 8 phút.",
    
    a3Report: {
      background: "Khoa Phẫu thuật thực hiện trung bình 20 - 30 ca mổ/ngày với nhiều chuyên khoa khác nhau (Ngoại tiêu hóa, Tiết niệu, Sản khoa). Tủ dụng cụ nội soi sắp xếp chưa đồng bộ khiến điều dưỡng dụng cụ mất thời gian tìm kiếm dụng cụ chuyên biệt.",
      baselineData: "Thời gian chuẩn bị dụng cụ mổ: 22 phút/ca; tỷ lệ thiếu hoặc nhầm chi tiết dụng cụ nội soi: 6.5%.",
      rootCause: "Chưa phân định khu vực lưu trữ theo chuyên khoa; thiếu bảng kiểm vị trí trực quan; dụng cụ sau tiệt khuẩn để lẫn lộn.",
      smartGoal: "Rút ngắn thời gian chuẩn bị bàn mổ xuống dưới 10 phút; giảm tỷ lệ thiếu/lỗi dụng cụ về 0%.",
      countermeasures: "1. Thực hiện Sàng lọc (Seiri): Loại bỏ dụng cụ cùn, hỏng, chuyển trả trung tâm tiệt khuẩn.\n2. Sắp xếp (Seiton): Đặt tên, định vị khay dụng cụ theo mã màu cho từng phẫu trường.\n3. Sạch sẽ & Săn sóc (Seiso & Seiketsu): Dán sơ đồ trực quan ngoài cánh tủ và bảng kiểm tra trước khi vào mổ.",
      resultsBeforeAfter: [
        { metric: "Thời gian chuẩn bị bàn mổ", before: "22 phút", after: "7.5 phút (Rút ngắn 66%)" },
        { metric: "Tỷ lệ thiếu/sai dụng cụ trong mổ", before: "6.5%", after: "0%" },
        { metric: "Hài lòng của phẫu thuật viên", before: "74%", after: "98%" }
      ],
      standardization: "Sổ tay hướng dẫn 5S phòng mổ ST-GMHS-05; áp dụng kiểm tra 5S đầu ca làm việc mỗi ngày.",
      lessonsLearned: "5S không chỉ làm sạch không gian mà là biện pháp trực tiếp bảo vệ an toàn cho cuộc phẫu thuật và giảm thời gian gây mê cho người bệnh."
    },
    views: 320,
    likes: 47,
    status: "evaluated"
  },
  {
    maDeTai: "KZ16-DUOC-05",
    tenDeTai: "Ứng dụng giải pháp nhãn cảnh báo chữ nổi Tall Man Lettering nhằm triệt tiêu nhầm lẫn thuốc LASA",
    nhanh: "Nhánh A",
    khoaPhong: "Khoa Dược",
    khoaPhoiHop: "Tổ Quản lý Chất lượng, Các Khoa Lâm sàng",
    nhomTacGia: "DS.CKI Nguyễn Thị Lan, DS. Đỗ Minh Quân, ĐD. Phạm Thị Thủy",
    chuDe: "SAFETY",
    chuDeTen: "An toàn Người bệnh & Phòng ngừa Rủi ro",
    khoiChuyenMon: "Khối Dược - KSNK",
    tomTat: "Thiết kế hệ thống nhãn nhận diện màu và chữ in hoa phân biệt Tall Man Lettering tại tất cả các tủ trực thuốc toàn viện, ngăn ngừa triệt để nguy cơ cấp phát nhầm thuốc nhìn giống nhau, đọc giống nhau.",
    
    a3Report: {
      background: "Danh mục thuốc sử dụng tại Bệnh viện có hơn 70 cặp thuốc có hình thức đóng gói tương đồng hoặc tên đọc tương tự (LASA - Look Alike Sound Alike), tiềm ẩn rủi ro nghiêm trọng khi cấp phát thuốc trong ca trực đêm.",
      baselineData: "Ghi nhận 12 trường hợp suýt xảy ra nhầm lẫn (near-miss) thuốc LASA tại các tủ trực lâm sàng trong 6 tháng đầu năm.",
      rootCause: "Bao bì của các công ty dược thiết kế quá giống nhau; nhân viên y tế đọc lướt tên hoạt chất; vị trí sắp xếp trên giá thuốc đặt sát cạnh nhau.",
      smartGoal: "100% thuốc LASA tại kho dược và tủ trực khoa phòng được dán nhãn cảnh báo đặc biệt; không để xảy ra bất kỳ sự cố nhầm thuốc nào.",
      countermeasures: "1. Rà soát và lập Danh mục 80 thuốc LASA trọng điểm toàn viện.\n2. In nhãn dán màu phản quang kết hợp chữ Tall Man Lettering (ví dụ: dopAMINE vs doBUTAmine, hydrOXYzine vs hydrALAzine).\n3. Tách rời vị trí sắp xếp của các cặp thuốc giống nhau trên các giá kệ thuốc khác nhau.",
      resultsBeforeAfter: [
        { metric: "Sự cố suýt nhầm thuốc LASA", before: "2 ca/tháng", after: "0 ca/tháng" },
        { metric: "Tỷ lệ nhận biết đúng thuốc LASA", before: "76%", after: "99.5%" },
        { metric: "Thời gian kiểm tra thuốc của điều dưỡng", before: "3.2 phút/lượt", after: "1.1 phút/lượt" }
      ],
      standardization: "Quy chuẩn quản trị thuốc nguy cơ cao SOP-DUOC-07; kiểm tra tủ trực lâm sàng định kỳ 2 tuần/lần.",
      lessonsLearned: "Cảnh báo thị giác trực quan là công cụ phòng vệ rủi ro đơn giản, chi phí thấp nhưng mang lại hiệu quả bảo vệ an toàn lâm sàng tối ưu."
    },
    views: 356,
    likes: 62,
    status: "evaluated"
  },
  {
    maDeTai: "KZ16-KB-06",
    tenDeTai: "Cải tiến luồng tiếp đón và phân luồng người bệnh ban đầu bằng hệ thống Ki-ốt thông minh tự động",
    nhanh: "Nhánh A",
    khoaPhong: "Khoa Khám Bệnh",
    khoaPhoiHop: "Phòng CNTT, Phòng Chăm sóc Khách hàng",
    nhomTacGia: "BS. Trần Văn Hùng, CN. Hoàng Ngọc Linh, ĐD. Nguyễn Thị Oanh",
    chuDe: "TIME",
    chuDeTen: "Rút ngắn Thời gian Chờ & Tối ưu Luồng khám",
    khoiChuyenMon: "Khối Lâm sàng",
    tomTat: "Thay thế quy trình phát số thứ tự thủ công bằng 4 ki-ốt thông minh quét căn cước công dân gắn chip hoặc thẻ BHYT VssID, phân luồng tức thì về đúng phòng khám chuyên khoa.",
    
    a3Report: {
      background: "Khoa Khám bệnh tiếp nhận 800 - 1.200 lượt khám/ngày. Khung giờ 7h00 - 8h30 thường xuyên ùn ứ tại quầy tiếp đón do nhân viên phải nhập thông tin bằng tay từng bệnh nhân.",
      baselineData: "Thời gian chờ lấy số và đăng ký khám: 18.5 phút/bệnh nhân; tỷ lệ ùn ứ sảnh chờ: 85% các ngày đầu tuần.",
      rootCause: "Nhập liệu thủ công từ giấy tờ tùy thân; thiếu thông tin định hướng chuyên khoa; người bệnh tái khám vẫn phải xếp hàng như người khám lần đầu.",
      smartGoal: "Rút ngắn thời gian lấy số và đăng ký phòng khám xuống dưới 03 phút/bệnh nhân; giải tỏa 100% tình trạng ùn ứ tại sảnh tiếp đón.",
      countermeasures: "1. Trang bị 4 Ki-ốt thông minh quét mã QR CCCD và VssID nhận diện thông tin bệnh nhân trong 5 giây.\n2. Tự động hiển thị gợi ý phòng khám theo lịch sử bệnh án trên hệ thống EMR.\n3. Bố trí nhân viên Chăm sóc Khách hàng hướng dẫn người cao tuổi tại ki-ốt.",
      resultsBeforeAfter: [
        { metric: "Thời gian đăng ký khám ban đầu", before: "18.5 phút", after: "2.5 phút (Rút ngắn 86%)" },
        { metric: "Tỷ lệ ùn ứ sảnh đón tiếp", before: "85%", after: "5%" },
        { metric: "Hài lòng về khâu tiếp đón", before: "68%", after: "95%" }
      ],
      standardization: "SOP-KB-01: Quy trình tiếp đón bệnh nhân ngoại trú công nghệ số; áp dụng toàn hệ thống phòng khám vệ tinh.",
      lessonsLearned: "Ứng dụng dữ liệu dân cư quốc gia và công nghệ tự phục vụ giúp bệnh viện nâng tầm hiện đại và mang lại trải nghiệm tiện lợi tối đa cho người dân."
    },
    views: 468,
    likes: 77,
    status: "evaluated"
  },
  {
    maDeTai: "KZ16-ICU-07",
    tenDeTai: "Giảm thiểu tỷ lệ viêm phổi thở máy (VAP) tại khoa Hồi sức tích cực bằng gói can thiệp chuẩn hóa Bundle Care",
    nhanh: "Nhánh A",
    khoaPhong: "Khoa Hồi Sức Tích Cực (ICU)",
    khoaPhoiHop: "Khoa Kiểm soát Nhiễm khuẩn",
    nhomTacGia: "BS.CKI Đỗ Khắc Tiệp, ĐD. Nguyễn Văn Quang, ĐD. Bùi Thị Hằng",
    chuDe: "SAFETY",
    chuDeTen: "An toàn Người bệnh & Phòng ngừa Rủi ro",
    khoiChuyenMon: "Khối Lâm sàng",
    tomTat: "Áp dụng gói chăm sóc chuẩn hóa 5 bước cho bệnh nhân thở máy (nâng đầu giường 30-45 độ, vệ sinh răng miệng bằng Chlorhexidine, hút đờm kín, cai máy sớm), kéo giảm 65% tỷ lệ VAP.",
    
    a3Report: {
      background: "Viêm phổi thở máy (VAP) là nhiễm khuẩn bệnh viện phổ biến nhất tại khoa ICU, làm kéo dài ngày nằm viện thêm 7-10 ngày và tăng chi phí điều trị kháng sinh từ 15-25 triệu đồng/ca.",
      baselineData: "Tỷ lệ VAP: 14.2 ca/1.000 ngày thở máy; tỷ lệ tuân thủ các bước chăm sóc hô hấp của nhân viên: 62%.",
      rootCause: "Quy trình chăm sóc chưa đồng bộ; điều dưỡng chưa duy trì thường xuyên độ dốc đầu giường; vệ sinh khoang miệng chưa đủ thời gian quy định.",
      smartGoal: "Kéo giảm tỷ lệ VAP xuống dưới 5 ca/1.000 ngày thở máy; nâng tỷ lệ tuân thủ Bundle Care lên trên 95%.",
      countermeasures: "1. Tập huấn thực hành gói Bundle Care 5 bước cho 100% bác sĩ và điều dưỡng ICU.\n2. Gắn thước đo góc nâng đầu giường 30-45 độ tại từng giường thở máy.\n3. Sử dụng hệ thống hút đờm kín và thay dung dịch Chlorhexidine 0.12% vệ sinh miệng mỗi 6 giờ.",
      resultsBeforeAfter: [
        { metric: "Tỷ lệ VAP / 1.000 ngày thở máy", before: "14.2 ca", after: "4.8 ca (Giảm 66%)" },
        { metric: "Số ngày thở máy trung bình", before: "9.2 ngày", after: "6.1 ngày" },
        { metric: "Tỷ lệ tuân thủ gói Bundle Care", before: "62%", after: "97%" }
      ],
      standardization: "Ban hành Hướng dẫn kiểm soát nhiễm khuẩn đường thở ICP-ICU-03; thanh tra chéo hàng tuần.",
      lessonsLearned: "Tuân thủ nghiêm ngặt các biện pháp cơ bản nhưng khoa học mang lại sự sống cho bệnh nhân nặng và tiết kiệm chi phí điều trị đáng kể."
    },
    views: 310,
    likes: 42,
    status: "evaluated"
  },
  {
    maDeTai: "KZ16-IT-08",
    tenDeTai: "Triển khai hệ thống ký số Bệnh án điện tử (EMR) không giấy tờ tại khối điều trị nội trú",
    nhanh: "Nhánh B",
    khoaPhong: "Phòng Công Nghệ Thông Tin",
    khoaPhoiHop: "Phòng KHTH, Các Khoa Lâm sàng",
    nhomTacGia: "ThS. Hoàng Trọng Hiếu, KS. Nguyễn Đức Thắng, BS. Ma Văn Hoàng",
    chuDe: "DIGITAL",
    chuDeTen: "Chuyển đổi số & Bệnh viện Thông minh",
    khoiChuyenMon: "Khối Hành chính - Quản lý",
    tomTat: "Số hóa 100% biểu mẫu bệnh án, tích hợp chữ ký số cá nhân cho y bác sĩ, loại bỏ việc in ấn và lưu trữ giấy tờ, tiết kiệm trên 300 triệu đồng chi phí in ấn mỗi năm.",
    
    a3Report: {
      background: "Bệnh viện lưu trữ trung bình 35.000 hồ sơ bệnh án giấy mỗi năm. Chi phí in ấn, lưu kho và nhân lực vận chuyển hồ sơ tốn kém, việc tra cứu tiền sử bệnh nhân mất nhiều thời gian.",
      baselineData: "100% hồ sơ bệnh án in giấy; thời gian trích xuất bệnh án cũ: 1 - 2 ngày; chi phí giấy và mực in: ~350 triệu đồng/năm.",
      rootCause: "Hạ tầng ký số chưa hoàn thiện; thói quen ghi chép giấy của một số nhân viên; quy trình pháp lý liên thông bảo hiểm xã hội chưa được số hóa triệt để.",
      smartGoal: "Đạt chuẩn Bệnh án điện tử Thông tư 46/2018/TT-BYT; số hóa 100% hồ sơ nội trú tại 5 khoa lâm sàng thí điểm.",
      countermeasures: "1. Tích hợp giải pháp ký số HSM tập trung tốc độ cao vào phần mềm EMR.\n2. Chuẩn hóa toàn bộ mẫu phiếu theo quy định Bộ Y tế trên nền tảng kỹ thuật số.\n3. Đào tạo 100% bác sĩ, điều dưỡng thực hiện ký số trực tiếp trên máy tính tại khoa phòng.",
      resultsBeforeAfter: [
        { metric: "Tỷ lệ số hóa hồ sơ bệnh án", before: "0%", after: "98.5%" },
        { metric: "Thời gian tra cứu hồ sơ cũ", before: "24 - 48 giờ", after: "30 giây" },
        { metric: "Chi phí giấy tờ in ấn tiết kiệm", before: "350 tr/năm", after: "Giảm 85%" }
      ],
      standardization: "Quy chế sử dụng và khai thác Bệnh án điện tử EMR-BVHV-2026; trình Bộ Y tế thẩm định chính thức.",
      lessonsLearned: "Chuyển đổi số thành công phụ thuộc lớn nhất vào sự quyết tâm của Ban Giám đốc và tính thân thiện, dễ sử dụng của phần mềm đối với y bác sĩ trực tiếp điều trị."
    },
    views: 520,
    likes: 95,
    status: "evaluated"
  }
];
