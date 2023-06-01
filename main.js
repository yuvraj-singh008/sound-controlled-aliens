function start_classification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7eAYLs1ls/model.json', modelReady); 
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("Result_label").innerHTML =
         'I CAN HEAR-'  + results[0].label;
        document.getElementById("Result_confidence").innerHTML =
         'ACCURACY IS-' + (results[0].confidence * 100).toFixed(2) + '%';
        document.getElementById("Result_label").style.color =
         "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("Result_confidence").style.color =
         "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img = document.getElementById("alien01");
        img1 = document.getElementById("alien02");
        img2 = document.getElementById("alien03");
        img3 = document.getElementById("alien04");

        if(results[0].label == "BELL"){
            img.src ='aliens-01.gif';
            img1.src ='aliens-02.png';
            img2.src ='aliens-03.png';
            img3.src ='aliens-04.png';
        }
        else if(results.label == "Background-Noise"){
            img.src ='aliens-01.png';
            img1.src ='aliens-02.gif';
            img2.src ='aliens-03.png';
            img3.src ='aliens-04.png';
        }
        else if(results.label == "CLAP"){
            img.src ='aliens-01.png';
            img1.src ='aliens-02.png';
            img2.src ='aliens-03.gif';
            img3.src ='aliens-04.png';
        }
        else{
            img.src ='aliens-01.png';
            img1.src ='aliens-02.png';
            img2.src ='aliens-03.png';
            img3.src ='aliens-04.gif';
        }
    }

}