import React from "react";
import WelcomeScreen from "../Components/WelcomeScreen";
import {Container} from "react-bootstrap";
import ContentScreen from "../Components/ContentScreen";

const LibraryApp:React.FC=()=>{
    return(
        <Container fluid={true}>
            <WelcomeScreen/>
            <ContentScreen/>
        </Container>
    );

};

export default LibraryApp