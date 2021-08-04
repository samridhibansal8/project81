    canvas =  document.getElementById("MyCanvas");
    ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle - "black";
    ctx.lineWidth - 10;
    ctx.rect(370,143,430,200);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    ctx.arc(500,240,45,200,360 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.arc(600,240,45,200,360);
     ctx.stroke();

     ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
    ctx.arc(700,240,45,200,360);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 4;
    ctx.arc(550,275,45,200,360);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 4;
    ctx.arc(650,275,45,200,360);
    ctx.stroke();