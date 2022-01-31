today = new Date();
gradday = new Date("June 30, 2024");
msPerDay = 24 * 60 * 60 * 1000 ;
timeLeft = (gradday.getTime() - today.getTime());

e_daysLeft = timeLeft / msPerDay;
daysLeft = Math.floor(e_daysLeft);

document.write(daysLeft + " days left until the freedom!");


function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 / num2;
}
