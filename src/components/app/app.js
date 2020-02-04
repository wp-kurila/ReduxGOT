import React from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, HousePage, BookPage} from '../pages';
import ErrorPage from '../errorPage';
import {Switch, Route} from 'react-router-dom';

import './app.css';


const App = () => {
    return (
        <div className='app'> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={RandomChar}/>
                    <Route
                        path='/characters'
                        component={CharacterPage} />
                    <Route
                        path='/houses'
                        component={HousePage} />
                    <Route
                        path='/books'
                        exact
                        component={BookPage} />
                    <Route
                        path='*'
                        component={ErrorPage} />
                </Switch>
            </Container>
        </div>
    );
};

export default App;