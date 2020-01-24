import React, {Component} from 'react';
import {connect} from 'react-redux';
import {houseListLoaded, onHouseDetails, houseDetailsLoaded} from '../../actions';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import WithGotService from '../hoc';
import RowBlock from '../rowBlock';

class HousePage extends Component {

    componentDidCatch() {

    }

    render() {

        const {GotService, houseListLoaded, houseList, houseId, onHouseDetails, houseDetailsLoaded, houseDetails, houseDetailsVisible, houseLoading} = this.props

        const page = Math.round(Math.random() * 44);


        const itemList = (
            <ItemList
                onItemDetails={onHouseDetails}
                itemListLoaded={houseListLoaded}
                itemList={houseList}
                getData={GotService.getAllHouses}
                page={page}
                renderItem={({name, region}) => `${name} (${region})`}/>
        )

        const itemDetails = (
            <ItemDetails
                itemLoading={houseLoading}
                itemDetailsVisible={houseDetailsVisible}
                itemDetails={houseDetails}
                itemDetailsLoaded={houseDetailsLoaded}
                itemId={houseId}
                message={`Нужно выбрать дом`}
                getData={GotService.getHouse}>
                <Field field='region' label='Region' />
                <Field field='words' label='Words' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}

const mapStateToProps = ({houseList, houseId, houseDetails, houseDetailsVisible, houseLoading}) => {
    return {
        houseList,
        houseId,
        houseDetails,
        houseDetailsVisible,
        houseLoading
    }
}

const mapDispatchToProps = {
    houseListLoaded,
    onHouseDetails,
    houseDetailsLoaded
}

export default WithGotService()(connect(mapStateToProps, mapDispatchToProps)(HousePage));