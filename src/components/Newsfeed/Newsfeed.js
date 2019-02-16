import React from 'react';
import styled from 'styled-components';
import Card from '../Card/card';

const NewsList = styled.div`
grid-column: 2 /3 ;

margin: 2rem;


`;

const newsfeed = () => {
        return (
            <NewsList>
                <Card />
            </NewsList>
        );
};

export default newsfeed;