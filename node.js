// const a ={
//     average:(a,b)=>{
//         console.log((a+b)/2);
//     },
//     percent:(a,b)=>{
//         console.log((a/b)*100);
//     },
// }
// module.exports=a;


// build in modules  *********

// const fs = require("fs");
// fs.readFile("./sample.txt", "utf-8" , (error,data)=>{
//     if (error){
//         throw error;
//     }
//     console.log(data);
// });


// const os=require("os");
// // os.version;

// console.log(os.networkInterfaces())


// const pokemon = require("pokemon");
// console.log(pokemon.all());
             

///How to make server

const res = require("express/lib/response");
const http = require("http");
const PORT = 2000;
const Hostname="Shashank"
const server = http.createServer((request,response,next)=>{
    if(request.url==("/")){
        response.end("<h1>Welcome to the programming World!</h1>")
    }
    if(request.url=="/about"){
        response.end("<h1>About page</h1>");
    }
    if(request.url=="/contact"){
        response.end("<h1>Contact page</h1>");
    }
    if(request.url=="/services"){
        response.end("<h1>Services page</h1>");
    }
    if(request.url=="/home"){
        response.end("<h1>Home page</h1>");
    }
    else{
        response.end("<h1>404 Pgae not found</h1>")
    }
    // response.end("<h1>Hello World!</h1>");
    // request.end("Shashank");
})
server.listen(PORT,Hostname,()=>{
    console.log(`Server is working on http://${Hostname}:${PORT}`);
})
