function setup()
{
video =  createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,500);
canvas.position(600,220);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{

    background('#cc4e5c');
}

function modelLoaded ()
{
console.log('poseNet Is Initialize!');
}


function gotPoses ()
{
if(results.length > 0)
{
    console.log(results);
}
}