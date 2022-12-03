function getComputerChoice() {
  let choice = ['rock', 'paper', 'scissors']
  let random = Math.floor(Math.random() * 3)

  return choice[random]
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase()
  let result = ''
  if (player === computerSelection) {
    result = 'Tie!!!'
  } else if (player === 'rock') {
    if (computerSelection === 'paper') {
      result = result = `You Lose! ${computerSelection} beats ${player}`
    } else {
      result = `You Win! ${player} beats ${computerSelection}`
    }
  } else if (player === 'paper') {
    if (computerSelection === 'scissors') {
      result = result = `You Lose! ${computerSelection} beats ${player}`
    } else {
      result = `You Win! ${player} beats ${computerSelection}`
    }
  } else if (player === 'scissors') {
    if (computerSelection === 'rock') {
      result = `You Lose! ${computerSelection} beats ${player}`
    } else {
      result = `You Win! ${player} beats ${computerSelection}`
    }
  }
  return result
}

function gamePlay() {
  let playerWin = 0
  let computerWin = 0
  for (let i = 0; i < 5; i++) {
    let player = getPlayerChoice()
    let result = playRound(player, getComputerChoice())
    let check = result.substring(4, 5)
    if (check === 'L') {
      computerWin++
    }
    if (check === 'W') {
      playerWin++
    }
    console.log(result)
  }
  if (playerWin > computerWin) {
    console.log('You Win!!!!')
  }
  if (playerWin < computerWin) {
    console.log('You Lose!!!!')
  }
  if (playerWin === computerWin) {
    console.log('Tie hole games')
  }
}

function getPlayerChoice() {
  let player = ''
  while (true) {
    let playerChoice = prompt('Chooseeee', '')
    if (playerChoice === '' || playerChoice === null) {
      continue
    } else if (
      playerChoice.toLowerCase() === 'rock' ||
      playerChoice.toLowerCase() === 'paper' ||
      playerChoice.toLowerCase() === 'scissors'
    ) {
      player = playerChoice.toLowerCase()
      break
    } else {
      continue
    }
  }
  return player
}

gamePlay()
