/**
 * DỮ LIỆU BẢNG KIỂM THẨM ĐỊNH THỰC ĐỊA GEMBA (DÀNH CHO THƯ KÝ BAN TỔ CHỨC)
 * Trích xuất chuẩn xác từ tệp: "Biên bản thẩm định thực địa đề án.pdf"
 * Bệnh viện Đa khoa Hùng Vương — Hội thi Đề án Cải tiến Chất lượng 16 Năm
 */

export const GEMBA_CHECKLISTS_BY_PROJECT = {
  "KZ16-NGOAI-01": {
    "docIndex": 1,
    "maDeTai": "KZ16-NGOAI-01",
    "tenDeAn": "Ứng dụng xe tiêm thông minh gắn máy tính tra cứu y lệnh thời gian thực nhằm triệt tiêu sai sót thuốc",
    "donVi": "Khoa Ngoại TH",
    "canBo": "ĐD. Trần Mạnh Giang",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Kết cấu cơ khí giá đỡ máy tính trên xe",
        "desc": "tiêm (Giải pháp 1: Cơ khí hóa xe tiêm) Khung Inox chuyên dụng gắn cố định trên xe tiêm, có đệm cao su giảm chấn; đẩy xe qua gờ cửa và di chuyển giữa các buồng bệnh không rung lắc, không xô lệch máy tính.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Nguồn điện độc lập và Thời lượng pin máy",
        "desc": "tính (Đảm bảo vận hành không dây) Thời lượng pin đáp ứng vận hành độc lập liên tục trong ca tiêm (≥ 2 giờ); bố trí dây nguồn/sạc gọn gàng, tuyệt đối không kéo dây điện di động lòng thòng qua các giường bệnh. ...%)",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Độ phủ sóng Mạng không dây (Wi-Fi) y tế",
        "desc": "& Tốc độ truy cập HIS (Giải pháp 2: Công nghệ kết nối) Mạng không dây y tế chuyên dụng phủ sóng ổn định tại góc các buồng bệnh hậu phẫu; tốc độ tải dữ liệu và cập nhật y lệnh trên phần mềm HIS đáp ứng tức thời, không bị ngắt quãng kết nối.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Bố trí công năng và Kiểm soát nhiễm",
        "desc": "khuẩn (Nguyên tắc vô khuẩn trên xe tiêm) Phân định rõ vùng sạch và vùng thao tác vô khuẩn; vị trí đặt máy tính không cản trở khay thuốc tiêm; có trang bị dung dịch sát khuẩn tay nhanh tại vị trí thuận tiện thao tác.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Kiểm soát y lệnh Bác sĩ CẮT / TẠM",
        "desc": "DỪNG thuốc (Khắc phục tử huyệt: Vẫn tiêm thuốc đã cắt) Thử nghiệm tình huống: Bác sĩ thao tác DỪNG y lệnh thuốc trên HIS trong ca trực; màn hình tại xe tiêm ở buồng bệnh có đổi trạng thái DỪNG tức thời không? ĐD có nhận biết để ngừng tiêm thuốc cho BN không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Cập nhật y lệnh Bác sĩ BỔ SUNG đột xuất",
        "desc": "(Khắc phục tử huyệt: Bỏ sót y lệnh mới) Thử nghiệm tình huống: Bác sĩ bổ sung thuốc mới/chỉ định CLS trên HIS khi ĐD đang ở buồng bệnh; kiểm tra khả năng phát hiện tức thời của ĐD tại đầu giường mà không cần quay về bàn hành chính.",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Thực hành '3 tra – 5 đối' & Giao tiếp",
        "desc": "Người bệnh (Giải pháp 3: Tránh việc dán mắt vào máy tính) Quan sát trực tiếp thao tác tiêm cho 01 BN: ĐD có đối chiếu họ tên, số bệnh án, thuốc trên màn hình; đồng thời có chào hỏi, hỏi tên tuổi và giải thích thuốc cho BN trước khi tiêm không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Xác nhận KÝ ĐIỆN TỬ thực hiện y lệnh",
        "desc": "tại giường (Kỷ luật thời gian thực: Cấm tích dồn cuối ca) Kiểm tra thao tác ĐD: Ngay sau khi tiêm xong cho BN, ĐD có bấm nút xác nhận 'ĐÃ THỰC HIỆN' (hoặc ký điện tử) ngay tại đầu giường không? Hay để gom về cuối ca mới tích hàng loạt?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Định danh tài khoản & Kiểm tra ngẫu",
        "desc": "nhiên nhân sự (Giải pháp 4: Đào tạo nội bộ & Phân quyền) Chỉ định ngẫu nhiên 01 ĐD ca trực (ngoài nhóm tác giả) thực hiện đăng nhập và thao tác trên xe tiêm: Có sử dụng tài khoản cá nhân được phân quyền riêng không? Có thao tác thành thạo không?",
        "status": "pass"
      },
      {
        "id": "ls_6",
        "stt": 6,
        "title": "Phương án xử lý sự cố công nghệ & Ca",
        "desc": "trực đêm (Tính sẵn sàng dự phòng và vận hành 24/7) Khảo sát ĐD: Khi mất tín hiệu Wifi đột xuất hoặc trong ca trực đêm (ánh sáng phòng mờ, BN đang ngủ), khoa có phương án xử lý để đảm bảo an toàn thuốc và không gây phiền toái cho BN không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Số vụ sai lệch y lệnh thuốc thực hiện",
        "desc": "(Tiêm nhầm thuốc đã cắt / Bỏ sót thuốc thêm) (Nguồn: Sổ trực / Báo cáo sự cố) Ghi nhận đợt thử nghiệm: ...... vụ sai lệch (Mục tiêu cam kết A3: 0 vụ) -- 1 of 40 --",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Thời gian tiêm thuốc cho 01 buồng bệnh",
        "desc": "(Chuẩn hóa trên buồng hậu phẫu 5 – 7 BN) (Nguồn: Bấm giờ quy trình cũ) Bấm giờ thực tế tại buồng: Đo được: ...... phút/buồng (Mục tiêu cam kết: Giảm còn ......)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Độ trễ cập nhật y lệnh tại buồng bệnh",
        "desc": "(Tính từ lúc Bác sĩ ra lệnh đến khi ĐD nhận) (Do phải đi lại bàn hành chính) Đối soát trực tiếp 02 BN tại giường:",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Mức độ cắt giảm sổ tiêm giấy tại khoa",
        "desc": "(Đánh giá mục tiêu tiết kiệm và số hóa) (Nguồn: Sổ xuất kho VPP khoa) Thực tế tại bàn hành chính:",
        "status": "pass"
      },
      {
        "id": "dl_5",
        "stt": 5,
        "title": "Tổng cỡ mẫu & Tính xác thực Sổ nhật ký",
        "desc": "(Kiểm toán tính chân thực của dữ liệu) Sổ nhật ký: ...... buồng (...... lượt BN) (Yêu cầu tối thiểu theo A3: ≥ 30 lượt)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Số vụ sai lệch y lệnh thuốc thực hiện",
        "desc": "(Tiêm nhầm thuốc đã cắt / Bỏ sót thuốc thêm) (Nguồn: Sổ trực / Báo cáo sự cố) Ghi nhận đợt thử nghiệm: ...... vụ sai lệch (Mục tiêu cam kết A3: 0 vụ) -- 1 of 40 --",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Thời gian tiêm thuốc cho 01 buồng bệnh",
        "desc": "(Chuẩn hóa trên buồng hậu phẫu 5 – 7 BN) (Nguồn: Bấm giờ quy trình cũ) Bấm giờ thực tế tại buồng: Đo được: ...... phút/buồng (Mục tiêu cam kết: Giảm còn ......)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Độ trễ cập nhật y lệnh tại buồng bệnh",
        "desc": "(Tính từ lúc Bác sĩ ra lệnh đến khi ĐD nhận) (Do phải đi lại bàn hành chính) Đối soát trực tiếp 02 BN tại giường:",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Mức độ cắt giảm sổ tiêm giấy tại khoa",
        "desc": "(Đánh giá mục tiêu tiết kiệm và số hóa) (Nguồn: Sổ xuất kho VPP khoa) Thực tế tại bàn hành chính:",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 5,
        "title": "Tổng cỡ mẫu & Tính xác thực Sổ nhật ký",
        "desc": "(Kiểm toán tính chân thực của dữ liệu) Sổ nhật ký: ...... buồng (...... lượt BN) (Yêu cầu tối thiểu theo A3: ≥ 30 lượt) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 1,
        "title": "01 Xe tiêm thông minh hoàn chỉnh",
        "desc": "(Hiện vật cải tiến) Đã lắp đặt giá đỡ Inox chống sốc, trang bị máy tính xách tay gắn trên xe, kết nối Mạng không dây (Wi-Fi) y tế và đang vận hành thực tế tại các buồng hậu phẫu.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 2,
        "title": "Dự thảo Quy trình Vận hành Chuẩn",
        "desc": "(SOP) (Quy trình tiêm truyền có đối soát điện tử) Đã ban hành văn bản hướng dẫn chi tiết các bước đối soát y lệnh trên phần mềm máy tính tại buồng bệnh, có phê duyệt của Lãnh đạo khoa.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 3,
        "title": "Bảng kiểm an toàn thuốc (Bảng kiểm thao",
        "desc": "tác) (Công cụ phòng ngừa sai sót) Đã thiết kế, in ấn và dán trực tiếp trên xe tiêm bảng kiểm các bước kiểm tra chéo '3 tra – 5 đối' điện tử để điều dưỡng tuân thủ thực hiện.",
        "status": "pass"
      },
      {
        "id": "sp_9",
        "stt": 4,
        "title": "Sổ Nhật ký đo lường thực nghiệm Kaizen",
        "desc": "(Dữ liệu thực chứng khoa học) Đã thiết lập sổ/file theo dõi ghi chép đầy đủ các ca tiêm thực nghiệm, ghi nhận thời gian, các trường hợp y lệnh thay đổi, có chữ ký xác nhận của ĐD Trưởng.",
        "status": "pass"
      },
      {
        "id": "sp_10",
        "stt": 5,
        "title": "Bảng dự toán chi phí & Tính nhân rộng",
        "desc": "(Capex) (Khả năng nhân rộng toàn khoa/toàn viện) Đã dự trù định mức chi phí gia công khung Inox và phương án bố trí máy tính để sẵn sàng nhân rộng ra các buồng bệnh còn lại khi đề án được phê duyệt.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Vận hành xe tiêm thực chất tại buồng, bảo đảm an toàn thuốc, ĐD thành thạo ký điện tử tại",
      "loaiBDesc": "Đã chạy xe tiêm nhưng CHƯA CÓ / THIẾU Mốc ban đầu, dùng chung tài khoản, chưa",
      "loaiCDesc": "Chưa đưa xe tiêm vào vận hành thực tế tại buồng bệnh; không có số liệu đo lường thực",
      "ghiChu": "(Thẩm định viên ghi nhận chi tiết: Đánh giá an toàn thuốc tại buồng bệnh; kỷ luật ký điện tử tại giường; kết quả kiểm tra Điều dưỡng ngẫu nhiên; tính xác thực số liệu Mốc ban đầu và Sổ nhật ký; các sản phẩm còn thiếu cần bổ sung hoàn thiện trước khi nộp Báo cáo A3 theo thông báo)",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-CC115-01": {
    "docIndex": 2,
    "maDeTai": "KZ16-CC115-01",
    "tenDeAn": "Sáng chế giá treo bình oxy đứng đa năng trên xe cáng cấp cứu nhằm nâng cao an toàn vận chuyển",
    "donVi": "TT Cấp cứu 115",
    "canBo": "ĐD. Đỗ Sơn Bắc",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Khớp ngàm Inox 304 gắn ray cáng",
        "desc": "(Giải pháp 1: Cơ khí hóa sáng chế) Gia công Inox 304 chịu lực, ngàm khóa siết chặt vào thanh ray chịu lực của xe cáng; lắc mạnh không rơ lắc, không làm trầy xước/móp méo khung cáng chuẩn.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Đai siết bán nguyệt & Đệm cao su giảm",
        "desc": "chấn (Giải pháp 2: Khóa an toàn một chạm) Đai Inox ôm trọn thân bình oxy 10–15kg; lớp đệm cao su giảm chấn ôm khít chống trượt dọc; khóa lẫy siết chặt vững chắc, không tự bật khi phanh gấp.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Tầm quan sát đồng hồ áp suất & Lưu",
        "desc": "lượng (Giải pháp 3: Tối ưu góc quan sát) Định vị giá treo tại đầu cáng; mặt đồng hồ áp suất và cột đo lưu lượng hướng thẳng về tầm mắt nhân viên y tế trong khoang xe; không bị che khuất.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Khoảng cách an toàn cơ học",
        "desc": "(Thao tác đẩy cáng lên/xuống xe) Cụm van khí nén và khung giá treo không va quệt vào cửa hậu, trần xe hay rãnh trượt sàn xe cứu thương khi đẩy cáng ra/vào và đóng kín cửa xe.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Bấm giờ thao tác khóa lẫy '1 chạm' tại chỗ",
        "desc": "(Mục tiêu A3: Rút ngắn thời gian tiếp nhận) Thử nghiệm tình huống: Điều dưỡng thực hiện thao tác đặt bình oxy vào giá treo và gài khóa siết nhanh: Thao tác có trơn tru, nhẹ nhàng và hoàn tất dưới 15 giây không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Kiểm tra ngẫu nhiên kíp cấp cứu",
        "desc": "(Giải pháp 4: Đào tạo & Chuyển giao quy trình) Chỉ định ngẫu nhiên 01 Điều dưỡng hoặc Lái xe trong ca trực (ngoài nhóm tác giả) thực hiện tháo/lắp bình oxy: Có thao tác đúng quy trình và thành thạo không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Khoảng cách an toàn & Không cản trở hồi",
        "desc": "sức (Tử huyệt: Cản trở thao tác đầu giường) Quan sát khi có người bệnh trên cáng: Giá treo có làm vướng víu thao tác bóp bóng Ambu, đặt nội khí quản, hút đờm không? Có nguy cơ va đập vào đầu BN khi phanh gấp không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Thao tác thay bình oxy khẩn cấp giữa",
        "desc": "đường (Tình huống chuyển tuyến đường dài) Thử nghiệm tình huống: Giả định hết oxy khi đang chuyển viện; kíp trực thao tác mở khóa, rút bình hết và thay bình oxy dự phòng mới mất bao nhiêu giây? Oxy có bị gián đoạn không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Thử nghiệm rung lắc & Tải trọng va đập",
        "desc": "(Thử nghiệm va đập mạnh) (Giải pháp 4: Thử nghiệm chịu tải) Đẩy cáng qua gờ giảm tốc và chạy xe trên đoạn đường gồ ghề: Bình oxy có bị rung giật, phát ra tiếng kêu kim loại va đập hoặc có nguy cơ tự bật chốt khóa không?",
        "status": "pass"
      },
      {
        "id": "ls_6",
        "stt": 6,
        "title": "Quy trình kiểm tra áp lực van trước xuất",
        "desc": "xe (Quy định phòng chống cháy nổ xe cứu thương) Khảo sát kíp trực: Có kiểm tra đồng hồ áp suất, độ kín khít van giảm áp trước khi xe lăn bánh để đảm bảo đủ oxy và triệt tiêu nguy cơ rò rỉ khí nén cháy nổ không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Tỷ lệ bình oxy được cố định đứng an",
        "desc": "toàn (Chuyển đổi từ tư thế nằm sang đứng) (Mốc cũ: 100% đặt nằm) Đo lường trong đợt thử nghiệm: Đạt: ...... % (Mục tiêu cam kết A3: 100%) -- 3 of 40 --",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Thời gian thao tác cố định/tháo bình oxy",
        "desc": "(So sánh chằng buộc dây với khóa ngàm) (Nguồn: Thao tác buộc dây) Bấm giờ thực tế hiện trường: Đo được: ...... giây/lần (Mục tiêu: < 15 giây)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Sự cố rơi đổ, trượt bình, rò rỉ van khí",
        "desc": "nén (Chỉ số an toàn người bệnh & cháy nổ) (Nguồn: Báo cáo an toàn 115) Ghi nhận trong đợt thử nghiệm: ...... vụ rơi đổ / rò rỉ van (Mục tiêu cam kết: 0 vụ)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu & Đối soát Lệnh điều xe",
        "desc": "115 (Kiểm toán tính xác thực của số liệu) Sổ nhật ký: ...... chuyến cấp cứu (Yêu cầu tối thiểu: ≥ 20 lượt)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Tỷ lệ bình oxy được cố định đứng an",
        "desc": "toàn (Chuyển đổi từ tư thế nằm sang đứng) (Mốc cũ: 100% đặt nằm) Đo lường trong đợt thử nghiệm: Đạt: ...... % (Mục tiêu cam kết A3: 100%) -- 3 of 40 --",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Thời gian thao tác cố định/tháo bình oxy",
        "desc": "(So sánh chằng buộc dây với khóa ngàm) (Nguồn: Thao tác buộc dây) Bấm giờ thực tế hiện trường: Đo được: ...... giây/lần (Mục tiêu: < 15 giây)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Sự cố rơi đổ, trượt bình, rò rỉ van khí",
        "desc": "nén (Chỉ số an toàn người bệnh & cháy nổ) (Nguồn: Báo cáo an toàn 115) Ghi nhận trong đợt thử nghiệm: ...... vụ rơi đổ / rò rỉ van (Mục tiêu cam kết: 0 vụ)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu & Đối soát Lệnh điều xe",
        "desc": "115 (Kiểm toán tính xác thực của số liệu) Sổ nhật ký: ...... chuyến cấp cứu (Yêu cầu tối thiểu: ≥ 20 lượt) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "02 Bộ giá treo bình oxy Inox 304 hoàn",
        "desc": "chỉnh (Hiện vật sáng chế) Đã gia công hoàn thiện bằng Inox 304, lắp đặt và vận hành thử nghiệm thực tế trên 02 xe cứu thương chuyên dụng của Trung tâm 115.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Dự thảo Quy trình Thao tác Nhanh cố",
        "desc": "định bình oxy (Chuẩn hóa thao tác kíp cấp cứu) Đã ban hành văn bản hướng dẫn các bước gắn, khóa lẫy và tháo bình oxy nhanh khi tiếp nhận người bệnh, có phê duyệt của Lãnh đạo TT 115.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Báo cáo Thử nghiệm độ an toàn & Chịu",
        "desc": "tải rung lắc (Hồ sơ chứng nhận an toàn cơ học) Đã thực hiện thử tải gấp đôi và kiểm định rung lắc trên đường gồ ghề; có biên bản xác nhận của Tổ Quản trị Tài sản và Thiết bị.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Sổ Nhật ký theo dõi chuyến cấp cứu thở",
        "desc": "oxy (Dữ liệu thực chứng khoa học Kaizen) Đã lập sổ theo dõi ghi chép chi tiết thời gian thao tác, tình trạng bình oxy trong từng lượt cấp cứu, có chữ ký xác nhận của Bác sĩ phụ trách.",
        "status": "pass"
      },
      {
        "id": "sp_9",
        "stt": 5,
        "title": "Bản thiết kế tương thích cơ khí & Dự toán",
        "desc": "Capex (Khả năng nhân rộng toàn đội xe) Đã khảo sát kích thước khung ray của các dòng xe cáng khác nhau (Starex, Transit...) và lập bảng dự toán chi phí (cam kết ≤ 1.500.000 VNĐ/bộ).",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Giá treo an toàn cơ học, thao tác nhanh < 15s, kíp trực thành thạo, không cản trở cấp cứu, có đủ",
      "loaiBDesc": "Đã gắn giá treo nhưng chốt khóa còn sượng, thiếu số liệu Mốc ban đầu, chưa thử",
      "loaiCDesc": "Chưa gia công lắp đặt hoàn chỉnh trên xe cứu thương; tiềm ẩn nguy cơ mất an toàn khi di",
      "ghiChu": "(Thẩm định viên ghi nhận chi tiết: Đánh giá độ an toàn cơ học giá treo khi rung lắc; kết quả kiểm tra ngẫu nhiên nhân viên kíp trực; đối soát số liệu chuyến xe thực tế với Lệnh điều xe; các nội dung kỹ thuật cần gia cố trước khi nộp Báo cáo A3 theo thông báo)",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-TIMMACH-01": {
    "docIndex": 3,
    "maDeTai": "KZ16-TIMMACH-01",
    "tenDeAn": "Mô hình Hộp cấp cứu STEMI chuyên dụng rút ngắn thời gian chuẩn bị thuốc và vật tư can thiệp cấp cứu",
    "donVi": "Khoa Tim",
    "canBo": "ĐD. Nguyễn Duy Hùng",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Kết cấu Hộp STEMI chuyên dụng",
        "desc": "(Giải pháp 1: Mô hình đóng gói tinh gọn) Hộp nhựa y tế chuyên dụng chịu va đập, chia ngăn khoa học; có nhãn định danh màu sắc trực quan phân tách rõ nhóm thuốc và vật tư can thiệp.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Đầy đủ 100% cơ số thuốc liều nạp chuẩn",
        "desc": "(Chuẩn hóa theo Phác đồ BYT) Đủ 100% thuốc liều nạp (Aspirin, Ticagrelor/Clopidogrel, Heparin nạp/tiêm), kèm đầy đủ bơm kim tiêm, dây truyền, kim luồn can thiệp đồng bộ.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Cơ chế niêm phong 1 lần & Kiểm soát hạn",
        "desc": "dùng (Giải pháp 2: Tem niêm phong an toàn & Bảng kiểm) Hộp được niêm phong bằng kẹp chì/tem vỡ một lần; bên ngoài dán Bảng kiểm ghi rõ ngày kiểm tra, người niêm phong và HẠN DÙNG GẦN NHẤT.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Vị trí chiến lược & Điều kiện bảo quản",
        "desc": "thuốc (Giải pháp 3: Bố trí tại cửa phòng DSA) Hộp đặt tại kệ chuyên dụng ngay cửa vào phòng can thiệp DSA; nhiệt độ bảo quản theo dõi liên tục $\\le 25^\\circ\\text{C}$; nhân viên tiếp cận đưa vào bàn can thiệp tức thì.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Bấm giờ mở hộp & Bày thuốc lên bàn vô",
        "desc": "khuẩn (Mục tiêu A3: Thao tác mở dưới 30 giây) Thử nghiệm tình huống: Kích hoạt kíp can thiệp; ĐD xé tem niêm phong, mở hộp và bày toàn bộ thuốc liều nạp ra bàn can thiệp: Bấm giờ có hoàn tất dưới 30 giây không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Kiểm tra ngẫu nhiên kíp trực Cathlab",
        "desc": "(Chống độc quyền tác giả & Đào tạo nội bộ) Chỉ định ngẫu nhiên 01 ĐD ca trực (ngoài nhóm tác giả) thực hiện mở hộp và kiểm tra cơ số: Có nắm vững vị trí các nhóm thuốc và quy trình phối hợp kíp không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Kiểm toán hạn sử dụng thực tế (Hạn sử",
        "desc": "dụng ngắn nhất) (Tử huyệt: Thuốc cấp cứu hết hạn ngầm) Mở ngẫu nhiên 01 hộp STEMI đang niêm phong: Kiểm tra chéo hạn sử dụng của từng lọ thuốc/vật tư bên trong với hạn dùng ghi trên tem niêm phong bên ngoài.",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Quy trình HOÀN NGUYÊN cơ số sau ca",
        "desc": "can thiệp (Giải pháp 4: Hoàn nguyên trong 02 giờ) Khảo sát quy trình: Sau khi sử dụng hộp STEMI, khoa có làm thủ tục hoàn nguyên thuốc/vật tư với Khoa Dược trong vòng 02 giờ và niêm phong lại hộp mới không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Sẵn sàng hộp dự phòng số 2 (Cơ số dự",
        "desc": "phòng số 2) (Đảm bảo cấp cứu liên tục 2 ca STEMI) Kiểm tra tại chỗ: Phòng Cathlab có duy trì tối thiểu 02 hộp STEMI (01 hộp trực chiến, 01 hộp dự phòng/hoàn nguyên) để tránh đứt gãy cấp cứu không?",
        "status": "pass"
      },
      {
        "id": "ls_6",
        "stt": 6,
        "title": "Đánh giá mức độ hài lòng Bác sĩ can thiệp",
        "desc": "(Tối ưu hóa thời gian Cửa – Bóng (Door- to-Balloon)) Khảo sát nhanh Bác sĩ can thiệp: Việc áp dụng Hộp STEMI có triệt tiêu tình trạng kíp mổ phải dừng lại đợi tìm thuốc/vật tư trong ca trực đêm không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Thời gian chuẩn bị đủ thuốc & vật tư",
        "desc": "(Bấm giờ từ khi gọi kíp đến khi đủ đồ) (Mốc cũ: 18 – 22 phút) Bấm giờ thực tế tại hiện trường: Đo được: ...... phút/ca (Mục tiêu cam kết A3: < 3 phút)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Tỷ lệ thiếu / nhầm lẫn vật tư khi vào mổ",
        "desc": "(Chỉ số an toàn phẫu thuật tim mạch) (Mốc cũ: Khoảng 12% ca đêm) Ghi nhận trong đợt thử nghiệm: ...... vụ thiếu / nhầm vật tư (Mục tiêu cam kết A3: 0%)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Thời gian Cửa – Bóng (Door-to-Balloon)  Chưa thống kê mốc cũ Đối soát Bệnh án EMR các ca STEMI:  ĐẠT (< 50p)",
        "desc": "-- 5 of 40 -- (Cửa – Bóng) (Thời gian vàng cứu cơ tim người bệnh) (Mốc cũ toàn viện: ~65 phút) Đạt trung bình: ...... phút (Mục tiêu cam kết: < 50 phút)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu ca can thiệp thực nghiệm",
        "desc": "(Đối soát Sổ can thiệp & Bệnh án EMR) Sổ can thiệp: ...... ca STEMI dùng hộp (Yêu cầu tối thiểu theo A3: ≥ 10 ca)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Thời gian chuẩn bị đủ thuốc & vật tư",
        "desc": "(Bấm giờ từ khi gọi kíp đến khi đủ đồ) (Mốc cũ: 18 – 22 phút) Bấm giờ thực tế tại hiện trường: Đo được: ...... phút/ca (Mục tiêu cam kết A3: < 3 phút)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Tỷ lệ thiếu / nhầm lẫn vật tư khi vào mổ",
        "desc": "(Chỉ số an toàn phẫu thuật tim mạch) (Mốc cũ: Khoảng 12% ca đêm) Ghi nhận trong đợt thử nghiệm: ...... vụ thiếu / nhầm vật tư (Mục tiêu cam kết A3: 0%)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Thời gian Cửa – Bóng (Door-to-Balloon)  Chưa thống kê mốc cũ Đối soát Bệnh án EMR các ca STEMI:  ĐẠT (< 50p)",
        "desc": "-- 5 of 40 -- (Cửa – Bóng) (Thời gian vàng cứu cơ tim người bệnh) (Mốc cũ toàn viện: ~65 phút) Đạt trung bình: ...... phút (Mục tiêu cam kết: < 50 phút)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu ca can thiệp thực nghiệm",
        "desc": "(Đối soát Sổ can thiệp & Bệnh án EMR) Sổ can thiệp: ...... ca STEMI dùng hộp (Yêu cầu tối thiểu theo A3: ≥ 10 ca) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "02 Bộ Hộp cấp cứu STEMI chuyên dụng",
        "desc": "hoàn chỉnh (Hiện vật cải tiến thực tế) Đã trang bị 02 hộp chuyên dụng đầy đủ thuốc/vật tư, có niêm phong một chiều và đặt tại vị trí quy định tại phòng DSA.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Bảng kiểm trực quan một trang dán ngoài",
        "desc": "hộp (Công cụ kiểm chuẩn an toàn) Đã thiết kế, in ấn và ép màng nhựa bảo vệ dán trên nắp hộp bảng kiểm trực quan danh mục thuốc, cơ số và vị trí các ngăn.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Quy trình Thao tác Chuẩn bị Can thiệp",
        "desc": "STEMI (SOP phối hợp kíp cấp cứu) Đã ban hành văn bản quy trình thao tác mở hộp, phối hợp thuốc và bàn giao giữa điều dưỡng và bác sĩ can thiệp.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Sổ Nhật ký theo dõi ca can thiệp STEMI",
        "desc": "(Dữ liệu thực chứng khoa học Kaizen) Đã lập sổ theo dõi ghi chép thời gian bấm giờ, tình trạng hộp, mã số niêm phong từng ca, có xác nhận của Bác sĩ can thiệp.",
        "status": "pass"
      },
      {
        "id": "sp_9",
        "stt": 5,
        "title": "Bản đề xuất nhân rộng mô hình Hộp cấp",
        "desc": "cứu chuyên dụng (Khả năng nhân rộng sang Stroke / ICU) Đã xây dựng phương án nhân rộng mô hình hộp cấp cứu chuyên biệt cho bệnh cảnh Đột quỵ não (Stroke Box) và Sốc phản vệ.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Hộp STEMI hoàn chỉnh, niêm phong chuẩn, kíp trực thao tác < 30s, kiểm soát tốt hạn dùng, có đủ",
      "loaiBDesc": "Đã có hộp nhưng chưa ghi hạn dùng ngắn nhất, thiếu hộp dự phòng số 2, chưa có quy",
      "loaiCDesc": "Chưa đóng gói Hộp STEMI thực tế tại Cathlab; chưa đưa vào áp dụng cho ca cấp cứu; báo",
      "ghiChu": "(Thẩm định viên ghi nhận chi tiết: Đánh giá hạn dùng thuốc bên trong hộp; kết quả bấm giờ mở hộp kíp trực; quy trình hoàn nguyên với Dược; đối soát số liệu Cửa – Bóng (Door-to-Balloon) trên Bệnh án EMR; các sản phẩm còn thiếu cần hoàn thiện trước khi nộp Báo cáo A3 theo thông báo)",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-NOISOI-01": {
    "docIndex": 4,
    "maDeTai": "KZ16-NOISOI-01",
    "tenDeAn": "Cải tiến quy trình đặt Endoloop trong môi trường nước hỗ trợ cắt polyp đại trực tràng có cuống",
    "donVi": "Trung tâm Nội soi",
    "canBo": "KTV. Vi Ngọc Tùng",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Máy bơm nước chuyên dụng tích hợp máy",
        "desc": "soi (Thiết bị can thiệp môi trường nước) Máy bơm nước chuyên dụng (Máy bơm nước chuyên dụng) kết nối đồng bộ dây soi đại tràng; kiểm soát lưu lượng và áp lực bơm, nước muối ấm 37°C.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Bộ dụng cụ thắt Endoloop can thiệp",
        "desc": "(Dụng cụ thắt gốc polyp có cuống) Súng bắn loop và dây loop ni-lông vô trùng chuyên dụng; cơ cấu kéo trượt mượt mà, vòng loop mở tối đa ≥ 30mm.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Máy cắt đốt điện cao tần tương thích",
        "desc": "(An toàn cắt điện sau khi siết loop) Máy cắt đốt điện cao tần có chế độ Endocut/Coagulation chuẩn; kết nối tấm bản cực an toàn, sẵn sàng thòng lọng cắt polyp chuyên dụng đồng bộ.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Kẹp Clip cầm máu cơ học dự phòng",
        "desc": "(Chốt chặn an toàn phòng biến chứng) Sẵn sàng tối thiểu 03 kẹp Hemoclip vô trùng tại bàn thủ thuật để xử trí tức thì nếu xảy ra biến chứng chảy máu hoặc rách niêm mạc.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Bấm giờ thao tác luồn & siết Endoloop",
        "desc": "(Mục tiêu A3: Rút ngắn thời gian đặt loop) Thử nghiệm tình huống thực tế: KTV phụ phối hợp Bác sĩ luồn và siết Endoloop qua đầu polyp trong môi trường nước: Bấm giờ có hoàn tất ≤ 5 phút không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Kỹ thuật bơm ngập nước & giải phóng",
        "desc": "nếp gấp (Nguyên lý can thiệp Kỹ thuật thắt trong môi trường nước) Kiểm tra thao tác: Nước có được bơm ngập hoàn toàn khoang đại tràng quanh polyp, cuống polyp có nổi tự do, không bị nếp gấp niêm mạc che khuất không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Kiểm tra thao tác KTV phụ ngoài nhóm",
        "desc": "tác giả (Chống độc quyền tác giả & Chuẩn hóa SOP) Chỉ định ngẫu nhiên 01 Điều dưỡng/KTV phụ nội soi ca trực thực hiện chuẩn bị và đẩy súng loop: Có phối hợp nhịp nhàng theo y lệnh Bác sĩ không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Kiểm tra dấu hiệu thiếu máu nuôi đầu",
        "desc": "polyp (Đảm bảo triệt mạch trước khi cắt) Quan sát trực tiếp trên màn hình nội soi: Sau khi siết loop, đầu polyp có chuyển màu tím tái/thiếu máu hoàn toàn trước khi bấm dao cắt không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Kiểm soát an toàn sau cắt polyp",
        "desc": "(Theo dõi chảy máu thứ phát & thủng) Quy trình quan sát gốc cuống sau cắt: Bác sĩ có kiểm tra diện cắt tối thiểu 03 phút trong môi trường nước và hút sạch nước trước khi rút máy không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Thời gian thao tác đặt Endoloop cuống",
        "desc": "polyp (Bấm giờ từ khi đưa loop vào kênh sinh thiết) (Mốc cũ: 12 – 15 phút) Bấm giờ thực tế tại hiện trường: Đo được: ...... phút/polyp (Mục tiêu cam kết A3: ≤ 5 phút)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Tỷ lệ biến chứng chảy máu trong & sau",
        "desc": "can thiệp (Chỉ số an toàn thủ thuật nội soi) (Mốc cũ: Khoảng 5 – 8%) Ghi nhận trong đợt thử nghiệm: ...... vụ chảy máu / tổng số ca (Mục tiêu cam kết A3: 0%)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Tỷ lệ siết loop thành công ngay lần đầu",
        "desc": "(Không bị trượt loop hoặc đứt cuống sớm) (Mốc cũ: Khoảng 80 – 85%) Theo dõi trong đợt thử nghiệm: Đạt: ...... % thành công lần đầu (Mục tiêu cam kết: ≥ 98%)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Cỡ mẫu ca lâm sàng thực nghiệm",
        "desc": "(Đối soát Sổ nội soi & Phần mềm Sổ can thiệp: ...... ca cắt polyp UEL -- 7 of 40 -- HIS/PACS) (Yêu cầu tối thiểu theo A3: ≥ 15 ca)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Thời gian thao tác đặt Endoloop cuống",
        "desc": "polyp (Bấm giờ từ khi đưa loop vào kênh sinh thiết) (Mốc cũ: 12 – 15 phút) Bấm giờ thực tế tại hiện trường: Đo được: ...... phút/polyp (Mục tiêu cam kết A3: ≤ 5 phút)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Tỷ lệ biến chứng chảy máu trong & sau",
        "desc": "can thiệp (Chỉ số an toàn thủ thuật nội soi) (Mốc cũ: Khoảng 5 – 8%) Ghi nhận trong đợt thử nghiệm: ...... vụ chảy máu / tổng số ca (Mục tiêu cam kết A3: 0%)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Tỷ lệ siết loop thành công ngay lần đầu",
        "desc": "(Không bị trượt loop hoặc đứt cuống sớm) (Mốc cũ: Khoảng 80 – 85%) Theo dõi trong đợt thử nghiệm: Đạt: ...... % thành công lần đầu (Mục tiêu cam kết: ≥ 98%)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Cỡ mẫu ca lâm sàng thực nghiệm",
        "desc": "(Đối soát Sổ nội soi & Phần mềm Sổ can thiệp: ...... ca cắt polyp UEL -- 7 of 40 -- HIS/PACS) (Yêu cầu tối thiểu theo A3: ≥ 15 ca) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Quy trình kỹ thuật Đặt Endoloop trong",
        "desc": "nước (SOP chuyên môn can thiệp tiêu hóa) Đã ban hành văn bản quy trình kỹ thuật chuẩn có chữ ký phê duyệt của Giám đốc Trung tâm Tiêu hóa và Hội đồng Kỹ thuật.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Bảng kiểm phối hợp Bác sĩ - KTV",
        "desc": "(Bảng kiểm an toàn trước khi siết loop) Đã in ấn và treo tại các phòng nội soi bảng kiểm 6 bước phối hợp an toàn khi cắt polyp đại trực tràng có cuống.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Video ghi hình can thiệp thực tế 03 ca",
        "desc": "(Minh chứng trực quan kỹ thuật thắt trong môi trường nước) Đã biên tập 03 video can thiệp lâm sàng chất lượng cao minh chứng các ca polyp khó, cuống to được thắt loop thành công.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo phân tích đối soát số liệu lâm sàng",
        "desc": "(Dữ liệu thực chứng khoa học Kaizen) Đã tổng hợp số liệu đo lường cỡ mẫu, đối soát kết quả giải phẫu bệnh và theo dõi bệnh nhân sau can thiệp.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Hệ thống bơm nước đồng bộ, KTV thao tác mượt mà ≤ 5 phút, không biến chứng chảy máu, đủ số",
      "loaiBDesc": "Đã triển khai kỹ thuật nhưng thao tác KTV phụ còn chậm, thiếu bảng kiểm dán phòng",
      "loaiCDesc": "Chưa thực hiện được kỹ thuật trong môi trường nước trên người bệnh; chưa có số liệu đo",
      "ghiChu": "Thẩm định viên ghi nhận: Đánh giá kỹ thuật bơm nước; thời gian siết loop; tỷ lệ thành công; an toàn cầm máu; đối soát sổ nội soi và HIS/PACS.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-XN-01": {
    "docIndex": 5,
    "maDeTai": "KZ16-XN-01",
    "tenDeAn": "Ứng dụng tính năng cảnh báo sớm thời gian thực và báo cáo tự động người bệnh trả kết quả muộn trên hệ thống HIS",
    "donVi": "Khoa Xét nghiệm",
    "canBo": " ĐÃ CÓ",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Màn hình theo dõi trực quan treo tường",
        "desc": "(Bảng điều hành trực quan tại hiện trường) Màn hình LCD chuyên dụng treo tại vị trí trung tâm phòng máy; hiển thị thời gian thực danh sách mẫu, đồng hồ đếm ngược và trạng thái phân tích.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Quy tắc đổi màu cảnh báo đa tầng",
        "desc": "(Cơ chế phát hiện sớm nguy cơ trễ hẹn) Hệ thống tự động đổi màu hiển thị: Màu xanh (mẫu trong hạn), Màu vàng (còn ≤ 15 phút đến hạn trả), Màu đỏ nhấp nháy (quá hạn cam kết).",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Kết nối liên thông 2 chiều LIS - HIS - Máy",
        "desc": "phân tích (Đồng bộ dữ liệu thời gian thực) Dữ liệu nhận mẫu từ mã vạch, giờ đưa vào máy xét nghiệm và giờ duyệt kết quả đồng bộ tự động, không có độ trễ truyền dữ liệu (> 5 giây).",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Tính năng xuất báo cáo trễ tự động cuối",
        "desc": "ngày (Công cụ kiểm soát chất lượng TAT) Hệ thống tự động xuất tệp nhật ký hệ thống các ca trễ hẹn lúc 17h00 hàng ngày, ghi rõ nguyên nhân (mẫu chạy lại, máy bảo dưỡng, pha loãng mẫu).",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Thử nghiệm tình huống kích hoạt cảnh",
        "desc": "báo vàng (Xử lý mẫu nguy cơ quá hạn) Thực nghiệm tại chỗ: Chọn 01 mẫu sắp chạm mốc 15 phút: KTV trực có chủ động ưu tiên đưa vào máy hoặc can thiệp xử lý ngay không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Kiểm tra xử lý sự cố mẫu phải chạy lại",
        "desc": "(Chạy lại mẫu) (Kỷ luật phản hồi thông tin) Tình huống mẫu bất thường cần pha loãng/chạy lại: KTV có bấm nút gia hạn có lý do trên phần mềm để thông báo cho phòng khám không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Kiểm tra chéo KTV ca trực ngẫu nhiên",
        "desc": "(Chống phụ thuộc tác giả đề án) Chỉ định ngẫu nhiên 01 KTV ca trực (ngoài nhóm tác giả): Thao tác tra cứu mẫu trên bảng theo dõi trực quan và giải thích các trường thông tin cảnh báo.",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Kiểm toán chống ký duyệt khống né cảnh",
        "desc": "báo (Tử huyệt: Ký trước khi máy chạy xong) Đối soát ngẫu nhiên 10 kết quả vừa duyệt: So sánh thời gian ký duyệt trên HIS với thời gian in kết quả thực tế trên máy phân tích.",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Phản hồi từ các Bác sĩ phòng khám ngoại",
        "desc": "trú (Đánh giá tác động lâm sàng) Khảo sát nhanh 03 Bác sĩ phòng khám: Tình trạng người bệnh giục kết quả xét nghiệm và các ca trễ hẹn có giảm rõ rệt không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Tỷ lệ mẫu xét nghiệm trả đúng hạn (Thời",
        "desc": "gian trả kết quả chuẩn (TAT)) (Cam kết sinh hóa/huyết học ≤ 60-90 phút) (Mốc cũ: Khoảng 88 – 91%) Trích xuất nhật ký hệ thống HIS đợt thử nghiệm: Đạt: ...... % đúng hạn (Mục tiêu cam kết A3: ≥ 98%)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Thời gian trễ trung bình của các ca muộn",
        "desc": "(Số phút vượt quá mốc cam kết) (Mốc cũ: 25 – 35 phút) Thống kê các ca trễ trong đợt thử nghiệm: Đo được: ...... phút/ca (Mục tiêu cam kết A3: ≤ 10 phút)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Số cuộc gọi hối thúc kết quả từ lâm sàng  Chưa đếm mốc cũ Ghi nhận nhật ký trực 3 ngày qua:  ĐẠT",
        "desc": "-- 9 of 40 -- (Mốc cũ: 15 – 20 cuộc/ngày) Đạt: ...... cuộc/ngày (Mục tiêu cam kết: Giảm ≥ 80%)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu kiểm toán đối soát trên HIS",
        "desc": "(Trích xuất dữ liệu thực chứng) chứng Dữ liệu trích xuất 3 ngày gần nhất: Tổng số: ...... mẫu xét nghiệm (Yêu cầu tối thiểu theo A3: ≥ 500 mẫu)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Tỷ lệ mẫu xét nghiệm trả đúng hạn (Thời",
        "desc": "gian trả kết quả chuẩn (TAT)) (Cam kết sinh hóa/huyết học ≤ 60-90 phút) (Mốc cũ: Khoảng 88 – 91%) Trích xuất nhật ký hệ thống HIS đợt thử nghiệm: Đạt: ...... % đúng hạn (Mục tiêu cam kết A3: ≥ 98%)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Thời gian trễ trung bình của các ca muộn",
        "desc": "(Số phút vượt quá mốc cam kết) (Mốc cũ: 25 – 35 phút) Thống kê các ca trễ trong đợt thử nghiệm: Đo được: ...... phút/ca (Mục tiêu cam kết A3: ≤ 10 phút)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Số cuộc gọi hối thúc kết quả từ lâm sàng  Chưa đếm mốc cũ Ghi nhận nhật ký trực 3 ngày qua:  ĐẠT",
        "desc": "-- 9 of 40 -- (Mốc cũ: 15 – 20 cuộc/ngày) Đạt: ...... cuộc/ngày (Mục tiêu cam kết: Giảm ≥ 80%)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu kiểm toán đối soát trên HIS",
        "desc": "(Trích xuất dữ liệu thực chứng) chứng Dữ liệu trích xuất 3 ngày gần nhất: Tổng số: ...... mẫu xét nghiệm (Yêu cầu tối thiểu theo A3: ≥ 500 mẫu) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Tính năng Bảng theo dõi trực quan cảnh",
        "desc": "báo trên HIS (Module phần mềm hoàn chỉnh) Module đã cài đặt và chạy ổn định 24/7 trên màn hình trung tâm khoa Xét nghiệm và các máy trạm.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Quy trình Thao tác Chuẩn xử lý mẫu nguy",
        "desc": "cơ trễ (SOP vận hành nội bộ khoa) Đã ban hành SOP quy định rõ trách nhiệm của KTV tiếp nhận, KTV chạy máy và Trưởng ca trực khi xuất hiện cảnh báo vàng/đỏ.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Bảng hướng dẫn xử lý sự cố dán tại máy",
        "desc": "phân tích (Công cụ trực quan hóa hiện trường) Đã thiết kế và dán tại từng vị trí máy phân tích bảng hướng dẫn các bước xử lý nhanh khi mẫu bị lỗi hoặc trễ giờ.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo tự động tổng kết thời gian trả kết",
        "desc": "quả (TAT) gửi Lãnh đạo (Công cụ quản trị chất lượng số) Hệ thống tự động gửi email/báo cáo định kỳ thời gian trả kết quả (TAT) hàng ngày cho Trưởng khoa và Phòng KHTH/Tổ QLCL.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Bảng theo dõi trực quan hoạt động chuẩn xác, KTV xử lý mẫu nguy cơ trễ kịp thời, Thời gian trả",
      "loaiBDesc": "Đã có bảng theo dõi trực quan nhưng chưa kết nối màn hình lớn, KTV còn lúng túng",
      "loaiCDesc": "Hệ thống cảnh báo chưa vận hành thực tế trên HIS; tỷ lệ trễ mẫu vẫn cao; báo cáo Ban Tổ",
      "ghiChu": "Thẩm định viên ghi nhận: Kiểm tra kết nối thời gian thực; độ trễ truyền mã vạch; đối soát giờ ký duyệt HIS với nhật ký máy xét nghiệm; kiểm tra báo cáo thời gian trả kết quả (TAT) cuối ngày.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-XN-03": {
    "docIndex": 6,
    "maDeTai": "KZ16-XN-03",
    "tenDeAn": "Chuyển đổi số quy trình trả kết quả xét nghiệm trả sau qua ứng dụng Myhungvuong",
    "donVi": "Khoa Xét nghiệm",
    "canBo": "CN. Trần Thị Khanh",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Hệ thống ký số điện tử của Bác sĩ xét",
        "desc": "nghiệm (Tính pháp lý kết quả trả trực tuyến) Bác sĩ xét nghiệm ký số trực tiếp trên tệp kết quả PDF; có dấu thời gian số hóa hợp lệ và chứng thư số hợp lệ của bệnh viện.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "API đồng bộ tự động LIS sang Ứng dụng",
        "desc": "Myhungvuong (Tốc độ đẩy dữ liệu lên máy chủ) Ngay khi kết quả được ký số, hệ thống tự động đẩy tệp PDF lên ứng dụng Myhungvuong trong vòng ≤ 30 giây, không cần thao tác đẩy thủ công.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Hệ thống tin nhắn thông báo Zalo ZNS /",
        "desc": "SMS (Thông báo đa kênh cho người bệnh) Tự động kích hoạt tin nhắn ZNS gửi tới số điện thoại người bệnh thông báo: 'Kết quả xét nghiệm của Quý khách đã có trên Myhungvuong'.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Bảo mật dữ liệu cá nhân & Mã hóa y tế",
        "desc": "(Tuân thủ an toàn thông tin y tế) Kết quả chỉ xem được khi người bệnh đăng nhập đúng tài khoản định danh (SĐT/CCCD); không để lộ thông tin cho bên thứ ba.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Thử nghiệm tình huống duyệt và nhận tin",
        "desc": "thời gian thực (Đo độ trễ hệ thống) Thực nghiệm tại chỗ: Bác sĩ ký số 01 kết quả mẫu nuôi cấy vi sinh -> Bấm giờ trên điện thoại người bệnh: Tin nhắn và kết quả có về trong < 1 phút?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Kiểm tra thao tác hướng dẫn của nhân",
        "desc": "viên lấy mẫu (Tư vấn cài ứng dụng & quét QR tại bàn) Quan sát thực tế nhân viên tiếp đón: Có giải thích rõ cho người bệnh về việc tra cứu kết quả trên app và phát phiếu hẹn có mã QR không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Kiểm tra phương án hỗ trợ người cao tuổi",
        "desc": "(Người không sử dụng điện thoại thông minh) Kiểm tra quy trình dự phòng: Với bệnh nhân già yếu không có điện thoại thông minh, khoa có phương án in trả giấy hoặc gửi bưu điện theo yêu cầu không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Kiểm tra ngẫu nhiên nhân viên trực tổng",
        "desc": "đài CSKH (Phối hợp liên khoa Nhánh B) Phỏng vấn nhân viên CSKH: Có nắm rõ quy trình hỗ trợ người bệnh khi gặp sự cố không đăng nhập được ứng dụng hoặc không tải được tệp PDF không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Khảo sát sự hài lòng của người bệnh ngoại",
        "desc": "trú (Tiết kiệm chi phí và thời gian đi lại) Phỏng vấn ngẫu nhiên 03 người bệnh ngoại trú: Người bệnh có hài lòng khi không phải quay lại bệnh viện chờ lấy kết quả trả sau không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Tỷ lệ người bệnh xét nghiệm trả sau",
        "desc": "nhận qua App (Tỷ lệ chuyển đổi số quy trình) (Mốc cũ: 0% - trả giấy 100%) Ghi nhận trên hệ thống đợt thử nghiệm: Đạt: ...... % người bệnh tra cứu qua ứng dụng (Mục tiêu cam kết A3: ≥ 70%)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Thời gian người bệnh tiếp cận kết quả",
        "desc": "sau ký duyệt (Tốc độ phản hồi thông tin y tế) (Mốc cũ: 1 – 2 ngày chờ lấy giấy) Đo độ trễ hệ thống thực tế: Đạt trung bình: ...... phút (Mục tiêu cam kết A3: ≤ 5 phút)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Tỷ lệ người bệnh phải quay lại viện chỉ",
        "desc": "để lấy giấy Khảo sát đợt thử nghiệm: Còn: ...... % quay lại lấy giấy -- 11 of 40 -- (Chỉ số lãng phí thời gian di chuyển) (Mốc cũ: Khoảng 85 – 90%) (Mục tiêu cam kết: Giảm ≤ 15%)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu ca xét nghiệm trả sau thử",
        "desc": "nghiệm (Đối soát nhật ký hệ thống LIS và Myhungvuong) chứng Trích xuất hệ thống 1 tuần thử nghiệm: Đạt: ...... ca gửi trực tuyến thành công (Yêu cầu tối thiểu theo A3: ≥ 50 ca)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Tỷ lệ người bệnh xét nghiệm trả sau",
        "desc": "nhận qua App (Tỷ lệ chuyển đổi số quy trình) (Mốc cũ: 0% - trả giấy 100%) Ghi nhận trên hệ thống đợt thử nghiệm: Đạt: ...... % người bệnh tra cứu qua ứng dụng (Mục tiêu cam kết A3: ≥ 70%)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Thời gian người bệnh tiếp cận kết quả",
        "desc": "sau ký duyệt (Tốc độ phản hồi thông tin y tế) (Mốc cũ: 1 – 2 ngày chờ lấy giấy) Đo độ trễ hệ thống thực tế: Đạt trung bình: ...... phút (Mục tiêu cam kết A3: ≤ 5 phút)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Tỷ lệ người bệnh phải quay lại viện chỉ",
        "desc": "để lấy giấy Khảo sát đợt thử nghiệm: Còn: ...... % quay lại lấy giấy -- 11 of 40 -- (Chỉ số lãng phí thời gian di chuyển) (Mốc cũ: Khoảng 85 – 90%) (Mục tiêu cam kết: Giảm ≤ 15%)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu ca xét nghiệm trả sau thử",
        "desc": "nghiệm (Đối soát nhật ký hệ thống LIS và Myhungvuong) chứng Trích xuất hệ thống 1 tuần thử nghiệm: Đạt: ...... ca gửi trực tuyến thành công (Yêu cầu tối thiểu theo A3: ≥ 50 ca) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Tính năng trả kết quả xét nghiệm trên",
        "desc": "Myhungvuong (Sản phẩm phần mềm di động) Tính năng hoạt động trơn tru trên cả 2 nền tảng iOS và Android; giao diện hiển thị rõ ràng các chỉ số và khoảng tham chiếu.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Quy trình phối hợp liên khoa Xét nghiệm -",
        "desc": "CNTT - CSKH (SOP vận hành Nhánh B) Đã ban hành văn bản quy trình phối hợp liên khoa có chữ ký của Lãnh đạo 3 đơn vị và phê duyệt của Ban Giám đốc.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Biển đứng & Tờ rơi hướng dẫn tra cứu tại",
        "desc": "khu lấy mẫu (Truyền thông trực quan hiện trường) Đã đặt Biển đứng hướng dẫn có hình ảnh hướng dẫn 3 bước cài ứng dụng và tra cứu kết quả tại sảnh chờ và bàn lấy mẫu xét nghiệm.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo thống kê lượt tải & phản hồi",
        "desc": "người dùng (Dữ liệu thực chứng khoa học Kaizen) Đã trích xuất báo cáo tỷ lệ gửi tin ZNS thành công, tỷ lệ mở xem kết quả và đánh giá mức độ hài lòng của người dùng.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Hệ thống ký số và đồng bộ tự động < 1 phút, tỷ lệ nhận kết quả trực tuyến ≥ 70%, bảo mật tốt,",
      "loaiBDesc": "Đã gửi được kết quả lên ứng dụng nhưng tin nhắn Zalo còn lỗi, nhân viên lấy mẫu chưa",
      "loaiCDesc": "Chưa kết nối được hệ thống ký số tự động; người bệnh vẫn phải đến viện lấy giấy; báo cáo",
      "ghiChu": "Thẩm định viên ghi nhận: Kiểm tra tốc độ ký số và đẩy dữ liệu; kiểm tra nội dung tin nhắn ZNS; đối soát bảo mật CCCD; tỷ lệ cài ứng dụng thực tế.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-KHTH-01": {
    "docIndex": 7,
    "maDeTai": "KZ16-KHTH-01",
    "tenDeAn": "Chuyển đổi số hoạt động quản lý hành nghề nội bộ (HV-MRM)",
    "donVi": "Phòng Kế hoạch Tổng hợp",
    "canBo": "Nguyễn Thành Lâm",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Nền tảng phần mềm quản lý hành nghề",
        "desc": "HV-MRM (Hệ thống số hóa hồ sơ nhân sự y tế) Hệ thống ứng dụng trực tuyến HV-MRM hoạt động ổn định trên mạng LAN nội bộ; quản lý tập trung hồ sơ CCHN, văn bằng, chứng chỉ và phạm vi chuyên môn.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Tính năng phân quyền danh mục kỹ thuật",
        "desc": "cá nhân hóa (Ma trận thẩm quyền phẫu thuật/thủ thuật) Từng Bác sĩ/KTV được cấp danh mục kỹ thuật được phép thực hiện (kỹ thuật chính, kỹ thuật phụ) căn cứ theo quyết định phê duyệt của BGĐ.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Module khóa chặn chỉ định sai quyền trên",
        "desc": "HIS (Chốt chặn an toàn pháp lý thời gian thực) Phần mềm HIS tự động kiểm tra quyền trên HV-MRM: Nếu Bác sĩ chỉ định kỹ thuật ngoài danh mục phân quyền, hệ thống lập tức khóa chặn không cho lưu.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Cơ chế cảnh báo tự động hạn CME &",
        "desc": "CCHN (Bảo đảm điều kiện duy trì hành nghề) Hệ thống tự động bật cảnh báo vàng trước 90 ngày và cảnh báo đỏ trước 30 ngày đối với nhân sự sắp thiếu số tiết đào tạo liên tục CME.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Thử nghiệm tình huống chỉ định kỹ thuật",
        "desc": "vượt quyền (Kiểm tra chốt chặn an toàn HIS) Thực nghiệm tại chỗ: Đăng nhập tài khoản 01 bác sĩ nội trú, thử chỉ định 01 phẫu thuật loại đặc biệt chưa được duyệt: HIS có khóa chặn tức thì không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Kiểm tra thử nghiệm quy trình cập nhật",
        "desc": "chứng chỉ & phê duyệt kỹ thuật (Thời gian hoàn tất thủ tục phân quyền) Thực hiện quy trình mẫu: Tải lên 01 chứng chỉ nội soi mới -> Thao tác phê duyệt 2 cấp (KHTH -> BGĐ): Thời gian mở quyền trên HIS có ≤ 24 giờ?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Đối soát tính chính xác hồ sơ thực tế",
        "desc": "(Kiểm toán tính trung thực dữ liệu) Chọn ngẫu nhiên 05 hồ sơ Bác sĩ (Ngoại, Sản, HSCC, CĐHA): Đối chiếu dữ liệu trên HV-MRM với bản gốc giấy phép hành nghề lưu tại Phòng TCHC.",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Kiểm tra tính năng cảnh báo thiếu chứng",
        "desc": "chỉ CME (Chống rủi ro pháp lý khi thanh tra Sở Y tế) Trích xuất danh sách nhân sự sắp hết hạn chu kỳ 2 năm hoặc 5 năm CME: Hệ thống có phân loại rõ số giờ còn thiếu của từng người không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Khảo sát ý kiến Lãnh đạo các khoa lâm",
        "desc": "sàng (Minh bạch phân quyền và giảm thủ tục giấy) Phỏng vấn 02 Trưởng khoa lâm sàng: Việc tra cứu phân quyền kỹ thuật của phẫu thuật viên trên phần mềm có thuận tiện và minh bạch không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Tỷ lệ nhân sự hành nghề được số hóa",
        "desc": "trên HV-MRM (Độ phủ dữ liệu toàn viện) (Mốc cũ: Khoảng 35 – 40% hồ sơ rời) Kiểm toán trên hệ thống thực tế: Đạt: ...... % nhân sự có hồ sơ số (Mục tiêu cam kết A3: 100%)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Thời gian tra cứu & trích xuất hồ sơ  Chưa bấm giờ mốc cũ Bấm giờ thực tế trên HV-MRM:  ĐẠT (≤ 30s)",
        "desc": "-- 13 of 40 -- phân quyền 1 BS (Tốc độ đáp ứng thanh tra/kiểm tra) (Mốc cũ: 15 – 30 phút tìm hồ sơ giấy) Đo được: ...... giây/hồ sơ (Mục tiêu cam kết A3: ≤ 30 giây)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Tỷ lệ chỉ định kỹ thuật sai thẩm quyền bị",
        "desc": "xuất toán (Chỉ số an toàn thanh toán BHYT) (Mốc cũ: Thỉnh thoảng xảy ra) Ghi nhận trong đợt thử nghiệm: ...... vụ vi phạm phân quyền (Mục tiêu cam kết: 0%)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng số hồ sơ nhân sự đã kiểm toán đối",
        "desc": "soát (Đối soát chéo với Phòng TCHC) Số hồ sơ đã xác thực 100%: Đạt: ...... / ...... nhân sự (Yêu cầu tối thiểu theo A3: 100% Bác sĩ)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Tỷ lệ nhân sự hành nghề được số hóa",
        "desc": "trên HV-MRM (Độ phủ dữ liệu toàn viện) (Mốc cũ: Khoảng 35 – 40% hồ sơ rời) Kiểm toán trên hệ thống thực tế: Đạt: ...... % nhân sự có hồ sơ số (Mục tiêu cam kết A3: 100%)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Thời gian tra cứu & trích xuất hồ sơ  Chưa bấm giờ mốc cũ Bấm giờ thực tế trên HV-MRM:  ĐẠT (≤ 30s)",
        "desc": "-- 13 of 40 -- phân quyền 1 BS (Tốc độ đáp ứng thanh tra/kiểm tra) (Mốc cũ: 15 – 30 phút tìm hồ sơ giấy) Đo được: ...... giây/hồ sơ (Mục tiêu cam kết A3: ≤ 30 giây)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Tỷ lệ chỉ định kỹ thuật sai thẩm quyền bị",
        "desc": "xuất toán (Chỉ số an toàn thanh toán BHYT) (Mốc cũ: Thỉnh thoảng xảy ra) Ghi nhận trong đợt thử nghiệm: ...... vụ vi phạm phân quyền (Mục tiêu cam kết: 0%)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng số hồ sơ nhân sự đã kiểm toán đối",
        "desc": "soát (Đối soát chéo với Phòng TCHC) Số hồ sơ đã xác thực 100%: Đạt: ...... / ...... nhân sự (Yêu cầu tối thiểu theo A3: 100% Bác sĩ) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Hệ thống phần mềm HV-MRM hoàn",
        "desc": "chỉnh (Công cụ quản trị số cốt lõi) Phần mềm đưa vào vận hành chính thức, có phân quyền quản trị cho KHTH, TCHC và người hành nghề xem thông tin cá nhân.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Quy chế Quản lý hành nghề và phân",
        "desc": "quyền kỹ thuật (Văn bản quy phạm nội bộ) Đã ban hành quy chế nội bộ về thẩm quyền chỉ định kỹ thuật, quy trình cấp mới/bổ sung kỹ thuật và chế tài vi phạm.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Module tích hợp kiểm soát chỉ định trên",
        "desc": "HIS (Chốt chặn kỹ thuật tự động) API kết nối giữa HV-MRM và HIS hoạt động ổn định, khóa chặn thành công 100% các chỉ định ngoài danh mục phân quyền.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo tổng kiểm toán hành nghề y toàn",
        "desc": "viện (Sản phẩm tham mưu Ban Giám đốc) Đã xuất báo cáo tổng hợp thực trạng chứng chỉ hành nghề, danh mục kỹ thuật và lộ trình đào tạo bổ sung CME cho toàn viện.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "HV-MRM hoạt động ổn định, số hóa 100% hồ sơ bác sĩ, khóa chặn HIS hiệu quả, tra cứu < 30",
      "loaiBDesc": "Đã có phần mềm nhưng chưa đồng bộ hết danh mục kỹ thuật các khoa, chốt chặn HIS",
      "loaiCDesc": "Chưa liên thông được với phần mềm HIS; hồ sơ vẫn quản lý phân tán trên giấy; báo cáo",
      "ghiChu": "Thẩm định viên ghi nhận: Thử nghiệm khóa chặn HIS; đối soát chéo hồ sơ gốc TCHC; kiểm tra thuật toán cảnh báo hạn CME 90 ngày; đánh giá tính mở rộng hệ thống.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-CDHA-01": {
    "docIndex": 8,
    "maDeTai": "KZ16-CDHA-01",
    "tenDeAn": "Xây dựng và chuyển đổi số phương pháp 3P tại khoa Chẩn đoán Hình ảnh",
    "donVi": "Khoa CĐHA",
    "canBo": "phê duyệt bảng hệ số kỹ thuật của 100% dịch vụ chụp.",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Module trích xuất số liệu 3P tích hợp",
        "desc": "RIS/PACS (Số hóa ghi nhận sản lượng kỹ thuật) Hệ thống tự động ghi nhận số lượt chụp của KTV và số lượt đọc/ký của Bác sĩ theo mã ca chụp thực tế trên hệ thống PACS.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Bảng trọng số độ phức tạp kỹ thuật wRVU",
        "desc": "(Phân định giá trị kỹ thuật theo chuyên sâu) Đã phân loại rõ hệ số độ phức tạp: Kỹ thuật can thiệp mạch/chụp mạch vành (hệ số cao), CT có tiêm (trung bình), X-quang thường quy (chuẩn).",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Bảng kiểm đánh giá chất lượng ảnh (Chỉ",
        "desc": "số chất lượng ảnh) (Gắn chất lượng chẩn đoán vào P3) Tích hợp tính năng đánh giá chất lượng phim: Bác sĩ chấm điểm phim lỗi (sai tư thế, rung, cắt cụt) trực tiếp trên PACS; trừ điểm P3 KTV.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Bảng theo dõi công khai điểm P3 cá nhân",
        "desc": "hàng ngày (Minh bạch đãi ngộ theo hiệu suất) Bảng theo dõi trực quan cho phép từng nhân viên tra cứu điểm hiệu suất cá nhân lũy kế trong tháng; đảm bảo công bằng, khách quan.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Kiểm toán đối soát sản lượng ca chụp thực",
        "desc": "tế (Chống khai khống số ca kỹ thuật) Chọn ngẫu nhiên 01 ngày trực: Đối chiếu số ca ghi nhận trên Bảng theo dõi trực quan 3P của KTV trực với nhật ký ca chụp trên máy chụp cắt lớp vi tính (CT).",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Kiểm tra tính năng trừ điểm phim chụp lỗi",
        "desc": "kỹ thuật (Bảo đảm chất lượng hình ảnh y khoa) Thử nghiệm trên PACS: Bác sĩ đánh dấu 01 ca phim chụp hỏng phải chụp lại -> Hệ thống có tự động trừ điểm lỗi kỹ thuật của KTV không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Bấm giờ trả kết quả phim CT/MRI cấp",
        "desc": "cứu (Chỉ số an toàn người bệnh cấp cứu) Kiểm tra ngẫu nhiên 03 ca CT sọ não cấp cứu trong tuần: Bấm giờ từ khi chụp xong đến khi có kết quả đọc trên PACS có ≤ 30 phút?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Kiểm tra chéo nhân viên KTV/Bác sĩ trong",
        "desc": "khoa (Độ am hiểu và đồng thuận quy chế 3P) Phỏng vấn ngẫu nhiên 01 Bác sĩ và 01 KTV: Có nắm vững cách tính điểm P3 của bản thân và bảng phân loại hệ số kỹ thuật wRVU không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Đánh giá thời gian tổng hợp số liệu cuối",
        "desc": "tháng (Hiệu quả giải phóng lao động quản lý) Khảo sát người làm biểu khoa: Việc tổng hợp số liệu tính thu nhập tăng thêm cuối tháng có giảm từ 3 ngày xuống dưới 15 phút không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Thời gian tổng hợp dữ liệu 3P toàn khoa",
        "desc": "cuối tháng (Số hóa hoàn toàn quy trình tính toán) (Mốc cũ: 3 – 4 ngày làm thủ công) Thử nghiệm trích xuất thực tế: Đo được: ...... phút (Mục tiêu cam kết A3: ≤ 15 phút)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Tỷ lệ phim chụp lỗi kỹ thuật phải chụp",
        "desc": "lại (Chỉ số lãng phí liều tia & thời gian) (Mốc cũ: Khoảng 3 – 5%) Dữ liệu trích xuất đợt thử nghiệm: Còn: ...... % phim lỗi (Mục tiêu cam kết A3: ≤ 1.5%) 1.5%)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Thời gian trả kết quả phim CT/MRI cấp",
        "desc": "cứu (Đồng hồ đếm ngược trên hệ thống RIS) (Mốc cũ: 45 – 60 phút) Đối soát nhật ký ca cấp cứu: Đạt trung bình: ...... phút (Mục tiêu cam kết: ≤ 30 phút) -- 15 of 40 --",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Cỡ mẫu nhân sự tham gia thử nghiệm 3P",
        "desc": "(Độ bao phủ nhân viên toàn khoa) Tổng số nhân sự áp dụng thực tế: Đạt: ...... / ...... nhân viên khoa (Yêu cầu tối thiểu theo A3: 100%)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Thời gian tổng hợp dữ liệu 3P toàn khoa",
        "desc": "cuối tháng (Số hóa hoàn toàn quy trình tính toán) (Mốc cũ: 3 – 4 ngày làm thủ công) Thử nghiệm trích xuất thực tế: Đo được: ...... phút (Mục tiêu cam kết A3: ≤ 15 phút)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Tỷ lệ phim chụp lỗi kỹ thuật phải chụp",
        "desc": "lại (Chỉ số lãng phí liều tia & thời gian) (Mốc cũ: Khoảng 3 – 5%) Dữ liệu trích xuất đợt thử nghiệm: Còn: ...... % phim lỗi (Mục tiêu cam kết A3: ≤ 1.5%) 1.5%)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Thời gian trả kết quả phim CT/MRI cấp",
        "desc": "cứu (Đồng hồ đếm ngược trên hệ thống RIS) (Mốc cũ: 45 – 60 phút) Đối soát nhật ký ca cấp cứu: Đạt trung bình: ...... phút (Mục tiêu cam kết: ≤ 30 phút) -- 15 of 40 --",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Cỡ mẫu nhân sự tham gia thử nghiệm 3P",
        "desc": "(Độ bao phủ nhân viên toàn khoa) Tổng số nhân sự áp dụng thực tế: Đạt: ...... / ...... nhân viên khoa (Yêu cầu tối thiểu theo A3: 100%) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Bảng quy chuẩn hệ số độ phức tạp wRVU",
        "desc": "CĐHA (Khung kỹ thuật định mức chuẩn) Đã xây dựng và được Lãnh đạo Khoa CĐHA cùng Phòng TCHC/Tổ QLCL phê duyệt bảng hệ số kỹ thuật của 100% dịch vụ chụp.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Module phần mềm tính điểm 3P tích hợp",
        "desc": "RIS/PACS (Công cụ số hóa tính toán) Module vận hành ổn định, tự động tổng hợp sản lượng ca chụp, điểm chất lượng phim và điểm hiệu suất cá nhân.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Quy chế phân phối thu nhập tăng thêm",
        "desc": "theo 3P (Thể chế hóa động lực làm việc) Đã ban hành văn bản quy chế chi trả nội bộ khoa theo 3P công khai, dân chủ, gắn liền trách nhiệm với chất lượng hình ảnh.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo thử nghiệm 01 tháng vận hành 3P",
        "desc": "(Dữ liệu thực chứng khoa học Kaizen) Đã lập báo cáo so sánh thu nhập, năng suất lao động và tỷ lệ phim lỗi trước và sau khi áp dụng mô hình 3P.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Hệ thống 3P tích hợp RIS/PACS hoàn chỉnh, tự động tính điểm, tỷ lệ phim lỗi ≤ 1.5%, trả kết quả",
      "loaiBDesc": "Đã có bảng tính nhưng còn tổng hợp bán thủ công, tính năng chấm điểm phim lỗi chưa",
      "loaiCDesc": "Chưa số hóa được quy trình 3P trên phần mềm; vẫn tính lương cào bằng; báo cáo Ban Tổ",
      "ghiChu": "Thẩm định viên ghi nhận: Kiểm tra kết nối trích xuất RIS/PACS; đối soát số ca thực tế trên máy chụp; kiểm tra tiêu chí trừ điểm lỗi; khảo sát nhân viên.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-PC-01": {
    "docIndex": 9,
    "maDeTai": "KZ16-PC-01",
    "tenDeAn": "Cải tiến quy trình phúc tra và số hóa giám sát thực thi kiến nghị sau thanh tra chuyên đề",
    "donVi": "Phòng Pháp chế",
    "canBo": "LS. Nguyễn Đức Nhưng",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Bảng điều hành trực quan số hóa giám sát",
        "desc": "kiến nghị (Quản lý trực quan tiến độ khắc phục) Hệ thống phần mềm theo dõi toàn bộ kiến nghị sau thanh tra phân theo 3 trạng thái: Đang khắc phục (Vàng), Đã hoàn thành (Xanh), Quá hạn (Đỏ).",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Cơ chế tự động gửi cảnh báo đôn đốc thời",
        "desc": "gian thực (Chống trôi việc và nguội kiến nghị) Hệ thống tự động kích hoạt thông báo nhắc việc gửi Trưởng khoa/phòng trước hạn 7 ngày, 3 ngày và khi chạm mốc quá hạn.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Biểu mẫu Biên bản Phúc tra Gemba điện",
        "desc": "tử chuẩn hóa (Bảng kiểm kiểm chứng bằng chứng thực tế) Biên bản phúc tra chuẩn hóa với các trường bắt buộc: Bằng chứng khắc phục (ảnh chụp, tài liệu đối chứng), người xác nhận, kết luận đóng việc.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Cơ chế phân loại rủi ro pháp lý theo mức",
        "desc": "độ lỗi (Chặn đứng rủi ro tái diễn hệ thống) Tự động cảnh báo các lỗi nghiêm trọng lặp lại từ 02 lần trở lên để chuyển hồ sơ lên Hội đồng Thi đua - Kỷ luật và Ban Giám đốc.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Thử nghiệm tình huống tạo kiến nghị &",
        "desc": "đôn đốc tự động (Kiểm tra cơ chế vận hành hệ thống) Thực nghiệm tại chỗ: Khởi tạo 01 kiến nghị kiểm tra quy chế kê đơn có hạn",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 7,
        "title": "ngày: Hệ thống có gửi thông báo và lịch phúc tra tự động không?",
        "desc": "",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 2,
        "title": "Kiểm tra quy trình phúc tra bằng chứng",
        "desc": "thực tế (Chống nghiệm thu khắc phục trên giấy) Chọn ngẫu nhiên 03 kiến nghị đã 'Đóng' (Đã hoàn thành): Cán bộ pháp chế có ảnh chụp hiện trường hoặc tài liệu đối chứng lưu trên phần mềm không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 3,
        "title": "Kiểm tra ngẫu nhiên 01 khoa lâm sàng",
        "desc": "đang bị kiến nghị (Đánh giá tính chủ động của hiện trường) Phỏng vấn Trưởng khoa Cấp cứu/Khám bệnh: Khoa có nhận được cảnh báo tự động không? Việc báo cáo tiến độ khắc phục trên phần mềm có thuận tiện không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 4,
        "title": "Đối soát số liệu tái diễn lỗi cùng nội dung",
        "desc": "(Hiệu lực răn đe và hoàn thiện thể chế) Kiểm tra ma trận theo dõi: Có lỗi nào về thủ tục hồ sơ bệnh án hoặc kê đơn BHYT bị lặp lại trong 2 đợt thanh tra gần nhất không?",
        "status": "pass"
      },
      {
        "id": "ls_6",
        "stt": 5,
        "title": "Thời gian ban hành thông báo kết luận sau",
        "desc": "thanh tra (Tốc độ phản hồi và tính kịp thời) Kiểm tra nhật ký 2 đợt thanh tra vừa qua: Từ ngày kết thúc đợt kiểm tra đến ngày ban hành văn bản kiến nghị có đảm bảo ≤ 3 ngày không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Tỷ lệ kiến nghị sau thanh tra khắc phục",
        "desc": "đúng hạn (Chỉ số hiệu lực thi hành thể chế) (Mốc cũ: Khoảng 55 – 65%) Trích xuất hệ thống đợt thử nghiệm: Đạt: ...... % đúng hạn (Mục tiêu cam kết A3: ≥ 90%)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Tỷ lệ tái diễn lỗi sau thanh tra cùng nội",
        "desc": "dung (Chỉ số bền vững của giải pháp) (Mốc cũ: Khoảng 25 – 30%) Kiểm tra đợt phúc tra thực tế: Còn: ...... % lỗi tái diễn (Mục tiêu cam kết A3: ≤ 5%)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Thời gian ban hành thông báo kiến nghị",
        "desc": "sau thanh tra (Rút ngắn thời gian xử lý thủ tục) (Mốc cũ: 7 – 10 ngày) Ghi nhận thực tế đợt gần nhất: Đo được: ...... ngày làm việc (Mục tiêu cam kết: ≤ 3 ngày) ngày) -- 17 of 40 --",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng số kiến nghị thanh tra đưa vào",
        "desc": "giám sát số (Cỡ mẫu kiểm toán toàn diện) Dữ liệu giám sát trên hệ thống: Đạt: ...... kiến nghị (100% các đợt) (Yêu cầu tối thiểu theo A3: ≥ 20 kiến nghị)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Tỷ lệ kiến nghị sau thanh tra khắc phục",
        "desc": "đúng hạn (Chỉ số hiệu lực thi hành thể chế) (Mốc cũ: Khoảng 55 – 65%) Trích xuất hệ thống đợt thử nghiệm: Đạt: ...... % đúng hạn (Mục tiêu cam kết A3: ≥ 90%)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Tỷ lệ tái diễn lỗi sau thanh tra cùng nội",
        "desc": "dung (Chỉ số bền vững của giải pháp) (Mốc cũ: Khoảng 25 – 30%) Kiểm tra đợt phúc tra thực tế: Còn: ...... % lỗi tái diễn (Mục tiêu cam kết A3: ≤ 5%)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Thời gian ban hành thông báo kiến nghị",
        "desc": "sau thanh tra (Rút ngắn thời gian xử lý thủ tục) (Mốc cũ: 7 – 10 ngày) Ghi nhận thực tế đợt gần nhất: Đo được: ...... ngày làm việc (Mục tiêu cam kết: ≤ 3 ngày) ngày) -- 17 of 40 --",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng số kiến nghị thanh tra đưa vào",
        "desc": "giám sát số (Cỡ mẫu kiểm toán toàn diện) Dữ liệu giám sát trên hệ thống: Đạt: ...... kiến nghị (100% các đợt) (Yêu cầu tối thiểu theo A3: ≥ 20 kiến nghị) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Phần mềm / Bảng theo dõi trực quan giám",
        "desc": "sát thực thi kiến nghị (Công cụ số hóa quản trị pháp chế) Phần mềm Bảng theo dõi trực quan Bảng theo dõi trực quan theo dõi tiến độ hoạt động ổn định, phân quyền rõ cho Pháp chế, Ban Giám đốc và các khoa/phòng.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Quy trình Thao tác Chuẩn (SOP) Phúc tra",
        "desc": "sau thanh tra (Quy chuẩn hóa hoạt động nghiệp vụ) Đã ban hành SOP quy định rõ các bước kiểm tra, lập biên bản điện tử, thời hạn khắc phục và chế tài trừ điểm thi đua nếu chây ì.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Bộ mẫu Biên bản Phúc tra Gemba điện tử",
        "desc": "(Công cụ chuẩn hóa thu thập bằng chứng) Đã thiết kế biểu mẫu biên bản điện tử có đính kèm tệp ảnh, video minh chứng khắc phục và chữ ký xác nhận của đại diện đơn vị.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo phân tích rủi ro thể chế và thực",
        "desc": "thi toàn viện (Sản phẩm tham mưu lãnh đạo bệnh viện) Đã xuất báo cáo tổng kết tỷ lệ khắc phục, phân tích nguyên nhân gốc rễ (RCA) các lỗi tồn đọng kéo dài để tham mưu BGĐ.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Hệ thống Bảng điều hành trực quan hóa hoạt động chuẩn, tỷ lệ khắc phục đúng hạn ≥ 90%, phúc",
      "loaiBDesc": "Đã có bảng theo dõi trực quan nhưng chưa gửi cảnh báo tự động, biên bản phúc tra còn",
      "loaiCDesc": "Chưa số hóa được quy trình; kiến nghị sau thanh tra vẫn bị tồn đọng và trôi việc; báo cáo",
      "ghiChu": "Thẩm định viên ghi nhận: Kiểm tra giao diện Bảng theo dõi trực quan; thử nghiệm gửi cảnh báo tự động; đối soát bằng chứng ảnh các ca đóng; phỏng vấn khoa lâm sàng.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-PKTB-01": {
    "docIndex": 10,
    "maDeTai": "KZ16-PKTB-01",
    "tenDeAn": "Cải tiến quy trình theo dõi người bệnh và kiểm soát các thao tác chuyên môn bằng bảng kiểm tại giường kết hợp hệ thống",
    "donVi": "",
    "canBo": "BS. Lê Ngọc Dung",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Bảng kẹp mica theo dõi tại giường bệnh",
        "desc": "cấp cứu (Công cụ kiểm chuẩn lâm sàng tại chỗ) Bảng mica gắn cố định tại đầu 100% giường cấp cứu lưu; kẹp Bảng kiểm theo dõi sinh hiệu và y lệnh chuyên môn rõ ràng.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Thẻ màu trực quan Phân tầng nguy cơ",
        "desc": "phân tầng nguy cơ (Hệ thống cảnh báo màu sắc trực quan) Bộ thẻ màu gắn đầu giường phân định rõ: Đỏ (Cấp cứu nguy kịch - theo dõi 15-30p), Vàng (Nặng - theo dõi 1-2h), Xanh (Ổn định - theo dõi 4h).",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Đồng hồ hẹn giờ nhắc sinh hiệu ca trực",
        "desc": "(Chốt chặn chống bỏ sót y lệnh) Trang bị đồng hồ đếm ngược/chuông báo hẹn giờ tại bàn trực điều dưỡng, kích hoạt theo từng khoảng thời gian y lệnh của Bác sĩ.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Chuẩn hóa các trường thông tin theo dõi",
        "desc": "sống còn (Bắt buộc kiểm tra 6 thông số) Bảng kiểm quy định bắt buộc ghi đủ: Mạch, Huyết áp, SpO2, Nhịp thở, Tri giác, Tốc độ truyền dịch và lượng nước tiểu.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Kiểm tra thực tế bệnh nhân đang nằm lưu",
        "desc": "cấp cứu (Đo lường tính tuân thủ thời gian thực) Khảo sát ngẫu nhiên 03 bệnh nhân đang lưu viện: Có được gắn thẻ màu phân tầng nguy cơ đúng không? Sinh hiệu có được đo và ghi chép đúng giờ hẹn không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Thử nghiệm tình huống báo động đỏ diễn",
        "desc": "biến nặng (Tốc độ phản ứng của kíp cấp cứu) Giả định tình huống SpO2 bệnh nhân tụt dưới 90%: Điều dưỡng phát hiện qua bảng kiểm, báo động Bác sĩ và cấp cứu thở oxy trong bao lâu?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Đối soát số liệu bảng kiểm tại giường với",
        "desc": "HIS (Chống ghi chép hồi cứu sai lệch) So sánh dữ liệu dấu hiệu sinh tồn trên Bảng kiểm tại giường với dữ liệu nhập trên phần mềm HIS và Sổ giao ban: Có trùng khớp 100% không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Kiểm tra quy trình bàn giao ca trực tại",
        "desc": "giường (Kỷ luật bàn giao an toàn người bệnh) Quan sát thực tế giao ca: Điều dưỡng ca trước và ca sau có đi đến từng giường, đối chiếu bảng kiểm và kiểm tra đường truyền không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Khảo sát người bệnh và người nhà bệnh",
        "desc": "nhân (Cảm nhận về sự quan tâm chăm sóc) Phỏng vấn ngẫu nhiên 02 người nhà: Nhân viên y tế có thường xuyên đến thăm khám, đo huyết áp và giải thích tình trạng bệnh không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Tỷ lệ người bệnh cấp cứu lưu được đo",
        "desc": "sinh hiệu đúng giờ (Chỉ số tuân thủ quy chế chuyên môn) (Mốc cũ: Khoảng 70 – 75%) Kiểm tra bảng kiểm đợt thử nghiệm: Đạt: ...... % đo đúng giờ (Mục tiêu cam kết A3: ≥ 95%)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Tỷ lệ phát hiện sớm và can thiệp kịp ca",
        "desc": "diễn biến nặng (An toàn tính mạng người bệnh) Ghi nhận trong đợt thử nghiệm: Phát hiện kịp thời: 100% ca (Mục tiêu cam kết A3: 100%)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Tỷ lệ phản ánh của người nhà về việc ít",
        "desc": "thấy NVYT Khảo sát đợt thử nghiệm: Còn: ...... % phản ánh -- 19 of 40 -- (Đo lường sự an tâm của khách hàng) (Mốc cũ: Khoảng 8 – 10%) (Mục tiêu cam kết: ≤ 2%)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng số ca bệnh nhân cấp cứu lưu đã",
        "desc": "kiểm toán (Cỡ mẫu thực tế tại PKĐK Thanh Ba) Số ca áp dụng bảng kiểm tại giường: Đạt: ...... ca bệnh nhân lưu (Yêu cầu tối thiểu theo A3: ≥ 40 ca)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Tỷ lệ người bệnh cấp cứu lưu được đo",
        "desc": "sinh hiệu đúng giờ (Chỉ số tuân thủ quy chế chuyên môn) (Mốc cũ: Khoảng 70 – 75%) Kiểm tra bảng kiểm đợt thử nghiệm: Đạt: ...... % đo đúng giờ (Mục tiêu cam kết A3: ≥ 95%)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Tỷ lệ phát hiện sớm và can thiệp kịp ca",
        "desc": "diễn biến nặng (An toàn tính mạng người bệnh) Ghi nhận trong đợt thử nghiệm: Phát hiện kịp thời: 100% ca (Mục tiêu cam kết A3: 100%)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Tỷ lệ phản ánh của người nhà về việc ít",
        "desc": "thấy NVYT Khảo sát đợt thử nghiệm: Còn: ...... % phản ánh -- 19 of 40 -- (Đo lường sự an tâm của khách hàng) (Mốc cũ: Khoảng 8 – 10%) (Mục tiêu cam kết: ≤ 2%)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng số ca bệnh nhân cấp cứu lưu đã",
        "desc": "kiểm toán (Cỡ mẫu thực tế tại PKĐK Thanh Ba) Số ca áp dụng bảng kiểm tại giường: Đạt: ...... ca bệnh nhân lưu (Yêu cầu tối thiểu theo A3: ≥ 40 ca) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Mẫu Bảng kiểm theo dõi người bệnh tại",
        "desc": "giường (Công cụ lâm sàng chuẩn hóa) Đã in ấn và trang bị đồng bộ bảng kiểm mica kèm biểu mẫu chuẩn hóa tại 100% giường bệnh cấp cứu lưu.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Bộ thẻ màu trực quan Phân tầng nguy cơ",
        "desc": "phân tầng nguy cơ (Hệ thống nhận diện màu sắc) Đã trang bị bộ thẻ màu Đỏ - Vàng - Xanh gắn đầu giường có nam châm/móc cài tiện lợi cho điều dưỡng điều chỉnh.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "SOP Quy trình tiếp nhận, phân loại và",
        "desc": "theo dõi tại giường (Quy chuẩn kỹ thuật phòng khám) Đã ban hành văn bản quy trình thao tác chuẩn có chữ ký của Ban Giám đốc Phòng khám và phê duyệt của Phòng KHTH.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Sổ nhật ký bàn giao ca trực tại giường",
        "desc": "bệnh (Dữ liệu thực chứng an toàn ca trực) Đã đưa vào sử dụng sổ bàn giao ca trực tại giường, có ký xác nhận của điều dưỡng 2 ca và Bác sĩ trưởng ca.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Bảng kiểm trang bị 100% giường, phân loại màu phân tầng nguy cơ chuẩn xác, tỷ lệ đo sinh hiệu",
      "loaiBDesc": "Đã có bảng kiểm nhưng một số ca ghi chưa đầy đủ thông số, thẻ màu gắn chưa kịp thời",
      "loaiCDesc": "Chưa triển khai bảng kiểm tại giường thực tế; sinh hiệu vẫn ghi hồi cứu trên bàn giấy; báo",
      "ghiChu": "Thẩm định viên ghi nhận: Kiểm tra trực tiếp bảng kiểm tại giường; đối soát với HIS; thử nghiệm phản ứng tình huống khẩn cấp; khảo sát người bệnh.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-NHI-01": {
    "docIndex": 11,
    "maDeTai": "KZ16-NHI-01",
    "tenDeAn": "Cải tiến quy trình cố định catheter ngoại vi cho bệnh nhi tại Bệnh viện Đa khoa Hùng Vương",
    "donVi": "Khoa Nhi",
    "canBo": "ĐD. Trần Thị Hồng",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Nẹp tay cố định mềm mại, thoáng khí cho",
        "desc": "trẻ (Chống gập cổ tay làm nghẽn dịch) Nẹp tay chuyên dụng lót bông xốp mềm, có thanh nẹp nhôm dẻo uốn theo cổ tay/bàn tay trẻ; cố định bằng khóa dán xé tiện dụng không siết chặt.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Băng dán trong suốt vô khuẩn (Băng dán",
        "desc": "trong suốt vô khuẩn) (Quan sát liên tục chân kim luồn) Sử dụng băng dán trong suốt quan sát trực tiếp vị trí đâm kim; màng bán thấm thoáng khí, mép dán có khung viền ghi ngày giờ đặt kim.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Kỹ thuật dán băng chữ U/H trợ lực chống",
        "desc": "giật (Khóa lẫy an toàn chống tuột catheter) Đoạn dây nối (dây nối an toàn) hoặc đuôi kim được dán vòng khóa trợ lực; khi trẻ cựa quậy giật dây không truyền lực trực tiếp vào chân kim.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Bao bọc bảo vệ ngộ nghĩnh hình thú",
        "desc": "(Bảo vệ kim và giảm sợ hãi cho trẻ) Bao bọc ngoài bằng vải sợi bông tự nhiên hình thú ngộ nghĩnh; che chắn kim luồn khi trẻ chơi đùa, ngăn trẻ tự dùng tay kia giật kim.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Kiểm tra thực tế trên bệnh nhi đang lưu",
        "desc": "catheter (Đánh giá tình trạng chân kim luồn) Khảo sát ngẫu nhiên 05 bệnh nhi đang truyền dịch: Chân kim có khô sạch, không sưng đỏ, băng dán có bám chắc, không bong mép không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Kiểm tra thao tác Điều dưỡng ngoài nhóm",
        "desc": "tác giả (Chống độc quyền tác giả & Đào tạo nội bộ) Chỉ định ngẫu nhiên 01 Điều dưỡng ca trực thực hiện cố định kim luồn trên bệnh nhi/mô hình: Có tuân thủ đúng kỹ thuật dán trợ lực mới không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Kiểm tra ghi chép ngày giờ lưu kim luồn",
        "desc": "(Chống lưu kim quá hạn quy định) Kiểm tra mép băng dán và hồ sơ bệnh án: Có ghi rõ ngày, giờ đặt kim không? Có trường hợp nào lưu kim quá 72-96 giờ mà không đánh giá lại không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Áp dụng thang điểm đánh giá viêm tĩnh",
        "desc": "mạch VIP (Thang điểm đánh giá viêm tĩnh mạch (VIP)) Điều dưỡng có kiểm tra và chấm điểm viêm tĩnh mạch (VIP) hàng ngày cho từng bệnh nhi không? Khi có dấu hiệu VIP ≥ 2 có rút kim xử trí kịp thời không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Khảo sát bố mẹ bệnh nhi về số lần phải lấy",
        "desc": "lại ven (Giảm đau đớn và ám ảnh cho trẻ) Phỏng vấn 03 phụ huynh: Trẻ có phải chọc lấy lại ven nhiều lần trong đợt nằm viện không? Phụ huynh có an tâm với nẹp tay mới không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Thời gian lưu catheter an toàn trung",
        "desc": "bình (Duy trì đường truyền ổn định không phải chọc lại) (Mốc cũ: 24 – 36 giờ do tuột/hỏng) Đo lường đợt thử nghiệm: Đạt trung bình: ...... giờ (Mục tiêu cam kết A3: ≥ 72 giờ)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Tỷ lệ catheter bị tuột, phồng, hỏng phải",
        "desc": "đặt lại (Chỉ số an toàn chăm sóc bệnh nhi) (Mốc cũ: Khoảng 35 – 42%) Ghi nhận trong đợt thử nghiệm: Còn: ...... % hỏng ngoài ý muốn (Mục tiêu cam kết A3: ≤ 10%)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Tỷ lệ viêm tĩnh mạch tại vị trí đặt kim  Chưa đo mốc cũ Thống kê đợt thử nghiệm:  ĐẠT (≤ 3%)",
        "desc": "-- 21 of 40 -- (VIP ≥ 2) (Biến chứng nhiễm khuẩn đường truyền) (Mốc cũ: Khoảng 12 – 15%) Còn: ...... % viêm tĩnh mạch (Mục tiêu cam kết: ≤ 3%)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu bệnh nhi tham gia thử",
        "desc": "nghiệm (Đối soát Bệnh án Khoa Nhi) Số bệnh nhi áp dụng nẹp cải tiến: Đạt: ...... bệnh nhi (Yêu cầu tối thiểu theo A3: ≥ 30 trẻ)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Thời gian lưu catheter an toàn trung",
        "desc": "bình (Duy trì đường truyền ổn định không phải chọc lại) (Mốc cũ: 24 – 36 giờ do tuột/hỏng) Đo lường đợt thử nghiệm: Đạt trung bình: ...... giờ (Mục tiêu cam kết A3: ≥ 72 giờ)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Tỷ lệ catheter bị tuột, phồng, hỏng phải",
        "desc": "đặt lại (Chỉ số an toàn chăm sóc bệnh nhi) (Mốc cũ: Khoảng 35 – 42%) Ghi nhận trong đợt thử nghiệm: Còn: ...... % hỏng ngoài ý muốn (Mục tiêu cam kết A3: ≤ 10%)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Tỷ lệ viêm tĩnh mạch tại vị trí đặt kim  Chưa đo mốc cũ Thống kê đợt thử nghiệm:  ĐẠT (≤ 3%)",
        "desc": "-- 21 of 40 -- (VIP ≥ 2) (Biến chứng nhiễm khuẩn đường truyền) (Mốc cũ: Khoảng 12 – 15%) Còn: ...... % viêm tĩnh mạch (Mục tiêu cam kết: ≤ 3%)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu bệnh nhi tham gia thử",
        "desc": "nghiệm (Đối soát Bệnh án Khoa Nhi) Số bệnh nhi áp dụng nẹp cải tiến: Đạt: ...... bệnh nhi (Yêu cầu tối thiểu theo A3: ≥ 30 trẻ) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "SOP Kỹ thuật cố định & chăm sóc",
        "desc": "catheter ở trẻ em (Quy trình chuyên môn Nhi khoa) Đã ban hành văn bản quy trình kỹ thuật cố định catheter ngoại vi có hình ảnh minh họa các bước dán băng và nẹp tay chuẩn.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Bộ nẹp tay mềm và bao bảo vệ hình thú",
        "desc": "ngộ nghĩnh (Hiện vật cải tiến thực tế) Đã trang bị đủ số lượng nẹp mềm các kích cỡ (cho trẻ sơ sinh, nhũ nhi, trẻ lớn) và bao bảo vệ tại tủ vật tư khoa Nhi.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Bảng theo dõi chân kim luồn theo thang",
        "desc": "điểm viêm tĩnh mạch (VIP) (Công cụ kiểm soát an toàn người bệnh) Đã in và áp dụng bảng theo dõi VIP hàng ngày kẹp tại hồ sơ bệnh án hoặc dán đầu giường bệnh nhi.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo đối soát số liệu lâm sàng và khảo",
        "desc": "sát phụ huynh (Dữ liệu thực chứng khoa học Kaizen) Đã lập báo cáo tổng hợp thời gian lưu kim, tỷ lệ biến chứng và kết quả khảo sát mức độ hài lòng của phụ huynh bệnh nhi.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Kỹ thuật cố định chuẩn, nẹp tay mềm êm ái, thời gian lưu kim ≥ 72h, tỷ lệ tuột hỏng ≤ 10%, viêm",
      "loaiBDesc": "Đã có nẹp nhưng chưa đủ kích cỡ cho mọi lứa tuổi, điều dưỡng còn quên ghi ngày giờ",
      "loaiCDesc": "Chưa đưa nẹp cải tiến vào sử dụng đại trà; tỷ lệ tuột kim vẫn cao; bệnh nhi vẫn phải lấy lại",
      "ghiChu": "Thẩm định viên ghi nhận: Kiểm tra trực tiếp nẹp tay và chân kim trên bệnh nhi; kiểm tra ngày giờ lưu kim; thử nghiệm thao tác điều dưỡng; phỏng vấn phụ huynh.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-DUOC-01": {
    "docIndex": 12,
    "maDeTai": "KZ16-DUOC-01",
    "tenDeAn": "Xây dựng Ứng dụng tra cứu trực tuyến thông tin thuốc tra cứu nhanh phục vụ nhân viên y tế tại Bệnh viện Đa khoa Hùng",
    "donVi": "",
    "canBo": "DS. Vũ Hải Nam",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Ứng dụng tra cứu trực tuyến HV-",
        "desc": "Pharmacy hoạt động đa nền tảng (Tương thích Máy tính để bàn máy tính khoa & Điện thoại thông minh) Ứng dụng tra cứu trực tuyến chạy mượt mà trên trình duyệt máy tính khoa lâm sàng và điện thoại di động nhân viên qua mạng nội bộ LAN/không dây bệnh viện.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Cơ sở dữ liệu danh mục thuốc bệnh viện",
        "desc": "chuẩn hóa (Số hóa thông tin ≥ 500 mặt hàng) Đầy đủ thông tin hoạt chất, biệt dược, nồng độ/hàm lượng, chỉ định, liều dùng, chống chỉ định, tồn kho thực tế tại Khoa Dược.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Module cảnh báo tương tác thuốc 2 chiều",
        "desc": "nguy hiểm (Chốt chặn an toàn kê đơn & dùng thuốc) Cho phép nhập đồng thời 2 hoặc nhiều loại thuốc; hệ thống tự động phân loại tương tác Mức độ 1 (Chống chỉ định) và Mức độ 2 (Thận trọng).",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Cẩm nang hướng dẫn pha thuốc",
        "desc": "tiêm/truyền tĩnh mạch (Dung môi, nồng độ, tốc độ tiêm/truyền) Số hóa bảng tương thích dung môi pha tiêm truyền (NaCl 0.9%, Glucose 5%), thời gian bảo quản sau khi pha và tốc độ truyền an toàn.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Bấm giờ tra cứu phối hợp kháng sinh &",
        "desc": "cách pha (Mục tiêu A3: Tra cứu nhanh dưới 20 giây) Thử nghiệm tình huống lâm sàng: Chỉ định 01 Điều dưỡng ICU tra cứu dung môi và tốc độ truyền Vancomycin: Bấm giờ có hoàn tất ≤ 20 giây?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Kiểm tra độ chuẩn xác thông tin y dược",
        "desc": "học (Đối soát Dược thư Quốc gia & Hướng dẫn BYT) Chọn ngẫu nhiên 05 thuốc tim mạch và kháng sinh đặc biệt: Đối chiếu thông tin trên Ứng dụng tra cứu trực tuyến với Dược thư Quốc gia và tờ HDSD thuốc gốc.",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Kiểm tra tính sẵn sàng khi mất mạng",
        "desc": "Internet ngoài (Khả năng vận hành độc lập mạng nội bộ LAN) Thực nghiệm ngắt kết nối Internet ngoài: Ứng dụng tra cứu trực tuyến có tiếp tục truy cập bình thường qua máy chủ nội bộ LAN bệnh viện không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Kiểm tra ngẫu nhiên Bác sĩ/Điều dưỡng",
        "desc": "khoa Cấp cứu (Độ am hiểu và tỷ lệ sử dụng thực tế) Phỏng vấn 01 Bác sĩ và 01 Điều dưỡng trực Cấp cứu: Có lưu biểu tượng Ứng dụng tra cứu trực tuyến trên màn hình không? Tần suất sử dụng tra cứu hàng ngày?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Khảo sát ý kiến Tổ Dược lâm sàng về sai",
        "desc": "sót đơn thuốc (Giảm lỗi tương tác và dung môi pha) Khảo sát Dược sĩ lâm sàng: Số lượng cuộc gọi can thiệp chỉnh đơn thuốc sai dung môi pha hoặc tương tác có giảm rõ rệt không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Thời gian tra cứu tương tác & cách pha",
        "desc": "thuốc (Bấm giờ từ khi mở ứng dụng đến khi có (Mốc cũ: 3 – 5 phút tìm tài liệu giấy) Bấm giờ thực tế tại hiện trường: Đo được: ...... giây/lần (Mục tiêu cam kết A3: ≤ 20 giây) -- 23 of 40 -- thông tin)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Tỷ lệ NVYT tại các khoa lâm sàng sử",
        "desc": "dụng Ứng dụng tra cứu trực tuyến (Độ phủ ứng dụng chuyển đổi số) (Chưa có ứng dụng) Khảo sát tại 3 khoa thử nghiệm: Đạt: ...... % nhân sự sử dụng (Mục tiêu cam kết A3: ≥ 85%)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Số lỗi kê đơn tương tác thuốc / sai dung",
        "desc": "môi pha (Chỉ số an toàn sử dụng thuốc toàn viện) (Thỉnh thoảng ghi nhận tại Dược LS) Ghi nhận trong đợt thử nghiệm: Giảm: ...... % số vụ lỗi (Mục tiêu cam kết: Giảm ≥ 90%)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng số lượt tra cứu thực tế trên Ứng",
        "desc": "dụng tra cứu trực tuyến (Trích xuất nhật ký máy chủ ứng dụng) Dữ liệu trích xuất 1 tuần thử nghiệm: Đạt: ...... lượt tra cứu thành công (Yêu cầu tối thiểu theo A3: ≥ 500 lượt)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Thời gian tra cứu tương tác & cách pha",
        "desc": "thuốc (Bấm giờ từ khi mở ứng dụng đến khi có (Mốc cũ: 3 – 5 phút tìm tài liệu giấy) Bấm giờ thực tế tại hiện trường: Đo được: ...... giây/lần (Mục tiêu cam kết A3: ≤ 20 giây) -- 23 of 40 -- thông tin)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Tỷ lệ NVYT tại các khoa lâm sàng sử",
        "desc": "dụng Ứng dụng tra cứu trực tuyến (Độ phủ ứng dụng chuyển đổi số) (Chưa có ứng dụng) Khảo sát tại 3 khoa thử nghiệm: Đạt: ...... % nhân sự sử dụng (Mục tiêu cam kết A3: ≥ 85%)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Số lỗi kê đơn tương tác thuốc / sai dung",
        "desc": "môi pha (Chỉ số an toàn sử dụng thuốc toàn viện) (Thỉnh thoảng ghi nhận tại Dược LS) Ghi nhận trong đợt thử nghiệm: Giảm: ...... % số vụ lỗi (Mục tiêu cam kết: Giảm ≥ 90%)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng số lượt tra cứu thực tế trên Ứng",
        "desc": "dụng tra cứu trực tuyến (Trích xuất nhật ký máy chủ ứng dụng) Dữ liệu trích xuất 1 tuần thử nghiệm: Đạt: ...... lượt tra cứu thành công (Yêu cầu tối thiểu theo A3: ≥ 500 lượt) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Ứng dụng tra cứu trực tuyến HV-",
        "desc": "Pharmacy hoàn chỉnh (Nền tảng tra cứu số hóa) Ứng dụng hoàn thiện, chạy ổn định trên máy chủ nội bộ bệnh viện, có tính năng tìm kiếm thông minh và phân quyền quản trị cập nhật.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Bộ cẩm nang pha thuốc tiêm truyền số hóa",
        "desc": "(Tài liệu chuẩn mực nghiệp vụ điều dưỡng) Đã số hóa toàn bộ cẩm nang hướng dẫn pha tiêm truyền của 100% thuốc tiêm trong danh mục bệnh viện kèm hình ảnh trực quan.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Mã QR truy cập dán tại các xe tiêm & bàn",
        "desc": "bác sĩ (Công cụ trực quan hiện trường) Đã in ấn và dán mã QR truy cập nhanh tại 100% xe tiêm, phòng trực và bàn làm việc bác sĩ tại các khoa lâm sàng.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo thống kê lượt tra cứu & phản hồi",
        "desc": "người dùng (Dữ liệu thực chứng khoa học Kaizen) Đã xuất báo cáo phân tích các loại thuốc được tra cứu nhiều nhất, lỗi tương tác hay gặp và khảo sát đánh giá độ hài lòng.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Ứng dụng tra cứu trực tuyến chạy mượt mà, tra cứu ≤ 20s, dữ liệu thuốc chuẩn xác, tỷ lệ NVYT",
      "loaiBDesc": "Đã có Ứng dụng tra cứu trực tuyến nhưng giao diện trên điện thoại di động còn chậm",
      "loaiCDesc": "Chưa hoàn thiện cơ sở dữ liệu thuốc trên Ứng dụng tra cứu trực tuyến; nhân viên y tế chưa",
      "ghiChu": "Thẩm định viên ghi nhận: Kiểm tra giao diện và tốc độ Ứng dụng tra cứu trực tuyến; thử nghiệm tra cứu tình huống kháng sinh phức tạp; đối soát với Dược thư; kiểm tra mã QR xe tiêm.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-HSCC-01": {
    "docIndex": 13,
    "maDeTai": "KZ16-HSCC-01",
    "tenDeAn": "Chuẩn hóa và triển khai gói đồ dùng chăm sóc cá nhân cho người bệnh thở máy tại Khoa Hồi sức cấp cứu",
    "donVi": "Khoa",
    "canBo": " ĐÃ CÓ",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Giỏ đồ dùng chăm sóc cá nhân chuẩn 5S",
        "desc": "tại giường (Mô hình Gói đồ dùng cá nhân chuyên dụng định vị) Giỏ nhựa y tế chuyên dụng gắn tại đuôi giường hoặc xe chăm sóc cạnh giường; phân chia ngăn khoa học, dán nhãn định vị từng nhóm đồ dùng.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Đầy đủ 100% danh mục chăm sóc vệ sinh",
        "desc": "chuyên sâu (Chuẩn hóa phòng ngừa nhiễm khuẩn VAP) Đủ dung dịch súc miệng Chlorhexidine 0.12%, que gạc vệ sinh răng miệng, gel bôi trơn mắt, khăn lau sát khuẩn da, kem chống loét, tấm lót y tế.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Kiểm soát an toàn nhiễm khuẩn & Hạn",
        "desc": "dùng sau mở nắp (Chống nhiễm khuẩn chéo tại ICU) Các chai lọ dung dịch mở nắp có dán nhãn ghi ngày, giờ mở và hạn dùng tối đa; mỗi bệnh nhân sử dụng 01 giỏ riêng biệt, không dùng chung.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Bảng kiểm chăm sóc cá nhân 3 lần/ngày",
        "desc": "(Công cụ kiểm soát tuân thủ tại giường) Bảng kiểm gắn tại bảng đầu giường quy định điều dưỡng ký nhận sau mỗi ca vệ sinh (Sáng 6h, Chiều 14h, Tối 21h) kèm đánh giá tình trạng da, niêm mạc.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Kiểm tra thực tế giỏ đồ dùng tại giường",
        "desc": "thở máy (Đánh giá 5S và mức độ đầy đủ) Khảo sát ngẫu nhiên 03 giường bệnh nhân thở máy: Giỏ đồ dùng có đầy đủ các món theo danh mục chuẩn không? Đồ dùng có sạch sẽ, khô ráo không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Kiểm tra thao tác Điều dưỡng chăm sóc",
        "desc": "răng miệng VAP (Quy trình kỹ thuật dự phòng viêm phổi) Chỉ định ngẫu nhiên 01 Điều dưỡng ca trực thực hiện quy trình vệ sinh răng miệng bằng Chlorhexidine: Có đúng kỹ thuật hút sạch dịch đọng không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Bấm giờ chuẩn bị đồ dùng cho 1 lần chăm",
        "desc": "sóc (Mục tiêu A3: Lấy đồ tại chỗ dưới 2 phút) Bấm giờ điều dưỡng chuẩn bị dụng cụ vệ sinh toàn diện cho bệnh nhân: Có lấy đồ ngay tại giỏ đầu giường trong thời gian ≤ 2 phút không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Kiểm tra theo dõi loét tỳ đè và biến chứng",
        "desc": "giác mạc (Đánh giá toàn diện an toàn người bệnh) Kiểm tra thực tế các vùng tỳ đè (cùng cụt, gót chân) và mắt của bệnh nhân thở máy: Có được bôi gel mắt và kem chống loét định kỳ không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Khảo sát ý kiến người nhà bệnh nhân về",
        "desc": "gói đồ dùng (Minh bạch chi phí và an tâm điều trị) Phỏng vấn 02 người nhà bệnh nhân ICU: Gia đình có đồng thuận với việc chuẩn hóa gói đồ dùng không? Có phải đi mua lắt nhắt bên ngoài không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Tỷ lệ BN thở máy được vệ sinh răng",
        "desc": "miệng ≥ 3 lần/ngày (Chỉ số tuân thủ phác đồ chống VAP) (Mốc cũ: Khoảng 65 – 70%) Kiểm tra bảng kiểm đợt thử nghiệm: Đạt: ...... % ca tuân thủ (Mục tiêu cam kết A3: 100%)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Thời gian Điều dưỡng chuẩn bị đồ cho 1",
        "desc": "lần vệ sinh (Rút ngắn thời gian di chuyển tìm đồ) (Mốc cũ: 10 – 15 phút gom đồ) Bấm giờ thực tế tại giường bệnh: Đo được: ...... phút/lần (Mục tiêu cam kết A3: ≤ 2 phút) -- 25 of 40 --",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Tỷ lệ phát sinh loét tỳ đè mới độ 2 trở lên",
        "desc": "ở ICU (Chỉ số an toàn chất lượng chăm sóc) (Mốc cũ: Khoảng 5 – 7%) Ghi nhận trong đợt thử nghiệm: Còn: ...... % loét mới (Mục tiêu cam kết: ≤ 1%)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu bệnh nhân thở máy tham",
        "desc": "gia thử nghiệm (Đối soát Bệnh án Khoa HSCC) Số BN thở máy áp dụng giỏ chăm sóc: Đạt: ...... bệnh nhân (Yêu cầu tối thiểu theo A3: ≥ 15 BN)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Tỷ lệ BN thở máy được vệ sinh răng",
        "desc": "miệng ≥ 3 lần/ngày (Chỉ số tuân thủ phác đồ chống VAP) (Mốc cũ: Khoảng 65 – 70%) Kiểm tra bảng kiểm đợt thử nghiệm: Đạt: ...... % ca tuân thủ (Mục tiêu cam kết A3: 100%)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Thời gian Điều dưỡng chuẩn bị đồ cho 1",
        "desc": "lần vệ sinh (Rút ngắn thời gian di chuyển tìm đồ) (Mốc cũ: 10 – 15 phút gom đồ) Bấm giờ thực tế tại giường bệnh: Đo được: ...... phút/lần (Mục tiêu cam kết A3: ≤ 2 phút) -- 25 of 40 --",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Tỷ lệ phát sinh loét tỳ đè mới độ 2 trở lên",
        "desc": "ở ICU (Chỉ số an toàn chất lượng chăm sóc) (Mốc cũ: Khoảng 5 – 7%) Ghi nhận trong đợt thử nghiệm: Còn: ...... % loét mới (Mục tiêu cam kết: ≤ 1%)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu bệnh nhân thở máy tham",
        "desc": "gia thử nghiệm (Đối soát Bệnh án Khoa HSCC) Số BN thở máy áp dụng giỏ chăm sóc: Đạt: ...... bệnh nhân (Yêu cầu tối thiểu theo A3: ≥ 15 BN) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Mô hình Giỏ chăm sóc Gói đồ dùng cá",
        "desc": "nhân chuyên dụng chuẩn 5S (Hiện vật cải tiến thực tế) Đã lắp đặt đồng bộ giỏ chăm sóc tại 100% giường thở máy ICU, kèm nhãn dán định vị 5S và khay phân loại chống nhiễm khuẩn.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "SOP Quy trình Chăm sóc toàn diện bệnh",
        "desc": "nhân thở máy (Quy chuẩn kỹ thuật điều dưỡng ICU) Đã ban hành quy trình thao tác chuẩn có chữ ký phê duyệt của Trưởng khoa HSCC và Trưởng phòng Điều dưỡng/Tổ QLCL.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Bảng kiểm chăm sóc cá nhân 3 lần/ngày",
        "desc": "(Công cụ kiểm soát thực thi) Đã in ấn và kẹp tại hồ sơ theo dõi tại giường 100% bệnh nhân thở máy, có chữ ký xác nhận của điều dưỡng từng ca trực.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo theo dõi tỷ lệ nhiễm khuẩn hô hấp",
        "desc": "VAP & loét (Dữ liệu thực chứng khoa học Kaizen) Đã lập báo cáo so sánh tỷ lệ tuân thủ chăm sóc răng miệng, thời gian gom đồ và tỷ lệ viêm phổi VAP trước và sau cải tiến.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Gói đồ dùng chuẩn 5S lắp 100% giường thở máy, chuẩn bị đồ ≤ 2p, tuân thủ vệ sinh răng miệng",
      "loaiBDesc": "Đã có giỏ đồ nhưng chưa dán nhãn hạn dùng mở nắp một số chai lọ, điều dưỡng còn",
      "loaiCDesc": "Chưa triển khai đồng bộ giỏ đồ dùng tại các giường; đồ chăm sóc vẫn để lộn xộn; báo cáo",
      "ghiChu": "Thẩm định viên ghi nhận: Kiểm tra thực tế giỏ đồ dùng tại giường thở máy; kiểm tra hạn dùng mở nắp dung dịch; thử nghiệm thao tác vệ sinh răng miệng; đối soát bảng kiểm.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-PKD-01": {
    "docIndex": 14,
    "maDeTai": "KZ16-PKD-01",
    "tenDeAn": "Chuẩn hóa quy trình chăm sóc chủ động người bệnh buồng điều trị theo yêu cầu trong 24 giờ đầu",
    "donVi": "Phòng Kinh Doanh",
    "canBo": "Chu Lệ Quyên",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Bộ tiêu chuẩn 8 điểm chạm buồng điều trị",
        "desc": "VIP (Quy chuẩn hóa quy trình đón tiếp) Quy định rõ 8 điểm chạm bắt buộc từ khi khách nhận phòng: Đón tiếp buồng, Giới thiệu tiện ích, Chuẩn bị đồ chào mừng, Khảo sát 2h, Thăm hỏi 12h, Khảo sát 24h...",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Cẩm nang tiện ích phòng Cẩm nang buồng",
        "desc": "bệnh & Mã QR (Hướng dẫn trực quan dịch vụ) Cuốn cẩm nang in ấn sang trọng đặt tại bàn phòng khách; tích hợp mã QR tra cứu thực đơn dinh dưỡng, đường dây nóng hỗ trợ, hướng dẫn mạng không dây và truyền hình.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Bộ đồ dùng tiện ích chào mừng chuẩn hóa",
        "desc": "(Gói tiện ích chào mừng) (Trải nghiệm dịch vụ cao cấp) Chuẩn bị đầy đủ trước khi khách vào nhận buồng: Khăn ấm, nước uống đóng chai thương hiệu Hùng Vương, trà và cà phê, dép đi trong phòng, đồ vệ sinh cá nhân cao cấp.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Kênh tiếp nhận & Nhật ký xử lý phản hồi",
        "desc": "24h (Đường dây nóng hỗ trợ buồng VIP) Có sổ nhật ký và kênh nhóm Zalo CSKH phản hồi tức thì mọi yêu cầu của khách nằm buồng VIP trong vòng ≤ 15 phút.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Kiểm tra thực tế 01 buồng VIP đang",
        "desc": "chuẩn bị đón khách (Đánh giá tiêu chuẩn chuẩn bị trước đón) Khảo sát hiện trường buồng VIP trống: Phòng có sạch sẽ, thơm tho, điều hòa hoạt động tốt, đầy đủ Gói tiện ích chào mừng và cẩm nang trên bàn không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Phỏng vấn trực tiếp khách hàng nằm",
        "desc": "buồng VIP mốc 24h (Đo lường mức độ hài lòng thực tế) Phỏng vấn ngẫu nhiên 03 bệnh nhân/người nhà buồng VIP: Có được nhân viên CSKH đến thăm hỏi chủ động trong 2h đầu không? Đánh giá dịch vụ thế nào?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Thử nghiệm tình huống giả định xử lý yêu",
        "desc": "cầu tiện ích (Đo tốc độ phản ứng của nhân viên CSKH) Thực nghiệm tại chỗ: Báo hỏng điều khiển từ xa tivi hoặc yêu cầu hỗ trợ đổi chế độ ăn: Nhân viên CSKH có mặt và xử lý dứt điểm trong ≤ 15 phút không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Đối soát nhật ký tiếp xúc với danh sách",
        "desc": "bệnh nhân HIS (Chống báo cáo tiếp cận khống) So sánh danh sách bệnh nhân vào buồng VIP trên phần mềm HIS với Nhật ký 8 điểm chạm: Có đầy đủ 100% chữ ký hoặc ghi nhận liên hệ không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Khảo sát sự phối hợp giữa Điều dưỡng",
        "desc": "khoa và CSKH (Phối hợp chăm sóc người bệnh toàn diện) Phỏng vấn Điều dưỡng trưởng khoa Ngoại/Sản: Nhân viên CSKH có phối hợp nhịp nhàng, không làm ảnh hưởng đến công tác chuyên môn không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Tỷ lệ NB buồng VIP được chăm sóc chủ",
        "desc": "động trong 24h (Chỉ số tiếp cận dịch vụ cốt lõi) (Mốc cũ: 47.8% được tiếp cận) Ghi nhận nhật ký đợt thử nghiệm: Đạt: ...... % được chăm sóc (Mục tiêu cam kết A3: ≥ 95%)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Mức độ hài lòng chung của người bệnh",
        "desc": "buồng VIP (Đánh giá theo phiếu khảo sát chuẩn) (Mốc cũ: Khoảng 75 – 78%) Khảo sát đợt thử nghiệm: Đạt: ...... % hài lòng (Mục tiêu cam kết A3: ≥ 95%)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Thời gian xử lý dứt điểm yêu cầu tiện ích",
        "desc": "phòng Bấm giờ thực tế các ca yêu cầu: Đạt trung bình: ...... phút -- 27 of 40 -- (Tốc độ giải quyết phàn nàn) (Mốc cũ: 30 – 45 phút) (Mục tiêu cam kết: ≤ 15 phút)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu lượt khách buồng VIP",
        "desc": "tham gia khảo sát thử nghiệm (Đối soát Báo cáo Phòng Kinh doanh) Số lượt khách buồng VIP thực tế: Đạt: ...... lượt khách hàng (Yêu cầu tối thiểu theo A3: ≥ 30 lượt)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Tỷ lệ NB buồng VIP được chăm sóc chủ",
        "desc": "động trong 24h (Chỉ số tiếp cận dịch vụ cốt lõi) (Mốc cũ: 47.8% được tiếp cận) Ghi nhận nhật ký đợt thử nghiệm: Đạt: ...... % được chăm sóc (Mục tiêu cam kết A3: ≥ 95%)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Mức độ hài lòng chung của người bệnh",
        "desc": "buồng VIP (Đánh giá theo phiếu khảo sát chuẩn) (Mốc cũ: Khoảng 75 – 78%) Khảo sát đợt thử nghiệm: Đạt: ...... % hài lòng (Mục tiêu cam kết A3: ≥ 95%)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Thời gian xử lý dứt điểm yêu cầu tiện ích",
        "desc": "phòng Bấm giờ thực tế các ca yêu cầu: Đạt trung bình: ...... phút -- 27 of 40 -- (Tốc độ giải quyết phàn nàn) (Mốc cũ: 30 – 45 phút) (Mục tiêu cam kết: ≤ 15 phút)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu lượt khách buồng VIP",
        "desc": "tham gia khảo sát thử nghiệm (Đối soát Báo cáo Phòng Kinh doanh) Số lượt khách buồng VIP thực tế: Đạt: ...... lượt khách hàng (Yêu cầu tối thiểu theo A3: ≥ 30 lượt) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Bộ Quy chuẩn 8 điểm chạm chăm sóc",
        "desc": "buồng VIP (Văn bản tiêu chuẩn dịch vụ) Đã ban hành bộ tiêu chuẩn nghiệp vụ chăm sóc khách hàng buồng yêu cầu có phê duyệt của Ban Giám đốc bệnh viện.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Cuốn Cẩm nang tiện ích phòng VIP (Cẩm",
        "desc": "nang buồng bệnh) (Ấn phẩm truyền thông cao cấp) Đã in ấn và trang bị cuốn cẩm nang bìa da sang trọng đặt tại 100% buồng điều trị theo yêu cầu toàn viện.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Phiếu kiểm tra 8 điểm chạm & Sổ nhật ký",
        "desc": "phản hồi (Công cụ kiểm soát chất lượng) Đã đưa vào sử dụng phiếu đánh giá 8 điểm chạm cho từng lượt khách và sổ nhật ký xử lý khiếu nại dịch vụ.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo phân tích trải nghiệm khách hàng",
        "desc": "buồng VIP (Dữ liệu thực chứng khoa học Kaizen) Đã tổng hợp báo cáo đo lường tỷ lệ tiếp cận, thời gian phản hồi và các đề xuất cải tiến cơ sở vật chất buồng bệnh.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Chuẩn hóa 8 điểm chạm, tỷ lệ chăm sóc chủ động ≥ 95%, hài lòng ≥ 95%, xử lý yêu cầu ≤ 15p,",
      "loaiBDesc": "Đã tiếp cận khách nhưng một số ca mốc 24h chưa kịp khảo sát, thiếu cẩm nang ở một",
      "loaiCDesc": "Tỷ lệ tiếp cận chủ động vẫn thấp; khách hàng buồng VIP vẫn phải tự xoay xở; báo cáo Ban",
      "ghiChu": "Thẩm định viên ghi nhận: Kiểm tra buồng VIP trống; phỏng vấn trực tiếp khách hàng mốc 24h; thử nghiệm báo hỏng tiện ích bấm giờ xử lý; đối soát nhật ký HIS.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-UB-01": {
    "docIndex": 15,
    "maDeTai": "KZ16-UB-01",
    "tenDeAn": "Ứng dụng mã QR trong chuẩn hóa cung cấp thông tin và hướng dẫn chăm sóc cho người bệnh ung thư tại Khoa Ung",
    "donVi": "",
    "canBo": "CN. Nguyễn Văn Quân",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Thẻ mica gắn mã QR tại 100% đầu giường",
        "desc": "bệnh (Phương tiện tiếp cận thông tin tại chỗ) Thẻ mica in màu sắc nét gắn cố định tại đầu giường bệnh và in trên sổ theo dõi điều trị ngoại trú; mã QR quét nhanh, không mờ nhòe.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Kho nội dung Đồ họa thông tin và Video",
        "desc": "hướng dẫn số hóa (Tài liệu giáo dục sức khỏe chuẩn y khoa) Kho học liệu số hóa gồm các video hướng dẫn (1-3 phút) và đồ họa thông tin trực quan sinh động: Dinh dưỡng ung thư, Chăm sóc buồn nôn, Rụng tóc, Vệ sinh răng miệng.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Bảng hướng dẫn nhận diện dấu hiệu báo",
        "desc": "động đỏ (An toàn người bệnh điều trị hóa chất) Nội dung nhấn mạnh dấu hiệu cấp cứu: Sốt ≥ 38°C khi hạ bạch cầu, xuất huyết dưới da, nôn nhiều mất nước, khó thở cần liên hệ viện ngay.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Giao diện trang thông tin di động thân",
        "desc": "thiện, không quảng cáo (Trải nghiệm người dùng thuận tiện) Trang đích hiển thị nhanh trên mọi dòng điện thoại thông minh, phân mục rõ ràng, cỡ chữ to dễ đọc cho người cao tuổi, không chứa nội dung thương mại.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Khảo sát ngẫu nhiên người bệnh đang",
        "desc": "truyền hóa chất (Đánh giá tỷ lệ quét và tiếp cận thực tế) Chọn ngẫu nhiên 05 bệnh nhân/người nhà: Đã quét mã QR chưa? Có xem được video hướng dẫn không? Thao tác quét có dễ dàng không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Đánh giá mức độ nắm kiến thức xử trí tác",
        "desc": "dụng phụ (Đo lường hiệu quả truyền thông y tế) Hỏi nhanh 03 bệnh nhân: Khi bị nôn nhiều hoặc sốt tại nhà thì cần làm gì đầu tiên? Bệnh nhân có trả lời đúng theo hướng dẫn trên QR không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Kiểm tra kỹ năng hướng dẫn của Điều",
        "desc": "dưỡng ca trực (Vai trò đồng hành và thấu cảm) Chỉ định 01 Điều dưỡng mới thực hiện tư vấn cho bệnh nhân mới vào viện: Có hướng dẫn người bệnh quét QR và giải thích các điểm cốt lõi không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Kiểm tra phương án hỗ trợ người già",
        "desc": "không có điện thoại thông minh (Bảo đảm không ai bị bỏ lại phía sau) Khoa có máy tính bảng hoặc tờ rơi tóm tắt bằng hình ảnh để hỗ trợ người bệnh cao tuổi không có điện thoại thông minh không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Kiểm toán tính chuẩn xác của thông tin y",
        "desc": "khoa (Phê duyệt chuyên môn) Kiểm tra tính pháp lý nội dung: Toàn bộ video và đồ họa thông tin trực quan có được Trưởng khoa Ung bướu và Hội đồng Thuốc/QLCL ký duyệt không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Tỷ lệ NB/người nhà quét mã QR tiếp cận",
        "desc": "thông tin (Độ bao phủ của giải pháp số hóa) (Mốc cũ: 0% - chỉ tư vấn miệng) Ghi nhận đợt thử nghiệm: Đạt: ...... % người bệnh quét QR (Mục tiêu cam kết A3: ≥ 80%)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Tỷ lệ NB nắm vững cách xử trí tác dụng",
        "desc": "phụ tại nhà (Chỉ số nhận thức an toàn người bệnh) (Mốc cũ: Khoảng 40 – 50%) Khảo sát đánh giá đợt thử nghiệm: Đạt: ...... % trả lời đúng (Mục tiêu cam kết A3: ≥ 85%) -- 29 of 40 --",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Mức độ hài lòng của NB với hoạt động tư",
        "desc": "vấn GDSK (Đánh giá theo thang điểm Likert 5 mức) (Mốc cũ: Khoảng 70 – 75%) Khảo sát đợt thử nghiệm: Đạt: ...... % hài lòng (Mục tiêu cam kết: ≥ 92%)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu bệnh nhân ung bướu tham",
        "desc": "gia khảo sát (Đối soát Bệnh án Khoa Ung Bướu) Số bệnh nhân thực tế tham gia: Đạt: ...... bệnh nhân (Yêu cầu tối thiểu theo A3: ≥ 40 BN)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Tỷ lệ NB/người nhà quét mã QR tiếp cận",
        "desc": "thông tin (Độ bao phủ của giải pháp số hóa) (Mốc cũ: 0% - chỉ tư vấn miệng) Ghi nhận đợt thử nghiệm: Đạt: ...... % người bệnh quét QR (Mục tiêu cam kết A3: ≥ 80%)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Tỷ lệ NB nắm vững cách xử trí tác dụng",
        "desc": "phụ tại nhà (Chỉ số nhận thức an toàn người bệnh) (Mốc cũ: Khoảng 40 – 50%) Khảo sát đánh giá đợt thử nghiệm: Đạt: ...... % trả lời đúng (Mục tiêu cam kết A3: ≥ 85%) -- 29 of 40 --",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Mức độ hài lòng của NB với hoạt động tư",
        "desc": "vấn GDSK (Đánh giá theo thang điểm Likert 5 mức) (Mốc cũ: Khoảng 70 – 75%) Khảo sát đợt thử nghiệm: Đạt: ...... % hài lòng (Mục tiêu cam kết: ≥ 92%)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu bệnh nhân ung bướu tham",
        "desc": "gia khảo sát (Đối soát Bệnh án Khoa Ung Bướu) Số bệnh nhân thực tế tham gia: Đạt: ...... bệnh nhân (Yêu cầu tối thiểu theo A3: ≥ 40 BN) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Hệ thống mã QR mica gắn 100% giường",
        "desc": "bệnh Ung bướu (Hiện vật triển khai thực tế) Đã lắp đặt thẻ mica có mã QR tại 100% giường bệnh khoa Ung bướu và bàn giao sổ tay có mã QR cho bệnh nhân ngoại trú.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Kho 05 Video hướng dẫn & 08 Đồ họa",
        "desc": "thông tin trực quan chuẩn y khoa (Sản phẩm truyền thông số hóa) Đã hoàn thiện bộ video và hình ảnh hướng dẫn chăm sóc theo từng phác đồ hóa trị phổ biến được Hội đồng Chuyên môn phê duyệt.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Quy trình tư vấn giáo dục sức khỏe qua",
        "desc": "mã QR (SOP nghiệp vụ điều dưỡng ung bướu) Đã ban hành quy trình điều dưỡng hướng dẫn người bệnh quét QR ngay khi tiếp nhận vào buồng điều trị.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo thống kê lượt quét & đánh giá",
        "desc": "nhận thức NB (Dữ liệu thực chứng khoa học Kaizen) Đã trích xuất báo cáo thống kê truy cập trực tuyến và nhật ký máy chủ về số lượt quét mã, thời lượng xem video và phân tích kết quả khảo sát người bệnh.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Mã QR gắn 100% giường, video/đồ họa thông tin trực quan phong phú dễ hiểu, tỷ lệ quét ≥ 80%,",
      "loaiBDesc": "Đã có mã QR nhưng video tải còn chậm, một số bệnh nhân lớn tuổi chưa được điều",
      "loaiCDesc": "Mã QR chưa dán tại giường; nội dung video chưa hoàn thiện; người bệnh chưa biết sử",
      "ghiChu": "Thẩm định viên ghi nhận: Quét thử mã QR tại các giường; kiểm tra tốc độ phát video; phỏng vấn ngẫu nhiên người bệnh về tác dụng phụ; kiểm tra phương án người cao tuổi.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-LCK-01": {
    "docIndex": 16,
    "maDeTai": "KZ16-LCK-01",
    "tenDeAn": "Cải tiến phiếu đi buồng điều dưỡng hằng ngày và chuẩn hóa quy trình chăm sóc khép kín",
    "donVi": "Khoa Liên Chuyên Khoa",
    "canBo": "ĐD. Nguyễn Thị Huyền",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Mẫu Phiếu đi buồng điều dưỡng cải tiến 7",
        "desc": "cột (Chu trình chăm sóc khép kín PDCA) Phiếu in chuẩn 7 cột: (1) Giờ, (2) Tên NB, (3) Vấn đề phát hiện, (4) Can thiệp điều dưỡng, (5) Thời gian đánh giá lại, (6) Kết quả, (7) Ký nhận NB.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Kẹp mica hồ sơ gắn tại đầu giường hoặc xe",
        "desc": "tiêm (Công cụ trực quan hóa hiện trường) Trang bị bảng kẹp mica cứng cáp tại xe tiêm đi buồng hoặc đầu giường bệnh nhân; ghi chép ngay tại giường, chống ghi chép hồi cứu.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Lịch phân công đi buồng cố định 3 thời",
        "desc": "điểm vàng (Kỷ luật thời gian chăm sóc) Quy định rõ 3 khung giờ đi buồng chăm sóc chủ động: Đầu giờ sáng (7h30), Đầu giờ chiều (14h00), Đầu ca tối (20h00); có phân công cụ thể từng ĐD.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Cơ chế đánh giá lại sau can thiệp (Đánh",
        "desc": "giá lại sau can thiệp) (Bắt buộc kiểm tra hiệu quả can thiệp) Quy định bắt buộc: Khi can thiệp giảm đau, hạ sốt, thay băng hoặc giải thích y lệnh, điều dưỡng phải quay lại đánh giá kết quả sau 30-60 phút.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Kiểm tra thực tế 05 phiếu đi buồng tại",
        "desc": "buồng bệnh (Kiểm toán tính trung thực ghi chép) Kiểm tra ngẫu nhiên 05 phiếu: Có ghi chép đủ 7 cột không? Cột 'Kết quả sau can thiệp' có được ghi thực chất và có chữ ký xác nhận của NB không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Khảo sát trực tiếp người bệnh tại giường",
        "desc": "(Đo lường sự tận tâm của điều dưỡng) Phỏng vấn 03 bệnh nhân: Điều dưỡng đi buồng có hỏi han kỹ không? Sau khi cho thuốc giảm đau/tiêm truyền có quay lại kiểm tra tình trạng không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Thao tác ngẫu nhiên Điều dưỡng ngoài",
        "desc": "nhóm tác giả (Chống độc quyền tác giả & Đào tạo nội bộ) Chỉ định 01 Điều dưỡng ca trực thực hiện 01 lượt đi buồng mẫu tại 02 buồng bệnh: Có thực hiện đúng kỹ thuật giao tiếp và chăm sóc khép kín không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Theo dõi số lần người bệnh bấm chuông",
        "desc": "gọi điều dưỡng (Chỉ số đo lường nhu cầu bị bỏ sót) Kiểm tra nhật ký chuông báo gọi tại phòng trực: Tần suất người bệnh bấm chuông hỏi y lệnh, xin thuốc giảm đau, báo hết dịch có giảm rõ rệt không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Đối soát bàn giao ca trực điều dưỡng bằng",
        "desc": "phiếu 7 cột (Kỷ luật bàn giao an toàn người bệnh) Kiểm tra việc bàn giao ca: Các vấn đề chưa giải quyết dứt điểm trong ca trước có được bàn giao sang ca sau để tiếp tục theo dõi không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Tỷ lệ vấn đề chăm sóc của NB giải quyết",
        "desc": "dứt điểm (Khép kín chu trình chăm sóc) (Mốc cũ: Khoảng 60 – 65%) Kiểm tra phiếu đi buồng đợt thử nghiệm: Đạt: ...... % giải quyết dứt điểm (Mục tiêu cam kết A3: ≥ 90%)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Số lần NB bấm chuông gọi ĐD do nhu",
        "desc": "cầu bỏ sót (Chỉ số lãng phí thời gian và bất an) (Mốc cũ: 18 – 25 lượt/ngày) Ghi nhận nhật ký trực 3 ngày qua: Còn: ...... lượt bấm chuông/ngày (Mục tiêu cam kết A3: ≤ 5 lượt) lượt)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Mức độ hài lòng của NB về sự tận tâm",
        "desc": "của ĐD Khảo sát đợt thử nghiệm: Đạt: ...... % hài lòng -- 31 of 40 -- (Đánh giá sự an tâm của người bệnh) (Mốc cũ: Khoảng 80 – 82%) (Mục tiêu cam kết: ≥ 95%)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu bệnh nhân nội trú tham gia",
        "desc": "thử nghiệm (Đối soát Bệnh án Khoa LCK) Số bệnh nhân áp dụng phiếu 7 cột: Đạt: ...... bệnh nhân (Yêu cầu tối thiểu theo A3: ≥ 35 BN)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Tỷ lệ vấn đề chăm sóc của NB giải quyết",
        "desc": "dứt điểm (Khép kín chu trình chăm sóc) (Mốc cũ: Khoảng 60 – 65%) Kiểm tra phiếu đi buồng đợt thử nghiệm: Đạt: ...... % giải quyết dứt điểm (Mục tiêu cam kết A3: ≥ 90%)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Số lần NB bấm chuông gọi ĐD do nhu",
        "desc": "cầu bỏ sót (Chỉ số lãng phí thời gian và bất an) (Mốc cũ: 18 – 25 lượt/ngày) Ghi nhận nhật ký trực 3 ngày qua: Còn: ...... lượt bấm chuông/ngày (Mục tiêu cam kết A3: ≤ 5 lượt) lượt)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Mức độ hài lòng của NB về sự tận tâm",
        "desc": "của ĐD Khảo sát đợt thử nghiệm: Đạt: ...... % hài lòng -- 31 of 40 -- (Đánh giá sự an tâm của người bệnh) (Mốc cũ: Khoảng 80 – 82%) (Mục tiêu cam kết: ≥ 95%)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu bệnh nhân nội trú tham gia",
        "desc": "thử nghiệm (Đối soát Bệnh án Khoa LCK) Số bệnh nhân áp dụng phiếu 7 cột: Đạt: ...... bệnh nhân (Yêu cầu tối thiểu theo A3: ≥ 35 BN) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Mẫu Phiếu đi buồng điều dưỡng 7 cột",
        "desc": "chuẩn hóa (Công cụ chăm sóc lâm sàng) Đã in ấn và ban hành mẫu phiếu 7 cột chuẩn hóa có chữ ký phê duyệt của Trưởng khoa LCK và Trưởng phòng Điều dưỡng.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "SOP Quy trình Đi buồng điều dưỡng và",
        "desc": "chăm sóc khép kín (Quy chuẩn kỹ thuật chăm sóc) Đã ban hành văn bản quy trình thao tác chuẩn quy định rõ trách nhiệm đi buồng 3 thời điểm và kỹ thuật ghi chép đánh giá lại.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Bảng phân công kíp trực đi buồng theo",
        "desc": "khu vực buồng bệnh (Quản lý trực quan hiện trường) Đã lập và dán tại phòng giao ban bảng phân công cụ thể từng điều dưỡng phụ trách các buồng bệnh trong từng ca trực.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo tổng hợp số liệu đo lường & phiếu",
        "desc": "khảo sát NB (Dữ liệu thực chứng khoa học Kaizen) Đã tập hợp toàn bộ phiếu đi buồng thực nghiệm, nhật ký chuông báo và phiếu khảo sát người bệnh để đối soát nghiệm thu A3.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Phiếu 7 cột ghi chép đầy đủ thực chất, giải quyết dứt điểm vấn đề ≥ 90%, chuông gọi giảm ≤ 5",
      "loaiBDesc": "Đã có phiếu 7 cột nhưng cột đánh giá lại còn ghi vội, chữ ký người bệnh chưa đầy đủ",
      "loaiCDesc": "Chưa duy trì đi buồng 3 thời điểm thực tế; vẫn ghi chép đối phó hồi cứu trên bàn giấy; báo",
      "ghiChu": "Thẩm định viên ghi nhận: Kiểm tra trực tiếp phiếu đi buồng tại các phòng bệnh; đối soát cột đánh giá lại; phỏng vấn bệnh nhân; kiểm tra nhật ký chuông báo.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-DL-01": {
    "docIndex": 17,
    "maDeTai": "KZ16-DL-01",
    "tenDeAn": "Cải tiến hướng dẫn sử dụng thuốc bôi tại nhà ở người bệnh trứng cá bằng bộ công cụ trực quan và Bảng kiểm 5 Đúng",
    "donVi": "Khoa Da Liễu",
    "canBo": "ĐD. Hồ Thị Phương Thảo",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Tờ hướng dẫn trực quan in màu ép bóng",
        "desc": "cá nhân hóa (Hướng dẫn trực quan dùng thuốc bôi) Tờ hướng dẫn in màu rõ nét, phân tách rõ phác đồ Sáng - Tối; mô tả thứ tự bôi và lượng thuốc bôi bằng hình ảnh hạt đậu thực tế.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Bộ nhãn dán số thứ tự Bước 1 - Bước 2 -",
        "desc": "Bước 3 (Chống nhầm lẫn thứ tự bôi thuốc) Nhãn dán chống nước in rõ số thứ tự bước bôi, dán trực tiếp lên thân các tuýp thuốc khi bàn giao thuốc cho người bệnh.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Bảng kiểm 5 đúng dùng thuốc bôi",
        "desc": "(Đúng thuốc - Đúng thứ tự - Đúng liều - Đúng lúc - Đúng cách) Bảng kiểm thiết kế dạng miếng dán nam châm hoặc dán gương phòng tắm để người bệnh tự kiểm tra hàng ngày trước khi bôi thuốc.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Video mô phỏng thao tác bôi thuốc qua mã",
        "desc": "QR (Hướng dẫn kỹ thuật thoa và vỗ thuốc) Mã QR in trên tờ hướng dẫn quét ra video ngắn 60 giây hướng dẫn cách chấm thuốc, thoa nhẹ nhàng, tránh vùng mắt và khóe mũi.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 2,
        "title": "& 4)",
        "desc": "TT Tiêu chí kiểm định hiện trường Tình huống kiểm chứng thực tế Kết quả",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 1,
        "title": "Kiểm tra quy trình bàn giao thuốc tại bàn",
        "desc": "tư vấn Da liễu (Thao tác dán nhãn và hướng dẫn mẫu) Quan sát thực tế điều dưỡng bàn giao thuốc: Có dán nhãn bước 1-2-3 lên từng tuýp thuốc và yêu cầu bệnh nhân nhắc lại thứ tự bôi không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 2,
        "title": "Khảo sát bệnh nhân tái khám ngẫu nhiên",
        "desc": "(hoặc gọi điện kiểm tra) (Đo lường mức độ ghi nhớ và tuân thủ) Phỏng vấn ngẫu nhiên 03 bệnh nhân đang điều trị: Hỏi thứ tự bôi thuốc tối qua và lượng thuốc bôi: Bệnh nhân có nhớ và thực hiện đúng không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 3,
        "title": "Kiểm tra tỷ lệ kích ứng, đỏ rát da do bôi",
        "desc": "sai cách (Chỉ số an toàn điều trị da liễu) Đối soát hồ sơ bệnh án các ca tái khám: Có ca nào bị viêm da tiếp xúc, đỏ rát, bùng mụn do bôi quá liều hoặc sai thứ tự không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 4,
        "title": "Thao tác ngẫu nhiên Điều dưỡng ngoài",
        "desc": "nhóm tác giả (Chuẩn hóa quy trình tư vấn nội bộ) Chỉ định 01 Điều dưỡng ca trực thực hiện phiên tư vấn 5 đúng cho 01 bệnh nhân mới: Có thao tác chuyên nghiệp, giải thích rõ ràng không?",
        "status": "pass"
      },
      {
        "id": "ls_6",
        "stt": 5,
        "title": "Khảo sát sự hài lòng và tự tin của người",
        "desc": "bệnh (Hiệu quả giáo dục sức khỏe) Phỏng vấn 02 bệnh nhân: Bộ công cụ trực quan và nhãn dán có giúp bệnh nhân tự tin bôi thuốc tại nhà mà không lo bị nhầm không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Tỷ lệ người bệnh tuân thủ đúng 100%",
        "desc": "phác đồ bôi thuốc (Chỉ số tuân thủ điều trị tại nhà) (Mốc cũ: Khoảng 35 – 42%) Khảo sát đợt thử nghiệm: Đạt: ...... % tuân thủ đúng (Mục tiêu cam kết A3: ≥ 85%)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Tỷ lệ người bệnh gặp biến chứng kích",
        "desc": "ứng do bôi sai (Đỏ rát, bong tróc do dùng sai cách) (Mốc cũ: Khoảng 20 – 25%) Ghi nhận trong đợt thử nghiệm: Còn: ...... % kích ứng sai cách (Mục tiêu cam kết A3: ≤ 5%) -- 33 of 40 --",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Mức độ hài lòng của người bệnh về",
        "desc": "hướng dẫn của khoa (Đo lường trải nghiệm dịch vụ) (Mốc cũ: Khoảng 78 – 80%) Khảo sát đợt thử nghiệm: Đạt: ...... % hài lòng (Mục tiêu cam kết: ≥ 95%)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu bệnh nhân trứng cá tham",
        "desc": "gia thử nghiệm (Đối soát Hồ sơ Khám Da liễu) Số bệnh nhân áp dụng bộ công cụ: Đạt: ...... bệnh nhân (Yêu cầu tối thiểu theo A3: ≥ 40 BN)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Tỷ lệ người bệnh tuân thủ đúng 100%",
        "desc": "phác đồ bôi thuốc (Chỉ số tuân thủ điều trị tại nhà) (Mốc cũ: Khoảng 35 – 42%) Khảo sát đợt thử nghiệm: Đạt: ...... % tuân thủ đúng (Mục tiêu cam kết A3: ≥ 85%)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Tỷ lệ người bệnh gặp biến chứng kích",
        "desc": "ứng do bôi sai (Đỏ rát, bong tróc do dùng sai cách) (Mốc cũ: Khoảng 20 – 25%) Ghi nhận trong đợt thử nghiệm: Còn: ...... % kích ứng sai cách (Mục tiêu cam kết A3: ≤ 5%) -- 33 of 40 --",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Mức độ hài lòng của người bệnh về",
        "desc": "hướng dẫn của khoa (Đo lường trải nghiệm dịch vụ) (Mốc cũ: Khoảng 78 – 80%) Khảo sát đợt thử nghiệm: Đạt: ...... % hài lòng (Mục tiêu cam kết: ≥ 95%)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu bệnh nhân trứng cá tham",
        "desc": "gia thử nghiệm (Đối soát Hồ sơ Khám Da liễu) Số bệnh nhân áp dụng bộ công cụ: Đạt: ...... bệnh nhân (Yêu cầu tối thiểu theo A3: ≥ 40 BN) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Bộ mẫu Tờ hướng dẫn trực quan phác đồ",
        "desc": "bôi thuốc (Ấn phẩm truyền thông chuẩn mực) Đã thiết kế, in màu ép bóng các mẫu tờ hướng dẫn trực quan theo từng nhóm phác đồ điều trị mụn trứng cá phổ biến.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Bộ nhãn dán định danh thứ tự Bước 1 - 2 -",
        "desc": "",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "dán tuýp",
        "desc": "(Công cụ trực quan hóa sản phẩm) Đã in ấn số lượng lớn nhãn dán số thứ tự chống nước để bàn giao kèm theo đơn thuốc bôi tại phòng khám da liễu.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 3,
        "title": "Bảng kiểm 5 Đúng dùng thuốc bôi kèm mã",
        "desc": "QR video (Công cụ kiểm soát an toàn tại nhà) Đã hoàn thiện bảng kiểm 5 đúng dán gương phòng tắm tích hợp mã QR video hướng dẫn kỹ thuật bôi thuốc chuẩn.",
        "status": "pass"
      },
      {
        "id": "sp_9",
        "stt": 4,
        "title": "Báo cáo đối soát tỷ lệ tuân thủ & tỷ lệ biến",
        "desc": "chứng da (Dữ liệu thực chứng khoa học Kaizen) Đã tổng hợp số liệu khảo sát bệnh nhân, đối soát tỷ lệ tái khám và đánh giá hiệu quả lâm sàng của bộ công cụ trực quan.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Bộ công cụ trực quan hoàn chỉnh, dán nhãn 100% tuýp thuốc, tuân thủ bôi đúng ≥ 85%, kích ứng",
      "loaiBDesc": "Đã phát tờ hướng dẫn nhưng chưa dán nhãn số thứ tự trên tuýp thuốc, video QR tải",
      "loaiCDesc": "Chưa triển khai bộ công cụ thực tế tại phòng khám; vẫn tư vấn miệng; tỷ lệ kích ứng da còn",
      "ghiChu": "Thẩm định viên ghi nhận: Kiểm tra quy trình dán nhãn tuýp thuốc tại bàn tư vấn; quét thử mã QR video; phỏng vấn bệnh nhân tái khám; đối soát hồ sơ kích ứng da.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-PKCM-01": {
    "docIndex": 18,
    "maDeTai": "KZ16-PKCM-01",
    "tenDeAn": "Cải tiến quy trình đón tiếp và khám chữa bệnh theo mô hình Kíp trực linh hoạt giờ cao điểm",
    "donVi": "PKĐK Chân Mộng",
    "canBo": "BS. Nguyễn Đức Huỳnh",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Ma trận điều động nhân lực linh hoạt",
        "desc": "(Lịch phân công trực linh hoạt) (Mô hình tăng cường giờ cao điểm) Bảng phân công điều động chéo nhân lực hành chính/điều dưỡng tăng cường cho quầy đón tiếp trong khung giờ cao điểm 7h00 - 9h30 sáng.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Hệ thống vạch sơn dẫn hướng phân luồng",
        "desc": "một chiều (Giải tỏa nút thắt cổ chai giao thông) Vạch kẻ sàn chỉ dẫn luồng di chuyển một chiều: Luồng đón tiếp -> Bàn khám -> Khu vực cận lâm sàng (Máu, Siêu âm) -> Quầy dược/Thanh toán.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Trụ cấp số tự động bấm số tự động &",
        "desc": "Phân luồng đối tượng ưu tiên (Công bằng và văn minh đón tiếp) Trụ cấp số tự động phát số thứ tự tự động; phân luồng rõ cửa ưu tiên cho người già ≥ 75 tuổi, trẻ nhỏ dưới 6 tuổi và phụ nữ mang thai.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Màn hình hiển thị số thứ tự tại các phòng",
        "desc": "cận lâm sàng (Giảm tình trạng chen lấn chờ đợi) Màn hình gọi số đồng bộ tại sảnh chờ xét nghiệm và siêu âm; âm thanh gọi số rõ ràng, tránh người bệnh phải đứng chờ trước cửa phòng.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Bấm giờ thủ tục đón tiếp trong khung giờ",
        "desc": "7h30 - 8h30 (Mục tiêu A3: Đón tiếp vào bàn khám ≤ 8 phút) Bấm giờ thực tế 05 bệnh nhân đến vào giờ cao điểm: Từ khi bước vào cửa đến khi hoàn tất thủ tục và ngồi trước bàn khám có ≤ 8 phút không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Kiểm tra kỷ luật có mặt của kíp tăng",
        "desc": "cường Kíp trực linh hoạt (Đúng giờ và đúng vị trí phân công) Kiểm tra đột xuất lúc 7h15 sáng: Nhân sự tăng cường (điều dưỡng, hành chính) có mặt đầy đủ tại quầy đón tiếp và vị trí phân luồng không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Kiểm tra tình trạng ùn tắc tại cửa phòng",
        "desc": "Siêu âm & Máu (Điều phối giãn cách luồng bệnh) Quan sát khu vực cận lâm sàng lúc 8h15: Có nhân viên điều phối hướng dẫn bệnh nhân sang các phòng siêu âm/phòng khám còn vắng không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Bấm giờ tổng thời gian khám ngoại trú",
        "desc": "của người bệnh (Rút ngắn thời gian từ lúc đến đến lúc về) Theo dõi ngẫu nhiên 03 bệnh nhân khám nội khoa thường quy (không làm thủ thuật): Tổng thời gian từ đón tiếp đến lấy thuốc có ≤ 75 phút?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Khảo sát ý kiến người bệnh tại sảnh chờ",
        "desc": "thanh toán (Cảm nhận về sự nhanh chóng, trật tự) Phỏng vấn 03 người bệnh chuẩn bị ra về: Thời gian chờ đợi hôm nay thế nào? Phòng khám có trật tự, không bị chen lấn không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Thời gian chờ làm thủ tục đón tiếp giờ",
        "desc": "cao điểm (Bấm giờ từ khi lấy số đến khi vào bàn khám) (Mốc cũ: 20 – 30 phút) Bấm giờ thực tế đợt thử nghiệm: Đo được: ...... phút/BN (Mục tiêu cam kết A3: ≤ 8 phút)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Tổng thời gian khám ngoại trú trung",
        "desc": "bình 1 ca Theo dõi thực tế đợt thử nghiệm: Đạt trung bình: ...... phút/ca -- 35 of 40 -- (Không bao gồm các ca làm thủ thuật chuyên sâu) (Mốc cũ: 120 – 150 phút) (Mục tiêu cam kết A3: ≤ 75 phút)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Tỷ lệ người bệnh phàn nàn về thời gian",
        "desc": "chờ đợi (Chỉ số giải tỏa bức xúc khách hàng) (Mốc cũ: Khoảng 18 – 22%) Khảo sát đợt thử nghiệm: Còn: ...... % phàn nàn (Mục tiêu cam kết: ≤ 5%)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu bệnh nhân được bấm giờ",
        "desc": "đối soát (Trích xuất dữ liệu HIS PKĐK Chân Mộng) Số ca bấm giờ giờ cao điểm thực tế: Đạt: ...... bệnh nhân (Yêu cầu tối thiểu theo A3: ≥ 30 ca)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Thời gian chờ làm thủ tục đón tiếp giờ",
        "desc": "cao điểm (Bấm giờ từ khi lấy số đến khi vào bàn khám) (Mốc cũ: 20 – 30 phút) Bấm giờ thực tế đợt thử nghiệm: Đo được: ...... phút/BN (Mục tiêu cam kết A3: ≤ 8 phút)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Tổng thời gian khám ngoại trú trung",
        "desc": "bình 1 ca Theo dõi thực tế đợt thử nghiệm: Đạt trung bình: ...... phút/ca -- 35 of 40 -- (Không bao gồm các ca làm thủ thuật chuyên sâu) (Mốc cũ: 120 – 150 phút) (Mục tiêu cam kết A3: ≤ 75 phút)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Tỷ lệ người bệnh phàn nàn về thời gian",
        "desc": "chờ đợi (Chỉ số giải tỏa bức xúc khách hàng) (Mốc cũ: Khoảng 18 – 22%) Khảo sát đợt thử nghiệm: Còn: ...... % phàn nàn (Mục tiêu cam kết: ≤ 5%)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu bệnh nhân được bấm giờ",
        "desc": "đối soát (Trích xuất dữ liệu HIS PKĐK Chân Mộng) Số ca bấm giờ giờ cao điểm thực tế: Đạt: ...... bệnh nhân (Yêu cầu tối thiểu theo A3: ≥ 30 ca) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Quy chế vận hành Kíp trực linh hoạt giờ",
        "desc": "cao điểm (Quy chuẩn điều hành nhân sự) Đã ban hành quy chế phân công Kíp trực linh hoạt có chữ ký của Giám đốc Phòng khám Chân Mộng và phê chuẩn của Ban Giám đốc bệnh viện.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Sơ đồ phân luồng luồng bệnh di chuyển",
        "desc": "một chiều (Công cụ quản trị trực quan) Đã sơn vạch kẻ sàn và treo sơ đồ phân luồng luồng bệnh di chuyển một chiều tại sảnh chính và các lối hành lang phòng khám.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Hệ thống Trụ cấp số tự động & Màn hình",
        "desc": "gọi số thứ tự tự động (Hiện vật đầu tư nâng cấp công nghệ) Hệ thống gọi số tự động vận hành ổn định, đồng bộ dữ liệu với phần mềm quản lý khám chữa bệnh HIS.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo đối soát thời gian chờ đợi trích",
        "desc": "xuất từ HIS (Dữ liệu thực chứng khoa học Kaizen) Đã xuất báo cáo biểu đồ thời gian chờ đợi theo từng khung giờ trong ngày, so sánh trước và sau khi triển khai mô hình Kíp trực linh hoạt.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Kíp Kíp trực linh hoạt vận hành nghiêm túc, đón tiếp ≤ 8p, tổng thời gian khám ≤ 75p, giải tỏa",
      "loaiBDesc": "Đã có kíp trực tăng cường nhưng nhân sự có mặt còn trễ, khu siêu âm còn dồn ứ cục bộ",
      "loaiCDesc": "Chưa triển khai điều động linh hoạt; giờ cao điểm sảnh khám vẫn ùn tắc kéo dài; báo cáo",
      "ghiChu": "Thẩm định viên ghi nhận: Có mặt trực tiếp lúc 7h30 sáng kiểm tra kíp Kíp trực linh hoạt; bấm giờ thực tế đón tiếp; kiểm tra khu vực siêu âm/máu; đối soát nhật ký hệ thống HIS.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-BKS-01": {
    "docIndex": 19,
    "maDeTai": "KZ16-BKS-01",
    "tenDeAn": "Cải tiến phương pháp luận xác định định mức kinh tế kỹ thuật và hoàn thiện cơ cấu giá dịch vụ y tế",
    "donVi": "Ban Kiểm soát",
    "canBo": "Ban Kiểm soát",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Mô hình bảng tính Excel cấu trúc giá 5",
        "desc": "thành phần (Phương pháp luận tính giá khoa học) Bảng tính chuẩn hóa: (1) Vật tư trực tiếp (ĐỊNH MỨC VẬT TƯ TIÊU HAO), (2) Nhân công theo thời gian kỹ thuật, (3) Khấu hao thiết bị, (4) Chi phí chung, (5) Tích lũy phát triển.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Phiếu đo lường Gemba kiểm kê hao phí",
        "desc": "thực tế tại chỗ (Công cụ thu thập số liệu thực chứng) Phiếu đo lường chi tiết từng chiếc găng tay, bơm tiêm, gạc, thuốc sát trùng, chỉ khâu... sử dụng thực tế cho ca phẫu thuật/thủ thuật.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Bảng chuẩn hóa định mức thời gian của",
        "desc": "kíp chuyên môn (Đo lường thời gian lao động thực tế) Bấm giờ chính xác thời gian thao tác của Phẫu thuật viên chính, Phụ mổ, Bác sĩ gây mê, Dụng cụ viên từ lúc chuẩn bị đến khi kết thúc ca.",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Liên kết cơ sở dữ liệu giá trúng thầu Khoa",
        "desc": "Dược (Tính chính xác của đơn giá đầu vào) Đơn giá vật tư, hóa chất, thuốc đưa vào mô hình giá được đối soát tự động với đơn giá nhập kho thực tế của Khoa Dược và Phòng Vật tư.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Kiểm tra phương pháp đo lường Gemba",
        "desc": "thực tế phòng mổ (Chống xây dựng định mức trên bàn giấy) Kiểm tra nhật ký kiểm toán: Cán bộ BKS có trực tiếp vào phòng mổ/nội soi bấm giờ và đếm từng chiếc gạc thực tế của 10 ca mổ ruột thừa không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Đối soát số liệu hao phí vật tư với phần",
        "desc": "mềm Kế toán (Kiểm toán tính chính xác số liệu) So sánh bảng định mức vật tư của dịch vụ Chụp CT sọ não với dữ liệu xuất kho thực tế trên phần mềm kế toán: Độ sai lệch có ≤ 5% không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Kiểm tra mô hình giá 03 dịch vụ kỹ thuật",
        "desc": "điển hình (PTNS ruột thừa, Chụp CT sọ não, Nội soi dạ dày) Xem xét bảng tính chi tiết của 03 dịch vụ: Các công thức tính khấu hao máy móc, phân bổ chi phí quản lý có minh bạch, logic và có cơ sở pháp lý không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Thảo luận với Lãnh đạo khoa Ngoại và",
        "desc": "CĐHA (Độ đồng thuận của khoa lâm sàng) Phỏng vấn Trưởng khoa Ngoại: Khoa có được tham gia đóng góp ý kiến về định mức vật tư không? Có đồng thuận với cơ cấu giá mới không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Khả năng nhân rộng phương pháp luận",
        "desc": "toàn viện (Tính mở rộng và chuẩn hóa hệ thống) Kiểm tra biểu mẫu và tài liệu hướng dẫn: Có thể chuyển giao cho Phòng TCKT và KHTH tự xây dựng giá cho 100% dịch vụ còn lại không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Số dịch vụ kỹ thuật hoàn thành cơ cấu",
        "desc": "giá chuẩn (Mô hình giá thực chứng 5 thành phần) (Mốc cũ: 0 dịch vụ đo chuẩn) Kiểm toán hồ sơ hoàn thành: Đạt: ...... / 3 dịch vụ điển hình (Mục tiêu cam kết A3: 100% 3 DV)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Độ chính xác định mức vật tư so với thực",
        "desc": "tế dùng (Độ sai lệch giữa lý thuyết và hiện trường) (Ước lượng định tính) Đối soát thực tế đợt thử nghiệm: Độ chính xác đạt: ...... % (Mục tiêu cam kết A3: ≥ 95%) -- 37 of 40 --",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Thời gian xây dựng cơ cấu giá cho 1 kỹ",
        "desc": "thuật mới (Chuẩn hóa quy trình 4 bước) (Mốc cũ: Vài tháng bàn bạc) Thực nghiệm quy trình mới: Hoàn thành trong: ...... ngày (Mục tiêu cam kết: ≤ 7 ngày) ngày)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng số ca lâm sàng được đo lường",
        "desc": "Gemba thực tế (Cỡ mẫu đo lường tại phòng mổ/CĐHA/Nội soi) Số ca đo lường thực tế hiện trường: Đạt: ...... ca lâm sàng (Yêu cầu tối thiểu theo A3: ≥ 30 ca)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Số dịch vụ kỹ thuật hoàn thành cơ cấu",
        "desc": "giá chuẩn (Mô hình giá thực chứng 5 thành phần) (Mốc cũ: 0 dịch vụ đo chuẩn) Kiểm toán hồ sơ hoàn thành: Đạt: ...... / 3 dịch vụ điển hình (Mục tiêu cam kết A3: 100% 3 DV)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Độ chính xác định mức vật tư so với thực",
        "desc": "tế dùng (Độ sai lệch giữa lý thuyết và hiện trường) (Ước lượng định tính) Đối soát thực tế đợt thử nghiệm: Độ chính xác đạt: ...... % (Mục tiêu cam kết A3: ≥ 95%) -- 37 of 40 --",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Thời gian xây dựng cơ cấu giá cho 1 kỹ",
        "desc": "thuật mới (Chuẩn hóa quy trình 4 bước) (Mốc cũ: Vài tháng bàn bạc) Thực nghiệm quy trình mới: Hoàn thành trong: ...... ngày (Mục tiêu cam kết: ≤ 7 ngày) ngày)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng số ca lâm sàng được đo lường",
        "desc": "Gemba thực tế (Cỡ mẫu đo lường tại phòng mổ/CĐHA/Nội soi) Số ca đo lường thực tế hiện trường: Đạt: ...... ca lâm sàng (Yêu cầu tối thiểu theo A3: ≥ 30 ca) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Tài liệu Hướng dẫn phương pháp xác định",
        "desc": "định mức & giá (Cẩm nang phương pháp luận quản trị) Đã hoàn thiện cẩm nang hướng dẫn quy trình 4 bước xác định chi phí và cơ cấu giá dịch vụ kỹ thuật y tế chuẩn hóa.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Tệp bảng tính Excel mô hình giá chuẩn 03",
        "desc": "dịch vụ kỹ thuật (Công cụ tính toán tự động) Đã xây dựng hoàn chỉnh tệp bảng tính Excel liên kết công thức tự động tính giá cho 03 dịch vụ: PTNS ruột thừa, CT sọ não, Nội soi dạ dày gây mê.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Bộ Phiếu đo lường Gemba thực tế có xác",
        "desc": "nhận của khoa (Dữ liệu thực chứng gốc) Đã tập hợp toàn bộ phiếu kiểm kê vật tư và bấm giờ tại phòng mổ/CĐHA có chữ ký xác nhận của phẫu thuật viên và kíp thực hiện.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo tham mưu Ban Giám đốc về cơ",
        "desc": "cấu giá viện phí (Sản phẩm quản trị chiến lược) Đã lập báo cáo so sánh cơ cấu giá mới với giá đang áp dụng, phân tích điểm hòa vốn và đề xuất phương án điều chỉnh giá toàn viện.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Mô hình giá 5 thành phần khoa học, đo Gemba thực tế ≥ 30 ca, độ chính xác ≥ 95%, hoàn thành",
      "loaiBDesc": "Đã có bảng tính giá nhưng số liệu nhân công còn ước tính, thiếu phiếu đo Gemba một",
      "loaiCDesc": "Chưa đi đo lường Gemba thực tế; bảng giá vẫn xây dựng trên bàn giấy; báo cáo Ban Tổ",
      "ghiChu": "Thẩm định viên ghi nhận: Kiểm tra các trang tính Excel Excel; đối soát công thức phân bổ khấu hao; kiểm tra chữ ký phiếu đo Gemba phòng mổ; phỏng vấn khoa lâm sàng.",
      "duDieuKienChungKet": true
    }
  },
  "KZ16-PKSD-01": {
    "docIndex": 20,
    "maDeTai": "KZ16-PKSD-01",
    "tenDeAn": "Nâng cao trải nghiệm khách hàng bằng sơ đồ phòng khám 3D kết hợp bảng hướng dẫn tại cửa các phòng",
    "donVi": "PKĐK Sơn",
    "canBo": "BS. Nguyễn Văn Thiết",
    "hienVat": [
      {
        "id": "hv_1",
        "stt": 1,
        "title": "Bảng sơ đồ không gian 3D trực quan tại",
        "desc": "sảnh chính (Bản đồ định vị tổng thể phòng khám) Bảng bảng biển lớn kích thước lớn đặt tại sảnh chờ trung tâm; vẽ 3D trực quan các tầng, phân màu rõ rệt các khu: Khám bệnh, CĐHA, Xét nghiệm, Cấp cứu.",
        "status": "pass"
      },
      {
        "id": "hv_2",
        "stt": 2,
        "title": "Hệ thống biển thông tin chuẩn hóa tại cửa",
        "desc": "các phòng (Nhận diện bác sĩ & quy trình phòng) Biển mica treo cửa phòng in to rõ số phòng, tên chuyên khoa, ảnh và họ tên Bác sĩ khám; có khe cài thẻ tên linh hoạt khi đổi ca.",
        "status": "pass"
      },
      {
        "id": "hv_3",
        "stt": 3,
        "title": "Vạch màu dẫn đường dưới sàn (Hệ thống",
        "desc": "biển báo dẫn đường) (Chỉ dẫn di chuyển liên tục) Hệ thống vạch sơn màu dẫn đường từ quầy đón tiếp tới các khu cận lâm sàng (Đường màu vàng: Xét nghiệm; Đường màu xanh: X-quang/Siêu âm).",
        "status": "pass"
      },
      {
        "id": "hv_4",
        "stt": 4,
        "title": "Mã QR xem bản đồ 3D dẫn đường trên",
        "desc": "điện thoại (Số hóa trải nghiệm tìm đường) In mã QR trên phiếu tiếp đón và tại các ngã rẽ hành lang; quét mã mở sơ đồ 3D chỉ đường trực quan trên điện thoại thông minh.",
        "status": "pass"
      }
    ],
    "lamSang": [
      {
        "id": "ls_1",
        "stt": 1,
        "title": "Thử nghiệm khách hàng mới tự tìm phòng",
        "desc": "khám (Đánh giá tính trực quan của sơ đồ 3D) Chọn ngẫu nhiên 03 người bệnh mới đến lần đầu: Cho người bệnh xem sơ đồ 3D tại sảnh -> Theo dõi có tự tìm đúng phòng khám mà không phải hỏi không?",
        "status": "pass"
      },
      {
        "id": "ls_2",
        "stt": 2,
        "title": "Bấm giờ di chuyển từ Bàn khám sang",
        "desc": "phòng Xét nghiệm/X-quang (Mục tiêu A3: Di chuyển dưới 3 phút) Bấm giờ thực tế 05 người bệnh đi từ phòng khám sang khu cận lâm sàng theo vạch dẫn đường: Có hoàn tất di chuyển trong ≤ 3 phút không?",
        "status": "pass"
      },
      {
        "id": "ls_3",
        "stt": 3,
        "title": "Kiểm tra tính đồng bộ thông tin tại cửa",
        "desc": "phòng khám (Chống sai lệch thông tin thực tế) Kiểm tra ngẫu nhiên 03 phòng khám chuyên khoa: Ảnh và tên Bác sĩ trên biển cửa phòng có trùng khớp với Bác sĩ đang ngồi khám bên trong không?",
        "status": "pass"
      },
      {
        "id": "ls_4",
        "stt": 4,
        "title": "Khảo sát giảm tải cho nhân viên tiếp đón",
        "desc": "và bảo vệ (Đo lường hiệu quả giảm hỏi đường) Phỏng vấn nhân viên quầy tiếp đón và bảo vệ sảnh: Tần suất người bệnh dừng lại hỏi đường, hỏi phòng khám có giảm rõ rệt không?",
        "status": "pass"
      },
      {
        "id": "ls_5",
        "stt": 5,
        "title": "Khảo sát người bệnh cao tuổi và đồng bào",
        "desc": "dân tộc (Độ thân thiện với mọi đối tượng khách hàng) Phỏng vấn 03 người bệnh cao tuổi: Màu sắc vạch kẻ sàn và chữ viết trên biển hiệu có to rõ, dễ nhìn, dễ đi theo không?",
        "status": "pass"
      }
    ],
    "doLuong": [
      {
        "id": "dl_1",
        "stt": 1,
        "title": "Tỷ lệ người bệnh tự tìm được phòng",
        "desc": "không cần hỏi đường (Chỉ số độc lập điều hướng của khách) (Mốc cũ: Khoảng 30 – 35%) Khảo sát đợt thử nghiệm: Đạt: ...... % tự tìm được (Mục tiêu cam kết A3: ≥ 80%)",
        "status": "pass"
      },
      {
        "id": "dl_2",
        "stt": 2,
        "title": "Thời gian di chuyển trung bình giữa các",
        "desc": "khu vực (Rút ngắn thời gian đi lạc lòng vòng) (Mốc cũ: 7 – 10 phút đi lạc) Bấm giờ thực tế tại hiện trường: Đo được: ...... phút/lần (Mục tiêu cam kết A3: ≤ 3 phút)",
        "status": "pass"
      },
      {
        "id": "dl_3",
        "stt": 3,
        "title": "Mức độ hài lòng của người bệnh với hệ  Chưa khảo sát mốc cũ Khảo sát đợt thử nghiệm:  ĐẠT (≥ 90%)",
        "desc": "-- 39 of 40 -- thống chỉ dẫn (Đánh giá trải nghiệm không gian phòng khám) (Mốc cũ: Khoảng 60 – 65%) Đạt: ...... % hài lòng (Mục tiêu cam kết: ≥ 90%)",
        "status": "pass"
      },
      {
        "id": "dl_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu người bệnh tham gia khảo",
        "desc": "sát thực địa (Khảo sát ngẫu nhiên tại PKĐK Sơn Dương) Số người bệnh thực tế khảo sát: Đạt: ...... người bệnh (Yêu cầu tối thiểu theo A3: ≥ 30 người)",
        "status": "pass"
      }
    ],
    "sanPham": [
      {
        "id": "sp_1",
        "stt": 1,
        "title": "Tỷ lệ người bệnh tự tìm được phòng",
        "desc": "không cần hỏi đường (Chỉ số độc lập điều hướng của khách) (Mốc cũ: Khoảng 30 – 35%) Khảo sát đợt thử nghiệm: Đạt: ...... % tự tìm được (Mục tiêu cam kết A3: ≥ 80%)",
        "status": "pass"
      },
      {
        "id": "sp_2",
        "stt": 2,
        "title": "Thời gian di chuyển trung bình giữa các",
        "desc": "khu vực (Rút ngắn thời gian đi lạc lòng vòng) (Mốc cũ: 7 – 10 phút đi lạc) Bấm giờ thực tế tại hiện trường: Đo được: ...... phút/lần (Mục tiêu cam kết A3: ≤ 3 phút)",
        "status": "pass"
      },
      {
        "id": "sp_3",
        "stt": 3,
        "title": "Mức độ hài lòng của người bệnh với hệ  Chưa khảo sát mốc cũ Khảo sát đợt thử nghiệm:  ĐẠT (≥ 90%)",
        "desc": "-- 39 of 40 -- thống chỉ dẫn (Đánh giá trải nghiệm không gian phòng khám) (Mốc cũ: Khoảng 60 – 65%) Đạt: ...... % hài lòng (Mục tiêu cam kết: ≥ 90%)",
        "status": "pass"
      },
      {
        "id": "sp_4",
        "stt": 4,
        "title": "Tổng cỡ mẫu người bệnh tham gia khảo",
        "desc": "sát thực địa (Khảo sát ngẫu nhiên tại PKĐK Sơn Dương) Số người bệnh thực tế khảo sát: Đạt: ...... người bệnh (Yêu cầu tối thiểu theo A3: ≥ 30 người) V. KIỂM ĐỊNH SẢN PHẨM ĐẦU RA CAM KẾT NGHIỆM THU & TÍNH NHÂN RỘNG (MỤC 9 A3) TT Sản phẩm đầu ra cam kết nghiệm thu Yêu cầu hoàn thiện theo Đề cương A3 Kết quả",
        "status": "pass"
      },
      {
        "id": "sp_5",
        "stt": 1,
        "title": "Bảng sơ đồ không gian 3D hoàn chỉnh lắp",
        "desc": "tại sảnh (Hiện vật trực quan trung tâm) Đã thiết kế, thi công và lắp đặt hoàn chỉnh bảng sơ đồ 3D khổ lớn có đèn chiếu sáng tại vị trí trang trọng sảnh tiếp đón.",
        "status": "pass"
      },
      {
        "id": "sp_6",
        "stt": 2,
        "title": "Hệ thống biển tên phòng và thông tin bác",
        "desc": "sĩ đồng bộ (Nhận diện cửa phòng chuyên nghiệp) Đã lắp đặt đồng bộ biển cửa phòng tại 100% các phòng khám, phòng xét nghiệm, chẩn đoán hình ảnh và cấp cứu.",
        "status": "pass"
      },
      {
        "id": "sp_7",
        "stt": 3,
        "title": "Hệ thống vạch sơn màu dẫn đường dưới",
        "desc": "sàn (Hạ tầng định hướng luồng bệnh) Đã thi công hoàn thiện hệ thống vạch màu chỉ dẫn giao thông nội bộ kết nối liên hoàn các khu vực dịch vụ.",
        "status": "pass"
      },
      {
        "id": "sp_8",
        "stt": 4,
        "title": "Báo cáo khảo sát trải nghiệm tìm đường",
        "desc": "của khách hàng (Dữ liệu thực chứng khoa học Kaizen) Đã lập báo cáo so sánh thời gian di chuyển, tỷ lệ tự tìm đường và mức độ hài lòng của người bệnh trước và sau cải tiến.",
        "status": "pass"
      }
    ],
    "ketLuan": {
      "phanLoai": "A",
      "loaiADesc": "Sơ đồ 3D lắp đặt hoàn thiện, biển cửa phòng đồng bộ 100%, vạch sơn rõ nét, tỷ lệ tự tìm đường ≥",
      "loaiBDesc": "Đã có sơ đồ 3D nhưng một số phòng chưa cập nhật ảnh bác sĩ, vạch sơn chưa hoàn",
      "loaiCDesc": "Chưa lắp đặt sơ đồ 3D thực tế; người bệnh vẫn đi lạc và phàn nàn nhiều; báo cáo Ban Tổ",
      "ghiChu": "Thẩm định viên ghi nhận: Kiểm tra vị trí và độ rõ nét của sơ đồ 3D; quan sát bệnh nhân đi theo vạch sơn; bấm giờ di chuyển; kiểm tra biển cửa phòng; phỏng vấn người bệnh.",
      "duDieuKienChungKet": true
    }
  }
};

export function getProjectGembaChecklist(projectOrCode) {
  const code = typeof projectOrCode === 'string' ? projectOrCode : (projectOrCode?.maDeTai || projectOrCode?.id);
  if (code && GEMBA_CHECKLISTS_BY_PROJECT[code]) {
    return JSON.parse(JSON.stringify(GEMBA_CHECKLISTS_BY_PROJECT[code]));
  }
  // Fallback nếu không khớp mã chính xác
  const firstKey = Object.keys(GEMBA_CHECKLISTS_BY_PROJECT)[0];
  return JSON.parse(JSON.stringify(GEMBA_CHECKLISTS_BY_PROJECT[firstKey]));
}
