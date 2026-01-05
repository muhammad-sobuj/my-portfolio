import { useEffect } from "react";
import ModernNavigation from "./ModernNavigation";
import AnimatedFooter from "./AnimatedFooter";

const Layout = ({ children }) => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 min-h-screen overflow-x-hidden max-w-full">
      <ModernNavigation />
      <main className="pt-14 relative w-full  overflow-x-hidden">
        {children}
      </main>
      <AnimatedFooter />
      <div className="fixed top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent dark:from-transparent opacity-50 dark:opacity-0 pointer-events-none"></div>
    </div>
  );
};

export default Layout;
