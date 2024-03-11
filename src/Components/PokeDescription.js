import React from 'react'

export default function PokeDescription(props) {
  
  
 
    return (
     <div className="container w-100">
      <div class="card bg-danger-subtle" style={{width: "18rem"}}>
  <img class="card-img-top" src={props.url} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text d-flex justify-content-start">
        <div className='row '>
            {props.element.types.map((element)=>{
            return( <div className="col md-3 text-danger"><span>{element.type.name}</span></div>
            
            )
            
        })}</div>
           


        
    
    </p>
    <p className='card-text'>
    <div className="row d-flex justify-content-between">
        <div className="col-md-4">
        Height
        </div>
        <div className="col-md-4">
        {props.element.height}
        </div>

    </div>
    <div className="row d-flex justify-content-between">
        <div className="col-md-4 ">
        Weight
        </div>
        <div className="col-md-4">
        {props.element.weight}
        </div>

    </div>
    <button type="button" class="btn btn-info text-light" onClick={props.showLess}>See Less Details</button>
    </p>
    
    </div>
    </div>
    </div>)
  
    
     
  }
  

