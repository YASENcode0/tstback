const express = require('express')
const cors = require('cors')
const PORT = 3001 || 5000;
const app = express()

app.use(cors())

app.listen(PORT,()=>{
    console.log('app listen on port ',PORT)
})

app.get('/post',(req,res)=>{
    
    try{
        res.send(' hello word ')
    }catch(err){
        res.send({err}).status(500)
    }

})
