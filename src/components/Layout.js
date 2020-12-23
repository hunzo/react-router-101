import React from "react"
import auth from "../services/Auth"

export default function Layout(props) {
    return (
        <div>
            <h1>App Layout</h1>
            <button
                onClick={() => {
                    auth.logout(() => {
                        props.history.push("/")
                    })
                }}
            >
                Logout
            </button>
        </div>
    )
}
