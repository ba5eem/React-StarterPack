'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('interests',[{
  "title": "Deadly Advice",
  "createdAt": "5/10/2017",
  "updatedAt": "12/22/2016",
  "userId": 15
}, {
  "title": "The Gun That Won the West",
  "createdAt": "12/22/2016",
  "updatedAt": "1/21/2017",
  "userId": 6
}, {
  "title": "Hack!",
  "createdAt": "7/1/2017",
  "updatedAt": "9/2/2017",
  "userId": 9
}, {
  "title": "World of Apu, The (Apur Sansar)",
  "createdAt": "10/7/2017",
  "updatedAt": "10/7/2017",
  "userId": 19
}, {
  "title": "You Ain't Seen Nothin' Yet (Vous n'avez encore rien vu)",
  "createdAt": "5/23/2017",
  "updatedAt": "11/13/2016",
  "userId": 12
}, {
  "title": "Lagaan: Once Upon a Time in India",
  "createdAt": "10/7/2017",
  "updatedAt": "11/26/2016",
  "userId": 15
}, {
  "title": "Safety of Objects, The",
  "createdAt": "1/12/2017",
  "updatedAt": "3/16/2017",
  "userId": 9
}, {
  "title": "April Story",
  "createdAt": "7/10/2017",
  "updatedAt": "1/25/2017",
  "userId": 3
}, {
  "title": "Storm Rider",
  "createdAt": "6/3/2017",
  "updatedAt": "8/4/2017",
  "userId": 15
}, {
  "title": "Baby On Board",
  "createdAt": "11/5/2017",
  "updatedAt": "6/2/2017",
  "userId": 5
}, {
  "title": "Rebirth",
  "createdAt": "1/17/2017",
  "updatedAt": "7/7/2017",
  "userId": 9
}, {
  "title": "Bridge Too Far, A",
  "createdAt": "9/5/2017",
  "updatedAt": "10/9/2017",
  "userId": 1
}, {
  "title": "Jane Eyre",
  "createdAt": "6/19/2017",
  "updatedAt": "4/12/2017",
  "userId": 4
}, {
  "title": "Fiend with the Electronic Brain (Blood of Ghastly Horror)",
  "createdAt": "9/8/2017",
  "updatedAt": "2/22/2017",
  "userId": 19
}, {
  "title": "Fubar",
  "createdAt": "7/5/2017",
  "updatedAt": "2/17/2017",
  "userId": 14
}, {
  "title": "A.K.A. Don Bonus",
  "createdAt": "3/19/2017",
  "updatedAt": "8/3/2017",
  "userId": 6
}, {
  "title": "Intermezzo",
  "createdAt": "11/8/2016",
  "updatedAt": "6/14/2017",
  "userId": 13
}, {
  "title": "Corto Maltese: Ballad of the Salt Sea (Corto Maltese - La ballade de la mer salée)",
  "createdAt": "11/19/2016",
  "updatedAt": "8/13/2017",
  "userId": 7
}, {
  "title": "Dream Lover",
  "createdAt": "9/8/2017",
  "updatedAt": "10/24/2017",
  "userId": 12
}, {
  "title": "Watchmen: Tales of the Black Freighter",
  "createdAt": "3/14/2017",
  "updatedAt": "10/8/2017",
  "userId": 19
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('interests',null )
  }
};

