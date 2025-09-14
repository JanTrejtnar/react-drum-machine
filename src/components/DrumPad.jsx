import { useEffect } from 'react';

export default function DrumPad({letter, sound, url, setCurrentSound }) {
    const playSound = () => {
        const audio = new Audio(url);
        audio.play();
        setCurrentSound(sound)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key.toUpperCase() === letter) {
                document.getElementById(letter).focus();
                playSound();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown); //cleanup
    })

    

    return (
        <button className="drum-pad" onClick={playSound} id={letter}>
            {letter}
            <audio id={letter} src={url}></audio>
        </button>  
    )
}