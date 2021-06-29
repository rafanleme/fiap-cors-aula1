const express = require("express");
const { listarTodos, adicionar: addCurso } = require("./services/cursos");

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  res.setHeader('Access-Control-Allow-Methods', '');
  next();
});

app.get("/cursos", (req, res) => {
  const cursos = listarTodos();

  res.send(cursos);
});

app.post("/cursos", (req, res) => {
  const curso = req.body;

  curso.id = 3;

  addCurso(curso);

  res.status(201).send();
});

module.exports = app;
