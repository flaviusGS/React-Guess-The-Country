import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Game } from "./pages/Game/Game";
import { Welcome } from "./pages/Welcome/Welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
