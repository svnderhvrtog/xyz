// Soundbank
const demo = new Audio('../audio/synth/demo/demo.mp3');
const loopSound1 = new Audio('../audio/synth/drumloops/drumloop1.mp3');
const loopSound2 = new Audio('../audio/synth/drumloops/drumloop2.mp3');
const loopSound3 = new Audio('../audio/synth/drumloops/drumloop3.mp3');
const loopSound4 = new Audio('../audio/synth/drumloops/drumloop4.mp3');
const loopSound5 = new Audio('../audio/synth/drumloops/drumloop5.mp3');
const loopSound6 = new Audio('../audio/synth/drumloops/drumloop6.mp3');
const loopSound7 = new Audio('../audio/synth/drumloops/drumloop7.mp3');
const loopSound8 = new Audio('../audio/synth/drumloops/drumloop8.mp3');

const soundA = new Audio('../audio/synth/sounds/hi.mp3');
const soundS = new Audio('../audio/synth/sounds/gokk.mp3');
const soundD = new Audio('../audio/synth/sounds/hueh.mp3');
const soundF = new Audio('../audio/synth/sounds/kwk.mp3');
const soundG = new Audio('../audio/synth/sounds/oeh.mp3');
const soundH = new Audio('../audio/synth/sounds/mah.mp3');
const soundJ = new Audio('../audio/synth/sounds/thae.mp3');
const soundK = new Audio('../audio/synth/sounds/yah.mp3');
const soundL = new Audio('../audio/synth/sounds/pa.mp3');
const soundColon = new Audio('../audio/synth/sounds/toh.mp3');
const quote = new Audio('../audio/synth/sounds/pueh.mp3');
const backslash = new Audio('../audio/synth/sounds/you.mp3');

const soundQ = new Audio('../audio/synth/vocals/vocal-screwed.mp3');
const soundW = new Audio('../audio/synth/vocals/vocal-400.mp3');
const soundE = new Audio('../audio/synth/vocals/vocal-300.mp3');
const soundR = new Audio('../audio/synth/vocals/vocal-200.mp3');
const soundT = new Audio('../audio/synth/vocals/vocal-100.mp3');
const soundY = new Audio('../audio/synth/vocals/vocal0.mp3');
const soundU = new Audio('../audio/synth/vocals/vocal+100.mp3');
const soundI = new Audio('../audio/synth/vocals/vocal+200.mp3');
const soundO = new Audio('../audio/synth/vocals/vocal+300.mp3');
const soundP = new Audio('../audio/synth/vocals/vocal+400.mp3');
const soundBracketLeft = new Audio('../audio/synth/vocals/vocal+screwed.mp3');
const soundBracketRight = new Audio('../audio/synth/vocals/vocalDelayed.mp3');

const soundZ = new Audio('../audio/synth/keyboard/note1.mp3');
const soundX = new Audio('../audio/synth/keyboard/note2.mp3');
const soundC = new Audio('../audio/synth/keyboard/note3.mp3');
const soundV = new Audio('../audio/synth/keyboard/note4.mp3');
const soundB = new Audio('../audio/synth/keyboard/note5.mp3');
const soundN = new Audio('../audio/synth/keyboard/note6.mp3');
const soundM = new Audio('../audio/synth/keyboard/note7.mp3');
const soundComma = new Audio('../audio/synth/keyboard/note8.mp3');
const soundPeriod = new Audio('../audio/synth/keyboard/note9.mp3');
const soundSlash = new Audio('../audio/synth/keyboard/note10.mp3');

// Play and Stop functions
function playLoop(audio) {
    if (audio) {
        audio.loop = true;
        audio.play();
    }
}

function stopAudio(audio) {
    if(audio){
        audio.pause();
        audio.currentTime = 0;
        audio.loop = false;
    }
}

// Demo and Drumloop status + imageContainer
const demoState = document.querySelector('.demoOff')
const drumloopState = document.querySelectorAll('.drumsOff')
for(let i = 0; i < drumloopState.length; i++){
    drumloopState[i]
}

