import React from 'react'
import { Route, Redirect } from 'react-router';

function PrivateRoute ({ component: BubblePage, ...rest}) {
    return (<Route
        {...rest}
        render={props => {
            if (localStorage.getItem('token')) {
                return <BubblePage {...props} />;
            }
            return <Redirect to='/' />;
        }}
        />
    )
}



export default PrivateRoute