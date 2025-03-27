
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

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
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed z-[999]"
          style={{
            bottom: isMobile ? '80px' : '80px',
            right: isMobile ? '5px' : '20px',
            width: isMobile ? '90vw' : '350px',
            height: '500px',
            maxHeight: isMobile ? '70vh' : '500px',
            willChange: 'transform', // Helps with performance
            transform: 'translateZ(0)', // Forces GPU acceleration
          }}
        >
          <elevenlabs-convai 
            agent-id="yZ98Wmjs6VqYsGE5F07R"
            style={{ 
              display: 'block',
              width: '100%',
              height: '100%',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
              willChange: 'transform', // Helps with performance
              transform: 'translateZ(0)', // Forces GPU acceleration
              backfaceVisibility: 'hidden', // Reduces flickering
            }}
          />
        </div>
      )}
      
      <div className="fixed bottom-4 right-4 z-[1000]" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        <Button
          onClick={toggleWidget}
          variant="divine"
          size="default"
          className="rounded-full shadow-lg transition-all duration-300"
          aria-label="Toggle divine chat"
        >
          <MessageCircle className="h-6 w-6 mr-2" />
          <span className="text-white font-semibold animate-pulse">LIVE</span>
        </Button>
      </div>
    </>
  );
};

export default ElevenLabsWidget;
