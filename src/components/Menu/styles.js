import styled from 'styled-components'

export const NavBar = styled.nav`
    width: 100%;
    height: 94px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;
    background: var(--black);
    border-bottom: 2px solid var(--primary);

        & img{
            max-width: 168px;

            @media(max-width: 800px){
            img{
                max-width: 105px;
            }
        }
    }
`