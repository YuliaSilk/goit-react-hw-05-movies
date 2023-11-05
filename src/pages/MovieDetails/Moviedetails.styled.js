import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MovieMainContainer = styled.div`
display: flex;
flex-direction: column;
gap: ${p => p.theme.spacing(6)};
`;

export const ToHomebtn = styled.button`
position: relative;
width: 38px;
height: 38px;
padding: ${p => p.theme.spacing(1)};
background: transparent;
border-color: transparent;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 50%;
color: ${({ theme }) => theme.colors.backgraund};
transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    background: ${({ theme }) => theme.colors.backgraund};
    cursor: pointer;

}

`;

export const LinkToHome = styled(NavLink)`
position: absolute;
top: 10%;
right: 2px;
color: ${({ theme }) => theme.colors.header};
transition: color 250ms;
font-size: 30px;

margin: 0 auto;


&:active {
    color: ${({ theme }) => theme.colors.active};

}
`

export const MovieContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: ${p => p.theme.spacing(6)};
padding: ${p => p.theme.spacing(2)};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 15px;
`;

export const Poster = styled.img`
width: 400px;
border-radius: 15px;
`;

export const About =styled.div`
display: flex;
flex-direction: column;
width: 400px;
`;

export const MovieTittle = styled.h2`
margin-bottom:${p => p.theme.spacing(2)};
font-size: 32px;
text-transform: uppercase;
color: ${({ theme }) => theme.colors.header};
`;

export const SubTittles = styled.h3`
margin-bottom:${p => p.theme.spacing(2)};
font-size: 20px;
color: ${({ theme }) => theme.colors.header};
`;

export const List = styled.ul`
list-style-type: disclosure-open;
display: flex;
justify-content: space-around;
gap: ${p => p.theme.spacing(4)};
padding: 0;

`;

export const TextAbout = styled.p`
margin: 0;
margin-bottom:${p => p.theme.spacing(2)};
font-size: 18px;
line-height: 1.4;
font-weight: 100;
color: ${({ theme }) => theme.colors.text};

`;

export const Gernes = styled.ul`
    list-style-type: disc;
    margin: 0;
    margin-bottom:${p => p.theme.spacing(2)};
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;

`;

export const LinksInfo = styled(NavLink)`
text-decoration: none;
color:${({ theme }) => theme.colors.main};
margin-bottom:${p => p.theme.spacing(4)};
font-size: 18px;
font-weight: 600;


&:hover {
    color:${({ theme }) => theme.colors.active};

}
&.active {
    color:${({ theme }) => theme.colors.active};

}
`