const imageContainer = document.getElementById('image-container')

// Demo and Drumloop functions
const playDemo = document.getElementById('demo').addEventListener('click', () => {
    demo.play()
    stopAudio(loopSound1)
    stopAudio(loopSound2)
    stopAudio(loopSound3)
    stopAudio(loopSound4)
    stopAudio(loopSound5)
    stopAudio(loopSound6)
    stopAudio(loopSound7)
    stopAudio(loopSound8)
    drumloopState[0].src = '../images/synth/drumcovers/drumloop1-default.jpg'
    drumloopState[1].src = '../images/synth/drumcovers/drumloop2-default.jpg'
    drumloopState[2].src = '../images/synth/drumcovers/drumloop3-default.jpg'
    drumloopState[3].src = '../images/synth/drumcovers/drumloop4-default.jpg'
    drumloopState[4].src = '../images/synth/drumcovers/drumloop5-default.jpg'
    drumloopState[5].src = '../images/synth/drumcovers/drumloop6-default.jpg'
    drumloopState[6].src = '../images/synth/drumcovers/drumloop7-default.jpg'        
    drumloopState[7].src = '../images/synth/drumcovers/drumloop8-default.jpg'
    if(demoState.classList.contains('demoOff')) {
        demoState.classList.replace('demoOff', 'demoOn')
        demoState.src = '../images/synth/drumcovers/demo-active.jpg';
        imageContainer.style.backgroundImage =  'url(../images/synth/background/dance.webp)';
        setTimeout(() => {
            demoState.classList.replace('demoOn', 'demoOff')
            demoState.src = '../images/synth/drumcovers/demo-default.jpg';
            imageContainer.style.backgroundImage =  '';
        }, 18000)
    } else if(demoState.classList.contains('demoOn')) {
        demoState.classList.replace('demoOn', 'demoOff');
        demoState.src = '../images/synth/drumcovers/demo-default.jpg';
        imageContainer.style.backgroundImage =  'url(../images/synth/background/default.webp)';
        stopAudio(demo);
    }
});
        
const drumloop1 = document.getElementById('drumloop1').addEventListener('click', () => {
    playLoop(loopSound1)
    stopAudio(loopSound2)
    stopAudio(loopSound3)
    stopAudio(loopSound4)
    stopAudio(loopSound5)
    stopAudio(loopSound6)
    stopAudio(loopSound7)
    stopAudio(loopSound8)
    stopAudio(demo)
    drumloopState[1].src = '../images/synth/drumcovers/drumloop2-default.jpg'
    drumloopState[2].src = '../images/synth/drumcovers/drumloop3-default.jpg'
    drumloopState[3].src = '../images/synth/drumcovers/drumloop4-default.jpg'
    drumloopState[4].src = '../images/synth/drumcovers/drumloop5-default.jpg'
    drumloopState[5].src = '../images/synth/drumcovers/drumloop6-default.jpg'
    drumloopState[6].src = '../images/synth/drumcovers/drumloop7-default.jpg'        
    drumloopState[7].src = '../images/synth/drumcovers/drumloop8-default.jpg'
    demoState.src = '../images/synth/drumcovers/demo-default.jpg';
    if(drumloopState[0].classList.contains('drumsOff')) {
        drumloopState[0].classList.replace('drumsOff', 'drumsOn');
        drumloopState[0].src = '../images/synth/drumcovers/drumloop1-active.jpg'
        imageContainer.style.backgroundImage =  'url(../images/synth/background/drumloop1.webp)';
        drumloopState.forEach((drumloop, index) => {
            if (index !== 0) drumloop.classList.replace('drumsOn', 'drumsOff');  
        });
        } else if(drumloopState[0].classList.contains('drumsOn')) {
            drumloopState[0].classList.replace('drumsOn', 'drumsOff');
            drumloopState[0].src = '../images/synth/drumcovers/drumloop1-default.jpg'
            imageContainer.style.backgroundImage =  'url(../images/synth/background/default.webp)';
            stopAudio(loopSound1);
    }
});

