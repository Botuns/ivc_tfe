import './App.css';
import {  Route,  Switch } from 'wouter';
import Auth from './screens/Auth';
import Home from './screens/Home';
import AddAtfal from './components/AddAtfal';
import AddAtfalPage from './screens/AddAtfalPage';

function App() {
  return (
    <>
        {/* <Route exact path="/" element={Auth} /> */}
        {/* <Auth/> */}
        <Route path='/'><Auth/></Route>
        <Route path='/new-tifl'><AddAtfalPage/></Route>
        <Route path='/home'><Home/></Route>

    
    </>
  );
}

export default App;
