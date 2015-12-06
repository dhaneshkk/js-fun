var Immutable = require("./immutable.js");
var decrementHP = function(player) {
  return player.set("hp", player.get("hp")-1);
};
var isSameTeam = function(player1, player2) {
  return player1.get("team") === player2.get("team");
};
var punch = function(player, target) {
  if (isSameTeam(player, target)) {
    return target;
  } else {
    return decrementHP(target);
  }
};
var jobe = Immutable.Map({name:"Jobe", hp:20, team: "red"});
var michael = Immutable.Map({name:"Michael", hp:20, team: "green"});
console.log(punch(jobe, michael));
