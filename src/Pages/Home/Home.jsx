import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";
import Services from "../Shared/Services/Services";
import About from "../About/About";
import Footer from "../Footer/Footer";
import ClientReview from "../ClientReview/ClientReview";
import { Helmet } from "react-helmet-async";




const Home = () => {
    const cards=useLoaderData();
    console.log(cards);
    return (
        <div>
            <Helmet> <title>Social Events | Home</title></Helmet>
            
            <Navbar></Navbar>
            <Banner></Banner>
            <Services cards={cards}></Services>
            <div className="mx-auto container">
            <About></About>
            <ClientReview></ClientReview>
            <Footer></Footer>
            
            </div>
            
        </div>
    );
};

export default Home;