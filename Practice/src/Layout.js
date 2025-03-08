import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const menuVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.5 },
  }),
};

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar with Motion */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="bg-gradient-to-r from-purple-700 to-blue-600 p-4 shadow-lg fixed w-full top-0 z-50"
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.h1 className="text-white text-3xl font-extrabold tracking-wide">
            Eswar 🚀
          </motion.h1>

          {/* Desktop Navigation with Staggered Links */}
          <ul className="hidden md:flex space-x-8">
            {["Home", "Blogs", "Contact"].map((text, index) => (
              <motion.li
                key={text}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <Link
                  to={text.toLowerCase()}
                  className="text-white text-lg font-medium hover:text-yellow-300 transition-all duration-300"
                >
                  {text}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu with Animation */}
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="md:hidden bg-gray-800 bg-opacity-90 backdrop-blur-lg absolute top-16 left-0 w-full text-center py-4"
          >
            <ul className="space-y-4">
              {["Home", "Blogs", "Contact"].map((text, index) => (
                <motion.li
                  key={text}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Link
                    to={text.toLowerCase()}
                    className="text-white text-lg hover:text-yellow-300 block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.nav>

      {/* Ensure content does not hide behind fixed navbar */}
      <div className="mt-20">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
