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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-8">
          {/* Logo */}

          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer text-xl font-bold tracking-wide sm:text-2xl"
          >
            Tanisha<span className="text-violet-500"></span>
          </motion.h1>

          {/* Desktop */}

          <div className="hidden items-center gap-6 lg:gap-10 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={700}
                offset={-80}
                spy={true}
                activeClass="text-violet-400"
                className="cursor-pointer text-sm text-gray-300 transition hover:text-white lg:text-base"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-white md:hidden"
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
            className="fixed right-0 top-0 z-40 h-screen w-[80%] max-w-xs bg-[#050816]/95 backdrop-blur-xl p-8 md:hidden"
          >
            <div className="mt-16 flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  duration={700}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-xl transition hover:text-violet-400"
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