import { NowPlaying } from "@/components/NowPlaying";
import { TopTracks } from "@/components/TopTracks";
import { RecentlyPlayed } from "@/components/RecentlyPlayed";

const Index = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="space-y-2 animate-slide-up">
        <h1 className="text-4xl font-bold">Good evening</h1>
        <p className="text-foreground/80">
          Your personalized music dashboard
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
    </div>
  );
};

export default Index;
