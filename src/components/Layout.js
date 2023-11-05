import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import styled from "styled-components"
import  { Toaster } from 'react-hot-toast';


export const Container=styled.div`
display: flex;
flex-direction: column;
gap: ${p => p.theme.spacing(4)};
padding: ${p => p.theme.spacing(4)};
margin: 0 auto;
max-width: 1200px;
`;

export const Link = styled(NavLink)`
   margin-right: 24px;
   text-decoration: none;
   color: ${({ theme }) => theme.colors.acent};
   font-size: 26px;
   font-weight: 600;

  &.active {
    color: ${({ theme }) => theme.colors.active};
  }
`;

const HeaderStyle = styled.header`
display: flex;
position: relative;
justify-content: space-between;
top: 0;  
left: 0;
position: sticky;
z-index: 1100;
justify-content: center;
align-items: center;
width: 100%;
min-height: 48px;
padding: ${p => p.theme.spacing(2)};
background-color: ${({ theme }) => theme.colors.header};
box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`

export const Layout = () => {
    return (
        <Container>
            <HeaderStyle>
             <nav>
                 <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
             </nav>
            </HeaderStyle>
            
            <Suspense fallback={"Loading... Please wait..."}>
            <Outlet />
            </Suspense>

            <Toaster/>
        </Container>
    )
};

