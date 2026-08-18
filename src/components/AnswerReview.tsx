import React from 'react';
import { Check, X, ArrowLeft } from 'lucide-react';
import { Quiz, UserAnswer } from '../types';

interface AnswerReviewProps {
  quiz: Quiz;
  userAnswers: Record<string, UserAnswer>;
  onBackToResults: () => void;
  onTryAgain: () => void;
  onCreateAnother: () => void;
}

export const AnswerReview: React.FC<AnswerReviewProps> = ({
  quiz,
  userAnswers,
  onBackToResults,
  onTryAgain,
  onCreateAnother,
}) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 w-full box-border">
      {/* Top Header */}
      <div className="bg-[#EAE4D6] brutal-border p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <button
            onClick={onBackToResults}
            className="inline-flex items-center gap-1.5 font-mono-code text-xs font-bold text-[#E05A2B] hover:underline mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO SUMMARY</span>
          </button>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#292929] uppercase tracking-tight leading-none break-words">
            DETAILED ANSWER REVIEW
          </h2>
          <p className="font-mono-code text-xs text-[#5E5950] mt-1 font-bold">
            {quiz.title} • {quiz.questions.length} Questions Evaluated
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onTryAgain}
            className="px-4 py-2.5 bg-[#F5F0E6] brutal-border font-mono-code text-xs font-bold uppercase hover:bg-[#FFFDF9] transition-colors cursor-pointer"
          >
            RETAKE
          </button>
          <button
            onClick={onCreateAnother}
            className="px-4 py-2.5 bg-[#E05A2B] text-white brutal-border font-mono-code text-xs font-bold uppercase hover:bg-[#CC4F24] transition-colors cursor-pointer"
          >
            NEW QUIZ
          </button>
        </div>
      </div>

      {/* Questions Breakdown List */}
      <div className="space-y-6">
        {quiz.questions.map((question, index) => {
          const attempt = userAnswers[question.id];
          const isCorrect = attempt?.isCorrect ?? false;
          const userSelection = attempt?.selectedAnswer || 'Not Answered';
          const formattedIndex = String(index + 1).padStart(2, '0');

          return (
            <div
              key={question.id}
              className={`bg-[#F5F0E6] brutal-border p-5 sm:p-8 transition-all w-full box-border ${
                isCorrect
                  ? 'border-[#292929]'
                  : 'border-[#E05A2B] ring-2 ring-[#E05A2B]/40 bg-[#FFF8F5]'
              }`}
            >
              {/* Question Header & Status */}
              <div className="flex items-center justify-between border-b border-[#292929]/20 pb-3 mb-4">
                <span className="font-display font-black text-lg sm:text-xl text-[#292929]">
                  QUESTION {formattedIndex}
                </span>

                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1E3A2B] text-[#F5F0E6] brutal-border font-mono-code text-xs font-bold uppercase">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      CORRECT
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E05A2B] text-white brutal-border font-mono-code text-xs font-bold uppercase">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                      INCORRECT
                    </span>
                  )}
                </div>
              </div>

              {/* Question Text */}
              <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[#292929] mb-6 leading-snug break-words">
                {question.question}
              </h3>

              {/* Answers Comparison Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* User Answer */}
                <div
                  className={`p-4 brutal-border ${
                    isCorrect ? 'bg-[#EBF7EE] text-[#1E3A2B]' : 'bg-[#FFEBE6] text-[#E05A2B]'
                  }`}
                >
                  <span className="font-mono-code text-[11px] font-bold uppercase tracking-wider block mb-1">
                    YOUR ANSWER:
                  </span>
                  <div className="font-display font-bold text-base sm:text-lg text-[#292929] break-words">
                    {userSelection}
                  </div>
                </div>

                {/* Correct Answer */}
                <div className="p-4 brutal-border bg-[#EAE4D6]">
                  <span className="font-mono-code text-[11px] font-bold uppercase tracking-wider text-[#5E5950] block mb-1">
                    CORRECT ANSWER:
                  </span>
                  <div className="font-display font-bold text-base sm:text-lg text-[#1E3A2B] break-words">
                    {question.correctAnswer}
                  </div>
                </div>
              </div>

              {/* Explanation Note */}
              <div className="p-4 bg-[#FFFDF9] brutal-border text-sm text-[#292929] leading-relaxed">
                <span className="font-mono-code text-xs font-bold uppercase text-[#736E65] block mb-1">
                  EXPLANATION:
                </span>
                <p>{question.explanation}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="p-5 sm:p-6 bg-[#292929] text-[#F5F0E6] brutal-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onBackToResults}
          className="font-mono-code text-xs font-bold text-[#E05A2B] hover:underline cursor-pointer"
        >
          ← RETURN TO SCORECARD
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onTryAgain}
            className="px-5 py-3 bg-[#F5F0E6] text-[#292929] hover:bg-white font-display font-black text-xs sm:text-sm uppercase brutal-border cursor-pointer"
          >
            TRY AGAIN
          </button>
          <button
            onClick={onCreateAnother}
            className="px-5 py-3 bg-[#E05A2B] text-white hover:bg-[#CC4F24] font-display font-black text-xs sm:text-sm uppercase brutal-border cursor-pointer"
          >
            CREATE ANOTHER QUIZ
          </button>
        </div>
      </div>
    </div>
  );
};
