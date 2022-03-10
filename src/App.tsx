import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "./components/register/Register";
import Layout from "./pages/layout/Layout";
import { filter } from "lodash";
import { users } from "./constants/PostObj";
import { getallusers } from "./reducers/twitter";
import "./App.css";

const App: FC = () => {
  const dispatch = useDispatch();
  const allUsers: any = filter(users, (item) => item);

  useEffect(() => {
    dispatch(getallusers(allUsers));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Layout />} />
          <Route path="/trending/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
