import React from 'react';
import Error from '../error';
import {Link} from 'react-router-dom';

import './errorPage.css';

const ErrorPage = () => {
    return (
        <div className="error-block">
            <span className='error-text'>Такой страницы не существует:(</span>
            <Link to="/" className='error-link'>Вернуться на главную</Link>
            <Error />
        </div>
    )
}

export default ErrorPage;