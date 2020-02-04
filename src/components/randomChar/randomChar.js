import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'reactstrap';
import WithGotService from '../hoc';
import {charLoaded, charRequested, charErrored, toggleBtn} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './randomChar.css';

class RandomChar extends Component {
    
    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    updateChar = () => {
        const {GotService, charLoaded, charErrored} = this.props;

        const id = Math.round(Math.random() * 140 + 25);
        GotService.getCharacter(id)
            .then(res => charLoaded(res))
            .catch(charErrored);
    }

    render() {

        const {char, loading, error, charVisible, toggleBtn} = this.props;

        const spinner = loading ? <Spinner /> : null;
        const errorMessage = error ? <Error /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;
        const blockContent = charVisible ? <BlockContent errorMessage={errorMessage} spinner={spinner} content={content}/> : null

        return (
            <Row>
                <Col xs={{size: 6, offset: 0}}>
                    {blockContent}
                    <Button
                        toggleBtn={toggleBtn}
                        charVisible={charVisible}/>
                </Col>
            </Row>
        );
    }
}

const BlockContent = ({errorMessage, spinner, content}) => {
    return (
        <div className="random-block rounded">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const Button = ({charVisible, toggleBtn}) => {
    const content = charVisible ? `Скрыть персонажа` : `Отобразить персонажа`;
    return (
        <button 
            className='toggleBtn btn btn-primary'
            onClick={() => toggleBtn()}>
                {content}
        </button>
    )
}
 
const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}

const mapStateToProps = ({char, loading, error, charVisible}) => {
    return {
        char,
        loading,
        error,
        charVisible
    }
}

const mapDispatchToProps = {
    charLoaded,
    charRequested,
    charErrored,
    toggleBtn
}

export default WithGotService()(connect(mapStateToProps, mapDispatchToProps)(RandomChar));
