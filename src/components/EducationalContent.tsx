import React, { useState } from 'react';
import {
  ChevronDown,
  GraduationCap,
  Users,
  Compass,
  BookMarked,
} from 'lucide-react';

export const EducationalContent: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const steps = [
    {
      step: '01',
      title: 'CHOOSE YOUR SOURCE',
      desc: 'Type a topic, paste study notes or articles, or drop in a course PDF document.',
    },
    {
      step: '02',
      title: 'SET PREFERENCES',
      desc: 'Select question quantity, difficulty, question format, and education level.',
    },
    {
      step: '03',
      title: 'GENERATE QUIZ',
      desc: 'Gemini analyses the source and creates questions with explanations.',
    },
    {
      step: '04',
      title: 'TEST YOURSELF',
      desc: 'Take the single-question interactive assessment with instant feedback.',
    },
    {
      step: '05',
      title: 'SEE YOUR SCORE',
      desc: 'Review mistakes, share your quiz, or try again.',
    },
  ];

  const personas = [
    {
      title: 'STUDENTS',
      role: 'Self-Testing & Exam Prep',
      desc: 'Convert textbook chapters and lecture notes into active recall quizzes to study 3x faster.',
      icon: GraduationCap,
    },
    {
      title: 'TEACHERS & EDUCATORS',
      role: 'Classroom Assessments',
      desc: 'Generate customized pop quizzes and curriculum checks tailored for any grade level in seconds.',
      icon: BookMarked,
    },
    {
      title: 'TUTORS & COACHES',
      role: 'Targeted Remediation',
      desc: 'Quickly assess student gaps across specific topics and provide instant detailed explanations.',
      icon: Users,
    },
    {
      title: 'CURIOUS MINDS',
      role: 'Lifelong Learning',
      desc: 'Explore African history, literature, scientific discoveries, or global general knowledge.',
      icon: Compass,
    },
  ];

  const faqs = [
    {
      question: 'What is an AI quiz generator?',
      answer:
        'An AI quiz generator is an intelligent educational tool that analyzes source materials (such as topics, text notes, or PDF documents) and automatically produces rigorous, accurate assessment questions, answer choices, and explanatory notes for rapid self-testing.',
    },
    {
      question: 'Can I create a quiz from a PDF?',
      answer:
        'Yes. Proudly Afrikan Quiz extracts readable text directly from your uploaded PDF or textbook files in the browser and sends the verified content to the AI engine to generate questions grounded strictly in your document.',
    },
    {
      question: 'Can I create a quiz from my notes?',
      answer:
        'Yes. Use the "Paste It" mode to input lecture notes, syllabus summaries, research papers, or web articles. The generator will extract key concepts and form balanced multiple-choice or true/false questions.',
    },
    {
      question: 'Can I choose the difficulty?',
      answer:
        'Yes. You can select between Easy (foundational definitions and clear options), Medium (nuanced conceptual questions), and Hard (deep analytical questions with plausible distractors).',
    },
    {
      question: 'Can I create multiple-choice questions?',
      answer:
        'Yes. You can choose Multiple Choice (4 choices with one correct answer), True / False statements (2 options), or Mixed mode which blends both formats for variety.',
    },
    {
      question: 'Is Proudly Afrikan Quiz free?',
      answer:
        'Yes, Proudly Afrikan Quiz is 100% free and open for students, teachers, and lifelong learners everywhere with no account requirement or hidden barriers.',
    },
  ];

  return (
    <div className="border-t-2 border-[#292929] bg-[#EAE4D6]/40">
      {/* SECTION: WHAT IS PROUDLY AFRIKAN QUIZ */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 border-b-2 border-[#292929]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#E05A2B] block">
              PLATFORM OVERVIEW
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#292929] leading-none">
              WHAT IS PROUDLY AFRIKAN QUIZ?
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-[#3D3D3D] text-base sm:text-lg md:text-xl leading-relaxed">
            <p>
              <strong className="text-[#292929] font-bold">Proudly Afrikan Quiz</strong> is a high-speed, editorial-grade AI assessment engine engineered to turn any subject, textbook excerpt, or course document into an active learning experience.
            </p>
            <p>
              It represents the vanguard of the future <strong className="text-[#292929] font-bold">Proudly Afrikan Education</strong> platform — creating tools that celebrate intellectual rigor, modern African culture, and universal knowledge accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: HOW IT WORKS (CRITICAL RESPONSIVE REFINEMENT) */}
      <section id="how-it-works" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 border-b-2 border-[#292929]">
        <div className="mb-12 pb-6 border-b-2 border-[#292929]/20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono-code text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E05A2B] block mb-2">
              THE WORKFLOW
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-[#292929] leading-[0.9]">
              HOW IT<br />
              <span className="text-[#E05A2B]">WORKS</span>
            </h2>
          </div>
          <p className="font-mono-code text-xs sm:text-sm text-[#4D4D4D] max-w-md leading-relaxed">
            5 frictionless steps from raw curiosity to tested mastery.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols on medium, 5 cols on large desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-4 xl:gap-3.5 2xl:gap-4 w-full">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#F5F0E6] brutal-border p-5 sm:p-6 lg:p-5 xl:p-4 2xl:p-5 flex flex-col justify-between items-center text-center brutal-shadow-sm brutal-hover w-full min-h-[260px] box-border transition-all"
            >
              {/* Top step indicator */}
              <div className="w-full flex items-center justify-center pb-3 border-b-2 border-[#292929]/15">
                <span className="font-mono-code font-black text-2xl sm:text-3xl text-[#E05A2B] leading-none tracking-tight">
                  {item.step}
                </span>
              </div>

              {/* Step Title and Description with centered typography and balanced line wrapping */}
              <div className="my-auto py-3 w-full flex flex-col items-center justify-center space-y-2.5">
                <h3 className="font-display font-black text-base sm:text-lg lg:text-base xl:text-sm 2xl:text-base text-[#292929] uppercase tracking-tight leading-snug text-center break-words max-w-full">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-xs 2xl:text-sm text-[#4D4D4D] leading-relaxed font-medium text-center break-words max-w-full">
                  {item.desc}
                </p>
              </div>

              {/* Bottom decorative label */}
              <div className="w-full pt-3 border-t border-[#292929]/15 flex items-center justify-center text-[10px] sm:text-[11px] font-mono-code text-[#736E65] uppercase font-bold tracking-widest text-center">
                <span>STEP {item.step} • PROUDLY AFRIKAN</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: WHO IS IT FOR? */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 border-b-2 border-[#292929]">
        <div className="mb-12 pb-6 border-b-2 border-[#292929]/20 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-[#E05A2B] block mb-1">
              TARGET AUDIENCE
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#292929] leading-none">
              WHO IS IT FOR?
            </h2>
          </div>
          <p className="font-mono-code text-xs sm:text-sm text-[#5E5950] max-w-sm">
            Built for learners, educators, and institutions across the continent and the world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {personas.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#F5F0E6] brutal-border p-6 sm:p-7 flex flex-col justify-between brutal-shadow-sm brutal-hover space-y-6"
              >
                <div>
                  <div className="w-12 h-12 bg-[#292929] text-[#F5F0E6] brutal-border flex items-center justify-center mb-6 shadow-[2px_2px_0px_#E05A2B]">
                    <Icon className="w-6 h-6 text-[#E05A2B]" />
                  </div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-[#292929] uppercase mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <span className="font-mono-code text-xs font-bold text-[#E05A2B] block mb-3">
                    {item.role}
                  </span>
                  <p className="text-xs sm:text-sm text-[#4D4D4D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section id="faq" className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="font-mono-code text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E05A2B] block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#292929] leading-none">
            EVERYTHING YOU NEED TO KNOW
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-[#F5F0E6] brutal-border transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg md:text-xl text-[#292929] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-8 h-8 brutal-border flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#E05A2B] text-white rotate-180' : 'bg-[#EAE4D6] text-[#292929]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 border-t border-[#292929]/15">
                    <p className="text-sm sm:text-base md:text-lg text-[#4A4A4A] leading-relaxed mt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
