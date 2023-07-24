import './App.css';
import {  Route,  Switch } from 'wouter';
import Auth from './screens/Auth';
import Home from './screens/Home';
import AddAtfal from './components/AddAtfal';

function App() {
  return (
    <>
        {/* <Route exact path="/" element={Auth} /> */}
        {/* <Auth/> */}
        <Route path='/'><Auth/></Route>
        <Route path='/check'><AddAtfal/></Route>
        <Route path='/home'><Home/></Route>

    
    </>
  );
}

export default App;
