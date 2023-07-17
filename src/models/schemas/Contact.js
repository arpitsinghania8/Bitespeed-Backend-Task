const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../../utils/dbConnection');
const { PRECEDENCE } = require('../../constants/default.constants');

class Contact extends Model {}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    linkedId: {
      type: DataTypes.INTEGER,
    },
    linkPrecedence: {
      type: DataTypes.STRING,
      defaultValue: PRECEDENCE.PRIMARY
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  },
  {
    sequelize,
    tableName: 'Contact',
  }
);

module.exports = Contact;
