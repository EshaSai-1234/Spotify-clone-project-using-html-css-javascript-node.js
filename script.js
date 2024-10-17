const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const songs = ['songs/song1.mp3', 'songs/song2.mp3', 'songs/song3.mp3'];
let songIndex = 0;

function loadSong(index) {
  audioPlayer.src = songs[index];
  audioPlayer.play();
}

playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
  }
});

prevBtn.addEventListener('click', () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
});

nextBtn.addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
});

audioPlayer.addEventListener('ended', () => {
  nextBtn.click();
});

// Load the first song on page load
window.onload = () => loadSong(songIndex);
