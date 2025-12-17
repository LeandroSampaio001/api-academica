import { Model, DataTypes, Optional, Association } from 'sequelize';
import database from '../db/config.js';
import { Matricula } from './Matricula.js';

// Interface que define os atributos do nosso Modelo
interface CursoAttributes {
  id: number;
  nome: string;
  cargaHoraria: number; // Mapeia para integer no banco
  modalidade: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Opcionais na criação (o ID é autoincrementado)
interface CursoCreationAttributes extends Optional<CursoAttributes, 'id'> {}

// Exporta a classe Curso, estendendo o Model do Sequelize
export class Curso extends Model<CursoAttributes, CursoCreationAttributes> implements CursoAttributes {
  // Atributos
  public id!: number;
  public nome!: string;
  public cargaHoraria!: number;
  public modalidade!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Define a associação (relacionamento)
  public static associations: {
    matriculas: Association<Curso, Matricula>;
  };
}

// Inicialização do Modelo (Definição dos campos)
Curso.init(
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
    cargaHoraria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    modalidade: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize: database, // Define a instância de conexão
    tableName: 'Cursos', // Nome da tabela no banco
  }
);