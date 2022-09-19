const mainBtns = [...document.querySelectorAll('.bottomIcons')]
const computerIcons = [...document.querySelectorAll('.rightIcons')]
const userIcons = [...document.querySelectorAll('.leftIcons')]
const resetBtn = document.querySelector('#reset ')
let userScore = 0
let compScore = 0

mainBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let userSelection = btn.getAttribute('data-button')
        showUserSelection(userSelection)
        let compSelection = showComputerSelection()
        whoWon(userSelection, compSelection)
    })
});


const LeftRock = document.querySelector('.leftIcons:nth-child(1)')
const LeftPaper = document.querySelector('.leftIcons:nth-child(2)')
const LeftScissor = document.querySelector('.leftIcons:nth-child(3)')

function showUserSelection(userSelection) {
    whatToShow(userSelection, LeftRock, LeftPaper, LeftScissor)
}

const RightRock = document.querySelector('.rightIcons:nth-child(1)')
const RightPaper = document.querySelector('.rightIcons:nth-child(2)')
const RightScissor = document.querySelector('.rightIcons:nth-child(3)')

function showComputerSelection() {
    const selPool = ["rock", "paper", "scissor"]
    const compSel = selPool[Math.floor(Math.random() * 3)]

    whatToShow(compSel, RightRock, RightPaper, RightScissor)
    return compSel
}

function whoWon(userSelection, compSelection) {
    if (userSelection === compSelection)
        draw()
    else if ((userSelection === 'rock' && compSelection === 'scissor') || (userSelection === 'paper' && compSelection === 'rock') || (userSelection === 'scissor' && compSelection === 'paper'))
        userWon()
    else
        userLost()
}

const userWonSymbol = document.querySelector('.centerIcons:nth-child(1)')
const userLostSymbol = document.querySelector('.centerIcons:nth-child(2)')
const drawSymbol = document.querySelector('.centerIcons:nth-child(3)')

function draw() {
    showHideIcon(drawSymbol, userWonSymbol, userLostSymbol)
    fillAptColor('white', LeftRock, LeftPaper, LeftScissor)
    fillAptColor('white', RightRock, RightPaper, RightScissor)
}

function userWon() {
    showHideIcon(userWonSymbol, userLostSymbol, drawSymbol)
    fillAptColor('green', LeftRock, LeftPaper, LeftScissor)
    fillAptColor('red', RightRock, RightPaper, RightScissor)
    userScore++
    updateScores()
}

function userLost() {
    showHideIcon(userLostSymbol, userWonSymbol, drawSymbol)
    fillAptColor('green', RightRock, RightPaper, RightScissor)
    fillAptColor('red', LeftRock, LeftPaper, LeftScissor)
    compScore++
    updateScores()
}

function whatToShow(selection, rock, paper, scissor) {
    if (selection === 'rock') {
        showHideIcon(rock, paper, scissor)
    }
    else if (selection === 'paper') {
        showHideIcon(paper, rock, scissor)
    }
    else if (selection === 'scissor') {
        showHideIcon(scissor, rock, paper)
    }
}

function showHideIcon(show, hide, secondHide) {
    show.style.opacity = '1'
    hide.style.opacity = '0'
    secondHide.style.opacity = '0'
}

function fillAptColor(color, rock, paper, scissor) {
    if (color === 'green') {
        rock.style.fill = 'rgb(145, 196, 131)'
        paper.style.fill = 'rgb(145, 196, 131)'
        scissor.style.fill = 'rgb(145, 196, 131)'
    }
    else if (color === 'red') {
        rock.style.fill = 'rgb(255, 100, 100)'
        paper.style.fill = 'rgb(255, 100, 100)'
        scissor.style.fill = 'rgb(255, 100, 100)'
    }
    else {
        rock.style.fill = 'white'
        paper.style.fill = 'white'
        scissor.style.fill = 'white'
    }
}

const yourScore = document.querySelector('#YourScore')
const computerScore = document.querySelector('#ComScore')

function updateScores() {
    if (userScore > 0 || compScore > 0) {
        yourScore.innerText = `Your Score: ${userScore}`
        computerScore.innerText = `Comp Score: ${compScore}`
    }
    else {
        yourScore.innerText = `Your Score`
        computerScore.innerText = `Comp Score`
    }
}

resetBtn.addEventListener('click', () => {
    userScore = 0
    compScore = 0
    LeftRock.style.opacity = '0'
    LeftPaper.style.opacity = '0'
    LeftScissor.style.opacity = '0'

    drawSymbol.style.opacity = 0
    userWonSymbol.style.opacity = 0
    userLostSymbol.style.opacity = 0

    RightRock.style.opacity = '0'
    RightPaper.style.opacity = '0'
    RightScissor.style.opacity = '0'
    updateScores()
})