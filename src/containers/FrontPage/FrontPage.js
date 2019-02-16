import React from 'react';
import Nav  from '../../components/Nav/Nav';
import BodyWrapper from '../BodyWrapper/BodyWrapper'
import styled, { createGlobalStyle } from 'styled-components';

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

const ContentWrapper = styled.div `
background-color: #DAE0E6;
max-width: 100%;
height: 100vh;

`;

const FrontPage = () => {
    return (
   
            <ContentWrapper>
                <Nav></Nav>
                <BodyWrapper />
            </ContentWrapper>
        
    );
}

export default FrontPage;