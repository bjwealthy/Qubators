import HomePage from './pages/homepage/homepage.component';
import Directory from './components/directory/directory.comonent';
import ShopPage from './pages/shop/shop.component.jsx'; 
import { Switch, Route } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
