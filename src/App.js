import Home from './pages/Home';
import WUFO from './pages/WUFO';
import NOVA from './pages/NOVA';
import BUF from './pages/BUF';
import {
  Routes,
  Route
} from "react-router-dom";
import ReactGA from 'react-ga';

function App() {
  const TRACKING_ID = "UA-160932642-1";
  ReactGA.initialize(TRACKING_ID);
  
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/wufo" exact element={<WUFO />} />
      <Route path="/nova" exact element={<NOVA />} />
      <Route path="/buf" exact element={<BUF />} />
    </Routes>
  );
}

export default App;
