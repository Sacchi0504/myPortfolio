import { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const navLinks = ["home", "about", "techstack", "experience", "education", "projects", "contact"];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full transition-all duration-300 z-50 border backdrop-blur-md
        ${scrolling ? "bg-[#fdf6ec]/90 shadow-md" : "bg-[#fdf6ec]/70 shadow-sm"} 
        border-[#e8d8c3] hidden md:flex space-x-8`}
      >
        {navLinks.map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="text-[#567568] font-semibold"
            className="cursor-pointer text-md font-medium relative group text-[#3b3a30] transition-all"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#567568] transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      {/* Mobile Navbar */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          className="p-3 bg-[#fdf6ec]/90 border border-[#e8d8c3] rounded-full shadow-md backdrop-blur-md transition-transform active:scale-95"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="text-[#3b3a30]" size={24} /> : <Menu className="text-[#3b3a30]" size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-20 left-4 right-4 bg-[#fdf6ec]/95 backdrop-blur-lg text-[#3b3a30] rounded-2xl shadow-xl border border-[#e8d8c3] p-6 space-y-6 md:hidden z-50 flex flex-col items-center animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              activeClass="text-[#567568] font-bold scale-110"
              className="block cursor-pointer text-xl font-medium transition-all hover:text-[#567568]"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
