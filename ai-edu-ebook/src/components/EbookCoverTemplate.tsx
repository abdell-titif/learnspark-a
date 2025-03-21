"use client";

import React from "react";

interface EbookCoverProps {
  title: string;
  subtitle?: string;
  authorName: string;
  coverColor?: string;
  accentColor?: string;
  coverImage?: string;
  learningStyle?: string;
}

export function EbookCoverTemplate({
  title = "The Future of AI in Education",
  subtitle = "A Comprehensive Guide for Modern Educators",
  authorName = "Created with LearnSpark AI",
  coverColor = "from-blue-600 to-indigo-700",
  accentColor = "bg-yellow-400",
  coverImage,
  learningStyle = "Visual Learning Edition",
}: EbookCoverProps) {
  return (
    <div className="perspective-1000">
      <div
        className={`relative w-[300px] h-[420px] rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-500 hover:rotate-y-10 bg-gradient-to-br ${coverColor}`}
      >
        {/* Cover image (if provided) */}
        {coverImage && (
          <div
            className="absolute inset-0 opacity-25 mix-blend-overlay"
            style={{
              backgroundImage: `url(${coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}

        {/* Book spine effect */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-black bg-opacity-20"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          <div>
            {/* Accent bar */}
            <div className={`w-20 h-2 ${accentColor} mb-6`}></div>

            {/* Title */}
            <h1 className="text-2xl font-bold leading-tight mb-2">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-sm text-white text-opacity-80 mb-4">
                {subtitle}
              </p>
            )}
          </div>

          <div>
            {/* Learning style badge */}
            {learningStyle && (
              <div className="mb-6 inline-block px-3 py-1 rounded-full bg-white bg-opacity-20 text-xs">
                {learningStyle}
              </div>
            )}

            {/* Author */}
            <p className="text-sm font-light text-white text-opacity-90">
              {authorName}
            </p>
          </div>
        </div>

        {/* Glossy effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-5"></div>
      </div>
    </div>
  );
}
