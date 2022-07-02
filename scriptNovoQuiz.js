let TituloQuizz = "";
let UrlQuizz = "";
let PerguntasQuizz = 0;
let NiveisQuizz = 0;
let NovoID = null;

let QuizzCRIADO = null;
    


function CriarQuizz() {
    document.querySelector(".corpo-inicioQuizz").classList.add('hidden');
    document.querySelector(".Info").classList.remove('hidden');

}

function ValidaçãoInfo() {
    let Inputs = document.querySelectorAll(".Info input");
    let ValidInput = 0;

    for (let i = 0; i < Inputs.length; i++) {
        if(Inputs[i].checkValidity()) {
            ValidInput++;
        }        
        
    }

    if (ValidInput === Inputs.length) {
        document.querySelector(".Info").classList.add('hidden');
        document.querySelector(".Perg-Quizz").classList.remove('hidden');
        TituloQuizz = Inputs[0].value;
        UrlQuizz = Inputs[1].value;
        PerguntasQuizz = Inputs[2].value;
        NiveisQuizz = Inputs[3].value;
        CriarPerguntas();
    }

    else {
        alert("Dados Inválidos! Preencha os dados corretamente!");
    }

}

function CriarPerguntas() {
    const mainPerg = document.querySelector(".Perg-Quizz");
    mainPerg.innerHTML = "<span>Crie suas perguntas</span>";

    for (let i = 1; i <= PerguntasQuizz; i++) {
        mainPerg.innerHTML += `<div class="Container">

        <h1>Pergunta ${i}</h1>
        <div class="setup perguntas">
            <input type="text" name="Texto da Pergunta" required minlength="20" maxlength="65" placeholder="Texto da pergunta">
            <input type="text" name="Cor da Pergunta" required maxlength="7" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" placeholder="Cor de fundo da pergunta">
        </div>

        <h1>Resposta correta</h1>
        <div class="setup perguntas">
            <input type="text" name="Resposta" required minlength="1" placeholder="Resposta correta">
            <input type="url" name="URL Resposta" required placeholder="URL da imagem">
        </div>

        <h1>Respostas incorretas</h1>
        <div class="setup perguntas">
            <input type="text" name="Resposta" required minlength="1" placeholder="Resposta incorreta 1">
            <input type="url" name="URL Resposta" placeholder="URL da imagem 1">
        </div>
        <br>
        <br>
        <div class="setup perguntas">
            <input type="text" name="Resposta" required minlength="1" placeholder="Resposta incorreta 2">
            <input type="url" name="URL Resposta" placeholder="URL da imagem 2">
        </div>
        <br>
        <br>
        <div class="setup perguntas">
            <input type="text" name="Resposta" required minlength="1" placeholder="Resposta incorreta 3">
            <input type="url" name="URL Resposta" placeholder="URL da imagem 3">
        </div>
    </div>`

        
    }

    mainPerg.innerHTML += `<button class="botao-criar" onclick="ValidaçãoPerguntas()">Prosseguir para criar níveis</button>`

}

function ValidaçãoPerguntas() {
    let Inputs = document.querySelectorAll(".Perg-Quizz input");
    let ValidInput = 0;

    for (let i = 0; i < Inputs.length; i++) {
        if(Inputs[i].checkValidity()) {
            ValidInput++;
        }        
        
    }

    if (ValidInput === Inputs.length) {
        document.querySelector(".Perg-Quizz").classList.add('hidden');
        document.querySelector(".Niveis-Quizz").classList.remove('hidden');
        CriarNiveis();
    }

    else {
        alert("Dados Inválidos! Preencha os dados corretamente!");
    }    

}

function CriarNiveis() {
    const mainNiveis = document.querySelector(".Niveis-Quizz");
    mainNiveis.innerHTML = `<span>Agora, decida os níveis</span>`;

    for (let i = 1; i <= NiveisQuizz; i++) {
        mainNiveis.innerHTML += `<div class="Container">

        <h1>Nível ${i}</h1>
        <div class="setup perguntas">
            <input type="text" name="Titulo do Nivel" required minlength="10"  placeholder="Título do nível">
            <input type="number" name="Porcentagem" required min="0" max="100" placeholder="% de acerto mínima">
            <input type="url" name="URL Nivel" required placeholder="URL da imagem do nível">
            <textarea name="Descrição" required rows="5" minlength="30" placeholder="Descrição do Nível"></textarea>
        </div>

    </div>`
        
    }

    mainNiveis.innerHTML += `<button class="botao-criar" onclick="ValidaçãoNiveis()">Finalizar Quizz</button>`;
}

function ValidaçãoNiveis() {


        document.querySelector(".Niveis-Quizz").classList.add('hidden');
        document.querySelector(".Pronto-Quizz").classList.remove('hidden');
        AgruparInfoQuizz();
   
}




function FinalizarQuizz() {

    const mainQuizzPronto = document.querySelector('.Pronto-Quizz');

    mainQuizzPronto.innerHTML = `
    <span>Seu quizz está pronto!</span>

    <div class="ImagemCriarQuizz">
        <img src="${UrlQuizz}">
        <div>${TituloQuizz}</div>
    </div>
    <div class="botao-reiniciar">Acessar Quizz</div>
    <div class="botao-voltar" onclick="BackHome()">Volte para home</div>`;

}

