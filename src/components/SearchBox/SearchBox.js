import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const Search = styled.div`
    margin: 0 15rem;
    input {
        width: 40rem;
        padding: .6rem;
        border:none;
        background-color:rgb(246, 247, 248);
        border-radius: 10px;
    }
 
`;
const SearchBar = () => {
    return (
        <Search>
            <input type="text" name="search"></input>
        </Search>
    );
};

export default SearchBar;