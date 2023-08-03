import styled from 'styled-components'
import './App.css'
import Navbar from './components/Header/Navbar'
import Hero from './components/HeroSection/Hero'
import Tech from './components/Techs/Tech'
function App() {
  
  return (
  <Container>
    <HeroSection>
   <Navbar></Navbar>
   
   <Hero></Hero>
   <Tech />   

   </HeroSection>
 
   </Container>
  )
}

export default App
const HeroSection = styled.div`
background: #1f1e1d;
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
 padding-bottom: 2rem
  }
    ;`

const Container = styled.div`
background-color: black;
`
