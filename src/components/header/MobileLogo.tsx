
import React from "react";
import { Wand2 } from "lucide-react";

const MobileLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <h1 className="text-lg font-serif text-white/90 flex items-center">
        <span className="mr-1">Talk to the</span>
        <Wand2 className="mx-1 h-4 w-4 text-[#9b87f5]" strokeWidth={1.5} />
        <span className="text-[#9b87f5]">Gods GPT</span>
      </h1>
    </div>
  );
};

export default MobileLogo;
