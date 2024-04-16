import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <div className="main-content">
        <div className="centered-content">
          <img src={"../src/img/Fiteco_maior.png"} className="logo" alt="logo_maior" />
          <h1 className="subtitle">Que tal aproveitar um tempo com a natureza?</h1>
          <h3 className='h3centered'>
            Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
            aventuras e inspire-se com as experiências de outros aventureiros.
            Prepare-se para explorar novos horizontes e se conectar com a
            natureza através do Adventure Trails!
          </h3>
          <Link to="/Trilhas"><button>Explorar Trilhas</button></Link>
        </div>
      </div>
      <div className="second-div">
        <h1>Explore trilhas incríveis</h1>
        <div className="box">
          <h3>
            A FITECO é seu portal para explorar e compartilhar as melhores trilhas para trekking
             e ciclismo ao redor do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas
              exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre informações detalhadas 
              sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma
               experiência eco-friendly.
          </h3>
        </div>
      </div>
      <div className="third-div">
        <div className="inner-div">
          <h1>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h1>
          <Link to="/Cadastrar"><button>Cadastrar nova trilha</button></Link>
        </div>
        <img src={"../src/img/Caminho_principal.png"} alt="Imagem de trilha" className='foto1'/>
      </div>
      </div>
    );
}

export default Home