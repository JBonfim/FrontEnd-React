import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './create';
import Edit from './edit';
import Index from './index';

var dados={
    partida:{
        estadio: "Maracanã/RJ",
        data: "24/04/2019",
        horario: "19h"
    },
    casa:{
        nome: "LDU"
    }
    ,
    visitante:{
        nome: "Flamengo"
    }
};

export default class App extends React.Component{
    
    render(){
        
        return (
          <Router>
          <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand">Cadastro de Produtos</Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create'} className="nav-link">Cadastrar</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/index'} className="nav-link">Index</Link>
                  </li>
                </ul>
              </div>
            </nav> <br/>
            <div className="container">
              
              <Switch>
                  <Route exact path='/create' component={ Create } />
                  <Route path='/edit/:id' component={ Edit } />
                  <Route path='/index' component={ Index } />
              </Switch>
            </div>
            
          </div>
        </Router>
            
        );
    }
    
}