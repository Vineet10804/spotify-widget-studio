import { Card } from "@/components/ui/card";
import { Play, Music2, Heart } from "lucide-react";
import { useMusic } from "@/contexts/MusicContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export const TopTracks = () => {
  const { allTracks, currentTrack, isPlaying, playTrack, toggleTrackLike } = useMusic();
  const { toast } = useToast();

  const handleTrackClick = (track: typeof allTracks[0]) => {
    playTrack(track);
    toast({
      title: "Now Playing",
      description: `${track.title} by ${track.artist}`,
      duration: 2000,
    });
  };

  return (
    <Card className="glass-card p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Music2 className="w-6 h-6 text-primary" />
        <span className="text-primary">Top</span> Tracks
      </h2>
      
      <div className="space-y-3">
        {allTracks.map((track, index) => {
          const isCurrentTrack = currentTrack.id === track.id;
          
          return (
            <div
              key={track.id}
              onClick={() => handleTrackClick(track)}
              className={`group flex items-center gap-4 p-3 rounded-lg smooth-transition cursor-pointer animate-slide-up ${
                isCurrentTrack 
                  ? 'bg-primary/10 border border-primary/20' 
                  : 'hover:bg-secondary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className={`font-mono w-6 text-center smooth-transition ${
                isCurrentTrack ? 'text-primary font-bold' : 'text-muted-foreground'
              }`}>
                {isCurrentTrack && isPlaying ? (
                  <Music2 className="w-4 h-4 animate-pulse-glow" />
                ) : (
                  index + 1
                )}
              </span>
              
              <div className="relative">
                <img
                  src={track.image}
                  alt={track.title}
                  className={`w-12 h-12 rounded-md smooth-transition ${
                    isCurrentTrack ? 'ring-2 ring-primary spotify-glow' : ''
                  }`}
                />
                <div className={`absolute inset-0 bg-black/60 rounded-md smooth-transition flex items-center justify-center ${
                  isCurrentTrack && isPlaying ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <Play className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <p className={`font-semibold truncate smooth-transition ${
                  isCurrentTrack ? 'text-primary' : 'text-foreground'
                }`}>
                  {track.title}
                </p>
                <p className={`text-sm truncate smooth-transition ${
                  isCurrentTrack ? 'text-primary/70' : 'text-muted-foreground'
                }`}>
                  {track.artist}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 smooth-transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTrackLike(track.id);
                    toast({
                      title: track.liked ? "Removed from Liked Songs" : "Added to Liked Songs",
                      description: track.title,
                      duration: 2000,
                    });
                  }}
                >
                  <Heart className={`w-4 h-4 smooth-transition ${track.liked ? 'fill-primary text-primary' : ''}`} />
                </Button>
                
                <span className={`text-sm font-medium ${
                  isCurrentTrack ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {track.plays}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
