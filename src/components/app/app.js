import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import {connect} from 'react-redux';
import {toggleBtn} from '../../actions';


import './app.css';


const App = ({charVisible, toggleBtn}) => {

    const randomChar = charVisible ? <RandomChar /> : null
    const content = charVisible ? `Скрыть персонажа` : `Отобразить персонажа`

    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {randomChar}                        
                        <button 
                            className='toggleBtn btn btn-primary'
                            onClick={() => toggleBtn()}>
                                {content}    
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

const mapStateToProps = ({charVisible}) => {
    return {
        charVisible
    }
}

const mapDispatchToProps = {
    toggleBtn
}

export default connect(mapStateToProps, mapDispatchToProps)(App);