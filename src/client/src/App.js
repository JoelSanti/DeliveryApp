import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import OnePage from './components/One_page/OnePage';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import GestionRestaurante from './components/GestionRestaurante/GestionRestaurante';


function App() {


  return (
    <Router>

    <Switch>

        <Route exact path="/" component={OnePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
        <Route exact path="/gr" component={GestionRestaurante} />

    </Switch>
    
    </Router>
   
  );
}

export default App;