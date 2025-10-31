import { Play, Pause, SkipBack, SkipForward, Heart, Volume2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMusic } from "@/contexts/MusicContext";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";

export const NowPlaying = () => {
  const { currentTrack, isPlaying, isLiked, togglePlay, toggleLike, nextTrack, previousTrack, seekTo } = useMusic();
  const { toast } = useToast();
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleNext = () => {
    nextTrack();
    toast({
      title: "Next Track",
      description: "Playing next song...",
      duration: 2000,
    });
  };

  const handlePrevious = () => {
    previousTrack();
    toast({
      title: "Previous Track",
      description: "Playing previous song...",
      duration: 2000,
    });
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const percentage = ((e.clientX - rect.left) / rect.width) * 100;
      seekTo(Math.max(0, Math.min(100, percentage)));
    }
  };

  const handleProgressDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const percentage = ((e.clientX - rect.left) / rect.width) * 100;
      seekTo(Math.max(0, Math.min(100, percentage)));
    }
  };

  return (
    <Card className="glass-card p-6 smooth-transition hover:scale-[1.02] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative group cursor-pointer" onClick={togglePlay}>
            <img
              src={currentTrack.image}
              alt="Album Cover"
              className="w-24 h-24 rounded-lg shadow-lg smooth-transition group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1" />
              )}
            </div>
            {isPlaying && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full animate-pulse-glow spotify-glow" />
            )}
          </div>
          
          <div className="flex-1 animate-slide-up">
            <h3 className="text-xl font-bold mb-1 text-foreground hover:text-primary smooth-transition cursor-pointer">
              {currentTrack.title}
            </h3>
            <p className="text-muted-foreground hover:underline cursor-pointer">{currentTrack.artist}</p>
            <p className="text-sm text-muted-foreground/60 mt-1">{currentTrack.album}</p>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLike}
              className="smooth-transition hover:scale-110"
            >
              <Heart className={`w-5 h-5 smooth-transition ${isLiked ? 'fill-primary text-primary animate-pulse-glow spotify-glow' : 'text-muted-foreground'}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="smooth-transition hover:scale-110"
            >
              <Volume2 className="w-5 h-5 text-muted-foreground" />
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm font-medium mb-2">
            <span className="text-foreground">{currentTrack.currentTime}</span>
            <span className="text-muted-foreground">{currentTrack.duration}</span>
          </div>
          <div 
            ref={progressBarRef}
            className="h-2 bg-secondary/80 rounded-full overflow-hidden cursor-pointer group hover:h-2.5 smooth-transition relative"
            onClick={handleProgressClick}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleProgressDrag}
          >
            <div 
              className="h-full bg-gradient-to-r from-primary to-primary/80 spotify-glow smooth-transition relative" 
              style={{ width: `${currentTrack.progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 smooth-transition shadow-lg" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isPlaying && [...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-primary rounded-full animate-equalizer spotify-glow"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  height: '20px'
                }}
              />
            ))}
            {!isPlaying && (
              <span className="text-sm text-muted-foreground">Paused</span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-secondary smooth-transition hover:scale-110 hover:text-primary"
              onClick={handlePrevious}
            >
              <SkipBack className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 spotify-glow smooth-transition hover:scale-110"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-secondary smooth-transition hover:scale-110 hover:text-primary"
              onClick={handleNext}
            >
              <SkipForward className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-16 text-right">
            <span className="text-xs text-muted-foreground">
              {currentTrack.plays}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
