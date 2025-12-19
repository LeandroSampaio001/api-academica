import { Model, DataTypes, Optional } from 'sequelize';
import database from '../db/config.js';

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

  // Define que a Matrícula PERTENCE a um Aluno e a um Curso
  static associate(models: any) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' });
    this.belongsTo(models.Curso, { foreignKey: 'curso_id', as: 'curso' });
  }
}

Matricula.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    aluno_id: { type: DataTypes.INTEGER, allowNull: false },
    curso_id: { type: DataTypes.INTEGER, allowNull: false },
    data_matricula: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize: database, tableName: 'matriculas' }
);

export default Matricula;