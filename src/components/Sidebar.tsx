import { Home, Heart, Mic2, Library, Plus, Music } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useMusic } from "@/contexts/MusicContext";

export const Sidebar = () => {
  const { likedTracks } = useMusic();

  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/liked", icon: Heart, label: "Liked Songs", badge: likedTracks.length },
    { to: "/artists", icon: Mic2, label: "Your Artists" },
  ];

  return (
    <aside className="w-64 bg-card/50 backdrop-blur-xl border-r border-border flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <Music className="w-8 h-8 text-primary spotify-glow" />
          <h1 className="text-xl font-bold">
            <span className="text-primary">Spotify</span>
          </h1>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg smooth-transition group ${
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={`w-5 h-5 smooth-transition ${
                      isActive ? "spotify-glow" : ""
                    }`}
                  />
                  <span className="flex-1">{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-border">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 smooth-transition">
          <Plus className="w-5 h-5" />
          <span>Create Playlist</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg w-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 smooth-transition">
          <Library className="w-5 h-5" />
          <span>Your Library</span>
        </button>
      </div>
    </aside>
  );
};
