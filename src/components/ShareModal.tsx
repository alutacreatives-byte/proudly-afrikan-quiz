import React, { useState } from 'react';
import { X, Share2, Copy, Check, MessageSquare, Send } from 'lucide-react';
import { Quiz } from '../types';
import { encodeQuizToUrl } from '../utils/quizShare';

interface ShareModalProps {
  quiz: Quiz;
  score: number;
  totalQuestions: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  quiz,
  score,
  totalQuestions,
  isOpen,
  onClose,
}) => {
  const [customMessage, setCustomMessage] = useState('Can you beat my score? Try this quiz!');
  const [copied, setCopied] = useState(false);
  const [shareStatus, setShareStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const shareUrl = encodeQuizToUrl(quiz);
  const percentage = Math.round((score / totalQuestions) * 100);

  const fullShareText = `${customMessage}\n\nQuiz: "${quiz.title}" (I scored ${score}/${totalQuestions} - ${percentage}%)\n${shareUrl}`;

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: quiz.title,
          text: `${customMessage}\n\nQuiz: "${quiz.title}" (${score}/${totalQuestions})`,
          url: shareUrl,
        });
        setShareStatus('Shared successfully!');
        setTimeout(() => setShareStatus(null), 3000);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          handleCopy();
        }
      }
    } else {
      handleCopy();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setShareStatus('Link copied to clipboard!');
    setTimeout(() => {
      setCopied(false);
      setShareStatus(null);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#F5F0E6] brutal-border-thick brutal-shadow-lg w-full max-w-lg p-6 sm:p-8 relative text-left box-border">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-[#292929]">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#E05A2B]" />
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#292929] uppercase tracking-tight">
              SHARE THIS QUIZ
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-[#FFFDF9] brutal-border text-[#292929] hover:bg-[#EAE4D6] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quiz Info Summary */}
        <div className="p-3.5 bg-[#EAE4D6] brutal-border mb-4">
          <span className="font-mono-code text-[11px] font-bold text-[#E05A2B] uppercase tracking-wider block">
            QUIZ TITLE
          </span>
          <p className="font-display font-black text-base text-[#292929] uppercase mt-0.5 truncate">
            {quiz.title}
          </p>
          <p className="font-mono-code text-xs text-[#5E5950] font-bold mt-1">
            Score: {score}/{totalQuestions} ({percentage}%)
          </p>
        </div>

        {/* Editable Custom Message Field */}
        <div className="mb-5">
          <label className="flex items-center gap-2 font-mono-code text-xs font-bold uppercase tracking-wider text-[#292929] mb-2">
            <MessageSquare className="w-3.5 h-3.5 text-[#E05A2B]" />
            <span>CUSTOM MESSAGE</span>
          </label>
          <textarea
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            rows={2}
            className="w-full p-3 bg-[#FFFDF9] brutal-border text-sm font-sans font-medium text-[#292929] focus:outline-none focus:ring-2 focus:ring-[#E05A2B] resize-none"
            placeholder="Write a message to accompany your quiz..."
          />
          <p className="font-mono-code text-[11px] text-[#736E65] mt-1.5">
            This message, quiz title, and direct link will be included when shared.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            onClick={handleNativeShare}
            className="w-full py-3.5 px-4 bg-[#E05A2B] text-white hover:bg-[#CC4F24] font-display font-black text-sm sm:text-base uppercase brutal-border brutal-shadow-sm brutal-hover flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <Send className="w-4 h-4" />
            <span>SHARE VIA APPS</span>
          </button>

          <button
            onClick={handleCopy}
            className="w-full py-3 px-4 bg-[#FFFDF9] text-[#292929] hover:bg-[#EAE4D6] font-mono-code font-bold text-xs sm:text-sm uppercase tracking-wider brutal-border brutal-shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#1E3A2B]" />
                <span className="text-[#1E3A2B]">LINK COPIED TO CLIPBOARD!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#292929]" />
                <span>COPY LINK AS FALLBACK</span>
              </>
            )}
          </button>
        </div>

        {/* Status Toast */}
        {shareStatus && (
          <div className="mt-3 p-2 text-center font-mono-code text-xs font-bold text-[#1E3A2B] bg-[#E2EFE7] brutal-border animate-fade-in">
            {shareStatus}
          </div>
        )}
      </div>
    </div>
  );
};
