
import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<SignIn/>}/>
          <Route exact path='/signUp' element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
