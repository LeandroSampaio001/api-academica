import { Aluno } from './Aluno.js';
import { Curso } from './Curso.js';
import { Matricula } from './Matricula.js';

// Define um objeto que contém todos os modelos para facilitar a associação
const models = {
  Aluno,
  Curso,
  Matricula,
};

// Configuração das associações (Relacionamentos)
// Chamamos o método associate que definimos em Matricula.ts
Matricula.associate(models);

export default models;