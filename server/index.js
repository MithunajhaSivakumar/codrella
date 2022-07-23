import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json({limit:"30mb", extended:"true"}));
app.use(express.urlencoded({limit:"30mb", extended:"true"}));
app.use(cors()); 

console.log("handling routes");
app.get('/',(req,res)=>{
    res.send('Hello World');
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology: true})
    .then( () => app.listen(PORT,() => console.log(`Server running on port:${PORT}`)))
    .catch( (error) => console.log(error.message));