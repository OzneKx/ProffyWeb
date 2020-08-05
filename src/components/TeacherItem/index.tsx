import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import api from '../../services/api';

import "./styles.css";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

export interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }
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
        <a
          onClick={createNewConnection}
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
