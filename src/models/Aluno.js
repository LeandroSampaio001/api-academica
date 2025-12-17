import { Model, DataTypes } from 'sequelize';
import database from '../db/config';
// Exporta a classe Aluno, estendendo o Model do Sequelize
export class Aluno extends Model {
}
// Inicialização do Modelo (Definição dos campos)
Aluno.init({
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
}, {
    sequelize: database, // Define a instância de conexão que está em '../db/config'
    tableName: 'Alunos', // Nome da tabela no banco
});
//# sourceMappingURL=Aluno.js.map