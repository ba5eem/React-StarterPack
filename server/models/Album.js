module.exports = function(sequelize,DataTypes){
  const Album = sequelize.define('albums', {
    title : DataTypes.STRING
  });
  Album.associate = function(models){
    Album.belongsTo(models.users);
    Album.hasMany(models.photos);
  };
  return Album;
};