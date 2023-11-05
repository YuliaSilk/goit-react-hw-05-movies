import styled from "styled-components";
import { ErrorMessage, Form, Field } from 'formik';


export const SearchForm = styled(Form)`
  position: relative;
  display: flex;
  gap: ${p => p.theme.spacing(4)};
  width: 100%;
  max-width: 400px;
  height: 60%;
  margin: 0 auto;
`;


export const SearchInput = styled(Field)`
display: inline-block;
width: 400px;
height: 32px;
/* margin: 0 auto; */
/* margin-left: 8px; */
font: inherit;
font-size: 20px;
border: none;
outline: none;
padding: ${p => p.theme.spacing(3)};
color:${({ theme }) => theme.colors.input};
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;


&:hover {
    border: 2px solid ${({ theme }) => theme.colors.border};
    }

    &::placeholder {
font: inherit;
font-size: 18px;
color:${({ theme }) => theme.colors.border};
    }
`;

export const SearchBtn = styled.button`
display: inline-block;
position: absolute;
top: 1%;
right: 10px;
width: 32px;
height: 32px;
border: none;
outline: none;
border-radius: 15px;
background-color: transparent;
cursor: pointer;
color:${({ theme }) => theme.colors.header};

transition:  250ms cubic-bezier(0.4, 0, 0.2, 1);
 font-size: 32px;
&:hover {
    color:${({ theme }) => theme.colors.backgraund};}
    
`;

export const ErrMsg = styled(ErrorMessage)`
color: ${({ theme }) => theme.colors.error};
font-size: 16px;
margin-top: 4px;
margin-bottom: 8px;
width: auto;
padding-left: 16px;
`;


export const Resetbtn = styled.button`

width: 32px;
height: 32px;
padding: ${p => p.theme.spacing(1)};
background: transparent;
border-color: transparent;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 50%;
font-size: 20px;
color: ${({ theme }) => theme.colors.header};
transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    background: ${({ theme }) => theme.colors.backgraund};
    cursor: pointer;

}

`;

// export const LinkToHome = styled(icon)`
// position: absolute;
// top: 10%;
// right: 2px;
// color: ${({ theme }) => theme.colors.header};
// transition: color 250ms;
// font-size: 30px;

// margin: 0 auto;


// &:active {
//     color: ${({ theme }) => theme.colors.active};

// }
// `