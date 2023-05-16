var peterpansong = "";
var hptheme = "";
var leftWristX =0;
var rightWristX =0;
var leftWristY =0;
var righttWristY =0;
var ppStatus = "";
var hpStatus = "";
var leftWristScore = 0;
var rightWristScore = 0;
function preload(){
    peterpansong = loadSound("music.mp3");
    hptheme = loadSound("music2.mp3");
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
    fill("red");
    stroke("red");
    ppStatus = peterpansong.isPlaying();
    hpStatus = hptheme.isPlaying();
    if (leftWristScore > 0.2) {
        circle(leftWristX, leftWristY, 20);
        if(ppStatus = false){
            peterpansong.play();
            document.getElementById("song_name").innerHTML ="Now playing: Peter pan song";
            hptheme.stop();
        }
    }
    if (rightWristScore > 0.2) {
        circle(rightWristX, rightWristY, 20);
        if(hpStatus = false){
            hptheme.play();
            document.getElementById("song_name").innerHTML ="Now playing: Harry Potter Theme song";
            peterpansong.stop();
        }
    }
};
function modelLoaded(){
    console.log("PoseNet has been loaded!!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        righttWristY = results[0].pose.leftWrist.y;
        leftWristScore = results[0].pose.keypoints[9].confidence;
        rightWristScore = results[0].pose.keypoints[10].confidence;
        console.log("LeftWristX:" + leftWristX + ", leftWristY:" + leftWristY + ", leftWristScore:"+" ;rightWristX:" + rightWristX + ", rightWristY:" + righttWristY + " rightWristScore:"+rightWristScore);
    }
}