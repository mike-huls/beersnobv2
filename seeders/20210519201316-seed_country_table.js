'use strict';

let tableModel = { schema: 'app', tableName: 'countries' };


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(tableModel, [
      { Name: 'Netherlands', Capital: 'Amsterdam' },
      { Name: 'Germany', Capital: 'Berlin' },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableModel, null, {});
  }
};
