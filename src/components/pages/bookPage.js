import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import WithGotService from '../hoc';
import RowBlock from '../rowBlock';

class BookPage extends Component {

    componentDidCatch() {

    }

    render() {

        const {GotService} = this.props

        const page = Math.round(Math.random() * 2);


        const itemList = (
            <ItemList 
                getData={GotService.getAllBooks}
                page={page}
                renderItem={({name, numberOfPages}) => `${name} (${numberOfPages})`}/>
        )

        const itemDetails = (
            <ItemDetails
                message={`Нужно выбрать книгу`}
                getData={GotService.getBook}>
                <Field field='numberOfPages' label='Number of pages' />
                <Field field='publiser' label='Publiser' />
                <Field field='released' label='Released' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}

export default WithGotService()(BookPage);