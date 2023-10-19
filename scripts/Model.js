import { dataDB } from "./dataBD.js";
export function Model() {
  let view = null;
  let dataDb = null;
  let count = null;
  let isActive = false;
  let isPlay = null;
  let isMute = null;
  this.init = function (myview) {
    view = myview;
    dataDb = dataDB;
    let isPlay = false;
    let isMute = false;
    count = 0;
  };
  this.initTime = function () {
    view.initTime();
  };

  this.initPlayer = function () {
    view.initPlayer(dataDb[count]);
  };
  this.firstRender = function () {
    view.imgRender(dataDb[count]);
    view.titlteRender(dataDb[count]);
    view.audioRender(dataDb[count]);
  };
  this.playMusic = function () {
    view.playMusic();
    view.calculateRange();
  };
  this.pauseMusic = function () {
    view.pauseMusic();
  };

  this.backAudio = function () {
    count <= 0 ? (count = dataDb.length) : null;
    count -= 1;
    view.pauseMusic();
    view.changeAudio(dataDb[count]);
  };
  this.nextAudio = function () {
    count += 1;
    count === dataDb.length ? (count = 0) : null;
    view.pauseMusic();
    view.changeAudio(dataDb[count]);
  };

  this.blockControls = function (/* num */) {
    view.blockControls(count, dataDb.length - 1);
  };
  this.changePlayPauseBtn = function (index) {
    view.changePlayPauseBtn(index);
  };
  this.muteMusic = function () {
    isMute = !isMute;
    view.muteMusic(isMute);
  };
}
