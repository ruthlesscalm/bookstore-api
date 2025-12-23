import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
        maxlength: 150
    },
    author: {
        type: String,
        trim: true,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    description: {
        type: String,
        trim: true,
        maxlength: 2000,
        default: "No description available"
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 100000,
        validate: {
            validator: v => typeof v === "number" && Number.isInteger(v * 100),
            message: "Price must have at most 2 decimal places (eg: 123.65)"
        }
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
        validate: {
            validator: v => typeof v === "number" && Number.isInteger(v * 10),
            message: "Rating must have at most 1 decimal place (eg: 9.7)"
        }
    },
    genre: {
        type: String,
        required: true,
        enum: [
            "fiction",
            "non-fiction",
            "mystery",
            "romance",
            "sci-fi",
            "fantasy",
            "thriller",
            "biography",
            "self-help",
            "other"
        ]
    }

},{timestamps: true});

const Book = mongoose.model('Book', bookSchema);
export default Book;