const app = require("./app");

const PORT = 80;

app.listen(PORT, () => {
    console.log("servidor rodando em http://localhost:" + PORT);
})