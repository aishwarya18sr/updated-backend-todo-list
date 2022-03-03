const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Lists }) {
      // define association here
      Tasks.belongsTo(Lists, {
        foreignKey: 'list_id',
        onDelete: 'cascade',
      });
    }
  }
  Tasks.init({
    name: DataTypes.STRING,
    list_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};