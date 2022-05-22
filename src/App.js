import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signOut' element={<SignOut></SignOut>}></Route>
        <Route path='/registration' element={<SignUp></SignUp>}></Route>

      </Routes>
      
     
    </div>
  );
}

export default App;
