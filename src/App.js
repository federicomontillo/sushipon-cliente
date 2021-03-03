import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import PlatoState from './context/platos/platoState';
import tokenAuth from './config/tokenAuth';
import RutaPrivada from './components/rutas/RutaPrivada';
import './App.css';
import { Login } from './components/auth/Login';
import { EditarMenu } from './components/editarmenu/EditarMenu';
import { Footer } from './components/footer/Footer';
import { Barra } from './components/navbar/Barra';

import { Home } from './pages/Home';
import { Menu } from './pages/menu';


//Revisar si tenes un token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {

  return (
    <PlatoState>
      <AlertaState>
        <AuthState>
          <Router>
              <Barra />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/menu' component={Menu}/>  
                    <Route exact path='/login' component={Login}/>  
                    <RutaPrivada exact path='/editarmenu' component={EditarMenu}/>  
                </Switch>
              <Footer />
          </Router>
        </AuthState>
      </AlertaState>
    </PlatoState>

)
}

export default App;
