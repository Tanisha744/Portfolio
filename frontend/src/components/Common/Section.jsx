const Section = ({
  id,
  title,
  subtitle,
  children,
}) => {
  return (
    <section
      id={id}
      className="relative mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-16 text-center">
        <p className="mb-3 text-cyan-400 uppercase tracking-[6px]">
          {subtitle}
        </p>

        <h2 className="text-5xl font-bold">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
};

export default Section;