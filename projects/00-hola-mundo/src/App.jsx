import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  /* const format = (userName) => `@${userName}`; -> Se pueden pasar como parámetros de entrada funciones */

  /* const formattedUserName = <span>@{"midudev"}</span>; -> Se pueden pasar como parámetros de entrada elementos */

  /* const midudev = {
    userName: "midudev",
    name: "Miguel Angel Durán",
    isFollowing: true,
  }; */

  /* ------------------------ARRAY QUE CONTIENE LOS USUARIOS----------------------------- */

  /* const users = [
    {
      userName: "midudev",
      name: "Miguel Angel Durán",
      isFollowing: true,
    },
    {
      userName: "beastraiser",
      name: "Alexandru Bulc",
      isFollowing: false,
    },
    {
      userName: "LittleRoach13",
      name: "Alba Martinez Millán",
      isFollowing: true,
    },
    {
      userName: "mazodexd",
      name: "David Coba",
      isFollowing: false,
    },
  ]; */

  return (
    <section className="App">
      <div className="tw-title">A quién seguir</div>
      {/* Otra manera de utilizar React.fragment es <></> */}

      {/* -------------------------------------------- */}

      {/* Con esta forma, utilizando el .map podemos recorrer el array e ir renderizando cada uno de los elementos. El key es obligatorio.  */}

      {/* {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })} */}

      <TwitterFollowCard
        userName="midudev"
        initialIsFollowing={false}
        /* {...midudev} -> Otra manera de pasar props. Es una mala práctica */
      >
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard userName="beastraiser" initialIsFollowing>
        Alexandru Bulc
      </TwitterFollowCard>
      <TwitterFollowCard userName="LittleRoach13" initialIsFollowing>
        Alba Martinez Millán
      </TwitterFollowCard>
      <TwitterFollowCard userName="mazodexd" initialIsFollowing={false}>
        David Coba
      </TwitterFollowCard>
      {/* <TwitterFollowCard isFollowing userName="trueguy12">
        <strong>Alvaro Mendoza</strong> Esto es un ejemplo de un prop hijo
      </TwitterFollowCard> */}
    </section>
  );
}
