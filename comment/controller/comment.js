
import { randomBytes}  from "crypto" ;
import { commentsDB } from "../database/comments.js";

export  const createComment  = (req ,res) =>{  

         const snippetId = req.params.id ;

         const {text}  = req.body ;

         let commnetId = randomBytes(10).toString("hex") ; 

         let comments  = commentsDB[snippetId] ||  []  ;
    
         comments.push({commnetId , text})  ;   

         commentsDB[snippetId] = comments   ;

         return res.status(201).send({
             message : "comment Added" , 
             comment : {commnetId , text} ,
             success : true              
         })

        }
        

        



export const getCommentBySnippetId = (req ,res)=>{  
     
         const snippetId = req.params.id ;   
          console.log(snippetId) ;
         return res.send(commentsDB[snippetId] || [])

}