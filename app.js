import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req,res) => {
    res.send("welcome to Book Store");
})

app.listen(PORT , () => {
    console.log(`Server running on ${PORT}`);
})