const drumloop2 = document.getElementById('drumloop2').addEventListener('click', () => {
    playLoop(loopSound2)
    stopAudio(loopSound1)
    stopAudio(loopSound3)
    stopAudio(loopSound4)
    stopAudio(loopSound5)
    stopAudio(loopSound6)
    stopAudio(loopSound7)
    stopAudio(loopSound8)
    stopAudio(demo)
    drumloopState[0].src = '../images/synth/drumcovers/drumloop1-default.jpg'
    drumloopState[2].src = '../images/synth/drumcovers/drumloop3-default.jpg'
    drumloopState[3].src = '../images/synth/drumcovers/drumloop4-default.jpg'
    drumloopState[4].src = '../images/synth/drumcovers/drumloop5-default.jpg'
    drumloopState[5].src = '../images/synth/drumcovers/drumloop6-default.jpg'
    drumloopState[6].src = '../images/synth/drumcovers/drumloop7-default.jpg'        
    drumloopState[7].src = '../images/synth/drumcovers/drumloop8-default.jpg'
    demoState.src = '../images/synth/drumcovers/demo-default.jpg';
    if(drumloopState[1].classList.contains('drumsOff')) {
        drumloopState[1].classList.replace('drumsOff', 'drumsOn');
        drumloopState[1].src = '../images/synth/drumcovers/drumloop2-active.jpg'
        imageContainer.style.backgroundImage =  'url(../images/synth/background/drumloop2.webp)';
        imageContainer.style.backgroundImage =  'url(../images/synth/background/drumloop2.webp)';
        drumloopState.forEach((drumloop, index) => {
            if (index !== 1) drumloop.classList.replace('drumsOn', 'drumsOff');
        });
        } else if(drumloopState[1].classList.contains('drumsOn')) {
            drumloopState[1].classList.replace('drumsOn', 'drumsOff');
            drumloopState[1].src = '../images/synth/drumcovers/drumloop2-default.jpg'
            imageContainer.style.backgroundImage =  'url(../images/synth/background/default.webp)';
            stopAudio(loopSound2);
    }
});

const drumloop3 = document.getElementById('drumloop3').addEventListener('click', () => {
    playLoop(loopSound3)
    stopAudio(loopSound1)
    stopAudio(loopSound2)
    stopAudio(loopSound4)
    stopAudio(loopSound5)
    stopAudio(loopSound6)
    stopAudio(loopSound7)
    stopAudio(loopSound8)
    stopAudio(demo)
    drumloopState[0].src = '../images/synth/drumcovers/drumloop1-default.jpg'
    drumloopState[1].src = '../images/synth/drumcovers/drumloop2-default.jpg'
    drumloopState[3].src = '../images/synth/drumcovers/drumloop4-default.jpg'
    drumloopState[4].src = '../images/synth/drumcovers/drumloop5-default.jpg'
    drumloopState[5].src = '../images/synth/drumcovers/drumloop6-default.jpg'
    drumloopState[6].src = '../images/synth/drumcovers/drumloop7-default.jpg'        
    drumloopState[7].src = '../images/synth/drumcovers/drumloop8-default.jpg'
    demoState.src = '../images/synth/drumcovers/demo-default.jpg';
    if(drumloopState[2].classList.contains('drumsOff')) {
        drumloopState[2].classList.replace('drumsOff', 'drumsOn');
        drumloopState[2].src = '../images/synth/drumcovers/drumloop3-active.jpg'
        imageContainer.style.backgroundImage =  'url(../images/synth/background/drumloop3.webp)';
        drumloopState.forEach((drumloop, index) => {
            if (index !== 2) drumloop.classList.replace('drumsOn', 'drumsOff');
        });
        } else if(drumloopState[2].classList.contains('drumsOn')) {
            drumloopState[2].classList.replace('drumsOn', 'drumsOff');
            drumloopState[2].src = '../images/synth/drumcovers/drumloop3-default.jpg'
            imageContainer.style.backgroundImage =  'url(../images/synth/background/default.webp)';
            stopAudio(loopSound3);
    }
});

