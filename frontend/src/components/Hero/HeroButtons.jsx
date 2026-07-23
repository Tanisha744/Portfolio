import PrimaryButton from "../Buttons/PrimaryButton";

const HeroButtons = () => {
  const downloadResume = () => {
    // We'll connect the PDF later
    alert("Resume will be added soon!");
  };

  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <PrimaryButton>
        View Projects
      </PrimaryButton>

      <button
        onClick={downloadResume}
        className="
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-7
        py-3
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-violet-500
        hover:bg-violet-500/20"
      >
        Download Resume
      </button>
    </div>
  );
};

export default HeroButtons;