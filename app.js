function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "r";
    }
    if (computerChoice == 1) {
        return "p";
    }
    if (computerChoice == 2) {
        return "s";
    }
}
function compare(a, b) {
    if (a == b) {
        return "You tie!";
    } else if (
        (a == "r" && b == "s") || 
        (a == "s" && b == "p") ||
        (a == "p" && b == "r")
    ) {
        return "youre winner";
    } else {
        return "you're lose";
    }
}
function main() {
    let playerChoice = window.prompt("rock, paper, scissors (r/p/s): ");
    alert(compare(playerChoice, computerPlay()));
    let replayChoice = window.prompt("wanna play again? y/n: ");
    if (replayChoice == "y") {
        main();
    } else if (replayChoice == "n") {

    }
}
main()
