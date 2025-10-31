import { Play, Pause, SkipBack, SkipForward, Heart } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import album1 from "@/assets/album-1.jpg";

export const NowPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="glass-card p-6 smooth-transition hover:scale-[1.02] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative group">
            <img
              src={album1}
              alt="Album Cover"
              className="w-24 h-24 rounded-lg shadow-lg smooth-transition group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white" />
              )}
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1 text-foreground">Midnight Echoes</h3>
            <p className="text-muted-foreground">The Neon Dreams</p>
            <p className="text-sm text-muted-foreground/60 mt-1">Synthwave Nights</p>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsLiked(!isLiked)}
            className="smooth-transition"
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
          </Button>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>2:14</span>
            <span>4:23</span>
          </div>
          <div className="h-1 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[52%] spotify-glow smooth-transition" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-primary rounded-full animate-equalizer spotify-glow"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  height: '20px'
                }}
              />
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-secondary smooth-transition">
              <SkipBack className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 spotify-glow smooth-transition"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-secondary smooth-transition">
              <SkipForward className="w-5 h-5" />
            </Button>
          </div>

          <div className="w-16" />
        </div>
      </div>
    </Card>
  );
};
