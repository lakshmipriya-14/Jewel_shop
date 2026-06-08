import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Refund Policy — Venus Silver",
};

export default function ReturnAndRefundPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl text-charcoal">Return &amp; Refund Policy</h1>
      <div className="mt-6 space-y-4 text-muted leading-relaxed">
        <p>
          If you are not satisfied with your purchase, you may request a return or refund
          according to our policy.
        </p>
        <p>
          This is placeholder content. Replace it with your official return/refund terms.
        </p>
      </div>
    </div>
  );
}

