import React from 'react';

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className='wrapper'>
        <h1>WOP WORKOUT SESSION</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
           Iure voluptates ea, explicabo quia cum temporibus rerum eum soluta.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div> 
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, perferendis rem. 
           Fugit fuga sequi ad, sapiente saepe hic?
        </p>
        <div className="bootcamps">
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Nobis esse atque pariatur accusamus optio molestias.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Nobis esse atque pariatur accusamus optio molestias.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Nobis esse atque pariatur accusamus optio molestias.
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Nobis esse atque pariatur accusamus optio molestias.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutSessions;