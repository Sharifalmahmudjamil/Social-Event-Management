import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";


const Navbar = () => {

    const {user,logout}=useContext(AuthContext);

      const handleSignOut=()=>{
          logout()
          .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.error(error)
            // An error happened.
          });
          
      }



    const navLinks=
    <>
    <li className="text-white"><NavLink to="/">Home</NavLink></li>
    <li className="text-white"><NavLink to="/about">About</NavLink></li>
    <li className="text-white"><NavLink to="/blog">Blog</NavLink></li>
    <li className="text-white"><NavLink to="/gallery">Gallery</NavLink></li>
     
    </>
    return (
        <div>
            <div className="navbar bg-zinc-700">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-slate-400">
        {navLinks}
      </ul>
    </div>
    <img className=" lg:w-[100px]  " src="https://i.ibb.co/HdmLgqw/312-E-logo-Social-Events-COLORE-1920w.png" alt="" />

    <Link to="/">
    <a className="btn btn-ghost normal-case lg:text-2xl  text-white"><span className="text-lime-500 ">Social</span> Events</a>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 ">
      {navLinks}
    </ul>
  </div>

  <div className="navbar-end">
  
  {/* <div className="">
  {
      user&& <span className="text-white ">{user.displayName}</span>
    }
  
  </div> */}

            {
              user?
              <button onClick={handleSignOut} className="lg:btn">SignOut</button>
              :
              <Link to="/login">
              <button className="btn btn-warning">Login</button>
              </Link>
            }

           
  </div>
    </div>
        <div className="mt-6">
    <h1 className="text-4xl text-center "> SOCIAL EVENTS ORGANIZERS</h1>
    </div>
        </div>
    );
};

export default Navbar;