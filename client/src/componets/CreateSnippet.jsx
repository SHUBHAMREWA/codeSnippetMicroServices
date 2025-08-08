

import React from 'react'
import { useState } from 'react' ;
import axios from "axios"
import { useEffect } from 'react';
import Comment from './Comment';


const CreateSnippet = () => {  
   
      const [title , setTitle]  = useState("") ;
      const [code ,setCode]   = useState("")  ;
      const [apiHit ,setApiHit] = useState(1)  ;
      const [allSnippet , setAllSnippet]  = useState({}) ;


      const postSnippet = async(e)=>{   

         e.preventDefault( );  

         let data = await axios({
           method : "post" , 
           url : "http://localhost:8000/api/v1/snippet" ,
           data  : { title , code }        
         })

         console.log("created snippet" , data)    
          setApiHit(apiHit+1)                 
      }

       useEffect(()=>{  
          
           const fetchData = async()=>{
                  let data = await axios({
                      method : "get" , 
                     url : "http://localhost:8000/api/v1/snippet" 
                  })                

                  // console.log("data aai ga hai" , data.data)
                 setAllSnippet(data.data)
           }
           
             fetchData() ;
       } , [apiHit] )

  return (  
     
    <div className='max-w-4xl mx-auto mt-10'>  

       <form onSubmit={postSnippet}>
         <input  
        value={title} 
        onChange={(e)=>setTitle(e.target.value)}
         className='border py-1 w-full rounded p-2'
          type="text"  placeholder='Title'/> 
         <br />
         <br />
  
          <textarea 
           value={code}
        onChange={(e)=>setCode(e.target.value)}
           className='border py-1 w-full rounded  p-1'
           type="text" placeholder='write snippet'></textarea>

           <br /> 
           <br />
           <button 
           className='bg-amber-600 hover:bg-amber-700 rounded  px-4 py-2 rouded cursor-pointer'
           > Create</button>
       </form>  


       {/* ▒▒▒▒▒▒  show data Upon form   ▒▒▒▒▒▒ */} 
        
        <div className='grid grid-cols-3 gap-3 mt-5'> 
              
              { 
              //  console.log( Object.values(allSnippet)) 


                Object.values(allSnippet).map((el, index)=>{
                     return <div key={index} className='p-2  border rounded-2xl'> 
                              <h1>Title ={el.title}</h1>
                              <p> Code ={el.code}</p>

                              <Comment snippetId ={el.id} />
                     </div>
                })
  
              }

        </div>

    </div>
         )
}

export default CreateSnippet
