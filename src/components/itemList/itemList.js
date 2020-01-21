import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithGotService from '../hoc';
import {charListLoaded, onCharDetails} from '../../actions';
import Spinner from '../spinner';

import './itemList.css';
class ItemList extends Component {

    componentDidMount() {
        const {GotService} = this.props;

        const page = Math.round(Math.random() * 210);
        GotService.getAllCharacters(page)
            .then(res => this.props.charListLoaded(res))
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id, name} = item;
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onCharDetails(id)}>
                    {name}
                </li>  
            )
        })
    }

    render() {

        const {charList} = this.props;

        if (!charList) {
            return <Spinner />
        }

        const content = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {content}
            </ul>
        );
    }
}

const mapStateToProps = ({charList}) => {
    return {
        charList
    }
}

const mapDispatchToProps = {
    charListLoaded,
    onCharDetails
}

export default WithGotService()(connect(mapStateToProps, mapDispatchToProps)(ItemList));