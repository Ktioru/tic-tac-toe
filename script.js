const board = document.querySelector(".board")

const squares = {}

let moveCount = 0

const Player = (name, move) => {
    const turn = (square) => {
        if (squares[`square ${square}`].innerText == "" ) {
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
                   
                })
                
                squares[`square ${c}`] = square
                


                board.appendChild(square)
            }
            console.log(squares)
    },
    
    

}


game.createSquares()







