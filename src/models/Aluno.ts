import { Model, DataTypes, Optional } from 'sequelize';
import database from '../db/config.js';

// 1. Definimos a interface com todos os campos que o Aluno possui
interface AlunoAttributes {
  id: number;
  nome: string;
  idade: number; // Campo que estava faltando na tipagem
  cpf: string;
}

// 2. Definimos quais campos são opcionais na hora de CRIAR um aluno (o ID é gerado pelo banco)
interface AlunoCreationAttributes extends Optional<AlunoAttributes, 'id'> {}

// 3. Criamos a classe do Model estendendo a classe Model do Sequelize
export class Aluno extends Model<AlunoAttributes, AlunoCreationAttributes> implements AlunoAttributes {
  public id!: number;
  public nome!: string;
  public idade!: number;
  public cpf!: string;

  // Timestamps (opcional, mas o Sequelize cria por padrão se não desabilitar)
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// 4. Inicializamos o Model com a estrutura da tabela
Aluno.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // CPF deve ser único
    },
  },
  {
    sequelize: database,
    tableName: 'alunos',
  }
);

export default Aluno;