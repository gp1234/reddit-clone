import React from 'react';
import styled from 'styled-components';
import dog from '../../resources/dog.jpg'
const CardStyle = styled.div`
background-color: white;
width: 40rem;
height: 35rem;
display:grid;
grid-template-columns: 3rem 1fr .2rem;
grid-template-rows: 20px auto auto 20px ;
grid-column-gap: 1rem;
border: 10px solid yellowgreen;

.votes {
    background-color: #F8F9FA;
    grid-column: 1 /2;
    grid-row: 1 / -1;

    .votes-content
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        margin-top: 2rem;

        i {
            color: grey;
        }
    }
  
}

.header {

    grid-column: 2 / 3 ;
    grid-row: 1 / 2;
}

.title {

    grid-column: 2 / 3 ;
    grid-row: 2 / 3;
}

.image {

    grid-column: 2 / 3;
    grid-row: 3 / 4;

    img {
        width:100%;
        height: 100%; 
    }
}

.footer {

    grid-column: 2 / 3;
    

}
`;
const card = () => {
    return(
        <CardStyle>
            <div className="votes">  
                <div className="votes-content"> 
                    <i class="fas fa-long-arrow-alt-up"></i>          
                    <span>184</span>
                    <i class="fas fa-long-arrow-alt-down"></i>
                </div>

            </div>
            <div className="header">Header</div>
            <div className="title">
                <p>I rejected 12 offers from major publishers to make my first game DARQ the way I dreamed it to be. They told me "you can't make it without us" and wanted up to 80% cut & IP.</p>
            </div>
            <div className="image">
                <img src={dog}/>
            </div>
            <div className="footer">Footer</div>
        </CardStyle>
    );
};

export default card;