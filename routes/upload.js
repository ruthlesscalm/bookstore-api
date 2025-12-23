import express from 'express';
import path from 'node:path';
import { __rootDir } from '../app.js';

const router = express.Router();

router.get("/", (req,res) => {
    res.sendFile(path.join(__rootDir, "views" , "upload.html"));
})
router.post("/", (req,res) => {
    console.log(`Request data: `, req.body);
    res.redirect("/");
})

export default router;