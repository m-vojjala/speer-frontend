import "./Red.css";
import { useState, useRef } from "react"
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

export default function Red() {
  const history = useHistory();
  // setting initial value with useState
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  const [playing, setPlaying] = useState(false);

  const myRef = useRef();
  // function to start the audio
  const startAudio = () => {
    myRef.current.play();
    setPlaying(true);
  };
  // function to pause the audio
  const pauseAudio = () => {
    myRef.current.pause();
    setPlaying(false);
  };

  return (
    //  setting horizontal and vertical coordinates  
    <div className="red" onMouseMove={event => {
      setCursorX(event.pageX);
      setCursorY(event.pageY);
    }}>
      <div>
        <h1 className="head">SUPERIOR SOUND</h1>
        <p className="child">Experience live versions of your favourite songs.</p>
        {/* demo button */}
        <Button className="button-demo" variant="outlined" style={{ width: '12%', height: '8%', color: '#CD5555', backgroundColor: 'white', borderRadius: '30px', fontSize: '1.25rem' }}>
          <strong>SEE DEMO</strong>
        </Button>
        {/* try it out button */}
        <Button className="btn" onClick={() => history.push('/pricing')} variant="outlined" style={{
          backgroundColor: 'white', width: '12%', color: '#CD5555', height: '7%', borderRadius: '30px', fontSize: '1.25rem', bottom: '65vh', left: '30vw',
          position: 'relative'
        }}>
          <strong>TRY IT OUT</strong>
        </Button>
      </div>

      <audio
        ref={myRef}
        src="https://file-examples-com.github.io/uploads/2017/11/file_example_WAV_1MG.wav"
      />
      {/* if playing is false onclick audio is paused and if palying id true audio is played */}
      {playing ? <div onClick={pauseAudio} className="speaker-div">
        <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFSx_whbA_vGPekCi_qR-Fg_-xyNLRetUAw&usqp=CAU" alt="speakers" />
        <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFSx_whbA_vGPekCi_qR-Fg_-xyNLRetUAw&usqp=CAU" alt="speakers" />
      </div> : <div onClick={startAudio} className="speaker-div">
        <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFSx_whbA_vGPekCi_qR-Fg_-xyNLRetUAw&usqp=CAU" alt="speakers" />
        <img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFSx_whbA_vGPekCi_qR-Fg_-xyNLRetUAw&usqp=CAU" alt="speakers" />
      </div>}
      {/* customized cursor */}
      <div className="cursor" style={{ left: cursorX + 'px', top: cursorY + 'px' }}></div>
    </div>
  )
}


