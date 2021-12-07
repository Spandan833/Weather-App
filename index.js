const express = require('express')
const app = express();
const path = require('path')


app.use((req, res, next) =>{
    console.log(req.url)
    next();
})
app.use(express.static(__dirname))

app.get('/',(req,res) => {
    res.send("HELLO THERE")
})


const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log('listening on port '+PORT)
})