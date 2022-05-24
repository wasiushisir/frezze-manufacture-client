import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../Home/firebase.init';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
    const [admin]=useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
            <h2 className='text-4xl text-primary'>Dashboard</h2>
            <Outlet />
         
          
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {!admin&&<li><Link to='/dashboard/myorder'>My Order</Link></li>}
            {!admin&&<li><Link to='/dashboard/myreview'>Add Review</Link></li>}
            <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
            {admin&&<li><Link to='/dashboard/alluser'>All User</Link></li>}
            {admin&&<li><Link to='/dashboard/manageproduct'>Manage Product</Link></li>}
            {admin&&<li><Link to='/dashboard/addproduct'>Add Product</Link></li>}
            {admin&&<li><Link to='/dashboard/manageorder'>Manage Order</Link></li>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;