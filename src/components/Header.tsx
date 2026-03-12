
import React from "react";
import { useGods } from "@/context/GodsContext";
import { useNavigate } from "react-router-dom";
import Logo from "./header/Logo";
import MobileLogo from "./header/MobileLogo";
import MobileMenu from "./header/MobileMenu";
import NavigationButtons from "./header/NavigationButtons";

const Header: React.FC = () => {
  const { stage } = useGods();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    window.history.pushState(null, '', "/");
  };

  return (
    <header className="w-full py-2 sm:py-4 md:py-6 px-2 sm:px-3 md:px-6 relative z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Desktop Logo - hidden on mobile */}
          <div className="hidden sm:block">
            <Logo />
          </div>

          {/* Mobile: Logo + Menu in a single row */}
          <div className="flex sm:hidden items-center justify-between w-full">
            <MobileLogo />
            <MobileMenu handleHomeClick={handleHomeClick} />
          </div>
          
          {/* Desktop Navigation */}
          <NavigationButtons handleHomeClick={handleHomeClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
