import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bookListLoaded, onBookDetails, bookDetailsLoaded} from '../../actions';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import WithGotService from '../hoc';
import RowBlock from '../rowBlock';

class BookPage extends Component {

    componentDidCatch() {

    }

    render() {

        const {GotService, bookListLoaded, bookList, bookId, onBookDetails, bookDetailsLoaded, bookDetails, bookDetailsVisible, charLoading} = this.props

        const page = Math.round(Math.random() * 2);


        const itemList = (
            <ItemList
                onItemDetails={onBookDetails}
                itemListLoaded={bookListLoaded}
                itemList={bookList} 
                getData={GotService.getAllBooks}
                page={page}
                renderItem={({name, numberOfPages}) => `${name} (${numberOfPages})`}/>
        )

        const itemDetailss = (
            <ItemDetails
                itemLoading={charLoading}
                itemDetailsVisible={bookDetailsVisible}
                itemDetails={bookDetails}
                itemDetailsLoaded={bookDetailsLoaded}
                itemId={bookId}
                message={`Нужно выбрать книгу`}
                getData={GotService.getBook}>
                <Field field='numberOfPages' label='Number of pages' />
                <Field field='publiser' label='Publiser' />
                <Field field='released' label='Released' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetailss} />
        )
    }
}

const mapStateToProps = ({bookList, bookId, bookDetails, bookDetailsVisible, charLoading}) => {
    return {
        bookList,
        bookId,
        bookDetails,
        bookDetailsVisible,
        charLoading
    }
}

const mapDispatchToProps = {
    bookListLoaded,
    onBookDetails,
    bookDetailsLoaded
}

export default WithGotService()(connect(mapStateToProps, mapDispatchToProps)(BookPage));