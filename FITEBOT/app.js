var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
//suits
const cups_div = document.getElementById("c");
const wands_div = document.getElementById("w");
const swords_div = document.getElementById("s");
const pentacles_div = document.getElementById("p");

//pull all information into arrays - 0 = name, 1 = position, 2 = suit, 3 = target, 4 = trait, [5 = technique : 0 = effects applied, 1 = special tech, 2 = permit, 3 = piercing, 4 = finisher], 6 = Status
var allyAr1 = [document.getElementById("nm1"), document.getElementById("po1"), document.getElementById("choice1"), document.getElementById("tar1"), document.getElementById("trait1"), document.getElementById("tech1"), document.getElementById("status1")]
var allyAr2 = [document.getElementById("nm2"), document.getElementById("po2"), document.getElementById("choice2"), document.getElementById("tar2"), document.getElementById("trait2"), document.getElementById("tech2"), document.getElementById("status2")]
var allyAr3 = [document.getElementById("nm3"), document.getElementById("po3"), document.getElementById("choice3"), document.getElementById("tar3"), document.getElementById("trait3"), document.getElementById("tech3"), document.getElementById("status3")]
var allyAr4 = [document.getElementById("nm4"), document.getElementById("po4"), document.getElementById("choice4"), document.getElementById("tar4"), document.getElementById("trait4"), document.getElementById("tech4"), document.getElementById("status4")]
var allyAr5 = [document.getElementById("nm5"), document.getElementById("po5"), document.getElementById("choice5"), document.getElementById("tar5"), document.getElementById("trait5"), document.getElementById("tech5"), document.getElementById("status5")]
var allyAr6 = [document.getElementById("nm6"), document.getElementById("po6"), document.getElementById("choice6"), document.getElementById("tar6"), document.getElementById("trait6"), document.getElementById("tech6"), document.getElementById("status6")]
var allyAr7 = [document.getElementById("nm7"), document.getElementById("po7"), document.getElementById("choice7"), document.getElementById("tar7"), document.getElementById("trait7"), document.getElementById("tech7"), document.getElementById("status7")]
var eneAr1 = [document.getElementById("nm8"), document.getElementById("po8"), document.getElementById("choice8"), document.getElementById("tar8"), document.getElementById("trait8"), document.getElementById("tech8"), document.getElementById("status8")]
var eneAr2 = [document.getElementById("nm9"), document.getElementById("po9"), document.getElementById("choice9"), document.getElementById("tar9"), document.getElementById("trait9"), document.getElementById("tech9"), document.getElementById("status9")]
var eneAr3 = [document.getElementById("nm10"), document.getElementById("po10"), document.getElementById("choice10"), document.getElementById("tar10"), document.getElementById("trait10"), document.getElementById("tech10"), document.getElementById("status10")]
var eneAr4 = [document.getElementById("nm11"), document.getElementById("po11"), document.getElementById("choice11"), document.getElementById("tar11"), document.getElementById("trait11"), document.getElementById("tech11"), document.getElementById("status11")]
var eneAr5 = [document.getElementById("nm12"), document.getElementById("po12"), document.getElementById("choice12"), document.getElementById("tar12"), document.getElementById("trait12"), document.getElementById("tech12"), document.getElementById("status12")]

function convTon(x) {
  arra = pull_values(x)
  arra[1] = parseInt(arra[1])
  arra[2] = parseInt(arra[2])
  arra[3] = parseInt(arra[3])
  return arra
}

