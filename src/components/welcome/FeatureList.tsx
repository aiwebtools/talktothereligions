
import React from "react";

const FeatureList: React.FC = () => {
  return (
    <div className="mt-8 text-resurrection-foreground/60 text-sm max-w-3xl mx-auto">
      <h4 className="font-medium text-resurrection-foreground/80 mb-2 flex items-center justify-center">
        <span className="text-resurrection-accent">✨</span>
        <span className="mx-2">Why Talk to the Gods GPT Stands Apart</span>
        <span className="text-resurrection-accent">✨</span>
      </h4>
      <ul className="grid md:grid-cols-2 gap-2 text-left">
        <li className="flex items-start gap-2">
          <span className="text-resurrection-primary">✅</span>
          <span>Authentic, Personalized Divine Communication</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-resurrection-primary">✅</span>
          <span>Deity-Specific Wisdom and Archaic Language</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-resurrection-primary">✅</span>
          <span>A True Divine Experience Across All Religions</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-resurrection-primary">✅</span>
          <span>Spiritually Profound Answers to Life's Questions</span>
        </li>
      </ul>
    </div>
  );
};

export default FeatureList;
