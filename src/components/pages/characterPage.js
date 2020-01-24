import React, {Component} from 'react';
import {connect} from 'react-redux';
import {charListLoaded, onCharDetails, charDetailsLoaded} from '../../actions';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import WithGotService from '../hoc';
import RowBlock from '../rowBlock';

class CharacterPage extends Component {

    componentDidCatch() {

    }

    render() {

        const {GotService, charListLoaded, charList, charId, onCharDetails, charDetailsLoaded, charDetails, charDetailsVisible, charLoading} = this.props
        const page = Math.round(Math.random() * 210);

        const itemList = (
            <ItemList
                onItemDetails={onCharDetails}
                itemListLoaded={charListLoaded}
                itemList={charList}
                getData={GotService.getAllCharacters}
                page={page}
                renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const itemDetailss = (
            <ItemDetails
                itemLoading={charLoading}
                itemDetailsVisible={charDetailsVisible}
                itemDetails={charDetails}
                itemDetailsLoaded={charDetailsLoaded}
                itemId={charId}
                message={`Нужно выбрать персонажа`}
                getData={GotService.getCharacter}>
                <Field field='gender' label='Gender' />
                <Field field='born' label='Born' />
                <Field field='died' label='Died' />
                <Field field='culture' label='Culture' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetailss} />
        )
    }
}

const mapStateToProps = ({charList, charId, charDetails, charDetailsVisible, charLoading}) => {
    return {
        charList,
        charId,
        charDetails,
        charDetailsVisible,
        charLoading
    }
}

const mapDispatchToProps = {
    charListLoaded,
    onCharDetails,
    charDetailsLoaded
}

export default WithGotService()(connect(mapStateToProps, mapDispatchToProps)(CharacterPage));