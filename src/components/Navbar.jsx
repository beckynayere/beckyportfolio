import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-gray-900/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand - Optional */}
          <div className="flex items-center">
            <a 
              href="#home" 
              className="text-xl font-bold text-white hover:text-gray-300 transition-colors"
            >
              Nayere
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative text-gray-300 hover:text-white transition-colors font-medium group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-0'}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-0'}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};