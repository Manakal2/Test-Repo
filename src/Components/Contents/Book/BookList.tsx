import React from "react";
import {Col, Row} from "react-bootstrap";
import BookInfo from "./BookInfo";

const Booklist= ()=>{
    return(
        <Row>
            <Col>
                <label className='msg-lbl font-italic pb-3 '><i>No Books Listed</i></label>

                <ul className="list-unstyled px-5">
                    <BookInfo/>
                    <BookInfo/>
                    <BookInfo/>
                </ul>
            </Col>
        </Row>


    )
}

export default Booklist