//server creating with express
const express=require("express");
const path=require("path");


const app=express();
// console.log(path.resolve(__dirname, '../clients/build', 'index.html'))
//that's we are using static site means html css js code
app.use(express.static(path.resolve(__dirname, '../clients/build')));

const PORT=process.env.PORT || 8800;

app.get("/api",(req,res)=>{
    res.json({message:"hello from the server"})

})
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../clients/build', 'index.html'));
  });


app.listen(PORT,()=>{
    // console.log(`server is working  http://${hostname}:${PORT}`);
    console.log(`server is working  on 8800`);
});
