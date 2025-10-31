import { NowPlaying } from "@/components/NowPlaying";
import { TopTracks } from "@/components/TopTracks";
import { RecentlyPlayed } from "@/components/RecentlyPlayed";
import { Music } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-4 animate-slide-up">
          <div className="flex items-center justify-center gap-3">
            <Music className="w-12 h-12 text-primary spotify-glow animate-pulse-glow" />
            <h1 className="text-5xl font-bold">
              Spotify <span className="text-primary">Widgets</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beautiful music visualizations with modern design
          </p>
        </header>

        {/* Now Playing Widget */}
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <NowPlaying />
        </div>

        {/* Grid Layout for Other Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <TopTracks />
          </div>
          
          <div className="animate-slide-up lg:col-span-2" style={{ animationDelay: '0.3s' }}>
            <RecentlyPlayed />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p>Built with React, TypeScript, and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
