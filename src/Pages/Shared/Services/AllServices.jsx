/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllServices = ({card}) => {
    const {id,title,image,description} = card || {}
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>
        {description.length >150
        ? <p>{description.slice(0,150)} <Link to={`/cards/${id}`} className="text-2xl text-blue-600"> Read More.....</Link></p>
        : <p>{description}</p>
        
        }
    </p>
  
  </div>
</div>
        </div>
    );
};

export default AllServices;