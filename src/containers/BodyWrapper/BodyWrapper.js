import  React from 'react';
import styled from 'styled-components';
import Newsfeed from '../../components/Newsfeed/Newsfeed'
import Subreddit from '../../components/Subreddit/subreddit';

const BodyWrapper = styled.div`
    position: relative;
    width: 100%;
    top: 10rem;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
`;

const Body = (props) =>
{
    return (
      <BodyWrapper>
          <Newsfeed />
          <Subreddit />
      </BodyWrapper>
    );
}
export default Body;