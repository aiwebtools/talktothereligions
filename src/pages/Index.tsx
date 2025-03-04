
import React, { useEffect } from "react";
import { GodsProvider } from "@/context/GodsContext";
import Header from "@/components/Header";
import MainContent from "@/components/layout/MainContent";
import Particles from "@/components/Particles";

const Index: React.FC = () => {
  // Add some dynamic page title updates
  useEffect(() => {
    document.title = "Talk to the Gods GPT | Divine Connection";
  }, []);

  return (
    <GodsProvider>
      <div className="bg-resurrection-background min-h-screen relative overflow-hidden">
        <Particles />
        <div className="min-h-screen flex flex-col relative z-10">
          <Header />
          <MainContent />
        </div>
      </div>
    </GodsProvider>
  );
};

export default Index;
