import React from 'react';
import { ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStartClick: () => void;
  onSelectSample: (samplePrompt: string, category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartClick, onSelectSample }) => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b-2 border-[#292929] bg-[#F5F0E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Editorial Pill & Tagline */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#EAE4D6] brutal-border text-xs font-mono-code font-bold uppercase tracking-wider text-[#292929] mb-6 brutal-shadow-sm">
          <span className="w-2.5 h-2.5 bg-[#E05A2B] inline-block"></span>
          <span>PROUDLY AFRIKAN QUIZ • EDITION 1.0</span>
        </div>

        {/* Oversized Wide Display Headline */}
        <div className="space-y-2 mb-8">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.92] tracking-tighter text-[#292929] uppercase break-words">
            MAKE A QUIZ.<br />
            <span className="text-[#E05A2B]">
              ABOUT ANYTHING.
            </span>
          </h1>
        </div>

        {/* Two-column editorial subheader and action block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#3D3D3D] leading-snug max-w-2xl bg-[#F5F0E6]/80 backdrop-blur-[2px] p-1 rounded-sm">
              Turn any topic, text notes, or educational PDF into a sharp, interactive quiz in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              {/* Primary High-Impact CTA */}
              <button
                onClick={onStartClick}
                className="w-full sm:w-auto px-8 py-4 bg-[#292929] text-[#F5F0E6] font-display font-black text-base sm:text-lg md:text-xl tracking-wider uppercase brutal-border brutal-shadow brutal-hover flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>CREATE YOUR QUIZ</span>
                <ArrowRight className="w-6 h-6 text-[#E05A2B] group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="font-mono-code text-xs text-[#5E5950] flex flex-col justify-center">
                <span className="font-bold text-[#292929]">Free to use.</span>
                <span>No login or signup required.</span>
              </div>
            </div>
          </div>

          {/* Right column poster badge / quick inspiration stats */}
          <div className="lg:col-span-5">
            <div className="bg-[#EAE4D6] brutal-border brutal-shadow p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#292929]/20 pb-3">
                <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#292929] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E05A2B]" />
                  INSTANT INSPIRATION
                </span>
                <span className="font-mono-code text-[11px] text-[#736E65]">TAP TO TRY</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onSelectSample('The Kingdom of Mali & Mansa Musa', 'History')}
                  className="text-xs font-mono-code font-bold bg-[#F5F0E6] hover:bg-[#E05A2B] hover:text-white px-3 py-1.5 brutal-border transition-colors cursor-pointer text-left"
                >
                  👑 Kingdom of Mali
                </button>
                <button
                  onClick={() => onSelectSample('The Great Rift Valley Geography & Ecology', 'Geography')}
                  className="text-xs font-mono-code font-bold bg-[#F5F0E6] hover:bg-[#E05A2B] hover:text-white px-3 py-1.5 brutal-border transition-colors cursor-pointer text-left"
                >
                  🌍 Great Rift Valley
                </button>
                <button
                  onClick={() => onSelectSample('African Literature: Chinua Achebe & Things Fall Apart', 'Literature')}
                  className="text-xs font-mono-code font-bold bg-[#F5F0E6] hover:bg-[#E05A2B] hover:text-white px-3 py-1.5 brutal-border transition-colors cursor-pointer text-left"
                >
                  📚 African Literature
                </button>
                <button
                  onClick={() => onSelectSample('Solar Energy Revolution & Geothermal Power in Africa', 'Science')}
                  className="text-xs font-mono-code font-bold bg-[#F5F0E6] hover:bg-[#E05A2B] hover:text-white px-3 py-1.5 brutal-border transition-colors cursor-pointer text-left"
                >
                  ⚡ Solar In Africa
                </button>
              </div>

              <div className="pt-2 border-t border-[#292929]/20 flex items-center justify-between text-[11px] font-mono-code text-[#5E5950]">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#E05A2B]" /> Real-time generation
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#292929]" /> Verified explanations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
