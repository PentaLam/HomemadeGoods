import './App.css';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Join from './pages/Join';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#121212"}}>
      <Router>
        <NavigationBar/>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/join" component={Join}></Route>
        <Route path="/listing/:id" render={props => <Detail {...props}/>}></Route>
      </Router>
    </div>
  );
}

export default App;
