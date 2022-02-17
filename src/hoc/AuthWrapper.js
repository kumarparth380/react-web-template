import React from "react";
import { Route, Redirect } from "react-router";
import { useIsLoggedIn } from "hooks";
import PrivateLayout from "../layout/privateLayout";

const AuthWrapper = ({ component: Component, ...rest }) => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn === true ? (
          <PrivateLayout {...props}>
            <Component {...props} />
          </PrivateLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default AuthWrapper;
