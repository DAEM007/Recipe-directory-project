// all react imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/create" element={ <Create /> }/>
          <Route path="/recipe/:id" element={ <Recipe /> }/>
          <Route path="/search" element={ <Search /> }/>
        </Routes>
    </Router>
  );
}

export default App;
