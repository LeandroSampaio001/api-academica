import { Model, DataTypes, Optional } from 'sequelize';
import database from '../db/config.js';

interface CursoAttributes {
  id: number;
  nome: string;
  descricao: string;
  carga_horaria: number;
}

interface CursoCreationAttributes extends Optional<CursoAttributes, 'id'> {}

export class Curso extends Model<CursoAttributes, CursoCreationAttributes> implements CursoAttributes {
  public id!: number;
  public nome!: string;
  public descricao!: string;
  public carga_horaria!: number;

  static associate(models: any) {
    this.hasMany(models.Matricula, { foreignKey: 'curso_id', as: 'matriculas' });
  }
}

Curso.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    descricao: { type: DataTypes.STRING, allowNull: false },
    carga_horaria: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize: database, tableName: 'cursos' }
);

export default Curso;