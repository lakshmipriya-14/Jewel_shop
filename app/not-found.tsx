import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center text-center px-4">
      <div>
        <p className="text-gold font-serif text-8xl font-bold mb-4">404</p>
        <h2 className="font-serif text-3xl text-charcoal mb-3">Page Not Found</h2>
        <p className="text-muted mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>

        <Link href="/" className="btn-gold inline-block">Back to Home</Link>
      </div>
    </div>
  );
}
