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
import MyProfile from './components/Dashboard/MyProfile';
import Alluser from './components/Dashboard/Alluser';
import AddProducts from './components/Dashboard/AddProducts';
import ManageProducts from './components/Dashboard/ManageProducts';
import ManageOders from './components/Dashboard/ManageOders';
import Requireadmin from './components/Requireadmin';
import Pay from './components/Dashboard/Pay';

import Blogs from './components/Blogs';
import MyPortfolio from './components/MyPortfolio';
import NotFound from './components/NotFound';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/blog'element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio'element={<MyPortfolio></MyPortfolio>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signOut' element={<SignOut></SignOut>}></Route>
        <Route path='/registration' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path='myreview'element={<MyReview></MyReview>}></Route>
          <Route path='myorder'element={<MyOrder></MyOrder>}></Route>
          <Route path='myprofile'element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id'element={<Pay></Pay>}></Route>
          
          <Route path='alluser'element={<Requireadmin><Alluser></Alluser></Requireadmin>}></Route>
          <Route path='addproduct'element={<Requireadmin><AddProducts></AddProducts></Requireadmin>}></Route>
          <Route path='manageproduct'element={<Requireadmin><ManageProducts></ManageProducts></Requireadmin>}></Route>
          <Route path='manageorder'element={<Requireadmin><ManageOders></ManageOders></Requireadmin>}></Route>


        </Route>
        <Route path='*'element={<NotFound></NotFound>}></Route>

      </Routes>

      <ToastContainer />
      
     
    </div>
  );
}

export default App;
