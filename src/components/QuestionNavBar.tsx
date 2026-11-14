/** @copyright Bản quyền thuộc MH 2026 */
import React from 'react';
import { Check } from 'lucide-react';
import type { UserAnswerRecord } from '../types';

interface QuestionNavBarProps {
  totalQuestions: number;
  currentIndex: number;
  answers: Record<number, UserAnswerRecord>;
  onSelectQuestion: (index: number) => void;
}

export const QuestionNavBar: React.FC<QuestionNavBarProps> = ({
  totalQuestions,
  currentIndex,
  answers,
  onSelectQuestion,
}) => {
  return (
    <nav className="w-full max-w-2xl mx-auto px-4 py-2 flex items-center justify-center border-b border-amber-900/10 bg-white/70 backdrop-blur-md rounded-2xl shadow-xs">
      <div className="flex items-center justify-center gap-2 sm:gap-2.5 overflow-x-auto py-0.5">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-900 font-modern pr-1 hidden sm:inline">
          10 Câu Hỏi:
        </span>
        {Array.from({ length: totalQuestions }).map((_, idx) => {
          const isCurrent = idx === currentIndex;
          const ans = answers[idx + 1];
          const isAnswered = ans && ans.isAnsweredCorrectly;
          const hasWrongAttempts = ans && ans.wrongAttempts.length > 0 && !ans.isAnsweredCorrectly;

          let badgeStyle = "bg-stone-100 text-stone-700 border-stone-200 hover:border-amber-500 hover:bg-amber-50";

          if (isCurrent) {
            badgeStyle = "bg-amber-600 text-white font-extrabold border-amber-700 ring-2 ring-amber-500/40 shadow-sm scale-105";
          } else if (isAnswered) {
            badgeStyle = "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold";
          } else if (hasWrongAttempts) {
            badgeStyle = "bg-orange-100 text-orange-800 border-orange-300";
          }

          return (
            <button
              key={idx}
              onClick={() => onSelectQuestion(idx)}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border text-xs sm:text-sm font-bold font-modern flex items-center justify-center transition-all duration-150 cursor-pointer shrink-0 ${badgeStyle}`}
              title={`Chuyển đến Câu ${idx + 1}`}
            >
              {isAnswered && !isCurrent ? (
                <Check className="w-4 h-4 text-emerald-700 stroke-[3]" />
              ) : hasWrongAttempts && !isCurrent ? (
                <span className="text-xs">{idx + 1}</span>
              ) : (
                idx + 1
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
