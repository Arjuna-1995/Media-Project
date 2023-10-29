import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Home/>
    </div>
    // <BrowserRouter>
    // <Link to={"/"}>Home</Link>
    // <Link to={"/login"}>About</Link>
    //   <Link to={"/register"}>UserDetails</Link>
    // <Routes>
    //   <Route path="/" element={<Home/>}></Route>
    //   <Route path="/login" element={<Login/>}></Route>
    //   <Route path="/register" element=''></Route>
    //   <Route path="/profile/:username"></Route>
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