const drumloop4 = document.getElementById('drumloop4').addEventListener('click', () => {
    playLoop(loopSound4)
    stopAudio(loopSound1)
    stopAudio(loopSound2)
    stopAudio(loopSound3)
    stopAudio(loopSound5)
    stopAudio(loopSound6)
    stopAudio(loopSound7)
    stopAudio(loopSound8)
    stopAudio(demo)
    drumloopState[0].src = '../images/synth/drumcovers/drumloop1-default.jpg'
    drumloopState[1].src = '../images/synth/drumcovers/drumloop2-default.jpg'
    drumloopState[2].src = '../images/synth/drumcovers/drumloop3-default.jpg'
    drumloopState[4].src = '../images/synth/drumcovers/drumloop5-default.jpg'
    drumloopState[5].src = '../images/synth/drumcovers/drumloop6-default.jpg'
    drumloopState[6].src = '../images/synth/drumcovers/drumloop7-default.jpg'        
    drumloopState[7].src = '../images/synth/drumcovers/drumloop8-default.jpg'
    demoState.src = '../images/synth/drumcovers/demo-default.jpg';
    if(drumloopState[3].classList.contains('drumsOff')) {
        drumloopState[3].classList.replace('drumsOff', 'drumsOn');
        drumloopState[3].src = '../images/synth/drumcovers/drumloop4-active.jpg'
        imageContainer.style.backgroundImage =  'url(../images/synth/background/drumloop4.webp)';
        drumloopState.forEach((drumloop, index) => {
            if (index !== 3) drumloop.classList.replace('drumsOn', 'drumsOff');
        });
        } else if(drumloopState[3].classList.contains('drumsOn')) {
            drumloopState[3].classList.replace('drumsOn', 'drumsOff');
            drumloopState[3].src = '../images/synth/drumcovers/drumloop4-default.jpg'
            imageContainer.style.backgroundImage =  'url(../images/synth/background/default.webp)';
            stopAudio(loopSound4);
    }
});

const drumloop5 = document.getElementById('drumloop5').addEventListener('click', () => {
    playLoop(loopSound5)
    stopAudio(loopSound1)
    stopAudio(loopSound2)
    stopAudio(loopSound3)
    stopAudio(loopSound4)
    stopAudio(loopSound6)
    stopAudio(loopSound7)
    stopAudio(loopSound8)
    stopAudio(demo)
    drumloopState[0].src = '../images/synth/drumcovers/drumloop1-default.jpg'
    drumloopState[1].src = '../images/synth/drumcovers/drumloop2-default.jpg'
    drumloopState[2].src = '../images/synth/drumcovers/drumloop3-default.jpg'
    drumloopState[3].src = '../images/synth/drumcovers/drumloop4-default.jpg'
    drumloopState[5].src = '../images/synth/drumcovers/drumloop6-default.jpg'
    drumloopState[6].src = '../images/synth/drumcovers/drumloop7-default.jpg'        
    drumloopState[7].src = '../images/synth/drumcovers/drumloop8-default.jpg'
    demoState.src = '../images/synth/drumcovers/demo-default.jpg';
    if(drumloopState[4].classList.contains('drumsOff')) {
        drumloopState[4].classList.replace('drumsOff', 'drumsOn');
        drumloopState[4].src = '../images/synth/drumcovers/drumloop5-active.jpg'
        imageContainer.style.backgroundImage =  'url(../images/synth/background/drumloop5.webp)';
        drumloopState.forEach((drumloop, index) => {
            if (index !== 4) drumloop.classList.replace('drumsOn', 'drumsOff');
        });
        } else if(drumloopState[4].classList.contains('drumsOn')) {
            drumloopState[4].classList.replace('drumsOn', 'drumsOff');
            drumloopState[4].src = '../images/synth/drumcovers/drumloop5-default.jpg'
            imageContainer.style.backgroundImage =  'url(../images/synth/background/default.webp)';
            stopAudio(loopSound5);
    }
});

