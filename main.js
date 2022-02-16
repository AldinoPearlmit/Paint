var me="empty";
var lx
var ly

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d")
color="black";
widthline=2;
canvas.addEventListener("mousedown",mymd);

function mymd(e){
    color=document.getElementById("color").value;
    widthline=document.getElementById("width").value;
    me="mouseDown";
}

canvas.addEventListener("mouseup",myup);

function myup(e){
    me="mouseUp"; 
}
canvas.addEventListener("mouseleave",myl);

function myl(e){
    me="mouseleave";
}

canvas.addEventListener("mousemove",mym);

function mym(e){
    cx=e.clientX-canvas.offsetLeft;
    cy=e.clientY-canvas.offsetTop;
    if(me=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthline;
        ctx.moveTo(lx,ly);
        ctx.lineTo(cx,cy);
        ctx.stroke();
    }
    lx=cx;
    ly=cy;
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

