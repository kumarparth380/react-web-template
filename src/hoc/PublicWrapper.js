import React from "react";
import { Redirect, Route } from "react-router";
import PublicLayout from "../layout/publicLayout";
import { useIsLoggedIn } from "hooks";

const PublicWrapper = ({ component: Component, ...rest }) => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn !== true ? (
          <PublicLayout {...props}>
            <Component {...props} />
          </PublicLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/u/dashboard",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PublicWrapper;
