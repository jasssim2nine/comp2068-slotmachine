var canvas;
var stage;
//game Objects
var game;
var background;
var spinButton;
var betMaxButton;
var betOneButton;
var resetButton;
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}
function gameLoop() {
    stage.update();
}
function spinButtonOut() {
    spinButton.alpha = 1.0;
}
function spinButtonOver() {
    spinButton.alpha = 0.4;
}
function spinReels() {
    //spin reels code here
    console.log("spin button clicked");
}
function createUI() {
    //instantiate my background
    background = new createjs.Bitmap("assets/images/slot-machine.png");
    game.addChild(background);
    //spinbutton
    spinButton = new createjs.Bitmap("assets/images/spin-button.png");
    spinButton.x = 323;
    spinButton.y = 384;
    game.addChild(spinButton);
    spinButton.addEventListener("click", spinReels);
    spinButton.addEventListener("mouseover", spinButtonOver);
    spinButton.addEventListener("mouseout", spinButtonOut);
    //betMax button
    betMaxButton = new createjs.Bitmap("assets/images/betMaxButton.png");
    betMaxButton.x = 235;
    betMaxButton.y = 391;
    game.addChild(betMaxButton);
    betOneButton = new createjs.Bitmap("assets/images/betOneButton.png");
    betOneButton.x = 180;
    betOneButton.y = 391;
    game.addChild(betOneButton);
    resetButton = new createjs.Bitmap("assets/images/reset-button.png");
    resetButton.x = 55;
    resetButton.y = 388;
    game.addChild(resetButton);
}
function main() {
    //instantiate my game container
    game = new createjs.Container();
    game.x = 23;
    game.y = 4;
    //create slotmachine user interface
    createUI();
    stage.addChild(game);
}
