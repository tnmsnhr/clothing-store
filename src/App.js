import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
