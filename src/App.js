import './App.css';
import Slider from './Slider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pricing from "./Pricing"
import Sidebar from './Sidebar';
import Perks from './Perks';

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* react router */}
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Slider} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/perks" component={Perks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
