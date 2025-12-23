import express from 'express';
import path from 'node:path';
import { __rootDir } from '../app.js';
import { renderHome, test } from '../controllers/pages.controller.js';

const router = express.Router();

router.get("/", renderHome);

router.get("/about", (req,res) => {
    res.sendFile(path.join(__rootDir, "views" , "about.html"));
});

router.get("/upload", (req,res) => {
    res.sendFile(path.join(__rootDir, "views" , "upload.html"));
});
router.get("/test", test);

export default router;