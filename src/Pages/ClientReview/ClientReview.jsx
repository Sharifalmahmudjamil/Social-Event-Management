/* eslint-disable react/no-unescaped-entities */


const ClientReview = () => {
    return (
        <div>
            <h1 className="text-4xl font-medium text-center mt-6"> Client Review</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto container gap-4 mt-4">
           <div className="card  bg-slate-200 shadow-xl">
  <figure><img className="rounded-full w-52 h-52" src="https://i.ibb.co/hDtQpys/portrait-smiling-blonde-woman.jpg" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
          Arthy
      <div className="badge badge-secondary">Happy Client</div>
    </h2>
    <p> <span className="text-xl text-pink-400">Social Events Organizers</span> Absolutely delighted with our wedding event! From the stunning decor to the seamless coordination, everything was flawless. Our guests were raving about the delicious food and impeccable service. A big shoutout to the talented team for making our special day truly magical. Highly recommend!</p>
    <div className="card-actions justify-start">
      <div className="badge badge-outline">Weddings</div> 
      <div className="badge badge-outline">Events</div>
    </div>
  </div>
</div>
           <div className="card  bg-slate-200 shadow-xl">
  <figure><img className="rounded-full w-52 h-52" src="https://i.ibb.co/q0mMMrZ/portrait-optimistic-businessman-formalwear.jpg" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
          Jhon Alex
      <div className="badge badge-secondary">Happy Client</div>
    </h2>
    <p> <span className="text-xl text-pink-400">Social Events Organizers</span> We had an incredible time at our birthday party event! The decorations were fabulous, and the entertainment kept everyone engaged and entertained throughout the celebration. The delicious food and drinks were a hit, and the staff's professionalism made the whole experience stress-free. Thanks to the team for making our day so memorable!</p>
    <div className="card-actions justify-start">
      <div className="badge badge-outline">Birthday</div> 
      <div className="badge badge-outline">Events</div>
    </div>
  </div>
</div>
           <div className="card  bg-slate-200 shadow-xl">
  <figure><img className="rounded-full w-52 h-52" src="https://i.ibb.co/kJdDG0r/portrait-confident-businesswoman.jpg" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
          Sofia
      <div className="badge badge-secondary">Happy Client</div>
    </h2>
    <p> <span className="text-xl text-pink-400">Social Events Organizers</span> Our engagement party was an absolute blast! The venue was beautifully decorated, creating the perfect romantic atmosphere. The event planning team did an outstanding job, ensuring everything ran smoothly. From the delightful cuisine to the attentive service, our guests were truly impressed. Thanks for making our engagement celebration unforgettable!</p>
    <div className="card-actions justify-start">
      <div className="badge badge-outline">Engagements</div> 
      <div className="badge badge-outline">Events</div>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default ClientReview;