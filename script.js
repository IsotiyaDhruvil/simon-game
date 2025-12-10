let userseq = [];
let gameSeq = [];

let started = false;
let level = 0;

let btns = document.querySelectorAll(".btn");

let color = ["red", "yello", "blue", "green"];

let h2 = document.querySelector("h2");

let h3 = document.querySelector("h3");

let button = document.querySelector(".center");

button.addEventListener(("click"), function () {
    if (started == false) {
        started = true;
        button.classList.add("restart");
        button.innerText = "Restart";
        levelup();
    }
    else if(started == true){
        reset();
        button.innerText = "Start";
        h2.innerHTML = "0";
    }
      
});



function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}

function levelup() {
    userseq = [];
    level++;
    h2.innerHTML = `${level}`;
    let randomindx = Math.floor(Math.random() * 4);
    let randomcolor = color[randomindx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);
    flash(randombtn);
}

function checkans(indx) {
    if (userseq[indx] === gameSeq[indx]) {
        if (userseq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }

    } else {
        h2.innerHTML = "Game over!";
        button.innerText = "Start";
        document.body.style.background = "#fe1b1bff";
        setTimeout(function () {
            document.body.style.background = "";
        }, 200);
        reset();
    }
}

function btnpress() {
    flash(this);
    usercolor = this.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length - 1);

}

for (btn of btns) {
    btn.addEventListener("click", btnpress)
}

let highscor = 0;
h3.innerHTML = `${highscor}`;

function gameover() {
    if (highscor < level) {
        highscor = level;
    }
    h3.innerText = `${highscor}`;

}



function reset() {
    gameover();
    started = false;
    level = 0;
    gameSeq = [];
    userseq = [];
}

