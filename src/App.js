import "./App.css";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import ReadGame from "./component/ReadGame";
import EditGame from "./component/EditGame";
import ReadSingleGame from "./component/ReadSingleGame";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/read-game" element={<ReadGame />} />
          <Route path="/read-single-game/:id" element={<ReadSingleGame />} />
          <Route path="/edit-game" element={<EditGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
