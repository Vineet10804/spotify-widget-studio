import { artists } from "@/data/artists";
import { Card } from "@/components/ui/card";
import { Play, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Artists = () => {
  const { toast } = useToast();
  const [followedArtists, setFollowedArtists] = useState<number[]>([]);

  const toggleFollow = (artistId: number, artistName: string) => {
    const isFollowing = followedArtists.includes(artistId);
    
    if (isFollowing) {
      setFollowedArtists(followedArtists.filter(id => id !== artistId));
      toast({
        title: "Unfollowed",
        description: artistName,
        duration: 2000,
      });
    } else {
      setFollowedArtists([...followedArtists, artistId]);
      toast({
        title: "Following",
        description: artistName,
        duration: 2000,
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-slide-up">
        <h1 className="text-4xl font-bold mb-2">Your Top Artists</h1>
        <p className="text-foreground/80">
          Only visible to you
        </p>
      </div>

      {/* Artists Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artists.map((artist, index) => {
          const isFollowing = followedArtists.includes(artist.id);

          return (
            <Card
              key={artist.id}
              className="glass-card p-5 smooth-transition hover:bg-secondary/50 cursor-pointer group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full aspect-square object-cover rounded-full shadow-lg group-hover:shadow-xl smooth-transition"
                />
                <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 smooth-transition flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center spotify-glow">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>

              <div className="text-center mb-4">
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary smooth-transition">
                  {artist.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {artist.genre}
                </p>
                <p className="text-xs text-muted-foreground/70">
                  {artist.followers} followers
                </p>
              </div>

              <Button
                variant={isFollowing ? "secondary" : "default"}
                size="sm"
                className="w-full smooth-transition"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFollow(artist.id, artist.name);
                }}
              >
                <UserPlus className="w-4 h-4 mr-2" />
                {isFollowing ? "Following" : "Follow"}
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Popular Tracks Section */}
      <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-2xl font-bold mb-4">Popular Tracks from Your Artists</h2>
        <Card className="glass-card p-6">
          <div className="text-center py-12 text-muted-foreground">
            <p>Play any artist to see their popular tracks here</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Artists;