//Results (hit count)
var hitArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var dealtArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function up_tech() {
  dnbutton.addEventListener("click", function() {
    // update all variables to include technique arrays
    allallies[0][5] = convTon(document.getElementById("tech1").value);
    allallies[1][5] = convTon(document.getElementById("tech2").value);
    allallies[2][5] = convTon(document.getElementById("tech3").value);
    allallies[3][5] = convTon(document.getElementById("tech4").value);
    allallies[4][5] = convTon(document.getElementById("tech5").value);
    allallies[5][5] = convTon(document.getElementById("tech6").value);
    allallies[6][5] = convTon(document.getElementById("tech7").value);
    allallies[7][5] = convTon(document.getElementById("tech8").value);
    allallies[8][5] = convTon(document.getElementById("tech9").value);
    allallies[9][5] = convTon(document.getElementById("tech10").value);
    allallies[10][5] = convTon(document.getElementById("tech11").value);
    allallies[11][5] = convTon(document.getElementById("tech12").value);

    //Reset (hit count)
    hitArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    dealtArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    effects1.innerHTML = allallies[0][5][0];
    effects1.innerHTML = allallies[0][5][0];
    effects2.innerHTML = allallies[1][5][0];
    effects3.innerHTML = allallies[2][5][0];
    effects4.innerHTML = allallies[3][5][0];
    effects5.innerHTML = allallies[4][5][0];
    effects6.innerHTML = allallies[5][5][0];
    effects7.innerHTML = allallies[6][5][0];
    effects8.innerHTML = allallies[7][5][0];
    effects9.innerHTML = allallies[8][5][0];
    effects10.innerHTML = allallies[9][5][0];
    effects11.innerHTML = allallies[10][5][0];
    effects12.innerHTML = allallies[11][5][0];

    finished1.innerHTML = allallies[0][5][4];
    finished2.innerHTML = allallies[1][5][4];
    finished3.innerHTML = allallies[2][5][4];
    finished4.innerHTML = allallies[3][5][4];
    finished5.innerHTML = allallies[4][5][4];
    finished6.innerHTML = allallies[5][5][4];
    finished7.innerHTML = allallies[6][5][4];
    finished8.innerHTML = allallies[7][5][4];
    finished9.innerHTML = allallies[8][5][4];
    finished10.innerHTML = allallies[9][5][4];
    finished11.innerHTML = allallies[10][5][4];
    finished12.innerHTML = allallies[11][5][4];

    console.log("Techniques reset");
    return allyAr1[5], allyAr2[5], allyAr3[5], allyAr4[5], allyAr5[5], allyAr6[5], allyAr7[5], eneAr1[5], eneAr2[5], eneAr3[5], eneAr4[5], eneAr5[5]
  })
}

function pull_values(x) {
  var tech_arr = x.split(",");
  return tech_arr
}


//array for running the round loop
var allallies = [allyAr1, allyAr2, allyAr3, allyAr4, allyAr5, allyAr6, allyAr7, eneAr1, eneAr2, eneAr3, eneAr4, eneAr5];

//Results (trump, draw, fail)
var userScore1 = document.getElementById("userScore1");
var userScore2 = document.getElementById("userScore2");
var userScore3 = document.getElementById("userScore3");
var userScore4 = document.getElementById("userScore4");
var userScore5 = document.getElementById("userScore5");
var userScore6 = document.getElementById("userScore6");
var userScore7 = document.getElementById("userScore7");
var userScore8 = document.getElementById("userScore8");
var userScore9 = document.getElementById("userScore9");
var userScore10 = document.getElementById("userScore10");
var userScore11 = document.getElementById("userScore11");
var userScore12 = document.getElementById("userScore12");


const button = document.getElementById("The_Button");
const upbutton = document.getElementById("up-button");
const dnbutton = document.getElementById("down_button");

//randomizes computer choices
// function getComputerChoice() {
//   const choices = ["c", "w", "s", "p"];
//   const randomNumber = Math.floor(Math.random() * 4);
//   return choices[randomNumber];
// }

// making the win legible
function convertToWord(letter) {
  if (letter === "c") return "Cups";
  if (letter === "w") return "Wands";
  if (letter === "s") return "Swords";
  return "Pentacles";
}

