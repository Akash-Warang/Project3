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
        userSeq=[];
        level++;
        h3.innerText=`Level ${level}`;
        let randIdx=Math.floor(Math.random()*3);
        // console.log(randIdx);
        let randCol=btns[randIdx];
        let randBtn=document.querySelector(`.${randCol}`);
        // console.dir(randBtn.classList[1]);
        btnFlash(randBtn);

        //,,,,,,,,,,,,,,,,,
        gameSeq.push(randCol);
        console.log(gameSeq);
    }


function btnPress(btn){
    console.log("pressed");
    userSeq.push(btn.classList[1]);
    check(userSeq.length-1);
    console.log(userSeq);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){

    // btn.addEventListener("click",btnPress); //copy paste

    btn.addEventListener("click",function(){  //my code
        userFlash(this);
        btnPress(this);
    });
}

function check(idx){
   if(userSeq[idx]===gameSeq[idx]){
    if(gameSeq.length==userSeq.length){
        setTimeout(levelUp,1000);
    }
   }
   else{
    let body=document.querySelector("body");
    body.style.backgroundColor="red";
    setTimeout(()=>{
        body.style.backgroundColor="";
    },200)
    h3.innerText=`Game Over.! Score : ${level}
                        press any key to restart`;
    gameStart=false;
    gameSeq=[];
    level=0;
   }
}