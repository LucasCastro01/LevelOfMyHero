var wins = 30;
var losses = 5;

var rank = calculateRank(wins, losses);

function calculateRank(wins, losses) {
  var difference = wins - losses;

  if (difference <= 10)
    return "Ferro";
  else if (difference <= 20)
    return "Bronze";
  else if (difference <= 50)
    return "Prata";
  else if (difference <= 80)
    return "Ouro";
  else if (difference <= 90)
    return "Diamante";
  else if (difference <= 100)
    return "Lendário";
  else
    return "Imortal";
}

console.log("O Herói tem saldo de " + rank + " e está no nível: " + rank);
