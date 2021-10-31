import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { users, isloading } = useAuth();
    if (isloading) {
        return null;
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                users.email || users.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
