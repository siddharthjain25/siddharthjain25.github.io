"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Music, PauseCircle, PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Custom hook to fetch Spotify currently playing song (same as before)
const useSpotify = (refreshInterval = 30000) => {
  const [track, setTrack] = useState(null);
  // Corrected: Explicitly type the state as string | null
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        // Note: Remember to use a public URL for production
        const response = await fetch("https://spot.sylveon.live/now-playing");
        if (response.status === 204 || response.status > 400) {
          setTrack(null);
          // Set error back to null if the request is successful but no track is playing
          setError(null);
          return;
        }
        const data = await response.json();
        setTrack(data);
        setError(null); // Clear any previous errors on success
      } catch (err) {
        // Corrected: The value passed to setError is now a string, which is a valid type
        setError("Failed to fetch Spotify data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  return { track, isLoading, error };
};

const SpotifyWidget = () => {
  const { track, isLoading, error } = useSpotify();

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="max-w-sm w-full" // Changed from max-w-xs
    >
      <Card className="bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-xl border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden relative group">
        {/* Animated background glow */}
        <div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
          style={{
            background:
              "radial-gradient(circle at 10% 20%, rgba(30,215,96,0.1) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(29,185,84,0.1) 0%, transparent 50%)",
          }}
        />
        <CardContent className="p-6 relative z-10"> {/* Changed from p-4 sm:p-6 */}
          <div className="flex items-center gap-5"> {/* Changed from gap-4 */}
            {/* Album Art / Placeholder */}
            <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden shadow-lg border border-white/5"> {/* Changed from w-16 h-16 sm:w-20 sm:h-20 */}
              {isLoading ? (
                <div className="w-full h-full bg-gray-700 animate-pulse flex items-center justify-center">
                  <Music className="w-10 h-10 text-gray-400" /> {/* Changed from w-8 h-8 */}
                </div>
              ) : error || !track || !track.albumImageUrl ? (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <Music className="w-10 h-10 text-gray-500" /> {/* Changed from w-8 h-8 */}
                </div>
              ) : (
                <img
                  src={track.albumImageUrl}
                  alt={`Album art for ${track.title}`}
                  width={96} // Matched to w-24
                  height={96} // Matched to h-24
                  className="object-cover w-full h-full"
                />
              )}
            </div>

            {/* Track Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-mono text-sm text-primary/70 mb-1 flex items-center gap-2"> {/* Changed from text-xs */}
                Now Playing On Spotify
              </h3>
              {isLoading ? (
                <div className="space-y-2"> {/* Changed from space-y-1 */}
                  <div className="h-5 bg-gray-700 rounded w-4/5 animate-pulse"></div> {/* Sized up for larger font */}
                  <div className="h-4 bg-gray-700 rounded w-2/3 animate-pulse"></div>
                </div>
              ) : error || !track ? (
                <div className="space-y-1">
                  <p className="font-grotesk text-lg font-semibold text-white truncate">Not Playing</p> {/* Changed from default size */}
                  <p className="font-mono text-base text-muted-foreground">Stay tuned!</p> {/* Changed from text-sm */}
                </div>
              ) : (
                <a
                  href={track.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/track cursor-pointer"
                >
                  <p className="font-grotesk text-lg font-semibold text-white truncate group-hover/track:text-primary transition-colors"> {/* Changed from default size */}
                    {track.title}
                  </p>
                  <p className="font-mono text-base text-muted-foreground truncate group-hover/track:text-white transition-colors"> {/* Changed from text-sm */}
                    {track.artist}
                  </p>
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SpotifyWidget;