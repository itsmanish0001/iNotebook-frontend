/* eslint-disable no-unused-vars */
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import NoteState from './context/notes/NoteState';


import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';




function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message ="hello this a alert"/>
          <div className='container'>
            <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/about' element={< About />}></Route>
              <Route exact path='/login' element={<Login/>}></Route>
              <Route exact path='/signup' element={< Signup />}></Route>

            </Routes>
          </div>

        </Router>
      </NoteState>
    </>
  );
}

export default App;
