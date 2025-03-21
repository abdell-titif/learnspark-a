"use client";

import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Define Your Learning Goals",
    description: "Select your subject, specify learning objectives, and identify the target audience for your educational ebook.",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "Choose Learning Preferences",
    description: "Tell us about preferred learning styles, content types, and customize the balance between text, visuals, and interactive elements.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    number: "03",
    title: "AI Content Generation",
    description: "Our AI analyzes your inputs and creates a personalized ebook with content specifically tailored to meet your learning objectives and preferences.",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "04",
    title: "Review and Customize",
    description: "Preview your ebook, make adjustments, and fine-tune the content until it perfectly matches your educational needs.",
    color: "from-blue-500 to-indigo-600",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How LearnSpark AI Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating personalized educational ebooks has never been easier.
            Follow these simple steps to generate custom learning materials.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-12 items-start">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl`}>
                  {step.number}
                </div>
              </div>

              <div className="md:ml-8">
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block h-8 pl-8">
                    <ArrowRight className="h-6 w-6 text-gray-300 transform rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
