/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module('mayanDream.kin', [
  'ui.router',
  'ui.bootstrap',
  'angularMoment'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config($stateProvider) {
  $stateProvider.state('kin', {
    url: '/kin',
    views: {
      "main": {
        controller: 'KinCtrl',
        templateUrl: 'kin/kin.tpl.html'
      }
    },
    data: {
      pageTitle: 'Get your Kin'
    }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller('KinCtrl', function KinController($scope, $filter, $http, $rootScope) {

  // Get Tzolkin data
  $scope.tzolkin = {"1":{"tone":1,"toneName":"Magnetic","seal":1,"sealName":"Dragon","imgUrl":"assets/img/Dragon.png","kin":1,"color":"Red"},"2":{"tone":2,"toneName":"Lunar","seal":2,"sealName":"Wind","imgUrl":"assets/img/Wind.png","kin":2,"color":"White"},"3":{"tone":3,"toneName":"Electric","seal":3,"sealName":"Night","imgUrl":"assets/img/Night.png","kin":3,"color":"Blue"},"4":{"tone":4,"toneName":"Self-Existing","seal":4,"sealName":"Seed","imgUrl":"assets/img/Seed.png","kin":4,"color":"Yellow"},"5":{"tone":5,"toneName":"Overtone","seal":5,"sealName":"Serpent","imgUrl":"assets/img/Serpent.png","kin":5,"color":"Red"},"6":{"tone":6,"toneName":"Resonant","seal":6,"sealName":"World Bridger","imgUrl":"assets/img/World Bridger.png","kin":6,"color":"White"},"7":{"tone":7,"toneName":"Galactic","seal":7,"sealName":"Hand","imgUrl":"assets/img/Hand.png","kin":7,"color":"Blue"},"8":{"tone":8,"toneName":"Solar","seal":8,"sealName":"Star","imgUrl":"assets/img/Star.png","kin":8,"color":"Yellow"},"9":{"tone":9,"toneName":"Planetary","seal":9,"sealName":"Moon","imgUrl":"assets/img/Moon.png","kin":9,"color":"Red"},"10":{"tone":10,"toneName":"Spectral","seal":10,"sealName":"Dog","imgUrl":"assets/img/Dog.png","kin":10,"color":"White"},"11":{"tone":11,"toneName":"Crystal","seal":11,"sealName":"Monkey","imgUrl":"assets/img/Monkey.png","kin":11,"color":"Blue"},"12":{"tone":12,"toneName":"Cosmic","seal":12,"sealName":"Human","imgUrl":"assets/img/Human.png","kin":12,"color":"Yellow"},"13":{"tone":13,"seal":13,"sealName":"Skywalker","imgUrl":"assets/img/Skywalker.png","kin":13,"color":"Red"},"14":{"tone":1,"toneName":"Magnetic","seal":14,"sealName":"Wizard","imgUrl":"assets/img/Wizard.png","kin":14,"color":"White"},"15":{"tone":2,"toneName":"Lunar","seal":15,"sealName":"Eagle","imgUrl":"assets/img/Eagle.png","kin":15,"color":"Blue"},"16":{"tone":3,"toneName":"Electric","seal":16,"sealName":"Warrior","imgUrl":"assets/img/Warrior.png","kin":16,"color":"Yellow"},"17":{"tone":4,"toneName":"Self-Existing","seal":17,"sealName":"Earth","imgUrl":"assets/img/Earth.png","kin":17,"color":"Red"},"18":{"tone":5,"toneName":"Overtone","seal":18,"sealName":"Mirror","imgUrl":"assets/img/Mirror.png","kin":18,"color":"White"},"19":{"tone":6,"toneName":"Resonant","seal":19,"sealName":"Storm","imgUrl":"assets/img/Storm.png","kin":19,"color":"Blue"},"20":{"tone":7,"toneName":"Galactic","seal":20,"sealName":"Sun","imgUrl":"assets/img/Sun.png","kin":20,"color":"Yellow"},"21":{"tone":8,"toneName":"Solar","seal":1,"sealName":"Dragon","imgUrl":"assets/img/Dragon.png","kin":21,"color":"Red"},"22":{"tone":9,"toneName":"Planetary","seal":2,"sealName":"Wind","imgUrl":"assets/img/Wind.png","kin":22,"color":"White"},"23":{"tone":10,"toneName":"Spectral","seal":3,"sealName":"Night","imgUrl":"assets/img/Night.png","kin":23,"color":"Blue"},"24":{"tone":11,"toneName":"Crystal","seal":4,"sealName":"Seed","imgUrl":"assets/img/Seed.png","kin":24,"color":"Yellow"},"25":{"tone":12,"toneName":"Cosmic","seal":5,"sealName":"Serpent","imgUrl":"assets/img/Serpent.png","kin":25,"color":"Red"},"26":{"tone":13,"seal":6,"sealName":"World Bridger","imgUrl":"assets/img/World Bridger.png","kin":26,"color":"White"},"27":{"tone":1,"toneName":"Magnetic","seal":7,"sealName":"Hand","imgUrl":"assets/img/Hand.png","kin":27,"color":"Blue"},"28":{"tone":2,"toneName":"Lunar","seal":8,"sealName":"Star","imgUrl":"assets/img/Star.png","kin":28,"color":"Yellow"},"29":{"tone":3,"toneName":"Electric","seal":9,"sealName":"Moon","imgUrl":"assets/img/Moon.png","kin":29,"color":"Red"},"30":{"tone":4,"toneName":"Self-Existing","seal":10,"sealName":"Dog","imgUrl":"assets/img/Dog.png","kin":30,"color":"White"},"31":{"tone":5,"toneName":"Overtone","seal":11,"sealName":"Monkey","imgUrl":"assets/img/Monkey.png","kin":31,"color":"Blue"},"32":{"tone":6,"toneName":"Resonant","seal":12,"sealName":"Human","imgUrl":"assets/img/Human.png","kin":32,"color":"Yellow"},"33":{"tone":7,"toneName":"Galactic","seal":13,"sealName":"Skywalker","imgUrl":"assets/img/Skywalker.png","kin":33,"color":"Red"},"34":{"tone":8,"toneName":"Solar","seal":14,"sealName":"Wizard","imgUrl":"assets/img/Wizard.png","kin":34,"color":"White"},"35":{"tone":9,"toneName":"Planetary","seal":15,"sealName":"Eagle","imgUrl":"assets/img/Eagle.png","kin":35,"color":"Blue"},"36":{"tone":10,"toneName":"Spectral","seal":16,"sealName":"Warrior","imgUrl":"assets/img/Warrior.png","kin":36,"color":"Yellow"},"37":{"tone":11,"toneName":"Crystal","seal":17,"sealName":"Earth","imgUrl":"assets/img/Earth.png","kin":37,"color":"Red"},"38":{"tone":12,"toneName":"Cosmic","seal":18,"sealName":"Mirror","imgUrl":"assets/img/Mirror.png","kin":38,"color":"White"},"39":{"tone":13,"seal":19,"sealName":"Storm","imgUrl":"assets/img/Storm.png","kin":39,"color":"Blue"},"40":{"tone":1,"toneName":"Magnetic","seal":20,"sealName":"Sun","imgUrl":"assets/img/Sun.png","kin":40,"color":"Yellow"},"41":{"tone":2,"toneName":"Lunar","seal":1,"sealName":"Dragon","imgUrl":"assets/img/Dragon.png","kin":41,"color":"Red"},"42":{"tone":3,"toneName":"Electric","seal":2,"sealName":"Wind","imgUrl":"assets/img/Wind.png","kin":42,"color":"White"},"43":{"tone":4,"toneName":"Self-Existing","seal":3,"sealName":"Night","imgUrl":"assets/img/Night.png","kin":43,"color":"Blue"},"44":{"tone":5,"toneName":"Overtone","seal":4,"sealName":"Seed","imgUrl":"assets/img/Seed.png","kin":44,"color":"Yellow"},"45":{"tone":6,"toneName":"Resonant","seal":5,"sealName":"Serpent","imgUrl":"assets/img/Serpent.png","kin":45,"color":"Red"},"46":{"tone":7,"toneName":"Galactic","seal":6,"sealName":"World Bridger","imgUrl":"assets/img/World Bridger.png","kin":46,"color":"White"},"47":{"tone":8,"toneName":"Solar","seal":7,"sealName":"Hand","imgUrl":"assets/img/Hand.png","kin":47,"color":"Blue"},"48":{"tone":9,"toneName":"Planetary","seal":8,"sealName":"Star","imgUrl":"assets/img/Star.png","kin":48,"color":"Yellow"},"49":{"tone":10,"toneName":"Spectral","seal":9,"sealName":"Moon","imgUrl":"assets/img/Moon.png","kin":49,"color":"Red"},"50":{"tone":11,"toneName":"Crystal","seal":10,"sealName":"Dog","imgUrl":"assets/img/Dog.png","kin":50,"color":"White"},"51":{"tone":12,"toneName":"Cosmic","seal":11,"sealName":"Monkey","imgUrl":"assets/img/Monkey.png","kin":51,"color":"Blue"},"52":{"tone":13,"seal":12,"sealName":"Human","imgUrl":"assets/img/Human.png","kin":52,"color":"Yellow"},"53":{"tone":1,"toneName":"Magnetic","seal":13,"sealName":"Skywalker","imgUrl":"assets/img/Skywalker.png","kin":53,"color":"Red"},"54":{"tone":2,"toneName":"Lunar","seal":14,"sealName":"Wizard","imgUrl":"assets/img/Wizard.png","kin":54,"color":"White"},"55":{"tone":3,"toneName":"Electric","seal":15,"sealName":"Eagle","imgUrl":"assets/img/Eagle.png","kin":55,"color":"Blue"},"56":{"tone":4,"toneName":"Self-Existing","seal":16,"sealName":"Warrior","imgUrl":"assets/img/Warrior.png","kin":56,"color":"Yellow"},"57":{"tone":5,"toneName":"Overtone","seal":17,"sealName":"Earth","imgUrl":"assets/img/Earth.png","kin":57,"color":"Red"},"58":{"tone":6,"toneName":"Resonant","seal":18,"sealName":"Mirror","imgUrl":"assets/img/Mirror.png","kin":58,"color":"White"},"59":{"tone":7,"toneName":"Galactic","seal":19,"sealName":"Storm","imgUrl":"assets/img/Storm.png","kin":59,"color":"Blue"},"60":{"tone":8,"toneName":"Solar","seal":20,"sealName":"Sun","imgUrl":"assets/img/Sun.png","kin":60,"color":"Yellow"},"61":{"tone":9,"toneName":"Planetary","seal":1,"sealName":"Dragon","imgUrl":"assets/img/Dragon.png","kin":61,"color":"Red"},"62":{"tone":10,"toneName":"Spectral","seal":2,"sealName":"Wind","imgUrl":"assets/img/Wind.png","kin":62,"color":"White"},"63":{"tone":11,"toneName":"Crystal","seal":3,"sealName":"Night","imgUrl":"assets/img/Night.png","kin":63,"color":"Blue"},"64":{"tone":12,"toneName":"Cosmic","seal":4,"sealName":"Seed","imgUrl":"assets/img/Seed.png","kin":64,"color":"Yellow"},"65":{"tone":13,"seal":5,"sealName":"Serpent","imgUrl":"assets/img/Serpent.png","kin":65,"color":"Red"},"66":{"tone":1,"toneName":"Magnetic","seal":6,"sealName":"World Bridger","imgUrl":"assets/img/World Bridger.png","kin":66,"color":"White"},"67":{"tone":2,"toneName":"Lunar","seal":7,"sealName":"Hand","imgUrl":"assets/img/Hand.png","kin":67,"color":"Blue"},"68":{"tone":3,"toneName":"Electric","seal":8,"sealName":"Star","imgUrl":"assets/img/Star.png","kin":68,"color":"Yellow"},"69":{"tone":4,"toneName":"Self-Existing","seal":9,"sealName":"Moon","imgUrl":"assets/img/Moon.png","kin":69,"color":"Red"},"70":{"tone":5,"toneName":"Overtone","seal":10,"sealName":"Dog","imgUrl":"assets/img/Dog.png","kin":70,"color":"White"},"71":{"tone":6,"toneName":"Resonant","seal":11,"sealName":"Monkey","imgUrl":"assets/img/Monkey.png","kin":71,"color":"Blue"},"72":{"tone":7,"toneName":"Galactic","seal":12,"sealName":"Human","imgUrl":"assets/img/Human.png","kin":72,"color":"Yellow"},"73":{"tone":8,"toneName":"Solar","seal":13,"sealName":"Skywalker","imgUrl":"assets/img/Skywalker.png","kin":73,"color":"Red"},"74":{"tone":9,"toneName":"Planetary","seal":14,"sealName":"Wizard","imgUrl":"assets/img/Wizard.png","kin":74,"color":"White"},"75":{"tone":10,"toneName":"Spectral","seal":15,"sealName":"Eagle","imgUrl":"assets/img/Eagle.png","kin":75,"color":"Blue"},"76":{"tone":11,"toneName":"Crystal","seal":16,"sealName":"Warrior","imgUrl":"assets/img/Warrior.png","kin":76,"color":"Yellow"},"77":{"tone":12,"toneName":"Cosmic","seal":17,"sealName":"Earth","imgUrl":"assets/img/Earth.png","kin":77,"color":"Red"},"78":{"tone":13,"seal":18,"sealName":"Mirror","imgUrl":"assets/img/Mirror.png","kin":78,"color":"White"},"79":{"tone":1,"toneName":"Magnetic","seal":19,"sealName":"Storm","imgUrl":"assets/img/Storm.png","kin":79,"color":"Blue"},"80":{"tone":2,"toneName":"Lunar","seal":20,"sealName":"Sun","imgUrl":"assets/img/Sun.png","kin":80,"color":"Yellow"},"81":{"tone":3,"toneName":"Electric","seal":1,"sealName":"Dragon","imgUrl":"assets/img/Dragon.png","kin":81,"color":"Red"},"82":{"tone":4,"toneName":"Self-Existing","seal":2,"sealName":"Wind","imgUrl":"assets/img/Wind.png","kin":82,"color":"White"},"83":{"tone":5,"toneName":"Overtone","seal":3,"sealName":"Night","imgUrl":"assets/img/Night.png","kin":83,"color":"Blue"},"84":{"tone":6,"toneName":"Resonant","seal":4,"sealName":"Seed","imgUrl":"assets/img/Seed.png","kin":84,"color":"Yellow"},"85":{"tone":7,"toneName":"Galactic","seal":5,"sealName":"Serpent","imgUrl":"assets/img/Serpent.png","kin":85,"color":"Red"},"86":{"tone":8,"toneName":"Solar","seal":6,"sealName":"World Bridger","imgUrl":"assets/img/World Bridger.png","kin":86,"color":"White"},"87":{"tone":9,"toneName":"Planetary","seal":7,"sealName":"Hand","imgUrl":"assets/img/Hand.png","kin":87,"color":"Blue"},"88":{"tone":10,"toneName":"Spectral","seal":8,"sealName":"Star","imgUrl":"assets/img/Star.png","kin":88,"color":"Yellow"},"89":{"tone":11,"toneName":"Crystal","seal":9,"sealName":"Moon","imgUrl":"assets/img/Moon.png","kin":89,"color":"Red"},"90":{"tone":12,"toneName":"Cosmic","seal":10,"sealName":"Dog","imgUrl":"assets/img/Dog.png","kin":90,"color":"White"},"91":{"tone":13,"seal":11,"sealName":"Monkey","imgUrl":"assets/img/Monkey.png","kin":91,"color":"Blue"},"92":{"tone":1,"toneName":"Magnetic","seal":12,"sealName":"Human","imgUrl":"assets/img/Human.png","kin":92,"color":"Yellow"},"93":{"tone":2,"toneName":"Lunar","seal":13,"sealName":"Skywalker","imgUrl":"assets/img/Skywalker.png","kin":93,"color":"Red"},"94":{"tone":3,"toneName":"Electric","seal":14,"sealName":"Wizard","imgUrl":"assets/img/Wizard.png","kin":94,"color":"White"},"95":{"tone":4,"toneName":"Self-Existing","seal":15,"sealName":"Eagle","imgUrl":"assets/img/Eagle.png","kin":95,"color":"Blue"},"96":{"tone":5,"toneName":"Overtone","seal":16,"sealName":"Warrior","imgUrl":"assets/img/Warrior.png","kin":96,"color":"Yellow"},"97":{"tone":6,"toneName":"Resonant","seal":17,"sealName":"Earth","imgUrl":"assets/img/Earth.png","kin":97,"color":"Red"},"98":{"tone":7,"toneName":"Galactic","seal":18,"sealName":"Mirror","imgUrl":"assets/img/Mirror.png","kin":98,"color":"White"},"99":{"tone":8,"toneName":"Solar","seal":19,"sealName":"Storm","imgUrl":"assets/img/Storm.png","kin":99,"color":"Blue"},"100":{"tone":9,"toneName":"Planetary","seal":20,"sealName":"Sun","imgUrl":"assets/img/Sun.png","kin":100,"color":"Yellow"},"101":{"tone":10,"toneName":"Spectral","seal":1,"sealName":"Dragon","imgUrl":"assets/img/Dragon.png","kin":101,"color":"Red"},"102":{"tone":11,"toneName":"Crystal","seal":2,"sealName":"Wind","imgUrl":"assets/img/Wind.png","kin":102,"color":"White"},"103":{"tone":12,"toneName":"Cosmic","seal":3,"sealName":"Night","imgUrl":"assets/img/Night.png","kin":103,"color":"Blue"},"104":{"tone":13,"seal":4,"sealName":"Seed","imgUrl":"assets/img/Seed.png","kin":104,"color":"Yellow"},"105":{"tone":1,"toneName":"Magnetic","seal":5,"sealName":"Serpent","imgUrl":"assets/img/Serpent.png","kin":105,"color":"Red"},"106":{"tone":2,"toneName":"Lunar","seal":6,"sealName":"World Bridger","imgUrl":"assets/img/World Bridger.png","kin":106,"color":"White"},"107":{"tone":3,"toneName":"Electric","seal":7,"sealName":"Hand","imgUrl":"assets/img/Hand.png","kin":107,"color":"Blue"},"108":{"tone":4,"toneName":"Self-Existing","seal":8,"sealName":"Star","imgUrl":"assets/img/Star.png","kin":108,"color":"Yellow"},"109":{"tone":5,"toneName":"Overtone","seal":9,"sealName":"Moon","imgUrl":"assets/img/Moon.png","kin":109,"color":"Red"},"110":{"tone":6,"toneName":"Resonant","seal":10,"sealName":"Dog","imgUrl":"assets/img/Dog.png","kin":110,"color":"White"},"111":{"tone":7,"toneName":"Galactic","seal":11,"sealName":"Monkey","imgUrl":"assets/img/Monkey.png","kin":111,"color":"Blue"},"112":{"tone":8,"toneName":"Solar","seal":12,"sealName":"Human","imgUrl":"assets/img/Human.png","kin":112,"color":"Yellow"},"113":{"tone":9,"toneName":"Planetary","seal":13,"sealName":"Skywalker","imgUrl":"assets/img/Skywalker.png","kin":113,"color":"Red"},"114":{"tone":10,"toneName":"Spectral","seal":14,"sealName":"Wizard","imgUrl":"assets/img/Wizard.png","kin":114,"color":"White"},"115":{"tone":11,"toneName":"Crystal","seal":15,"sealName":"Eagle","imgUrl":"assets/img/Eagle.png","kin":115,"color":"Blue"},"116":{"tone":12,"toneName":"Cosmic","seal":16,"sealName":"Warrior","imgUrl":"assets/img/Warrior.png","kin":116,"color":"Yellow"},"117":{"tone":13,"seal":17,"sealName":"Earth","imgUrl":"assets/img/Earth.png","kin":117,"color":"Red"},"118":{"tone":1,"toneName":"Magnetic","seal":18,"sealName":"Mirror","imgUrl":"assets/img/Mirror.png","kin":118,"color":"White"},"119":{"tone":2,"toneName":"Lunar","seal":19,"sealName":"Storm","imgUrl":"assets/img/Storm.png","kin":119,"color":"Blue"},"120":{"tone":3,"toneName":"Electric","seal":20,"sealName":"Sun","imgUrl":"assets/img/Sun.png","kin":120,"color":"Yellow"},"121":{"tone":4,"toneName":"Self-Existing","seal":1,"sealName":"Dragon","imgUrl":"assets/img/Dragon.png","kin":121,"color":"Red"},"122":{"tone":5,"toneName":"Overtone","seal":2,"sealName":"Wind","imgUrl":"assets/img/Wind.png","kin":122,"color":"White"},"123":{"tone":6,"toneName":"Resonant","seal":3,"sealName":"Night","imgUrl":"assets/img/Night.png","kin":123,"color":"Blue"},"124":{"tone":7,"toneName":"Galactic","seal":4,"sealName":"Seed","imgUrl":"assets/img/Seed.png","kin":124,"color":"Yellow"},"125":{"tone":8,"toneName":"Solar","seal":5,"sealName":"Serpent","imgUrl":"assets/img/Serpent.png","kin":125,"color":"Red"},"126":{"tone":9,"toneName":"Planetary","seal":6,"sealName":"World Bridger","imgUrl":"assets/img/World Bridger.png","kin":126,"color":"White"},"127":{"tone":10,"toneName":"Spectral","seal":7,"sealName":"Hand","imgUrl":"assets/img/Hand.png","kin":127,"color":"Blue"},"128":{"tone":11,"toneName":"Crystal","seal":8,"sealName":"Star","imgUrl":"assets/img/Star.png","kin":128,"color":"Yellow"},"129":{"tone":12,"toneName":"Cosmic","seal":9,"sealName":"Moon","imgUrl":"assets/img/Moon.png","kin":129,"color":"Red"},"130":{"tone":13,"seal":10,"sealName":"Dog","imgUrl":"assets/img/Dog.png","kin":130,"color":"White"},"131":{"tone":1,"toneName":"Magnetic","seal":11,"sealName":"Monkey","imgUrl":"assets/img/Monkey.png","kin":131,"color":"Blue"},"132":{"tone":2,"toneName":"Lunar","seal":12,"sealName":"Human","imgUrl":"assets/img/Human.png","kin":132,"color":"Yellow"},"133":{"tone":3,"toneName":"Electric","seal":13,"sealName":"Skywalker","imgUrl":"assets/img/Skywalker.png","kin":133,"color":"Red"},"134":{"tone":4,"toneName":"Self-Existing","seal":14,"sealName":"Wizard","imgUrl":"assets/img/Wizard.png","kin":134,"color":"White"},"135":{"tone":5,"toneName":"Overtone","seal":15,"sealName":"Eagle","imgUrl":"assets/img/Eagle.png","kin":135,"color":"Blue"},"136":{"tone":6,"toneName":"Resonant","seal":16,"sealName":"Warrior","imgUrl":"assets/img/Warrior.png","kin":136,"color":"Yellow"},"137":{"tone":7,"toneName":"Galactic","seal":17,"sealName":"Earth","imgUrl":"assets/img/Earth.png","kin":137,"color":"Red"},"138":{"tone":8,"toneName":"Solar","seal":18,"sealName":"Mirror","imgUrl":"assets/img/Mirror.png","kin":138,"color":"White"},"139":{"tone":9,"toneName":"Planetary","seal":19,"sealName":"Storm","imgUrl":"assets/img/Storm.png","kin":139,"color":"Blue"},"140":{"tone":10,"toneName":"Spectral","seal":20,"sealName":"Sun","imgUrl":"assets/img/Sun.png","kin":140,"color":"Yellow"},"141":{"tone":11,"toneName":"Crystal","seal":1,"sealName":"Dragon","imgUrl":"assets/img/Dragon.png","kin":141,"color":"Red"},"142":{"tone":12,"toneName":"Cosmic","seal":2,"sealName":"Wind","imgUrl":"assets/img/Wind.png","kin":142,"color":"White"},"143":{"tone":13,"seal":3,"sealName":"Night","imgUrl":"assets/img/Night.png","kin":143,"color":"Blue"},"144":{"tone":1,"toneName":"Magnetic","seal":4,"sealName":"Seed","imgUrl":"assets/img/Seed.png","kin":144,"color":"Yellow"},"145":{"tone":2,"toneName":"Lunar","seal":5,"sealName":"Serpent","imgUrl":"assets/img/Serpent.png","kin":145,"color":"Red"},"146":{"tone":3,"toneName":"Electric","seal":6,"sealName":"World Bridger","imgUrl":"assets/img/World Bridger.png","kin":146,"color":"White"},"147":{"tone":4,"toneName":"Self-Existing","seal":7,"sealName":"Hand","imgUrl":"assets/img/Hand.png","kin":147,"color":"Blue"},"148":{"tone":5,"toneName":"Overtone","seal":8,"sealName":"Star","imgUrl":"assets/img/Star.png","kin":148,"color":"Yellow"},"149":{"tone":6,"toneName":"Resonant","seal":9,"sealName":"Moon","imgUrl":"assets/img/Moon.png","kin":149,"color":"Red"},"150":{"tone":7,"toneName":"Galactic","seal":10,"sealName":"Dog","imgUrl":"assets/img/Dog.png","kin":150,"color":"White"},"151":{"tone":8,"toneName":"Solar","seal":11,"sealName":"Monkey","imgUrl":"assets/img/Monkey.png","kin":151,"color":"Blue"},"152":{"tone":9,"toneName":"Planetary","seal":12,"sealName":"Human","imgUrl":"assets/img/Human.png","kin":152,"color":"Yellow"},"153":{"tone":10,"toneName":"Spectral","seal":13,"sealName":"Skywalker","imgUrl":"assets/img/Skywalker.png","kin":153,"color":"Red"},"154":{"tone":11,"toneName":"Crystal","seal":14,"sealName":"Wizard","imgUrl":"assets/img/Wizard.png","kin":154,"color":"White"},"155":{"tone":12,"toneName":"Cosmic","seal":15,"sealName":"Eagle","imgUrl":"assets/img/Eagle.png","kin":155,"color":"Blue"},"156":{"tone":13,"seal":16,"sealName":"Warrior","imgUrl":"assets/img/Warrior.png","kin":156,"color":"Yellow"},"157":{"tone":1,"toneName":"Magnetic","seal":17,"sealName":"Earth","imgUrl":"assets/img/Earth.png","kin":157,"color":"Red"},"158":{"tone":2,"toneName":"Lunar","seal":18,"sealName":"Mirror","imgUrl":"assets/img/Mirror.png","kin":158,"color":"White"},"159":{"tone":3,"toneName":"Electric","seal":19,"sealName":"Storm","imgUrl":"assets/img/Storm.png","kin":159,"color":"Blue"},"160":{"tone":4,"toneName":"Self-Existing","seal":20,"sealName":"Sun","imgUrl":"assets/img/Sun.png","kin":160,"color":"Yellow"},"161":{"tone":5,"toneName":"Overtone","seal":1,"sealName":"Dragon","imgUrl":"assets/img/Dragon.png","kin":161,"color":"Red"},"162":{"tone":6,"toneName":"Resonant","seal":2,"sealName":"Wind","imgUrl":"assets/img/Wind.png","kin":162,"color":"White"},"163":{"tone":7,"toneName":"Galactic","seal":3,"sealName":"Night","imgUrl":"assets/img/Night.png","kin":163,"color":"Blue"},"164":{"tone":8,"toneName":"Solar","seal":4,"sealName":"Seed","imgUrl":"assets/img/Seed.png","kin":164,"color":"Yellow"},"165":{"tone":9,"toneName":"Planetary","seal":5,"sealName":"Serpent","imgUrl":"assets/img/Serpent.png","kin":165,"color":"Red"},"166":{"tone":10,"toneName":"Spectral","seal":6,"sealName":"World Bridger","imgUrl":"assets/img/World Bridger.png","kin":166,"color":"White"},"167":{"tone":11,"toneName":"Crystal","seal":7,"sealName":"Hand","imgUrl":"assets/img/Hand.png","kin":167,"color":"Blue"},"168":{"tone":12,"toneName":"Cosmic","seal":8,"sealName":"Star","imgUrl":"assets/img/Star.png","kin":168,"color":"Yellow"},"169":{"tone":13,"seal":9,"sealName":"Moon","imgUrl":"assets/img/Moon.png","kin":169,"color":"Red"},"170":{"tone":1,"toneName":"Magnetic","seal":10,"sealName":"Dog","imgUrl":"assets/img/Dog.png","kin":170,"color":"White"},"171":{"tone":2,"toneName":"Lunar","seal":11,"sealName":"Monkey","imgUrl":"assets/img/Monkey.png","kin":171,"color":"Blue"},"172":{"tone":3,"toneName":"Electric","seal":12,"sealName":"Human","imgUrl":"assets/img/Human.png","kin":172,"color":"Yellow"},"173":{"tone":4,"toneName":"Self-Existing","seal":13,"sealName":"Skywalker","imgUrl":"assets/img/Skywalker.png","kin":173,"color":"Red"},"174":{"tone":5,"toneName":"Overtone","seal":14,"sealName":"Wizard","imgUrl":"assets/img/Wizard.png","kin":174,"color":"White"},"175":{"tone":6,"toneName":"Resonant","seal":15,"sealName":"Eagle","imgUrl":"assets/img/Eagle.png","kin":175,"color":"Blue"},"176":{"tone":7,"toneName":"Galactic","seal":16,"sealName":"Warrior","imgUrl":"assets/img/Warrior.png","kin":176,"color":"Yellow"},"177":{"tone":8,"toneName":"Solar","seal":17,"sealName":"Earth","imgUrl":"assets/img/Earth.png","kin":177,"color":"Red"},"178":{"tone":9,"toneName":"Planetary","seal":18,"sealName":"Mirror","imgUrl":"assets/img/Mirror.png","kin":178,"color":"White"},"179":{"tone":10,"toneName":"Spectral","seal":19,"sealName":"Storm","imgUrl":"assets/img/Storm.png","kin":179,"color":"Blue"},"180":{"tone":11,"toneName":"Crystal","seal":20,"sealName":"Sun","imgUrl":"assets/img/Sun.png","kin":180,"color":"Yellow"},"181":{"tone":12,"toneName":"Cosmic","seal":1,"sealName":"Dragon","imgUrl":"assets/img/Dragon.png","kin":181,"color":"Red"},"182":{"tone":13,"seal":2,"sealName":"Wind","imgUrl":"assets/img/Wind.png","kin":182,"color":"White"},"183":{"tone":1,"toneName":"Magnetic","seal":3,"sealName":"Night","imgUrl":"assets/img/Night.png","kin":183,"color":"Blue"},"184":{"tone":2,"toneName":"Lunar","seal":4,"sealName":"Seed","imgUrl":"assets/img/Seed.png","kin":184,"color":"Yellow"},"185":{"tone":3,"toneName":"Electric","seal":5,"sealName":"Serpent","imgUrl":"assets/img/Serpent.png","kin":185,"color":"Red"},"186":{"tone":4,"toneName":"Self-Existing","seal":6,"sealName":"World Bridger","imgUrl":"assets/img/World Bridger.png","kin":186,"color":"White"},"187":{"tone":5,"toneName":"Overtone","seal":7,"sealName":"Hand","imgUrl":"assets/img/Hand.png","kin":187,"color":"Blue"},"188":{"tone":6,"toneName":"Resonant","seal":8,"sealName":"Star","imgUrl":"assets/img/Star.png","kin":188,"color":"Yellow"},"189":{"tone":7,"toneName":"Galactic","seal":9,"sealName":"Moon","imgUrl":"assets/img/Moon.png","kin":189,"color":"Red"},"190":{"tone":8,"toneName":"Solar","seal":10,"sealName":"Dog","imgUrl":"assets/img/Dog.png","kin":190,"color":"White"},"191":{"tone":9,"toneName":"Planetary","seal":11,"sealName":"Monkey","imgUrl":"assets/img/Monkey.png","kin":191,"color":"Blue"},"192":{"tone":10,"toneName":"Spectral","seal":12,"sealName":"Human","imgUrl":"assets/img/Human.png","kin":192,"color":"Yellow"},"193":{"tone":11,"toneName":"Crystal","seal":13,"sealName":"Skywalker","imgUrl":"assets/img/Skywalker.png","kin":193,"color":"Red"},"194":{"tone":12,"toneName":"Cosmic","seal":14,"sealName":"Wizard","imgUrl":"assets/img/Wizard.png","kin":194,"color":"White"},"195":{"tone":13,"seal":15,"sealName":"Eagle","imgUrl":"assets/img/Eagle.png","kin":195,"color":"Blue"},"196":{"tone":1,"toneName":"Magnetic","seal":16,"sealName":"Warrior","imgUrl":"assets/img/Warrior.png","kin":196,"color":"Yellow"},"197":{"tone":2,"toneName":"Lunar","seal":17,"sealName":"Earth","imgUrl":"assets/img/Earth.png","kin":197,"color":"Red"},"198":{"tone":3,"toneName":"Electric","seal":18,"sealName":"Mirror","imgUrl":"assets/img/Mirror.png","kin":198,"color":"White"},"199":{"tone":4,"toneName":"Self-Existing","seal":19,"sealName":"Storm","imgUrl":"assets/img/Storm.png","kin":199,"color":"Blue"},"200":{"tone":5,"toneName":"Overtone","seal":20,"sealName":"Sun","imgUrl":"assets/img/Sun.png","kin":200,"color":"Yellow"},"201":{"tone":6,"toneName":"Resonant","seal":1,"sealName":"Dragon","imgUrl":"assets/img/Dragon.png","kin":201,"color":"Red"},"202":{"tone":7,"toneName":"Galactic","seal":2,"sealName":"Wind","imgUrl":"assets/img/Wind.png","kin":202,"color":"White"},"203":{"tone":8,"toneName":"Solar","seal":3,"sealName":"Night","imgUrl":"assets/img/Night.png","kin":203,"color":"Blue"},"204":{"tone":9,"toneName":"Planetary","seal":4,"sealName":"Seed","imgUrl":"assets/img/Seed.png","kin":204,"color":"Yellow"},"205":{"tone":10,"toneName":"Spectral","seal":5,"sealName":"Serpent","imgUrl":"assets/img/Serpent.png","kin":205,"color":"Red"},"206":{"tone":11,"toneName":"Crystal","seal":6,"sealName":"World Bridger","imgUrl":"assets/img/World Bridger.png","kin":206,"color":"White"},"207":{"tone":12,"toneName":"Cosmic","seal":7,"sealName":"Hand","imgUrl":"assets/img/Hand.png","kin":207,"color":"Blue"},"208":{"tone":13,"seal":8,"sealName":"Star","imgUrl":"assets/img/Star.png","kin":208,"color":"Yellow"},"209":{"tone":1,"toneName":"Magnetic","seal":9,"sealName":"Moon","imgUrl":"assets/img/Moon.png","kin":209,"color":"Red"},"210":{"tone":2,"toneName":"Lunar","seal":10,"sealName":"Dog","imgUrl":"assets/img/Dog.png","kin":210,"color":"White"},"211":{"tone":3,"toneName":"Electric","seal":11,"sealName":"Monkey","imgUrl":"assets/img/Monkey.png","kin":211,"color":"Blue"},"212":{"tone":4,"toneName":"Self-Existing","seal":12,"sealName":"Human","imgUrl":"assets/img/Human.png","kin":212,"color":"Yellow"},"213":{"tone":5,"toneName":"Overtone","seal":13,"sealName":"Skywalker","imgUrl":"assets/img/Skywalker.png","kin":213,"color":"Red"},"214":{"tone":6,"toneName":"Resonant","seal":14,"sealName":"Wizard","imgUrl":"assets/img/Wizard.png","kin":214,"color":"White"},"215":{"tone":7,"toneName":"Galactic","seal":15,"sealName":"Eagle","imgUrl":"assets/img/Eagle.png","kin":215,"color":"Blue"},"216":{"tone":8,"toneName":"Solar","seal":16,"sealName":"Warrior","imgUrl":"assets/img/Warrior.png","kin":216,"color":"Yellow"},"217":{"tone":9,"toneName":"Planetary","seal":17,"sealName":"Earth","imgUrl":"assets/img/Earth.png","kin":217,"color":"Red"},"218":{"tone":10,"toneName":"Spectral","seal":18,"sealName":"Mirror","imgUrl":"assets/img/Mirror.png","kin":218,"color":"White"},"219":{"tone":11,"toneName":"Crystal","seal":19,"sealName":"Storm","imgUrl":"assets/img/Storm.png","kin":219,"color":"Blue"},"220":{"tone":12,"toneName":"Cosmic","seal":20,"sealName":"Sun","imgUrl":"assets/img/Sun.png","kin":220,"color":"Yellow"},"221":{"tone":13,"seal":1,"sealName":"Dragon","imgUrl":"assets/img/Dragon.png","kin":221,"color":"Red"},"222":{"tone":1,"toneName":"Magnetic","seal":2,"sealName":"Wind","imgUrl":"assets/img/Wind.png","kin":222,"color":"White"},"223":{"tone":2,"toneName":"Lunar","seal":3,"sealName":"Night","imgUrl":"assets/img/Night.png","kin":223,"color":"Blue"},"224":{"tone":3,"toneName":"Electric","seal":4,"sealName":"Seed","imgUrl":"assets/img/Seed.png","kin":224,"color":"Yellow"},"225":{"tone":4,"toneName":"Self-Existing","seal":5,"sealName":"Serpent","imgUrl":"assets/img/Serpent.png","kin":225,"color":"Red"},"226":{"tone":5,"toneName":"Overtone","seal":6,"sealName":"World Bridger","imgUrl":"assets/img/World Bridger.png","kin":226,"color":"White"},"227":{"tone":6,"toneName":"Resonant","seal":7,"sealName":"Hand","imgUrl":"assets/img/Hand.png","kin":227,"color":"Blue"},"228":{"tone":7,"toneName":"Galactic","seal":8,"sealName":"Star","imgUrl":"assets/img/Star.png","kin":228,"color":"Yellow"},"229":{"tone":8,"toneName":"Solar","seal":9,"sealName":"Moon","imgUrl":"assets/img/Moon.png","kin":229,"color":"Red"},"230":{"tone":9,"toneName":"Planetary","seal":10,"sealName":"Dog","imgUrl":"assets/img/Dog.png","kin":230,"color":"White"},"231":{"tone":10,"toneName":"Spectral","seal":11,"sealName":"Monkey","imgUrl":"assets/img/Monkey.png","kin":231,"color":"Blue"},"232":{"tone":11,"toneName":"Crystal","seal":12,"sealName":"Human","imgUrl":"assets/img/Human.png","kin":232,"color":"Yellow"},"233":{"tone":12,"toneName":"Cosmic","seal":13,"sealName":"Skywalker","imgUrl":"assets/img/Skywalker.png","kin":233,"color":"Red"},"234":{"tone":13,"seal":14,"sealName":"Wizard","imgUrl":"assets/img/Wizard.png","kin":234,"color":"White"},"235":{"tone":1,"toneName":"Magnetic","seal":15,"sealName":"Eagle","imgUrl":"assets/img/Eagle.png","kin":235,"color":"Blue"},"236":{"tone":2,"toneName":"Lunar","seal":16,"sealName":"Warrior","imgUrl":"assets/img/Warrior.png","kin":236,"color":"Yellow"},"237":{"tone":3,"toneName":"Electric","seal":17,"sealName":"Earth","imgUrl":"assets/img/Earth.png","kin":237,"color":"Red"},"238":{"tone":4,"toneName":"Self-Existing","seal":18,"sealName":"Mirror","imgUrl":"assets/img/Mirror.png","kin":238,"color":"White"},"239":{"tone":5,"toneName":"Overtone","seal":19,"sealName":"Storm","imgUrl":"assets/img/Storm.png","kin":239,"color":"Blue"},"240":{"tone":6,"toneName":"Resonant","seal":20,"sealName":"Sun","imgUrl":"assets/img/Sun.png","kin":240,"color":"Yellow"},"241":{"tone":7,"toneName":"Galactic","seal":1,"sealName":"Dragon","imgUrl":"assets/img/Dragon.png","kin":241,"color":"Red"},"242":{"tone":8,"toneName":"Solar","seal":2,"sealName":"Wind","imgUrl":"assets/img/Wind.png","kin":242,"color":"White"},"243":{"tone":9,"toneName":"Planetary","seal":3,"sealName":"Night","imgUrl":"assets/img/Night.png","kin":243,"color":"Blue"},"244":{"tone":10,"toneName":"Spectral","seal":4,"sealName":"Seed","imgUrl":"assets/img/Seed.png","kin":244,"color":"Yellow"},"245":{"tone":11,"toneName":"Crystal","seal":5,"sealName":"Serpent","imgUrl":"assets/img/Serpent.png","kin":245,"color":"Red"},"246":{"tone":12,"toneName":"Cosmic","seal":6,"sealName":"World Bridger","imgUrl":"assets/img/World Bridger.png","kin":246,"color":"White"},"247":{"tone":13,"seal":7,"sealName":"Hand","imgUrl":"assets/img/Hand.png","kin":247,"color":"Blue"},"248":{"tone":1,"toneName":"Magnetic","seal":8,"sealName":"Star","imgUrl":"assets/img/Star.png","kin":248,"color":"Yellow"},"249":{"tone":2,"toneName":"Lunar","seal":9,"sealName":"Moon","imgUrl":"assets/img/Moon.png","kin":249,"color":"Red"},"250":{"tone":3,"toneName":"Electric","seal":10,"sealName":"Dog","imgUrl":"assets/img/Dog.png","kin":250,"color":"White"},"251":{"tone":4,"toneName":"Self-Existing","seal":11,"sealName":"Monkey","imgUrl":"assets/img/Monkey.png","kin":251,"color":"Blue"},"252":{"tone":5,"toneName":"Overtone","seal":12,"sealName":"Human","imgUrl":"assets/img/Human.png","kin":252,"color":"Yellow"},"253":{"tone":6,"toneName":"Resonant","seal":13,"sealName":"Skywalker","imgUrl":"assets/img/Skywalker.png","kin":253,"color":"Red"},"254":{"tone":7,"toneName":"Galactic","seal":14,"sealName":"Wizard","imgUrl":"assets/img/Wizard.png","kin":254,"color":"White"},"255":{"tone":8,"toneName":"Solar","seal":15,"sealName":"Eagle","imgUrl":"assets/img/Eagle.png","kin":255,"color":"Blue"},"256":{"tone":9,"toneName":"Planetary","seal":16,"sealName":"Warrior","imgUrl":"assets/img/Warrior.png","kin":256,"color":"Yellow"},"257":{"tone":10,"toneName":"Spectral","seal":17,"sealName":"Earth","imgUrl":"assets/img/Earth.png","kin":257,"color":"Red"},"258":{"tone":11,"toneName":"Crystal","seal":18,"sealName":"Mirror","imgUrl":"assets/img/Mirror.png","kin":258,"color":"White"},"259":{"tone":12,"toneName":"Cosmic","seal":19,"sealName":"Storm","imgUrl":"assets/img/Storm.png","kin":259,"color":"Blue"},"260":{"tone":13,"seal":20,"sealName":"Sun","imgUrl":"assets/img/Sun.png","kin":260,"color":"Yellow"}};

  var calculateKinNumber = function(date) {
    var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 13, 44, 74];
    var monthValue = months[date.getMonth()];
    var yearValue = (62 + 105 * (date.getFullYear() - 1910)) % 260;
    return (date.getDate() + monthValue + yearValue) % 260;
  };

  var calculateGuide = function (destiny) {
    var guide = {};
    var position;

    switch (destiny.tone) {
      case 1:
      case 6:
      case 11:
        guide = destiny;
        break;
      case 5:
      case 10:
        position = (destiny.kin + 8) % 260 === 0 ? 260 : (destiny.kin + 8) % 260;
        break;
      case 2:
      case 7:
      case 12:
        position = (destiny.kin - 8) % 260 === 0 ? 260 : (destiny.kin - 8) % 260;
        break;
      case 3:
      case 8:
      case 13:
        position = (destiny.kin + 4) % 260 === 0 ? 260 : (destiny.kin + 4) % 260;
        break;
      case 4:
      case 9:
        position = (destiny.kin - 4) % 260 === 0 ? 260 : (destiny.kin - 4) % 260;
        break;
    }

    if (position) {
      guide.tone = destiny.tone;
      guide.toneName = destiny.toneName;
      guide.seal = $scope.tzolkin[position].seal;
      guide.sealName = $scope.tzolkin[position].sealName;
      guide.color = $scope.tzolkin[position].color;
      guide.imgUrl = "assets/img/" + guide.sealName + ".png";
    }

    return guide;
  };

  var calculateAnalogue = function (destiny) {
    var analogue = {};
    var position;
    switch (destiny.seal) {
      case 19:
        position = 20;
        break;
      case 20:
        position = 19;
        break;
      default:
        position = 19 - destiny.seal;
        break;
    }
    if (position) {
      analogue.tone = destiny.tone;
      analogue.toneName = destiny.toneName;
      analogue.seal = $scope.tzolkin[position].seal;
      analogue.sealName = $scope.tzolkin[position].sealName;
      analogue.color = $scope.tzolkin[position].color;
      analogue.imgUrl = "assets/img/" + analogue.sealName + ".png";
    }
    return analogue;
  };

  var calculateAntipode = function (destiny) {
    var antipode = {};
    var position = (destiny.kin + 10) % 260 === 0 ? 260 : (destiny.kin + 10) % 260;
    antipode.tone = destiny.tone;
    antipode.toneName = destiny.toneName;
    antipode.seal = $scope.tzolkin[position].seal;
    antipode.sealName = $scope.tzolkin[position].sealName;
    antipode.color = $scope.tzolkin[position].color;
    antipode.imgUrl = "assets/img/" + antipode.sealName + ".png";

    return antipode;
  };

  var calculateHidden = function (destiny) {
    var hidden = {};
    var seal = 21 - destiny.seal;
    var tone = 14 - destiny.tone;
    hidden.tone = $scope.tzolkin[tone].tone;
    hidden.toneName = $scope.tzolkin[tone].toneName;
    hidden.seal = $scope.tzolkin[seal].seal;
    hidden.sealName = $scope.tzolkin[seal].sealName;
    hidden.color = $scope.tzolkin[seal].color;
    hidden.imgUrl = "assets/img/" + hidden.sealName + ".png";

    return hidden;
  };

  var isLeapYear = function(year) {
    return new Date(year, 1, 29).getMonth() == 1;
  };

  var isBetweenDates = function (date, min, max) {
    date = new Date(date);
    min = new Date(min);
    max = new Date(max);
    return min <= date && date <= max;
  };

  var isAfterLeapDay = function(date) {
    date = new Date(date);
    var min = new Date(date.getFullYear(), 1, 29);
    var max = new Date(date.getFullYear(), 11, 31);
    return isLeapYear(date.getFullYear()) && isBetweenDates(date, min, max);
  };

  var daysToMilliseconds = function (days) {
    return days*24*60*60*1000;
  };

  var getKinBirthdays = function(date) {

    var now = new Date();
    var auxDate = new Date(date);
    var prevDate = new Date(date);
    var kinBirthdays = [];

    while (auxDate <= now) {
      prevDate = new Date(auxDate);
      auxDate.setDate(auxDate.getDate() + 260);
      if (isAfterLeapDay(auxDate)) {

        var min = new Date(prevDate.getFullYear(), 0, 1);
        var max = new Date(prevDate.getFullYear(), 1, 29);

        if (auxDate.getFullYear() !== prevDate.getFullYear() || isBetweenDates(prevDate, min, max)) {
          auxDate.setDate(auxDate.getDate() + 1);
        }

      }
    }
    return [prevDate, auxDate];
  };

  $scope.getKinInfo = function (date) {
    var formattedDate = date === "today" ? new Date() : new Date(date.year, date.month-1, date.day);

    $scope.kin = {};
    $scope.kin.destiny = $scope.tzolkin[calculateKinNumber(formattedDate)];
    $scope.kin.guide = calculateGuide($scope.kin.destiny);
    $scope.kin.analogue = calculateAnalogue($scope.kin.destiny);
    $scope.kin.antipode = calculateAntipode($scope.kin.destiny);
    $scope.kin.hidden = calculateHidden($scope.kin.destiny);
    $scope.kin.kinBirthdays = getKinBirthdays(formattedDate);
  }; 
    

});