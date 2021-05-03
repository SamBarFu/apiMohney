const DataType = require('sequelize/types');
const { Sequelize } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('incomes', {
      concept: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quantity: {
          type: DataTypes.DOUBLE,
          allowNull: false
      },
      userId: {
        type: DataType.INTEGER,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        },
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('incomes');
  }
}