import React from 'react';
import { Type, ClipboardCopy, FileUp, ArrowDown } from 'lucide-react';
import { CreationMethod } from '../types';

interface ThreeWaysSectionProps {
  onSelectMethod: (method: CreationMethod) => void;
  activeMethod: CreationMethod;
}

export const ThreeWaysSection: React.FC<ThreeWaysSectionProps> = ({
  onSelectMethod,
  activeMethod,
}) => {
  const cards = [
    {
      id: 'topic' as CreationMethod,
      num: '01',
      title: 'TYPE IT.',
      subtitle: 'Topic & Idea Mode',
      desc: 'Enter any topic, curriculum subject, or historical event and let AI craft a structured quiz instantly.',
      icon: Type,
      tag: 'FASTEST',
    },
    {
      id: 'text' as CreationMethod,
      num: '02',
      title: 'PASTE IT.',
      subtitle: 'Notes & Articles',
      desc: 'Paste class notes, syllabus summaries, research papers, or study guides to drill key takeaways.',
      icon: ClipboardCopy,
      tag: 'DEEP CONTEXT',
    },
    {
      id: 'pdf' as CreationMethod,
      num: '03',
      title: 'UPLOAD IT.',
      subtitle: 'Document & PDF',
      desc: 'Drop in course PDFs, lecture slides, or textbook chapters to generate grounded examination questions.',
      icon: FileUp,
      tag: 'DIRECT FILE',
    },
  ];

  return (
    <section className="py-16 md:py-20 border-b-2 border-[#292929] bg-[#EAE4D6]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-2 border-[#292929]/20 gap-4">
          <div>
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#E05A2B] block mb-1">
              FLEXIBLE INPUT MODES
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#292929] leading-none">
              THREE WAYS TO CREATE.
            </h2>
          </div>
          <p className="font-mono-code text-xs sm:text-sm text-[#5E5950] max-w-sm">
            Select an input method below to immediately jump into the quiz generator workbench.
          </p>
        </div>

        {/* 3 Large Modular Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            const isSelected = activeMethod === card.id;

            return (
              <div
                key={card.id}
                onClick={() => onSelectMethod(card.id)}
                className={`relative bg-[#F5F0E6] brutal-border p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all ${
                  isSelected
                    ? 'brutal-shadow-lg ring-2 ring-[#E05A2B] -translate-y-1 bg-[#FFFDF9]'
                    : 'brutal-shadow brutal-hover'
                }`}
              >
                {/* Top card bar */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-code font-bold text-2xl sm:text-3xl text-[#292929]/40">
                      {card.num}
                    </span>
                    <span
                      className={`text-[10px] font-mono-code font-bold px-2.5 py-1 brutal-border ${
                        isSelected ? 'bg-[#E05A2B] text-white' : 'bg-[#EAE4D6] text-[#292929]'
                      }`}
                    >
                      {card.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 bg-[#292929] text-[#F5F0E6] brutal-border flex items-center justify-center mb-6 shadow-[2px_2px_0px_#E05A2B]">
                    <Icon className="w-6 h-6 text-[#E05A2B]" />
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#292929] uppercase tracking-tight mb-2 leading-tight">
                    {card.title}
                  </h3>
                  
                  <div className="font-mono-code text-xs font-bold text-[#E05A2B] mb-3">
                    {card.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#4D4D4D] leading-relaxed mb-6 font-medium">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 border-t border-[#292929]/20 flex items-center justify-between">
                  <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#292929]">
                    {isSelected ? 'ACTIVE SELECTION' : 'SELECT MODE'}
                  </span>
                  <div
                    className={`w-7 h-7 brutal-border flex items-center justify-center ${
                      isSelected ? 'bg-[#E05A2B] text-white' : 'bg-[#F5F0E6] text-[#292929]'
                    }`}
                  >
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
