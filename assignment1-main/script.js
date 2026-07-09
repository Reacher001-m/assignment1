document.querySelectorAll('.butterfly').forEach(function (el) {
    el.addEventListener('mouseover', function () {
        var randomX = Math.random() * (window.innerWidth - 150);
        var randomY = Math.random() * (window.innerHeight - 150);
        el.style.left = randomX + 'px';   // ランダムな位置へ
        el.style.top  = randomY + 'px';   // ランダムな位置へ
    })
})

document.querySelectorAll('.foo').forEach(function (el) {
    el.addEventListener('mouseover', function () {
        var randomX = Math.random() * (window.innerWidth - 300);
        var randomY = Math.random() * (window.innerHeight - 300);
        el.style.left = randomX + 'px';   // ランダムな位置へ
        el.style.top  = randomY + 'px';   // ランダムな位置へ
    })
})

