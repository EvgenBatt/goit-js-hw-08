import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframe);

const saveCurrentTime = function (currentTime) {
  const currentTimeSeconds = currentTime.seconds;
  localStorage.setItem(TIME_STORAGE_KEY, JSON.stringify(currentTimeSeconds));
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));

const savedTime = JSON.parse(localStorage.getItem(TIME_STORAGE_KEY)) || null;
player.setCurrentTime(savedTime);