const drumloop6 = document.getElementById('drumloop6').addEventListener('click', () => {
    playLoop(loopSound6)
    stopAudio(loopSound1)
    stopAudio(loopSound2)
    stopAudio(loopSound3)
    stopAudio(loopSound4)
    stopAudio(loopSound5)
    stopAudio(loopSound7)
    stopAudio(loopSound8)
    stopAudio(demo)
    drumloopState[0].src = '../images/synth/drumcovers/drumloop1-default.jpg'
    drumloopState[1].src = '../images/synth/drumcovers/drumloop2-default.jpg'
    drumloopState[2].src = '../images/synth/drumcovers/drumloop3-default.jpg'
    drumloopState[3].src = '../images/synth/drumcovers/drumloop4-default.jpg'
    drumloopState[4].src = '../images/synth/drumcovers/drumloop5-default.jpg'
    drumloopState[6].src = '../images/synth/drumcovers/drumloop7-default.jpg'        
    drumloopState[7].src = '../images/synth/drumcovers/drumloop8-default.jpg'
    demoState.src = '../images/synth/drumcovers/demo-default.jpg';
    if(drumloopState[5].classList.contains('drumsOff')) {
        drumloopState[5].classList.replace('drumsOff', 'drumsOn');
        drumloopState[5].src = '../images/synth/drumcovers/drumloop6-active.jpg'
        imageContainer.style.backgroundImage =  'url(../images/synth/background/drumloop6.webp)';
        drumloopState.forEach((drumloop, index) => {
            if (index !== 5) drumloop.classList.replace('drumsOn', 'drumsOff');
        });
        } else if(drumloopState[5].classList.contains('drumsOn')) {
            drumloopState[5].classList.replace('drumsOn', 'drumsOff');
            drumloopState[5].src = '../images/synth/drumcovers/drumloop6-default.jpg'
            imageContainer.style.backgroundImage =  'url(../images/synth/background/default.webp)';
            stopAudio(loopSound6);
    }
});

const drumloop7 = document.getElementById('drumloop7').addEventListener('click', () => {
    playLoop(loopSound7)
    stopAudio(loopSound1)
    stopAudio(loopSound2)
    stopAudio(loopSound3)
    stopAudio(loopSound4)
    stopAudio(loopSound5)
    stopAudio(loopSound6)
    stopAudio(loopSound8)
    stopAudio(demo)
    drumloopState[0].src = '../images/synth/drumcovers/drumloop1-default.jpg'
    drumloopState[1].src = '../images/synth/drumcovers/drumloop2-default.jpg'
    drumloopState[2].src = '../images/synth/drumcovers/drumloop3-default.jpg'
    drumloopState[3].src = '../images/synth/drumcovers/drumloop4-default.jpg'
    drumloopState[4].src = '../images/synth/drumcovers/drumloop5-default.jpg'
    drumloopState[5].src = '../images/synth/drumcovers/drumloop6-default.jpg'      
    drumloopState[7].src = '../images/synth/drumcovers/drumloop8-default.jpg'
    demoState.src = '../images/synth/drumcovers/demo-default.jpg';
    if(drumloopState[6].classList.contains('drumsOff')) {
        drumloopState[6].classList.replace('drumsOff', 'drumsOn');
        drumloopState[6].src = '../images/synth/drumcovers/drumloop7-active.jpg'
        imageContainer.style.backgroundImage =  'url(../images/synth/background/drumloop7.webp)';
        drumloopState.forEach((drumloop, index) => {
            if (index !== 6) drumloop.classList.replace('drumsOn', 'drumsOff');
        });
        } else if(drumloopState[6].classList.contains('drumsOn')) {
            drumloopState[6].classList.replace('drumsOn', 'drumsOff');
            drumloopState[6].src = '../images/synth/drumcovers/drumloop7-default.jpg'
            imageContainer.style.backgroundImage =  'url(../images/synth/background/default.webp)';
            stopAudio(loopSound7);
    }
});

