import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import navigation from "../../data/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          {/* Logo */}

          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold cursor-pointer tracking-wide"
          >
            Tanisha<span className="text-violet-500">.</span>
          </motion.h1>

          {/* Desktop */}

          <div className="hidden md:flex gap-10">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={700}
                offset={-80}
                spy={true}
                activeClass="text-violet-400"
                className="cursor-pointer text-gray-300 hover:text-white transition duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl"
          >
            {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed right-0 top-0 w-72 h-screen bg-[#050816] backdrop-blur-xl z-40 p-10 md:hidden"
          >
            <div className="mt-20 flex flex-col gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  duration={700}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl cursor-pointer hover:text-violet-400 transition"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;