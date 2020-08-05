import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/64553441?s=460&u=e5457615f66b0a8976dcc012eaa45cdf7cdc3783&v=4"
          alt="Kenzo De Albuquerque"
        />
        <div>
          <strong>Kenzo De Albuquerque</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Iniciando na vida de programador.
        <br />
        <br />
        Colecionando conhecimentos e novas habilidades.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$350,00 :P</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
