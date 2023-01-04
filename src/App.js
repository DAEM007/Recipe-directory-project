// all react imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// styles import
import './App.css';
// components import
import NavBar from './components/NavBar';
// pages
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';


function App() {
  return (
    <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/create" component={Create}/>
          <Route path="/recipe/:id" component={Recipe}/>
          <Route path="/search" component={Search}/>
        </Switch>
    </Router>
  );
}

export default App;
