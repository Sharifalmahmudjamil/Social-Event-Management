import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import SingleDetails from "./SingleDetails";
import { Helmet } from "react-helmet-async";



const Details = () => {

    const [card,setCard]=useState({}); 

    const {id} = useParams();
    console.log(id);

    const cards = useLoaderData()
    console.log(cards);

    useEffect(()=>{
        const findCard=cards?.find((card)=>card.id==id);
        console.log(findCard);
        setCard(findCard)
    },[id,cards])

    return (
        <div>
            <div>
            <Helmet> <title>Social Events | Details</title></Helmet>
            <Navbar></Navbar>
            </div>
            <div className="mx-auto container">
            <SingleDetails  card={card}></SingleDetails>
            
            </div>
        </div>
    );
};

export default Details;