import Book from "../models/book.js";

export const renderHome = async (req,res) => {
    try {
        const books = await Book.find({});
        res.render("index", {books});
    } catch (error) {
        res.status(500).send("Server error");
    }
}
export const renderAbout = async (req,res) => {
    try {
        const books = await Book.find({});
        res.render("about", {books});
    } catch (error) {
        res.status(500).send("Server error");
    }
}
export const renderUpload = async (req,res) => {
    try {
        const books = await Book.find({});
        res.render("upload", {books});
    } catch (error) {
        res.status(500).send("Server error");
    }
}