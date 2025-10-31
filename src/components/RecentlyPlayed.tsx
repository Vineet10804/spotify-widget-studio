import { Card } from "@/components/ui/card";
import { Clock, Play } from "lucide-react";
import { useMusic } from "@/contexts/MusicContext";
import { useToast } from "@/hooks/use-toast";

const recentTimes = ["2 hours ago", "5 hours ago", "1 day ago", "2 days ago"];

export const RecentlyPlayed = () => {
  const { allTracks, currentTrack, playTrack } = useMusic();
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
        <Clock className="w-6 h-6 text-primary" />
        Recently Played
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allTracks.map((track, index) => {
          const isCurrentTrack = currentTrack.id === track.id;
          
          return (
            <div
              key={track.id}
              onClick={() => handleTrackClick(track)}
              className={`group glass-card p-4 smooth-transition cursor-pointer animate-slide-up ${
                isCurrentTrack 
                  ? 'ring-2 ring-primary spotify-glow bg-primary/5' 
                  : 'hover:bg-secondary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full aspect-square object-cover group-hover:scale-110 smooth-transition"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent smooth-transition flex items-center justify-center ${
                  isCurrentTrack ? 'opacity-70' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center spotify-glow group-hover:scale-110 smooth-transition">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
              
              <h3 className={`font-semibold truncate mb-1 smooth-transition ${
                isCurrentTrack ? 'text-primary' : 'text-foreground'
              }`}>
                {track.title}
              </h3>
              <p className={`text-sm truncate mb-2 smooth-transition ${
                isCurrentTrack ? 'text-primary/70' : 'text-muted-foreground'
              }`}>
                {track.artist}
              </p>
              <p className="text-xs text-muted-foreground/70 font-medium">{recentTimes[index]}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
