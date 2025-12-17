import express from 'express';
import routes from './routes.js'; // Importa o arquivo de rotas

// Inicializa o Express
const app = express();

// Configura o middleware para aceitar JSON no corpo das requisições
app.use(express.json());

// Conecta as rotas (Todas as rotas da nossa API começarão com /api/v1)
app.use('/api/v1', routes);

// Define a porta e inicializa o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});