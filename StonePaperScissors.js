let heading = document.getElementById('heading')
let chances = document.getElementById('chances')
let bottomRock = document.getElementById('bottomRock')
let bottomPaper = document.getElementById('bottomPaper')
let bottomScissors = document.getElementById('bottomScissors')

let leftRock = document.getElementById('leftRock')
let leftPaper = document.getElementById('leftPaper')
let leftScissors = document.getElementById('leftScissors')

let RoundResult = document.getElementById('RoundResult')
let centerEqual = document.getElementById('centerEqual')
let centerGreater = document.getElementById('centerGreater')
let centerSmaller = document.getElementById('centerSmaller')
let equal = document.getElementsByClassName('fa-equals')
let greater = document.getElementsByClassName('fa-greater-than')
let smaller = document.getElementsByClassName('fa-less-than')

let rightRock = document.getElementById('rightRock')
let rightPaper = document.getElementById('rightPaper')
let rightScissors = document.getElementById('rightScissors')

let result = document.getElementById('result')
let YourScore = document.getElementById('YourScore')
let ComScore = document.getElementById('ComScore')


let userInput;
let ComputerSel;
let ChancesCounter = 0
let RoundCounter = 1
let TimeUserWon = 0
let TimeComWon = 0

bottomRock.addEventListener('click', function () {
    ChancesCounter++
    ComputerSel = Math.floor(Math.random() * 3);
    userInput = 0
    leftPaper.style.opacity = '0'
    leftScissors.style.opacity = '0'
    leftRock.style.opacity = '1'
    ComputerProcess(ComputerSel)
    results(userInput, ComputerSel)
    updateChancesAndRounds(ChancesCounter)
})

bottomPaper.addEventListener('click', function () {
    ChancesCounter++
    ComputerSel = Math.floor(Math.random() * 3);
    userInput = 1
    leftRock.style.opacity = '0'
    leftScissors.style.opacity = '0'
    leftPaper.style.opacity = '1'
    ComputerProcess(ComputerSel)
    results(userInput, ComputerSel)
    updateChancesAndRounds(ChancesCounter)
})

bottomScissors.addEventListener('click', function () {
    ChancesCounter++
    ComputerSel = Math.floor(Math.random() * 3);
    userInput = 2
    leftRock.style.opacity = '0'
    leftPaper.style.opacity = '0'
    leftScissors.style.opacity = '1'
    ComputerProcess(ComputerSel)
    results(userInput, ComputerSel)
    updateChancesAndRounds(ChancesCounter)
})

result.addEventListener(
    'click', function () {
        resetEverything()
    })

function ComputerProcess(CompSel) {
    console.log("UserInput", userInput)
    console.log("Computer Selection", CompSel)
    if (ComputerSel == 0) {
        rightRock.style.opacity = '1'
        rightScissors.style.opacity = '0'
        rightPaper.style.opacity = '0'
    }
    else if (ComputerSel == 1) {
        rightPaper.style.opacity = '1'
        rightRock.style.opacity = '0'
        rightScissors.style.opacity = '0'
    }
    else {
        rightScissors.style.opacity = '1'
        rightRock.style.opacity = '0'
        rightPaper.style.opacity = '0'
    }

}


function results(userIn, CompSel) {
    if (whoWon(userIn, CompSel) == 121) {
        draw()
    }
    else if (whoWon(userIn, CompSel)) {
        userWon()
    }
    else {
        comWon()
    }
}

function whoWon(userIp, ComSel) {
    if (userIp == ComSel)
        return 121
    else if (userIp == 0 && ComSel == 2)
        return true
    else if (userIp == 1 && ComSel == 0)
        return true
    else if (userIp == 2 && ComSel == 1)
        return true
    else
        return false
}

