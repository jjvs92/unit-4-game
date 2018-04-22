//creating list of variables
var randomNumber = Math.floor((Math.random() * 119) + 1);
var wins = "";
var losses = "";
var totalScore = 0;
var crystalOne = Math.floor((Math.random() * 12) + 1);
var crystalTwo = Math.floor((Math.random() * 12) + 1);
var crystalThree = Math.floor((Math.random() * 12) + 1);
var crystalFour = Math.floor((Math.random() * 12) + 1);

$(document).ready(function(){
    document.getElementById("randomNumber").innerHTML = randomNumber;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("totalScore").innerHTML = totalScore;
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);

    $(".crystalHouse").on("click", "#crystalOne", function(){
        
        totalScore = totalScore + crystalOne;
        document.getElementById("totalScore").innerHTML = totalScore;

        if(totalScore === randomNumber){
            alert("You did it!");
            wins ++;
            randomNumber = Math.floor((Math.random() * 119) + 1);
            crystalOne = Math.floor((Math.random() * 12) + 1);
            crystalTwo = Math.floor((Math.random() * 12) + 1);
            crystalThree = Math.floor((Math.random() * 12) + 1);
            crystalFour = Math.floor((Math.random() * 12) + 1);            
            totalScore = 0;
            document.getElementById("totalScore").innerHTML = totalScore;            
            document.getElementById("randomNumber").innerHTML = randomNumber;
            document.getElementById("wins").innerHTML = "Wins: " + wins;

        }        

        if(totalScore > randomNumber){
            alert("You lose!");
            losses ++;
            randomNumber = Math.floor((Math.random() * 119) + 1);
            crystalOne = Math.floor((Math.random() * 12) + 1);
            crystalTwo = Math.floor((Math.random() * 12) + 1);
            crystalThree = Math.floor((Math.random() * 12) + 1);
            crystalFour = Math.floor((Math.random() * 12) + 1);            
            totalScore = 0;      
            document.getElementById("totalScore").innerHTML = totalScore;            
            document.getElementById("randomNumber").innerHTML = randomNumber;
            document.getElementById("losses").innerHTML = "Losses: " + losses;                  
        }
    })

    $(".crystalHouse").on("click", "#crystalTwo", function(){
        
        totalScore = totalScore + crystalTwo;
        document.getElementById("totalScore").innerHTML = totalScore;

        if(totalScore === randomNumber){
            wins ++;
            randomNumber = Math.floor((Math.random() * 119) + 1);  
            totalScore = 0;
            crystalOne = Math.floor((Math.random() * 12) + 1);
            crystalTwo = Math.floor((Math.random() * 12) + 1);
            crystalThree = Math.floor((Math.random() * 12) + 1);
            crystalFour = Math.floor((Math.random() * 12) + 1);               
            document.getElementById("totalScore").innerHTML = totalScore;            
            document.getElementById("randomNumber").innerHTML = randomNumber;
            document.getElementById("wins").innerHTML = "Wins: " + wins;                     
            alert("You did it!");}   

        if(totalScore > randomNumber){
            alert("You lose!");
            losses ++;
            randomNumber = Math.floor((Math.random() * 119) + 1);
            crystalOne = Math.floor((Math.random() * 12) + 1);
            crystalTwo = Math.floor((Math.random() * 12) + 1);
            crystalThree = Math.floor((Math.random() * 12) + 1);
            crystalFour = Math.floor((Math.random() * 12) + 1);            
            totalScore = 0;      
            document.getElementById("totalScore").innerHTML = totalScore;            
            document.getElementById("randomNumber").innerHTML = randomNumber;
            document.getElementById("losses").innerHTML = "Losses: " + losses;                  
        }            
    })    


    $(".crystalHouse").on("click", "#crystalThree", function(){
        
        totalScore = totalScore + crystalThree;
        document.getElementById("totalScore").innerHTML = totalScore;

        if(totalScore === randomNumber){
            wins ++;
            randomNumber = Math.floor((Math.random() * 119) + 1);  
            totalScore = 0;   
            crystalOne = Math.floor((Math.random() * 12) + 1);
            crystalTwo = Math.floor((Math.random() * 12) + 1);
            crystalThree = Math.floor((Math.random() * 12) + 1);
            crystalFour = Math.floor((Math.random() * 12) + 1);               
            document.getElementById("randomNumber").innerHTML = randomNumber;
            document.getElementById("wins").innerHTML = "Wins: " + wins;       
            document.getElementById("totalScore").innerHTML = totalScore;            
            alert("You did it!");}   

        if(totalScore > randomNumber){
            alert("You lose!");
            losses ++;
            randomNumber = Math.floor((Math.random() * 119) + 1);
            crystalOne = Math.floor((Math.random() * 12) + 1);
            crystalTwo = Math.floor((Math.random() * 12) + 1);
            crystalThree = Math.floor((Math.random() * 12) + 1);
            crystalFour = Math.floor((Math.random() * 12) + 1);            
            totalScore = 0;      
            document.getElementById("totalScore").innerHTML = totalScore;            
            document.getElementById("randomNumber").innerHTML = randomNumber;
            document.getElementById("losses").innerHTML = "Losses: " + losses;                  
        }                  

    })
    
    $(".crystalHouse").on("click", "#crystalFour", function(){
        
        totalScore = totalScore + crystalFour;
        document.getElementById("totalScore").innerHTML = totalScore;

        if(totalScore === randomNumber){
            wins ++;
            randomNumber = Math.floor((Math.random() * 119) + 1);  
            totalScore = 0;
            crystalOne = Math.floor((Math.random() * 12) + 1);
            crystalTwo = Math.floor((Math.random() * 12) + 1);
            crystalThree = Math.floor((Math.random() * 12) + 1);
            crystalFour = Math.floor((Math.random() * 12) + 1);               
            document.getElementById("totalScore").innerHTML = totalScore;
            document.getElementById("randomNumber").innerHTML = randomNumber;
            document.getElementById("wins").innerHTML = "Wins: " + wins;                      
            alert("You did it!");}

        if(totalScore > randomNumber){
            alert("You lose!");
            losses ++;
            randomNumber = Math.floor((Math.random() * 119) + 1);
            crystalOne = Math.floor((Math.random() * 12) + 1);
            crystalTwo = Math.floor((Math.random() * 12) + 1);
            crystalThree = Math.floor((Math.random() * 12) + 1);
            crystalFour = Math.floor((Math.random() * 12) + 1);            
            totalScore = 0;      
            document.getElementById("totalScore").innerHTML = totalScore;            
            document.getElementById("randomNumber").innerHTML = randomNumber;
            document.getElementById("losses").innerHTML = "Losses: " + losses;                  
        }                  

    })    

    

    


})