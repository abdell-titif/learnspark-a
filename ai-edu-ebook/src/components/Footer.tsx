"use client";

import Link from "next/link";

const currentYear = new Date().getFullYear();

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Documentation", href: "#docs" },
      { name: "Help Center", href: "#help" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
      { name: "Partners", href: "#partners" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-semibold text-white">
                LearnSpark AI
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming education with AI-personalized learning materials
              tailored to individual needs, styles, and preferences.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} LearnSpark AI. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Made with passion for educators and learners worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
