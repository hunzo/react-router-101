import React from "react"
import { Route, Redirect } from "react-router-dom"
import auth from "../services/Auth"

export default function ProtectedRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                // return <Component {...props} />
                if (auth.isAuthenticated()) {
                    return <Component {...props} />
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    )
                }
            }}
        />
    )
}
