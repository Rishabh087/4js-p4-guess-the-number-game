let randomNumber =   parseInt((Math.random())*100 + 1);
console.log(randomNumber);

const submit  = document.querySelector('#subt'); 
const userInput = document.querySelector('#guessField');
const guessSlot =  document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi =  document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [] ;
let numGuess = 1 ;

let playGame = true ;

if(playGame){

    submit.addEventListener('click' , function(e){
      e.preventDefault();
      const guess =  parseInt(userInput.value);
    //   console.log(guess);
      validateGuess(guess);
    })

}

function validateGuess(guess){

    if(isNaN(guess)){
        alert('Please enetr a valid number')
    }else if (guess < 1){
        alert('Please enetr a valid number greater than 1');
    }else if(guess > 100){
        alert('Please enetr a valid number less than 100');
    }else{
  
    prevGuess.push(guess);
     
    if(numGuess === 11){
        displayGuess(guess);
        showMessage(`Game Over Random number was ${randomNumber}`);
        endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
    }
}

function checkGuess(guess){

if(guess > randomNumber){
    showMessage(`Your Number is Too High`);
}else if(guess < randomNumber){
    showMessage(`Your Number is Too Low`);
}else if (guess === randomNumber){
    showMessage(`Your Have Guessed right : You Won!!`); 
    endGame();
}


}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function showMessage(message){

    lowOrhi.innerHTML = `<h2>${message}</h2>` ;

}

function endGame(){

    userInput.value = '';
    userInput.setAttribute('disable' , '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start A New Game </h2>`;
    startOver.appendChild(p);
    playGame = false ; 
    newGame();
} 

function newGame(){

    const newGamebutton = document.querySelector('#newGame');
    newGamebutton.addEventListener('click' , function(){
        randomNumber =  parseInt((Math.random())*100 + 1);
        prevGuess = [];
        numGuess =  1 ;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disable');
        startOver.removeChild(p);
        playGame = true ;
    })


}





