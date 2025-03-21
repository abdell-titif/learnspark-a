"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-500 text-transparent bg-clip-text">
              LearnSpark AI
            </span>
          </Link>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm font-medium">
          <Link href="#features" className="transition-colors hover:text-foreground/80">
            Features
          </Link>
          <Link href="#how-it-works" className="transition-colors hover:text-foreground/80">
            How It Works
          </Link>
          <Link href="#pricing" className="transition-colors hover:text-foreground/80">
            Pricing
          </Link>
          <Link href="#testimonials" className="transition-colors hover:text-foreground/80">
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="#signup">Sign Up</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/ebook">Create Ebook</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
