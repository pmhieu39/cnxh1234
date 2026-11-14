/** @copyright Bản quyền thuộc MH 2026 */
import React from 'react';
import { BookOpen, CheckCircle, Lightbulb, Sparkles, ArrowRight, X } from 'lucide-react';
import type { Question } from '../types';

interface ExplanationModalProps {
  question: Question;
  selectedOption: number | null;
  isOpen: boolean;
  onClose: () => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

export const ExplanationModal: React.FC<ExplanationModalProps> = ({
  question,
  isOpen,
  onClose,
  onNextQuestion,
  isLastQuestion,
}) => {
  if (!isOpen) return null;

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-stone-900 border border-amber-600/50 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 text-amber-400 mb-3">
          <BookOpen className="w-5 h-5" />
          <span className="text-xs uppercase font-bold tracking-wider font-modern">
            LUẬN GIẢI CHUYÊN SÂU DÀNH CHO THUYẾT TRÌNH • CÂU {question.id}
          </span>
        </div>

        {/* Correct Answer Callout */}
        <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 mb-5">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1 font-modern">
                Đáp Án Chính Xác: {optionLabels[question.correctIndex]}
              </div>
              <p className="text-sm sm:text-base text-stone-100 font-medium leading-snug">
                {question.options[question.correctIndex]}
              </p>
            </div>
          </div>
        </div>

        {/* Quote if present */}
        {question.quote && (
          <div className="p-4 rounded-2xl bg-stone-950/80 border-l-4 border-amber-500 mb-5 text-xs sm:text-sm italic font-serif text-amber-100/90 leading-relaxed">
            {question.quote}
          </div>
        )}

        {/* Full Explanation */}
        <div className="mb-5">
          <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 font-modern">
            Căn Cứ Lý Luận & Phân Tích Thực Tiễn:
          </h4>
          <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-sans">
            {question.explanation}
          </p>
        </div>

        {/* Key Takeaway Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/60 to-stone-900 border border-amber-600/40 mb-5">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 font-modern">
                Thông Điệp Cốt Lõi (Key Takeaway):
              </div>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                {question.keyTakeaway}
              </p>
            </div>
          </div>
        </div>

        {/* Fun Fact / Extended Context */}
        {question.funFact && (
          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-400 mb-6 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span><strong className="text-stone-300">Góc mở rộng:</strong> {question.funFact}</span>
          </div>
        )}

        {/* Modal Buttons */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs sm:text-sm font-semibold transition-colors"
          >
            Đóng Lại
          </button>
          <button
            onClick={() => {
              onClose();
              onNextQuestion();
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-stone-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md"
          >
            <span>{isLastQuestion ? "Xem Tổng Kết" : "Sang Câu Tiếp Theo"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
