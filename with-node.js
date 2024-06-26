const http = require("http");

const port = 8081;

const toDolist = ["Mounika","Manoj","Ilaiah","Srilatha"];

http.createServer((req,res)=>{
    const {method,url} = req;
    // console.log(method,url)

    if(url==="/todos"){
        if(method === "Get"){
            res.writeHead(200);
            req.write(toDolist.toString())
        }
        else if(method === "POST"){
            let body = "";
            req.on('error',(err)=>{
                console.error(err)
            }).on('data'=(chunk)=>{
                body = chunk;
                console.log("chunk :",chunk);
            }).on('end',()=>{
                body = JSON.parse(body)
                console.log("body: ",body);
                let newToDo = toDolist;
                newToDo.push(body.item)
            })
        }

    }else if(url==="/"){


    }

    res.end();

})
.listen(port, () =>{
    console.log(`NodeJS Server is up and running successfully on port ${port}`)
})


http.createServer((req,res)=>{
    const {method,url} = req;
    // console.log(method,url)

    if(url==="/todos"){
        if(method === "Get"){
            res.writeHead(200);
            req.write(toDolist.toString())
        }
        else{
            res.writeHead(501);
        }

    }else if(url==="/"){


    }

    res.end();

})
.listen(port, () =>{
    console.log(`NodeJS Server is up and running successfully on port ${port}`)
})