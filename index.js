const coinArray=["Heads","Tails"];
let score=[0,0];
const message=document.querySelector(".message");
const buttons=document.querySelectorAll("button");
console.log(buttons);
for(let i=0;i<buttons.length;i++)
    {
    console.log(buttons[i]);

buttons[i].addEventListener("click",tossCoin);
    }
function tossCoin(e){
    console.log(e);
}
function tossCoin(e)
{
  let playerGuesse=e.target.innerText;
  let computerToss=Math.floor(Math.random()*2);
  let computerGeuss=coinArray[computerToss];
  message.innerHTML="computer selected" +computerGeuss;
  let output;
  if(playerGuesse===computerGeuss)
  {
    output=" player win!";
    score[0]++;
  }
  else
  {
    output=" computer win!";
    score[1]++;
  }
  message.innerHTML+=output+"<br/>player:"+score[0]
  +"computer"+score[1];
}
