import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

* {
  box-sizing: border-box;

}

body {
  font-family: sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}


:root {
  --primary: #C1EDCC;
  --primary-llightest: #B0C0BC;
  --secondary: #797270;
  --secondary-light: #A7A7A9;
  --secondary--dark: #453F3C;
  --black: #040F0F;
  --white: #FAF0EF;
  --highlight: #C96480;
  
    /* https://coolors.co/c1edcc-b0c0bc-faf0ef-a7a7a9-c96480-797270-453f3c */

}


`
