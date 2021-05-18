
import "./Red.css";
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
export default function Red(){
  const history = useHistory()
return (
  <div className="red">
    <div>
    <h1 className="head">SUPERIOR SOUND</h1>
    <p className="child">Experience live versions of your favourite songs.</p>
    <Button className="button-demo" variant="outlined" style={{color:'#CD5555',backgroundColor:'white',width:'12%',height:'8%',borderRadius:'30px',fontSize:'1.25rem'}}>
 <strong>SEE DEMO</strong>
</Button>
<Button onClick={()=>history.push('/pricing')} variant="outlined" style={{color:'#CD5555',backgroundColor:'white',width:'12%',height:'7%',borderRadius:'30px',fontSize:'1.25rem',bottom : '65vh',left:'30vw',
    position: 'relative'}}>
  <strong>TRY IT OUT</strong>
</Button>
</div>

<div style={{left:'20%',bottom:'40%',position:'relative'}}>

<img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFSx_whbA_vGPekCi_qR-Fg_-xyNLRetUAw&usqp=CAU" alt="speakers" />
<img className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFSx_whbA_vGPekCi_qR-Fg_-xyNLRetUAw&usqp=CAU" alt="speakers" />
</div>



</div>

)
}