// counts wins
// function trump(user, computer) {
//   userScore++;
//   userScore_span.innerHTML = userScore;
//   compScore_span.innerHTML = computerScore;
//   result_p.innerHTML = `${convertToWord(user)} Trumps ${convertToWord(computer)}. You win!`;
// }
//
// function fail(user, computer) {
//   computerScore++;
//   userScore_span.innerHTML = userScore;
//   compScore_span.innerHTML = computerScore;
//   result_p.innerHTML = `${convertToWord(user)} Fails against ${convertToWord(computer)}. You lose!`
// }
//
// function draw(user, computer) {
//   userScore_span.innerHTML = userScore;
//   compScore_span.innerHTML = computerScore;
//   result_p.innerHTML = `${convertToWord(user)} bounces ${convertToWord(computer)}. It's a draw.`
// }

//check if technique was used
function techCheck(x) {
  var y = allallies[x][5][1]
  var b = allallies[checkTarget(x)][5][1]
  if (y == 1 && b == 1 && b !== 2 && y !== 2) {
    return modDraw3(x);
  } else if ((b == 1 || b == 2) && (y !== 2)) {
    return modDraw2(x);
  } else if ((y == 1 || y == 2) && (b !== 2)) {
    return modDraw1(x);
  } else {
    return draw(x);
  }}


// comparing suit thrown to enemy suit thrown
function game(userChoice, targetChoice) {
  switch (userChoice + targetChoice) {
    case "sc":
    case "cw":
    case "cp":
    case "ws":
    case "pw":
    case "ps":
      return "Trump" //return trump condition indicator
      break;
    case "cs":
    case "sw":
    case "wc":
    case "pc":
    case "sp":
    case "wp":
    case "np":
    case "ns":
    case "nw":
    case "nc":
    case "nn":
      return "Fail" //return fail condition indicator
      break;
    case "ss":
    case "ww":
    case "pp":
    case "cc":
      return 0 //return draw condition indicator
      break;
  }
}
//technique affected game - player feint
function modGame1(userChoice, targetChoice) {
  switch (userChoice + targetChoice) {
    case "sc":
    case "cw":
    case "cp":
    case "ws":
    case "pw":
    case "ps":
    case "sp":
    case "wp":
    case "pp":
      return "Trump" //return trump condition indicator
      break;
    case "cs":
    case "sw":
    case "wc":
    case "pc":
    case "ns":
    case "nw":
    case "nc":
    case "nn":
      return "Fail" //return fail condition indicator
      break;
    case "ss":
    case "ww":
    case "cc":
      return 0 //return draw condition indicator
      break;
  }
}

//technique affected game - enemy feints
function modGame2(userChoice, targetChoice) {
  switch (userChoice + targetChoice) {
    case "sc":
    case "cw":
    case "cp":
    case "ws":
      return "Trump" //return trump condition indicator
      break;
    case "cs":
    case "sw":
    case "wc":
    case "pc":
    case "sp":
    case "wp":
    case "pw":
    case "ps":
    case "pp":
    case "ns":
    case "nw":
    case "nc":
    case "nn":
      return "Fail" //return fail condition indicator
      break;
    case "ss":
    case "ww":
    case "cc":
      return 0 //return draw condition indicator
      break;
  }
}

//technique affected game - player feint and enemy feint
function modGame3(userChoice, targetChoice) {
  switch (userChoice + targetChoice) {
    case "sc":
    case "cw":
    case "cp":
    case "ws":
    case "sp":
    case "wp":
      return "Trump" //return trump condition indicator
      break;
    case "cs":
    case "sw":
    case "wc":
    case "pc":
    case "pw":
    case "ps":
    case "ns":
    case "nw":
    case "nc":
    case "nn":
      return "Fail" //return fail condition indicator
      break;
    case "ss":
    case "ww":
    case "pp":
    case "cc":
      return 0 //return draw condition indicator
      break;
  }
}


