// import { motion } from "framer-motion";

// const stats = [
//   {
//     number: "11+",
//     label: "Months Internship",
//   },
//   {
//     number: "15+",
//     label: "Projects",
//   },
//   {
//     number: "4+",
//     label: "Hackathons",
//   },
// ];

// const HeroStats = () => {
//   return (
//     <div className="mt-14 grid grid-cols-3 gap-6">
//       {stats.map((item, index) => (
//         <motion.div
//           key={item.label}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.2 }}
//           viewport={{ once: true }}
//           className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
//         >
//           <h2 className="text-3xl font-bold text-cyan-400">
//             {item.number}
//           </h2>

//           <p className="mt-2 text-sm text-slate-400">
//             {item.label}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default HeroStats;