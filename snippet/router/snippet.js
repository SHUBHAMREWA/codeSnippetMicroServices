
import express from "express"  ;

import { CreateSnippet , getSnippet } from "../controller/snippet.js";

const route = express.Router() ;  

 
route.post("/" , CreateSnippet)
route.get("/" , getSnippet)


export default route ;