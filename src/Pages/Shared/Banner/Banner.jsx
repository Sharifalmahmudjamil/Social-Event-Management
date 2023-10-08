

const Banner = () => {
    return (

        
        <div className="carousel w-full  mx-auto mt-6">
            
           
  <div id="slide1" className="carousel-item relative w-full h-96 ">
    <img src="https://i.ibb.co/tDPz2vy/birthday-concept-with-friends-table.jpg" className="w-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-96">
    <img  src="https://i.ibb.co/tcJV9hT/celebration-birthday-party-surprise-events-icon-word.jpg" className="w-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-96">
    <img src="https://i.ibb.co/pdvp3yC/wedding-archway-backyard-happy-wedding-couple-outdoors-before-wedding-ceremony.jpg" className="w-full object-cover " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-96">
    <img src="https://i.ibb.co/Bzpc8Vs/groom-putting-ring-bride-s-finger.jpg" className="w-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full lg:h-96">
    <img src="https://i.ibb.co/ryYzWp5/people-outdoors-garden-celebration-senior-birthday-party.jpg" className="w-full lg:object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full h-96">
    <img src="https://i.ibb.co/jbkpjht/6449451.jpg" className="w-full object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            
    

    );
};

export default Banner;