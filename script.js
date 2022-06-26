let url1 = "https://wallpaperaccess.com/full/4263949.jpg"
let url2 = "https://wallpaperaccess.com/full/4263821.jpg"
let url3 = "https://ekimetrics.com/wp-content/uploads/2020/06/Entete-min-2000x1000.jpg"
let url4 = "https://artfiles.alphacoders.com/784/78461.jpg"
let url5 = "https://miro.medium.com/max/1000/0*VcLO4JlhwDhwHufK.jpg"
let url6 = "https://i.pinimg.com/originals/80/6a/2d/806a2d9b661825b23ba30c22f5f13457.png"
let url7 = "https://octashift.com/wp-content/uploads/The-longing-to-go-home-mic.png"

let urls = [url1, url2, url3, url4, url5, url6, url7]

let img = document.getElementById('myImg')
let prevBtn = document.getElementById('prev')
let nextBtn = document.getElementById('next')
let playBnt = document.getElementById('play')
let stopBtn = document.getElementById('stop')

let timerId

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)

function prevSlide(){
    clearInterval(timerId)
    if(img.src === urls[0]){
        img.src = urls[urls.length - 1]
    } else {
        img.src = urls[urls.indexOf(img.src) - 1]
    }
}

function nextSlide(){
    clearInterval(timerId)
    if(img.src === urls[urls.length - 1]){
        img.src = urls[0]
    } else {
        img.src = urls[urls.indexOf(img.src) + 1]
    }
}

playBnt.addEventListener("click", function(){
    clearInterval(timerId)
    timerId = setInterval(function(){
        if(img.src === urls[urls.length - 1]){
            img.src = urls[0]
        } else {
            img.src = urls[urls.indexOf(img.src) + 1]
        }
    }, 1500)
})

stopBtn.addEventListener("click", function(){
    clearInterval(timerId)
})