
let gameseq=[];
let userseq=[];
let level=0;
let started=false;
lvl=document.querySelector('.level');
document.addEventListener("keypress",function(){
     if(started==false) {
        started=true; 
        levelUp();
     }
})
let btns=["pink","skyblue","orange","blue"];
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
    btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
    },250);
   }
function levelUp(){
    userseq=[];
    level++;
    lvl.innerText=`Level ${level}`;
    let rdm=Math.floor(Math.random()*4);
    let cls=btns[rdm];
    let btn=document.querySelector(`.${cls}`);
    gameseq.push(cls);  
    gameflash(btn);
}
function checkbtn(idx){
   if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
       setTimeout(levelUp,500);
    }
   }
   else {
    lvl.innerHTML=`Game over!! your score was <b> ${level*10} </b> </br> Press any key to restart `
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },200);
    reset();
   }
}
function btnpress(){
    let btn=this;
    userflash(btn);
    let color=btn.getAttribute("id");
    // console.log(color);
    userseq.push(color);
    checkbtn(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(let btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}