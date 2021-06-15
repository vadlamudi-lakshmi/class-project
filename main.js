var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var value_of_image="mars.jpg";
var value_of_rover_image="rover.png";
var rover_height=100;
var rover_width=100;
var rover_x=10;
var rover_y=10;
function add()
{
background_imgtag=new Image();
background_imgtag.onload=upload_backgroud;
background_imgtag.src=value_of_image;

background_rovertag=new Image();
background_rovertag.onload=upload_rover;
background_rovertag.src=value_of_rover_image;

}
function upload_backgroud()
{
    
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

}
function upload_rover()
    {
      ctx.drawImage(background_rovertag,rover_x,rover_y,rover_width,rover_height);
    }
    window.addEventListener("keydown",key_down);
    function key_down(e)
    {
        var key_press=e.keyCode;
        console.log(key_press);
        if(key_press=="40")
        {
down();
console.log("down");

        }
        if(key_press=="38")
        {
up();
console.log("up");

        }
        if(key_press=="37")
        {
left();
console.log("left");
   

        }
        if(key_press=="39")
        {
right();
console.log("right");

        }
    }
    function down()
    {
if(rover_y<=600)
{
    rover_y=rover_y+10;
    console.log(rover_y);
upload_rover();
upload_backgroud();
}

    }

    function up()
    {
if(rover_y>=0)
{
    rover_y=rover_y-10;
    console.log(rover_y);
upload_rover();
upload_backgroud();
}

    }

    function left()
    {
if(rover_x>=0)
{
    rover_x=rover_x-10;
    console.log(rover_x);
upload_rover();
upload_backgroud();
}

    }

    function right()
    {
if(rover_x<=700)
{
    rover_x=rover_x-10;
    console.log(rover_x);
upload_rover();
upload_backgroud();
}

    }


    

    

    

