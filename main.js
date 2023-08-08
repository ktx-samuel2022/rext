function setup(){
    canvas = createCanvas(550,350);
    canvas.position(windowWidth/2, windowHeight/2.5)
    video = createCapture(VIDEO);
    video.size(550,350);
    video.position(0, windowHeight/2.5)
    var pose = ml5.poseNet(video,modelRealy);
    pose.on("pose",gotPose)
}
function modelRealy(){
    console.log("O moddelo está pronto! :D");
    
}
var plX=''
var size = 50;
var prX = ''
 function gotPose(p){
    if(p.length>0){
         console.log(p)
        plX = p[0].pose.leftWrist.x;
        prX = p[0].pose.rightWrist.x;
        size = floor(plX-prX)
    }
 }

function draw(){
    background("lightgrey")
    var pe = document.getElementById("pe").value;
    textSize(size)
    text(pe,60,60)
    
}
function colocar(){
    background("lightgrey")
    document.getElementById("pe").value='';
}


