import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from "express";


const app = express()


app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
))


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true ,limit: '50mb'}));
app.use(express.static('public'));
app.use(cookieParser());



//import routes
import userRoute from './routes/user.route.js';

//use routes
app.use('/user',userRoute);

app.get('/test', (req, res) => {
    res.send('app.js is running')
  })


  export default app;
