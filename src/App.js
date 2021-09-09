import Home from './pages/Home';
import WUFO from './pages/WUFO';
import LaWUFA from './pages/LaWUFA';
import BUF from './pages/BUF';
import {
  Switch,
  Route
} from "react-router-dom";
import ReactGA from 'react-ga';

function App() {
  const TRACKING_ID = "UA-160932642-1";
  ReactGA.initialize(TRACKING_ID);
  
  return (
    <Switch>
      <Route path="/" exact component={() => <Home />} />
      <Route path="/wufo" exact component={() => <WUFO />} />
      <Route path="/lawufa" exact component={() => <LaWUFA />} />
      <Route path="/buf" exact component={() => <BUF />} />
    </Switch>
  );
}

export default App;
