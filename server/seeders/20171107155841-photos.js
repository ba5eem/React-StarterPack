'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('photos',[{
  "title": "Beisa oryx",
  "url": "https://robohash.org/quiexpeditaest.png?size=200x200&set=set1",
  "createdAt": "5/22/2017",
  "updatedAt": "12/20/2016"
}, {
  "title": "Rufous tree pie",
  "url": "https://robohash.org/quiexercitationemdolorem.png?size=200x200&set=set1",
  "createdAt": "7/25/2017",
  "updatedAt": "2/22/2017"
}, {
  "title": "Seal, common",
  "url": "https://robohash.org/repudiandaeoccaecatiarchitecto.png?size=200x200&set=set1",
  "createdAt": "7/13/2017",
  "updatedAt": "11/27/2016"
}, {
  "title": "Capuchin, white-fronted",
  "url": "https://robohash.org/oditutofficiis.png?size=200x200&set=set1",
  "createdAt": "8/2/2017",
  "updatedAt": "5/27/2017"
}, {
  "title": "Fat-tailed dunnart",
  "url": "https://robohash.org/saepenesciuntnecessitatibus.png?size=200x200&set=set1",
  "createdAt": "10/18/2017",
  "updatedAt": "5/17/2017"
}, {
  "title": "White-headed vulture",
  "url": "https://robohash.org/quiaeiuspossimus.png?size=200x200&set=set1",
  "createdAt": "7/24/2017",
  "updatedAt": "8/1/2017"
}, {
  "title": "Mountain lion",
  "url": "https://robohash.org/officiaeaea.png?size=200x200&set=set1",
  "createdAt": "11/28/2016",
  "updatedAt": "7/6/2017"
}, {
  "title": "Wallaby, agile",
  "url": "https://robohash.org/nobissintfacere.png?size=200x200&set=set1",
  "createdAt": "10/30/2017",
  "updatedAt": "1/10/2017"
}, {
  "title": "Deer, roe",
  "url": "https://robohash.org/autconsequaturad.png?size=200x200&set=set1",
  "createdAt": "6/17/2017",
  "updatedAt": "4/2/2017"
}, {
  "title": "Coyote",
  "url": "https://robohash.org/omnisdoloribusoccaecati.png?size=200x200&set=set1",
  "createdAt": "8/1/2017",
  "updatedAt": "6/5/2017"
}, {
  "title": "Platypus",
  "url": "https://robohash.org/doloremquetemporibusquidem.png?size=200x200&set=set1",
  "createdAt": "12/26/2016",
  "updatedAt": "7/19/2017"
}, {
  "title": "Indian peacock",
  "url": "https://robohash.org/laudantiumsitvoluptatibus.png?size=200x200&set=set1",
  "createdAt": "5/18/2017",
  "updatedAt": "5/13/2017"
}, {
  "title": "Indian jackal",
  "url": "https://robohash.org/aspernaturquissint.png?size=200x200&set=set1",
  "createdAt": "8/20/2017",
  "updatedAt": "2/24/2017"
}, {
  "title": "Pelican, brown",
  "url": "https://robohash.org/suntnecessitatibusvoluptate.png?size=200x200&set=set1",
  "createdAt": "6/6/2017",
  "updatedAt": "9/2/2017"
}, {
  "title": "Sacred ibis",
  "url": "https://robohash.org/etremsint.png?size=200x200&set=set1",
  "createdAt": "2/27/2017",
  "updatedAt": "1/13/2017"
}, {
  "title": "Woolly-necked stork",
  "url": "https://robohash.org/animipariaturasperiores.png?size=200x200&set=set1",
  "createdAt": "6/28/2017",
  "updatedAt": "7/9/2017"
}, {
  "title": "Australian masked owl",
  "url": "https://robohash.org/utvoluptasest.png?size=200x200&set=set1",
  "createdAt": "3/31/2017",
  "updatedAt": "2/11/2017"
}, {
  "title": "Squirrel, malabar",
  "url": "https://robohash.org/etquisuscipit.png?size=200x200&set=set1",
  "createdAt": "10/18/2017",
  "updatedAt": "12/29/2016"
}, {
  "title": "Turaco, violet-crested",
  "url": "https://robohash.org/atrerumatque.png?size=200x200&set=set1",
  "createdAt": "11/1/2017",
  "updatedAt": "1/6/2017"
}, {
  "title": "Vulture, turkey",
  "url": "https://robohash.org/eiusquasiconsequatur.png?size=200x200&set=set1",
  "createdAt": "3/10/2017",
  "updatedAt": "1/15/2017"
}] , {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('photos',null )
  }
};

