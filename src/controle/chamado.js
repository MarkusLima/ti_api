const Chamado = require('../model/chamado');

const status = require('http-status');

exports.buscarUm = (request, response, next) => {
    const id = request.params.id;
  
    Chamado.findById(id)
      .then(chamado => {
        if (chamado) {
          response.status(status.OK).send(chamado);
        } else {
          response.status(status.NOT_FOUND).send();
        }
      })
      .catch(error => next(error));
  };

  exports.buscarTodos = (request, response, next) => {
    let limite = parseInt(request.query.limite || 0);
    let pagina = parseInt(request.query.pagina || 0);
  
    if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
      response.status(status.BAD_REQUEST).send();
    }
  
    const ITENS_POR_PAGINA = 400;
  
    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;
  
    Chamado.findAll({ limit: limite, offset: pagina })
      .then(chamado => {
        response.send(chamado);
      })
      .catch(error => next(error));
  };
  
  exports.criar = (request, response, next) => {
    const solicitante = request.body.solicitante;
    const equipe = request.body.equipe;
    const setor = request.body.setor;
    const motivo = request.body.motivo;
    const descricao = request.body.descricao;
    const status = request.body.status;
  
    Chamado.create({
      solicitante : solicitante,
      equipe : equipe,
      setor : setor,
      motivo : motivo,
      descricao : descricao,
      perfil :perfil

    }).then(() => {
        response.status(status.CREATED).send();
      })
      .catch(error => next(error));
  };
  
  exports.atualizar = (request, response, next) => {
    const id = request.params.id;
    const solicitante = request.body.solicitante;
    const equipe = request.body.equipe;
    const setor = request.body.setor;
    const motivo = request.body.motivo;
    const descricao = request.body.descricao;
    const status = request.body.status;
  
    Chamado.findById(id)
      .then(chamado => {
        if (chamado) {
          Chamado.update(
            {
                solicitante : solicitante,
                equipe : equipe,
                setor : setor,
                motivo : motivo,
                descricao : descricao,
                perfil :perfil
            },
            { where: { id: id } }
          )
            .then(() => {
              response.status(status.OK).send();
            })
            .catch(error => next(error));
        } else {
          response.status(status.NOT_FOUND).send();
        }
      })
      .catch(error => next(error));
  };
  
  exports.excluir = (request, response, next) => {
    const id = request.params.id;
  
    Chamado.findById(id)
      .then(chamado => {
        if (chamado) {
          Chamado.destroy({
            where: { id: id }
          })
            .then(() => {
              response.status(status.OK).send();
            })
            .catch(error => next(error));
        } else {
          response.status(status.NOT_FOUND).send();
        }
      })
      .catch(error => next(error));
  };
  
    //exportar para rotas