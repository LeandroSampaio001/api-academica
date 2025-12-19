'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'alunos', key: 'id' }, // Ligação com Aluno
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      curso_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cursos', key: 'id' }, // Ligação com Curso
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      data_matricula: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('matriculas');
  }
};