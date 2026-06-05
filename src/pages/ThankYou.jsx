import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
  document.title =
    "Thank You | Saakaara";
}, []);
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="font-heading text-4xl text-primary md:text-5xl font-bold">
          Thank You!
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          We've received your inquiry and will get back to you shortly.
        </p>

        <p className="mt-2 text-muted-foreground">
          If your request is urgent, feel free to call or WhatsApp us directly.
        </p>

        <a
          href="/"
          className="inline-flex mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
