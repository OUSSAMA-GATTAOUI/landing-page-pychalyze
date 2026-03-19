import { useState } from "react";

const faqs = [
  {
    q: "Is my data uploaded to any server?",
    a: "Your dataset files (CSV, Excel, JSON, Parquet) are processed 100% locally on your machine — they are never uploaded anywhere. Your account credentials are stored securely in an encrypted cloud database for login purposes only.",
  },
  {
    q: "What are the system requirements?",
    a: "Pichalyze requires Windows 10 or 11 (64-bit), at least 4 GB of RAM (8 GB recommended for large datasets), and approximately 200 MB of free disk space.",
  },
  {
    q: "Do I need to know Python or SQL?",
    a: "Not at all. Pichalyze is a no-code tool. You perform complex filters, joins, and transformations through a visual interface — no scripting required.",
  },
  {
    q: "What is the difference between Free and Pro?",
    a: "The Free plan lets you open files up to 8 MB, use one dataset at a time, apply 10 basic clean operations, and view summary statistics. Pro removes all limits: unlimited file size, unlimited simultaneous datasets, all 30+ clean operations, charts, advanced analytics, and Parquet/Excel export.",
  },
  {
    q: "What plans are available?",
    a: "Monthly at $10/month — cancel anytime. Yearly at $99/year — saves you $21 (equivalent to 2 months free). Both plans include exactly the same Pro features.",
  },
  {
    q: "How does Pro activation work?",
    a: "Click 'Get Pro' in the app or on this page. At the Gumroad checkout, fill in the 'Your Pichalyze account email' field with the email you used to register. Your Pro plan activates automatically — just restart the app and you will see the gold PRO badge.",
  },
  {
    q: "What payment methods are accepted?",
    a: "Gumroad accepts all major credit and debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. Buyers from 190+ countries are supported. No PayPal account needed to pay by card.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, anytime. Log in to your Gumroad account and cancel. You keep Pro access until the end of the period you already paid for.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes. If Pichalyze does not work as described on your machine, contact us at gattaouioussama@gmail.com within 7 days of purchase for a full refund — no questions asked.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-[5%]">
      <h2 className="reveal font-display text-4xl text-center">Frequently Asked</h2>
      <div className="max-w-[800px] mx-auto mt-16">
        {faqs.map((f, i) => (
          <div key={i} className="reveal border-b border-border">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full py-6 bg-transparent border-none text-foreground text-left flex justify-between items-center font-body font-semibold text-lg cursor-pointer"
            >
              {f.q}
              <span
                className="text-2xl text-primary transition-transform duration-300 flex-shrink-0 ml-4"
                style={{ transform: open === i ? "rotate(45deg)" : "none" }}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden text-muted-foreground text-sm transition-all duration-300"
              style={{ maxHeight: open === i ? "300px" : "0", paddingBottom: open === i ? "1.5rem" : "0" }}
            >
              {f.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
