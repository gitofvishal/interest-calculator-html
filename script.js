function compute() //this function will execute by clicking 'Compute Interest' button 
{
    var principal = document.getElementById("principal").value;

    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit <mark>" + principal + "</mark>."  + ", <br> at an interest rate of  <mark>" + rate + " </mark>%<br> You will receive an amount of  <mark>" + interest + " </mark> <br> in the year  <mark>" + yearNow + " </mark> <br> <br>";
}

// Update the current slider value (each time you drag the slider handle)
var slider = document.getElementById("rate");
var output = document.getElementById("rate_val");
output.innerHTML = slider.value;
slider.oninput = function() 
{
output.innerHTML = this.value;
}