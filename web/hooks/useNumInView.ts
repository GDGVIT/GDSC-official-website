import { RefObject, useEffect, useState } from "react";
import { useScreenWidth } from "./useScreenWidth";

type Props = {
  ref: RefObject<HTMLDivElement>;
  arr: any[];
};

export const useNumInView = ({ ref, arr }: Props) => {
  const [numFrameInView, setNumFrameInView] = useState(0);
  const screenWidth = useScreenWidth();
  useEffect(() => {
    if (ref.current) {
      const scrollWidth = ref.current.scrollWidth;
      console.log(scrollWidth);
      const numFame = arr.length;
      const widthPerFrame = parseFloat(scrollWidth + "") / numFame;
      const numFrameInView = Math.ceil(screenWidth / widthPerFrame);
      setNumFrameInView(numFrameInView);
    }
  }, [screenWidth, ref.current]);
  return numFrameInView;
};
