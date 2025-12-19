import { Aluno } from './Aluno.js';
import { Curso } from './Curso.js';
import { Matricula } from './Matricula.js';

const models: any = {
  Aluno,
  Curso,
  Matricula,
};

// Ativa as associações e nos avisa no terminal
Object.values(models).forEach((model: any) => {
  if (typeof model.associate === 'function') {
    console.log(`🔗 Ativando associações para: ${model.name}`);
    model.associate(models);
  }
});

export { Aluno, Curso, Matricula };