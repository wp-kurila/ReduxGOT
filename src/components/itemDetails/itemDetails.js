import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemDetailsLoaded} from '../../actions';
import Spinner from '../spinner';

import './itemDetails.css';

const Field = ({itemDetails, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{itemDetails[field]}</span>
        </li>
    )
}

export {
    Field
}

class ItemDetails extends Component {

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData, itemDetailsLoaded} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then(res => itemDetailsLoaded(res))
    }

    render() {

        const {itemDetails, itemLoading, itemDetailsVisible, message} = this.props;

        if (!itemDetailsVisible) {
            return <span className='select-error'>{message}</span>
        }

        if (!itemDetails) {
            return (
                <div className="item-details rounded">
                    <Spinner />
                </div>
            )
        }

        const {name} = itemDetails;

        const view = (
            <>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, child => {
                            return React.cloneElement(child, {itemDetails}) 
                        })
                    }
                </ul>
            </>
        )

        const content = itemLoading ? <Spinner /> : view

        return (
            <div className="item-details rounded">
                {content}
            </div>
        );
    }
}

const mapStateToProps = ({itemId, itemDetails, itemLoading, itemDetailsVisible}) => {
    return {
        itemId,
        itemDetails,
        itemLoading,
        itemDetailsVisible,
    }
}

const mapDispatchToProps = {
    itemDetailsLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
