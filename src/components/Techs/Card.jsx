import styled from 'styled-components';
import React from "react";
/* eslint-disable react/prop-types */

const Container = styled.div`
width:100%
background-color: yellow;
padding: 1rem;
text-align: center;
span{font-size: 4rem;}

h2{
color:white;
font-weight:600;
font-size:1.1rem;
font-family: Monteserrat;
text-transform: uppercase;
padding-bottom: 1rem;
}

p{
color:white;
font-size: 0,9rem;
font-family: Montserrat;
letter-spacing: 0,01;
}

`

const Card = (props) => {
    const { Icon, title, discription } = props;

    return (
        <Container>
            <span className='icons'>
                {
                Icon ? <Icon/> : ""
                }
                
            </span>
            <h2>{title}</h2>
            <p>{discription}</p>
        </Container>
    )
}

export default Card;

