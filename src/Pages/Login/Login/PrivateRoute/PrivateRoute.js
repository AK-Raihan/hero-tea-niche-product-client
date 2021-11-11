import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import useAuth from '../../../../hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let {user, isLoading} = useAuth();
    if(isLoading){return <CircularProgress />}
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
          
    );
};

export default PrivateRoute;