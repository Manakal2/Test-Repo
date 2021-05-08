import React from "react";
import {Col, Row} from "react-bootstrap";
import AuthorTitle from "./Contents/Author/AuthorTitle";
import BookTitle from "./Contents/Book/BookTitle";

const ContentScreen=()=>{
    return(
        <Row className='Content'>
            <Col className='Book'>
                <BookTitle/>
            </Col>

            <Col className='Author'>
                <AuthorTitle/>
            </Col>
        </Row>

    )
}

export default ContentScreen