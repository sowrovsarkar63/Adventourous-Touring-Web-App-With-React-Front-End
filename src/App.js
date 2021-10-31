import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Header/Navbar/Navigation";
import Hero from "./components/Header/Topbanner/Hero";
import Multilingual from "./components/Multilingual/Multilingual";
import Allbooking from "./components/Pages/Allbooking/Allbooking";
import Login from "./components/Pages/Login/Login";
import Mybooking from "./components/Pages/Mybooking/Mybooking";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ServiceDetails from "./components/Services/ServiceDetails";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import AuthProvider from "./Context/AuthProvider";

function App() {
    return (
        <>
            <AuthProvider>
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
                        <PrivateRoute path="/mybooking">
                            <Navigation></Navigation>
                            <Mybooking></Mybooking>
                            <Footer></Footer>
                        </PrivateRoute>
                        <PrivateRoute path="/allbooking">
                            <Navigation></Navigation>
                            <Allbooking></Allbooking>
                            <Footer></Footer>
                        </PrivateRoute>
                        <PrivateRoute path="/details/:id">
                            <Navigation></Navigation>
                            <ServiceDetails></ServiceDetails>
                            <Footer></Footer>
                        </PrivateRoute>

                        <Route path="/login">
                            <Navigation></Navigation>
                            <Login></Login>
                            <Footer></Footer>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;
