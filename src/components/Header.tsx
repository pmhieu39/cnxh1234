/** @copyright Bản quyền thuộc MH 2026 */
import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Maximize2, Minimize2, BookOpen, Trophy, Sparkles, RotateCcw } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface HeaderProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  score: number;
  streak: number;
  onOpenSummary: () => void;
  onOpenLeaderboard: () => void;
  onResetGame: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentQuestionIndex,
  totalQuestions,
  score,
  streak,
  onOpenSummary,
  onOpenLeaderboard,
  onResetGame,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleSound = () => {
    sounds.enabled = !sounds.enabled;
    setIsMuted(!sounds.enabled);
    if (sounds.enabled) {
      sounds.playTick();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  return (
    <header className="relative z-20 w-full border-b border-amber-900/40 bg-stone-950/85 backdrop-blur-md px-4 py-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div 
          onClick={onResetGame}
          className="flex items-center gap-3 cursor-pointer group transition-transform active:scale-95"
          title="Làm mới từ đầu"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-red-700 flex items-center justify-center shadow-lg shadow-amber-900/30 group-hover:scale-105 transition-all">
            <span className="text-amber-50 font-bold text-sm font-modern">10Q</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-modern flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> CNXHKH • Trắc Nghiệm Thuyết Trình
              </span>
            </div>
            <h1 className="text-sm sm:text-base font-bold text-stone-100 font-serif-title leading-tight line-clamp-1 group-hover:text-amber-300 transition-colors">
              Xây Dựng Gia Đình Ở Việt Nam Thời Kỳ Quá Độ
            </h1>
          </div>
        </div>

        {/* Live Score Status */}
        <div className="flex items-center gap-4 sm:gap-6 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-800/40 shadow-inner">
          <div className="text-xs">
            <span className="text-stone-400">Tiến trình: </span>
            <span className="text-amber-400 font-bold font-modern">
              {currentQuestionIndex + 1}/{totalQuestions}
            </span>
          </div>
          <div className="h-4 w-px bg-stone-700"></div>
          <div className="text-xs">
            <span className="text-stone-400">Điểm: </span>
            <span className="text-emerald-400 font-bold font-modern">{score} pts</span>
          </div>
          {streak > 1 && (
            <>
              <div className="h-4 w-px bg-stone-700 hidden sm:block"></div>
              <div className="text-xs hidden sm:flex items-center gap-1 text-amber-400 font-bold font-modern animate-pulse">
                <span>🔥 x{streak}</span>
              </div>
            </>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Sơ đồ lý luận Button */}
          <button
            onClick={onOpenSummary}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-300 bg-amber-950/60 border border-amber-700/50 hover:bg-amber-900/60 hover:border-amber-500 transition-all shadow-sm"
            title="Xem sơ đồ 4 chức năng, 5 phương hướng, 4 trụ cột"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Sơ Đồ Lý Luận</span>
          </button>

          {/* Bảng điểm / Vinh danh Button */}
          <button
            onClick={onOpenLeaderboard}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg text-xs font-semibold text-stone-300 bg-stone-900 border border-stone-700 hover:text-amber-300 hover:border-amber-600 transition-all flex items-center gap-1.5"
            title="Bảng vinh danh điểm thi đua"
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Thi Đua</span>
          </button>

          {/* Làm mới từ đầu */}
          <button
            onClick={onResetGame}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-100 bg-stone-900/90 border border-stone-800 hover:border-stone-700 transition-colors"
            title="Làm lại từ Câu 1"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Âm thanh */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-100 bg-stone-900/90 border border-stone-800 hover:border-stone-700 transition-colors"
            title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-stone-500" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
          </button>

          {/* Toàn màn hình trình chiếu */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-100 bg-stone-900/90 border border-stone-800 hover:border-stone-700 transition-colors"
            title={isFullscreen ? "Thoát toàn màn hình" : "Chiếu toàn màn hình (Máy chiếu)"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-amber-400" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
