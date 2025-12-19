import { Model, DataTypes, Optional } from 'sequelize';
import database from '../db/config.js';

// Atributos definidos no Slide 4
interface CursoAttributes {
  id: number;
  nome: string;
  carga_horaria: number;
  modalidade: string; // Ex: "Presencial", "EAD"
}

interface CursoCreationAttributes extends Optional<CursoAttributes, 'id'> {}

export class Curso extends Model<CursoAttributes, CursoCreationAttributes> implements CursoAttributes {
  public id!: number;
  public nome!: string;
  public carga_horaria!: number;
  public modalidade!: string;

  static associate(models: any) {
    // Relacionamento Muitos-para-Muitos (N:N) conforme Slide 5
    this.belongsToMany(models.Aluno, { 
      through: 'matriculas', 
      foreignKey: 'curso_id', 
      as: 'alunos' 
    });
  }
}

Curso.init(
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
    carga_horaria: {
      type: DataTypes.INTEGER,
      allowNull: false, // Obrigatório conforme Slide 4
    },
    modalidade: {
      type: DataTypes.STRING,
      allowNull: false, // Obrigatório conforme Slide 4
    },
  },
  {
    sequelize: database,
    tableName: 'cursos',
  }
);

export default Curso;