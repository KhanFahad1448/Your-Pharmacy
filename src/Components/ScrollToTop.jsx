// src/Components/ScrollToTop.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Track scroll position to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle manual scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Scroll-To-Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 
          hover:bg-blue-700 active:scale-95 focus:outline-none
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default ScrollToTop;
