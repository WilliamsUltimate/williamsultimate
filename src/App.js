import Home from './pages/Home';
import WUFO from './pages/WUFO';
import LaWUFA from './pages/LaWUFA';
import BUF from './pages/BUF';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
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
