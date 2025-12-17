'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      alunoId: {
        type: Sequelize.INTEGER,
        allowNull: false, // OBRIGATÓRIO
        references: {
          model: 'Alunos', // Tabela que referencia
          key: 'id'        // Chave referenciada
        },
        onUpdate: 'CASCADE', // Atualiza em cascata
        onDelete: 'CASCADE'  // Deleta a matrícula se o Aluno for excluído
      },
      cursoId: {
        type: Sequelize.INTEGER,
        allowNull: false, // OBRIGATÓRIO
        references: {
          model: 'Cursos', // Tabela que referencia
          key: 'id'        // Chave referenciada
        },
        onUpdate: 'CASCADE', // Atualiza em cascata
        onDelete: 'CASCADE'  // Deleta a matrícula se o Curso for excluído
      },
      dataMatricula: {
        type: Sequelize.DATE,
        allowNull: false // OBRIGATÓRIO
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matriculas');
  }
};