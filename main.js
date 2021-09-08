const vid = document.getElementById('main')
const lyricsDiv = document.querySelector('.lyrics')
let lyrics = lyricsDiv.querySelectorAll('.lyric')

/**
 * this var to add the lyrics div to him so we acctually get all the infos about the div including time
 * and also Ob refrence to object
 */ 
let lyricsOb = []



// here we just do as we said up 
lyrics.forEach(lyric => {
    lyricsOb.push({
        time: lyric.getAttribute('time'),
        div: lyric
    })
});




vid.onclick = ()=>{
    handleVid()
}
vid.ontimeupdate = (e)=>{
    e = e.target.currentTime.toFixed();

    const res = lyricsOb.find(lyric => lyric.time == e)
    if(res){
        lyrics.forEach(e=>e.classList.remove('active'))
        res.div.classList.add('active')
    }
}

vid.ondblclick = ()=>{
    vid.currentTime = 0
}

// window.onkeydown = (e)=>{
//     if(e.code == "Space"){
//         handleVid()
//     }
// }

function handleVid(){
    if(vid.paused) vid.play()
    else vid.pause()
}


































