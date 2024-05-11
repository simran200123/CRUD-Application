import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Register from './components/Register';
import {Route,Routes} from 'react-router-dom'
import Edit from './components/Edit';
import Details from './components/Details';

function App() {
  return (
    <>
      <Navbaar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/register' Component={Register} />
          <Route exact path='/edit/:id' Component={Edit} />
          <Route exact path='/view/:id' Component={Details} />
        </Routes>
    </>
  );
}

export default App;
