const INIT_ANGLE = 260;

function setRotate(angle) {
    window.requestAnimationFrame(function () {
        document.querySelector('.arrow').style.transform = `rotate(${angle}deg)`;
    });
}

setRotate(INIT_ANGLE)



