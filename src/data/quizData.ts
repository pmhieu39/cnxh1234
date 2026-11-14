/** @copyright Bản quyền thuộc MH 2026 */
import type { Question } from '../types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    category: "Cơ Sở Lý Luận & Tư Tưởng Hồ Chí Minh",
    categoryBadge: "Tư tưởng Hồ Chí Minh",
    question: "Theo Chủ tịch Hồ Chí Minh, yếu tố nào được ví như 'hạt nhân của xã hội', và muốn xây dựng chủ nghĩa xã hội thành công thì trước hết phải chú ý điều gì?",
    options: [
      "A. Giai cấp công nhân là hạt nhân; phải chú ý công nghiệp hóa",
      "B. Hạt nhân của xã hội là gia đình; muốn xây dựng CNXH phải chú ý hạt nhân cho tốt",
      "C. Nhà trường là hạt nhân; phải chú ý cải cách hệ thống giáo dục quốc dân",
      "D. Tổ chức Công đoàn là hạt nhân; phải chú ý chăm lo phúc lợi xã hội"
    ],
    correctIndex: 1,
    points: 100,
    quote: "“Nhiều gia đình cộng lại mới thành xã hội, xã hội tốt thì gia đình càng tốt, gia đình tốt thì xã hội mới tốt. Hạt nhân của xã hội là gia đình. Chính vì muốn xây dựng chủ nghĩa xã hội mà phải chú ý hạt nhân cho tốt.”",
    explanation: "Tại Hội nghị thảo luận Dự thảo Luật Hôn nhân và Gia đình (1959), Bác Hồ đã chỉ rõ mối quan hệ hữu cơ biện chứng giữa gia đình và xã hội: gia đình là 'hạt nhân', là tế bào gốc rễ quyết định sự phát triển bền vững của toàn xã hội.",
    keyTakeaway: "Gia đình chính là 'HẠT NHÂN CỦA XÃ HỘI'. Xây dựng CNXH gắn liền hữu cơ với việc củng cố từng hạt nhân gia đình ấm no, hạnh phúc.",
    funFact: "Luật Hôn nhân và Gia đình đầu tiên của nước Việt Nam Dân chủ Cộng hòa được Quốc hội thông qua vào năm 1959 với sự chỉ đạo trực tiếp của Chủ tịch Hồ Chí Minh.",
    audiencePollDistribution: [5, 88, 4, 3]
  },
  {
    id: 2,
    category: "Vị Trí Chiến Lược Của Gia Đình",
    categoryBadge: "Vị trí trong xã hội",
    question: "Trong tiến trình lịch sử và thời kỳ quá độ lên CNXH, gia đình giữ ba vị trí chiến lược đặc biệt quan trọng nào sau đây?",
    options: [
      "A. Cơ quan quản lý hành chính, tổ chức kinh tế độc quyền, thiết chế quyền lực tối cao",
      "B. Tế bào của xã hội; Tổ ấm tình cảm & chở che; Cầu nối giữa cá nhân và xã hội",
      "C. Đơn vị tiêu dùng thụ động, nơi phụ thuộc hoàn toàn vào trợ cấp nhà nước",
      "D. Không gian sinh hoạt biệt lập, không có mối liên hệ ràng buộc với thể chế pháp luật"
    ],
    correctIndex: 1,
    points: 100,
    explanation: "Giáo trình CNXHKH xác định 3 vị trí chiến lược: (1) Tế bào của xã hội (nền tảng cấu thành cấu trúc xã hội); (2) Tổ ấm tình cảm và chở che (bồi đắp nhân cách, tái tạo sức lao động); (3) Cầu nối giữa cá nhân và xã hội (chuyển hóa đường lối, pháp luật thành lối sống).",
    keyTakeaway: "3 vị trí cốt lõi: Tế bào xã hội - Tổ ấm chở che - Cầu nối cá nhân & xã hội.",
    funFact: "Không có một quốc gia phát triển phồn vinh nào mà các tế bào gia đình lại bị xói mòn và suy thoái đạo đức.",
    audiencePollDistribution: [4, 91, 3, 2]
  },
  {
    id: 3,
    category: "Bốn Chức Năng Cơ Bản",
    categoryBadge: "Chức năng đặc thù",
    question: "Trong 4 chức năng xã hội cơ bản của gia đình, chức năng nào là ĐẶC THÙ DUY NHẤT mà không một thiết chế xã hội nào khác có thể thay thế hoàn toàn?",
    options: [
      "A. Chức năng kinh tế và tổ chức tiêu dùng",
      "B. Chức năng nuôi dưỡng và giáo dục thế hệ trẻ",
      "C. Chức năng tái sản xuất ra con người",
      "D. Chức năng thỏa mãn nhu cầu tâm lý, tình cảm"
    ],
    correctIndex: 2,
    points: 120,
    explanation: "Chức năng tái sản xuất ra con người đáp ứng quy luật sinh tồn tự nhiên, duy trì nòi giống dòng tộc và cung cấp lực lượng lao động kế cận cho toàn xã hội. Đây là chức năng tự nhiên và đặc thù mà nhà trường hay các cơ quan xã hội không thể làm thay gia đình.",
    keyTakeaway: "Tái sản xuất ra con người là chức năng đặc thù số 1, quyết định quy mô, cơ cấu và chất lượng nguồn nhân lực cho công cuộc CNH - HĐH.",
    funFact: "Chức năng này không chỉ đơn thuần là sinh con, mà còn bao gồm bảo vệ thể chất và nâng cao tầm vóc giống nòi Việt Nam.",
    audiencePollDistribution: [6, 12, 78, 4]
  },
  {
    id: 4,
    category: "Chức Năng Kinh Tế & Tiêu Dùng",
    categoryBadge: "Kinh tế thị trường XHCN",
    question: "Dưới tác động của kinh tế thị trường định hướng XHCN, chức năng kinh tế của gia đình Việt Nam đã trải qua bước chuyển đổi căn bản nào?",
    options: [
      "A. Từ đơn vị kinh tế tự cấp tự túc khép kín trở thành đơn vị kinh tế tự chủ, tham gia sâu vào thị trường",
      "B. Quay trở lại hình thức kinh tế hiện vật thời nguyên thủy",
      "C. Chuyển giao toàn bộ tài sản cho các hợp tác xã kiểu cũ bao cấp 100%",
      "D. Gia đình chỉ còn đóng vai trò đơn vị tiêu dùng, không còn khả năng tạo nguồn thu"
    ],
    correctIndex: 0,
    points: 120,
    explanation: "Kinh tế hộ gia đình đã trở thành một bộ phận cấu thành hữu cơ của nền kinh tế thị trường định hướng XHCN. Từ chỗ 'tự cung tự cấp', gia đình đã vươn lên thành đơn vị kinh tế năng động, tự chủ sản xuất kinh doanh, quản lý tài chính và kích cầu tiêu dùng nội địa văn minh.",
    keyTakeaway: "Kinh tế hộ gia đình: Tự chủ - Năng động - Gắn liền chuỗi giá trị thị trường và tài chính số.",
    funFact: "Hiện nay hàng triệu hộ kinh doanh cá thể và trang trại gia đình đang đóng góp đáng kể vào tổng GDP và giải quyết việc làm tại Việt Nam.",
    audiencePollDistribution: [89, 2, 4, 5]
  },
  {
    id: 5,
    category: "Biến Đổi Về Quy Mô & Kết Cấu",
    categoryBadge: "Xu hướng xã hội học",
    question: "Xu hướng biến đổi nổi bật nhất về kết cấu quy mô gia đình ở Việt Nam trong thời kỳ quá độ hiện nay là gì?",
    options: [
      "A. Xu hướng gia tăng tỷ lệ mô hình 'tứ đại đồng đường' tại các đô thị",
      "B. Xu hướng hạt nhân hóa nhanh chóng (cha mẹ và con cái) và giảm quy mô nhân khẩu bình quân (1 - 2 con)",
      "C. Triệt tiêu hoàn toàn sự gắn kết dòng tộc, họ hàng truyền thống",
      "D. Người trẻ chỉ chọn mô hình hộ độc thân, không còn nhu cầu xây dựng gia đình"
    ],
    correctIndex: 1,
    points: 150,
    explanation: "Gia đình truyền thống nhiều thế hệ ('tam đại, tứ đại đồng đường') đang dần nhường chỗ cho mô hình gia đình hạt nhân. Mô hình này mang lại tính năng động, linh hoạt, tôn trọng quyền riêng tư cá nhân và thích ứng cao với nhịp sống đô thị công nghiệp.",
    keyTakeaway: "Xu hướng 'HẠT NHÂN HÓA': 1 - 2 thế hệ sống chung, bình quân 1 - 2 con, tập trung đầu tư chất lượng giáo dục và chăm sóc y tế tối ưu.",
    funFact: "Số liệu Tổng điều tra Dân số cho thấy quy mô hộ gia đình Việt Nam đã giảm từ 4.6 người (1989) xuống còn khoảng 3.5 - 3.6 người hiện nay.",
    audiencePollDistribution: [3, 90, 5, 2]
  },
  {
    id: 6,
    category: "Thách Thức Trong Biến Đổi Gia Đình",
    categoryBadge: "Vấn đề thời đại",
    question: "Hiện tượng nào sau đây được văn bản tài liệu cảnh báo là một 'nguy cơ đáng báo động' trong việc thực hiện chức năng giáo dục của gia đình hiện đại?",
    options: [
      "A. Cha mẹ hướng dẫn con đọc sách quá nhiều",
      "B. Hiện tượng 'khoán trắng' việc nuôi dạy, giáo dục đạo đức con cái cho nhà trường và xã hội",
      "C. Gia đình từ chối cho con tham gia các câu lạc bộ kỹ năng sống",
      "D. Các bậc phụ huynh bắt buộc con học nghề truyền thống của dòng họ"
    ],
    correctIndex: 1,
    points: 150,
    explanation: "Do áp lực mưu sinh và cuồng quay công việc, không ít phụ huynh có xu hướng phó mặc, 'khoán trắng' việc giáo dục nhân cách thế hệ trẻ cho nhà trường, lớp học thêm và mạng xã hội. Điều này làm xói mòn sự gắn kết tình cảm ruột thịt và dẫn tới nhiều hệ lụy tâm lý học đường.",
    keyTakeaway: "Cảnh báo nguy cơ 'KHOÁN TRẮNG' giáo dục. Gia đình phải là trường học đạo đức đầu đời không thể thay thế.",
    funFact: "Nhiều nghiên cứu tâm lý chỉ ra: Một bữa cơm gia đình đầm ấm mỗi ngày có thể giảm hơn 50% nguy cơ rối loạn tâm lý ở tuổi vị thành niên.",
    audiencePollDistribution: [2, 92, 4, 2]
  },
  {
    id: 7,
    category: "Năm Phương Hướng Cơ Bản",
    categoryBadge: "Chiến lược 2030",
    question: "Để giáo dục con người toàn diện và bảo vệ thế hệ trẻ trước mặt trái không gian mạng, phương hướng thứ 5 nhấn mạnh sự phối hợp của mô hình nào?",
    options: [
      "A. Mô hình độc quyền quản lý giữa Doanh nghiệp và Bộ Thông tin & Truyền thông",
      "B. Tam giác giáo dục vững chắc: Gia đình - Nhà trường - Xã hội",
      "C. Chỉ giao toàn quyền cho lực lượng Công an và Viện kiểm sát",
      "D. Thả nổi để thanh thiếu niên tự do thể nghiệm không cần định hướng"
    ],
    correctIndex: 1,
    points: 180,
    explanation: "Mô hình 'Tam giác giáo dục' phối hợp nhịp nhàng: Gia đình giữ vai trò nền tảng đầu đời; Nhà trường định hướng chuẩn mực tri thức và nhân cách; Xã hội cung cấp môi trường thực tiễn và thiết chế giám sát bảo vệ.",
    keyTakeaway: "Tam giác kiềng ba chân: GIA ĐÌNH (Nền tảng) - NHÀ TRƯỜNG (Tri thức & Định hướng) - XÃ HỘI (Môi trường & Giám sát).",
    funFact: "Chiến lược phát triển gia đình Việt Nam đến năm 2030 nhấn mạnh xây dựng gia đình là hạt nhân của chiến lược phát triển con người.",
    audiencePollDistribution: [3, 93, 2, 2]
  },
  {
    id: 8,
    category: "Nội Dung Trọng Tâm Hiện Nay",
    categoryBadge: "4 Trụ cột cốt lõi",
    question: "Nội dung cơ bản xây dựng gia đình Việt Nam trong thời kỳ quá độ hiện nay được đúc kết thành MÔ HÌNH MỤC TIÊU 4 TRỤ CỘT nào sau đây?",
    options: [
      "A. Giàu có - Quyền uy - Khép kín - Tiết kiệm",
      "B. No ấm - Tiến bộ - Hạnh phúc - Văn minh",
      "C. Tự do - Bình đẳng - Độc lập - Toàn cầu",
      "D. Truyền thống - Gia trưởng - Thành tích - Phồn vinh"
    ],
    correctIndex: 1,
    points: 200,
    explanation: "Đại hội Đảng và Chiến lược quốc gia xác định 4 trụ cột: NO ẤM (Nền tảng vật chất, việc làm vững chắc) - TIẾN BỘ (Dân trí, bình đẳng giới, không bạo lực) - HẠNH PHÚC (Tình cảm cốt lõi, hòa thuận, thủy chung) - VĂN MINH (Thượng tôn pháp luật, sống vì cộng đồng, bảo vệ môi trường).",
    keyTakeaway: "Bộ tứ chuẩn mực gia đình Việt Nam: NO ẤM - TIẾN BỘ - HẠNH PHÚC - VĂN MINH.",
    funFact: "Ngày Gia đình Việt Nam được tổ chức thường niên vào ngày 28/6 nhằm tôn vinh các giá trị cao đẹp của mái ấm gia đình.",
    audiencePollDistribution: [1, 95, 3, 1]
  },
  {
    id: 9,
    category: "Trách Nhiệm Của Các Đoàn Thể",
    categoryBadge: "Hội Phụ nữ & Phong trào",
    question: "Cuộc vận động tiêu biểu do Hội Liên hiệp Phụ nữ Việt Nam phát động gắn liền trực tiếp với công tác xây dựng gia đình tiến bộ, văn minh là gì?",
    options: [
      "A. Phong trào 'Ba đảm đang' thời kỳ chống Mỹ",
      "B. Cuộc vận động 'Xây dựng gia đình 5 không, 3 sạch'",
      "C. Phong trào 'Đồng khởi mới xóa đói giảm nghèo'",
      "D. Cuộc vận động 'Thanh niên lập nghiệp làm giàu chính đáng'"
    ],
    correctIndex: 1,
    points: 200,
    explanation: "Cuộc vận động 'Xây dựng gia đình 5 không, 3 sạch': 5 KHÔNG (Không đói nghèo; Không vi phạm pháp luật & tệ nạn xã hội; Không có bạo lực gia đình; Không sinh con thứ ba trở lên; Không có trẻ suy dinh dưỡng và bỏ học) và 3 SẠCH (Sạch nhà, sạch bếp, sạch ngõ).",
    keyTakeaway: "Phong trào '5 KHÔNG, 3 SẠCH' là mô hình hành động thực tiễn sâu rộng nhất gắn kết gia đình với xây dựng Nông thôn mới và Đô thị văn minh.",
    funFact: "Hiện nay phong trào đã được nâng cấp thành 'Gia đình 5 có, 3 sạch' tại nhiều địa phương đạt chuẩn nông thôn mới nâng cao!",
    audiencePollDistribution: [8, 86, 4, 2]
  },
  {
    id: 10,
    category: "Trách Nhiệm Của Thanh Niên & Sinh Viên",
    categoryBadge: "Thế hệ trẻ thời đại 4.0",
    question: "Trước khi bước vào đời sống hôn nhân gia đình, trách nhiệm và tâm thế quan trọng hàng đầu của thế hệ trẻ và sinh viên Việt Nam hiện nay là gì?",
    options: [
      "A. Đợi gia đình hai bên sắp đặt sẵn của cải và chỉ kết hôn khi có nhà lầu, xe hơi",
      "B. Trang bị nhận thức đúng đắn về hôn nhân, tự lập tài chính, rèn luyện lối sống có trách nhiệm, thấu cảm và hiếu nghĩa",
      "C. Cổ xúy chủ nghĩa cá nhân tuyệt đối, sống thử tự do và né tránh nghĩa vụ nuôi dưỡng",
      "D. Tập trung toàn bộ thời gian kiếm tiền, bỏ qua việc học tập kỹ năng làm cha mẹ"
    ],
    correctIndex: 1,
    points: 250,
    explanation: "Tài liệu nhấn mạnh trách nhiệm của thế hệ trẻ: Phải chủ động trang bị kiến thức tiền hôn nhân, kỹ năng xây dựng hạnh phúc, tự lập tài chính; phê phán lối sống thực dụng, sống vội, buông thả; đồng thời gìn giữ lòng hiếu thảo với ông bà cha mẹ và dung hòa dị biệt thế hệ bằng tình yêu thương.",
    keyTakeaway: "Thế hệ trẻ là chủ thể kiến tạo tương lai: Yêu có trách nhiệm - Tự lập tài chính - Hiếu thuận gia phong - Lan tỏa văn minh.",
    funFact: "Tỷ lệ ly hôn ở giới trẻ trong 5 năm đầu sau kết hôn thường chiếm tỷ trọng cao chủ yếu do thiếu kỹ năng giải quyết mâu thuẫn và tâm lý chưa sẵn sàng.",
    audiencePollDistribution: [2, 94, 2, 2]
  }
];

