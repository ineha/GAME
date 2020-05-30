var playing=false;
var score;
var action;
var timereamining;
 var correctAnswet;
// if we click on the start/reset
document.getElementById("start").onclick = function () {
    //if we are playing
    if(playing == true)
        {
            location.reload(); //reloading page
            
        }
    else{
        //change mode to playing
        playing=true;
        score=1;
        document.getElementById("scorevalue").innerHTML= score;
       show("time");
        timereamining=60;
        document.getElementById("timeremainingval").innerHTML=timereamining;
        //start countdown
        hide("gameover");
        
        startCountdown();
        
        //generate a question and multiple answer
        generateQnadA();
        
        
    }
}

//clicking on an answer box  
for(i=1;i<5;i++){
document.getElementById("box"+i).onclick = function(){
    
    //check if we are playing
    if(playing==true){
        if(this.innerHTML==correctAnswet){
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            generateQnadA();
        }
        else{
            //wrong answer
             hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
            
        }
    }
}
function startCountdown(){
    
    action = setInterval(function(){
        timereamining-=1;
         document.getElementById("timeremainingval").innerHTML=timereamining;
        if(timereamining==0){
            //game over
            stopCountdown();
           show("gameover");
            document.getElementById("gameover").innerHTML="<p>Game over</p><p>your score is " + score +".</p>";
            hide("timereamining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("start").innerHTML="Start Game";
            
        }
    },1000);
}

}
function stopCountdown()
{
    clearInterval(action);
}

function hide(Id){
    document.getElementById(Id).style.display="none";
}

function show(Id)
{
    document.getElementById(Id).style.display="block";
}

function generateQnadA(){
    var x = 1+Math.round(9*Math.random());
     var y = 1+Math.round(9*Math.random());
    correctAnswet = x*y;
    document.getElementById("question").innerHTML=x + "x" + y;
    var correctPosition = (1+Math.floor(Math.random()*4));
    document.getElementById("box"+correctPosition).innerHTML=correctAnswet; //fill one box with correct ans
    
    //fill other boxes with wrong answers
    
    var answers = [correctAnswet];
    for(var i=1;i<5;i++){
        if(i!=correctPosition){
            var wrongAnswer;
          do{
              wrongAnswer=(1+Math.round(9+Math.random())) * (1+Math.round(9+Math.random()));
          }while(answers.indexOf(wrongAnswer)>-1)
              
             document.getElementById("box"+i).innerHTML= wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}


 //if we are playing
        //reload page
    //if we are not playing
        //set score to 0
        //show countdown box
        //reduce time by 1 sec in loops
        
            //timeleft
                //ye-->continue
                //no---> game over
            //change button to reset
            //generate new question

//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for 1 sec
                //generate new question
                //show try again box for 1 sec
                


