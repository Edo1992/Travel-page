import React from 'react';


function Journal(props) {
  return (
       <section>
          <div className="image">
               <img src={props.site.image}  alt="destination"/>
          </div>
           <div className="info">
                <div className="top-info">
                      <img src="./location.png" alt="location" className="location-image" />
                      <p>ARMENIA</p>
                      <a href={props.site.location} target="_blank" className="link">View on google maps</a>
                </div>

                <div  className="bottom-info">
                      <h1>{props.site.title}</h1>
                      <h3>{props.site.built}</h3>
                      <p>{props.site.description}</p>
                </div>
        </div>
           
       </section>
  )
}

export default Journal