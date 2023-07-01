let interval;

function Click() {
    let progress = 0;
    let speed = 25;
    let circle = document.querySelector(".container");
    let item = document.querySelector(".item");
    let item1 = document.querySelector(".item-c1");

    interval = setInterval(() => {
        progress++;
        circle.style.backgroundImage = `conic-gradient(from ${progress}deg, red ${progress}deg, white 0deg)`;
        item.style.backgroundImage = `conic-gradient(from ${
            progress * 4
        }deg, red ${progress}deg, white 0deg)`;
        item1.innerHTML = Math.floor((progress / 360) * 100);
        if (progress == 360) {
            // clearInterval(interval);
            progress = 0;
        }
    }, speed);
}
