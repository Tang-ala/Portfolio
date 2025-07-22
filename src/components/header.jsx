import React, { useState, useEffect } from "react";
import moi from "./../assets/images/me.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Accueil", icon: "fa-home" },
    { id: "about", label: "À propos", icon: "fa-user" },
    { id: "services", label: "Services", icon: "fa-cogs" },
    { id: "projects", label: "Projets", icon: "fa-folder-open" },
    { id: "skills", label: "Compétences", icon: "fa-code" },
    { id: "contact", label: "Contact", icon: "fa-envelope" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Scroll spy
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      if (window.scrollY < 50) {
        setActiveSection("home");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop && 
            scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    // Throttled scroll
    let timeoutId = null;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 50);
    };

    window.addEventListener("scroll", throttledScroll);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", handleResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleNavClick = (section, event) => {
    event.preventDefault();
    setActiveSection(section);
    setIsMenuOpen(false);

    const targetSection = document.getElementById(section);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-indigo-50 backdrop-blur-md shadow-lg border-b border-blue-100/50"
            : "bg-gradient-to-l from-blue-50 to-indigo-50 shadow-md"
        }`}
      >
        <div className="container mx-auto px-6 sm:px-6 lg:px-8 max-w-[70%]">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-200 overflow-hidden">
                  <img src={moi} alt="Tanjona" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse shadow-sm"></div>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Tanjona
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">Développeur Full-Stack</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 hover:bg-blue-50 hover:scale-105 group ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50 shadow-sm"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-6 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        : "w-0 h-0.5 bg-blue-500 rounded-full group-hover:w-4"
                    }`}
                  ></div>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                isMenuOpen ? "bg-blue-50" : ""
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className={`block h-0.5 w-full bg-gray-700 rounded transition-all duration-300 ${
                      isMenuOpen && i === 0 ? "rotate-45 translate-y-2" :
                      isMenuOpen && i === 1 ? "opacity-0" :
                      isMenuOpen && i === 2 ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                ))}
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}>
            <div className="pt-4 pb-2 border-t border-blue-100">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-102 ${
                      activeSection === item.id
                        ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600 shadow-sm"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen ? "slideIn 0.3s ease-out forwards" : "none",
                    }}
                  >
                    <i className={`fas ${item.icon} mr-3 text-sm transition-colors duration-200 ${
                      activeSection === item.id ? "text-blue-600" : "text-gray-400"
                    }`}></i>
                    {item.label}
                    {activeSection === item.id && (
                      <i className="fas fa-chevron-right ml-auto text-blue-600 text-xs animate-pulse"></i>
                    )}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </>
  );
};

export default Header;