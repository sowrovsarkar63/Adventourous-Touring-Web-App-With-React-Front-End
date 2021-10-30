import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Header/Navbar/Navigation";
import Hero from "./components/Header/Topbanner/Hero";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Navigation></Navigation>
                        <Hero></Hero>
                    </Route>
                    <Route path="/home">
                        <Navigation></Navigation>
                        <Hero></Hero>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
