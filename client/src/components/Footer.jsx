import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@bodhify",
    label: "YouTube",
  },
  { icon: FaTwitter, href: "https://x.com/bodhify", label: "Twitter/X" },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/bodhify",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/bodhify",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund & Cancellation", href: "/refund-policy" },
];

const Footer = () => {
  return (
    <footer className="bg-[#00030f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-black font-poppins text-white">
              Bodhi
            </span>
            <span
              className="text-2xl font-black font-poppins px-1 rounded"
              style={{ color: "#00a892" }}
            >
              fy
            </span>
          </Link>

          {/* Footer links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {footerLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks?.map((social) => (
              <Link
                key={social?.label}
                href={social?.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social?.label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00a892] transition-colors group"
              >
                <social.icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-white/30 text-sm">
            &copy; 2026 Bodhify. All rights reserved.
          </p>
        </div>
      </div>
      {/* Big brand text */}
      <div className="overflow-hidden">
        <h1
          className="text-center font-black font-poppins select-none"
          style={{
            fontSize: "clamp(4rem, 15vw, 14rem)",
            color: "rgba(255,255,255,0.04)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          BODHIFY
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
