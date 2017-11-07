'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('photos',[{
  "title": "Flicker, field",
  "url": "https://robohash.org/etquodvoluptatem.png?size=200x200&set=set1",
  "createdAt": "6/16/2017",
  "updatedAt": "4/27/2017",
  "albumId": 10
}, {
  "title": "Turtle, snake-necked",
  "url": "https://robohash.org/atqueveroin.png?size=200x200&set=set1",
  "createdAt": "12/28/2016",
  "updatedAt": "7/3/2017",
  "albumId": 4
}, {
  "title": "Worm snake (unidentified)",
  "url": "https://robohash.org/nihilautodio.png?size=200x200&set=set1",
  "createdAt": "7/9/2017",
  "updatedAt": "3/31/2017",
  "albumId": 12
}, {
  "title": "Black-collared barbet",
  "url": "https://robohash.org/voluptasnihildolore.png?size=200x200&set=set1",
  "createdAt": "3/25/2017",
  "updatedAt": "9/2/2017",
  "albumId": 16
}, {
  "title": "Corella, long-billed",
  "url": "https://robohash.org/autcupiditateincidunt.png?size=200x200&set=set1",
  "createdAt": "11/22/2016",
  "updatedAt": "7/7/2017",
  "albumId": 4
}, {
  "title": "Hare, arctic",
  "url": "https://robohash.org/odioautid.png?size=200x200&set=set1",
  "createdAt": "11/19/2016",
  "updatedAt": "6/30/2017",
  "albumId": 4
}, {
  "title": "Chital",
  "url": "https://robohash.org/laboriosamullameum.png?size=200x200&set=set1",
  "createdAt": "9/1/2017",
  "updatedAt": "11/13/2016",
  "albumId": 1
}, {
  "title": "Field flicker",
  "url": "https://robohash.org/aliaseligendivelit.png?size=200x200&set=set1",
  "createdAt": "10/16/2017",
  "updatedAt": "6/23/2017",
  "albumId": 1
}, {
  "title": "Jackal, golden",
  "url": "https://robohash.org/molestiaeutnam.png?size=200x200&set=set1",
  "createdAt": "7/8/2017",
  "updatedAt": "9/2/2017",
  "albumId": 3
}, {
  "title": "Snake (unidentified)",
  "url": "https://robohash.org/beataeporroet.png?size=200x200&set=set1",
  "createdAt": "5/11/2017",
  "updatedAt": "9/20/2017",
  "albumId": 14
}, {
  "title": "Badger, american",
  "url": "https://robohash.org/reprehenderitautemmaiores.png?size=200x200&set=set1",
  "createdAt": "9/11/2017",
  "updatedAt": "11/22/2016",
  "albumId": 5
}, {
  "title": "Boa, mexican",
  "url": "https://robohash.org/nonimpeditet.png?size=200x200&set=set1",
  "createdAt": "8/30/2017",
  "updatedAt": "5/22/2017",
  "albumId": 4
}, {
  "title": "Coyote",
  "url": "https://robohash.org/debitissitcorporis.png?size=200x200&set=set1",
  "createdAt": "12/24/2016",
  "updatedAt": "10/11/2017",
  "albumId": 14
}, {
  "title": "Rat, white-faced tree",
  "url": "https://robohash.org/veroquiaquo.png?size=200x200&set=set1",
  "createdAt": "12/28/2016",
  "updatedAt": "10/9/2017",
  "albumId": 10
}, {
  "title": "Grouse, sage",
  "url": "https://robohash.org/officiismaximeet.png?size=200x200&set=set1",
  "createdAt": "10/9/2017",
  "updatedAt": "10/16/2017",
  "albumId": 17
}, {
  "title": "Mexican boa",
  "url": "https://robohash.org/autemdoloremenim.png?size=200x200&set=set1",
  "createdAt": "1/30/2017",
  "updatedAt": "7/25/2017",
  "albumId": 20
}, {
  "title": "African fish eagle",
  "url": "https://robohash.org/quosreiciendisdeleniti.png?size=200x200&set=set1",
  "createdAt": "5/31/2017",
  "updatedAt": "12/30/2016",
  "albumId": 10
}, {
  "title": "Seal, harbor",
  "url": "https://robohash.org/quodquiaveniam.png?size=200x200&set=set1",
  "createdAt": "4/5/2017",
  "updatedAt": "3/30/2017",
  "albumId": 16
}, {
  "title": "Lily trotter",
  "url": "https://robohash.org/quisquilaborum.png?size=200x200&set=set1",
  "createdAt": "6/19/2017",
  "updatedAt": "5/29/2017",
  "albumId": 10
}, {
  "title": "Gila monster",
  "url": "https://robohash.org/voluptatemfugavoluptatem.png?size=200x200&set=set1",
  "createdAt": "8/6/2017",
  "updatedAt": "2/12/2017",
  "albumId": 5
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('photos',null )
  }
};

