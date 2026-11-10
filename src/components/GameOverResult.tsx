import React, { useEffect } from 'react';
import { Trophy, RotateCcw, BookOpen, CheckCircle, Sparkles, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Question } from '../types';
import { sounds } from '../utils/soundEffects';

interface GameOverResultProps {
  score: number;
  correctCount: number;
  totalQuestions: number;
  wrongAttemptsCount: number;
  questions: Question[];
  onRestart: () => void;
  onOpenSummary: () => void;
  onSelectReviewQuestion: (q: Question) => void;
}

export const GameOverResult: React.FC<GameOverResultProps> = ({
  score,
  correctCount,
  totalQuestions,
  wrongAttemptsCount,
  questions,
  onRestart,
  onOpenSummary,
  onSelectReviewQuestion,
}) => {
  useEffect(() => {
    sounds.playVictory();
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#d97706', '#dc2626', '#059669', '#f59e0b']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#d97706', '#dc2626', '#059669', '#f59e0b']
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 overflow-y-auto max-h-[85vh] animate-pop-in">
      <div className="text-center p-6 sm:p-8 rounded-3xl bg-white border border-amber-800/20 shadow-xl mb-4 relative">
        <div className="inline-flex p-3 rounded-2xl bg-amber-100 text-amber-800 mb-3 shadow-inner">
          <Trophy className="w-10 h-10" />
        </div>

        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-2 font-modern">
          HOÀN THÀNH XUẤT SẮC 10 CÂU HỎI
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-serif-title text-stone-900 mb-2">
          Tổng Kết Buổi Thuyết Trình & Thảo Luận
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto mb-6">
          Cả lớp đã cùng nhau khám phá trọn vẹn cơ sở lý luận, 4 chức năng và 4 trụ cột xây dựng gia đình Việt Nam trong thời kỳ quá độ lên CNXH.
        </p>

        {/* 3 Metric Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto mb-6">
          <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200">
            <div className="text-xs text-stone-500 font-modern">Hoàn Thành</div>
            <div className="text-2xl font-bold text-amber-900 font-modern">
              {correctCount} / {totalQuestions}
            </div>
            <div className="text-[11px] text-stone-500">100% câu hỏi đã làm sáng tỏ</div>
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200">
            <div className="text-xs text-stone-500 font-modern">Tổng Điểm</div>
            <div className="text-2xl font-bold text-emerald-800 font-modern">
              {score}
            </div>
            <div className="text-[11px] text-stone-500">Điểm thi đua học tập</div>
          </div>

          <div className="p-3 rounded-2xl bg-rose-50/80 border border-rose-200">
            <div className="text-xs text-stone-500 font-modern">Lượt Thử Lại</div>
            <div className="text-2xl font-bold text-rose-800 font-modern">
              {wrongAttemptsCount}
            </div>
            <div className="text-[11px] text-stone-500">Đã vượt qua & sửa chữa</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onRestart}
            className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Thực Hiện Lượt Mới</span>
          </button>

          <button
            onClick={onOpenSummary}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-amber-50 text-amber-900 font-bold text-xs sm:text-sm border border-amber-300 flex items-center gap-2 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Xem Lại 4 Sơ Đồ Lý Luận</span>
          </button>
        </div>
      </div>

      {/* Review List */}
      <div className="p-4 rounded-3xl bg-white/90 border border-stone-200 shadow-sm">
        <h3 className="text-sm font-bold font-serif-title text-stone-900 mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Danh Sách 10 Câu Hỏi Đã Hoàn Thành (Bấm để xem lại luận giải)</span>
        </h3>

        <div className="space-y-2">
          {questions.map((q, idx) => (
            <div
              key={q.id}
              onClick={() => onSelectReviewQuestion(q)}
              className="p-2.5 sm:p-3 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 hover:border-amber-300 transition-all cursor-pointer flex items-center justify-between gap-3 text-xs"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-bold text-amber-900 font-modern shrink-0">Câu {idx + 1}:</span>
                <span className="text-stone-800 line-clamp-1">{q.question}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
