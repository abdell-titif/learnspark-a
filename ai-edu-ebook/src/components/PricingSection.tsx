"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";

const pricingPlans = [
  {
    name: "Educator",
    description: "Perfect for teachers and individual tutors",
    price: "$29",
    billing: "per month",
    features: [
      "Up to 5 personalized ebooks per month",
      "Basic customization options",
      "Standard AI personalization",
      "Export as PDF or EPUB",
      "Email support",
    ],
    popular: false,
    buttonText: "Start with Educator",
    buttonVariant: "outline" as ButtonVariant,
  },
  {
    name: "Institution",
    description: "Ideal for schools, colleges and universities",
    price: "$79",
    billing: "per month",
    features: [
      "Up to 30 personalized ebooks per month",
      "Advanced customization options",
      "Enhanced AI personalization algorithms",
      "All export formats including interactive HTML",
      "Analytics dashboard for tracking usage",
      "Priority support",
      "Collaborative editing features",
    ],
    popular: true,
    buttonText: "Start with Institution",
    buttonVariant: "default" as ButtonVariant,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    billing: "pricing",
    features: [
      "Unlimited ebooks per month",
      "Complete customization suite",
      "Advanced AI training on your content",
      "White-label solution",
      "API access for integration",
      "Dedicated account manager",
      "Custom feature development",
      "SLA with 24/7 support",
    ],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as ButtonVariant,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include access to our core AI personalization technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.billing}</span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
                  variant={plan.buttonVariant}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
