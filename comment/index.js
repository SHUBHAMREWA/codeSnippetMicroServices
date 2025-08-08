import express from "express" ;
import commentRoute from "./route/comment.js" ;
import cors from "cors"  ;


const app = express();

app.use(express.json()) ;
app.use(express.urlencoded({ extended: true }));
app.use(cors()) ;  

 

app.use("/api/v1/snippet" , commentRoute )

// http://localhost/api/v1/snippet/:id/comment 

const PORT = process.env.PORT || 8001;

app.listen(PORT , ()=> console.log(`server is running ON port ${PORT}`)) 