import React, { useState } from 'react'
import Name from './Name';


export default function ListOfPokemon() {
const[articles,setarticles]=useState(null);
const[loading,setLoading]=useState(true)
 const[offset,setOffset]=useState(0)
 
 async function getPokemon(){
    let url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=21`
    let data=await  fetch(url);
    let parsedata=await data.json();
    setarticles(parsedata)
    setLoading(true)

    
 }
 async function handlePrev(){
  if((offset-21)>=0){
    setOffset(offset-21)
    let url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=21`
    let data=await  fetch(url);
    let parsedata=await data.json();
    setarticles(parsedata)
    setLoading(true) 
  }
 }
 async function handleNext(){
  if((offset+21)<=articles.count){
    setOffset(offset+21)
    let url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=21`
    let data=await  fetch(url);
    let parsedata=await data.json();
    setarticles(parsedata)
    setLoading(true) 
  }
 }
 function fetchdigit(text){
  let te=text.replace("v2","");
  
  let i=0;
  let res=""
  
for(i=0;i<te.length;i++){
  let c=te.charAt(i)
  let d=Number(te.charCodeAt(i))
  if(d>=48 && d<=57){
res=res+c;
  }

}

return res
 }
 if(loading===true){
  
getPokemon()
  
 }

 return (
   
    <div className="container">
         
          <div className="row mb-4">
          
              
          { articles!=null && 
            articles.results.map((element,index)=>{
         
             return(
              <div class="col-md-4 my-3">  
               <Name  key={element.name} color={"lightblue"}element={element} url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${fetchdigit(element.url)}.png`}/>
</div>
             )  
            })
        }</div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-2 my-3">
          <button type="button w-5" class="btn btn-outline-success" style={{backgroundColor:"green",color:"white"}} onClick={handlePrev}>Previous</button>

          </div>
          <div className="col-md-2 my-3">
          <button type="button  w-5" class="btn btn-outline-danger" style={{backgroundColor:"red",color:"white"}} onClick={handleNext} >Next</button>
          </div>
        </div>
    </div>
       )

  }