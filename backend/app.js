import  express from 'express';
import  {DummyRoute}  from './routes/index.js';
import { PORT } from './config/index.js';
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));






app.use('/dummy',DummyRoute);


app.listen(PORT,()=>{})