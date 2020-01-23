import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import WithGotService from '../hoc';
import RowBlock from '../rowBlock';

class HousePage extends Component {

    componentDidCatch() {

    }

    render() {

        const {GotService} = this.props

        const page = Math.round(Math.random() * 44);


        const itemList = (
            <ItemList 
                getData={GotService.getAllHouses}
                page={page}
                renderItem={({name, region}) => `${name} (${region})`}/>
        )

        const itemDetails = (
            <ItemDetails
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

export default WithGotService()(HousePage);