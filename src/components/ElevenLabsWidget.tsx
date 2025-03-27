
import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string;
        'api-key'?: string;
      };
    }
  }
}

const ElevenLabsWidget: React.FC = () => {
  useEffect(() => {
    // Add the API key to the widget once it's loaded
    const interval = setInterval(() => {
      const widget = document.querySelector('elevenlabs-convai');
      if (widget) {
        widget.setAttribute('api-key', 'sk_d4ba415b39332fdbfc89f2ee1eb32967ed650b6c1b71b4a2');
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="relative">
        <button 
          className="bg-resurrection-primary hover:bg-resurrection-accent text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          onClick={() => {
            const widget = document.querySelector('elevenlabs-convai');
            if (widget) {
              // Toggle the visibility of the widget
              if (widget.style.display === 'none') {
                widget.style.display = 'block';
              } else {
                widget.style.display = 'none';
              }
            }
          }}
        >
          <Sparkles className="h-6 w-6 animate-pulse" />
        </button>
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          1
        </div>
      </div>
      
      <elevenlabs-convai 
        agent-id="yZ98Wmjs6VqYsGE5F07R"
        style={{ 
          display: 'none',
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          width: '350px',
          height: '500px',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          zIndex: 50
        }}
      ></elevenlabs-convai>
    </div>
  );
};

export default ElevenLabsWidget;
