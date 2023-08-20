'use client'

import { Player, PlayerEvent } from "@lottiefiles/react-lottie-player";
import LoadingAnimation from "../animations/loading_anim.json";
type Props = {
    onComplete: () => void
}
const StartAnim = ({ onComplete }: Props) => <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center"><Player
    src={LoadingAnimation}
    autoplay
    style={{ minHeight: '100%', minWidth: '100%', aspectRatio: 16 / 9, zIndex: -1 }}
    onEvent={(e) => {
        if (e === PlayerEvent.Complete) {
            onComplete()
        }
    }}
/></div>


export default StartAnim;