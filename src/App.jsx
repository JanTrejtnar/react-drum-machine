import { useState } from 'react';
import './App.css';
// import components
import DrumPad from './components/DrumPad';
import DrumDisplay from './components/DrumDisplay';

function App() {
  const [currentSound, setCurrentSound] = useState('')

  return (
    <>
      <div id="drum-machine">
        <DrumDisplay text={currentSound}/>

        <div id="pads">
          <DrumPad letter="Q" setCurrentSound={setCurrentSound} sound="Heater 1" url="./src/sounds/Heater-1.mp3"/>
          <DrumPad letter="W" setCurrentSound={setCurrentSound} sound="Heater 2" url="./src/sounds/Heater-2.mp3"/>
          <DrumPad letter="E" setCurrentSound={setCurrentSound} sound="Heater 3" url="./src/sounds/Heater-3.mp3"/>

          <DrumPad letter="A" setCurrentSound={setCurrentSound} sound="Heater 4_1" url="./src/sounds/Heater-4_1.mp3"/>
          <DrumPad letter="S" setCurrentSound={setCurrentSound} sound="Heater 6" url="./src/sounds/Heater-6.mp3"/>
          <DrumPad letter="D" setCurrentSound={setCurrentSound} sound="Kick n Hat" url="./src/sounds/Kick_n_Hat.mp3"/>

          <DrumPad letter="Z" setCurrentSound={setCurrentSound} sound="RP4 Kick" url="./src/sounds/RP4_KICK_1.mp3"/>
          <DrumPad letter="X" setCurrentSound={setCurrentSound} sound="Dsc OH" url="./src/sounds/Dsc_Oh.mp3"/>
          <DrumPad letter="C" setCurrentSound={setCurrentSound} sound="Cev H2" url="./src/sounds/Cev_H2.mp3"/>
        </div>
      </div>
    </>
  )
}

export default App