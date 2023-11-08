import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TallOuterContainer = styled.div.attrs(({ dynamicHeight }) => ({
  style: { height: `${dynamicHeight}px` },
}))`
  position: relative;
  width: 100%;
`;

const StickyInnerContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer = styled.div.attrs(({ translateX }) => ({
  style: { transform: `translate(${translateX}px, -50%)` },
}))`
  position: absolute;
  will-change: transform;
  top: 60%;
`;

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh - 160;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight((dynamicHeight * 4) / 3);
};

const applyScrollListener = (ref, setTranslateX, mainRef) => {
  if (!mainRef) return;
  const elem = mainRef.current;
  elem?.addEventListener("scroll", () => {
    // console.log(ref);
    const offsetTop = -ref.current?.offsetTop;
    setTranslateX((offsetTop * 3) / 4);
    // console.log(offsetTop);
  });
};

const HorizontalScroll = ({ title, children, style, mainRef }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX, mainRef);
  }, []);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <motion.div className=" w-full pt-[15vh] text-dark" style={style}>
          <div className="w-[100vw] lg:w-[30vw] lg:min-w-[600px] mx-auto">
            <h1 className="uppercase font-sans text-[3rem] font-extrabold text-center tracking-wider">
              {title}
            </h1>
          </div>
        </motion.div>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
};

export default HorizontalScroll;
