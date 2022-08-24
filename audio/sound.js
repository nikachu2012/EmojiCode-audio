emojiau.soundData = {};

emojiau.createSound = (id,url) => {
    emojiau.soundData[id] = new Tone.Player(url).toDestination();
}