const drumloop8 = document.getElementById('drumloop8').addEventListener('click', () => {
    playLoop(loopSound8)
    stopAudio(loopSound1)
    stopAudio(loopSound2)
    stopAudio(loopSound3)
    stopAudio(loopSound4)
    stopAudio(loopSound5)
    stopAudio(loopSound6)
    stopAudio(loopSound7)
    stopAudio(demo)
    drumloopState[0].src = '../images/synth/drumcovers/drumloop1-default.jpg'
    drumloopState[1].src = '../images/synth/drumcovers/drumloop2-default.jpg'
    drumloopState[2].src = '../images/synth/drumcovers/drumloop3-default.jpg'
    drumloopState[3].src = '../images/synth/drumcovers/drumloop4-default.jpg'
    drumloopState[4].src = '../images/synth/drumcovers/drumloop5-default.jpg'
    drumloopState[5].src = '../images/synth/drumcovers/drumloop6-default.jpg'
    drumloopState[6].src = '../images/synth/drumcovers/drumloop7-default.jpg'        
    demoState.src = '../images/synth/drumcovers/demo-default.jpg';
    if(drumloopState[7].classList.contains('drumsOff')) {
        drumloopState[7].classList.replace('drumsOff', 'drumsOn');
        drumloopState[7].src = '../images/synth/drumcovers/drumloop8-active.jpg'
        imageContainer.style.backgroundImage =  'url(../images/synth/background/drumloop8.webp)';
        drumloopState.forEach((drumloop, index) => {
            if (index !== 7) drumloop.classList.replace('drumsOn', 'drumsOff');
        });
        } else if(drumloopState[7].classList.contains('drumsOn')) {
            drumloopState[7].classList.replace('drumsOn', 'drumsOff');
            drumloopState[7].src = '../images/synth/drumcovers/drumloop8-default.jpg'
            imageContainer.style.backgroundImage =  'url(../images/synth/background/default.webp)';
            stopAudio(loopSound8);
    }
});

// Mobile drumpads
const drumpads = document.querySelectorAll('.drumpad')
for(let i = 0; i < drumpads.length; i++){
    drumpads[i]
};

const drumpad1 = document.getElementById('drumpad1').addEventListener('click', () => {
    soundA.play()
    drumpads[0].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[0].style.background = '#2B4A6A';
    }, 300)
});

const drumpad2 = document.getElementById('drumpad2').addEventListener('click', () => {
    soundD.play()
    drumpads[1].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[1].style.background = '#2B4A6A';
    }, 300)
});

const drumpad3 = document.getElementById('drumpad3').addEventListener('click', () => {
    soundF.play()
    drumpads[2].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[2].style.background = '#2B4A6A';
    }, 300)
});

const drumpad4 = document.getElementById('drumpad4').addEventListener('click', () => {
    soundG.play()
    drumpads[3].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[3].style.background = '#2B4A6A';
    }, 300)
});

const drumpad5 = document.getElementById('drumpad5').addEventListener('click', () => {
    soundJ.play()
    drumpads[4].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[4].style.background = '#2B4A6A';
    }, 300)
});

const drumpad6 = document.getElementById('drumpad6').addEventListener('click', () => {
    soundK.play()
    drumpads[5].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[5].style.background = '#2B4A6A';
    }, 300)
});

const drumpad7 = document.getElementById('drumpad7').addEventListener('click', () => {
    soundL.play()
    drumpads[6].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[6].style.background = '#2B4A6A';
    }, 300)
});

