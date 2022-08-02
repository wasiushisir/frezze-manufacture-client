import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './Home/firebase.init';
import icon from '../img/manufacturing-icon.png'

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const menuitems=<>
        
        <li><Link to='/'>Home</Link></li>
       { user&&<li><Link to='/dashboard'>Dashboard</Link></li>}
       <li><Link to='/blog'>Blog</Link></li>
       <li><Link to='/portfolio'>My Portfolio</Link></li>
       <li><a href='#tools'>Tools</a></li>
        
        {user?<li><Link to='/signOut'>SignOut</Link></li> :<li><Link to='/login'>Login</Link></li>}
      
  
  
  
  </>
  



    return (
        <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       { menuitems}
        
      </ul>
    </div>
    <Link to='/' class="btn btn-ghost normal-case text-xl"> <img style={{width:'35px'}} src={icon} alt="" />   Ahmed <span className='text-primary p-2'>Manufacturing</span></Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {menuitems}
    </ul>
  </div>
  <div className="navbar-end">
  <label tabindex="1" for="my-drawer-2" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

      

  </div>
 
</div>
    );
};

export default Navbar;