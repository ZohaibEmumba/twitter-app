import { FC, useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/register/Register";
import {
  initialState,
  Reducer,
  TwitterContext,
} from "./context/TwitterContext";
import Layout from "./pages/layout/Layout";
import "./App.css";
import { filter } from "lodash";
import { GETALLUSERS } from "./constants";
import { users } from "./constants/PostObj";

const App: FC = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const allUsers: any = filter(users, item => item);

  useEffect(() => {
    dispatch({
      type: GETALLUSERS,
      payload: {
        allUsers: allUsers,
      },
    });
  }, [dispatch]);

  return (
    <TwitterContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Layout />} />
            <Route path="/trending/" element={<Layout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TwitterContext.Provider>
  );
};

export default App;
