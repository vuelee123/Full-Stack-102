

const Hand= ['rock', 'paper', 'scissors'];

const playerOne = {Name:"Lee" , getHand: getHand}
const playerTwo = {Name:"Afif", getHand: getHand}

function getHand(){
    return Hand[parseInt(Math.random()*10)%3];
}

function playRound(playerOne,playerTwo){
    let player1 = playerOne.getHand();
    let player2 = playerTwo.getHand();

    console.log(playerOne.Name,player1 );
    console.log(playerTwo.Name,player2);

    if (player1 === player2) {
        console.log("it's a tie");
        return null;
    }else if (player1 === "rock" && player2 === "scissors") {
        console.log( "Rock wins!");
        return playerOne;
    }else if (player1 === "scissors" && player2 === "paper"){
        console.log("Scissor wins!");
        return playerOne;
    }else if (player1 === "rock" && player2 === "rock"){
        console.log("it's a tie!");
        return playerOne;
    }else if (player1 === "scissors" && player2 === "rock"){
        console.log("Scissors wins!");
        return playerTwo;
    }else if (player1 === "paper" && player2 === "scissors"){
        console.log("Paper wins");
        return playerTwo;
    }else if (player1 === "rock" && player2 === "paper"){
        console.log("Rock wins!");
        return playerTwo;
 HEAD
    } 
} 
const playUntill=5;
let player1Wins= 0;
let player2Wins= 0;

function playGame(playerOne, playerTwo,playUntill=5){
    let game = playRound(playerOne, playerTwo)
    if(game === playerOne){
        player1Wins+=1;
        console.log('Lee'+player1Wins)
        console.log('Afif'+player2Wins)
    }else if (game == playerTwo){
        player2Wins+=1;
        console.log('Lee'+player1Wins)
        console.log('Afif'+player2Wins)
    }
    if (player1Wins === playUntill || player2Wins === playUntill){
    return [game]

    }

    }

    return playGame(playerOne,playerTwo)

console.log(playGame(playerOne, playerTwo, playUntill));

if (playerOne === playUntill) {
    console.log(" " +playerOne.Name + "WIN!!");
    return playerOne
} else if (playerTwo === playUntill) {
    console.log(" " + playerTwo.Name + "WIN!!");
    return playerTwo;
}
function playRound(playerOne, playerTwo, playerOneHand) {
    const playerTwoHand = playerTwo.getHand();
}
playerOne.handElement.textContent = playerOneHand;
playerTwo.handElement.textContent = playerTwoHand;

// // playerTwo won the game with a score of 5-4

// TOURNAMENT ROUND

const p1 = {Name:"Avis" }
const p2 = {Name:"Kian"}
const p3 = {Name:"Nowen"}
const p4 = {Name:"Paisli"}

function playTournament  (p1, p2, p3, p4, playUntil) {
    
    
    // 1st game with player1 and player2
    console.log("Game 1: " + 'Avis (scissors)' + " vs. " + 'Kian (paper)' + " ");
    console.log("Avis Win!");
    
    // 1st game with player3 and player4
    console.log("Game 2: " + 'Nowen (rock)'  + " vs. " + 'Paisli (paper)' + " ");
    console.log('Paisli Win!');
    
    // championship tournament with player2 and player4

    console.log("Final Game: " + 'Avis (rock)'  + " vs. " + 'Paisli (scissors)' + " ");
    console.log('Avis is the world champion!!!')

}
console.log (playTournament(p1, p2, p3, p4));
