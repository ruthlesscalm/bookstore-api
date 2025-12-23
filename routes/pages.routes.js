import express from 'express';
import path from 'node:path';
import { __rootDir } from '../app.js';

const router = express.Router();

router.get("/", (req,res) => {
    res.sendFile(path.join(__rootDir, "views" , "index.html"));
});

router.get("/about", (req,res) => {
    res.sendFile(path.join(__rootDir, "views" , "about.html"));
});

router.get("/upload", (req,res) => {
    res.sendFile(path.join(__rootDir, "views" , "upload.html"));
});

export default router;