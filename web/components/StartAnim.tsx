'use client'

import { Player, PlayerEvent } from "@lottiefiles/react-lottie-player";
import LoadingAnimation from "../animations/loading_anim.json";
import { useEffect } from "react";
type Props = {
    onComplete: () => void
}
const StartAnim = ({ onComplete }: Props) => {

    useEffect(() => {
        const timeout = setTimeout(() => { onComplete() }, 15100)
        return () => {
            clearTimeout(timeout)
        }
    })

    return <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-dark -z-10"><Player
        src={LoadingAnimation}
        autoplay
        style={{ minHeight: '100vh', minWidth: '100vw', aspectRatio: 16 / 9, zIndex: 10, backgroundColor: "transparent" }}

    /></div>
}


export default StartAnim;
