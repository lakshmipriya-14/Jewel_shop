import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Venus Silver",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl text-charcoal">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-muted leading-relaxed">
        <p>
          Your privacy is important to us. This page outlines how we collect,
          use, and protect your information when you visit or purchase from Venus Silver.
        </p>
        <p>
          We only use information to provide services, process orders, communicate with you,
          and improve your shopping experience.
        </p>
        <p>
          For a production website, replace this placeholder with your full legal text.
        </p>
      </div>
    </div>
  );
}

