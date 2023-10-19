export function Controller() {
  let box = null;
  let model = null;
  this.init = function (mybox, mymodel) {
    box = mybox;
    model = mymodel;
    document.addEventListener("DOMContentLoaded", () => {
      this.initPlayer();
      // this.initTime(); самописный отсчет времени

      document.addEventListener("click", (e) => {
        console.log(e.target.id);
        switch (true) {
          case e.target.id === "play-btn":
            e.preventDefault();
            this.playMusic();
            break;
          case e.target.id === "pause-btn":
            e.preventDefault();
            this.pauseMusic();
            break;
          case e.target.id === "back-btn":
            e.preventDefault();
            this.backAudio();
            break;
          case e.target.id === "next-btn":
            e.preventDefault();
            this.nextAudio();
            break;
          /*           case e.target.id === "mute-btn":
            this.muteMusic(); */
        }
      });
    });
  };

  this.initPlayer = function () {
    model.initPlayer();
  };
  this.playMusic = function () {
    model.playMusic();
  };
  this.pauseMusic = function () {
    model.pauseMusic();
  };

  this.backAudio = function () {
    model.backAudio();
  };
  this.nextAudio = function () {
    model.nextAudio();
  };
  this.changePlayPauseBtn = function (index) {
    model.changePlayPauseBtn(index);
  };

  this.initTime = function () {
    model.initTime();
  };

  /* блокировало кнопки перемотки- не пригодилось */
  this.initBlockControls = function (num) {
    model.blockControls(num);
  };
  this.blockControls = function (num) {
    model.blockControls(num);
  };
  /* убирает звук-мьютит */
  this.muteMusic = function (index) {
    model.muteMusic();
  };
}
