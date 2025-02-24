import { css } from "@emotion/react";

export const colorStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  :root {
    --font-family: "Barlow", sans-serif;
    font-family: var(--font-family);
    --primary-white: #fff;
    --primary-orange: #ea7c69;
    --primary-gray: #1f1d2b;
    --secondary-gray: #252836;
    --tertiary-gray: #393c49;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: var(--font-family); /* Asegura herencia */
  }

  #app {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  div {
    margin-top: 0; /* Reseteo opcional */
    font-family: var(--font-family); /* Fuerza Barlow en todos los elementos */
  }

  * {
    box-sizing: border-box;
  }
`;
