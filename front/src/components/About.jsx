import React from "react";
import styles from "./styles.module.css";
import Foto from "../../src/photoAbout.png";

export default function About() {
  return (
    <div className={styles.divAbout}>
      <h1>Acerca de la aplicación Rick & Morty</h1>
      <h2>Por Nicolás Palma</h2>
      <span>
        ¡Hola! ¡Bienvenido a mi aplicación de Rick & Morty!
        <br />
        Esta aplicación es una muestra del uso de componentes de React
        y estilos de CSS. <br />A través de esta aplicación, puedes explorar el
        universo de Rick & Morty y descubrir detalles interesantes sobre tus
        personajes favoritos.
        <br />
        Los componentes de React utilizados en la aplicación permiten una
        interacción suave y fluida con la interfaz de usuario, mientras que los
        estilos de CSS garantizan que la aplicación sea visualmente atractiva y
        fácil de navegar.
        <br />
        La aplicación de Rick & Morty es una gran muestra del poder de React y
        CSS cuando se combinan para crear experiencias de usuario dinámicas y
        atractivas. <br />
        Espero que disfrutes navegando a través de la aplicación y descubriendo
        todo lo que tiene para ofrecer.
        <br />
        Gracias por utilizar mi aplicación y por apoyar mi aprendizaje continuo
        en el desarrollo de aplicaciones con tecnologías modernas.
        <br />
        <h3>Cómo buscar personajes específicos</h3>
       <p>Para buscar un personaje específico, simplemente ingresa ID en la barra de búsqueda y haz clic en el botón "Agregar". El personaje se agregará a una lista. Haz click en el corazón para agregarlo a tus favoritos. O haz click en el nombre del personaje y podrás ver su información detallada.</p>
       <h3>Cómo filtrar personajes por características</h3>
       <p>Para filtrar personajes por características, como la especie o el género, utiliza los filtros proporcionados en la página de Favoritos.</p>
      </span>
      <br />
      <img src={Foto} alt="Foto de Nicolás" />
    </div>
  );
}


// export default function About() {
//   return (
//     <div>
//       <h2>Acerca de la aplicación Rick and Morty</h2>
//       <p>La aplicación Rick and Morty es una herramienta para buscar y guardar información sobre los personajes de la famosa serie animada del mismo nombre.</p>
//       <h3>Cómo buscar personajes específicos</h3>
//       <p>Para buscar un personaje específico, simplemente ingresa ID en la barra de búsqueda y haz clic en el botón "Agregar". El personaje se agregará a una lista. Haz click en el corazón para agregarlo a tus favoritos. O haz click en el nombre del personaje y podrás ver su información detallada.</p>
//       <h3>Cómo filtrar personajes por características</h3>
//       <p>Para filtrar personajes por características, como la especie o el género, utiliza los filtros proporcionados en la página de Favoritos.</p>
//       <h3>Otras páginas de interés</h3>
//       <p>Visita nuestra página de Preguntas Frecuentes para obtener más información sobre la aplicación y cómo utilizarla. Si necesitas ayuda o quieres informar un problema, visita nuestra página de Contacto.</p>
//       <div>
//         <button>Visitar Preguntas Frecuentes</button>
//         <button>Visitar Contacto</button>
//       </div>
//     </div>
//   );
// }
