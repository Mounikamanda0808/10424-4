const express = require("express");

//initialization
const app = express();


app.user(express.json());

const port = 8081;

const toDolist = ["Mounika","Manoj","Ilaiah","Srilatha"];
http://localhost:8081/todos

app.get("/todos",(req,res)=>{
    res.status(200).send(toDolist);

})

app.listen(port, () =>{
    console.log(`ExpressJS Server is up and running successfully on port ${port}`)
})