import Book from "../models/book.js";

export const renderHome = async (req, res) => {
    try {
        const fiction = await Book.find({genre: "fiction"}).limit(15);
        const fantasy = await Book.find({genre: "fantasy"}).limit(15);
        const mystery = await Book.find({genre: "mystery"}).limit(15);
        const romance = await Book.find({genre: "romance"}).limit(15);
        const genres = [fiction, fantasy, mystery, romance]
        res.render("index", { genres });
    } catch (error) {
        res.status(500).send("Server error");
    }
}
export const renderAbout = async (req, res) => {
    res.render("about");
}
export const renderUpload = async (req, res) => {
    res.render("upload");
}