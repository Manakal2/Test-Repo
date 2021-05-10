import React from "react";
import { Trash2,Edit} from 'react-feather';
import {Col, Row} from "react-bootstrap";
const BookInfo:React.FC=()=>{
    return(
        <li className='BookInfo list-unstyled px-5'>
            <Row>
                <Col>
                    <label>1.Book1 title</label>
                </Col>
                <Col>
                    <Edit color="#dba54f" size={20} /><Trash2 color="#bb0712"  size={20} />
                </Col>
            </Row>

        </li>
    )
}

export default BookInfo