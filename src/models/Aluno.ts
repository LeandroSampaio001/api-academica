import { Model, DataTypes, Optional } from 'sequelize';
import database from '../db/config.js';

// Definição dos atributos baseados no Slide 4
interface AlunoAttributes {
  id: number;
  nome: string;
  email: string; // Obrigatório e único conforme Slide 4
}

interface AlunoCreationAttributes extends Optional<AlunoAttributes, 'id'> {}

export class Aluno extends Model<AlunoAttributes, AlunoCreationAttributes> implements AlunoAttributes {
  public id!: number;
  public nome!: string;
  public email!: string;

  static associate(models: any) {
    // Relacionamento Muitos-para-Muitos (N:N) conforme Slide 5
    this.belongsToMany(models.Curso, { 
      through: 'matriculas', 
      foreignKey: 'aluno_id', 
      as: 'cursos' 
    });
  }
}

Aluno.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false, // Obrigatório conforme Slide 4
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Obrigatório conforme Slide 4
      unique: true,    // Único conforme Slide 4
      validate: {
        isEmail: true
      }
    },
  },
  {
    sequelize: database,
    tableName: 'alunos',
  }
);

export default Aluno;