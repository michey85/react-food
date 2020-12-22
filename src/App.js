import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Category } from './pages/Category';
import { NotFound } from './pages/NotFound';
import { Recipe } from './pages/Recipe';

function App() {
    const {
        location: { pathname = '' },
    } = window;
    return (
        <>
            <Router>
                <Header />
                <main className='container content'>
                    <Switch>
                        <Route exact path={pathname}>
                            <Home />
                        </Route>
                        <Route path={`${pathname}/about`} component={About} />
                        <Route
                            path={`${pathname}/contacts`}
                            component={Contact}
                        />
                        <Route
                            path={`${pathname}/category/:name`}
                            component={Category}
                        />
                        <Route
                            path={`${pathname}/meal/:id`}
                            component={Recipe}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
