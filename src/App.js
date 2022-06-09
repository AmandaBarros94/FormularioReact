
import Login from './pages/Login';
import { Route, Switch } from 'react-router-dom';
import Finish from './pages/Finish';
import Form from './pages/Form';
import { BrowserRouter } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/form" component={Form} />
      <Route path="/finish" component={Finish} />
      <Route path="/register" component={Register} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
