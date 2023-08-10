import gun from "../assets/gun.png"
import eyes from "../assets/eyes.png"
import {useState} from "react";

export const RandomDropper = () => {
    const [randomImg, setRandomImg] = useState(gun);
    const [position, setPosition] = useState({x: 500, y: 500});

    return (
        <canvas>
        </canvas>
    )
}
