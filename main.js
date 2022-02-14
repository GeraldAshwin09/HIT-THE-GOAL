var canvas=new fabric.Canvas('mycanvas');
ballX=10;
ballY=10;
ball_height=150;
ball_width=150;
holeh=150;
holew=150;
holeX=500;
holeY=700;
bl_l=30;


function ball_img()
{
    fabric.Image.fromURL("fb-removebg-preview.png", function(Img){
        img_object=Img;
        img_object.scaleToWidth(ball_width);
        img_object.scaleToHeight(ball_height);
        img_object.set({
            top:ballX,
            left:ballY
        })
        canvas.add(img_object)
    })
}

function post_img()
{
    fabric.Image.fromURL("po-removebg-preview.png", function(Img){
        img_object1=Img;
        img_object1.scaleToWidth(holeh);
        img_object1.scaleToHeight(holew);
        img_object1.set({
            top:400,
            left:400
        })
        canvas.add(img_object1)
    })
}

window.addEventListener("keydown",mk)
function mk(e)
{
    keyPressed=e.keyCode;
if((ballX==400)&&(ballY==400)){
    canvas.remove(img_object);
    document.getElementById("king").innerHTML="You Have Hit The Goal Post!!!!";
    document.getElementById("mycanvas").style.borderColor="red";
}

    if(keyPressed =="37")
    {
left();
console.log("left")
    }

    
    if(keyPressed =="39")
    {
right();
console.log("right")
    }

    
    if(keyPressed =="40")
    {
down();
console.log("down")
    }

    
    if(keyPressed =="38")
    {
up();
console.log("up")
    }
}

function left()
{
   ballY=ballY-bl_l;
    canvas.remove(img_object);
    ball_img();
}

function right()
{
    ballY=ballY+bl_l;
    canvas.remove(img_object);
    ball_img();
}

function up()
{
    ballX=ballX-bl_l;
    canvas.remove(img_object);
   ball_img();
}

function down()
{
    ballX=ballX+bl_l;
    canvas.remove(img_object);
    ball_img();
}