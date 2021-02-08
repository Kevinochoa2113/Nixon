
window.onload = function () {
    fadeIn(document.getElementById('img'), 1000);
    fadeIn(document.getElementById('img1'), 1000);

}

function fadeIn(el, time) {
    el.style.opacity = 0;
    el.style.display = "block";

    var last = +new Date();
    var tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / time;
        last = +new Date();

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };

    tick();
}


let img1 = document.getElementById("img1")
img1.addEventListener("mouseover", function(){
    img1.style.cursor = "url(images/thumbsdown.png), pointer";
});

img1.addEventListener("mouseleave", function(){
    img1.style.cursor = "url(images/Nixon.png), pointer";
})


let img = document.getElementById("img")
img.addEventListener("mouseover", function(){
    img.style.cursor ="url(images/thumbsup.png), pointer"
})

img.addEventListener("mouseleave", function(){
    img.style.cursor = "url(images/Nixon.png), pointer";
})



img.addEventListener("click", function(){
    window.location.href = "Thanks.html";
})

img1.addEventListener("mousemove", function(){

    empty.style.display = "block";
    let bodyCoords = body.getBoundingClientRect();
    let bodyHeight = bodyCoords.height;
    let bodyWidth = bodyCoords.width;
    let picWidth = img1.clientWidth;
    let picHeight = img1.clientHeight;
    let heightMax = bodyHeight - picHeight + 160;
    let widthMax = bodyWidth - picWidth;
    let picCoords = {
        top: Math.floor( Math.random() * heightMax ),
        left: Math.floor( Math.random() * widthMax )
    }
    img1.style.left = picCoords.left + 'px';
    img1.style.top = picCoords.top + 'px';
})