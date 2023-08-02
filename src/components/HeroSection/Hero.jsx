// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components';
import heroImage from '../Images/pngwing.com3.png';

const Hero = () => {
    return(
        <Container>
            <Text>
                <h2>
                Stein Inge Kvernhusvik  
                </h2>
                <h3>
                Utvikler  
                </h3>
                <p className='intro'>Hei! Eg heiter Stein Inge Kvernhusvik og er deltakar på Kodehode IT Frontend-kurs.
        Det å vere med på å skape noko har alltid vert ei interesse for meg, no synes eg det er veldig givande å lage nettsider!</p>
        <button style={{color: 'white' }}>Kontakt</button> 
            </Text>
            <Profil>
                <img
            src={heroImage}
            alt="profile"
          /></Profil>
        </Container>
    )
}
export default Hero

const Container = styled.div`
display: flex;
  gap: 2rem;
  padding-top: 8rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`
const Text = styled.div`
flex: 1;
  
  h2 {
    color:white;
    font-size: 68px;
    font-family: "Montserrat";
    letter-spacing: ; 
    font-weight: 700;
  }
  h3 {
    color:#bbb;
    font-weight: 500;
    font-size: 1.2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-transform: capitalize;
  }
  .intro {
    font-family: 'Montserrat';
    /line-height: 36px;/
    letter-spacing:.02em;
    color: white;
    max-width: 80%;
    font-weight: 300;
  }

  button {
    font-size: 12px;
    font-family: "Helvetica Neue";
    font-weight: 500;
    text-transform: Uppercase;
    letter-spacing: 0.09rem;
    padding: 1rem 2rem;
    margin-right: 4%;
    margin-top: 3rem;
    cursor: pointer;
    background-color: transparent;/#464646;/
    color: white;
    border-radius: 50px 50px 50px 50px;
    border: 2px solid white;
    /transition: transform 900ms ease-in-out;/
    transition: all 0.3s ease-in-out;
    font-weight: 500;
   /* filter: drop-shadow(0px 10px 10px #ffbf00);/
    :hover {
    /  filter: drop-shadow(0px 10px 10px #ffbf00);*/
     transform: scale(1.1);


    }
  }
`
const Profil = styled.div`
img {
    width: 25rem;
    /*filter: drop-shadow(0px 10px 10px #bbb);*/
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`