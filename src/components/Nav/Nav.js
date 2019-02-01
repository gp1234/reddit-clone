import React, {Component} from 'react';
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
class Nav extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {open: false};
        this.changeOpen = this.changeOpen.bind(this);
    }


    changeOpen() {
       this.setState(state => ({
           open: !state.open
       }))
    }

    render(){
        return (
            <NavStyle>
                <a href="#"><img src={logo} style={{width: '50px', height: '50px'}}></img></a>
                <Dropdown openM={this.changeOpen} openS={this.state.open} id="dropdown"></Dropdown>
                <SearchBox />
                <p>User</p>
            </NavStyle>
        );
    }

}
export default Nav;