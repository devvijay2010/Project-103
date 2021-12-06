Webcam.set
(
    {
      width: 350,
      height: 300,
      image_format: 'png',
      png_quality: 90
    }
);

var camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
    document.getElementById("result").innerHTML = '<img id = "image_captured" src = ' + data_uri + '>';
    }
    );
}

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/W354xZtvr/model.json', modelloaded)

function modelloaded()
{
    console.log("Model Loaded!");
}

function check()
{
    img = document.getElementById("image_captured");
    classifier.classify(img, gotresult);
}

function gotresult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(results)
     document.getElementById("result_object_name").innerHTML = results[0].label;
     document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3) * 100 + "%";
    }
}