import React, { useState } from 'react';
import { X, BookOpen, Heart, ShieldCheck, Building2, Trees } from 'lucide-react';

interface SummaryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SummaryDrawer: React.FC<SummaryDrawerProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'diagrams' | 'pillars' | 'principles' | 'quote'>('diagrams');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 backdrop-blur-sm animate-pop-in">
      <div className="bg-white border border-amber-900/20 rounded-3xl w-full max-w-5xl h-[88vh] shadow-2xl flex flex-col overflow-hidden relative">
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-amber-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif-title text-stone-900">
                Sơ Đồ Lý Luận & Trọng Tâm Kiến Thức Bài Học
              </h3>
              <p className="text-xs text-stone-600">
                Tài liệu phục vụ thuyết trình: Xây dựng gia đình ở Việt Nam thời kỳ quá độ lên CNXH
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white hover:bg-stone-100 text-stone-500 hover:text-stone-900 border border-stone-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 bg-stone-50 px-4 sm:px-6 overflow-x-auto gap-2 py-2">
          <button
            onClick={() => setActiveTab('diagrams')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 font-modern cursor-pointer ${
              activeTab === 'diagrams'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            Sơ Đồ 4 Chức Năng Cơ Bản
          </button>
          <button
            onClick={() => setActiveTab('pillars')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 font-modern cursor-pointer ${
              activeTab === 'pillars'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            Mô Hình 4 Trụ Cột Mục Tiêu
          </button>
          <button
            onClick={() => setActiveTab('principles')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 font-modern cursor-pointer ${
              activeTab === 'principles'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            5 Phương Hướng Chiến Lược
          </button>
          <button
            onClick={() => setActiveTab('quote')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 font-modern cursor-pointer ${
              activeTab === 'quote'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            Quan Hệ Biện Chứng
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-culture-light">
          {/* TAB 1: 4 Chức Năng Cơ Bản */}
          {activeTab === 'diagrams' && (
            <div className="space-y-4 animate-pop-in">
              <div className="text-center max-w-2xl mx-auto mb-2">
                <span className="text-xs uppercase tracking-widest text-amber-800 font-bold font-modern">
                  HÌNH 1: SƠ ĐỒ CƠ CHẾ
                </span>
                <h4 className="text-xl font-bold font-serif-title text-stone-900 mt-0.5">
                  Bốn Chức Năng Xã Hội Cơ Bản Của Gia Đình
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {/* 1. Tái sản xuất con người */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-blue-200 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs font-modern">
                      1
                    </div>
                    <h5 className="font-bold text-blue-900 text-sm sm:text-base font-modern">TÁI SẢN XUẤT RA CON NGƯỜI</h5>
                  </div>
                  <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
                    <li>Duy trì nòi giống gia đình, dòng họ qua các thế hệ.</li>
                    <li>Cung cấp nguồn nhân lực kế cận cho sự nghiệp CNH - HĐH.</li>
                    <li>Quyết định trực tiếp quy mô, cơ cấu và chất lượng dân số quốc gia.</li>
                    <li><strong className="text-blue-900">Đặc thù:</strong> Chỉ gia đình mới thực hiện được tự nhiên và toàn diện.</li>
                  </ul>
                </div>

                {/* 2. Nuôi dưỡng và giáo dục */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-amber-200 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs font-modern">
                      2
                    </div>
                    <h5 className="font-bold text-amber-900 text-sm sm:text-base font-modern">NUÔI DƯỠNG & GIÁO DỤC</h5>
                  </div>
                  <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
                    <li>Hình thành nhân cách, đạo đức và tri thức ứng xử đầu đời.</li>
                    <li>Truyền thụ văn hóa truyền thống, lòng hiếu thảo và nếp nhà.</li>
                    <li>Nền tảng xã hội hóa ban đầu; phòng ngừa nguy cơ 'khoán trắng' cho nhà trường.</li>
                  </ul>
                </div>

                {/* 3. Kinh tế & tiêu dùng */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs font-modern">
                      3
                    </div>
                    <h5 className="font-bold text-emerald-900 text-sm sm:text-base font-modern">KINH TẾ & TỔ CHỨC TIÊU DÙNG</h5>
                  </div>
                  <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
                    <li>Tự chủ sản xuất kinh doanh, tạo nguồn thu nhập độc lập.</li>
                    <li>Quản lý tài chính, phân bổ tiêu dùng hợp lý và tích lũy thông minh.</li>
                    <li>Bộ phận cấu thành nền kinh tế thị trường định hướng XHCN.</li>
                  </ul>
                </div>

                {/* 4. Thỏa mãn tâm lý tình cảm */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-rose-200 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs font-modern">
                      4
                    </div>
                    <h5 className="font-bold text-rose-900 text-sm sm:text-base font-modern">TÂM LÝ & TÌNH CẢM</h5>
                  </div>
                  <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
                    <li>Chăm sóc tinh thần, an ủi, gắn kết yêu thương giữa các thế hệ.</li>
                    <li>Tổ ấm an toàn vững chắc, giải tỏa áp lực nhịp sống công nghiệp.</li>
                    <li>Bảo đảm sự cân bằng tâm lý và hạnh phúc bền vững của mỗi cá nhân.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Mô Hình 4 Trụ Cột */}
          {activeTab === 'pillars' && (
            <div className="space-y-4 animate-pop-in">
              <div className="text-center max-w-2xl mx-auto mb-2">
                <span className="text-xs uppercase tracking-widest text-amber-800 font-bold font-modern">
                  HÌNH 3: BỐN TRỤ CỘT MỤC TIÊU
                </span>
                <h4 className="text-xl font-bold font-serif-title text-stone-900 mt-0.5">
                  No Ấm • Tiến Bộ • Hạnh Phúc • Văn Minh
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h5 className="font-bold text-blue-900 text-sm mb-0.5 font-modern">NO ẤM</h5>
                  <div className="text-[11px] text-stone-500 font-medium mb-2">Cơ sở vật chất</div>
                  <ul className="text-xs text-stone-700 space-y-1.5">
                    <li>• Kinh tế hộ gia đình vững chắc.</li>
                    <li>• Đảm bảo việc làm & thu nhập thiết yếu.</li>
                    <li>• Nâng cao tiện nghi đời sống.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h5 className="font-bold text-emerald-900 text-sm mb-0.5 font-modern">TIẾN BỘ</h5>
                  <div className="text-[11px] text-stone-500 font-medium mb-2">Xã hội - Dân trí</div>
                  <ul className="text-xs text-stone-700 space-y-1.5">
                    <li>• Bình đẳng giới sâu sắc, thực chất.</li>
                    <li>• Học tập suốt đời, ứng dụng số.</li>
                    <li>• Không bạo lực gia đình.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-rose-200 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center mb-2.5">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h5 className="font-bold text-rose-900 text-sm mb-0.5 font-modern">HẠNH PHÚC</h5>
                  <div className="text-[11px] text-stone-500 font-medium mb-2">Giá trị cốt lõi</div>
                  <ul className="text-xs text-stone-700 space-y-1.5">
                    <li>• Hòa thuận, thủy chung son sắt.</li>
                    <li>• Tôn trọng, yêu thương, lắng nghe.</li>
                    <li>• Phụng dưỡng chu đáo người già.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-amber-200 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2.5">
                    <Trees className="w-4 h-4" />
                  </div>
                  <h5 className="font-bold text-amber-900 text-sm mb-0.5 font-modern">VĂN MINH</h5>
                  <div className="text-[11px] text-stone-500 font-medium mb-2">Lối sống & Đạo đức</div>
                  <ul className="text-xs text-stone-700 space-y-1.5">
                    <li>• Kế thừa truyền thống hiếu kính.</li>
                    <li>• Thượng tôn pháp luật công dân.</li>
                    <li>• Lối sống xanh, vì cộng đồng.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 5 Phương Hướng */}
          {activeTab === 'principles' && (
            <div className="space-y-3 animate-pop-in">
              <div className="text-center max-w-2xl mx-auto mb-2">
                <span className="text-xs uppercase tracking-widest text-amber-800 font-bold font-modern">
                  HÌNH 2: NĂM PHƯƠNG HƯỚNG CƠ BẢN
                </span>
                <h4 className="text-xl font-bold font-serif-title text-stone-900 mt-0.5">
                  Định Hướng Chiến Lược Của Đảng & Nhà Nước Đến Năm 2030
                </h4>
              </div>

              {[
                { n: 1, t: "Tăng cường lãnh đạo của Đảng và hoàn thiện chính sách, pháp luật về gia đình", d: "Thể chế hóa kịp thời: Luật Hôn nhân & GĐ, Luật PCBLGĐ sửa đổi 2022, Luật Bình đẳng giới, Luật Trẻ em." },
                { n: 2, t: "Đẩy mạnh phát triển kinh tế - xã hội, củng cố kinh tế hộ gia đình", d: "Hỗ trợ vốn ưu đãi, chuyển giao khoa học công nghệ, phát triển kinh tế số và an sinh xã hội vững chắc." },
                { n: 3, t: "Kế thừa giá trị truyền thống tốt đẹp và tiếp thu tinh hoa văn minh nhân loại", d: "Bảo tồn hiếu thảo, thủy chung; kiên quyết loại bỏ hủ tục gia trưởng trọng nam khinh nữ." },
                { n: 4, t: "Phát triển phong trào 'Toàn dân đoàn kết xây dựng đời sống văn hóa' & Gia đình văn hóa", d: "Bình xét thực chất tránh bệnh hình thức; nhân rộng cuộc vận động 'Xây dựng gia đình 5 không, 3 sạch'." },
                { n: 5, t: "Tăng cường phối hợp tam giác 'Gia đình - Nhà trường - Xã hội' trong giáo dục", d: "Gia đình là nền tảng đầu đời; nhà trường định hướng tri thức & nhân cách; xã hội cung cấp môi trường giám sát." }
              ].map((item) => (
                <div key={item.n} className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 font-modern">
                    {item.n}
                  </div>
                  <div>
                    <h6 className="font-bold text-stone-900 text-xs sm:text-sm font-modern">{item.t}</h6>
                    <p className="text-xs text-stone-600 mt-0.5">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Mối Quan Hệ Biện Chứng */}
          {activeTab === 'quote' && (
            <div className="space-y-4 animate-pop-in">
              <div className="text-center max-w-2xl mx-auto mb-2">
                <span className="text-xs uppercase tracking-widest text-amber-800 font-bold font-modern">
                  HÌNH 4: MỐI QUAN HỆ BIỆN CHỨNG
                </span>
                <h4 className="text-xl font-bold font-serif-title text-stone-900 mt-0.5">
                  Cá Nhân ⇆ Gia Đình ⇆ Xã Hội
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1 font-modern">
                    CÁ NHÂN
                  </div>
                  <h5 className="text-sm font-bold text-stone-900 mb-2">Thành viên gia đình</h5>
                  <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                    <li>Được sinh ra, nuôi dưỡng và chở che.</li>
                    <li>Hình thành nhân cách, lối sống đầu đời.</li>
                    <li>Hưởng quyền lợi và làm tròn nghĩa vụ.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 shadow-md">
                  <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1 font-modern">
                    GIA ĐÌNH (TRỌNG TÂM)
                  </div>
                  <h5 className="text-sm font-bold text-amber-950 mb-2">Tế bào của xã hội</h5>
                  <ul className="text-xs text-amber-900 space-y-1 list-disc list-inside">
                    <li>Tổ ấm nuôi dưỡng tình cảm thiêng liêng.</li>
                    <li>Giữ gìn gia phong đạo đức truyền thống.</li>
                    <li>Cầu nối giữa Cá nhân và toàn Xã hội.</li>
                    <li>Động lực phát triển bền vững đất nước.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1 font-modern">
                    XÃ HỘI
                  </div>
                  <h5 className="text-sm font-bold text-stone-900 mb-2">Cộng đồng & Đất nước</h5>
                  <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
                    <li>Tạo dựng môi trường pháp lý công bằng.</li>
                    <li>Hỗ trợ hệ thống an sinh xã hội vững chắc.</li>
                    <li>Định hướng giá trị chuẩn mực văn minh.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <span>Giáo trình Chủ nghĩa xã hội khoa học • Đại hội XIII của Đảng</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Đóng Lại & Tiếp Tục
          </button>
        </div>
      </div>
    </div>
  );
};
