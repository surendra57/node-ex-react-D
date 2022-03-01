//server creating
const http=require("http");
const path=require("path");

console.log(path.resolve(__dirname, '../client/build', 'index.html'))

const PORT=process.env.PORT || 8800;
// const hostname="localhost";

const server=http.createServer((req,res)=>{
     if (req.url=="/api") {
        //  res.send("hello nodeee")
     //    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
;        res.end("Hello!! from Node server");    
     }
    
})

server.listen(PORT,()=>{
    // console.log(`server is working  http://${hostname}:${PORT}`);
    console.log(`server is working  `);
});
