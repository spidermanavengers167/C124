function setup(){
    video=createCapture(VIDEO);
    video.size(550,500)
    canvas=createCanvas(550,550);
    canvas.position(550,150);
    poseNet=ml5.poseNet(VIDEO,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function draw(){
    background("#e6e6fa")
}
function modelLoaded(){
    console.log("Model Has Been Loaded")
}
function gotPoses(results){
if(results.length>0){
    console.log(results)
}
}

