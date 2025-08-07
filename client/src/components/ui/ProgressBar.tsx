
import { useState, useEffect } from 'react';

type ProgressBarProps = {
  progress: number;
  height?: number;
  showPercentage?: boolean;
  className?: string;
};

const ProgressBar = ({ 
  progress, 
  height = 4, 
  showPercentage = false,
  className = '' 
}: ProgressBarProps) => {
  const [displayedProgress, setDisplayedProgress] = useState(0);
  
  // Animate the progress bar
  useEffect(() => {
    const duration = 600; // animation duration in ms
    const increment = progress / (duration / 16.67); // 60fps approx
    
    let currentProgress = 0;
    let lastUpdate = Date.now();
    
    const updateProgress = () => {
      const now = Date.now();
      const delta = now - lastUpdate;
      lastUpdate = now;
      
      currentProgress += increment * (delta / 16.67);
      
      if (currentProgress >= progress) {
        setDisplayedProgress(progress);
        return;
      }
      
      setDisplayedProgress(currentProgress);
      requestAnimationFrame(updateProgress);
    };
    
    requestAnimationFrame(updateProgress);
    
    return () => {
      currentProgress = progress;
    };
  }, [progress]);
  
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full bg-gray-100 rounded-full overflow-hidden" style={{ height: `${height}px` }}>
        <div
          className="bg-primary transition-all duration-300 rounded-full"
          style={{ 
            width: `${displayedProgress}%`,
            height: '100%'
          }}
        />
      </div>
      
      {showPercentage && (
        <div className="mt-1 text-xs text-gray-600 font-medium">
          {Math.round(displayedProgress)}% complete
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
