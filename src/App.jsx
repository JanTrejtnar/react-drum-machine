import { useState } from 'react';
import './App.css';
// import components
import DrumPad from './components/DrumPad';
import DrumDisplay from './components/DrumDisplay';
// import audio
import Heater1 from './sounds/Heater-1.mp3';
import Heater2 from './sounds/Heater-2.mp3';
import Heater3 from './sounds/Heater-3.mp3';
import Heater4_1 from './sounds/Heater-4_1.mp3';
import Heater6 from './sounds/Heater-6.mp3';
import KickNHat from './sounds/Kick_n_Hat.mp3';
import RP4Kick from './sounds/RP4_KICK_1.mp3';
import DscOH from './sounds/Dsc_Oh.mp3';
import CevH2 from './sounds/Cev_H2.mp3';


function App() {
  const [currentSound, setCurrentSound] = useState('')

  return (
    <>
      <div id="drum-machine">
        <DrumDisplay text={currentSound}/>

        <div id="pads">
          <DrumPad letter="Q" setCurrentSound={setCurrentSound} sound="Heater 1" url={Heater1}/>
          <DrumPad letter="W" setCurrentSound={setCurrentSound} sound="Heater 2" url={Heater2}/>
          <DrumPad letter="E" setCurrentSound={setCurrentSound} sound="Heater 3" url={Heater3}/>

          <DrumPad letter="A" setCurrentSound={setCurrentSound} sound="Heater 4_1" url={Heater4_1}/>
          <DrumPad letter="S" setCurrentSound={setCurrentSound} sound="Heater 6" url={Heater6}/>
          <DrumPad letter="D" setCurrentSound={setCurrentSound} sound="Kick n Hat" url={KickNHat}/>

          <DrumPad letter="Z" setCurrentSound={setCurrentSound} sound="RP4 Kick" url={RP4Kick}/>
          <DrumPad letter="X" setCurrentSound={setCurrentSound} sound="Dsc OH" url={DscOH}/>
          <DrumPad letter="C" setCurrentSound={setCurrentSound} sound="Cev H2" url={CevH2}/>
        </div>
      </div>
    </>
  )
}

export default App