export const SUMMARY_TOPICS = [
  {
    title: "1. Vị Trí & 4 Chức Năng Cơ Bản",
    badge: "Nền Tảng Lý Luận",
    color: "amber",
    items: [
      "Vị trí: Tế bào của xã hội - Tổ ấm chở che - Cầu nối cá nhân và xã hội.",
      "Chức năng 1: Tái sản xuất ra con người (Đặc thù duy nhất, quyết định nguồn nhân lực).",
      "Chức năng 2: Nuôi dưỡng và giáo dục nhân cách thế hệ trẻ.",
      "Chức năng 3: Kinh tế và tổ chức tiêu dùng (Tự chủ, tham gia thị trường XHCN).",
      "Chức năng 4: Thỏa mãn nhu cầu tâm lý, tình cảm và cân bằng đời sống."
    ]
  },
  {
    title: "2. Thực Trạng Biến Đổi & Thách Thức",
    badge: "Thực Tiễn Xã Hội",
    color: "emerald",
    items: [
      "Kết cấu: Hạt nhân hóa mạnh mẽ (cha mẹ & con cái), quy mô giảm còn 1 - 2 con.",
      "Hình thức mới: Gia đình đơn thân, DINK (không sinh con), gia đình di cư.",
      "Tích cực: Vợ chồng bình đẳng, dân chủ; phụ nữ nâng cao vị thế và tiếng nói.",
      "Thách thức: Tỷ lệ ly hôn tăng (nhất là giới trẻ); nguy cơ 'khoán trắng' giáo dục cho nhà trường; khoảng cách thế hệ do công nghệ."
    ]
  },
  {
    title: "3. Năm Phương Hướng Trọng Tâm",
    badge: "Chiến Lược Đảng & Nhà Nước",
    color: "rose",
    items: [
      "1. Tăng cường lãnh đạo của Đảng và hoàn thiện hệ thống luật pháp (Luật HNGĐ, Luật PCBLGĐ 2022).",
      "2. Phát triển kinh tế - xã hội, củng cố kinh tế hộ gia đình và an sinh xã hội.",
      "3. Kế thừa truyền thống hiếu nghĩa, loại bỏ hủ tục, tiếp thu tinh hoa văn minh nhân loại.",
      "4. Đổi mới phong trào 'Toàn dân đoàn kết xây dựng đời sống văn hóa' & Gia đình văn hóa thực chất.",
      "5. Xây dựng tam giác giáo dục vững chắc: Gia đình - Nhà trường - Xã hội."
    ]
  },
  {
    title: "4. Mô Hình 4 Trụ Cột: No Ấm - Tiến Bộ - Hạnh Phúc - Văn Minh",
    badge: "Mục Tiêu Hành Động",
    color: "sky",
    items: [
      "NO ẤM: Việc làm ổn định, thu nhập đủ đầy, chi tiêu tiết kiệm khoa học.",
      "TIẾN BỘ: Bình đẳng giới thực chất, học tập suốt đời, sạch bóng bạo lực gia đình.",
      "HẠNH PHÚC: Thủy chung, gắn kết cảm xúc, kính trên nhường dưới, phụng dưỡng người cao tuổi.",
      "VĂN MINH: Thượng tôn pháp luật, văn hóa cộng đồng, bảo vệ môi trường xanh - sạch - đẹp."
    ]
  }
];
