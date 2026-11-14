/** @copyright Bản quyền thuộc MH 2026 */
import React from 'react';
import { Trophy, Medal, Plus, Minus, RotateCcw, X } from 'lucide-react';
import type { TeamScore } from '../types';
import { sounds } from '../utils/soundEffects';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  teams: TeamScore[];
  onUpdateScore: (teamId: string, delta: number) => void;
  onResetTeams: () => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  onClose,
  teams,
  onUpdateScore,
  onResetTeams,
}) => {
  if (!isOpen) return null;

  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);

  const getRankBadge = (index: number) => {
    if (index === 0) return <Medal className="w-6 h-6 text-amber-500" />;
    if (index === 1) return <Medal className="w-6 h-6 text-slate-400" />;
    if (index === 2) return <Medal className="w-6 h-6 text-amber-700" />;
    return <span className="font-bold text-stone-400 text-sm font-modern">#{index + 1}</span>;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-pop-in">
      <div className="bg-white border border-amber-900/20 rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-300">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold font-serif-title text-stone-900">
              Bảng Vàng Thi Đua Thuyết Trình
            </h3>
            <p className="text-xs text-stone-500">
              Cộng / trừ điểm tương tác giữa 4 Tổ trong lớp học
            </p>
          </div>
        </div>

        {/* Team List */}
        <div className="space-y-2.5 mb-5">
          {sortedTeams.map((team, idx) => (
            <div
              key={team.id}
              className="p-3 sm:p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between gap-3 hover:border-amber-400 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 flex items-center justify-center">
                  {getRankBadge(idx)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 font-modern">
                    {team.name}
                  </h4>
                  <span className="text-[11px] text-stone-500">
                    Đúng {team.correctAnswers} lượt
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="text-right">
                  <span className="text-base font-bold text-amber-800 font-modern">
                    {team.score}
                  </span>
                  <span className="text-[10px] text-stone-500 ml-1">pts</span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      sounds.playTick();
                      onUpdateScore(team.id, -50);
                    }}
                    className="p-1 rounded-md bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors cursor-pointer"
                    title="Trừ 50 điểm"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      sounds.playTick();
                      onUpdateScore(team.id, 100);
                    }}
                    className="p-1 rounded-md bg-amber-600 hover:bg-amber-700 text-white transition-colors cursor-pointer"
                    title="Cộng 100 điểm phát biểu đúng"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-3 border-t border-stone-200 text-xs">
          <button
            onClick={onResetTeams}
            className="flex items-center gap-1 text-stone-500 hover:text-red-600 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset điểm</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold transition-all shadow-xs cursor-pointer"
          >
            Xong & Đóng Lại
          </button>
        </div>
      </div>
    </div>
  );
};
