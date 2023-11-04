import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieList = styled.ul`
list-style: none;
`;

export const MovieItem = styled.li`
width: 400px;
border-radius: 12px;
margin-bottom:${p => p.theme.spacing(2)};
padding: ${p => p.theme.spacing(2)};
/* font-size: 18px; */
/* background-color: #75bcbd; */
font-size: 20px;
font-weight: 300;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

&.hover{
   
    background-color: ${({ theme }) => theme.colors.backgraund};
}
`;

export const LinkStyled = styled(Link)`
text-decoration: none;
color: ${({ theme }) => theme.colors.header};
transition: color 250ms;

&.hover.active {
    color: ${({ theme }) => theme.colors.active};
}
`;