//update target lists  ONLY CLICK THIS BUTTON ONCE, OR IT BREAKS SHIT!!!
function update_list() {
  upbutton.addEventListener("click", function() {
    //target selections & character + target arrays
    let selecttar1 = document.getElementById("tar1");
    let selecttar2 = document.getElementById("tar2");
    let selecttar3 = document.getElementById("tar3");
    let selecttar4 = document.getElementById("tar4");
    let selecttar5 = document.getElementById("tar5");
    let selecttar6 = document.getElementById("tar6");
    let selecttar7 = document.getElementById("tar7");
    let selecttar8 = document.getElementById("tar8");
    let selecttar9 = document.getElementById("tar9");
    let selecttar10 = document.getElementById("tar10");
    let selecttar11 = document.getElementById("tar11");
    let selecttar12 = document.getElementById("tar12");

    //Character and target arrays
    var altarget = [eneAr1[0].value, eneAr2[0].value, eneAr3[0].value, eneAr4[0].value, eneAr5[0].value]; //ally targets
    var entarget = [allyAr1[0].value, allyAr2[0].value, allyAr3[0].value, allyAr4[0].value, allyAr5[0].value, allyAr6[0].value, allyAr7[0].value]; //enemy targets
    for (var i = 0; i < altarget.length; ++i) {
        // Append the element to the end of Array list
        selecttar1[selecttar1.length] = new Option(altarget[i], altarget[i]);
    }
    for (var i = 0; i < altarget.length; ++i) {
        // Append the element to the end of Array list
        selecttar2[selecttar2.length] = new Option(altarget[i], altarget[i]);
    }
    for (var i = 0; i < altarget.length; ++i) {
        // Append the element to the end of Array list
        selecttar3[selecttar3.length] = new Option(altarget[i], altarget[i]);
    }
    for (var i = 0; i < altarget.length; ++i) {
        // Append the element to the end of Array list
        selecttar4[selecttar4.length] = new Option(altarget[i], altarget[i]);
    }
    for (var i = 0; i < altarget.length; ++i) {
        // Append the element to the end of Array list
        selecttar5[selecttar5.length] = new Option(altarget[i], altarget[i]);
    }
    for (var i = 0; i < altarget.length; ++i) {
        // Append the element to the end of Array list
        selecttar6[selecttar6.length] = new Option(altarget[i], altarget[i]);
    }
    for (var i = 0; i < altarget.length; ++i) {
        // Append the element to the end of Array list
        selecttar7[selecttar7.length] = new Option(altarget[i], altarget[i]);
    }
    for (var i = 0; i < entarget.length; ++i) {
        // Append the element to the end of Array list
        selecttar8[selecttar8.length] = new Option(entarget[i], entarget[i]);
    }
    for (var i = 0; i < entarget.length; ++i) {
        // Append the element to the end of Array list
        selecttar9[selecttar9.length] = new Option(entarget[i], entarget[i]);
    }
    for (var i = 0; i < entarget.length; ++i) {
        // Append the element to the end of Array list
        selecttar10[selecttar10.length] = new Option(entarget[i], entarget[i]);
    }
    for (var i = 0; i < entarget.length; ++i) {
        // Append the element to the end of Array list
        selecttar11[selecttar11.length] = new Option(entarget[i], entarget[i]);
    }
    for (var i = 0; i < entarget.length; ++i) {
        // Append the element to the end of Array list
        selecttar12[selecttar12.length] = new Option(entarget[i], entarget[i]);
    }
    console.log(allyAr1[3].value);
  })
}

function pull_userChoice(x) {
  return allallies[x][2].value
}

function pull_enemy(x) {
  return allallies[x][3].value
}


function checkTarget(x) {
  if (pull_enemy(x) === allallies[0][0].value) {
    return 0;
  } else if (pull_enemy(x) === allallies[1][0].value) {
      return 1;
    } else if (pull_enemy(x) === allallies[2][0].value) {
        return 2;
      } else if (pull_enemy(x) === allallies[3][0].value) {
          return 3;
        } else if (pull_enemy(x) === allallies[4][0].value) {
            return 4;
          } else if (pull_enemy(x) === allallies[5][0].value) {
              return 5;
            } else if (pull_enemy(x) === allallies[6][0].value) {
                return 6;
              } else if (pull_enemy(x) === allallies[7][0].value) {
                  return 7;
                } else if (pull_enemy(x) === allallies[8][0].value) {
                    return 8;
                  } else if (pull_enemy(x) === allallies[9][0].value) {
                      return 9;
                    } else if (pull_enemy(x) === allallies[10][0].value) {
                        return 10;
                      } else {return 11
  }}


