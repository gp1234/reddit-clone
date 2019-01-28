import React from 'react';
import SearchBox from '../SearchBox/SearchBox'
import Dropdown from '../Dropdown/Dropdown'
import styled from 'styled-components'
import logo from '../../resources/Reddit_Logo.png'

const NavStyle = styled.div`

    display: flex;
    align-items:center;
    background-color: rgb(255, 255, 255);
    position: fixed;
    width: 100vw;
    height: 3.6rem;

   a {
       width: 5rem;
       margin-left: 2rem;
   }
`;
const Nav = () =>
{
    return (
        <NavStyle>
            <a href="#"><img src={logo} style={{width: '50px', height: '50px'}}></img></a>
            <Dropdown id="dropdown"></Dropdown>
            <SearchBox />
            <p>User</p>
        </NavStyle>
    );
}
export default Nav;