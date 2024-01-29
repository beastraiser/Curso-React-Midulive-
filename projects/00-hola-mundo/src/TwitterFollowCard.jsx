/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

export function TwitterFollowCard({
  /* children, */ userName = "unknown",
  children,
  initialIsFollowing,
}) {
  /* userName = `@${userName}`; -> Esto es una mala práctica ya que se está modificando la prop(parametro de entrada). Las props son inmutables. */
  /* const userWithAt = `@${userName}`; -> Esto sí es una buena práctica. Se almacena el nuevo valor en una variable diferente */
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing); //El estado useState() solo se inicializa una vez. Por mucho que podamos cambiar su valor, es inamovible. EL ESTADO SOLO SE INICIALIZA UNA VEZ!!!!
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <div className="tw-fillingGap"></div>
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="El avatar de @midudev"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          {/* {children}
          Se pueden meter como parámetro elementos hijos, es decir aquellos que van entre las etiquetas. Se tiene que utilizar "children" */}
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside className="tw-followCard-aside">
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-unFollow">Dejar de seguir</span>
        </button>
        <div className="tw-fillingGap"></div>
      </aside>
    </article>
  );
}
