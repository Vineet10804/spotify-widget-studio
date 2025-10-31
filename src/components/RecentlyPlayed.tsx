import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";

const recentTracks = [
  { id: 1, title: "Midnight Echoes", artist: "The Neon Dreams", time: "2 hours ago", image: album1 },
  { id: 2, title: "Electric Sunset", artist: "Cyber Waves", time: "5 hours ago", image: album2 },
  { id: 3, title: "Starlight Journey", artist: "Luna Symphony", time: "1 day ago", image: album3 },
];

export const RecentlyPlayed = () => {
  return (
    <Card className="glass-card p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Clock className="w-6 h-6 text-primary" />
        Recently Played
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recentTracks.map((track, index) => (
          <div
            key={track.id}
            className="group glass-card p-4 hover:bg-secondary/50 smooth-transition cursor-pointer animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <img
                src={track.image}
                alt={track.title}
                className="w-full aspect-square object-cover group-hover:scale-110 smooth-transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
            </div>
            
            <h3 className="font-semibold truncate mb-1">{track.title}</h3>
            <p className="text-sm text-muted-foreground truncate mb-2">{track.artist}</p>
            <p className="text-xs text-muted-foreground/60">{track.time}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
