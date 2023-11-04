import styled from "styled-components";

export const ContainerCasts = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-content: flex-start;
gap: ${p => p.theme.spacing(2)};
background-color: ${({ theme }) => theme.colors.background};
`;

export const Tittle = styled.h2`
margin: 0 auto;
color: ${({ theme }) => theme.colors.header};
margin-bottom:${p => p.theme.spacing(3)};
font-size: 24px;
`;

export const CastList = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
gap: ${p => p.theme.spacing(4)};

`;

export const CastItem = styled.li`
display: flex;
flex-direction: column;


width: 216px;
/* background-color: ${({ theme }) => theme.colors.backgraund}; */
border-radius: 15px;
border-color: red;
padding: ${p => p.theme.spacing(2)};
margin-bottom: ${p => p.theme.spacing(2)};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const CastImg = styled.img`
border-radius: 15px;
margin: 0 auto;
margin-bottom:${p => p.theme.spacing(2)};
`;

export const CastName = styled.h2`
margin: 0 auto;
margin-bottom:${p => p.theme.spacing(1)};
font-size: 18px;
text-transform: uppercase;
color: ${({ theme }) => theme.colors.header};
`;

export const CastText = styled.p`
margin: 0 auto;
font-size: 14px;
color: ${({ theme }) => theme.colors.text};

`;