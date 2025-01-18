function compute()
{
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    var year = new Date().getFullYear() + parseInt(years);

    var interest = principal * years * rate / 100
    var amount = parseInt(principal) + parseFloat(interest);
    
    var result = document.getElementById("result");

    if (principal <= 0) {
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    } else {
        result.innerHTML = "Se você depositar $" + principal + ",\<br\> com um juros de " + rate + "%\<br\>Você receberá $" + amount + ",\<br\>no ano " + year + "\<br\>";
    }
}

function updateRate(){
    const rateVal = document.getElementById("rate").value;
    const span = document.getElementById("rate_val");
    span.innerText = rateVal;
}
        