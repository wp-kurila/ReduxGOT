import React from 'react';
import GotServiceContext from '../gotServiceContext';

const WithGotService = () => (Wrapped) => {
    return (props) => {
        return (
            <GotServiceContext.Consumer>
                {
                    (GotService) => {
                        return <Wrapped {...props} GotService={GotService} />
                    }
                }
            </GotServiceContext.Consumer>
        )
    }
};

export default WithGotService;