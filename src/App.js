import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/Navbar/Navigation";
import Hero from "./components/Header/Topbanner/Hero";
import Multilingual from "./components/Multilingual/Multilingual";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Navigation></Navigation>
                        <Hero></Hero>
                        <Services></Services>
                        <Multilingual></Multilingual>
                        <Team></Team>
                        <Footer></Footer>
                    </Route>
                    <Route path="/home">
                        <Navigation></Navigation>
                        <Hero></Hero>
                        <Services></Services>
                        <Multilingual></Multilingual>
                        <Team></Team>

                        <Footer></Footer>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
