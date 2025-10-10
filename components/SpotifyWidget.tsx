"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Music, ExternalLink, Radio } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import WaveBars from "@/components/WaveBars";

// Custom hook to fetch Spotify currently playing song
const useSpotify = (refreshInterval = 3000) => {
  const [track, setTrack] = useState(null);
  const [albumUrl, setAlbumUrl] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [songUrl, setSongUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch(
          "https://siddharth25op-spotify-status.vercel.app/api/now-playing",
        );

        if (response.status === 204 || response.status > 400) {
          setTrack(null);
          setAlbumUrl("");
          setArtist("");
          setSongUrl("");
          setTitle("");
          setError(null);

          return;
        }
        const data = await response.json();

        setTrack(data);
        setAlbumUrl(data.albumImageUrl);
        setArtist(data.artist);
        setSongUrl(data.songUrl);
        setTitle(data.title);
        setError(null);
      } catch (err) {
        setError("Failed to fetch Spotify data" + err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  return { track, title, artist, songUrl, albumUrl, isLoading, error };
};

const SpotifyWidget = () => {
  const { title, artist, songUrl, albumUrl, isLoading, error } = useSpotify();

  const isPlaying = !isLoading && !error && songUrl && albumUrl;

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Card className="relative bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden group">
        {/* Animated background glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/20 via-transparent to-[#1ed760]/20 blur-2xl"
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Scan line effect when playing */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              className="absolute inset-0 pointer-events-none rounded-xl"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(29, 185, 84, 0.2) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%)",
                backgroundSize: "200% 200%",
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </AnimatePresence>

        <CardContent className="p-6 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <motion.div
                animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
                className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm"
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Music className="w-4 h-4 text-primary" />
              </motion.div>
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {isPlaying ? "Now Playing" : "Spotify"}
                </p>
              </div>
            </div>

            {/* Live indicator */}
            <AnimatePresence>
              {isPlaying && (
                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 px-2 py-1 rounded-full bg-[#1DB954]/20 border border-[#1DB954]/40"
                  exit={{ opacity: 0, scale: 0.8 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    className="relative flex h-2 w-2"
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1DB954]" />
                  </motion.span>
                  <span className="text-xs font-mono text-[#1DB954]">LIVE</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Main Content */}
          <div className="flex items-center gap-5">
            {/* Album Art with Enhanced Effects */}
            <motion.div
              className="relative w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden shadow-2xl shadow-primary/20 border-2 border-primary/10 group-hover:border-primary/30 transition-all duration-500"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? (
                <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/50 animate-pulse flex items-center justify-center">
                  <Music className="w-12 h-12 text-muted-foreground/50 animate-pulse" />
                </div>
              ) : error || !songUrl || !albumUrl ? (
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  className="w-full h-full bg-gradient-to-br from-secondary to-secondary/50 flex flex-col items-center justify-center gap-2"
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Radio className="w-10 h-10 text-muted-foreground/50" />
                  <span className="text-xs text-muted-foreground/50 font-mono">
                    Offline
                  </span>
                </motion.div>
              ) : (
                <>
                  <img
                    alt={`Album art for ${title}`}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    height={112}
                    src={albumUrl}
                    width={112}
                  />
                  {/* Play overlay on hover */}
                  <a
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 cursor-pointer"
                    href={songUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink className="w-8 h-8 text-white" />
                  </a>
                </>
              )}
            </motion.div>

            {/* Track Info with Animations */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                  >
                    <div className="space-y-2">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        className="h-6 bg-secondary rounded-lg w-4/5"
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        className="h-5 bg-secondary rounded-lg w-3/5"
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      />
                    </div>
                  </motion.div>
                ) : error || !songUrl ? (
                  <motion.div
                    key="error"
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                    exit={{ opacity: 0, y: -10 }}
                    initial={{ opacity: 0, y: 10 }}
                  >
                    <p className="font-grotesk text-xl font-bold text-foreground">
                      Not Playing
                    </p>
                    <p className="font-mono text-base text-muted-foreground flex items-center gap-2">
                      <span>Waiting for music...</span>
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ♪
                      </motion.span>
                    </p>
                  </motion.div>
                ) : (
                  <motion.a
                    key="playing"
                    animate={{ opacity: 1, y: 0 }}
                    className="block group/track cursor-pointer space-y-2"
                    exit={{ opacity: 0, y: -10 }}
                    href={songUrl}
                    initial={{ opacity: 0, y: 10 }}
                    rel="noopener noreferrer"
                    target="_blank"
                    whileHover={{ x: 4 }}
                  >
                    {/* Song title with marquee effect for long titles */}
                    <div className="relative overflow-hidden">
                      <motion.p
                        className="font-grotesk text-xl font-bold text-foreground group-hover/track:text-primary transition-colors flex items-center gap-2"
                        transition={{ duration: 0.3 }}
                        whileHover={{ x: title.length > 20 ? -20 : 0 }}
                      >
                        <span className="truncate">{title}</span>
                        <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-0 group-hover/track:opacity-100 transition-opacity" />
                      </motion.p>
                    </div>

                    {/* Artist name */}
                    <p className="font-mono text-base text-muted-foreground group-hover/track:text-foreground transition-colors flex items-center gap-2">
                      <span className="truncate">{artist}</span>
                    </p>

                    {/* Wave bars indicator */}
                    <div className="pt-2">
                      <WaveBars />
                    </div>
                  </motion.a>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Progress bar simulation (optional decorative element) */}
          {/* {isPlaying && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 space-y-2"
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-1 bg-secondary/50 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: ["0%", "100%"] }}
                  className="h-full bg-gradient-to-r from-primary via-[#1DB954] to-primary"
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          )} */}
        </CardContent>

        {/* Bottom Spotify branding */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </Card>
    </motion.div>
  );
};

export default SpotifyWidget;
