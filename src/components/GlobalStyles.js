import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`
export const Link = styled(NavLink)`
 margin-right: 5px;
   text-decoration: none;
   &.active {
     color: red;
  }
`

