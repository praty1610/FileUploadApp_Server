import express from 'express';
import Chart from '../models/chart.js';

const routes = express.Router();

routes.post('/saveCsvData', (req, res) => {
    Chart.create(req.body, (err, dataCreated) => {
        if(err) {
            res.json({
                error : err.message || 'failed to create'
            })
        } else {
            Chart.find({}, (err, data) => {
                if(err) {
                    res.json({
                        error : err.message || 'failed to create'
                    })
                } else {
                    res.json({
                        data : data
                    })
                }
            })
        }
    })
})

routes.get('/getCsvListData', (req, res) => {    
    Chart.find({}, (err, data) => {
        if(err) {
            res.json({
                error : err.message || 'failed to create'
            })
        } else {
            res.json({
                data : data
            })
        }
    })    
})


export default routes;