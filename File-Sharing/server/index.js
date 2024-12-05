import express from 'express';
import router from './routes/routes.js';
const app = express();
import cors from 'cors';
import DBconnection from './database/db.js';


app.use(cors());
app.use('/',router);


const PORT = process.env.PORT ; 


DBconnection();



app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})