var peterpansong = "";
var music2 = "";
var leftWristX =0;
var rightWristX =0;
var leftWristY =0;
var righttWristY =0;
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
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
};
function draw(){
    image(video, 0 , 0, 600 ,500);
};
function modelLoaded(){
    console.log("Model has been loaded!!");
}
function gotPoses(results){
    if(results > 0){
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        righttWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX:" + leftWristX + ", leftWristY:" + leftWristY + ", rightWristX:" + rightWristX + ", rightWristY:" + righttWristY);
    }
}