import './App.css';
import {ImageMiscPlayer} from "./components/ImageMiscPlayer";
import {RandomDropper} from "./components/RandomDropper";
import {useState} from "react";

function App() {
    const [isClicked, setIsClicked] = useState(false)
    const [isStarted, setIsStarted] = useState(false)
    return (
        <div>
            <ImageMiscPlayer setPause={setIsClicked} setStart={setIsStarted}/>
            <RandomDropper isPause={isClicked} isStarted={isStarted}/>
        </div>
    );
}

export default App;
