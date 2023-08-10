import melanie from "../assets/void.webp"
import music from "../assets/void.mp3"
import {useState} from "react";

const melanie_music = new Audio(music)

export const ImageMiscPlayer = ({setPause, setStart}) => {
    const [isPlay, setIsPlay] = useState(true);

    function handleMusic() {
        setStart(true)
        setIsPlay(!isPlay)
        if (isPlay) {
            melanie_music.play()
        } else {
            melanie_music.pause()
            setPause(true)
        }
    }

    function handleReset() {
        melanie_music.currentTime = 0
        setStart(false)
    }

    return (
        <div className={'absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}>
            <img onClick={() => {
                handleMusic()
            }} onDoubleClick={() => {
                handleReset()
            }} src={melanie} className={"rounded-full w-96 mt-52 hover:scale-105 cursor-pointer"} alt=""/>
        </div>
    )
}
