import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"

import LandingPage from "./components/LandingPage"
import AppLayout from "./components/Layout"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
    return (
        <div className="App">
            <h1>React Router Authentication</h1>

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <ProtectedRoute exact path="/app" component={AppLayout} />
                    <Route path="*" component={() => "404 page not found"} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
