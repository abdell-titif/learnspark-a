"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EbookCoverTemplate } from "@/components/EbookCoverTemplate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, User, BookType, PenTool } from "lucide-react";
import Link from "next/link";

// Mock topics for the ebook
const mockTopics = [
  "Introduction to AI in Education",
  "Understanding Learner Profiles",
  "Personalization Algorithms",
  "Creating Adaptive Content",
  "Evaluating Learning Outcomes",
  "Future Trends in EdTech",
];

export default function EbookConcept() {
  const [title, setTitle] = useState("AI-Powered Personalized Learning");
  const [subtitle, setSubtitle] = useState("Strategies for Modern Educators");
  const [learningStyle, setLearningStyle] = useState("Visual Learning Edition");
  const [authorName, setAuthorName] = useState("Created with LearnSpark AI");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container py-12">
          <div className="flex items-center mb-8">
            <Button variant="outline" size="sm" className="mr-4" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Create Your Personalized Ebook</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left column - Book design */}
            <div className="col-span-1 flex flex-col items-center space-y-6">
              <h2 className="text-xl font-semibold self-start">Preview</h2>

              <div className="animate-float">
                <EbookCoverTemplate
                  title={title}
                  subtitle={subtitle}
                  authorName={authorName}
                  learningStyle={learningStyle}
                />
              </div>

              <Card className="w-full">
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Your ebook will include:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {mockTopics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right column - Form */}
            <div className="col-span-1 lg:col-span-2">
              <h2 className="text-xl font-semibold mb-6">Customize Your Ebook</h2>

              <div className="space-y-8">
                {/* Basic Info Section */}
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <BookType className="h-5 w-5 mr-2 text-blue-500" />
                    Basic Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="title">
                        Title
                      </label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter your ebook title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="subtitle">
                        Subtitle
                      </label>
                      <Input
                        id="subtitle"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        placeholder="Enter your ebook subtitle"
                      />
                    </div>
                  </div>
                </div>

                {/* Learning Style Section */}
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-blue-500" />
                    Learning Preferences
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="learningStyle">
                        Primary Learning Style
                      </label>
                      <select
                        id="learningStyle"
                        value={learningStyle}
                        onChange={(e) => setLearningStyle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Visual Learning Edition">Visual Learning</option>
                        <option value="Auditory Learning Edition">Auditory Learning</option>
                        <option value="Reading/Writing Edition">Reading/Writing</option>
                        <option value="Kinesthetic Learning Edition">Kinesthetic Learning</option>
                        <option value="Multimodal Learning Edition">Multimodal Learning</option>
                      </select>
                      <p className="mt-1 text-sm text-gray-500">
                        We'll optimize content for this learning style
                      </p>
                    </div>
                  </div>
                </div>

                {/* Attribution Section */}
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <PenTool className="h-5 w-5 mr-2 text-blue-500" />
                    Attribution
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="authorName">
                        Author/Creator Name
                      </label>
                      <Input
                        id="authorName"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="Enter author or creator name"
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        This will appear on the ebook cover
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    Generate My Ebook
                  </Button>
                  <p className="mt-2 text-sm text-gray-500">
                    Our AI will personalize your ebook content based on these preferences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
