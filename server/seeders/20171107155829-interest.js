'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('interests',[{
  "title": "Goofy Movie, A",
  "createdAt": "2/10/2017",
  "updatedAt": "1/10/2017"
}, {
  "title": "Shallow Hal",
  "createdAt": "4/16/2017",
  "updatedAt": "9/8/2017"
}, {
  "title": "Halfmoon (Paul Bowles - Halbmond)",
  "createdAt": "1/16/2017",
  "updatedAt": "11/17/2016"
}, {
  "title": "Lives of a Bengal Lancer, The",
  "createdAt": "11/5/2017",
  "updatedAt": "7/24/2017"
}, {
  "title": "Yesterday, Today and Tomorrow (Ieri, oggi, domani)",
  "createdAt": "9/9/2017",
  "updatedAt": "10/12/2017"
}, {
  "title": "Time Masters (Maîtres du temps, Les)",
  "createdAt": "6/15/2017",
  "updatedAt": "4/6/2017"
}, {
  "title": "Three Quarter Moon",
  "createdAt": "9/12/2017",
  "updatedAt": "6/24/2017"
}, {
  "title": "Love Games",
  "createdAt": "5/16/2017",
  "updatedAt": "9/12/2017"
}, {
  "title": "Adventureland",
  "createdAt": "7/12/2017",
  "updatedAt": "11/7/2016"
}, {
  "title": "Kung Fu Panda Holiday Special",
  "createdAt": "3/19/2017",
  "updatedAt": "8/1/2017"
}, {
  "title": "Hitman",
  "createdAt": "8/31/2017",
  "updatedAt": "7/4/2017"
}, {
  "title": "Short Circuit 2",
  "createdAt": "10/5/2017",
  "updatedAt": "8/14/2017"
}, {
  "title": "Misérables, Les",
  "createdAt": "8/31/2017",
  "updatedAt": "5/8/2017"
}, {
  "title": "Dinotopia: Quest for the Ruby Sunstone",
  "createdAt": "11/23/2016",
  "updatedAt": "8/11/2017"
}, {
  "title": "Zombies of Mora Tau",
  "createdAt": "1/17/2017",
  "updatedAt": "1/15/2017"
}, {
  "title": "Magnetic Monster, The",
  "createdAt": "11/14/2016",
  "updatedAt": "10/11/2017"
}, {
  "title": "American Splendor",
  "createdAt": "5/4/2017",
  "updatedAt": "3/30/2017"
}, {
  "title": "First Person Plural",
  "createdAt": "3/3/2017",
  "updatedAt": "7/26/2017"
}, {
  "title": "Gangster Squad",
  "createdAt": "7/24/2017",
  "updatedAt": "4/19/2017"
}, {
  "title": "Go-Between, The",
  "createdAt": "2/8/2017",
  "updatedAt": "6/14/2017"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('interests',null )
  }
};

