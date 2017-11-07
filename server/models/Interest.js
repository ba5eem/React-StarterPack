module.exports = function(sequelize,DataTypes){
  const Interest = sequelize.define('interests', {
    title : DataTypes.STRING
  });
  Interest.associate = function(models){
    Interest.belongsTo(models.users);
  };
  return Interest;
};