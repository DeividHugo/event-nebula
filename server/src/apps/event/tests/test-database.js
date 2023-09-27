const connection = require('../services/database.js');

connection
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar-se ao banco de dados:', err);
  });
