import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaPhoneAlt,
  FaComments,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [openProjects, setOpenProjects] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenProjects(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = ({ isActive }) =>
    `block py-2 hover:text-primary transition ${
      isActive ? "text-primary font-semibold" : "text-slate-600"
    }`;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-2">
            <FaBuilding className="text-primary text-2xl" />
            <span className="font-bold text-lg text-primary">
              Real Estate Project
            </span>
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-8 text-sm font-medium items-center">

            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            {/* PROJECTS DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpenProjects((p) => !p)}
                className="flex items-center gap-1 text-slate-600 hover:text-primary transition"
              >
                Projects
                <FaChevronDown
                  className={`text-xs transition ${
                    openProjects ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openProjects && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden z-50">
                  {[
                    "riverside-residences",
                    "skyline-heights",
                    "green-valley",
                    "ocean-view",
                  ].map((item) => (
                    <NavLink
                      key={item}
                      to={`/projects/${item}`}
                      onClick={() => setOpenProjects(false)}
                      className="block px-5 py-3 text-sm hover:bg-slate-50"
                    >
                      {item.replace("-", " ").toUpperCase()}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/aboutus" className={linkClass}>
              About Us
            </NavLink>

            <NavLink to="/faqs" className={linkClass}>
              FAQs
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="bg-primary hover:bg-primaryDark text-white px-6 py-2.5 rounded-md text-sm font-medium transition">
              Enquire Now
            </button>
            <FaPhoneAlt className="text-slate-500 hover:text-primary cursor-pointer" />
            <FaComments className="text-slate-500 hover:text-primary cursor-pointer" />
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-2xl text-slate-700"
            onClick={() => setIsMobileOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-lg text-primary">
              Real Estate Project
            </span>
            <button onClick={() => setIsMobileOpen(false)}>
              <FaTimes className="text-2xl" />
            </button>
          </div>

          <nav className="space-y-4 text-sm font-medium">
            <NavLink onClick={() => setIsMobileOpen(false)} to="/" className={linkClass}>
              Home
            </NavLink>

            {/* MOBILE PROJECTS */}
            <div>
              <button
                onClick={() => setOpenProjects((p) => !p)}
                className="flex items-center gap-2 text-slate-600"
              >
                Projects
                <FaChevronDown
                  className={`text-xs transition ${
                    openProjects ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openProjects && (
                <div className="ml-4 mt-2 space-y-2">
                  {[
                    "riverside-residences",
                    "skyline-heights",
                    "green-valley",
                    "ocean-view",
                  ].map((item) => (
                    <NavLink
                      key={item}
                      to={`/projects/${item}`}
                      onClick={() => {
                        setIsMobileOpen(false);
                        setOpenProjects(false);
                      }}
                      className="block text-slate-600"
                    >
                      {item.replace("-", " ").toUpperCase()}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink onClick={() => setIsMobileOpen(false)} to="/aboutus" className={linkClass}>
              About Us
            </NavLink>

            <NavLink onClick={() => setIsMobileOpen(false)} to="/faqs" className={linkClass}>
              FAQs
            </NavLink>

            <NavLink onClick={() => setIsMobileOpen(false)} to="/contact" className={linkClass}>
              Contact
            </NavLink>

            <button className="mt-6 w-full bg-primary text-white py-3 rounded-md">
              Enquire Now
            </button>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
