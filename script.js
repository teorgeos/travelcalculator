function plusHandler() {
    /* if you click the button, */
    var firstNumber = $("#first").val();
    var secondNumber = $("#second").val();
    var thirdNumber = $("#third").val();

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    thirdNumber = parseFloat(thirdNumber);
    var result = firstNumber * 0.42 + secondNumber * 0.42 + thirdNumber * 0.42;
    $("#result").text(result);
}

function divideHandler() {

    var firstNumber = $("#first").val();
    var secondNumber = $("#second").val();
    var thirdNumber = $("#third").val();

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    thirdNumber = parseFloat(thirdNumber);
    var result = firstNumber * 0.42 + secondNumber * 0.42 + thirdNumber * 0.42;
    $("#result").text(result);
    
    var peopleNumber = $("#people").val();
    
    //peopleNumber = parseFloat(peopleNumber);

    var result2 = result / peopleNumber;
    $("#result2").text(result2);
}

$(document).ready(function() {
    $("#plus").click(plusHandler);
    $("#divide").click(divideHandler);
});