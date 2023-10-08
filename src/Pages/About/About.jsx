/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const About = () => {
    return (
        <div>
            
            <div className="hero min-h-screen bg-slate-200 mt-6">
            
            
  <div className="hero-content flex-col lg:flex-row">
  
    <img src="https://i.ibb.co/kKHtvYS/GST-Assessment-based-on-Events-Social-Media-Andhra-Pradesh-HC-Petition-Event-Management-Company-taxs.jpg" className="max-w rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="py-6"> <span className="text-3xl font-semibold text-rose-600">Social Events</span> we believe that life's most cherished moments deserve to be celebrated with style, grace, and heartfelt joy. Our mission is to turn your special occasions into unforgettable memories that will be cherished for a lifetime....</p>
      <Link to='/about'>
      <button className="btn btn-secondary">Read More</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;