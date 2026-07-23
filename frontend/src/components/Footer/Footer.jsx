import FooterTop from "./FooterTop";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070B17]">

      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <FooterTop />

        <FooterLinks />

        <FooterBottom />

      </div>

    </footer>
  );
};

export default Footer;