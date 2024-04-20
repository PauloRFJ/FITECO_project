import Card from "../components/card/Card";
import { useContext } from "react";
import { TrilhasContext } from "../context/TrilhasContext";
import "./Trilhas.css"


function Trilhas() {
    const {trilhas, loading} = useContext(TrilhasContext) 
  
    return (
    <div className="pagTrilhas">
            <h1>Explore trilhas incríveis</h1>
      <div className="app">
     {Array.isArray(trilhas) && !loading ? (
        trilhas.map((trilhas, index) => (
            <Card key={index} dadosTrilha={trilhas} />      
     ))
       ) : (
        <span>Carregando...</span>
    )}
      </div>
    </div>
);
}

export default Trilhas