let ArrayPergTit = [];
let ArrayCorPerg = [];
let ArrayRespText = [];
let ArrayRespUrl = [];
let ArrayNivelTit = [];
let ArrayNivelUrl = [];
let ArrayNivelDesc = [];
let ArrayNivelPorc = [];

function AgruparInfoQuizz() {
    const PergTitulo = document.getElementsByName("Texto da Pergunta");
    const CorTitulo = document.getElementsByName("Cor da Pergunta");
    const RespTexto = document.getElementsByName("Resposta");
    const RespUrl = document.getElementsByName("URL Resposta");
    const NivelTitulo = document.getElementsByName("Titulo do Nivel");
    const NivelUrl = document.getElementsByName("URL Nivel");
    const NivelDesc = document.getElementsByName("Descrição");
    const NivelPorc = document.getElementsByName("Porcentagem");

    for (let i = 0; i < PergTitulo.length; i++) {
        ArrayPergTit.push(PergTitulo[i].value);
        
    }

    for (let i = 0; i < CorTitulo.length; i++) {
        ArrayCorPerg.push(CorTitulo[i].value);
        
    }

    for (let i = 0; i < RespTexto.length; i++) {
        ArrayRespText.push(RespTexto[i].value);
        
    }

    for (let i = 0; i < RespUrl.length; i++) {
        ArrayRespUrl.push(RespUrl[i].value);
        
    }

    for (let i = 0; i < NivelTitulo.length; i++) {
        ArrayNivelTit.push(NivelTitulo[i].value);
        
    }

    for (let i = 0; i < NivelUrl.length; i++) {
        ArrayNivelUrl.push(NivelUrl[i].value);
        
    }

    for (let i = 0; i < NivelDesc.length; i++) {
        ArrayNivelDesc.push(NivelDesc[i].value);
        
    }

    for (let i = 0; i < NivelPorc.length; i++) {
        ArrayNivelPorc.push(NivelPorc[i].value);
        
    }

    EnviarQuizz();

}

function EnviarQuizz() {

    QuizzCRIADO = {

        title: TituloQuizz,
        image: UrlQuizz,
        questions: [
            {
                title: ArrayPergTit[0],
                color: ArrayCorPerg[0],
                answers: [
                    {
                        text: ArrayRespText[0],
                        image: ArrayRespUrl[0],
                        isCorrectAnswer: true
                    },
                    {
                        text: ArrayRespText[1],
                        image: ArrayRespUrl[1],
                        isCorrectAnswer: false
                    },
                    {
                        text: ArrayRespText[2],
                        image: ArrayRespUrl[2],
                        isCorrectAnswer: false
                    },
                    {
                        text: ArrayRespText[3],
                        image: ArrayRespUrl[3],
                        isCorrectAnswer: false
                    }
                ]
            },

            {
                title: ArrayPergTit[1],
                color: ArrayCorPerg[1],
                answers: [
                    {
                        text: ArrayRespText[4],
                        image: ArrayRespUrl[4],
                        isCorrectAnswer: true
                    },
                    {
                        text: ArrayRespText[5],
                        image: ArrayRespUrl[5],
                        isCorrectAnswer: false
                    },
                    {
                        text: ArrayRespText[6],
                        image: ArrayRespUrl[6],
                        isCorrectAnswer: false
                    },
                    {
                        text: ArrayRespText[7],
                        image: ArrayRespUrl[7],
                        isCorrectAnswer: false
                    }
                ]
            },

            {
                title: ArrayPergTit[2],
                color: ArrayCorPerg[2],
                answers: [
                    {
                        text: ArrayRespText[8],
                        image: ArrayRespUrl[8],
                        isCorrectAnswer: true
                    },
                    {
                        text: ArrayRespText[9],
                        image: ArrayRespUrl[9],
                        isCorrectAnswer: false
                    },
                    {
                        text: ArrayRespText[10],
                        image: ArrayRespUrl[10],
                        isCorrectAnswer: false
                    },
                    {
                        text: ArrayRespText[11],
                        image: ArrayRespUrl[11],
                        isCorrectAnswer: false
                    }
                ]
            }

        ],

        levels: [
            {
                title: ArrayNivelTit[0],
                image: ArrayNivelUrl[0],
                text: ArrayNivelDesc[0],
                minValue: ArrayNivelPorc[0]
            },

            {
                title: ArrayNivelTit[1],
                image: ArrayNivelUrl[1],
                text: ArrayNivelDesc[1],
                minValue: ArrayNivelPorc[1]
            }

        ]


    }

    const promessa = axios.post('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes', QuizzCRIADO);
    promessa.then(MostrarQuizz);

}


function MostrarQuizz(IDnovoQuizz) {
    NovoID = IDnovoQuizz.data.id;
    GuardarQuizz(NovoID.toString());
    FinalizarQuizz();
}

function GuardarQuizz(id) {
    const ArmazLoc = localStorage.getItem("MeusQuizzes");
    let MeuQuizzConv = [];

    if (ArmazLoc) {
        MeuQuizzConv = JSON.parse(ArmazLoc);
    }

    MeuQuizzConv.push(id);
    MeuQuizzConv = JSON.stringify(MeuQuizzConv);
    localStorage.setItem("MeusQuizzes", MeuQuizzConv);

}

function BackHome() {
    document.querySelector(".Pronto Quizz").classList.add("hidden");
    document.querySelector(".corpo-inicioQuizz").classList.remove("hidden");
}

function checkURL(url) {
    const rule =
      '/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/';
    return rule.test(url);
  }