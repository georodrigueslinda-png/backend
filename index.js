const express = require("express");

const app = express();
app.get("/", (req, res) => {
    res.json({ message: "Olá, mundo!" });
});

app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333!");
});
