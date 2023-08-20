import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  top: 50%;
`;

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {
  const elem = document.getElementById('main-thing');
  elem?.addEventListener('scroll', () => {
    console.log(ref);
    const offsetTop = -ref.current?.offsetTop;
    setTranslateX(offsetTop);
    console.log(offsetTop);
  });
};

const HorizontalScroll = ({ title, children }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener('resize', resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef}>
        <div className=" top-0 left-0 w-full py-[8vh] text-dark">
          <motion.div
            initial={{ scale: 1.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 1 }}
            transition={{ duration: 1 }}
            className="w-[100vw] lg:w-[30vw] lg:min-w-[600px] mx-auto"
          >
            <h1 className="uppercase font-sans text-[3rem] font-extrabold text-center tracking-wider">
              {title}
            </h1>
          </motion.div>
        </div>
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          {children}
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>
  );
};

export default HorizontalScroll;
