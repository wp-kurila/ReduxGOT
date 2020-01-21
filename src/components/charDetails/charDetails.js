import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithGotService from '../hoc';
import {charDetails, charErrored} from '../../actions';
import Spinner from '../spinner';

import './charDetails.css';
class CharDetails extends Component {

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId, GotService, charDetails, charErrored} = this.props;
        if (!charId) {
            return;
        }

        GotService.getCharacter(charId)
            .then(res => charDetails(res))
            .catch(charErrored)

    }

    render() {

        const {itemDetails, itemLoading, itemDetailsVisible} = this.props;

        if (!itemDetailsVisible) {
            return <span className='select-error'>Нужно выбрать персонажа</span>
        }

        const content = itemLoading ? <Spinner /> : <View itemDetails={itemDetails} />;

        return (
            <div className="char-details rounded">
                {content}
            </div>
        );
    }
}

const View = ({itemDetails}) => {
    const {name, gender, born, died, culture} = itemDetails;
    return (
        <>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender</span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born</span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died</span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture</span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}

const mapStateToProps = ({charId, itemDetails, itemLoading, itemDetailsVisible}) => {
    return {
        charId,
        itemDetails,
        itemLoading,
        itemDetailsVisible,
    }
}

const mapDispatchToProps = {
    charDetails,
    charErrored
}

export default WithGotService()(connect(mapStateToProps, mapDispatchToProps)(CharDetails));
