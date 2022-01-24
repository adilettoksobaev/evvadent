const express = require("express");
var cors = require('cors')
const path = require("path");
const config = require('config')
const { v4 } = require("uuid");
const mongoose = require('mongoose');
const Review = require('./models/Review');

const app = express();

app.use(express.json({ extended: true }));

var corsOptions = {
    origin: 'http://evvadent.ru',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// GET
app.get("/api/reviews", cors(corsOptions), async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

// POST
app.post("/api/reviews", async (req, res) => {
    try {
        const newReview = { ...req.body, id: v4(), createDate: new Date() };
        const review = new Review(newReview);
    
        await review.save()
        res.status(201).json(newReview);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

app.use(express.static(path.resolve(__dirname, "app")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "app", "reviews.html"));
});

// const PORT = config.get('port') || 5000;
const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();
