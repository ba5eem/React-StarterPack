'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('albums',[{
  "title": "Chippewa",
  "createdAt": "1/6/2017",
  "updatedAt": "12/9/2016"
}, {
  "title": "Indonesian",
  "createdAt": "4/12/2017",
  "updatedAt": "3/12/2017"
}, {
  "title": "Pueblo",
  "createdAt": "10/27/2017",
  "updatedAt": "6/2/2017"
}, {
  "title": "Central American",
  "createdAt": "8/12/2017",
  "updatedAt": "1/25/2017"
}, {
  "title": "Salvadoran",
  "createdAt": "7/11/2017",
  "updatedAt": "11/20/2016"
}, {
  "title": "Shoshone",
  "createdAt": "5/18/2017",
  "updatedAt": "1/3/2017"
}, {
  "title": "Crow",
  "createdAt": "5/29/2017",
  "updatedAt": "7/1/2017"
}, {
  "title": "Chilean",
  "createdAt": "11/29/2016",
  "updatedAt": "2/24/2017"
}, {
  "title": "Iroquois",
  "createdAt": "8/29/2017",
  "updatedAt": "4/27/2017"
}, {
  "title": "Tongan",
  "createdAt": "3/19/2017",
  "updatedAt": "1/4/2017"
}, {
  "title": "Kiowa",
  "createdAt": "11/9/2016",
  "updatedAt": "12/2/2016"
}, {
  "title": "Central American",
  "createdAt": "12/22/2016",
  "updatedAt": "6/29/2017"
}, {
  "title": "Bolivian",
  "createdAt": "12/1/2016",
  "updatedAt": "11/7/2016"
}, {
  "title": "Chilean",
  "createdAt": "10/3/2017",
  "updatedAt": "2/7/2017"
}, {
  "title": "Fijian",
  "createdAt": "12/27/2016",
  "updatedAt": "2/19/2017"
}, {
  "title": "Native Hawaiian",
  "createdAt": "2/20/2017",
  "updatedAt": "4/17/2017"
}, {
  "title": "Pueblo",
  "createdAt": "6/12/2017",
  "updatedAt": "12/16/2016"
}, {
  "title": "Yaqui",
  "createdAt": "5/1/2017",
  "updatedAt": "12/13/2016"
}, {
  "title": "Choctaw",
  "createdAt": "3/25/2017",
  "updatedAt": "4/20/2017"
}, {
  "title": "Seminole",
  "createdAt": "7/13/2017",
  "updatedAt": "12/2/2016"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('albums',null )
  }
};

