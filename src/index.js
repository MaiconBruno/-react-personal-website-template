import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Ex from './pages/Excluir';
import Post from './pages/Postar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
<React.StrictMode>
    <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/login" component={Login} />
        <Route path="/Menu" component={Menu} />
        <Route path="/admin_user_post" component={Post} />
        <Route path="/excluir" component={Ex} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

