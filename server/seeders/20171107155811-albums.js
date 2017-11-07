'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('albums',[{
  "title": "Tlingit-Haida",
  "createdAt": "5/12/2017",
  "updatedAt": "2/22/2017",
  "userId": 5
}, {
  "title": "Sri Lankan",
  "createdAt": "7/8/2017",
  "updatedAt": "3/17/2017",
  "userId": 18
}, {
  "title": "Crow",
  "createdAt": "7/19/2017",
  "updatedAt": "5/22/2017",
  "userId": 16
}, {
  "title": "Filipino",
  "createdAt": "10/19/2017",
  "updatedAt": "2/25/2017",
  "userId": 20
}, {
  "title": "Dominican (Dominican Republic)",
  "createdAt": "11/24/2016",
  "updatedAt": "1/31/2017",
  "userId": 10
}, {
  "title": "Aleut",
  "createdAt": "7/2/2017",
  "updatedAt": "6/12/2017",
  "userId": 18
}, {
  "title": "Pakistani",
  "createdAt": "7/13/2017",
  "updatedAt": "8/12/2017",
  "userId": 12
}, {
  "title": "Polynesian",
  "createdAt": "12/7/2016",
  "updatedAt": "2/25/2017",
  "userId": 9
}, {
  "title": "Pima",
  "createdAt": "9/29/2017",
  "updatedAt": "9/24/2017",
  "userId": 6
}, {
  "title": "Vietnamese",
  "createdAt": "9/12/2017",
  "updatedAt": "8/27/2017",
  "userId": 11
}, {
  "title": "Comanche",
  "createdAt": "8/21/2017",
  "updatedAt": "11/25/2016",
  "userId": 14
}, {
  "title": "Seminole",
  "createdAt": "7/8/2017",
  "updatedAt": "1/22/2017",
  "userId": 2
}, {
  "title": "Puget Sound Salish",
  "createdAt": "4/6/2017",
  "updatedAt": "10/1/2017",
  "userId": 4
}, {
  "title": "Asian Indian",
  "createdAt": "4/29/2017",
  "updatedAt": "8/10/2017",
  "userId": 19
}, {
  "title": "Colombian",
  "createdAt": "2/23/2017",
  "updatedAt": "2/27/2017",
  "userId": 16
}, {
  "title": "Cheyenne",
  "createdAt": "3/14/2017",
  "updatedAt": "5/22/2017",
  "userId": 9
}, {
  "title": "Vietnamese",
  "createdAt": "3/25/2017",
  "updatedAt": "4/24/2017",
  "userId": 8
}, {
  "title": "American Indian and Alaska Native (AIAN)",
  "createdAt": "6/23/2017",
  "updatedAt": "11/6/2017",
  "userId": 13
}, {
  "title": "Puerto Rican",
  "createdAt": "3/31/2017",
  "updatedAt": "6/20/2017",
  "userId": 16
}, {
  "title": "Cherokee",
  "createdAt": "1/9/2017",
  "updatedAt": "12/14/2016",
  "userId": 14
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('albums',null )
  }
};

