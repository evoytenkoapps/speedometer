const MIN_ANGLE = -100;
const MAX_ANGLE = 100;
const SPEED_MIN = 0;
const SPEED_MAX = 180;

function setRotate(angle) {
    window.requestAnimationFrame(function () {
        document.querySelector('.arrow').style.transform = `rotate(${angle}deg)`;
    });
}

setRotate(MIN_ANGLE)

setInterval(() => {
    const speed = randomIntFromInterval(SPEED_MIN, SPEED_MAX);
    const speedPercent = (speed / SPEED_MAX) * 100;
    const moduleAngle = (((MIN_ANGLE * -1) + MAX_ANGLE) / 100) * speedPercent;
    const angle = MIN_ANGLE + moduleAngle;
    console.log("speed", speed, "angle", angle);
    setRotate(angle)
}, 1000)


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

