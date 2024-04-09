import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
 const [trilhas, loading, isVisibleFromFetch] = useFetch("/trilhas.json");

 return (
  <div className="container">
   <Header />
   <h1>Explore trilhas incríveis</h1>
   {isVisibleFromFetch && (
    <>
     {loading && <p>Loading trails...</p>}
     {!loading && trilhas !== null && (
      <div className="app">
       {trilhas.map((item, index) => (
        <Card key={index} {...item} />
       ))}
      </div>
     )}
    </>
   )}
   <Footer />
  </div>
 );
}

export default App;
