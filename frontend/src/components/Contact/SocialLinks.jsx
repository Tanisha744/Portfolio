import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const links = [
  {
    icon: FaGithub,
    url: "https://github.com/Tanisha744",
  },
  {
    icon: FaLinkedin,
    url: "https://linkedin.com/in/tanisha-tech",
  },
  {
    icon: FaEnvelope,
    url: "mailto:tanisha94.60@gmail.com",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4 pt-4">

      {links.map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            text-xl
            text-white
            transition-all
            hover:-translate-y-1
            hover:border-cyan-400
            hover:text-cyan-400"
          >
            <Icon />
          </a>
        );
      })}

    </div>
  );
};

export default SocialLinks;