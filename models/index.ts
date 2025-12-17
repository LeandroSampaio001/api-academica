import { Aluno } from './Aluno';
import { Curso } from './Curso';
import { Matricula } from './Matricula';

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