const drumpad8 = document.getElementById('drumpad8').addEventListener('click', () => {
    backslash.play()
    drumpads[7].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[7].style.background = '#2B4A6A';
    }, 300)
});

const drumpad9 = document.getElementById('drumpad9').addEventListener('click', () => {
    soundC.play()
    drumpads[8].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[8].style.background = '#2B4A6A';
    }, 300)
});

const drumpad10 = document.getElementById('drumpad10').addEventListener('click', () => {
    soundV.play()
    drumpads[9].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[9].style.background = '#2B4A6A';
    }, 300)
});

const drumpad11 = document.getElementById('drumpad11').addEventListener('click', () => {
    soundB.play()
    drumpads[10].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[10].style.background = '#2B4A6A';
    }, 300)
});

const drumpad12 = document.getElementById('drumpad12').addEventListener('click', () => {
    soundN.play()
    drumpads[11].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[11].style.background = '#2B4A6A';
    }, 300)
});

const drumpad13 = document.getElementById('drumpad13').addEventListener('click', () => {
    soundM.play()
    drumpads[12].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[12].style.background = '#2B4A6A';
    }, 300)
});

const drumpad14 = document.getElementById('drumpad14').addEventListener('click', () => {
    soundComma.play()
    drumpads[13].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[13].style.background = '#2B4A6A';
    }, 300)
});

const drumpad15 = document.getElementById('drumpad15').addEventListener('click', () => {
    soundPeriod.play()
    drumpads[14].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[14].style.background = '#2B4A6A';
    }, 300)
});

const drumpad16 = document.getElementById('drumpad16').addEventListener('click', () => {
    soundSlash.play()
    drumpads[15].style.background = '#CBCABB'
    setTimeout(() => {
        drumpads[15].style.background = '#2B4A6A';
    }, 300)
});

// Desktop keys
window.addEventListener("keydown", logKey);
function logKey(e) {
  switch(e.code){
    case 'KeyA':
        soundA.play()
        break;
    case 'KeyS':
        soundS.play()
        break;
    case 'KeyD':
        soundD.play()
        break;
    case 'KeyF':
        soundF.play()
        break;
    case 'KeyG':
        soundG.play()
        break;
    case 'KeyH':
        soundH.play()
        break;
    case 'KeyJ':
        soundJ.play()
        break;
    case 'KeyK':
        soundK.play()
        break;
    case 'KeyL':
        soundL.play()
        break;
    case 'Semicolon':
        soundColon.play()
        break;
    case 'Quote':
        quote.play()
        break;
    case 'Backslash':
        backslash.play()
        break;
    // ^ middle row

    case 'KeyQ':
        soundQ.play()
        break;
    case 'KeyW':
        soundW.play()
        break;
    case 'KeyE':
        soundE.play()
        break;
    case 'KeyR':
        soundR.play()
        break;
    case 'KeyT':
        soundT.play()
        break;
    case 'KeyY':
        soundY.play()
        break;
    case 'KeyU':
        soundU.play()
        break;
    case 'KeyI':
        soundI.play()
        break;
    case 'KeyO':
        soundO.play()
        break;
    case 'KeyP':
        soundP.play()
        break;
    case 'BracketLeft':
        soundBracketLeft.play()
        break;
    case 'BracketRight':
        soundBracketRight.play()
        break;
    // ^ top row

    case 'KeyZ':
        soundZ.play()
        break;
    case 'KeyX':
        soundX.play()
        break;
    case 'KeyC':
        soundC.play()
        break;
    case 'KeyV':
        soundV.play()
        break;
    case 'KeyB':
        soundB.play()
        break;
    case 'KeyN':
        soundN.play()
        break;
    case 'KeyM':
        soundM.play()
        break;
    case 'Comma':
        soundComma.play()
        break;
    case 'Period':
        soundPeriod.play()
        break;
    case 'Slash':
        soundSlash.play()
        break;
    // ^ bottom row
  }
};