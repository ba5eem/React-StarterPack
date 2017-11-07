module.exports = function(sequelize,DataTypes){
  const Friend = sequelize.define('friends', {
    username : DataTypes.STRING,
    email : DataTypes.STRING,
  });
  Friend.associate = function(models){
    Friend.belongsTo(models.users);
  };
  return Friend;
};