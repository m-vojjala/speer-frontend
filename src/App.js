import './App.css';
import Slider from './Slider';
import { HashRouter, Switch, Route } from "react-router-dom";
import Pricing from "./Pricing"
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* react router */}
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Slider} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
