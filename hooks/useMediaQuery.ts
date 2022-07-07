import { useState, useCallback, useEffect } from "react";

export const useMediaQuery = (width: string, checkMax = false) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    setTargetReached(Boolean(e.matches));
  }, []);

  useEffect(() => {
    const media = window.matchMedia(
      checkMax ? `(max-width: ${width})` : `(min-width: ${width})`
    );
    if (media.addEventListener) {
      media.addEventListener("change", updateTarget);

      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeEventListener("change", updateTarget);
    }
    // slightly older mobile Safari fallback
    media.addListener(updateTarget);
    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};
