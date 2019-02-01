import React, {Component} from 'react';
import styled from 'styled-components';


const TopicWrapper = styled.div`
    margin-left: 5rem;
    width: 20rem;
    height: 80%;
    cursor: pointer;
    border: 1px solid black;

`;

const TopicStyle = styled.button`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    color: green;

    .fa-accessible-icon {
        margin-left: 1rem;
    }
    .fa-caret-down {
        margin-right: 1rem;
    }
`;

const TopicElements = styled.div`

    
    list-style: none;
    background-color: white;
    margin: 0;
    padding: 0;
    padding: 2rem;
    li:hover{
        background-color:grey;
    }

`;


class Dropdown extends Component {

    constructor(props)
    {
        super(props)
    }

    
    render() {
        let elements = this.props.openS ? (<> <div><i className="fab fa-accessible-icon"></i>Popular</div> <div><i className="fab fa-accessible-icon"></i>Popular</div></>)  : '';
        return(
            <TopicWrapper className="wrapper" onClick={this.props.openM}>
                <TopicStyle>
                    <i className="fab fa-accessible-icon"></i>
                    <div><a></a>Popular</div>
                    <i class="fas fa-caret-down"></i>
                </TopicStyle>
                
                <TopicElements className="list">
                    {elements}
               </TopicElements>
            </TopicWrapper>

            
        )
    }
}

export default Dropdown;