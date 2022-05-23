import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import Purchase from './components/Purchase';
import RequireAuth from './components/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signOut' element={<SignOut></SignOut>}></Route>
        <Route path='/registration' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>

      </Routes>

      <ToastContainer />
      
     
    </div>
  );
}

export default App;
