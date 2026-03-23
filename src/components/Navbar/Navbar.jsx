// 📚 LEARNING: This is a React FUNCTIONAL COMPONENT
// Components are reusable pieces of UI - like LEGO blocks for your website

// Import useState - a React Hook that lets components "remember" things
// INTERVIEW TIP: "Hooks are functions that let you use React features in functional components"
import { useState, useEffect } from "react";

// Import icons from react-icons library (we use Font Awesome icons)
import { FaBars, FaTimes } from "react-icons/fa";

// Import our data (separating data from components is a BEST PRACTICE)
import { companyInfo, navLinks } from "../../data/content";

// 📚 COMPONENT DEFINITION
// This is a functional component - it's just a JavaScript function that returns JSX
const Navbar = () => {
  // 📚 STATE MANAGEMENT with useState Hook
  // WHAT IS STATE? State is data that can change over time
  // WHY? When state changes, React automatically re-renders the component

  // INTERVIEW QUESTION: "What's the difference between props and state?"
  // ANSWER: Props are passed FROM parent TO child (read-only)
  //         State is managed WITHIN a component (can be changed)

  const [isOpen, setIsOpen] = useState(false); // Mobile menu open/closed
  const [isScrolled, setIsScrolled] = useState(false); // Navbar background change on scroll

  // 📚 useEffect Hook - runs code AFTER component renders
  // INTERVIEW TIP: "useEffect lets you perform side effects in components"
  // Common uses: API calls, event listeners, timers

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
    // This runs when component unmounts (removes event listener)
    // INTERVIEW TIP: Always clean up event listeners to prevent memory leaks!
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array = run once on mount

  // INTERVIEW QUESTION: "What does the dependency array do?"
  // ANSWER: It controls when useEffect runs
  // [] = run once on mount
  // [value] = run when 'value' changes
  // no array = run after every render (usually bad!)

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
  // JSX looks like HTML but it's actually JavaScript
  // Behind the scenes: <div> becomes React.createElement('div', ...)

  return (
    // The 'nav' element - this is the navbar container
    <nav
      // 📚 CONDITIONAL CLASSES (IMPORTANT INTERVIEW TOPIC!)
      // We use template literals (backticks) to dynamically add classes
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-secondary
        ${
          // ? "bg-white shadow-lg" // When scrolled
          // : "bg-white" // At top of page
          isScrolled ? "shadow-lg" : ""
        }
      `}
      // INTERVIEW TIP: "I use conditional rendering to change UI based on state"
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
                src="/nexapro-logo.png"
                alt="Nexapro Technologies"
                className="h-28 w-auto"
              />
            </a>
          </div>

          {/* DESKTOP NAVIGATION */}
          {/* 📚 RESPONSIVE DESIGN: hidden on mobile (md:flex = show on medium+ screens) */}
          <div className="hidden md:flex items-center space-x-8">
            {/* 📚 ARRAY.MAP - Super important for React! */}
            {/* We loop through navLinks array and create a link for each item */}
            {/* INTERVIEW QUESTION: "How do you render lists in React?" */}
            {/* ANSWER: "Use .map() to transform array into JSX elements" */}

            {navLinks.map((link) => (
              <a
                key={link.name}
                // 📚 KEY PROP - React needs this for efficient rendering!
                // INTERVIEW TIP: "Keys help React identify which items changed"
                // Use unique, stable IDs - don't use array index as key in production!

                href={link.href}
                className="text-white hover:text-primary transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          {/* 📚 CONDITIONAL RENDERING: Only show on small screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu} // 📚 EVENT HANDLER
              // INTERVIEW TIP: "In React, we use onClick (camelCase), not onclick"
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
      {/* 📚 CONDITIONAL RENDERING: Only render when isOpen is true */}
      {/* INTERVIEW QUESTION: "What are different ways to conditionally render?" */}
      {/* ANSWER: && operator, ternary operator, if statements before return */}

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

// 📚 EXPORT
// This makes the component available to other files
// INTERVIEW TIP: Default export = import Navbar from './Navbar'
//                Named export = import { Navbar } from './Navbar'
export default Navbar;

/* 
🎯 KEY CONCEPTS COVERED IN THIS COMPONENT:

1. ✅ Functional Components
2. ✅ useState Hook (managing state)
3. ✅ useEffect Hook (side effects, cleanup)
4. ✅ Event Handlers (onClick)
5. ✅ Conditional Rendering (ternary, &&)
6. ✅ Array.map() for lists
7. ✅ Key prop importance
8. ✅ Props usage (data from content.js)
9. ✅ Responsive design with Tailwind
10. ✅ State updates triggering re-renders

COMMON INTERVIEW QUESTIONS THIS ANSWERS:
- "What are React hooks?"
- "What's the difference between props and state?"
- "How do you handle events in React?"
- "How do you render lists?"
- "When does a component re-render?"
- "What are side effects in React?"
*/
