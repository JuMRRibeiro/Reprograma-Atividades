const tarefas = require('../model/tarefas.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}
exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 17 || id <= 0) {
        res.redirect(301, "https://en.wikipedia.org/wiki/Man-in-the-middle_attack")//qualquer site
    }
    res.status(200).send(alunas.find(aluna => aluna.id == id))
