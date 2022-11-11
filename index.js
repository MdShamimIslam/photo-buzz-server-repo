const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('photo-buzz is running')
})

app.listen(port, ()=>{
    console.log(`photo-buzz is running on port: ${port}`);
})