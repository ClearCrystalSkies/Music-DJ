var peterpansong = "";
var music2 = "";
function preload(){
    peterpansong = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
};
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    console.log("Canvas has loaded.");
    video = createCapture(VIDEO);
    video.hide();
};
function draw(){
    image(video, 0 , 0, 600 ,500);
};