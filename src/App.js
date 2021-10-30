import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
