import Navbar from "../Shared/Navbar/Navbar";
import { AiFillHeart } from "react-icons/ai";
import { FaEye } from 'react-icons/fa';
import { BsEmojiHeartEyes} from "react-icons/bs";
import Footer from "../Footer/Footer";


const OurGallery = () => {
    return (
        <div >
            <Navbar></Navbar>
            <h1 className="text-5xl font-bold text-center mt-4 ">Our Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-auto container mt-6">
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img src="https://i.ibb.co/r5ZZJ2q/Family-Gatherings-1.jpg" alt="" /></figure>

        <div className="flex gap-4 justify-center p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div>
  
</div>
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img className="object-cover" src="https://i.ibb.co/LvLPdQP/wedding-planner-crystal-day-event-planner-wedding-arrangements-2-15-360499-160917597386777.jpg" alt="" /></figure>

  <div className="flex gap-4 justify-center p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div>

 
</div>
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img src="https://i.ibb.co/tbp3J4s/beautiful-jungle-party-decorations.jpg" alt="Shoes" /></figure>

  <div className="flex gap-4 justify-center p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div>
 
</div>
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img src="https://i.ibb.co/h8zL6YR/beautiful-senior-birthday-party.jpg" alt="Shoes" /></figure>

  <div className="flex gap-4 justify-center p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div> 
 
</div>
            <div className="card w-96 bg-slate-200 shadow-xl">
  <figure><img src="https://i.ibb.co/F5yHZgN/pexels-kampus-production-7802429-1024x684.jpg" alt="Shoes" /></figure>

  <div className="flex gap-4 justify-center p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div> 
 
</div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/VC0XK0s/jand-party.jpg" alt="Shoes" /></figure>
  <div className="flex gap-4 justify-center p-2">
        <AiFillHeart className="text-rose-700 text-2xl "></AiFillHeart>
        <FaEye className="text-2xl"></FaEye>
        <BsEmojiHeartEyes className="text-lg text-rose-600"></BsEmojiHeartEyes>
        </div> 
 
</div>

</div>
<Footer></Footer>
        </div>
    );
};

export default OurGallery;