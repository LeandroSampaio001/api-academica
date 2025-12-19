import { Router } from 'express';
// Importamos o Controller (não esqueça do .js no final)
import AlunoController from './controllers/AlunoController.js';

const routes = Router();

// Rota de teste (podemos manter por enquanto)
routes.get('/teste', (_req, res) => {
    return res.json({ mensagem: 'Rota de teste configurada!' });
});

/**
 * Rotas de Alunos
 */
// Listar todos os alunos
routes.get('/alunos', AlunoController.index);

// Buscar um aluno específico pelo ID
routes.get('/alunos/:id', AlunoController.show);

// Criar um novo aluno
routes.post('/alunos', AlunoController.store);

// Atualizar um aluno
routes.put('/alunos/:id', AlunoController.update);

// Deletar um aluno
routes.delete('/alunos/:id', AlunoController.destroy);

export default routes;