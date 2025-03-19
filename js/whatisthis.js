// What is this?
const video = document.getElementById('camera');
const liveView = document.getElementById('liveView');
const demosSection = document.getElementById('demos');
const enableCameraButton = document.getElementById('cameraButton');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');
const image9 = document.getElementById('image9');
var model = undefined;
var children = [];

function getUserMediaSupported() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
};

if (getUserMediaSupported()) {
  enableCameraButton.addEventListener('click', enableCam);
} else {
  console.warn('getUserMedia() is not supported by your browser');
};

function enableCam(event) {
  if (!model) {
    return;
  }
  enableCameraButton.style.display = 'none';
  event.target.classList.add('removed');  
  const constraints = {
    video: true
  };
  navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
    video.srcObject = stream;
    video.addEventListener('loadeddata', predictWebcam);
  });
};

cocoSsd.load().then(function (loadedModel) {
  model = loadedModel;
  demosSection.classList.remove('invisible');
});

function predictWebcam() {
  model.detect(video).then(function (predictions) {
  for (let i = 0; i < children.length; i++) {
    liveView.removeChild(children[i]);
  }
  children.splice(0);
  for (let n = 0; n < predictions.length; n++) {
    if (predictions[n].score > 0.65) {
      const paragraph = document.createElement('p');
      paragraph.innerText = predictions[n].class  + ' - with ' + Math.round(parseFloat(predictions[n].score) * 100) + '% confidence';
      paragraph.style = 'margin-left: ' + predictions[n].bbox[0] + 'px; margin-top: ' + (predictions[n].bbox[1] - 10) + 'px; width: ' + (predictions[n].bbox[2] - 10) + 'px; top: 0; left: 0;';
      const highlighter = document.createElement('div');
      highlighter.setAttribute('class', 'highlighter');
      highlighter.style = 'left: ' + predictions[n].bbox[0] + 'px; top: ' + predictions[n].bbox[1] + 'px; width: ' + predictions[n].bbox[2] + 'px; height: ' + predictions[n].bbox[3] + 'px;';
      liveView.appendChild(highlighter);
      liveView.appendChild(paragraph);
      children.push(highlighter);
      children.push(paragraph);
      if(predictions[n].class === 'person'){
        image1.src = '../images/whatisthis/objective_checked1.png';
      }
      if(predictions[n].class === 'dog'){
        image2.src = '../images/whatisthis/objective_checked2.png';
      }
      if(predictions[n].class === 'apple'){
        image3.src = '../images/whatisthis/objective_checked3.png';
      }
      if(predictions[n].class === 'cup'){
        image4.src = '../images/whatisthis/objective_checked4.png';
      }
      if(predictions[n].class === 'cell phone'){
        image5.src = '../images/whatisthis/objective_checked5.png';
      }
      if(predictions[n].class === 'chair'){
        image6.src = '../images/whatisthis/objective_checked6.png';
      }
      if(predictions[n].class === 'backpack'){
        image7.src = '../images/whatisthis/objective_checked7.png';
      }
      if(predictions[n].class === 'potted plant'){
        image8.src = '../images/whatisthis/objective_checked8.png';
      }
      if(predictions[n].class === 'clock'){
        image9.src = '../images/whatisthis/objective_checked9.png';
      }
    }
  }
  window.requestAnimationFrame(predictWebcam);
  });
};