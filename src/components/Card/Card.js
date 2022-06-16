import React from "react";
import argentina from "../../assets/images/argentina.png"
import brasil from "../../assets/images/brasil.png"
import chile from "../../assets/images/chile.png"
import uruguay from "../../assets/images/uruguay.png"
import styles from "./Card.module.css"

const Card = ({ hotel }) => {
  const { name, photo, description, country, price, rooms } = hotel;
  return (
    <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile">
      <div className="card" style={{ height: '100vh' }}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={
                photo.charAt(0) !== '.' ? photo : 'https://via.placeholder.com/150'
                } alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content" >
          <div className={styles["contenido"]}>
            <div className="media-content">
              <p className="title is-5 has-text-weight-bold" >{name}</p>
            </div>
            <div className={styles["nombre_img"]}>
            <img className={styles["img"]} src={country === "Argentina" ? argentina : country === "Brasil" ? brasil : country === "Chile" ? chile : country === "Uruguay" ? uruguay : console.log("error")} alt=""/>
            <p className="subtitle is-6">{country}</p>
            </div>
          </div>

          <div className="content">
            <p>{description}</p>
            <p>Precio: {price}</p>
            <p>Cantidad de habitaciones: {rooms}</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
