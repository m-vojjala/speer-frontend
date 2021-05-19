import { GradientButton } from "react-simple-gradient-button";
import { useHistory } from 'react-router-dom';
import "./Button.css";

export default function Button() {
  // passing a history object into each route as a prop.
  const history = useHistory();

  // onclicking the button navigated to pricing page
  return <div onClick={() => history.push('/pricing')}><GradientButton text={"Try it now"} gradientColor={{ left: 219, mid: 333, right: 33 }} /></div>
}