import './App.css';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Join from './pages/Join';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/join" component={Join}></Route>
      </Router>
    </div>
  );
}

export default App;
