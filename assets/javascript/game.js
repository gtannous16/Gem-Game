$(document).ready(function () {

    //VARIABLES 
    var gems = {
        redGem:
        {
        
            value: 0
        },
        blueGem:
        {
        
            value: 0
        },
        greenGem:
        {
        
            value: 0
        },
        pinkGem:
        {
        
            value: 0
        },
    };

    var targetNum = 0;
    var counter = 0;

    var wins = 0;
    var losses = 0;

    function start() {
        counter = 0;
        //Generate random # for target 
        targetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log("This is " + targetNum);
        //random number to html id 
        $("#targetnum").html(targetNum);

        gems.redGem.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        gems.blueGem.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        gems.greenGem.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        gems.pinkGem.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;


        $("#yournum").html(counter);

    };

    function adding(gems) {
        counter = counter + gems.value;
        $("#yournum").html(counter);
        check();
        console.log("Your Score is  " + counter);
    }

    function check() {
        if (counter > targetNum) {
            moonriver.play();
            alert("Oh no! You're gonna have to figure out a way to make this month's rent!")
            document.getElementById("image").src = "./assets/images/sorrytryagain.gif"
            console.log("YOU LOST");
            losses++;
            $("#loss").html(losses);
            start();

        }
        else if (counter == targetNum) {
            moonriver.play();
            alert("Great Job! You stuck to your budget!");
            document.getElementById("image").src = "./assets/images/youwon.gif"
            console.log("YOU WIN!");
            wins++;
            $("#wins").html(wins);
            start();
        }
    }

    start()
    $("#red").on("click", function () {
        adding(gems.redGem);
    });

    $("#blue").on("click", function () {
        adding(gems.blueGem);
    });
    $("#pink").on("click", function () {
        adding(gems.greenGem);
    });
    $("#green").on("click", function () {
        adding(gems.pinkGem);
    });
   
});