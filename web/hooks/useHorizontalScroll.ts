import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const controller = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctrl_el = controller.current;
    const ref = scrollRef.current;
    if (ctrl_el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY == 0) return;
        // console.log(ref?.offsetHeight);
        ref?.scrollTo({
          left: ref?.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      ctrl_el.addEventListener("wheel", onWheel);
      return () => ctrl_el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return { scrollRef, controller };
}
