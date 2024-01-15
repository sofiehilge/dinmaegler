/* const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.post("/login", (req, res) => {
    //authentication logic

    //set the JWT in the cookie
    res.cookie("jwtToken", jwtToken, {httpOnly: true});
}) */