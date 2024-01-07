


function animateMove(eleId, endX, endY, duration) {

    return new Promise((resolve, reject) => {
        let ele = document.querySelector('#' + eleId)
        if(!ele) {
            reject('대상 엘리먼트가 없습니다.')
            return
        }

        var startX = ele.offsetLeft
        var currentX = ele.offsetLeft
        var startY = ele.offsetTop
        var currentY = ele.offsetTop
        var startTime = null

        function animation(currentTime) {
            if(!startTime) {
                startTime = currentTime
            }

            let timeElapsed = currentTime - startTime
            console.log(timeElapsed)
            let progress = Math.min(timeElapsed / duration, 1)

            currentX = startX + (endX - startX) * progress
            currentY = startY + (endY - startY) * progress

            ele.style.left = currentX + 'px';
            ele.style.top = currentY + 'px';

            if(timeElapsed < duration) {
                requestAnimationFrame(animation)
            } else {
                resolve()
            }
        }

        requestAnimationFrame(animation)
    })
}

window.onload = async function() {
    for(let i = 0; i < 10; i++) {
        await animateMove('first_card', 300, 300, 1000)
        await animateMove('first_card', 100, 100, 1000)
    }
}