import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What makes Bodhify different from other coding platforms?",
    answer:
      "Bodhify focuses on real-world, production-grade projects rather than toy examples. Our curriculum is built around actual industry workflows, open-source contributions, and live mentorship from engineers who have worked at top tech companies. You don't just learn to code — you learn to build, ship, and scale.",
  },
  {
    question: "Do I need prior coding experience to join?",
    answer:
      "No prior experience is required for our beginner cohorts. We have structured learning paths for complete beginners as well as advanced tracks for developers looking to level up. Our curriculum adapts to your current skill level.",
  },
  {
    question: "What kind of support can I expect?",
    answer:
      "You get access to 24/7 Discord community support, weekly live Q&A sessions, 1-on-1 mentor office hours, peer code reviews, and a dedicated teaching assistant for every cohort. You're never alone in your learning journey.",
  },
  {
    question: "Are the courses self-paced or scheduled?",
    answer:
      "We offer both! Our bootcamp cohorts follow a structured schedule with live weekend sessions, while our recorded content is available 24/7 for self-paced learning. You can rewatch all live sessions at any time.",
  },
  {
    question: "Will I get a certificate after completion?",
    answer:
      "Yes! Upon completing a cohort, you receive a verified certificate of completion that you can add to your LinkedIn profile and resume. More importantly, you'll have a portfolio of real projects to showcase to employers.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = (useState < number) | (null > null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black font-poppins text-[#001c52] mb-3">
            FAQs
          </h2>
          <p className="text-gray-500 text-lg">Get your questions answered</p>
        </div>

        {/* FAQ List */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="w-full flex items-center justify-between py-5 text-left group"
                onClick={() => toggle(index)}
              >
                <h3 className="text-base font-semibold text-[#001c52] pr-4 group-hover:text-[#00a892] transition-colors">
                  {faq.question}
                </h3>
                <div className="shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#00a892]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
