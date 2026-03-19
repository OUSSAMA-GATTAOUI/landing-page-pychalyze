import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-[800px] mx-auto px-[5%] pt-[140px] pb-24 text-muted-foreground text-sm leading-relaxed space-y-8">
        <h1 className="font-display text-4xl text-foreground">Privacy Policy</h1>
        <p className="text-xs font-mono text-muted-foreground">Last updated: January 2025</p>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">1. Overview</h2>
          <p>
            Pichalyze is built with privacy as a core principle. Your data files are
            processed entirely on your own machine and are never uploaded to any server.
            This policy explains what limited information we do collect and why.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">2. Data we collect</h2>
          <p>When you create a Pichalyze account, we store:</p>
          <ul className="list-none space-y-1 pl-4">
            {[
              "Your email address — used for login and account verification",
              "Your chosen username — used to identify your account",
              "A hashed version of your password — we never store your actual password",
              "Your plan status (Free or Pro) and its expiry date",
              "Login timestamps — used to detect suspicious activity",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-2">
            We do <strong className="text-foreground">not</strong> collect, store, or transmit
            any of your data files, spreadsheet contents, or analysis results.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">3. How we use your data</h2>
          <p>Your account data is used solely to:</p>
          <ul className="list-none space-y-1 pl-4">
            {[
              "Verify your identity when you log in",
              "Determine your plan (Free or Pro) to unlock features",
              "Send your email verification code when you register",
              "Respond to support requests if you contact us",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-2">
            We do not sell your data. We do not share it with advertisers or third parties
            except Ko-fi (our payment processor) which receives only your email address
            when processing a Pro plan purchase.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">4. Data storage</h2>
          <p>
            Account data is stored on Neon (a PostgreSQL database service hosted in the EU).
            Passwords are hashed using PBKDF2-SHA256 with 260,000 iterations — they cannot
            be reversed even by us.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">5. Your data files</h2>
          <p>
            Any CSV, Excel, JSON, or Parquet files you open in Pichalyze are processed
            entirely on your local machine. They are never sent to any server, never logged,
            and never accessible to anyone other than you.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">6. Data retention and deletion</h2>
          <p>
            Your account data is kept as long as your account exists. To permanently delete
            your account and all associated data, email us at gattaouioussama@gmail.com
            with the subject "Delete My Account" and we will remove it within 7 days.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">7. Cookies</h2>
          <p>
            This website (pichalyze.com) does not use tracking cookies or analytics.
            No third-party scripts collect data about your visit.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-mono-display text-foreground text-lg">8. Contact</h2>
          <p>
            For any privacy-related questions or data deletion requests, contact:&nbsp;
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

export default Privacy;
