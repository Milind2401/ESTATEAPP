import express from "express";

const router=express.Router();
router.get("/test",(req,res)=>{
    console.log("router works!");
    res.send("test post router ")
});
router.post("/test",(req,res)=>{
    console.log("router works!");
    res.send("test post router ")
});
router.put("/test",(req,res)=>{
    console.log("router works!");
    res.send("test post router ")
});
router.delete("/test",(req,res)=>{
    console.log("router works!");
    res.send("test post router ")
});
export default router;