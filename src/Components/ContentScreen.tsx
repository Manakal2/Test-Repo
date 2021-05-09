import React from "react";
import {Col, Row} from "react-bootstrap";
import AuthorTitle from "./Contents/Author/AuthorTitle";
import BookTitle from "./Contents/Book/BookTitle";
import Authorlist from "./Contents/Author/AuthorList";

const ContentScreen=()=>{
    return(
        <Row className='Content'>
            <Col className='Book'>
                <BookTitle/>
            </Col>

            <Col className='Author'>
                <AuthorTitle/>
                <Authorlist/>
            </Col>

        </Row>
    )
}

export default ContentScreen