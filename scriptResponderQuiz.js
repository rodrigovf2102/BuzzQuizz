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
let indiciePerguntas;
let indicieRespotas;

renderizarPagina();


function comparador() {
    return Math.random() - 0.5;
}

function renderizarPagina() {
    indiciePerguntas = [quizz.questions.length];


    acertos = 0;
    level = { levelAlcançado: quizz.levels[0], acertosAlcançado: acertos }
    responderQuiz.innerHTML =
        `<div class="imgTopo">
            <img>
            <div></div>
        </div>`;

    for (let i = 0; i < quizz.questions.length; i++) {
        responderQuiz.innerHTML +=
            `<div class="corpo-pergunta hidden">
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


    let element = document.querySelector(".corpo-pergunta").classList.remove("hidden");
    element = document.querySelector(".imgTopo :nth-child(1)");
    element.src = quizz.image;
    element = document.querySelector(".imgTopo :nth-child(2)");
    element.innerHTML = quizz.title;
    for (let i = 0; i < quizz.questions.length; i++) {
        element = document.querySelectorAll(".corpo-pergunta >:nth-child(1)");
        element[i].innerHTML = quizz.questions[i].title;
        element[i].style.backgroundColor = quizz.questions[i].color;
        indicieRespotas = [quizz.questions[i].length];

        numeroDeRespostas = quizz.questions[i].answers.length;

        for (let j = 0; j < quizz.questions[i].answers.length; j++) {
            indicieRespotas[j] = j;
        }
        indicieRespotas = indicieRespotas.sort(comparador);
        indiciePerguntas[i] = indicieRespotas;
        console.log(indiciePerguntas)


        for (let j = 0; j < numeroDeRespostas; j++) {
            element = document.querySelectorAll(`.corpo-pergunta >:nth-child(${2 + j}) :nth-child(1)`);
            element[i].src = quizz.questions[i].answers[indicieRespotas[j]].image;
            element = document.querySelectorAll(`.corpo-pergunta >:nth-child(${2 + j}) :nth-child(2)`);
            element[i].innerHTML = quizz.questions[i].answers[indicieRespotas[j]].text;
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

function aparecerQuestao() {
    element = document.querySelector(".corpo-pergunta.hidden");
    if (element !== null) element.classList.remove("hidden");
}

function selecionarResposta(resposta) {
    setTimeout(aparecerQuestao, 2000);
    element = resposta.parentNode.querySelector("div").innerHTML.toString();
    if (resposta.parentNode.querySelector(".respondido") === null) {
        for (let i = 0; i < quizz.questions.length; i++) {
            if (quizz.questions[i].title.toString() === element) {
                for (let j = 0; j < quizz.questions[i].answers.length; j++) {
                    console.log();
                    if (quizz.questions[i].answers[indiciePerguntas[i][j]].isCorrectAnswer) {
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

    console.log(acertos);
    let respostas = document.querySelectorAll(".respondido").length;
    let perguntas = quizz.questions.length;
    if (respostas === perguntas) {

        level.acertosAlcançado = Math.ceil(((acertos / perguntas) * 100));
        level.levelAlcançado.minValue = 0;

        for (let i = 0; i < quizz.levels.length; i++) {
            console.log(level.acertosAlcançado, quizz.levels[i].minValue);
            console.log(level.levelAlcançado.minValue, quizz.levels[i].minValue)
            console.log(level.acertosAlcançado >= Number(quizz.levels[i].minValue));
            
            console.log(level.levelAlcançado.minValue < quizz.levels[i].minValue)

            if (Number(level.acertosAlcançado) >= Number(quizz.levels[i].minValue)) {
                if (Number(level.levelAlcançado.minValue) < Number(quizz.levels[i].minValue)) {
                    level.levelAlcançado = quizz.levels[i];
                }
            }
        }

        responderQuiz.innerHTML +=
            `<div class="corpo-acertos hidden">
                <div></div>
                <img>
                <div></div>
            </div>
            <div class="botao-reiniciar hidden" onclick="reiniciarQuizz()">Reiniciar Quizz</div>
            <div class="botao-voltar hidden" onclick="voltarHome()">Volte para home</div>`;

        element = document.querySelector(".corpo-acertos :nth-child(1)");
        element.innerHTML = `${level.acertosAlcançado}% de acerto: ${level.levelAlcançado.title}`
        element = document.querySelector(".corpo-acertos :nth-child(2)");
        element.src = level.levelAlcançado.image;
        element = document.querySelector(".corpo-acertos :nth-child(3)");
        element.innerHTML = level.levelAlcançado.text;
        setTimeout(aparecerResposta, 2000);
    }
}

function aparecerResposta() {
    document.querySelector(".corpo-acertos").classList.remove("hidden");
    document.querySelector(".botao-reiniciar.hidden").classList.remove("hidden");
    document.querySelector(".botao-voltar.hidden").classList.remove("hidden");
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