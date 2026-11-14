/** @copyright Bản quyền thuộc MH 2026 */
import React, { useEffect } from 'react';
import { Heart, Sparkles, RotateCcw, Award, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/soundEffects';

interface ThankYouScreenProps {
  onRestart: () => void;
}

export const ThankYouScreen: React.FC<ThankYouScreenProps> = ({ onRestart }) => {
  // Hiệu ứng pháo hoa hoành tráng chào mừng kết thúc buổi thuyết trình thành công
  useEffect(() => {
    sounds.playVictory();

    // Bắn pháo hoa liên hoàn từ 2 bên và chính giữa
    const duration = 4 * 1000;
    const end = Date.now() + duration;

    const interval: number = window.setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }

      // Pháo hoa góc trái
      confetti({
        startVelocity: 35,
        spread: 70,
        ticks: 80,
        origin: { x: 0.1, y: 0.7 },
        colors: ['#d97706', '#dc2626', '#059669', '#f59e0b', '#fbbf24']
      });

      // Pháo hoa góc phải
      confetti({
        startVelocity: 35,
        spread: 70,
        ticks: 80,
        origin: { x: 0.9, y: 0.7 },
        colors: ['#d97706', '#dc2626', '#059669', '#f59e0b', '#fbbf24']
      });

      // Bụi sao lấp lánh ở giữa
      confetti({
        particleCount: 15,
        startVelocity: 25,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#f59e0b', '#10b981', '#ffffff']
      });
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 flex flex-col items-center justify-center animate-pop-in">
      {/* Khung Thiệp Cảm Ơn Trang Trọng, Đậm Nét Văn Hóa */}
      <div className="w-full bg-white/95 border-2 border-amber-600/30 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden text-center backdrop-blur-md">
        {/* Hào quang nền ấm áp */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-400/15 via-red-400/10 to-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Biểu Tượng Mái Ấm Gia Đình & Trái Tim Động Lực */}
        <div className="relative inline-flex items-center justify-center mb-5">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-amber-500 via-amber-600 to-red-600 text-white flex items-center justify-center shadow-xl shadow-amber-800/20 animate-pulse">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 fill-white animate-bounce-once" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center shadow-md">
            <Sparkles className="w-4 h-4 fill-amber-950" />
          </div>
        </div>

        {/* Huy hiệu kết thúc chuyên đề */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 font-modern shadow-xs">
          <Award className="w-4 h-4 text-amber-700" />
          <span>BÀI THUYẾT TRÌNH ĐÃ HOÀN THÀNH XUẤT SẮC</span>
        </div>

        {/* LỜI CẢM ƠN CHÍNH THỨC CỦA NHÓM 7 */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif-title text-stone-900 leading-tight mb-4 tracking-tight">
          XIN TRÂN TRỌNG CẢM ƠN <br />
          <span className="bg-gradient-to-r from-red-700 via-amber-700 to-amber-600 bg-clip-text text-transparent">
            CÁC BẠN VÀ CÁC CÔ
          </span>
        </h1>

        <p className="text-base sm:text-xl md:text-2xl font-serif text-stone-800 leading-relaxed max-w-2xl mx-auto mb-6">
          Đã chú ý lắng nghe và tích cực tham gia thảo luận cùng bài thuyết trình của <strong className="text-amber-800 font-bold underline decoration-amber-500 decoration-2 underline-offset-4">NHÓM 7</strong> chúng em!
        </p>

        {/* 4 Trụ Cột Mục Tiêu Gia Đình Việt Nam */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-xl mx-auto mb-8">
          <span className="px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-900 border border-blue-200 text-xs sm:text-sm font-bold font-modern flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> No Ấm
          </span>
          <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs sm:text-sm font-bold font-modern flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Tiến Bộ
          </span>
          <span className="px-3.5 py-1.5 rounded-xl bg-rose-50 text-rose-900 border border-rose-200 text-xs sm:text-sm font-bold font-modern flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" /> Hạnh Phúc
          </span>
          <span className="px-3.5 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs sm:text-sm font-bold font-modern flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Văn Minh
          </span>
        </div>

        {/* Lời chúc chân thành */}
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 max-w-lg mx-auto text-xs sm:text-sm text-stone-700 italic font-serif leading-relaxed mb-8">
          “Kính chúc các Cô luôn dồi dào sức khỏe, hạnh phúc và thành công trong sự nghiệp giáo dục! Chúc các bạn sinh viên luôn học tập tốt, ngập tràn nhiệt huyết và niềm vui!”
        </div>

        {/* Nút quay lại từ đầu nếu muốn trình chiếu lại */}
        <button
          onClick={onRestart}
          className="px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-sm sm:text-base flex items-center gap-2 mx-auto shadow-lg shadow-amber-800/25 transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Thuyết Trình / Bắt Đầu Lại Từ Đầu</span>
        </button>
      </div>
    </div>
  );
};
