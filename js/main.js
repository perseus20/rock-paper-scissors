const buttons = document.querySelectorAll('.btn')
const resultRound = document.querySelector('.round-result')
const chooseRound = document.querySelector('.round-choose')
const score = document.querySelectorAll('.score-now')
const resultFinal = document.querySelector('.result')
const playAgain = document.querySelector('.btn-again')

let playerScore = 0
let computerScore = 0
let end = 1

function getComputerChoice() {
  let choice = ['rock', 'paper', 'scissors']
  let random = Math.floor(Math.random() * 3)

  return choice[random]
}

function playRound(player, computer) {
  let result = 0
  if (player === computer) result = 0
  if (
    (player === 'rock' && computer === 'paper') ||
    (player === 'paper' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'rock')
  ) {
    computerScore++
    result = -1
  }
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    playerScore++
    result = 1
  }
  if (playerScore === 5 || computerScore === 5) {
    endGame()
  }
  displayScore(playerScore, computerScore)
  displayRound(result, player, computer)
}

function gamePlay() {
  buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
      if (end === 0) return
      let computer = getComputerChoice()
      let player = this.dataset.choice
      playRound(player, computer)
    })
  })
}

playAgain.addEventListener('click', play)

function endGame() {
  if (playerScore === 5) {
    resultFinal.textContent = 'You win in final'
  }
  if (computerScore === 5) {
    resultFinal.textContent = 'You Lose..'
  }
  playAgain.style.display = 'block'
  buttons.forEach((button) => {
    button.disable = true
  })
  end = 0
}

function play() {
  playerScore = 0
  computerScore = 0
  end = 1
  displayScore(playerScore, computerScore)
  displayRound(2)
  resultFinal.textContent = ''
  playAgain.style.display = 'none'
  chooseRound.textContent = 'Chọn đi nào!'
}

gamePlay()

function displayRound(result, player, computer) {
  let textResult = ''
  let choose = ''
  if (result === 0) {
    textResult = 'Tie'
    choose = `${player} tie ${computer}`
  }
  if (result === 1) {
    textResult = 'You Win'
    choose = `${player} beat ${computer}`
  }
  if (result === -1) {
    textResult = 'You Lose'
    choose = `${player} is beat by ${computer}`
  }
  if (result === 2) {
    textResult = 'Bắt đầu'
    choose = ''
  }
  resultRound.textContent = textResult
  chooseRound.textContent = choose
}

function displayScore(player, computer) {
  score[0].textContent = `You: ${player}`
  score[1].textContent = `Computer: ${computer}`
}
