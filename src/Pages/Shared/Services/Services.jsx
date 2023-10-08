/* eslint-disable react/prop-types */
import AllServices from "./AllServices";



const Services = ({cards}) => {
    console.log(cards);
      
    return (
        <div>
            <h1 className="text-4xl text-center mt-6 ">OUR SERVICES</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-auto container mt-6"> 

            {
              cards.map(card=> <AllServices key={card.id} card={card} ></AllServices>)
            }

            </div>
        
        </div>
    );
};

export default Services;