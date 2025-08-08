import { snippetDB } from "../database/data.js";
import { randomBytes } from "crypto";

export const CreateSnippet = (req, res) => {  
      
    // ▒▒▒▒▒▒  CRYPTO for generate random Id ▒▒
    const id = randomBytes(12).toString("hex"); 
    
    console.log(id);

    const { title , code } = req.body; 

    // console.log("title" , title , "body" , code)

    // ▒▒▒▒▒▒▒    create Snippet    ▒▒▒▒▒▒▒

    snippetDB[id] = {
        id,
        title,
        code
    };


    return res.status(201).send({
        message: "snippet created",
        snippet: snippetDB[id],
        success: true,
    });
};

export const getSnippet = (_, res) => {
    // ▒▒▒▒▒▒ Get Snippet  ▒▒▒▒▒▒▒
    return res.status(200).send(snippetDB);
};
