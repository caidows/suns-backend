const mail = require("./mail")

const express = require("express");
const PORT = process.env.PORT || 80;
const app = express();

app.get("/mail", (req, res) => {
    mail.send(req);
    res.json({ message: req.query });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});