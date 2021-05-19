import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import RouteWithLayout from './components/RouteWithLayout';
import { Normal as NormalLayout, Dashboard as DashboardLayout } from './layout';
import LoginPage from './view/Login';
import Customers from './view/Customers';
import Contracts from './view/Contracts';
import Dashboard from './view/Dashboard';
import Payments from './view/Payments';
import Companies from './view/Companies';

const App = () => {
  return (
    <Router>
      <Switch>
          <Redirect
            exact
            from="/"
            to={"/login"}
          />
          <RouteWithLayout
            component={LoginPage}
            exact
            path='/login'
            layout={NormalLayout}
          />
          <RouteWithLayout
            component={Dashboard}
            exact
            path='/dashboard'
            layout={DashboardLayout}
          />
          <RouteWithLayout
            component={Customers}
            exact
            path='/customers'
            layout={DashboardLayout}
          />
          <RouteWithLayout
            component={Contracts}
            exact
            path='/contracts'
            layout={DashboardLayout}
          />
          <RouteWithLayout
            component={Payments}
            exact
            path='/payments'
            layout={DashboardLayout}
          />
          <RouteWithLayout
            component={Companies}
            exact
            path='/companies'
            layout={DashboardLayout}
          />
        </Switch>
    </Router>
  )
}

export default App;