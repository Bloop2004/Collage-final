var SpeechRecognition = window.webkitSpeechRecognition;
var Content
var recognition = new SpeechRecognition()
function start(){
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if(Content == "cheese"){
        speak();
    }
}
function speak(){
    var sync = window.speechSynthesis;
    Webcam.attach(Webcamy);
    speak_data = "Taking your selfie in five seconds";
    var UtterThis = new SpeechSynthesisUtterance(speak_data);
    sync.speak(UtterThis);
    setTimeout(function(){
        image_id = "s1";
        Take_snapshot();
        speak_data = "Taking your selfie in five seconds";
        var UtterThis = new SpeechSynthesisUtterance(speak_data);
        sync.speak(UtterThis);
    }, 5000);
    setTimeout(function(){
        image_id = "s2";
        Take_snapshot();
        speak_data = "Taking your selfie in five seconds";
        var UtterThis = new SpeechSynthesisUtterance(speak_data);
        sync.speak(UtterThis);
    }, 10000);
    setTimeout(function(){
        image_id = "s3";
        Take_snapshot();
    }, 15000);
}
Webcamy = document.getElementById("Webcamy");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'png',
    png_quality: 90
})
function Take_snapshot(){
    console.log(image_id);
    Webcam.snap(function(data_uri){
        if(image_id == "s1"){
            document.getElementById("selfie_1").innerHTML = '<img id="self1" src="'+data_uri+'">';
        }
        if(image_id == "s2"){
            document.getElementById("selfie_2").innerHTML = '<img id="self2" src="'+data_uri+'">';
        }
        if(image_id == "s3"){
            document.getElementById("selfie_3").innerHTML = '<img id="self3" src="'+data_uri+'">';
        }
    })
}