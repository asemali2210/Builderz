import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Service from './pages/Service';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Single from './pages/Single';
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch/>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact  path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact  path="/team" component={Team} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/single" component={Single} />
        <Route  exact path="/contact" component={Contact} />
      </div>
      <Switch/>
    </Router>
  );
}

export default App;
