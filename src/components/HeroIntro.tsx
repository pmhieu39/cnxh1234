import React from 'react';
import { Play, Users, BookOpen, Flame, Compass, CheckCircle2 } from 'lucide-react';
import type { GameMode } from '../types';
import { sounds } from '../utils/soundEffects';

interface HeroIntroProps {
  onStartGame: (mode: GameMode) => void;
  onOpenSummary: () => void;
}

export const HeroIntro: React.FC<HeroIntroProps> = ({ onStartGame, onOpenSummary }) => {
  const handleStart = (mode: GameMode) => {
    sounds.playTick();
    onStartGame(mode);
  };

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-600/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-md backdrop-blur-sm">
        <Compass className="w-4 h-4 text-amber-400" />
        <span>Chủ Nghĩa Xã Hội Khoa Học • Bài Giảng & Thuyết Trình Tương Tác</span>
      </div>

      {/* Main Title */}
      <div className="text-center max-w-3xl mb-8">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-title tracking-tight text-stone-100 leading-tight mb-4">
          XÂY DỰNG GIA ĐÌNH <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
            Ở VIỆT NAM THỜI KỲ QUÁ ĐỘ
          </span>
        </h1>
        <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          Bộ công cụ thuyết trình mini game trắc nghiệm 10 câu hỏi bao quát toàn diện cơ sở lý luận, 4 chức năng cốt lõi, xu hướng biến đổi và 4 trụ cột <span className="text-amber-400 font-semibold">“No ấm - Tiến bộ - Hạnh phúc - Văn minh”</span>.
        </p>
      </div>

      {/* President Ho Chi Minh Golden Quote Card */}
      <div className="w-full max-w-3xl mb-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-950/50 via-stone-900/80 to-stone-950 border border-amber-600/40 shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400 text-2xl font-serif">
            “
          </div>
          <div>
            <p className="text-amber-100 font-serif-title italic text-base sm:text-lg leading-relaxed mb-3">
              “Nhiều gia đình cộng lại mới thành xã hội, xã hội tốt thì gia đình càng tốt, gia đình tốt thì xã hội mới tốt. <strong className="text-amber-300 font-bold not-italic">Hạt nhân của xã hội là gia đình.</strong> Chính vì muốn xây dựng chủ nghĩa xã hội mà phải chú ý hạt nhân cho tốt.”
            </p>
            <p className="text-xs sm:text-sm text-amber-400/90 font-medium font-modern">
              — Chủ tịch Hồ Chí Minh (Hội nghị thảo luận Dự thảo Luật Hôn nhân và Gia đình, 1959)
            </p>
          </div>
        </div>
      </div>

      {/* 3 Game Modes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mb-10">
        {/* Mode 1: Presentation Mode */}
        <div 
          onClick={() => handleStart('presentation')}
          className="group relative p-6 rounded-2xl bg-stone-900/80 border border-amber-700/40 hover:border-amber-400 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 cursor-pointer flex flex-col justify-between"
        >
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Khuyên Dùng
          </div>
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-stone-100 mb-2 group-hover:text-amber-300 transition-colors font-modern">
              Thuyết Trình Lớp Học
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Dành cho người thuyết trình: Thời gian linh hoạt, tích hợp slide phân tích lý luận và trích dẫn văn kiện ngay sau mỗi câu hỏi.
            </p>
          </div>
          <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold text-sm shadow-md transition-all">
            Bắt Đầu Thuyết Trình
          </button>
        </div>

        {/* Mode 2: Fast Mini Game Challenge */}
        <div 
          onClick={() => handleStart('challenge')}
          className="group relative p-6 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-red-500/70 transition-all duration-300 hover:shadow-xl hover:shadow-red-950/30 cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-100 mb-2 group-hover:text-red-300 transition-colors font-modern">
              Đấu Trường Kịch Tính
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Đếm ngược 20 giây mỗi câu, nhân hệ số điểm streak đúng liên tiếp, tích hợp đầy đủ quyền trợ giúp 50:50 và khảo sát phòng học.
            </p>
          </div>
          <button className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-red-900/50 hover:text-red-200 text-stone-200 font-bold text-sm border border-stone-700 hover:border-red-600 transition-all">
            Chơi Tốc Độ
          </button>
        </div>

        {/* Mode 3: Team Battle */}
        <div 
          onClick={() => handleStart('team')}
          className="group relative p-6 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-emerald-500/70 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/30 cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-100 mb-2 group-hover:text-emerald-300 transition-colors font-modern">
              Thi Đấu Tổ / Nhóm
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              Chia 4 Tổ / Nhóm trong lớp (Tổ 1, Tổ 2, Tổ 3, Tổ 4) cùng giơ tay trả lời và cộng điểm thi đua vinh danh trên máy chiếu.
            </p>
          </div>
          <button className="w-full py-2.5 rounded-xl bg-stone-800 hover:bg-emerald-900/50 hover:text-emerald-200 text-stone-200 font-bold text-sm border border-stone-700 hover:border-emerald-600 transition-all">
            Thi Đấu 4 Nhóm
          </button>
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div className="w-full max-w-4xl p-5 rounded-2xl bg-stone-950/60 border border-stone-800/80 flex flex-wrap items-center justify-around gap-4 text-xs text-stone-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400" />
          <span>10 Câu hỏi chuẩn văn kiện & giáo trình</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Âm thanh Gameshow tương tác Web Audio</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-400" />
          <span>Trợ giúp 50:50 & Bình chọn khán phòng</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer text-amber-400 hover:underline" onClick={onOpenSummary}>
          <BookOpen className="w-4 h-4" />
          <span>Xem trọn bộ 4 sơ đồ lý luận</span>
        </div>
      </div>
    </div>
  );
};
