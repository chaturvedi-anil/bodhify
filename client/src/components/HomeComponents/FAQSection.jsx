import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqData = [
  {
    question: "What is Bodhify?",
    answer:
      "Bodhify is a career-focused learning platform designed to help students and professionals master Full Stack Development, Backend, and DevOps with practical projects and mentorship.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "No. Bodhify offers structured learning paths for beginners as well as advanced learners, making it easy to start from scratch.",
  },
  {
    question: "Will I work on real projects?",
    answer:
      "Yes. Every cohort includes hands-on full-stack and backend projects to build practical experience and strengthen your portfolio.",
  },
  {
    question: "Do you provide mentorship?",
    answer:
      "Yes. You’ll get direct mentorship from experienced engineers and industry professionals throughout your learning journey.",
  },
  {
    question: "Is there job support after course completion?",
    answer:
      "Yes. Bodhify provides resume reviews, mock interviews, and career guidance to help you land your first tech role.",
  },
  {
    question: "Are classes live or recorded?",
    answer:
      "Bodhify offers live interactive sessions along with recorded resources so you can learn at your own pace anytime.",
  },
];

import React from "react";

const FAQSection = () => {
  return (
    <div className="min-h-screen pt-4 relative overflow-hidden bg-(--bodhify-bg)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono text-(--bodhify-navy) mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-white/80 font-mono text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Everything you need to know about Bodhify
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4 w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="w-full bg-white font-mono rounded-xl px-8 shadow-sm border border-(--bodhify-light-grey)"
              >
                <AccordionTrigger className="w-full items-start text-left font-mono font-semibold text-(--bodhify-navy) hover:no-underline py-6">
                  <span className="pr-4 wrap-break-word leading-relaxed">
                    {faq.question}
                  </span>
                </AccordionTrigger>

                <AccordionContent className="pb-6 pr-8 text-gray-600 leading-relaxed wrap-break-word">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
