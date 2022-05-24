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
import Dashboard from './components/Dashboard/Dashboard';
import MyReview from './components/Dashboard/MyReview';
import MyOrder from './components/Dashboard/MyOrder';

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
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path='myreview'element={<MyReview></MyReview>}></Route>
          <Route path='myorder'element={<MyOrder></MyOrder>}></Route>


        </Route>

      </Routes>

      <ToastContainer />
      
     
    </div>
  );
}

export default App;
