import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/Navbar/Navigation";
import Hero from "./components/Header/Topbanner/Hero";
import Services from "./components/Services/Services";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Navigation></Navigation>
                        <Hero></Hero>
                        <Services></Services>
                        <Footer></Footer>
                    </Route>
                    <Route path="/home">
                        <Navigation></Navigation>
                        <Hero></Hero>
                        <Services></Services>
                        <Footer></Footer>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
