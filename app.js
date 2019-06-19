const soundsElement = document.querySelector('#sounds');

(async () => {
  const sounds = await getSounds();
  addSoundsToPage(sounds);
})();

async function getSounds() {
  const response = await fetch('./sounds.json');
  const json = await response.json();
  //console.log(json);
  return json;
}

function addSoundsToPage(sounds) {
  sounds.forEach(sound => {
    const soundDiv = document.createElement('div');
    soundDiv.className = 'sound';


    const soundTitle = document.createElement('h2');
    soundTitle.textContent = sound.title;
    soundDiv.appendChild(soundTitle);


    const icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = 'https://clipart.info/images/ccovers/1484942357ios-emoji-speaker-with-three-sound-waves.png';
    soundDiv.appendChild(icon);

    const player = document.createElement('audio');
    player.setAttribute('src', `audio/${sound.src}`);
    soundDiv.appendChild(player);

    soundDiv.addEventListener('mousedown', () => {
      player.currentTime = 0;
      player.play();
    })

    soundsElement.appendChild(soundDiv);
  });
}
