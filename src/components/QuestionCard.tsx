/** @copyright Bản quyền thuộc MH 2026 */
import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, ArrowRight, ArrowLeft, Lightbulb, Smile, Quote, Eye, BookOpen, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Question } from '../types';
import { sounds } from '../utils/soundEffects';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: number | null;
  wrongAttempts: number[];
  isAnsweredCorrectly: boolean;
  feedbackMessage?: string;
  eliminatedOptions: number[];
  usedLifelines: {
    fiftyFifty: boolean;
    audiencePoll: boolean;
  };
  onSelectOption: (index: number) => void;
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  onUseFiftyFifty: () => void;
  onRetryQuestion: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  wrongAttempts,
  isAnsweredCorrectly,
  feedbackMessage,
  eliminatedOptions,
  onSelectOption,
  onNextQuestion,
  onPrevQuestion,
}) => {
  // State chuyển đổi giữa Xem Lời Giải Thích và Xem Lại 4 Đáp Án khi đã đúng
  const [showOptionsView, setShowOptionsView] = useState(false);

  // Tự động quay về chế độ giải thích khi chuyển câu hỏi mới
  useEffect(() => {
    setShowOptionsView(false);
  }, [currentIndex]);

  // Bắn pháo hoa 2 bên chúc mừng mỗi khi trả lời đúng
  useEffect(() => {
    if (isAnsweredCorrectly) {
      sounds.playCorrect();

      // Pháo hoa góc trái bắn sang
      confetti({
        particleCount: 45,
        angle: 60,
        spread: 55,
        origin: { x: 0.02, y: 0.75 },
        colors: ['#d97706', '#dc2626', '#059669', '#f59e0b', '#fbbf24']
      });

      // Pháo hoa góc phải bắn sang
      confetti({
        particleCount: 45,
        angle: 120,
        spread: 55,
        origin: { x: 0.98, y: 0.75 },
        colors: ['#d97706', '#dc2626', '#059669', '#f59e0b', '#fbbf24']
      });
    }
  }, [isAnsweredCorrectly]);

  // Phím tắt bàn phím khi thuyết trình
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnsweredCorrectly && (e.key === 'ArrowRight' || e.key === 'Enter')) {
        e.preventDefault();
        onNextQuestion();
        return;
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        onPrevQuestion();
        return;
      }

      if (!isAnsweredCorrectly) {
        const key = e.key.toLowerCase();
        let chosen: number | null = null;
        if (key === 'a' || key === '1') chosen = 0;
        if (key === 'b' || key === '2') chosen = 1;
        if (key === 'c' || key === '3') chosen = 2;
        if (key === 'd' || key === '4') chosen = 3;

        if (chosen !== null && !eliminatedOptions.includes(chosen) && !wrongAttempts.includes(chosen)) {
          onSelectOption(chosen);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnsweredCorrectly, currentIndex, eliminatedOptions, wrongAttempts, onSelectOption, onNextQuestion, onPrevQuestion]);

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-6 flex flex-col justify-center h-full">
      {/* 1. Hộp Câu Hỏi To Rõ Ràng */}
      <div className="bg-white/95 rounded-2xl sm:rounded-3xl border border-amber-800/15 shadow-md p-4 sm:p-5 md:p-6 mb-3 relative backdrop-blur-sm">
        <div className="text-xs sm:text-sm text-amber-800 font-bold mb-1.5 font-modern tracking-wide">
          CÂU HỎI {currentIndex + 1} / {totalQuestions}
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-serif-title text-stone-900 leading-snug tracking-tight">
          {question.question}
        </h2>
      </div>

      {/* 2. KHI CHƯA TRẢ LỜI ĐÚNG: HIỂN THỊ 4 Ô ĐÁP ÁN TO RÕ RÀNG */}
      {!isAnsweredCorrectly ? (
        <>
          {/* Trích dẫn gợi ý nếu có */}
          {question.quote && (
            <div className="mb-3 p-3 rounded-xl bg-amber-50/80 border-l-4 border-amber-600 text-stone-700 text-xs sm:text-sm italic font-serif leading-relaxed">
              {question.quote}
            </div>
          )}

          {/* 4 Ô Đáp Án To Rõ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-3">
            {question.options.map((optText, idx) => {
              const isEliminated = eliminatedOptions.includes(idx);
              const isWrongAttempt = wrongAttempts.includes(idx);
              const isSelected = selectedOption === idx;

              let btnClass = "bg-white hover:bg-amber-50/70 border-stone-200 text-stone-850 hover:border-amber-400 hover:shadow-md";
              let badgeClass = "bg-stone-100 text-stone-700 border-stone-300";

              if (isEliminated) {
                btnClass = "opacity-25 bg-stone-50 border-stone-200 text-stone-400 cursor-not-allowed line-through";
                badgeClass = "bg-stone-100 text-stone-400 border-stone-200";
              } else if (isWrongAttempt) {
                btnClass = "bg-red-50/80 border-red-300 text-red-900 opacity-60 line-through cursor-not-allowed animate-shake";
                badgeClass = "bg-red-200 text-red-800 border-red-300";
              } else if (isSelected) {
                btnClass = "bg-amber-100 border-amber-500 text-amber-950 ring-2 ring-amber-400/40 shadow-md";
                badgeClass = "bg-amber-600 text-white border-amber-600";
              }

              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (!isEliminated && !isWrongAttempt) {
                      onSelectOption(idx);
                    }
                  }}
                  disabled={isEliminated || isWrongAttempt}
                  className={`text-left p-3.5 sm:p-4 md:p-5 rounded-2xl border transition-all duration-150 flex items-start gap-3 sm:gap-3.5 shadow-xs cursor-pointer ${btnClass}`}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center font-extrabold text-sm sm:text-base shrink-0 font-modern transition-transform ${badgeClass}`}
                  >
                    {optionLabels[idx]}
                  </div>
                  <div className="flex-1 text-sm sm:text-base md:text-lg font-medium leading-snug pt-0.5">
                    {optText.replace(/^[A-D]\.\s*/, '')}
                  </div>
                  {isWrongAttempt && (
                    <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Khung Thông Báo Động Viên Khi Chọn Sai */}
          {feedbackMessage && (
            <div className="p-3 sm:p-3.5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 shadow-sm animate-pop-in mb-3 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider font-modern text-amber-800">
                  Động Viên Tích Cực • Hãy Thử Lại Nhé!
                </div>
                <p className="text-xs sm:text-sm md:text-base font-semibold text-amber-950 mt-0.5">
                  {feedbackMessage}
                </p>
              </div>
            </div>
          )}
        </>
      ) : (
        /* 3. KHI CHỌN ĐÚNG: CÓ NÚT XEM LẠI 4 ĐÁP ÁN & XEM GIẢI THÍCH */
        <div className="space-y-3 animate-pop-in mb-3">
          {/* Thanh xác nhận đáp án đúng + NÚT XEM LẠI 4 ĐÁP ÁN */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50 border border-emerald-400 flex flex-wrap items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-600 text-white font-extrabold text-base flex items-center justify-center shrink-0 font-modern shadow-xs">
                {optionLabels[question.correctIndex]}
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 font-modern flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>ĐÁP ÁN CHÍNH XÁC:</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-emerald-950 leading-snug">
                  {question.options[question.correctIndex].replace(/^[A-D]\.\s*/, '')}
                </p>
              </div>
            </div>

            {/* NÚT CHUYỂN ĐỔI: XEM LẠI 4 ĐÁP ÁN / XEM GIẢI THÍCH */}
            <button
              onClick={() => setShowOptionsView(!showOptionsView)}
              className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 transition-all flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
              title={showOptionsView ? "Xem lại luận giải lý luận" : "Xem lại toàn bộ 4 phương án A, B, C, D"}
            >
              {showOptionsView ? (
                <>
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                  <span>Xem Lời Giải Thích</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 text-emerald-700" />
                  <span>Xem Lại 4 Đáp Án</span>
                </>
              )}
            </button>
          </div>

          {/* HIỂN THỊ TÙY CHỌN: HOẶC 4 ĐÁP ÁN ĐỐI CHIẾU, HOẶC KHUNG GIẢI THÍCH LÝ LUẬN */}
          {showOptionsView ? (
            /* Chế độ xem lại 4 đáp án (đáp án đúng viền xanh, các đáp án khác mờ đi) */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 animate-pop-in">
              {question.options.map((optText, idx) => {
                const isCorrect = idx === question.correctIndex;
                return (
                  <div
                    key={idx}
                    className={`text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start gap-3 shadow-xs ${
                      isCorrect
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/30'
                        : 'bg-stone-50 border-stone-200 text-stone-500 opacity-60'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center font-extrabold text-sm shrink-0 font-modern ${
                        isCorrect
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-stone-200 text-stone-500 border-stone-300'
                      }`}
                    >
                      {optionLabels[idx]}
                    </div>
                    <div className="flex-1 text-sm sm:text-base font-medium leading-snug pt-1">
                      {optText.replace(/^[A-D]\.\s*/, '')}
                    </div>
                    {isCorrect && (
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* Chế độ xem Khung Giải Thích Chi Tiết (Hiển thị đầy đủ không cần vuốt) */
            <div className="p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white border border-amber-800/15 shadow-md">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2 font-modern">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>CĂN CỨ LÝ LUẬN & TẠI SAO CHỌN ĐÁP ÁN NÀY?</span>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-stone-850 leading-relaxed font-sans">
                {question.explanation}
              </p>

              {/* Trích dẫn văn kiện nếu có */}
              {question.quote && (
                <div className="mt-3 p-3 sm:p-3.5 rounded-xl bg-amber-50/80 border-l-4 border-amber-600 text-stone-800 text-xs sm:text-sm italic font-serif leading-relaxed flex items-start gap-2.5">
                  <Quote className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>{question.quote}</div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 4. Action Navigation: Nút Chuyển Câu */}
      <div className="flex items-center justify-between gap-3 pt-1">
        {/* Câu trước */}
        <button
          onClick={onPrevQuestion}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
            currentIndex === 0
              ? 'opacity-30 border-stone-200 text-stone-400 cursor-not-allowed'
              : 'border-stone-300 bg-white text-stone-700 hover:border-amber-600 hover:text-amber-900 cursor-pointer shadow-xs'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Câu Trước</span>
        </button>

        {/* Nút Sang Câu Tiếp Theo Khi Đúng (Ở Câu 10 có nút xem lại từ đầu, không chuyển trang kết thúc) */}
        {isAnsweredCorrectly ? (
          currentIndex + 1 < totalQuestions ? (
            <button
              onClick={onNextQuestion}
              className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm sm:text-base md:text-lg flex items-center gap-2.5 shadow-md shadow-emerald-700/25 transition-all cursor-pointer animate-bounce-once"
            >
              <span>Sang Câu Tiếp Theo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={onNextQuestion}
              className="px-5 py-2.5 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              title="Quay lại xem lại từ Câu 1"
            >
              <RotateCcw className="w-4 h-4 text-amber-700" />
              <span>Xem Lại Từ Câu 1</span>
            </button>
          )
        ) : (
          <div className="text-xs sm:text-sm text-stone-400 font-medium">
            (Bấm vào đáp án bạn cho là đúng để kiểm tra)
          </div>
        )}
      </div>
    </div>
  );
};
