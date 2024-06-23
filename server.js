const http = require("http");

const port = 8081;
http.createServer((req,res)=>{
    res.writeHead(200,{"context-Type": "text/html"});
    res.write("<h1>Hello MounikaManda0808</h1>")
    res.end();
})
.listen(port, ()=>{
    console.log(`NodeJs Server is up and running successfully on port ${port}`)
})