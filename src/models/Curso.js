import { Model, DataTypes } from 'sequelize';
import database from '../db/config';
// Exporta a classe Curso, estendendo o Model do Sequelize
export class Curso extends Model {
}
// Inicialização do Modelo (Definição dos campos)
Curso.init({
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
}, {
    sequelize: database, // Define a instância de conexão
    tableName: 'Cursos', // Nome da tabela no banco
});
//# sourceMappingURL=Curso.js.map