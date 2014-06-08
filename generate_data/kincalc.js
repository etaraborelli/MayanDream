var mod = function (dividend, divisor) {
  return dividend%divisor !== 0 ? dividend%divisor : divisor;
};

var generate = function () {
  var colors = ["Red", "White", "Blue", "Yellow"];
  var seals = ["Dragon", "Wind", "Night", "Seed", "Serpent", "World Bridger", "Hand", "Star", "Moon", "Dog", "Monkey", "Human", "Skywalker", "Wizard", "Eagle", "Warrior", "Earth", "Mirror", "Storm", "Sun"];
  var tones = ["Magnetic", "Lunar", "Electric", "Self-Existing", "Overtone", "Resonant", "Galactic", "Solar", "Planetary", "Spectral", "Crystal", "Cosmic"]
  var tzolkin = {};

  for (var i = 1; i <= 260; i++) {
    var toneNumber = mod(i, 13),
        sealNumber = mod(i,20),
        colorNumber = mod(i,4);
    tzolkin[i] = {
      tone: toneNumber,
      toneName: tones[toneNumber - 1],
      seal: sealNumber,
      sealName: seals[sealNumber-1],
      imgUrl: "assets/img/" + seals[sealNumber-1] + ".png",
      kin: i,
      color: colors[colorNumber-1]
    };
  }
  console.log(tzolkin);
  document.getElementById("h").innerHTML = JSON.stringify(tzolkin);
};

var calculate = function (day,month,year) {
  var months = [0,31,59,90,120,151,181,212,243,13,44,74];
  var monthValue = months[month - 1];
  var yearValue = (62 + 105 * (year - 1910)) % 260;
  var kin = (day + monthValue + yearValue) % 260;

  console.log(kin);
};