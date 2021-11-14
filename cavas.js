var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let height = canvas.height;
let spaceCount = 50;

let button = document.getElementById("submit");
button.addEventListener("click",draw);

function draw(e) 
{
    e.preventDefault();
    ctx.font = "18px arial";
    let inp = document.getElementById("input").value;
    if (inp > 0 && inp <= 500 && !isNaN(parseInt(inp))) 
    {
        ctx.fillStyle = document.getElementById("color").value;
        ctx.fillRect(spaceCount, height - inp, 40, height);
        ctx.fillStyle = "#ffffff";
        ctx.fillText(inp, spaceCount +5, height - 10);
        spaceCount += 50;
    }
    else
    {
        alert("It's wrong Number, Please insert another one ^_^");
        document.getElementById("input").value = "";
    }
}