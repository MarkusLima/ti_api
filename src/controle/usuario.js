const Usuario = require('../model/usuario');

const status = require('http-status');

exports.buscarUm = (request, response, next) => {
    const id = request.params.id;
  
    Usuario.findById(id)
      .then(usuario => {
        if (usuario) {
          response.status(status.OK).send(usuario);
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
  
    const ITENS_POR_PAGINA = 20;
  
    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;
  
    Usuario.findAll({ limit: limite, offset: pagina })
      .then(usuario => {
        response.send(usuario);
      })
      .catch(error => next(error));
  };
  
  exports.criar = (request, response, next) => {
    const nome = request.body.nome;
    const equipe = request.body.equipe;
    const setor = request.body.setor;
    const senha = request.body.senha;
    const perfil = request.body.perfil;
  
    Usuario.create({
      nome : nome,
      equipe : equipe,
      setor : setor,
      senha : senha,
      perfil :perfil

    }).then(() => {
        response.status(status.CREATED).send();
      })
      .catch(error => next(error));
  };
  
  exports.atualizar = (request, response, next) => {
    const id = request.params.id;
    const nome = request.body.nome;
    const equipe = request.body.equipe;
    const setor = request.body.setor;
    const senha = request.body.senha;
    const perfil = request.body.perfil;
  
    Usuario.findById(id)
      .then(usuario => {
        if (usuario) {
          Usuario.update(
            {
              nome : nome,
              equipe : equipe,
              setor : setor,
              senha : senha,
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
  
    Usuario.findById(id)
      .then(usuario => {
        if (usuario) {
          Usuario.destroy({
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

  //exportar para controler
  