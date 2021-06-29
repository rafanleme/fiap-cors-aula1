const cursos = [
    {
        id: 1,
        nome: "Ciência da Computação",
        ch: 1440
    },
    {
        id: 2,
        nome: "Engenharia de dados",
        ch: 1200,
    }
];


const listarTodos = () => cursos;

const adicionar = (curso) => cursos.push(curso);

const buscarPorId = (id) => cursos.find(c => c.id === id);

module.exports = { listarTodos, adicionar, buscarPorId }