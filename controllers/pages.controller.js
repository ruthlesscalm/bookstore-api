import Book from "../models/book.js";

export const renderHome = async (req,res) => {
    try {
        const books = Book.find({});
        res.render("index", {books});
    } catch (error) {
        res.status(500).send("Server error");
    }
}
export const test = async (req,res) => {
    try {
        const books = Book.find({});
        res.render("test", {books});
    } catch (error) {
        res.status(500).send("Server error");
    }
}