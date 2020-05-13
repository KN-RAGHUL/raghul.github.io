var value1 = document.getElementById("left_value").value;
var value2 = document.getElementById("right_value").value;
var backimage = document.getElementsByTagName("html")[0];
var text = document.getElementById("value_show");
var button = document.getElementById("changecolor");
// var count;
// count = 0;

button.addEventListener("click", myfuntion);
function myfuntion()
{
    // count++;
    // text.textContent = count;
    backimage.style.backgroundImage = 'linear-gradient('+value1+','+value2+')';
    text.textContent = "first value"+value1+" second value"+value2;
}