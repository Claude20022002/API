const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/plantes/exterieures", (req, res) => {});
app.get("/plantes/interieures", (req, res) => {});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
