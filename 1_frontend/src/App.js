import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import BlogPage from './Pages/BlogPage';
import ServicesPage from './Pages/ServicesPage';
import ContactPage from './Pages/ContactPage';
import Header from './components/1_header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutUsPage} />
          <Route path='/services' component={ServicesPage} />
          <Route path='/blog' component={BlogPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
