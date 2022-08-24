emojiau.soundData = {};

emojiau.createSound = (id,url) => {
    emojiau.soundData[id] = new Tone.Player(url).toDestination();
}

emojiau.playSound = (id) => {
    emojiau.soundData[id].start();
}
