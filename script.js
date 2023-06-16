const board = document.querySelector(".board")
console.log(board)

function createSquares() {
    console.log("I'm ALIVE")

    let square = document.createElement("div")
    square.classList.add("square")
    board.appendChild(square)

}