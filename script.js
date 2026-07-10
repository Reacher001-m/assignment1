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
        // 窓の透過エリア（横37%〜85%、縦35%〜60%）の中に制限します
        var randomX = 37 + Math.random() * 45; 
        var randomY = 35 + Math.random() * 22; 
        
        el.style.left = randomX + '%';   // %指定にすることで画面サイズが縮んでもズレません
        el.style.top  = randomY + '%';   
    })
})

