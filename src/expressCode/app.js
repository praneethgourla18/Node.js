const express = require("express");
const app = express();

app.get('/', (req, res) => {
  console.log(req)
  res.send('Hello Express app!')
})

app.get('/about', (req, res) =>{
  res.send('About page')
})

app.listen(3000,()=>{
  console.log("server started successfully")
})