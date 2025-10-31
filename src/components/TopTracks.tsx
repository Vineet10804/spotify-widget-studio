import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album4 from "@/assets/album-4.jpg";

const tracks = [
  { id: 1, title: "Midnight Echoes", artist: "The Neon Dreams", plays: "1.2M", image: album1 },
  { id: 2, title: "Electric Sunset", artist: "Cyber Waves", plays: "987K", image: album2 },
  { id: 3, title: "Starlight Journey", artist: "Luna Symphony", plays: "856K", image: album3 },
  { id: 4, title: "Urban Rhythm", artist: "Metro Beats", plays: "743K", image: album4 },
];

export const TopTracks = () => {
  return (
    <Card className="glass-card p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-primary">Top</span> Tracks
      </h2>
      
      <div className="space-y-3">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className="group flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 smooth-transition cursor-pointer animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="text-muted-foreground font-mono w-6 text-center">
              {index + 1}
            </span>
            
            <div className="relative">
              <img
                src={track.image}
                alt={track.title}
                className="w-12 h-12 rounded-md"
              />
              <div className="absolute inset-0 bg-black/60 rounded-md opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate">{track.title}</p>
              <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
            </div>
            
            <span className="text-sm text-muted-foreground">{track.plays}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
