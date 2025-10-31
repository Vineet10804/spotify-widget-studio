import { createContext, useContext, useState, ReactNode } from "react";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album4 from "@/assets/album-4.jpg";

export interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  currentTime: string;
  progress: number;
  plays?: string;
  time?: string;
  image: string;
  liked?: boolean;
}

export interface Artist {
  id: number;
  name: string;
  genre: string;
  followers: string;
  image: string;
}

const allTracks: Track[] = [
  {
    id: 1,
    title: "Midnight Echoes",
    artist: "The Neon Dreams",
    album: "Synthwave Nights",
    duration: "4:23",
    currentTime: "2:14",
    progress: 52,
    plays: "1.2M",
    image: album1,
  },
  {
    id: 2,
    title: "Electric Sunset",
    artist: "Cyber Waves",
    album: "Digital Horizons",
    duration: "3:47",
    currentTime: "1:23",
    progress: 37,
    plays: "987K",
    image: album2,
  },
  {
    id: 3,
    title: "Starlight Journey",
    artist: "Luna Symphony",
    album: "Cosmic Dreams",
    duration: "5:12",
    currentTime: "2:45",
    progress: 53,
    plays: "856K",
    image: album3,
  },
  {
    id: 4,
    title: "Urban Rhythm",
    artist: "Metro Beats",
    album: "Street Sounds",
    duration: "3:28",
    currentTime: "1:56",
    progress: 56,
    plays: "743K",
    image: album4,
  },
];

interface MusicContextType {
  currentTrack: Track;
  isPlaying: boolean;
  isLiked: boolean;
  allTracks: Track[];
  likedTracks: Track[];
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  toggleLike: () => void;
  toggleTrackLike: (trackId: number) => void;
  nextTrack: () => void;
  previousTrack: () => void;
  seekTo: (percentage: number) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [tracks, setTracks] = useState<Track[]>(allTracks);
  const [currentTrack, setCurrentTrack] = useState<Track>(allTracks[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  const likedTracks = tracks.filter(track => track.liked);

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    
    // Update the track in the tracks array
    setTracks(tracks.map(t => 
      t.id === currentTrack.id ? { ...t, liked: newLikedState } : t
    ));
    setCurrentTrack({ ...currentTrack, liked: newLikedState });
  };

  const toggleTrackLike = (trackId: number) => {
    setTracks(tracks.map(t => 
      t.id === trackId ? { ...t, liked: !t.liked } : t
    ));
    
    // If it's the current track, update isLiked state
    if (currentTrack.id === trackId) {
      setIsLiked(!isLiked);
      setCurrentTrack({ ...currentTrack, liked: !currentTrack.liked });
    }
  };

  const nextTrack = () => {
    const currentIndex = allTracks.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % allTracks.length;
    setCurrentTrack(allTracks[nextIndex]);
    setIsPlaying(true);
  };

  const previousTrack = () => {
    const currentIndex = allTracks.findIndex((t) => t.id === currentTrack.id);
    const prevIndex = currentIndex === 0 ? allTracks.length - 1 : currentIndex - 1;
    setCurrentTrack(allTracks[prevIndex]);
    setIsPlaying(true);
  };

  const seekTo = (percentage: number) => {
    const totalSeconds = parseInt(currentTrack.duration.split(':')[0]) * 60 + 
                        parseInt(currentTrack.duration.split(':')[1]);
    const newSeconds = Math.floor((percentage / 100) * totalSeconds);
    const minutes = Math.floor(newSeconds / 60);
    const seconds = newSeconds % 60;
    
    setCurrentTrack({
      ...currentTrack,
      currentTime: `${minutes}:${seconds.toString().padStart(2, '0')}`,
      progress: percentage,
    });
  };

  return (
    <MusicContext.Provider
      value={{
        currentTrack,
        isPlaying,
        isLiked,
        allTracks: tracks,
        likedTracks,
        playTrack,
        togglePlay,
        toggleLike,
        toggleTrackLike,
        nextTrack,
        previousTrack,
        seekTo,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used within MusicProvider");
  }
  return context;
};
