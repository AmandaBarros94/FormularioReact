
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';
import Footer from './pages/Footer';
import Form from './pages/Form';
import Header from './pages/Header';
import Finish from './pages/Finish';
import { BrowserRouter } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/form" component={Form} />
      <Route path="/header" component={Header} />
      <Route path="/finish" component={Finish} />
      <Route path="/footer" component={Footer} />
      <Route path="/register" component={Register} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
