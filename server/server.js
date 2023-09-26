const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Escolha a porta que deseja usar

// Middleware para analisar JSON e lidar com CORS, se necessário
app.use(express.json());
// app.use(cors()); // Use isso se precisar de CORS

// Defina rotas aqui

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à API EventNebula!');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});

