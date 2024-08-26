
/*   heroku

By using heroku we can share our server or webpage with other 
with link.

for useing heroku first we have to do where we write
const port=3000; instend of this we have to use heroku own port and this is
const port=process.env.PORT;
then in the root directory we have to create a Procfile
and inside Profile we have to write 
web : node then file name like
web : node index.js

then we have to go heroku website


*/



const http = require('http');
//for use using heroku we have to use heroku own port
//const port=3000;
const port=3000;

const hostname='127.0.0.1';
const fs=require('fs');

const handleReadFile=(fileName, statusCode, req,res)=>{

    fs.readFile(fileName,"utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        }
    })

}
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
       handleReadFile("index.html",200,req,res);
    }else if(req.url==='/about'){
        handleReadFile("about.html",200,req,res);
    }else if(req.url==='/contact'){
        handleReadFile("contact.html",200,req,res);
    }else{
        handleReadFile("err.html",200,req,res);
    }
})

server.listen(port,hostname,()=>{
    console.log(`Server is running successfull y at http://${hostname}:${port}`);
})