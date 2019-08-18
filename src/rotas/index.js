const express = require("express");
const controllerUsuario = require("../controle/usuario.js");
const controllerChamado = require("../controle/chamado.js");

const router = express.Router();
//rotas usuario
router.get("/usuario/:id", controllerUsuario.buscarUm);
router.get("/usuario", controllerUsuario.buscarTodos);
router.post("/usuario", controllerUsuario.criar);
router.put("/usuario/:id", controllerUsuario.atualizar);
router.delete("/usuario/:id", controllerUsuario.excluir);
//rotas chamado
router.get("/chamado/:id", controllerChamado.buscarUm);
router.get("/chamado", controllerChamado.buscarTodos);
router.post("/chamado", controllerChamado.criar);
router.put("/chamado/:id", controllerChamado.atualizar);
router.delete("/chamado/:id", controllerChamado.excluir);


module.exports = router;

//exportar para index