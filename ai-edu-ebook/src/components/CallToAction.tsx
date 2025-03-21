"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Educational Content?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of educators using LearnSpark AI to create personalized, engaging learning materials that adapt to individual needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="default"
              className="bg-white text-blue-700 hover:bg-blue-50"
              asChild
            >
              <Link href="/ebook">Create Your First Ebook</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700"
              asChild
            >
              <Link href="#demo">Request a Demo</Link>
            </Button>
          </div>

          <p className="mt-8 text-blue-200 text-sm">
            No credit card required. Start with our free trial and upgrade anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
