// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import styled from 'styled-components';
import { GiOverInfinity } from "react-icons/gi";
const Navbar = () => {
    const [bar, setBar] = useState();
    return (
        <Container bar={bar}>
        <Logo><span className=''><GiOverInfinity/></span>
        <h1> Stein Inge</h1>
        </Logo>
        <Nav bar={bar}>
        <span><a href='#Home'>Hjem</a></span>
        <span><a href='#Project'>Prosjekt</a></span>
        <span><a href='#Contact'>Kontakt</a></span>
        </Nav>
        <div onClick= {()=> setBar(!bar)} 
        className='bars'>
        <div className='bar'></div>
        </div>
        </Container>
    )
}
export default Navbar

const Container = styled.div`
display: flex;
/*border-bottom: 1px solid #bbb;*/
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem ;
    position: relative;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 90%;
        
    }
    .bars{
        display: none;
    }
    @media(max-width:640px){
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#fff"};
                transition: all 400ms ease-in-out;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                }

                :before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                :after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }

`
const Nav = styled.div`
@media(max-width:640px){
    position: fixed;
    display: flex;
    flex-direction: column;
    padding-top:20%;

    inset: 0;
    justify-content: start;
    align-items: end;
    padding-right:10%;

    font-size: 1.5rem;
    gap: 1rem;
    font-weight: 700;
    height: ${props => props.bar ? "100vh" : 0};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 100;
}
span{
    margin-left: 1rem;
    a{
        color: white;
        text-decoration: none;
        font-weight: 400;
        position: relative;
        :before{
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
            height: 2px;
            background-color: white;
            transform: scale(0);
            transform-origin: right;
            transition: transform 400ms ease-in-out;
        }
        :hover:before{
            transform: scale(1);
            transform-origin: left;
        }
        :hover{
            color: #ff5e5e;/#ffbf00;/
        }
    }
}
`
const Logo = styled.div`
color:red;
display: flex;
align-items: center;
gap: 0.5rem;
span{
    font-size: 1.8rem;
}

h1{
    font-family: Montserrat;
    color: white;
    font-weight: 900;
    font-size: 1.2rem;
}
`