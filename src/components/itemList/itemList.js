import React, {Component} from 'react';
import Spinner from '../spinner';

import './itemList.css';
class ItemList extends Component {

    componentDidMount() {
        const {getData, page, itemListLoaded, itemListErrored} = this.props;

        getData(page)
            .then(res => itemListLoaded(res))
            .catch(itemListErrored)
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

export default ItemList;