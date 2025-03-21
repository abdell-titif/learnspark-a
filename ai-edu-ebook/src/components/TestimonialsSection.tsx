"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "LearnSpark AI has transformed how I create materials for my diverse classroom. Each student can now access content that speaks to their individual learning style.",
    name: "Dr. Sarah Chen",
    title: "High School Science Teacher",
    avatar: "/testimonial-1.jpg",
    initials: "SC",
  },
  {
    quote: "The personalization capabilities are remarkable. Our university has seen a 40% increase in student engagement since implementing LearnSpark AI across our departments.",
    name: "Prof. James Wilson",
    title: "University Department Chair",
    avatar: "/testimonial-2.jpg",
    initials: "JW",
  },
  {
    quote: "As an educational content creator, LearnSpark AI has become my secret weapon. I can now produce highly-targeted materials for different audiences in a fraction of the time.",
    name: "Miguel Rodriguez",
    title: "Educational Content Creator",
    avatar: "/testimonial-3.jpg",
    initials: "MR",
  },
  {
    quote: "The AI truly understands different learning styles. It transformed my technical material into content that's accessible for visual learners - something I struggled with for years.",
    name: "Emma Thompson",
    title: "Corporate Trainer",
    avatar: "/testimonial-4.jpg",
    initials: "ET",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Educators Worldwide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how LearnSpark AI is transforming educational content creation across different settings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg
                      className="h-8 w-8 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 flex-1 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
