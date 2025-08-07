import React from 'react';
import { Play, Maximize, Volume2, BookOpen } from 'lucide-react';

type VideoPlayerProps = {
  title: string;
  thumbnail?: string;
  duration?: number;
  onPlay?: () => void;
  className?: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  title, 
  thumbnail, 
  duration,
  onPlay,
  className = ''
}) => {
  return (
    <div className={`relative aspect-video bg-black group ${className}`}>
      {/* Video thumbnail or placeholder */}
      {thumbnail ? (
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
          <BookOpen size={48} className="text-gray-700/30" />
        </div>
      )}

      {/* Play button overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
        onClick={onPlay}
      >
        <div className="rounded-full h-16 w-16 bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/40 transition-all">
          <Play size={24} className="text-primary ml-1" />
        </div>
      </div>

      {/* Video controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Play size={20} className="text-white cursor-pointer" />
            <div className="text-white text-sm">
              {duration ? `${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}` : '00:00'} / {duration ? `${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}` : '00:00'}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Volume2 size={20} className="text-white cursor-pointer" />
            <Maximize size={20} className="text-white cursor-pointer" />
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-600 rounded-full mt-2">
          <div className="h-full bg-primary rounded-full" style={{ width: '0%' }}></div>
        </div>
      </div>

      {/* Video title */}
      <div className="absolute top-4 left-4 right-4 text-white">
        <div className="bg-black/40 backdrop-blur-sm p-2 rounded-lg inline-block">
          <p className="text-sm font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
