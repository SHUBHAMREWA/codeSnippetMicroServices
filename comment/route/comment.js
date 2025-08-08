

import express from "express" ;
import { createComment , getCommentBySnippetId } from "../controller/comment.js";

const router  = express.Router() ;


router.post("/:id/comment" , createComment )
 
router.get("/:id/comment" , getCommentBySnippetId )

export default router  ;