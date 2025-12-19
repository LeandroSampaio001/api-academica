import { Router } from 'express';
// Importação dos Controllers
import AlunoController from './controllers/AlunoController.js';
import CursoController from './controllers/CursoController.js';
import MatriculaController from './controllers/MatriculaController.js';

const routes = Router();

/**
 * Rotas de Alunos
 */
routes.get('/alunos', AlunoController.index);           // Listar todos
routes.get('/alunos/:id', AlunoController.show);       // Buscar um por ID
routes.post('/alunos', AlunoController.store);         // Criar novo
routes.put('/alunos/:id', AlunoController.update);     // Atualizar
routes.delete('/alunos/:id', AlunoController.destroy);  // Deletar

/**
 * Rotas de Cursos
 */
routes.get('/cursos', CursoController.index);           // Listar todos
routes.get('/cursos/:id', CursoController.show);       // Buscar um por ID
routes.post('/cursos', CursoController.store);         // Criar novo
routes.put('/cursos/:id', CursoController.update);     // Atualizar
routes.delete('/cursos/:id', CursoController.destroy);  // Deletar

/**
 * Rotas de Matrículas (Relacionamento Aluno x Curso)
 */
routes.get('/matriculas', MatriculaController.index);   // Listar todas as matrículas
routes.post('/matriculas', MatriculaController.store); // Matricular um aluno em um curso

export default routes;