$(document).ready(function() {

    //Variables
    var gems = {
        redGem: {

            value: 0
        },
        blueGem: {

            value: 0
        },
        greenGem: {

            value: 0
        },
        pinkGem: {

            value: 0
        },
    };

    var targetNum = 0;
    var counter = 0;

    var wins = 0;
    var losses = 0;

    //function, condition, loop
    function start() {
        counter = 0;
        //Generate random # for player
        targetNum = Math.floor(Math.random() * (1200 - 190 + 1)) + 190;
        console.log("This is " + targetNum);
        //adding the number to html
        $("#targetnum").html(targetNum);

        gems.redGem.value = Math.floor(Math.random() * (120 - 10 + 1)) + 10;
        gems.blueGem.value = Math.floor(Math.random() * (120 - 10 + 1)) + 10;
        gems.greenGem.value = Math.floor(Math.random() * (120 - 10 + 1)) + 10;
        gems.pinkGem.value = Math.floor(Math.random() * (120 - 10 + 1)) + 10;

        $("#yournum").html(counter);

    };

    function adding(gems) {
        counter = counter + gems.value;
        $("#yournum").html(counter);
        check();
        console.log("Your Score is  " + counter);
    }
    //if player meets budget or overspends point gets added to win/loose 
    //music plays regardless of win or loose
    //the win/loose gif shows up
    //alert pops up showing if you stuck to budget or spent too much
    function check() {
        if (counter > targetNum) {
            moonriver.play();
            alert("Oh no! You're gonna have to figure out a way to make this month's rent!")
            document.getElementById("image").src = "./assets/images/sorrytryagain.gif"
            console.log("YOU LOST");
            losses++;
            $("#loss").html(losses);
            start();

        } else if (counter == targetNum) {
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
    $("#red").on("click", function() {
        adding(gems.redGem);
    });

    $("#blue").on("click", function() {
        adding(gems.blueGem);
    });
    $("#pink").on("click", function() {
        adding(gems.greenGem);
    });
    $("#green").on("click", function() {
        adding(gems.pinkGem);
    });

});