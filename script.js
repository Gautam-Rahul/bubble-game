let clutter="";
let randomNum;
let timer=60;

let score=0;

function increaseScrore(){
    score +=10;
    document.querySelector("#scr").textContent= score;
}

function bubbelGen(){ 
    for (let i = 0; i <=70; i++) {
    randomNum = Math.floor(Math.random()*10)
     clutter += `<div class="bubbel">${randomNum}</div>`;
    }
 document.querySelector(".con").innerHTML=clutter;    
}

function randomHit(){
    document.querySelector("#hit").innerHTML=randomNum;
}
function runTimer(){

   var timerInt= setInterval (function(){
    
    if (timer>0) {
        timer--;
       
        document.querySelector("#tim").innerHTML=timer; 
        }

        else{
            clearInterval(timerInt);
            document.querySelector(".con").innerHTML=`<h1> Game Over </h2>`
        }
        
        
    },1000);
}

document.querySelector(".con").addEventListener("click",function(dets){
   var clickedNum = Number(dets.target.textContent);

   if (clickedNum==randomNum) {
    increaseScrore();
    bubbelGen();
    randomHit();
    
   } else {


    
   }
});
 
    

   



bubbelGen();
randomHit();
runTimer();


