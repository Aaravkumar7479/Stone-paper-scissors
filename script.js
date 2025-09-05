const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const comp_scores=document.querySelector("#comp-score");
const user_scores=document.querySelector("#user-score");
let user_point = 0;
let comp_point = 0;

const genCompChoice = () => {
  let arr = ["rock", "paper", "scissors"];
  const ranIdx = Math.floor(Math.random() * 3);
  return arr[ranIdx];
};

const drawGame = () => { // check draw
    msg.innerText=" Game was Draw. Play again";
    msg.style.backgroundColor="#081b31";
//   console.log("draw");
};
const showWinner = (userWin , userChoice ,compChoice) => { // check win or fail
  if (userWin){
    user_point+=1;
    user_scores.innerText=user_point;
    msg.innerText=` You win! Your ${userChoice} beats ${compChoice}`;
 msg.style.backgroundColor="green";
    //  console.log("You Win !");
  }
  else {
    comp_point+=1;
    comp_scores.innerText=comp_point;
     msg.innerText=` You lose ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor="red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);

  const compChoice = genCompChoice(); // call computer generate function .
  console.log("com choice =", compChoice);

  if (userChoice === compChoice) drawGame(); // call to draw function
  else {
    let userWin = true;
    if (userChoice === "rock")
      userWin = compChoice === "paper" ? false : true; // Ternary operator
    else if (userChoice === "paper")
      userWin = compChoice === "rock" ? true : false;
    else 
    userWin = compChoice === "rock" ? false : true;

    showWinner(userWin, userChoice, compChoice);
  }
  // genertae computer choice function ->modular
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); //here id value is equal to choice

    playGame(userChoice);
  });
});

// toggle button for mode change (dark/light)


const btn=document.querySelector(".mode");
const body=document.querySelector("body");

let currmode="light";
btn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }

    else{
       currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");  
    }
console.log(currmode);
} );
