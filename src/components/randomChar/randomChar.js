import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithGotService from '../hoc';
import {charLoaded, charRequested, charError} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './randomChar.css';

class RandomChar extends Component {
    componentDidMount() {

        const {GotService} = this.props;

        const id = Math.round(Math.random() * 140 + 25);
        GotService.getCharacter(id)
            .then(res => this.props.charLoaded(res))
            .catch(this.props.charError)
    }

    render() {
        const {char, spinner, error} = this.props;

        const loading = spinner ? <Spinner /> : null;
        const errorMessage = error ? <Error /> : null;
        const content = !(spinner || error) ? <View char={char} /> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {loading}
                {content}
            </div>
        );
    }
};

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

const mapStateToProps = ({char, spinner, error}) => {
    return {
        char,
        spinner,
        error
    }
}

const mapDispatchToProps = {
    charLoaded,
    charRequested,
    charError
}

export default WithGotService()(connect(mapStateToProps, mapDispatchToProps)(RandomChar));
