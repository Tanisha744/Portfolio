// import { motion } from "framer-motion";
// import socialLinks from "../../data/socialLinks";

// const SocialIcons = () => {
//   return (
//     <div className="mt-12 flex gap-5">
//       {socialLinks.map((item) => {
//         const Icon = item.icon;

//         return (
//           <motion.a
//             key={item.id}
//             href={item.url}
//             target="_blank"
//             rel="noreferrer"
//             whileHover={{
//               y: -8,
//               scale: 1.12,
//             }}
//             whileTap={{
//               scale: .95,
//             }}
//             className="
//             rounded-full
//             border
//             border-white/10
//             bg-white/5
//             p-4
//             text-xl
//             backdrop-blur-xl
//             transition-all
//             duration-300
//             hover:border-cyan-400
//             hover:text-cyan-400"
//           >
//             <Icon />
//           </motion.a>
//         );
//       })}
//     </div>
//   );
// };

// export default SocialIcons;