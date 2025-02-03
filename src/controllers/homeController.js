const Contato = require('../models/ContatoMoldel');

exports.index = async(req, res) => {
  const contatos = await Contato.buscaContatos();
  res.render('index', { contatos });
};