Webcam.set({
    width: 345,
    height: 299,
    image_format:'png',
    png_quality:90

}); 

camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(
        function (data_uri) {
            document.getElementById("result").innerHTML=' <img src ="'+ data_uri+' id = "gen"/> ';
        }
    ); 
} 

console.log(ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rNq8ccV-I/model.json',modelLoaded);

function modelLoaded() {
    console.log("modelLoaded");
}


function speak() {
    var synth = window.speechSynthesis; 
     speakdata12="first prediction is"+p1;
     speakdata13="and the second predction is"+p2;
     var utter=new SpeechSynthesisUtterance(speakdata12+speakdta13);
     synth.speak(utter);
}

