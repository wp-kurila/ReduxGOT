import React, {Component} from 'react';
import {connect} from 'react-redux';
import {houseListLoaded, onHouseDetails, houseDetailsLoaded, houseListErrored} from '../../actions';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import WithGotService from '../hoc';
import RowBlock from '../rowBlock';

class HousePage extends Component {
    
    render() {

        const {GotService, houseListLoaded, houseList, houseId, onHouseDetails, houseDetailsLoaded, houseDetails, houseDetailsVisible, houseLoading, houseListErrored, houseListError} = this.props

        const page = Math.round(Math.random() * 44);

        const itemList = (
            <ItemList
                itemListErrored={houseListErrored}
                onItemDetails={onHouseDetails}
                itemListLoaded={houseListLoaded}
                itemList={houseList}
                getData={GotService.getAllHouses}
                page={page}
                renderItem={({name, region}) => `${name} (${region})`}/>
        )

        const itemDetailss = (
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
            <RowBlock
                left={itemList} 
                right={itemDetailss} 
                itemListError={houseListError} />
        )
    }
}

const mapStateToProps = ({houseList, houseId, houseDetails, houseDetailsVisible, houseLoading, houseListError}) => {
    return {
        houseList,
        houseId,
        houseDetails,
        houseDetailsVisible,
        houseLoading,
        houseListError
    }
}

const mapDispatchToProps = {
    houseListErrored,
    houseListLoaded,
    onHouseDetails,
    houseDetailsLoaded
}

export default WithGotService()(connect(mapStateToProps, mapDispatchToProps)(HousePage));