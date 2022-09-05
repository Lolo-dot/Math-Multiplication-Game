//start reset button
//if we are not playing reload page
//if playing show count down box, reduce time by 1 sec every sec
//check if there is time left 
//set score to 0
//yes - continue
//no - gameover
//change button to reset 
//generate new question and multiple answers
var notplaying = true;
var action;
var timeleft;
var score;
var x, y, correctanswer;
document.getElementById("startreset").onclick = function(){
    if(notplaying == true){
        notplaying = false;
        timeleft = 60;
        score = 0;
        document.getElementById("startreset").innerHTML = "Reset Game";
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("timeleft").innerHTML = timeleft;
        document.getElementById("timeremaining").style.display = "block";
        document.getElementById("gameover").style.display = "none"
        timer();
        questions();
        
        

    }
    else{      
        document.location.reload();
    }
}

for(i=0; i<4; i++){
    document.getElementById("box" + (i+1)).onclick = function(){
        if(notplaying == false){
            if(this.innerHTML == correctanswer){
                document.getElementById("correct").style.display = "block";
                score += 1;
                document.getElementById("scorevalue").innerHTML = score;
                setTimeout(function(){
                    document.getElementById("correct").style.display = "none"
                }, 1000);
                questions();
            }
            else{
                document.getElementById("wrong").style.display = "block"
                setTimeout(function(){
                    document.getElementById("wrong").style.display = "none"
                }, 1000);
            }
            }
        }
}


function timer(){ 
    action = setInterval(function(){
        timeleft--;
        document.getElementById("timeleft").innerHTML = timeleft;
        if(timeleft == 0){
            clearInterval(action);
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p> <p>Your score is " + score + ".</p>";
            document.getElementById("gameover").style.display = "block"
            document.getElementById("correct").style.display = "none"
            document.getElementById("wrong").style.display = "none"
            document.getElementById("startreset").innerHTML = "Start Game";
            notplaying = true;
        }

    }, 1000);
    }
    
function questions(){
    x = Math.floor(Math.random()*9+1);
    y = Math.floor(Math.random()*9+1);
    var randombox = Math.floor(Math.random()*3+1);
    var wronganswer = Math.floor(Math.random()*99+1);
    correctanswer = x * y;

    document.getElementById("question").innerHTML = x + "x" + y;
    document.getElementById("box" + randombox).innerHTML = correctanswer;
    for(i=0; i<4; i++){
        
        if(randombox != i+1){
            do{
                wronganswer = Math.floor(Math.random()*99+1);
            }
            while(wronganswer == correctanswer)
            document.getElementById("box" + (i+1)).innerHTML = wronganswer;  
        }
    }

}


//if we click on an answer box check if we are playing
//if yes and correct increase score by 1, show correct box for 1 sec
//new question and answer
//if no show try again for 1 sec