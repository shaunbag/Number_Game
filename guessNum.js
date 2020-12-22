const guessNum = (num1, num2) => {
    const secret = Math.floor(Math.random() * 10 ); //generate random num with math functions --- number between 1 and 10
     if (num1 === secret && num2 === secret) {
         console.log(`its a draw the secret number was ${secret}`);
     } else if (num1 === secret) {
        console.log(`Player 1 Wins!! the secret number was ${secret}`);
     } else if (num2 === secret) {
         console.log(`Player two Wins!! the secret number was ${secret}`);
     } else {
        console.log(`nobody guessed right! the secret number was ${secret}`);
     }
}

guessNum(6,7);

