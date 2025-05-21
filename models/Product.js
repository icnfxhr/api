const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'ID'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'Name'
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'Price'
  },
  description: {
    type: DataTypes.TEXT,
    field: 'Description'
  }
}, {
  tableName: 'Products',
  timestamps: false
});

module.exports = Product;