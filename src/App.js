// app.js is the root component ./
//use of routes,router and route.

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbars from './components/Navbars';
import Home from './components/Home';
import Blog from './components/Blog';
import Market from './components/Market';
import Login from './components/Login';
import About from './components/About';
import Signup from './components/Signup';
import Tour from './components/Tour';
import Order from './components/Order';
//import AuthContextprovider from './context/AuthContext';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //replaced Switch with Routes
import ThemecontextProvider from './context/ThemeContext';
///when using Routes instead of switch remember to use element keyword as  < Route path = '/'  element = {<Home/>} > </Route>   

function App() {


    return ( 
    
    <Router>
        <div className = 'backimage' >
        < Navbars />
     <Switch>
         <Route path = '/Market' > < Market /></Route> 
         <Route path = '/Login' > < Login /> </Route>  
         <Route path = '/About' > < About /> </Route>  
         <Route path = '/signup' > < Signup /></Route> 
         <Route path = '/Tour' > < Tour /> </Route> 
         <Route path = '/Order' > < Order /> </Route> 
         </Switch >

<div className = "container-fluid my-10 p-5 text-centre" >
        <div className = 'home' >
        <Switch >
        <ThemecontextProvider>
        <Route exact path = '/'> < Home /> </Route> 
        </ThemecontextProvider> 
        </Switch >

        <div className = '' >
        <Switch >
        <Route path = '/' > < Blog/> 
        </Route>   
        </Switch> 
        </div>  
        </div > 
        </div>  
        </div >
</Router>
    )
}
export default App













































































































































































// a module cannot have multiple export

//class App extends React.Component{
//  render(){
//    return <h1> Hello from Class Component</h1>
//  }
//}
//export default App