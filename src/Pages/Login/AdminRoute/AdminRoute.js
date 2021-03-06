import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import useAuth from '../../../hooks/useAuth/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    let {user, admin, isLoading} = useAuth();
    if(isLoading){return <CircularProgress />}
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
          
    );
};

export default AdminRoute;