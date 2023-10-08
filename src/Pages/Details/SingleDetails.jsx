/* eslint-disable react/prop-types */


const SingleDetails = ({card}) => {
    console.log(card);
    const {title,image,description,price} = card || {} 

    
    return (
        <div className="mt-6" >
            <div className="card  bg-base-100 shadow-xl">
  
        <img src={image} alt="" />
    
      <div className="card-body">
       <h2 className="card-title text-3xl font-medium">{title}</h2>
     <div>
      <p className="text-xl"> <span className="text-2xl font-medium">price: {price}</span></p>
   <p> {description}</p>
   </div>
    
    
  </div>
</div>
        </div>
    );
};

export default SingleDetails;