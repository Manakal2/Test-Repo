import React from "react";
import {Col,Row,Image} from "react-bootstrap";
import Imagelib from '../Assets/Images/Welcome.jpg'
const WelcomeScreen:React.FC=()=>{
    return(
            <Row className="welcome">
                <Col  xs={12} className={'text-center px-0'}>
                    <h1>My Library</h1>
                </Col>

                 <Col xs={12} className={"px-0"}>
                     <Image src={Imagelib} alt={'Library'}/>
                </Col>

                <Col xs={12} className={'text-end pt-2 px-5'} >
                    photo credits: <a href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content
                    =creditCopyText">Anna Hunko</a> on <a href="https://unsplash.com/?utm_source=
                    unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </Col>



            </Row>

    )
}

export default WelcomeScreen

