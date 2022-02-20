import { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/register/Register";
import { initialState, Reducer, TwitterContext } from "./context/TwitterContext";
import Layout from "./pages/layout/Layout";
import "./App.css";
import LogoutModal from "./components/register/logoutWrapper/LogoutModal";

const App = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <TwitterContext.Provider value={{ state, dispatch }}> 
    <div className="App">  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Layout />} />
          <Route path="/logout" element={<LogoutModal showModal={false} setShowModal={undefined} children={undefined} modalTitle={""} />} />
        </Routes>
      </BrowserRouter>
    </div>
    </TwitterContext.Provider>
  );
};

export default App;
