import { useEffect, useState } from "react";

export const useScreenWidth = () => {
  const [sWidth, setSWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSWidth(window.innerWidth);
      window.addEventListener("resize", (e: UIEvent) => {
        setSWidth(window.innerWidth);
      });
    }
  }, []);

  return sWidth;
};
