module.exports = function(sequelize,DataTypes){
  const Photo = sequelize.define('photos', {
    title : DataTypes.STRING,
    file: DataTypes.STRING
  });
  Photo.associate = function(models){
    Photo.belongsTo(models.albums);
  };
  return Photo;
};