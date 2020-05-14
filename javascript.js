var value1 = document.getElementById("left_value");
var value2 = document.getElementById("right_value");
var backimage = document.getElementsByTagName("html")[0];
var text = document.getElementById("value_show");

value1.addEventListener("input", myfuntion);
value2.addEventListener("input", myfuntion);
function myfuntion()
{    
    backimage.style.backgroundImage = 'linear-gradient( to right,'+value1.value+','+value2.value+')';
    text.textContent = "first value"+value1.value+" second value"+value2.value;
}