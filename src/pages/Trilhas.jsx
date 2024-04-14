import Card from "../components/card/Card";
import { useContext } from "react";
import { TrilhasContext } from "../context/TrilhasContext";


function Trilhas() {
    const {trilhas, loading} = useContext(TrilhasContext)
  
    return (
    <div>
            <h1>Explore trilhas incríveis</h1>
      <div className="app">
     {Array.isArray(trilhas) && !loading ? (
        trilhas.map((trilha, index) => (
            <Card key={index} dadosTrilha={trilha} />      
     ))
       ) : (
        <span>Carregando...</span>
    )}
      </div>
    </div>
);
}

export default Trilhas