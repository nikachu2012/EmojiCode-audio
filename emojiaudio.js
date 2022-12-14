/* 
    EmojiCode Sprite Controller
    Created by nikachu2012(https://github.com/nikachu2012)
    Create time: Thu Sep 22 2022 00:07:54 GMT+0900 (日本標準時)
*/
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();
const emojiau = {};

emojiau.playNote = (note, duration) => {
    synth.triggerAttackRelease(note, duration)
}

emojiau.playNoteSecond = (note, second) => {
    const now = Tone.now()
    synth.triggerAttack(note, now)
    synth.triggerRelease(now + second)
}

emojiau.soundData = {};
emojiau.soundDetail = {};

emojiau.createSound = (id,url) => {
    emojiau.soundData[id] = new Tone.Player(url).toDestination();
    emojiau.soundDetail[id] = {}
    emojiau.soundDetail[id].id = id;
    emojiau.soundDetail[id].url = url;
}

emojiau.detailAdd = (detail) => {
    const keys = Object.keys(detail);
    keys.forEach(element => {
        emojiau.createSound(detail[element].id, detail[element].url)
    });
}

emojiau.playSound = (id) => {
    emojiau.soundData[id].start();
}
