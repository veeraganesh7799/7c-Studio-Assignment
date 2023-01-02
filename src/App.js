import {Route, Switch} from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Customers from './components/Customers'
import Demos from './components/Demos'
import Products from './components/Products'
import SalesTeam from './components/SalesTeam'
import Script from './components/Script'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/customers" component={Customers} />
      <Route exact path="/demos" component={Demos} />
      <Route exact path="/sales_team" component={SalesTeam} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/demo_script" component={Script} />
    </Switch>
  )
}

export default App
