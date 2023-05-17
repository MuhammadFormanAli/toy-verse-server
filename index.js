const express =require("express");
const cors = require ("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());



app.get('/',( req,res)=>{
    res.send('Life is running')
})

app.listen(port,()=>{
    console.log(`life is running on Port :${port}`)
})