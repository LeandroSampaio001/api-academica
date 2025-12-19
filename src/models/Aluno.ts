import { Model, DataTypes, Optional } from 'sequelize';
import database from '../db/config.js';

interface AlunoAttributes {
  id: number;
  nome: string;
  idade: number;
  cpf: string;
}

interface AlunoCreationAttributes extends Optional<AlunoAttributes, 'id'> {}

export class Aluno extends Model<AlunoAttributes, AlunoCreationAttributes> implements AlunoAttributes {
  public id!: number;
  public nome!: string;
  public idade!: number;
  public cpf!: string;

  // Método de associação
  static associate(models: any) {
    this.hasMany(models.Matricula, { foreignKey: 'aluno_id', as: 'matriculas' });
  }
}

Aluno.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    idade: { type: DataTypes.INTEGER, allowNull: false },
    cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  { sequelize: database, tableName: 'alunos' }
);

export default Aluno;