import express, { json } from "express" ;
import SnippetRouter from "./router/snippet.js" ;
import cors from "cors"  ;


const app = express();

app.use(express.json()) ;
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use("/api/v1/snippet" , SnippetRouter )
 
// http://localhost:8000/api/v1/snippet


const PORT = 8000

app.listen(PORT , ()=> console.log(`server is running ON port ${PORT}`)) 