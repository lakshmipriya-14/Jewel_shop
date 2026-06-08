import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Venus Silver",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl text-charcoal">Terms &amp; Conditions</h1>
      <div className="mt-6 space-y-4 text-muted leading-relaxed">
        <p>
          By using this website and placing orders, you agree to our terms.
          These terms cover order processing, payments, delivery expectations,
          and general use of the site.
        </p>
        <p>
          This is placeholder content. Replace it with your official terms for real compliance.
        </p>
      </div>
    </div>
  );
}

