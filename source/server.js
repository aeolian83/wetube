import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const handleHome = (req, res, next) => {
    // return res.end();
    return res.send("I love middleware!!");
};

app.get("/", logger, handleHome);

const handListening = () => 
    console.log(`✅Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handListening);


