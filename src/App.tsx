import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { MusicProvider } from "./contexts/MusicContext";
import Index from "./pages/Index";
import LikedSongs from "./pages/LikedSongs";
import Artists from "./pages/Artists";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MusicProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen w-full bg-background">
            <Sidebar />
            <main className="flex-1 p-8 overflow-auto">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/liked" element={<LikedSongs />} />
                <Route path="/artists" element={<Artists />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </MusicProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
