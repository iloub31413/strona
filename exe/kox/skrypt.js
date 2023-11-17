let brickRowCount = 4;
let brickColumnCount = 7;
let brickWidth = 72;
let brickHeight = 12;
let brickPadding = 32;
let brickOffsetTop = 0;

let bricks = [];
for (c = 0; c<bcc; c++){
    bricks[c]=[];
    for(r=0;r<brc; r++){
        bricks[c][r]={x:0, y:0, status: 1};
        
    }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

function keyDownHandler(e){
    if(e.keyCode === 39){
        rightPressed=true;
    }
    else if(e.keyCode===37){
        leftPressed=true;
    }
}
function keyUpHandler(e){
    if(e.keyCode === 39){
        rightPressed=false;
    }
    else if (e.keyCode===37){
        leftPressed=false;
    }
}