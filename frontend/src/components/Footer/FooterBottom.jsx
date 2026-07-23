const FooterBottom = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-500 md:flex-row">

      <p>
        © {new Date().getFullYear()} Tanisha. All Rights Reserved.
      </p>

      <p>
        Designed & Developed with ❤️ using React.
      </p>

    </div>
  );
};

export default FooterBottom;