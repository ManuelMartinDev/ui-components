import { useState, useEffect } from "react";

export const useMediaQuery = (resolution: string) => {
  const [match, setMatch] = useState<boolean>(false);

  console.log(match);
  useEffect(() => {
    const media = window.matchMedia(`(max-width:${resolution})`);
    if (media.matches !== match) {
      setMatch(media.matches);
    }
    const listener = (e: MediaQueryListEvent) => setMatch(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [match, resolution]);
  return match;
};
