import { Model, DataTypes, Optional } from 'sequelize';
import database from '../db/config.js';

// Atributos definidos no Slide 4
interface MatriculaAttributes {
  id: number;
  aluno_id: number;
  curso_id: number;
  data_matricula: Date;
}

interface MatriculaCreationAttributes extends Optional<MatriculaAttributes, 'id' | 'data_matricula'> {}

export class Matricula extends Model<MatriculaAttributes, MatriculaCreationAttributes> implements MatriculaAttributes {
  public id!: number;
  public aluno_id!: number;
  public curso_id!: number;
  public data_matricula!: Date;

  static associate(models: any) {
    // Relacionamentos inversos para permitir o uso de 'include' no Controller
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
    this.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'curso' });
  }
}

Matricula.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    aluno_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'alunos', key: 'id' } // FK para Aluno (Slide 4)
    },
    curso_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'cursos', key: 'id' } // FK para Curso (Slide 4)
    },
    data_matricula: {
      type: DataTypes.DATE,
      allowNull: false, // Obrigatório conforme Slide 4
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: database,
    tableName: 'matriculas',
  }
);

export default Matricula;