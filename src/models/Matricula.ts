import { Model, DataTypes, Optional, Association } from 'sequelize';
import database from '../db/config.js';
import { Aluno } from './Aluno.js';
import { Curso } from './Curso.js';

// Interface que define os atributos do nosso Modelo
interface MatriculaAttributes {
  id: number;
  alunoId: number;
  cursoId: number;
  dataMatricula: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

// Opcionais na criação (o ID é autoincrementado)
interface MatriculaCreationAttributes extends Optional<MatriculaAttributes, 'id'> {}

// Exporta a classe Matricula, estendendo o Model do Sequelize
export class Matricula extends Model<MatriculaAttributes, MatriculaCreationAttributes> implements MatriculaAttributes {
  // Atributos
  public id!: number;
  public alunoId!: number;
  public cursoId!: number;
  public dataMatricula!: Date;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Associações (Relacionamentos)
  // Campos criados pelo Sequelize para carregar dados
  public Aluno?: Aluno;
  public Curso?: Curso;

  public static associations: {
    Aluno: Association<Matricula, Aluno>;
    Curso: Association<Matricula, Curso>;
  };

  // Método de configuração das Associações (Chamaremos ele no próximo passo)
  public static associate(models: { Aluno: typeof Aluno, Curso: typeof Curso, Matricula: typeof Matricula }) {
    // Matrícula pertence a Aluno (1:N Inverso)
    Matricula.belongsTo(models.Aluno, {
      foreignKey: 'alunoId',
      as: 'aluno'
    });

    // Matrícula pertence a Curso (1:N Inverso)
    Matricula.belongsTo(models.Curso, {
      foreignKey: 'cursoId',
      as: 'curso'
    });
  }
}

// Inicialização do Modelo (Definição dos campos)
Matricula.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    alunoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cursoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dataMatricula: {
        type: DataTypes.DATE,
        allowNull: false
    }
  },
  {
    sequelize: database, // Define a instância de conexão
    tableName: 'Matriculas', // Nome da tabela no banco
  }
);