const tarefas = require('../model/tarefas.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}
exports.getById = (req, res) => {
    const id = req.params.id
    const tarefa = tarefas.find(tarefa => tarefa.id == id)
    res.status(200).send(tarefa)
}
exports.getNome = (req, res) => {
    console.log(req.url)
        const nome = nomeColaborador.filter(nome => nome.nomeColaborador == "true")
        nome.map(tarefas => nome.push(tarefas.nome))
        
    res.status(200).send(nome)
}