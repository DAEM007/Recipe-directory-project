// all react imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// styles import
import './App.css';
// components import
import NavBar from './components/NavBar';
import ThemeSelector from './components/ThemeSelector';
// pages
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <NavBar />
      <ThemeSelector />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/create" element={ <Create /> }/>
          <Route path="/recipe/:id" element={ <Recipe /> }/>
          <Route path="/search/recipe/:id" element={ <Recipe /> }/>
          <Route path="/search" element={ <Search /> }/>
          <Route path='*' element={ <NotFound /> }/>
        </Routes>
    </Router>
  );
}

export default App;
