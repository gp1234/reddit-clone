import React from 'react';
import styled from 'styled-components';

const Sub = styled.div`
    grid-column: 3/4;
`;

const subreddit = () => {
    return (
        <Sub>
            <p>Subreddit</p>
            <p>Add</p>
            <p>Reddit Premium ad</p>
            <p>Trending Communities</p>
            <p>Ads</p>
            <p>Footer</p>
        </Sub>
    );
};

export default subreddit;
