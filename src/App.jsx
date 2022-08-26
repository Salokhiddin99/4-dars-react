import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/main.scss";
import Hero from "./components/Hero/Hero";
import SideBar from "./components/Sidebar/SideBar";
import TodoApi from "./components/TodoApi/TodoApi";
import Spinner from "./components/Spinner/Spinner";
function App() {
  return (
    <>
      <div className="container-fluid d-flex">
        {/* <SideBar /> */}
        {/* <Hero /> */}
        {/* <TodoApi /> */}
        {/* <Route>
          <Router />
        </Route> */}
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route path="/todo" element={<TodoApi />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
