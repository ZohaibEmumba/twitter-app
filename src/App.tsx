import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/moments" />
          <Route path="/noti" />
          <Route path="/msgs" />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
