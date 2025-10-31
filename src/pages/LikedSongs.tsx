import { useMusic } from "@/contexts/MusicContext";
import { Heart, Play, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const LikedSongs = () => {
  const { likedTracks, currentTrack, isPlaying, playTrack, toggleTrackLike } = useMusic();
  const { toast } = useToast();

  const handlePlayAll = () => {
    if (likedTracks.length > 0) {
      playTrack(likedTracks[0]);
      toast({
        title: "Playing Liked Songs",
        description: "Starting from the first track",
        duration: 2000,
      });
    }
  };

  const handleTrackClick = (track: typeof likedTracks[0]) => {
    playTrack(track);
    toast({
      title: "Now Playing",
      description: `${track.title} by ${track.artist}`,
      duration: 2000,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-card p-8 flex items-end gap-6 animate-slide-up">
        <div className="w-52 h-52 bg-gradient-to-br from-primary/40 to-primary/20 rounded-lg flex items-center justify-center spotify-glow">
          <Heart className="w-24 h-24 text-primary fill-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase text-muted-foreground mb-2">Playlist</p>
          <h1 className="text-6xl font-bold mb-4">Liked Songs</h1>
          <p className="text-foreground/80">
            {likedTracks.length} {likedTracks.length === 1 ? 'song' : 'songs'}
          </p>
        </div>
      </div>

      {/* Controls */}
      {likedTracks.length > 0 && (
        <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <Button
            size="lg"
            className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 spotify-glow"
            onClick={handlePlayAll}
          >
            <Play className="w-6 h-6 ml-1" />
          </Button>
        </div>
      )}

      {/* Tracks List */}
      {likedTracks.length > 0 ? (
        <Card className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-1">
            {/* Header */}
            <div className="grid grid-cols-[auto,2fr,1fr,1fr,auto] gap-4 px-4 py-2 text-sm text-muted-foreground border-b border-border/50">
              <span>#</span>
              <span>Title</span>
              <span>Album</span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
              </span>
              <span className="w-5"></span>
            </div>

            {/* Tracks */}
            {likedTracks.map((track, index) => {
              const isCurrentTrack = currentTrack.id === track.id;

              return (
                <div
                  key={track.id}
                  className={`grid grid-cols-[auto,2fr,1fr,1fr,auto] gap-4 px-4 py-3 rounded-lg smooth-transition cursor-pointer group ${
                    isCurrentTrack
                      ? "bg-primary/10"
                      : "hover:bg-secondary/50"
                  }`}
                  onClick={() => handleTrackClick(track)}
                >
                  <span className={`text-center w-5 ${isCurrentTrack ? 'text-primary font-bold' : 'text-muted-foreground group-hover:text-foreground'}`}>
                    {isCurrentTrack && isPlaying ? (
                      <Play className="w-4 h-4 fill-primary" />
                    ) : (
                      index + 1
                    )}
                  </span>

                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={track.image}
                      alt={track.title}
                      className="w-10 h-10 rounded"
                    />
                    <div className="min-w-0">
                      <p className={`font-semibold truncate ${isCurrentTrack ? 'text-primary' : 'text-foreground'}`}>
                        {track.title}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {track.artist}
                      </p>
                    </div>
                  </div>

                  <span className="text-muted-foreground self-center truncate">
                    {track.album}
                  </span>

                  <span className="text-muted-foreground self-center">
                    {track.duration}
                  </span>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-100 self-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTrackLike(track.id);
                      toast({
                        title: "Removed from Liked Songs",
                        description: track.title,
                        duration: 2000,
                      });
                    }}
                  >
                    <Heart className="w-4 h-4 fill-primary text-primary" />
                  </Button>
                </div>
              );
            })}
          </div>
        </Card>
      ) : (
        <Card className="glass-card p-16 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-2">No liked songs yet</h2>
          <p className="text-muted-foreground">
            Songs you like will appear here
          </p>
        </Card>
      )}
    </div>
  );
};

export default LikedSongs;