function enemyChoice(x) {
  return allallies[checkTarget(x)][2].value
}

//resolve draw
function draw(x) {
  var z = game(pull_userChoice(x), enemyChoice(x))
  if (z === 0) {
    if (allallies[x][4].value > allallies[checkTarget(x)][4].value) {
        return "Trump";
      } else if (allallies[x][4].value < allallies[checkTarget(x)][4].value) {
          return "Fail";
        } else {
            return "Draw";
  }} else {
      return game(pull_userChoice(x), enemyChoice(x))
    }
  }
//modified draw for techniques - player feints
function modDraw1(x) {
  var z =modGame1(pull_userChoice(x), enemyChoice(x))
  if (z === 0) {
    if (allallies[x][4].value > allallies[checkTarget(x)][4].value) {
        return "Trump";
      } else if (allallies[x][4].value < allallies[checkTarget(x)][4].value) {
          return "Fail";
        } else {
            return "Draw";
  }} else {
      return modGame1(pull_userChoice(x), enemyChoice(x))
    }
  }

//modified draw for techniques - enemy feints
function modDraw2(x) {
  var z =modGame2(pull_userChoice(x), enemyChoice(x))
  if (z === 0) {
    if (allallies[x][4].value > allallies[checkTarget(x)][4].value) {
        return "Trump";
      } else if (allallies[x][4].value < allallies[checkTarget(x)][4].value) {
          return "Fail";
        } else {
            return "Draw";
  }} else {
      return modGame2(pull_userChoice(x), enemyChoice(x))
    }
  }

//modified draw for techniques - player feint and enemy feint
function modDraw3(x) {
  var z =modGame3(pull_userChoice(x), enemyChoice(x))
  if (z === 0) {
    if (allallies[x][4].value > allallies[checkTarget(x)][4].value) {
        return "Trump";
      } else if (allallies[x][4].value < allallies[checkTarget(x)][4].value) {
          return "Fail";
        } else {
            return "Draw";
  }} else {
      return modGame3(pull_userChoice(x), enemyChoice(x))
    }
  }

// function to calculate hits dealt by a character.
function hitDealt(x) {
  y = techCheck(x);
  if (y == "Trump") {
    z = dealtArr[x]
    // check suit and apply hits from that.
    if (allallies[x][2] == "s" || allallies[x][2] == "w") {
      z = z + 2
    } else if (allallies[x][2] == "p" || allallies[x][2] == "c") {
        z = z + 1
      } else {
          z = z + 0
  } if (allallies[x][5][1] == 3) {
      z = z + 1
    } else if (allallies[x][5][1] == 4) {
        z = z - 1
      } else if (allallies[x][5][1] == 6) {
          z = z - 2
        } else if (allallies[x][5][1] == 5) {
            z = z + 0
          } else {
              z = z + 0
            }
    if (allallies[x][6] == 1) {
      z = 0
    } else if (allallies[x][6] == 11) {
        if (allallies[x][2] == "s" || allallies[x][2] == "w") {
          z = z - 1
        } else {
            z = z
          }
    } else {
      z = z
    }
    dealtArr[x] = z
    return dealtArr[x];
  } else if (y == "Fail") {
      z = dealtArr[x]
      pt = allallies[x][5][1]
      lt = allallies[checkTarget(x)][5][1]
      es = allallies[checkTarget(x)][2]
      if (lt == 10) {
        if (pt == 1 || pt == 2) {
          hitArr[x] = z + 1;
          return hitArr[x];
        }
      }
      dealtArr[x] = z
      return dealtArr[x];
    } else {
        z = dealtArr[x] + 1
        dealtArr[x] = z
        return dealtArr[x];
      }
}

