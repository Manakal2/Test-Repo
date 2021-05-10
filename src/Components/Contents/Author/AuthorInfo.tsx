import React from "react";
import { Trash2,Edit} from 'react-feather';
import {Col, Row} from "react-bootstrap";
const AuthorInfo:React.FC=()=>{
    return(
        <li className='AuthorInfo pb-3'>
            <Row>
                <Col>
                    <label>1.Author1 Name</label>
                </Col>
                <Col>
                    <Edit color="#dba54f" size={20} className="mx-1"/><Trash2 color="#bb0712"  size={20} className="mx-1"/>
                </Col>
            </Row>

        </li>
    )
}

export default AuthorInfo