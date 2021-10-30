import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header/Navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Navbar></Navbar>
                </Route>
                <Route path="/home">
                    <Navbar></Navbar>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
