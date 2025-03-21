"use client";

import { BookOpen, BrainCircuit, LayoutPanelLeft, Lightbulb, Rocket, UserCircle } from "lucide-react";

const features = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-blue-500" />,
    title: "AI-Powered Personalization",
    description: "Our advanced AI analyzes learning preferences and creates custom content that adapts to individual learning styles.",
  },
  {
    icon: <LayoutPanelLeft className="h-10 w-10 text-blue-500" />,
    title: "Multi-Format Content",
    description: "Generate content with the perfect mix of text, visuals, interactive elements, and examples based on subject matter and user preferences.",
  },
  {
    icon: <UserCircle className="h-10 w-10 text-blue-500" />,
    title: "Learner-Specific Adaptations",
    description: "Content automatically adjusts complexity, pacing, and examples to match the learner's background and existing knowledge.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-blue-500" />,
    title: "Comprehensive Subject Coverage",
    description: "Create educational materials across any subject - from mathematics and sciences to humanities, languages, and specialized professional topics.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-blue-500" />,
    title: "Real-World Applications",
    description: "Every concept includes practical, real-world applications to enhance understanding and demonstrate relevance.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-blue-500" />,
    title: "Engagement Optimization",
    description: "Our AI continuously learns which content formats drive the most engagement and retention for each learner.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Personalized Learning, Powered by AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge AI with educational expertise to create truly personalized learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
