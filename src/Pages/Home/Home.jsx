import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";
import Services from "../Shared/Services/Services";
import About from "../About/About";
import Footer from "../Footer/Footer";



const Home = () => {
    const cards=useLoaderData();
    console.log(cards);
    return (
        <div> 
            <Navbar></Navbar>
            <Banner></Banner>
            <Services cards={cards}></Services>
            <div className="mx-auto container">
            <About></About>
            
            <Footer></Footer>
            
            </div>
            
        </div>
    );
};

export default Home;