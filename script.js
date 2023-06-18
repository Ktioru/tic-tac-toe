const board = document.querySelector(".board")

const squares = {}

let moveCount = 0

let start = false

let win = false

const gameTitle = document.querySelector(".game-title")

const button = document.querySelector(".button")

const Player = (name, move) => {
    const turn = (square) => {
        if (squares[`square ${square}`].innerText == ""  && start == true && win == false) {
            squares[`square ${square}`].innerText = move
            moveCount++
        }
        
        
    }
    return {turn}
}

const playerOne = Player("Mateus", "X")
const playerTwo = Player("SomeOne", "O")



const game = {
    createSquares: () => {
            
            
            for (let c = 1; c < 10; c++) {
                let square = document.createElement("div")

                square.classList.add("square")

                square.addEventListener("click", () => {
                    if (moveCount % 2 == 0) {
                        playerOne.turn(c)
                    } else {
                        playerTwo.turn(c)
                    }
                    if(moveCount > 4) {
                        
                        game.verifyWinner()
                    }
                    

                   
                })
                
                squares[`square ${c}`] = square
                


                board.appendChild(square)
            }
            console.log(squares)
    },
    verifyWinner: () => {
        //Vertical Wins
        if(squares["square 1"].innerText == squares["square 2"].innerText && squares["square 1"].innerText == squares["square 3"].innerText && squares["square 1"].innerText != "") {
            win = true
            console.log("WIN 1")
        } else if (squares["square 4"].innerText == squares["square 5"].innerText && squares["square 4"].innerText == squares["square 6"].innerText && squares["square 4"].innerText != "") {
            win = true
            console.log("WIN 2")

        } else if (squares["square 7"].innerText == squares["square 8"].innerText && squares["square 7"].innerText == squares["square 9"].innerText && squares["square 7"].innerText != "") {
            win = true
            console.log("WIN 3")
        } 
        //HorizontalWins
        else if (squares["square 1"].innerText == squares["square 4"].innerText && squares["square 1"].innerText == squares["square 7"].innerText && squares["square 1"].innerText != "") {
            win = true
            console.log("WIN 4")

        }
        else if (squares["square 2"].innerText == squares["square 5"].innerText && squares["square 2"].innerText == squares["square 8"].innerText && squares["square 2"].innerText != "") {
            win = true
            console.log("WIN 5")

        }
        else if (squares["square 3"].innerText == squares["square 6"].innerText && squares["square 3"].innerText == squares["square 9"].innerText && squares["square 3"].innerText != "") {
            win = true
            console.log("WIN 6")

        }
        //Other Wins
        else if (squares["square 1"].innerText == squares["square 5"].innerText && squares["square 1"].innerText == squares["square 9"].innerText && squares["square 1"].innerText != "") {
            win = true
            console.log("WIN 7")

        } else if (squares["square 3"].innerText == squares["square 5"].innerText && squares["square 3"].innerText == squares["square 7"].innerText && squares["square 3"].innerText != "") {
            win = true
            console.log("WIN 8")

        }
        
        if(moveCount == 9 && win == false) {
            button.innerText = "Restart"
            gameTitle.innerText = "It's a Tie!"
            
        } else if (win == true) {
            button.innerText = "Restart"

            if(moveCount % 2 != 0) {
                gameTitle.innerText = "Player One Wins!"
            } else {
                gameTitle.innerText = "Player Two Wins!"
            }
            
        }
        
    },
    startRestart: () => {
        if (start == false) {
            start = true
            button.innerText = "Restart"

        } else if(start == true) {
            
            win = false
            moveCount = 0
            gameTitle.innerText = "Let's Play!"
            for (let c = 1; c < 10; c++) {
                squares[`square ${c}`].innerText = ""
            }
            
        }
        
    }
    
    

}


game.createSquares()







