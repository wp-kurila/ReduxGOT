import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemListLoaded, onItemDetails} from '../../actions';
import Spinner from '../spinner';

import './itemList.css';
class ItemList extends Component {

    componentDidMount() {
        const {getData, itemListLoaded, page} = this.props;

        getData(page)
            .then(res => itemListLoaded(res))
    }

    renderItems(arr) {
        const {renderItem, onItemDetails} = this.props;

        return arr.map(item => {
            const {id} = item;
            const label = renderItem(item);
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => onItemDetails(id)}>
                    {label}
                </li>  
            )
        })
    }

    render() {

        const {itemList} = this.props;

        if (!itemList) {
            return <Spinner />
        }

        const content = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {content}
            </ul>
        );
    }
}

const mapStateToProps = ({itemList}) => {
    return {
        itemList
    }
}

const mapDispatchToProps = {
    itemListLoaded,
    onItemDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);