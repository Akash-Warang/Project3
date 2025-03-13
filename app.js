let gameSeq=[];
let userSeq=[];

let btns=["pink", "grey", "orange", "blue"];

let gameStart=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(gameStart==false){
        console.log("Started");
        gameStart=true;
        
        levelUp();
    }
})

    function btnFlash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");
        },250);   
    }

    function userFlash(btn){
        btn.classList.add("userFlash");
        setTimeout(function(){
            btn.classList.remove("userFlash");
        },250);   
    }

    function levelUp(){
        level++;
        h3.innerText=`Level ${level}`;
        let randIdx=Math.floor(Math.random()*3);
        // console.log(randIdx);
        let randCol=btns[randIdx];
        let randBtn=document.querySelector(`.${randCol}`);
        // console.dir(randBtn.classList[1]);
        btnFlash(randBtn);
    }


function btnPress(){
    console.log("pressed");
    // userFlash(this);     //copy pasted
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){

    // btn.addEventListener("click",btnPress); //copy paste

    btn.addEventListener("click",function(){  //my code
        userFlash(this);
        btnPress();
    });
}