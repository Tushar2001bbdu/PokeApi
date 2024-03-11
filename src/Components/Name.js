import React, { useState } from 'react'
import PokeDescription from './PokeDescription'

export default function Name(props) {
  const[articles,setarticles]=useState(null)
  const[details,seeDetails]=useState(false)
  const[less,seeLess]=useState(true)
  const[lessData,setLessData]=useState(false)
  document.body.backgroundColor=props.color
  function showLess(){
    setLessData(true)
  }
  async function fetchMoreData(){
    setLessData(false)
    if(details===true){
      seeDetails(false)
    }
    let url=props.element.url
    let data= await fetch(url)
    let parsedData=await data.json()
    setarticles(parsedData)
    seeDetails(true)
    seeLess(true)
    
    return(
      
      <PokeDescription element={articles} url={props.url} name={props.element.name} />
     )
    
    }

  if(articles!==null && details===true && less===true && lessData===false){
      
      return(
        <PokeDescription element={articles} url={props.url} name={props.element.name} showLess={showLess} />
       )
       
    }
   
  return (
    <div class="container w-100">
      
      
      <div class="card bg-primary-subtle" style={{width: "18rem"}}>
  <img src={props.url} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.element.name}</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary" onClick={(event)=>{event.preventDefault();fetchMoreData()}}>See More Details</a>
  </div>
</div>
      </div>
      

      
      
    
  )
}
