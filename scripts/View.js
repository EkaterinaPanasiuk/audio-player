export function View() {
  let box = null;
  let player = null;
  let currentTime = null;
  let fullTime = null;
  let timeInterval = null;

  this.init = function (container) {
    currentTime = 0;
    box = container;
  };

  this.initPlayer = function (dataDb) {
    player = document.getElementById("player");
    this.imgRender(dataDb);
    this.titlteRender(dataDb);
    this.audioRender(dataDb);
  };
  this.imgRender = function (dataDb) {
    const mainContainer = document.getElementById("main");
    mainContainer.style.backgroundImage = `url(${dataDb.img})`;
  };
  this.titlteRender = function (dataDb) {
    const title = document.getElementById("audio-title");
    title.innerText = dataDb.title;
    const author = document.getElementById("audio-author");
    author.innerText = dataDb.author;
  };
  this.audioRender = function (dataDb) {
    let sourse = document.getElementById("source");
    console.log(sourse);
    console.log(sourse === null);

    if (sourse !== null) {
      let newPlayer = new Audio();
      newPlayer.setAttribute("controls", "");
      newPlayer.setAttribute("id", "player");
      newPlayer.classList.add("audio-elem");
      player.replaceWith(newPlayer);
      sourse.setAttribute("src", `${dataDb.audio}`);
      sourse.setAttribute("type", "audio/ogg");
      newPlayer.appendChild(sourse);
      player = newPlayer;
    } else {
      sourse = document.createElement("source");
      sourse.setAttribute("src", `${dataDb.audio}`);
      sourse.setAttribute("type", "audio/ogg");
      sourse.setAttribute("id", "source");

      player.appendChild(sourse);
      console.log(player);
    }
  };
  this.playMusic = function () {
    player.play();
    this.changePlayPauseBtn(false);
    this.calculateRange();
  };
  this.changePlayPauseBtn = function (index) {
    let playbtn = document.getElementById("play-btn-wrapper");
    if (index === false) {
      playbtn.innerHTML = `<img
          class="control-btn play"
          src="./accets/img/icons/pause.svg"
          alt="pause" id="pause-btn"
        />`;
    } else {
      playbtn.innerHTML = `<img class="control-btn" src="./accets/img/icons/play.svg" alt="play" id ="play-btn" class="control-btn play"/>`;
    }
  };

  this.changeBtn = function (isActive) {
    const btn = document.getElementById("play-btn");
    isActive === true ? (btn.innerText = "Play") : (btn.innerText = "Payse");
  };
  this.pauseMusic = function () {
    player.pause();
    this.changePlayPauseBtn(true);
  };
  this.changeAudio = function (data) {
    this.audioRender(data);
    this.imgRender(data);
    this.titlteRender(data);
    this.playMusic();
  };
  this.blockControls = function (num, max) {
    console.log("blockControls  " + num + "  " + max);
    const btnCol = document.querySelectorAll("audio-btn");
    btnCol.forEach((element) => {
      element.classList.remove("disabled");
      element.removeAttribute("disabled", "disabled");
      console.log(element);
    });
    let btn;
    if (num === 0) {
      btn = document.getElementById("back-btn");
      btn.classList.add("disabled");
      btn.setAttribute("disabled", "");
    } else if (num === max) {
      btn = document.getElementById("next-btn");
      btn.classList.add("disabled");
      btn.setAttribute("disabled", "");
    }
  };
  this.muteMusic = function (flag) {
    flag === true
      ? player.setAttribute("muted", "")
      : player.removeAttribute("muted", "");
  };
  this.calculateRange = function () {
    fullTime = Math.round(+player.duration);
    currentTime = Math.round(+player.currentTime);
    this.timeRender(fullTime, currentTime);
    this.animateRange(fullTime, currentTime);
  };
  this.timeRender = function (cur) {
    console.log(cur);
    let currentText = document.getElementById("audio-current-time");
    timeInterval = setInterval(() => {
      currentText.innerText = currentTime;
      currentTime += 1;
    }, 1000);
  };
  this.animateRange = function (time, cur) {
    /*    let range = document.getElementById("audio-range-wrapper");
    let currentRange = document.getElementById("audio-range");
    let width = window.getComputedStyle(range).width;
    width = Math.round(+width.slice(0, width.length - 2));
    let shift = Math.round(width / time);
    let count = 1;
    let interval = setInterval(() => {
      currentRange.style.width = shift * cur + count * shift + "px";
      count += 1;
    }, 1000); */
    //currentRange.style.width = shift * cur + "px";
    //currentRange.classList.add("animateRange");
  };
  this.initTime = function () {
    document.getElementById("audio-current-time").innerText = "00";
    document.getElementById("audio-time").innerText = Math.round(
      +player.duration
    );
  };
}
