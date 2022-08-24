/* 
    EmojiCode Sprite Controller
    Created by nikachu2012(https://github.com/nikachu2012)
    Create time: Wed Aug 24 2022 18:03:12 GMT+0900 (日本標準時)
*/
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();
const emojiau = {};

emojiau.playNote = (note, duration) => {
    synth.triggerAttackRelease(note, duration)
}

emojiau.playNoteSecond = (note, second) => {
    const now = Tone.now()
    synth.triggerAttackRelease(note, now + second)
}
emojiau.soundData = {};

emojiau.createSound = (id,url) => {
    emojiau.soundData[id] = new Tone.Player(url).toDestination();
}

emojiau.playSound = (id) => {
    emojiau.soundData[id].start();
}
