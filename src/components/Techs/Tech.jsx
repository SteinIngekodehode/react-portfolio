
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import Card from "./Card";

const Tech = () => {
    return (
        <Container id="service">
            <Slide direction="down">
                <h4>
                    <span className="teknologier">Teknologier</span>
                </h4>
                <h1>Mine ferdigheter</h1>
            </Slide>
            <Cards>
                <Slide direction="left">
                    <Card>
                        Icon={}
                        title={"HTML"}
                        disc={`Beskrivelse av ferdigheter`}
                    </Card>
                </Slide>

                <Slide direction="left">
                    <Card>
                        Icon={}
                        title={"CSS"}
                        disc={`Beskrivelse av ferdigheter`}
                    </Card>
                </Slide>

                <Slide direction="left">
                    <Card>
                        Icon={}
                        title={"Javascript"}
                        disc={`Beskrivelse av ferdigheter`}
                    </Card>
                </Slide>

                <Slide direction="left">
                    <Card>
                        Icon={}
                        title={"React"}
                        disc={`Beskrivelse av ferdigheter`}
                    </Card>
                </Slide>
            </Cards>
        </Container>
    );
};

export default Tech;

const Container = styled.div`
width:80%;
max-width:1280px;
margin:0 auto;
padding: 3rem 0;
padding-bottom: 4rem;
@media (max-width: 840px) {
    width: 90%;
}

h1 {
    font-family: Montserrat;
    line-height: 36px;
    letter-spacing: 0;
    font-width: 900;
    font-size: 42px;
    padding-top: 1rem;
    color: white;
}
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
