import express from "express";
const app = express();

const PORT = 8080;
app.get('/',(req,res)=>{
    console.log("req recieved")
    res.send({name:"John"})
})
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
