import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import WithGotService from '../hoc';
import RowBlock from '../rowBlock';

class CharacterPage extends Component {

    componentDidCatch() {

    }

    render() {

        const {GotService} = this.props

        const page = Math.round(Math.random() * 210);

        const itemList = (
            <ItemList 
                getData={GotService.getAllCharacters}
                page={page}
                renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const itemDetails = (
            <ItemDetails
                message={`Нужно выбрать персонажа`}
                getData={GotService.getCharacter}>
                <Field field='gender' label='Gender' />
                <Field field='born' label='Born' />
                <Field field='died' label='Died' />
                <Field field='culture' label='Culture' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}

export default WithGotService()(CharacterPage);