import { Router } from 'express';
// Importação dos Controllers
import AlunoController from './controllers/AlunoController.js';
import CursoController from './controllers/CursoController.js';
import MatriculaController from './controllers/MatriculaController.js';

const routes = Router();

/**
 * 5.1. ROTAS DE ALUNOS (Slide 6)
 */
routes.get('/alunos', AlunoController.index);             // Lista todos os alunos
routes.get('/alunos/:id', AlunoController.show);         // Detalha um aluno específico
routes.post('/alunos', AlunoController.store);           // Cria um novo aluno
routes.put('/alunos/:id', AlunoController.update);       // Atualiza dados de um aluno
routes.delete('/alunos/:id', AlunoController.delete);     // Remove um aluno

// Relação específica (Slide 6)
routes.get('/alunos/:id/cursos', AlunoController.getCursos); // Lista todos os cursos de um aluno

/**
 * 5.2. ROTAS DE CURSOS (Slide 6)
 */
routes.get('/cursos', CursoController.index);             // Lista todos os cursos
routes.get('/cursos/:id', CursoController.show);         // Detalha um curso específico
routes.post('/cursos', CursoController.store);           // Cria um novo curso
routes.put('/cursos/:id', CursoController.update);       // Atualiza dados de um curso
routes.delete('/cursos/:id', CursoController.delete);     // Remove um curso

// Relação específica (Slide 6)
routes.get('/cursos/:id/alunos', CursoController.getAlunos); // Lista todos os alunos de um curso

/**
 * 5.3. ROTAS DE MATRÍCULAS (Relacionamento Aluno-Curso - Slide 6)
 */
routes.get('/matriculas', MatriculaController.index);     // Lista todas as matrículas
routes.post('/matriculas', MatriculaController.store);   // Cria uma matrícula (liga aluno a curso)
routes.delete('/matriculas/:id', MatriculaController.delete); // Remove uma matrícula (Opcional Slide 6)

export default routes;