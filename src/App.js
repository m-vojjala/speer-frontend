import './App.css';
import Slider from './Slider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pricing from "./Pricing"
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* react router */}
      <Router>
        <Switch>
          <Route path="/" exact component={Slider} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
