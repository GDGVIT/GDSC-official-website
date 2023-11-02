'use client'

import { Player, PlayerEvent } from "@lottiefiles/react-lottie-player";
import LoadingAnimation from "../animations/loading_anim.json";
import LoadingMobile from "../animations/loading_mobile.json"
import { CSSProperties, useEffect, useState } from "react";
type Props = {
    onComplete: () => void;
    style?: CSSProperties
}
const StartAnim = ({ onComplete, style }: Props) => {
    const [potraitMode, setPotraitMode] = useState(false)
    const aspectPotrait = 416 / 739
    const aspectLandscape = 16 / 9
    const aspect = potraitMode ? aspectPotrait : aspectLandscape
    const [screenAspect, setScreenAspect] = useState(16 / 9)


    useEffect(() => {
        if (window) {
            setPotraitMode(window.innerWidth < window.innerHeight)
        }
    }, [window, window.innerWidth, window.innerHeight])


    useEffect(() => {
        const timeout = setTimeout(() => { onComplete() }, 15100)
        return () => {
            clearTimeout(timeout)
        }
    })

    return <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center overflow-hidden bg-white -z-10" style={style} ><Player
        src={potraitMode ? LoadingMobile : LoadingAnimation}
        autoplay
        style={{ minHeight: potraitMode ? (screenAspect < aspect ? innerHeight + 'px' : undefined) : (screenAspect < aspect ? innerHeight + 'px' : undefined), minWidth: potraitMode ? (screenAspect > aspect ? innerWidth + "px" : undefined) : (screenAspect > aspect ? innerWidth + "px" : undefined), aspectRatio: aspect, zIndex: 0, backgroundColor: "transparent" }}

    /></div>
}


export default StartAnim;
