import React from 'react';
import SearchBox from '../SearchBox/SearchBox'
import styled from 'styled-components'
import logo from '../../resources/Reddit_Logo.png'

const NavStyle = styled.div`
    display: flex;
    justify-content:space-around;
    background: yellow;
    p {
        color:purple;
        
    }
`;
const Nav = () =>
{
    return (
        <NavStyle>
            <img src={logo} style={{width: '50px', height: '50px'}}></img>
            <p>Topics</p>
            <SearchBox />
            <p>User</p>
        </NavStyle>
    );
}
export default Nav;