import tanishaPhoto from "../../assets/images/Tanisha.jpeg";

const ProfileCard = () => {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl"
    >
      <div className="mb-6 flex justify-center">
        <div
          className="
          flex
          h-72
          w-72
          items-center
          justify-center
          rounded-3xl
          border
          border-dashed
          border-white/20
          bg-slate-900"
        >
          <img
            src={tanishaPhoto}
            alt="Tanisha"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>

      <h3 className="text-center text-2xl font-bold">
        Tanisha
      </h3>

      <p className="mt-2 text-center text-cyan-400">
        Software Engineer
      </p>
    </div>
  );
};

export default ProfileCard;