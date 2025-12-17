import { Model, DataTypes } from 'sequelize';
import database from '../db/config';
// Exporta a classe Matricula, estendendo o Model do Sequelize
export class Matricula extends Model {
    // Método de configuração das Associações (Chamaremos ele no próximo passo)
    static associate(models) {
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
Matricula.init({
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
}, {
    sequelize: database, // Define a instância de conexão
    tableName: 'Matriculas', // Nome da tabela no banco
});
//# sourceMappingURL=Matricula.js.map