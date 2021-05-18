import {GradientButton} from "react-simple-gradient-button";
import { useHistory } from 'react-router-dom';
import "./Button.css";

export default function Button(){
  const history = useHistory()
return <div onClick={() => history.push('/pricing')}><GradientButton text={"Try it now"} gradientColor={{left: 219, mid: 333, right: 33}} /></div>
}