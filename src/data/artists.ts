import { Artist } from "@/contexts/MusicContext";
import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";
import artist4 from "@/assets/artist-4.jpg";

export const artists: Artist[] = [
  {
    id: 1,
    name: "The Neon Dreams",
    genre: "Electronic / Synthwave",
    followers: "2.4M",
    image: artist1,
  },
  {
    id: 2,
    name: "Cyber Waves",
    genre: "Electronic / House",
    followers: "1.8M",
    image: artist2,
  },
  {
    id: 3,
    name: "Luna Symphony",
    genre: "Indie Pop / Dream Pop",
    followers: "1.5M",
    image: artist3,
  },
  {
    id: 4,
    name: "Metro Beats",
    genre: "Hip-Hop / Rap",
    followers: "3.1M",
    image: artist4,
  },
];
