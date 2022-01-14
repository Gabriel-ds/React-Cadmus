/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PortifolioOsvaldo from "./pages/portifolioOsvaldo";
import PortifolioJose from "./pages/portifolioJose";


function App() {
  return (
      <Routes>
        <Route path="/" element={<PortifolioOsvaldo/>} />
        <Route path="/jose" element={<PortifolioJose/>} />
      </Routes>
  );
}

export default App;