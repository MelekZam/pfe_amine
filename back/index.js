const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const insertInitialProducts = require("./initiateDB");
const router = require("./routes");
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));
app.use(router);

app.listen(port, async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://amine:amine@cluster0.fsljrw1.mongodb.net/ecommerce"
        );
        console.log("connected to db with success.");
        await insertInitialProducts();
    } catch (error) {}
});
