import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from "./utils/style/GlobalStyle";
import Header from './components/Header'
import Home from './pages/Home'
import Error from './components/Error'
import Footer from "./components/Footer";
import { ThemeProvider } from './utils/context'
import Teams from "./pages/Teams";
import Groups from "./pages/Groups";
import Schedule from "./pages/Schedule";
import TournamentForm from "./pages/TournamentForm";
import {FormProvider} from "./context/FormContext";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <GlobalStyle />
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/form">
                        <FormProvider>
                            <TournamentForm />
                        </FormProvider>
                    </Route>
                    <Route path="/teams">
                        <Teams />
                    </Route>
                    <Route path="/groups">
                        <Groups />
                    </Route>
                    <Route path="/schedule">
                        <Schedule />
                    </Route>
                    <Route>
                        <Error />
                    </Route>
                </Switch>
                <Footer />
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)