
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { companyInfo, navLinks } from "../../data/content";

const Navbar = () => {
  // 📚 STATE MANAGEMENT with useState Hook

  const [isOpen, setIsOpen] = useState(false); // Mobile menu open/closed
  const [isScrolled, setIsScrolled] = useState(false); // Navbar background change on scroll

  // 📚 useEffect Hook - runs code AFTER component renders

  useEffect(() => {
    // This function runs when user scrolls
    const handleScroll = () => {
      // If scrolled more than 50px, change navbar style
      if (window.scrollY > 50) {
        setIsScrolled(true); // Update state
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // 📚 CLEANUP FUNCTION (very important!)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array = run once on mount

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle between true/false
    // This is called "state update" - React will re-render with new state
  };

  // Function to close menu when link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // 📚 RETURN JSX


  return (
    // The 'nav' element - this is the navbar container
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-secondary
        ${
          // ? "bg-white shadow-lg" // When scrolled
          // : "bg-white" // At top of page
          isScrolled ? "shadow-lg" : ""
        }
      `}

    >
      {/* <div className="container-custom"> */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO SECTION */}
          <div className="flex-shrink-0">
            <a href="#home" className="block" onClick={closeMenu}>
              <img
                src="/nexapro-blue.png"
                alt="Nexapro Technologies"
                className="h-28 w-auto"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">

            {navLinks.map((link) => (
              <a
                key={link.name}
 
                href={link.href}
                className="text-white hover:text-primary transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
               <div className="md:hidden">
            <button
              onClick={toggleMenu} // 📚 EVENT HANDLER
          
              className="text-white hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {/* 📚 CONDITIONAL RENDERING with ternary operator */}
              {/* condition ? if-true : if-false */}
              {isOpen ? (
                <FaTimes size={24} /> // Show X when menu is open
              ) : (
                <FaBars size={24} /> // Show hamburger when menu is closed
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container-custom py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={closeMenu} // Close menu when link is clicked
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// 📚 EXPORT
