const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Escolha a porta que deseja usar

app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});

