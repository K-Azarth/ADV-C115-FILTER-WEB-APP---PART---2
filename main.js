Mustache_X = 0;
Mustache_Y = 0;

function preload() {
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized Actively');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        Mustache_X = results[0].pose.mustache.x
        Mustache_Y = results[0].pose.mustache.y
        console.log("Mustache X = " + Mustache_X);
        console.log("Mustache Y = " + Mustache_Y);
    }
}

function draw() {
}

function take_snapshot() {
    save('MyRedNoseFilteredPhoto.png');
}