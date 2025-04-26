const express = require("express");
const cors = require("cors");
const planteExterieureRouter = require("./routes/plante_exterieur");
const planteFaqRouter = require("./routes/plante_faq");
const planteInterieureRouter = require("./routes/plante_interieur");

const app = express();
app.use(cors());

app.use("/plantes", planteExterieureRouter);
app.use("/plantes", planteFaqRouter);
app.use("/plantes", planteInterieureRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
