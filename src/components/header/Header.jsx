import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="header_navbar">
        <Link to="/"><img
         className="logo-circulo"
         src="../src/img/Fiteco_menor.png"
         alt="logo-circulo"
         /></Link>
        <div>
          <Link to="/Trilhas">Explorar Trilhas</Link>
          <Link to="/Cadastrar">Cadastrar trilhas</Link>
        </div>
      </div>
      <img
        className="imagem-trilha"
        src="https://s3-alpha-sig.figma.com/img/d499/89ee/a6d23a7a9ffd6d136e430c855a72ebc0?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CcgoaeVPP4oL6t26~p-aUxZbJXFrohHq-Xw09ARxqRWDSwFB4QLtAB-eANBXSdn1Ir9y3DIUdiBJMPTnEwGpiNMZZo9sazyfgpjl5boPhzqBEJ-tk5YJMQ6JHnGRZM5bJyLcU-OcWcgKJL~DIKObv9Ri3NyDQLOAiM-Kkfp3Xd7QnJRnyqF~MsCb4vo6lAoMN5KuZnr469n77WsisZ6GXzMNf5mHoWvSu2atuWu~F~-lxr7GkecQW7FSRk08sOnymECbxrLIXwxfMTdLUH2VeI78YKl3LMzKQT4caLN5KrKTHk5TxqJ1jJeQVk5hV0aUr1kfcOq3LuD6xsg-TeQ6gQ__"
        alt="imagem-trilha"
      />
    </div>
  );
}

export default Header;
