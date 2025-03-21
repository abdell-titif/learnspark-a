"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Learning with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">AI-Personalized</span> Educational Ebooks
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Create custom educational content that adapts to individual learning styles, interests, and educational needs. Our AI technology generates engaging, personalized ebooks for better understanding and retention.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/ebook">Create Your Ebook</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#how-it-works">Learn How It Works</Link>
              </Button>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-medium">{i}</span>
                  </div>
                ))}
              </div>
              <span>Join 2,000+ educators and learners using LearnSpark AI</span>
            </div>
          </div>

          <div className="relative lg:h-[600px]">
            <div className="relative h-[400px] lg:h-[550px] w-full rounded-lg shadow-2xl overflow-hidden border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[280px] h-[400px] shadow-xl rounded-lg transform rotate-6 transition-transform hover:rotate-0 duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg"></div>
                  <div className="absolute inset-0.5 bg-white rounded-[7px] p-4 flex flex-col">
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Machine Learning for Beginners</h3>
                      <p className="text-sm text-gray-500">Personalized for visual learners</p>
                    </div>
                    <div className="flex-1 rounded bg-gray-50 p-2 text-xs">
                      <div className="mb-2 h-2 w-3/4 bg-gray-200 rounded"></div>
                      <div className="mb-4 h-2 w-1/2 bg-gray-200 rounded"></div>
                      <div className="mb-2 w-full h-24 bg-blue-100 rounded flex items-center justify-center">
                        <span className="text-xs text-gray-400">Interactive Visualization</span>
                      </div>
                      <div className="my-2 h-2 w-full bg-gray-200 rounded"></div>
                      <div className="mb-2 h-2 w-5/6 bg-gray-200 rounded"></div>
                      <div className="mb-2 h-2 w-4/6 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
