const MIN_ANGLE = -100;
const MAX_ANGLE = 100;
const SPEED_MIN = 0;
const SPEED_MAX = 180;
const TIME_OUT = 4000;

function setRotate(angle) {
    window.requestAnimationFrame(function () {
        document.querySelector('.arrow').style.transform = `rotate(${angle}deg)`;
    });
}

function setBackGroundColor(speed) {
    let color = ''
    if (speed <= 60) {
        color = 'green'
    }
    if (speed > 61 && speed <= 120) {
        color = 'orange'
    }
    if (speed > 121 && speed <= 120) {
        color = 'red'
    }

    window.requestAnimationFrame(function () {
        document.querySelector('.background').style.backgroundColor = color
        document.querySelector('.background').style.opacity = '0.2';
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
    setBackGroundColor(speed)
}, TIME_OUT)


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

