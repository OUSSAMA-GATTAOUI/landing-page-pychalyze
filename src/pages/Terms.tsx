import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-[800px] mx-auto px-[5%] pt-[140px] pb-24 text-muted-foreground text-sm leading-relaxed space-y-8">
        <h1 className="font-display text-4xl text-foreground">Terms of Service</h1>
        <p className="text-xs font-mono text-muted-foreground">Last updated: January 2025</p>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">1. About Pichalyze</h2>
          <p>
            Pichalyze is an independent software project developed and maintained by a solo developer.
            It is not a registered company or legal entity. By downloading or using Pichalyze, you
            agree to these terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">2. What the software does</h2>
          <p>
            Pichalyze is a desktop application for Windows that allows you to open, clean, filter,
            sort, and analyze data files (CSV, Excel, JSON, Parquet) locally on your own machine.
            Your data files are never uploaded to any server.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">3. Free and Pro plans</h2>
          <p>
            Pichalyze offers a Free plan at no cost and a Pro plan available via a monthly or yearly
            membership. The features included in each plan are described on the pricing page and may
            change over time with reasonable notice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">4. Payments and refunds</h2>
          <p>
            Payments for the Pro plan are processed by Gumroad. If Pichalyze does not function as
            described on your machine, contact us within 7 days of purchase at
            gattaouioussama@gmail.com for a full refund. Refunds are issued at the developer's
            discretion after this period.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">5. No warranty</h2>
          <p>
            Pichalyze is provided "as is" without any warranty of any kind. The developer is not
            responsible for any data loss, file corruption, or damages resulting from the use of
            this software. Always keep backups of your important data files.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">6. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by applicable law, the developer shall not be liable
            for any indirect, incidental, or consequential damages arising from the use of
            Pichalyze. The developer's total liability shall not exceed the amount you paid for
            the Pro plan in the past 30 days.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">7. Acceptable use</h2>
          <p>
            You may use Pichalyze for any lawful personal or professional data analysis purpose.
            You may not reverse engineer, redistribute, resell, or claim ownership of Pichalyze
            or any part of its code.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">8. Changes to these terms</h2>
          <p>
            These terms may be updated at any time. Continued use of Pichalyze after changes
            constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">9. Contact</h2>
          <p>
            For any questions about these terms, contact:&nbsp;
            <a href="mailto:gattaouioussama@gmail.com" className="text-primary hover:underline">
              gattaouioussama@gmail.com
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
