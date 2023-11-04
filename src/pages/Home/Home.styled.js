import styled from "styled-components";

export const ContainerHome = styled.div`
display: flex;
flex-direction: column;
padding: ${p => p.theme.spacing(2)};
align-items: center;
`;

export const HomeHeader = styled.h2`
color: ${({ theme }) => theme.colors.header};
font-size: 32px;
margin-bottom: ${p => p.theme.spacing(2)};
`;