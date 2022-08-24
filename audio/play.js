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

emojiau.stopSound = () => {
    Tone.Transport.stop();
    Tone.Transport.cancel();
}
