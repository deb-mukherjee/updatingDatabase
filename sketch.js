var ball;
var database;
var pos;

function setup() {
    database = firebase.database()
    createCanvas(500, 500);
    ball = createSprite(250, 250, 20, 20);
    ball.shapeColor = "red";

    //read ball position from database
    database.ref("ball/position").on("value", readPosition, showError)
}

function draw() {
    background("white");
    if (keyDown(LEFT_ARROW)) {
        writePosition(-3, 0);
    }
    else if (keyDown(RIGHT_ARROW)) {
        writePosition(3, 0);
    }
    else if (keyDown(UP_ARROW)) {
        writePosition(0, -3);
    }
    else if (keyDown(DOWN_ARROW)) {
        writePosition(0, +3);
    }
    drawSprites();
}

function writePosition(x, y) {

    database.ref("ball/position").set({
        x: pos.x + x,
        y: pos.y + y
    })
}

//create function called readPosition
function readPosition(data) {
    pos = data.val();
    ball.x = pos.x;
    ball.y = pos.y;

}
//create function called showError
function showError() {
    console.log("Show error message");


}