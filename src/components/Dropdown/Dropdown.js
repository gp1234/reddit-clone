import React, {Component} from 'react';
import styled from 'styled-components';


const TopicWrapper = styled.div`
    margin-left: 5rem;
    width: 11rem;
    padding: .5rem 2rem;
    display: flex;
    justify-content: space-between;

    
    i {
        margin-right: 1rem;
    }

`;

const TopicStyle = styled.ul`
    margin: 0;
    padding: 0;
    color: green;
    list-style: none;

    i {
        margin-left: 1rem;
    }
`;


class Dropdown extends Component {

    render() {
        return(
            <TopicWrapper>
                <TopicStyle>
                    <li><i class="fab fa-accessible-icon"></i>Popular</li>
                </TopicStyle>
               <i class="fas fa-caret-down"></i>
            </TopicWrapper>
        )
    }
}

export default Dropdown;