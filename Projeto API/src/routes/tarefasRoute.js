const express = require('express')
const router = express.Router()
const controller = require('../controllers/tarefasController')


router.get("/", controller.get)


router.get("/:id", controller.getById)
router.get("/:id/nomeColaborador, controller.getNome")




module.exports = router