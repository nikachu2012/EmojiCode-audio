emojiau.soundData = {};
emojiau.soundDetail = {};

emojiau.createSound = (id,url) => {
    if(id !== null){
        emojiau.soundData[id] = new Tone.Player(url).toDestination();
        emojiau.soundDetail[id] = {}
        emojiau.soundDetail[id].id = id;
        emojiau.soundDetail[id].url = url;
    }
    else{
        console.error('emojiau: IDにnullは使用できません。')
        alert('IDにnullは使用できません。')
    }
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
