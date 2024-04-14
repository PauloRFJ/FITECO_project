import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import "./App.css";
import { Outlet } from "react-router-dom";
import { TrilhasContextProvider } from "./context/TrilhasContext";

function App() {
 
return (
  <TrilhasContextProvider>
    <div className="container">
     <Header />
     <Outlet />
     <Footer />
    </div>
  </TrilhasContextProvider>
 );
}

export default App;
