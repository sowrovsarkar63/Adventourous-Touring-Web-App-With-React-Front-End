import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Header/Navbar/Navigation";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Navigation></Navigation>
                    </Route>
                    <Route path="/home">
                        <Navigation></Navigation>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
