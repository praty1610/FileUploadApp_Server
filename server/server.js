import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = new express();
const url = 'mongodb://localhost/csvfileupload_app'

mongoose.connect(url);

app.use(cors());

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(8000, (err, listening) => {
    if(err) 
        throw err
    else 
        console.log('Application is Running at 8000')
})


