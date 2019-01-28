import React from 'react';
import Nav  from '../../components/Nav/Nav';
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import { createGlobalStyle } from 'styled-components';

createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 10px;
}

*,*:before, *:after {
    box-sizing: inherit;
}

body {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    
}

`;

const FrontPage = () => {
    return (
        <div>
            <Nav></Nav>
            <ContentWrapper></ContentWrapper>
        </div>
    );
}

export default FrontPage;