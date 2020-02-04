import React from 'react';
import {Col, Row} from 'reactstrap';
import Error from '../error';

const RowBlock = ({left, right, itemListError}) => {
    
    if (itemListError) {
        return (
            <Row>
                <Error />
            </Row>
        )
    }

    return (
        <Row>
            <Col md='6'>
                {left}
            </Col>
            <Col md='6'>
                {right}
            </Col>
        </Row>
    )
}

export default RowBlock;