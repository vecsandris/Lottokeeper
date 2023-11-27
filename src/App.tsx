import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing.tsx";
import Games from "./Games.tsx";
import Player from "./Player.tsx";
import Admin from "./Admin.tsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/games" element={<Games/>}/>
            <Route path="/player" element={<Player/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
