import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-16 px-[5%] flex flex-col md:flex-row justify-between items-center border-t border-border text-xs text-muted-foreground gap-8">
    <span className="font-display text-xl text-primary">PICHALYZE</span>
    <div className="flex gap-8">
      <Link to="/privacy" className="no-underline text-muted-foreground hover:text-primary transition-colors">
        Privacy Policy
      </Link>
      <Link to="/terms" className="no-underline text-muted-foreground hover:text-primary transition-colors">
        Terms of Service
      </Link>
      <a href="mailto:gattaouioussama@gmail.com" className="no-underline text-muted-foreground hover:text-primary transition-colors">
        Contact
      </a>
    </div>
    <span>© 2025 PICHALYZE. INDEPENDENT SOFTWARE PROJECT.</span>
  </footer>
);

export default Footer;
