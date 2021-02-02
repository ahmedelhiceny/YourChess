const selectedVideo = document.querySelector(".video iframe"),
    cont = document.querySelector(".container"),
    play = document.querySelector(".Practise"),
    Screen = document.querySelector(".video");

let flag = 1,
    flag2 = 1;

const getStart = _ => {
    play.style.opacity = '1';
    play.style.visibility = 'visible';
}
const stopPlay = _ => {
    play.style.opacity = '0';
    play.style.visibility = 'hidden';
}

window.onload = _ => {
    setInterval(switchBack, 3000);
}


const turnVideo = num => {
    if (num == 1 && flag2 == 1) {
        selectedVideo.src = "https://www.youtube.com/embed/GQvR_fLkNKo";
    } else if (num == 2 && flag2 == 1) {
        selectedVideo.src = "https://www.youtube.com/embed/6WD2NOJN4TQ";
    } else if (num == 3 && flag2 == 1) {
        selectedVideo.src = "https://www.youtube.com/embed/nODmo9PPXz4";
    } else if (num == 4 && flag2 == 1) {
        selectedVideo.src = "https://www.youtube.com/embed/1FhcXDyyDts";
    } else if (num == 5 && flag2 == 1) {
        selectedVideo.src = "https://www.youtube.com/embed/cqa8Z2GSR80";
    } else if (num == 6 && flag2 == 1) {
        selectedVideo.src = "https://www.youtube.com/embed/0EqJeujhrpM";
    } else if (num == 7 && flag2 == 1) {
        selectedVideo.src = "https://www.youtube.com/embed/KnQm1wgAN4Q";
    } else if (num == 1 && flag2 == 2) {
        selectedVideo.src = "https://www.youtube.com/embed/CSA9se6t82I";
    } else if (num == 2 && flag2 == 2) {
        selectedVideo.src = "https://www.youtube.com/embed/UMSAhUzyqyI";
    } else if (num == 3 && flag2 == 3) {
        selectedVideo.src = "https://www.youtube.com/embed/iNCZVy9INuc";
    } else if (num == 4 && flag2 == 4) {
        selectedVideo.src = "https://www.youtube.com/embed/8ogP8mTKEds";
    } else if (num == 5 && flag2 == 5) {
        selectedVideo.src = "https://www.youtube.com/embed/pOjzvVVrxWw";
    } else if (num == 6 && flag2 == 6) {
        selectedVideo.src = "https://www.youtube.com/embed/3xuSaODwiHk";
    } else if (num == 7 && flag2 == 7) {
        selectedVideo.src = "https://www.youtube.com/embed/R0gzvT0IO0M";
    } else if (num == 1 && flag2 == 3) {
        selectedVideo.src = "https://www.youtube.com/embed/i_Ow-kBkP6o";
    } else if (num == 2 && flag2 == 3) {
        selectedVideo.src = "https://www.youtube.com/embed/VBFN8ryVhoo";
    } else if (num == 3 && flag2 == 3) {
        selectedVideo.src = "https://www.youtube.com/embed/19qlfTqnGSQ";
    } else if (num == 4 && flag2 == 3) {
        selectedVideo.src = "https://www.youtube.com/embed/MIC7jGckrsM";
    } else if (num == 5 && flag2 == 3) {
        selectedVideo.src = "https://www.youtube.com/embed/0vVqWHyzzw4";
    } else if (num == 6 && flag2 == 3) {
        selectedVideo.src = "https://www.youtube.com/embed/sbHJ51AORXs";
    } else if (num == 7 && flag2 == 3) {
        selectedVideo.src = "https://www.youtube.com/embed/_zUaWs5Lxy8";
    }
}

const switchBack = _ => {
    if (flag == 1) {
        flag = 2;
        cont.style.backgroundImage = "url('../Images/pexels-lady-escabia-2218384.jpg')";
    } else if (flag == 2) {
        flag = 3
        cont.style.backgroundImage = "url('../Images/pexels-worldspectrum-1099298.jpg')";
    } else if (flag == 3) {
        flag = 1;
        cont.style.backgroundImage = "url('../Images/pexels-vlada-karpovich-6202970.jpg')";
    }
}

const ShowItem = (element) => {
    element.querySelector("div>img").style.opacity = "0.3";
    element.querySelector("div>div").style.opacity = "1";
}
const HideItem = (element) => {
    element.querySelector("div>img").style.opacity = "1";
    element.querySelector("div>div").style.opacity = "0";
}
const getCourse = (num) => {
    flag2 = num;
    turnVideo(1);
}
const StartGame = _ => {
    window.location.href = "../src/chess.html";
}