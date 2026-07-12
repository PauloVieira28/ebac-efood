import { createGlobalStyle } from 'styled-components'

export const colors = {
  vibrantSalmon: '#E66767',
  salmon: '#FFEBD9',
  fund: '#FFF8F2',
  white: '#FFF',
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  list-style: none;
}

body{
  background-color: ${colors.white};

  padding-top: 40px;

  .container {
    max-width: 1240px;
    margin: 0 auto;
  }
}
`
