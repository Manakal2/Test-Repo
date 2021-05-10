import React from "react";
import {Col, Row} from "react-bootstrap";
import AuthorInfo from "./AuthorInfo";

const Authorlist= ()=>{
    return(
        <Row>
            <Col>
                <label className='msg-lbl font-italic pb-3 '><i>No Authors Listed</i></label>

                <ul className="list-unstyled px-5">
                    <AuthorInfo/>
                    <AuthorInfo/>
                    <AuthorInfo/>
                </ul>
            </Col>
        </Row>


    )
}

export default Authorlist