import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy — Venus Silver",
};

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl text-charcoal">Shipping Policy</h1>
      <div className="mt-6 space-y-4 text-muted leading-relaxed">
        <p>
          Orders are processed after confirmation. Delivery timelines depend on location and product availability.
        </p>
        <p>
          This is placeholder content. Replace it with your official shipping policy.
        </p>
      </div>
    </div>
  );
}


