import type { Metadata } from "next";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "FAQ — Venus Silver",
};

export default function FaqPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl text-charcoal">FAQ</h1>
      <p className="text-muted mt-3">Quick answers to the most common questions.</p>

      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="orders">
            <AccordionTrigger>Orders</AccordionTrigger>
            <AccordionContent>
              You will receive order confirmation after checkout. For any order-specific requests, contact us with your order ID.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shipping">
            <AccordionTrigger>Shipping</AccordionTrigger>
            <AccordionContent>
              Shipping timelines depend on product availability and your location. Tracking details are shared once your order ships.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="returns">
            <AccordionTrigger>Returns</AccordionTrigger>
            <AccordionContent>
              If eligible, you can request a return within the applicable window. We will guide you through pickup/return steps.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="custom">
            <AccordionTrigger>Custom Orders</AccordionTrigger>
            <AccordionContent>
              We support custom designs. Share your jewellery requirements and any reference images through the custom order page.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="payments">
            <AccordionTrigger>Payments</AccordionTrigger>
            <AccordionContent>
              Payments are processed securely at checkout. For payment-related issues, contact support with relevant details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="care">
            <AccordionTrigger>Jewellery Care</AccordionTrigger>
            <AccordionContent>
              Avoid contact with chemicals and perfumes. Store pieces separately and clean gently with a soft cloth to maintain shine.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