// function to calculate dmg taken by a character.
function hittaken(x) {
  dealt = dealtArr[checkTarget(x)]
  y = techCheck(x);
  z = hitArr[x]
  pt = allallies[x][5][1]
  et = allallies[checkTarget(x)][5][1]
  ps = allallies[x][2]
  if (y == "Trump") {
    if (et == 10) {
      if (pt == 1 || pt == 2) {
        hitArr[x] = z + 1;
        return hitArr[x];
      } else {
          hitArr[x] = z
          return hitArr[x]
        }
    } else if (et == 11) {
      if (ps == "p") {
        hitArr[x] = z + 1;
        return hitArr[x];
      } else {
          hitArr[x] = z
          return hitArr[x]
        }
    } else {
        return hitArr[x]
      }}
  else if (y == "Fail") {
    enestat = allallies[checkTarget(x)][6].value
    enetar = allallies[checkTarget(x)][3].value
    // check if enemy has aggression
      if (enestat == 2) {
        // check if enemy's aggression is towards player
        if (enetar == allallies[x][0].value) {
          dealt = dealt + 0
        } else {
            dealt = 1
            }
    } else {
      // check if ally is plated
        if (allallies[x][6].value == 10) {
          // check if enemy has piercing
          if (allallies[checkTarget(x)][5][3] == 1) {
            dealt = dealt + 0
          // check if the enemy used swords or wands and minus a single hit of dmg
        } else if (allallies[checkTarget(x)][2] == "s" || allallies[checkTarget(x)][2] == "w") {
            dealt = dealt - 1
          } else {
            dealt = dealt
          }
        // check if player is hidden, reduce dmg to 0 if so.
      } else if (allallies[x][6].value == 6) {
          dealt = 0
      } else {
            dealt = dealt
          }
      }
        dealt = dealt + 0
      //add in the damage from a "draw" condition
    } else if (y == "Draw") {
      dealt = 1
    } else {
      dealt = dealt + 1
    }
    hitArr[x] = z + dealt
    console.log(et, pt, dealt)
    return hitArr[x];
      }

function updateUseScore(x) {
  userScore1.innerHTML = game(pull_userChoice(x), enemyChoice(x))
}


function run_round() {
  button.addEventListener("click", function() {
    userScore1.innerHTML = techCheck(0);
    userScore2.innerHTML = techCheck(1);
    userScore3.innerHTML = techCheck(2);
    userScore4.innerHTML = techCheck(3);
    userScore5.innerHTML = techCheck(4);
    userScore6.innerHTML = techCheck(5);
    userScore7.innerHTML = techCheck(6);
    userScore8.innerHTML = techCheck(7);
    userScore9.innerHTML = techCheck(8);
    userScore10.innerHTML = techCheck(9);
    userScore11.innerHTML = techCheck(10);
    userScore12.innerHTML = techCheck(11);

    console.log(hitArr)
    hitDealt(0)
    hitDealt(1)
    hitDealt(2)
    hitDealt(3)
    hitDealt(4)
    hitDealt(5)
    hitDealt(6)
    hitDealt(7)
    hitDealt(8)
    hitDealt(9)
    hitDealt(10)
    hitDealt(11)
    console.log(hitArr)
    hitco1.innerHTML = hittaken(0)
    hitco2.innerHTML = hittaken(1)
    hitco3.innerHTML = hittaken(2)
    hitco4.innerHTML = hittaken(3)
    hitco5.innerHTML = hittaken(4)
    hitco6.innerHTML = hittaken(5)
    hitco7.innerHTML = hittaken(6)
    hitco8.innerHTML = hittaken(7)
    hitco9.innerHTML = hittaken(8)
    hitco10.innerHTML = hittaken(9)
    hitco11.innerHTML = hittaken(10)
    hitco12.innerHTML = hittaken(11)

    // console.log(allyAr1[].value);
  })
}

//running functions
//main()
//checkTarget (number)
//pull_userChoice
//pull_char()
//pull_enemy()
up_tech()
run_round()
update_list()
