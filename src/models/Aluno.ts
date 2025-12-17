import { Model, DataTypes, Optional, Association } from 'sequelize';
import database from '../db/config.js';
import { Matricula } from './Matricula.js';

// Interface que define os atributos do nosso Modelo
interface AlunoAttributes {
  id: number;
  nome: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Opcionais na criação (o ID é autoincrementado)
interface AlunoCreationAttributes extends Optional<AlunoAttributes, 'id'> {}

// Exporta a classe Aluno, estendendo o Model do Sequelize
export class Aluno extends Model<AlunoAttributes, AlunoCreationAttributes> implements AlunoAttributes {
  // Atributos
  public id!: number;
  public nome!: string;
  public email!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Define a associação (relacionamento) - Configuração M:M
  public static associations: {
    matriculas: Association<Aluno, Matricula>;
  };
}

// Inicialização do Modelo (Definição dos campos)
Aluno.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  },
  {
    sequelize: database, // Define a instância de conexão que está em '../db/config'
    tableName: 'Alunos', // Nome da tabela no banco
  }
);