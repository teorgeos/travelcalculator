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

$(document).ready(function() {
    $("#plus").click(plusHandler);
});