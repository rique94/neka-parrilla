const slides = document.getElementById("slides")

let imagemAtual = 0

function atualizarCarrossel(){

    slides.style.transform = `translateX(-${imagemAtual * 700}px)`
}

function proxima(){

    imagemAtual++

    if(imagemAtual > 2){
        imagemAtual = 0
    }

    atualizarCarrossel()
}

function voltar(){

    imagemAtual--

    if(imagemAtual < 0){
        imagemAtual = 2
    }

    atualizarCarrossel()
}