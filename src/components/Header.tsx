
import React, { useState } from "react";
import { useGods } from "@/context/GodsContext";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "./header/Logo";
import MobileLogo from "./header/MobileLogo";
import MobileMenu from "./header/MobileMenu";
import NavigationButtons from "./header/NavigationButtons";

const Header: React.FC = () => {
  const { stage } = useGods();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = () => {
    navigate("/");
    window.history.pushState(null, '', "/");
  };

  return (
    <header className="w-full py-3 sm:py-4 md:py-8 px-2 sm:px-3 md:px-6 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 mb-2 sm:mb-3 md:mb-5">
          <div className="text-center w-full sm:w-auto relative">
            <Logo />

            <div className="flex sm:hidden items-center justify-between w-full px-2">
              <MobileLogo />
              <MobileMenu handleHomeClick={handleHomeClick} />
            </div>
          </div>
          
          <NavigationButtons handleHomeClick={handleHomeClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
