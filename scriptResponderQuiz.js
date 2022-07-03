let quizz = {
    title: "Título do quizz",
    image: "https://http.cat/411.jpg",
    questions: [
        {
            title: "Título da pergunta 1",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 3",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 4",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "Título da pergunta 2",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 3",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 4",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "Título da pergunta 3",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: false
                },
                {
                    text: "Texto da resposta 3",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 4",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: false
                }
            ]
        }
    ],
    levels: [
        {
            title: "Título do nível 1",
            image: "https://http.cat/411.jpg",
            text: "Descrição do nível 1",
            minValue: 0
        },
        {
            title: "Título do nível 2",
            image: "https://http.cat/412.jpg",
            text: "Descrição do nível 2",
            minValue: 50
        },
        {
            title: "Título do nível 3",
            image: "https://http.cat/412.jpg",
            text: "Descrição do nível 3",
            minValue: 75
        },
        {
            title: "Título do nível 4",
            image: "https://http.cat/412.jpg",
            text: "Descrição do nível 4",
            minValue: 99
        }
    ]
}
let acertos = 0;
let level = { levelAlcançado: quizz.levels[0], acertosAlcançado: acertos };
let responderQuiz = document.querySelector(".ResponderQuiz");
renderizarPagina();


function renderizarPagina() {
    acertos = 0;
    level = { levelAlcançado: quizz.levels[0], acertosAlcançado: acertos }
    responderQuiz.innerHTML =
        `<div class="imgTopo">
            <img>
            <div></div>
        </div>`;

    for (let i = 0; i < quizz.questions.length; i++) {
        responderQuiz.innerHTML +=
            `<div class="corpo-pergunta">
                    <div></div>
                    <div class="alternativa" onclick="selecionarResposta(this)">
                            <img>
                            <div></div>
                    </div>
                    <div class="alternativa" onclick="selecionarResposta(this)">
                            <img>
                            <div></div>
                    </div>
                    <div class="alternativa" onclick="selecionarResposta(this)">
                        <img>
                        <div></div>
                    </div>
                    <div class="alternativa" onclick="selecionarResposta(this)">
                        <img>
                        <div></div>
                    </div>
                </div>`;
    }



    let element = document.querySelector(".imgTopo :nth-child(1)");
    element.src = quizz.image;
    element = document.querySelector(".imgTopo :nth-child(2)");
    element.innerHTML = quizz.title;
    for (let i = 0; i < quizz.questions.length; i++) {
        element = document.querySelectorAll(".corpo-pergunta >:nth-child(1)");
        element[i].innerHTML = quizz.questions[i].title;
        element[i].style.backgroundColor = quizz.questions[i].color;

        numeroDePerguntas = quizz.questions[i].answers.length;

        for (let j = 0; j < numeroDePerguntas; j++) {
            element = document.querySelectorAll(`.corpo-pergunta >:nth-child(${2 + j}) :nth-child(1)`);
            element[i].src = quizz.questions[i].answers[j].image;
            element = document.querySelectorAll(`.corpo-pergunta >:nth-child(${2 + j}) :nth-child(2)`);
            element[i].innerHTML = quizz.questions[i].answers[j].text;
        }
    }

    for (let i = 0; i < quizz.levels.length; i++) {
        if (acertos > quizz.levels[i].minValue) {
            level = { levelAlcançado: quizz.levels[i], acertosAlcançado: acertos };
        }
    }
    let corpoPergunta = document.querySelectorAll(".corpo-pergunta img");
    for (let i = 0; i < corpoPergunta.length; i++) {
        if (corpoPergunta[i].src === "") {
            corpoPergunta[i].parentNode.remove();
        }
    }
}


function selecionarResposta(resposta) {
    element = resposta.parentNode.querySelector("div").innerHTML.toString();
    if (resposta.parentNode.querySelector(".respondido") === null) {
        for (let i = 0; i < quizz.questions.length; i++) {
            if (quizz.questions[i].title.toString() === element) {
                for (let j = 0; j < quizz.questions[i].answers.length; j++) {
                    if (quizz.questions[i].answers[j].isCorrectAnswer) {
                        element = resposta.parentNode.querySelectorAll(".alternativa");
                        element[j].classList.add("letra-verde");
                        if (element[j].querySelector(".fundo-branco") === null) {
                            element[j].innerHTML += `<div class="fundo-branco"></div>`;
                        }
                    }
                    else {
                        element = resposta.parentNode.querySelectorAll(".alternativa");
                        element[j].classList.add("letra-vermelha");
                        if (element[j].querySelector(".fundo-branco") === null) {
                            element[j].innerHTML += `<div class="fundo-branco"></div>`;
                        }
                    }
                }
            }
        }
        resposta.querySelector(".fundo-branco").remove("fundo-branco");
        resposta.classList.add("respondido");
        verificarResposta(resposta);
    }

}

function verificarResposta(resposta) {
    if (resposta.classList.contains("letra-verde")) {
        acertos++;
    }
    let respostas = document.querySelectorAll(".respondido").length;
    let perguntas = quizz.questions.length;
    if (respostas === perguntas) {
        level.acertosAlcançado = ((acertos / perguntas) * 100).toFixed(2);
        for (let i = 0; i < quizz.levels.length; i++) {
            if (level.acertosAlcançado > quizz.levels[i].minValue) {
                level.levelAlcançado = quizz.levels[i];
            }
        }

        responderQuiz.innerHTML +=
            `<div class="corpo-acertos">
                <div></div>
                <img>
                <div></div>
            </div>
            <div class="botao-reiniciar" onclick="reiniciarQuizz()">Reiniciar Quizz</div>
            <div class="botao-voltar" onclick="voltarHome()">Volte para home</div>`;

        element = document.querySelector(".corpo-acertos :nth-child(1)");
        element.innerHTML = `${level.acertosAlcançado}% de acerto: ${level.levelAlcançado.title}`
        element = document.querySelector(".corpo-acertos :nth-child(2)");
        element.src = level.levelAlcançado.image;
        element = document.querySelector(".corpo-acertos :nth-child(3)");
        element.innerHTML = level.levelAlcançado.text;
    }
}

function reiniciarQuizz() {
    renderizarPagina();
    window.scrollTo(0, 0)
}

function voltarHome() {
    document.querySelector(".ResponderQuiz").classList.add("hidden");
    document.querySelector(".corpo-inicioQuizz").classList.remove("hidden");
    window.scrollTo(0, 0)
}