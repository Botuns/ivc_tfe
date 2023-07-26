import './App.css';
import {  Route,  Switch } from 'wouter';
import Auth from './screens/Auth';
import Home from './screens/Home';
import AddAtfal from './components/AddAtfal';
import AddAtfalPage from './screens/AddAtfalPage';
import NotFound from './components/NotFound';
import UserDetailsPage from './components/UserDetailsPage';
import AllAtfalPage from './screens/AllAtfalPage';

function App() {
  return (
    <>
        {/* <Route exact path="/" element={Auth} /> */}
        {/* <Auth/> */}
        <Route path='/'><Auth/></Route>
        <Route path='/new-tifl'><AddAtfalPage/></Route>
        <Route path='/home'><Home/></Route>
        <Route path='*'><NotFound/></Route>
        <Route path='/print-details'><UserDetailsPage/></Route>
        <Route path='/see-all-atfal'><AllAtfalPage/></Route>




    
    </>
  );
}

export default App;
