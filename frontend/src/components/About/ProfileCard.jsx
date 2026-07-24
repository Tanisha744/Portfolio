import tanishaPhoto from "../../assets/images/Tanisha.jpeg";

const ProfileCard = () => {
  return (
    <div
      className="
rounded-3xl
border
border-white/10
bg-white/5
p-5
sm:p-8
backdrop-blur-xl"
    >
      <div className="mb-6 flex justify-center">
        <div
          className="
flex
h-56
w-56
sm:h-64
sm:w-64
lg:h-72
lg:w-72
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

      <h3 className="text-center text-xl font-bold sm:text-2xl">
        Tanisha
      </h3>

      <p className="mt-2 text-center text-cyan-400">
        Software Engineer
      </p>
    </div>
  );
};

export default ProfileCard;