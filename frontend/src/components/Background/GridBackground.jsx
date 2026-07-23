const GridBackground = () => {
  return (
    <>
      {/* Radial Glow */}
      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top,rgba(99,102,241,.18),transparent_60%)]
        -z-20"
      />

      {/* Grid */}
      <div
        className="
        absolute inset-0 -z-10 opacity-20
        bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)]
        bg-[size:50px_50px]"
      />
    </>
  );
};

export default GridBackground;