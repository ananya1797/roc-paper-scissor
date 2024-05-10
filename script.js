let btns = document.querySelectorAll(".op");
let num = Math.floor(Math.random() * 3); 
let replay=document.querySelector(".replay");

let text=document.createElement("h2");
replay.before(text)

text.innerText="";
text.style.textAlign="center";
text.style.color="#386641";
text.style.marginTop="40px";

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let userChoice = index;
        let systemChoice = num;

        if (userChoice === systemChoice) {
            console.log("It's a tie! The system chose the same.");
            text.innerText="It's a tie! The system chose the same.";
        } else if (
            (userChoice === 0 && systemChoice === 1) ||
            (userChoice === 1 && systemChoice === 2) ||
            (userChoice === 2 && systemChoice === 0)
        ) {
            console.log("System wins!");
            text.innerText="System wins!"
        } else {
            console.log("You won!");
            text.innerText="You win!!";
        }
    });
});

replay.onclick=()=>{
text.innerText="";
text.remove();
};

