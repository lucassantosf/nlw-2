import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/22116712?s=460&u=69137ee30d56a494488d4b4ed4430d4d285977e3&v=4"
          alt="Lucas Santos"
        />
        <div>
          <strong>Lucas Santos</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo
        enim, euismod vel ipsum sit amet, vehicula pharetra nisl. In sit
        <br></br>
        amet metus justo. Aenean porttitor tortor tellus, vitae egestas risus
        mollis hendrerit. Curabitur lobortis ultricies enim, eget blandit est
        ultrices non.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp Icone" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
export default TeacherItem;
