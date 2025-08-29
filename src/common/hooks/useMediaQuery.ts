import { useEffect, useState } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useMediaQuery() {
  const [matches, setMatches] = useState({
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2xl: false,
  });

  useEffect(() => {
    function checkScreen() {
      const width = window.innerWidth;

      setMatches({
        isSm: width >= breakpoints.sm,
        isMd: width >= breakpoints.md,
        isLg: width >= breakpoints.lg,
        isXl: width >= breakpoints.xl,
        is2xl: width >= breakpoints["2xl"],
      });
    }

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return matches;
}
