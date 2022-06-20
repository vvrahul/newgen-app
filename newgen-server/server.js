import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser"
import fs from 'fs';

const app = express()
   


app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/getcsvdata', (req, res) => {
var data = fs.readFileSync('data/newgenData.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array
    res.json(data);
});
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})