function draw() {
    console.log("It's a Draw!")
    centerSmaller.style.opacity = '0'
    centerGreater.style.opacity = '0'
    centerEqual.style.opacity = '1'
    result.innerHTML = "It's A Draw"
    result.style.color = 'white'
    leftRock.style.color = 'white';
    leftPaper.style.color = 'white';
    leftScissors.style.color = 'white';
    rightRock.style.color = 'white';
    rightPaper.style.color = 'white';
    rightScissors.style.color = 'white';
}

function userWon() {
    console.log("UserWon!")
    TimeUserWon++
    YourScore.innerHTML = "You Score: " + TimeUserWon
    centerEqual.style.opacity = '0'
    centerSmaller.style.opacity = '0'
    centerGreater.style.opacity = '1'
    result.innerHTML = "You Win!"
    result.style.color = 'greenyellow'
    leftRock.style.color = '#91C483';
    leftPaper.style.color = '#91C483';
    leftScissors.style.color = '#91C483';
    rightRock.style.color = '#FF6464';
    rightPaper.style.color = '#FF6464';
    rightScissors.style.color = '#FF6464';
}

function comWon() {
    console.log("ComputerWon!")
    TimeComWon++
    ComScore.innerHTML = "Comp Score: " + TimeComWon
    centerEqual.style.opacity = '0'
    centerGreater.style.opacity = '0'
    centerSmaller.style.opacity = '1'
    result.innerHTML = "You Lose!"
    result.style.color = 'red'
    leftRock.style.color = '#FF6464';
    leftPaper.style.color = '#FF6464';
    leftScissors.style.color = '#FF6464';
    rightRock.style.color = '#91C483';
    rightPaper.style.color = '#91C483';
    rightScissors.style.color = '#91C483';
}


function resetEverything() {
    TimeUserWon = 0
    TimeComWon = 0
    ChancesCounter = 0
    RoundCounter = 1
    heading.innerHTML = "Start"
    result.innerHTML = "Let's Go!"
    result.style.color = 'black'
    YourScore.innerHTML = "You Score"
    ComScore.innerHTML = "Comp Score"
    centerEqual.style.opacity = '0'
    centerGreater.style.opacity = '0'
    centerSmaller.style.opacity = '0'
    rightScissors.style.opacity = '0'
    rightRock.style.opacity = '0'
    rightPaper.style.opacity = '0'
    leftScissors.style.opacity = '0'
    leftRock.style.opacity = '0'
    leftPaper.style.opacity = '0'
    chances.style.opacity = '0'
    RoundResult.innerHTML = ''
    bottomRock.style.pointerEvents = 'all'
    bottomPaper.style.pointerEvents = 'all'
    bottomScissors.style.pointerEvents = 'all'
}

function updateChancesAndRounds(ChancesCounter) {
    console.log(RoundCounter)
    chances.style.opacity = '1'
    heading.innerHTML = 'Round ' + RoundCounter
    chances.innerHTML = "Chance " + ChancesCounter
    if (TimeUserWon != 0 && TimeUserWon % 5 == 0 || TimeComWon != 0 && TimeComWon % 5 == 0) {
        RoundCompletion()
        RoundCounter++
        // if (YourScore == 5 || ComScore == 5)
        //     RoundResult()
    }
}

function RoundCompletion() {
    if (TimeUserWon > TimeComWon)
        RoundResult.innerHTML = "Round Won!"
    else
        RoundResult.innerHTML = "Round Lost!"
    bottomRock.style.pointerEvents = 'none'
    bottomPaper.style.pointerEvents = 'none'
    bottomScissors.style.pointerEvents = 'none'
    centerEqual.style.opacity = '0'
    centerGreater.style.opacity = '0'
    centerSmaller.style.opacity = '0'
    rightScissors.style.opacity = '0'
    rightRock.style.opacity = '0'
    rightPaper.style.opacity = '0'
    leftScissors.style.opacity = '0'
    leftRock.style.opacity = '0'
    leftPaper.style.opacity = '0'
    chances.style.opacity = '0'
    setTimeout(resetEverything, 3000);
}

