import { useEffect, useState } from "react";


const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useMediaQuery() {
  const [screen, setScreen] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'base'>('base')

  useEffect(() => {
    function checkScreen() {
      const width = window.innerWidth;
      if (width >= breakpoints["2xl"]) setScreen("2xl");
      else if (width >= breakpoints.xl) setScreen("xl");
      else if (width >= breakpoints.lg) setScreen("lg");
      else if (width >= breakpoints.md) setScreen("md");
      else if (width >= breakpoints.sm) setScreen("sm");
      else if (width < breakpoints.sm) setScreen("xs");
      else setScreen("base");
    }

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return screen;
}