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

  const navLinks = ["home", "about", "techstack", "projects", "contact"];

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
          className="p-2 bg-[#fdf6ec]/80 border border-[#e8d8c3] rounded-lg shadow-md backdrop-blur-md"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="text-[#3b3a30]" /> : <Menu className="text-[#3b3a30]" />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-16 right-4 bg-[#fdf6ec] text-[#3b3a30] rounded-lg shadow-lg border border-[#e8d8c3] p-4 space-y-4 md:hidden z-50">
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              activeClass="text-[#567568] font-semibold"
              className="block cursor-pointer text-md font-medium transition-all"
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
