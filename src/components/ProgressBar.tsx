import React from 'react';

interface ProgressBarProps {
  currentIndex: number;
  totalQuestions: number;
  score: number;
  quizTitle: string;
  topicOrSource: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentIndex,
  totalQuestions,
  score,
  quizTitle,
  topicOrSource,
}) => {
  const percentage = Math.round(((currentIndex) / totalQuestions) * 100);

  return (
    <div className="bg-[#EAE4D6] brutal-border p-4 sm:p-5 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <div className="truncate">
          <span className="font-mono-code text-[11px] font-bold uppercase tracking-widest text-[#E05A2B] block">
            ACTIVE ASSESSMENT
          </span>
          <h3 className="font-display font-black text-lg sm:text-xl text-[#292929] uppercase truncate">
            {quizTitle}
          </h3>
        </div>

        <div className="flex items-center gap-4 font-mono-code text-xs font-bold text-[#292929] shrink-0">
          <div className="bg-[#F5F0E6] px-3 py-1.5 brutal-border">
            <span>QUESTION: </span>
            <span className="text-[#E05A2B]">{currentIndex + 1}</span>
            <span> / {totalQuestions}</span>
          </div>

          <div className="bg-[#F5F0E6] px-3 py-1.5 brutal-border">
            <span>SCORE: </span>
            <span className="text-[#292929]">{score}</span>
          </div>
        </div>
      </div>

      {/* Progress Track */}
      <div className="w-full h-4 bg-[#F5F0E6] brutal-border overflow-hidden relative">
        <div
          className="h-full bg-[#E05A2B] transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
