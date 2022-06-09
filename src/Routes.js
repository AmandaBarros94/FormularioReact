import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './pages/Footer';
import Form from './pages/Form';
import Header from './pages/Header';
import Login from './pages/Login';
import Main from './pages/finish';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/form" component={Form} />
        <Route path="/header" component={Header} />
        <Route path="/main" component={Main} />
        <Route path="/footer" component={Footer} />
      </Switch>
    )
  }
}
