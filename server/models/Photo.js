module.exports = function(sequelize,DataTypes){
  const Photo = sequelize.define('photos', {
    title : DataTypes.STRING,
    url: DataTypes.STRING
  });
  Photo.associate = function(models){
    Photo.belongsTo(models.albums);
  };
  return Photo;
};