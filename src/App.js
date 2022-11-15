import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import TutorialsScreen from './screens/TutorialsScreen';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/tutorials' element={<TutorialsScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
