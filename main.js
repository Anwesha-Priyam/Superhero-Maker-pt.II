var canvas= new fabric.Canvas("Canvas");
block_width=30;
block_height=30;
player_x=500;
player_y=700;
player_object="MCPE Player.jpeg";
block_object="";
function PUpdate()
{
    new Image(player_object);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPress=e.keyCode;
    if(e.shiftkey==true&&keydown=='80')
    {
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;
    }
    if(e.shiftkey==true&&keydown=='77')
    {
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("width").innerHTML=block_width;
        document.getElementById("height").innerHTML=block_height;
    }
    if(keycode=='70')
    {
        new_Image("spiderman_face.png");
        console.log("f");
    }
    if(keycode=='66')
    {
        new_Image("ironman_body.png");
        console.log("b");
    }
    if(keycode=='76')
    {
        new_Image("hulk_legs.png");
        console.log("l");
    }
    if(keycode=='82')
    {
        new_Image("thor_right_hand.png");
        console.log("r");
    }
    if(keycode=='72')
    {
        new_Image("captain_america_left_hand.png");
        console.log("r");
    }
    if(keycode=='38')
    {
        up();
        console.log("up");
    }
    if(keycode=='40')
    {
        down();
        console.log("down");
    }
    if(keycode=='37')
    {
        left();
        console.log("left");
    }
    if(keycode== '39')
    {
        right();
        console.log("right");
    }
}