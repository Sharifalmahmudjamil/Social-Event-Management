import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import {  useState } from "react";




const Login = () => {
    
    // eslint-disable-next-line no-unused-vars
    const [error,setError]=useState("");


    const handleLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        const email= form.get("email");
        const password= form.get("password");
        console.log(email,password);

        // email and password validation
        // if(email,password){
        //     createUser(email,password)
        //     .then(result=>console.log(result.user))
        //     .catch(error=>
        //         setError(error.message));
        //         // swal("Email and Password are not valid. please check Your Email and password")
        // }
        
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:w-1/2 ">
    <div className="text-center lg:text-center">
      <h1 className="text-5xl font-bold text-pink-500">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
       <p>{error}</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="Email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="Password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-secondary">Login</button>
        </div>
      </form>
      <p className="text-center mb-8 p-5">Do not Have An Account ? <Link className="text-rose-600 font-bold" to="/register">Create an Account</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;