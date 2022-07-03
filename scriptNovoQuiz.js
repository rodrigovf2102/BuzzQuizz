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
            <input type="text" name="RespostaC" required minlength="1" placeholder="Resposta correta">
            <input type="url" name="URL RespostaC" required placeholder="URL da imagem">
        </div>

        <h1>Respostas incorretas</h1>
        <div class="setup perguntas">
            <input type="text" name="RespostaE1" required minlength="1" placeholder="Resposta incorreta 1">
            <input type="url" name="URL RespostaE1" placeholder="URL da imagem 1">
        </div>
        <br>
        <br>
        <div class="setup perguntas">
            <input type="text" name="RespostaE2" required minlength="1" placeholder="Resposta incorreta 2">
            <input type="url" name="URL RespostaE2" placeholder="URL da imagem 2">
        </div>
        <br>
        <br>
        <div class="setup perguntas">
            <input type="text" name="RespostaE3" required minlength="1" placeholder="Resposta incorreta 3">
            <input type="url" name="URL RespostaE3" placeholder="URL da imagem 3">
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

    let InputMain = document.querySelectorAll('.Niveis-Quizz input');
    let InputC = 0
    let InputZero = 0;

    for (let i = 0; i < InputMain.length; i++) {
        if (InputMain[i].checkValidity()) {
            InputC++;
        }
        
    }

    for (let i = 0; i < InputMain.length; i++) {
        if (InputMain[i].value === '0') {
            InputZero = 1;
            
        }
        
    }

    if (InputC === InputMain.length && InputZero === 1) {
        document.querySelector(".Niveis-Quizz").classList.add('hidden');
        document.querySelector(".Pronto-Quizz").classList.remove('hidden');
        AgruparInfoQuizz();
    }

    else {
        alert("Dados Inválidos! Preencha os dados corretamente!");
    }

}




function FinalizarQuizz() {

    const mainQuizzPronto = document.querySelector('.Pronto-Quizz');

    mainQuizzPronto.innerHTML = `
    <span>Seu quizz está pronto!</span>

    <div class="ImagemCriarQuizz">
        <img src="${UrlQuizz}">
        <div>${TituloQuizz}</div>
    </div>
    <div class="botao-reiniciar" onclick="entrarNoQuizz(this)">Acessar Quizz</div>
    <div class="botao-voltar" onclick="ReloadPage()">Volte para home</div>`;

}

let ArrayPergTit = [];
let ArrayCorPerg = [];
let ArrayRespTextC = [];
let ArrayRespUrlC = [];
let ArrayRespTextE1 = [];
let ArrayRespUrlE1 = [];
let ArrayRespTextE2 = [];
let ArrayRespUrlE2 = [];
let ArrayRespTextE3 = [];
let ArrayRespUrlE3 = [];
let ArrayNivelTit = [];
let ArrayNivelUrl = [];
let ArrayNivelDesc = [];
let ArrayNivelPorc = [];

let ArrayQuizz = {
    title: TituloQuizz,
    image: UrlQuizz,
    questions: [],
    levels: []
}

function AgruparInfoQuizz() {
    const PergTitulo = document.getElementsByName("Texto da Pergunta");
    const CorTitulo = document.getElementsByName("Cor da Pergunta");
    const RespTextoC = document.getElementsByName("RespostaC");
    const RespUrlC = document.getElementsByName("URL RespostaC");
    const RespTextoE1 = document.getElementsByName("RespostaE1");
    const RespUrlE1 = document.getElementsByName("URL RespostaE1");
    const RespTextoE2 = document.getElementsByName("RespostaE2");
    const RespUrlE2 = document.getElementsByName("URL RespostaE2");
    const RespTextoE3 = document.getElementsByName("RespostaE3");
    const RespUrlE3 = document.getElementsByName("URL RespostaE3");

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

    for (let i = 0; i < RespTextoC.length; i++) {
        ArrayRespTextC.push(RespTextoC[i].value);
        
    }

    for (let i = 0; i < RespUrlC.length; i++) {
        ArrayRespUrlC.push(RespUrlC[i].value);
        
    }

    for (let i = 0; i < RespTextoE1.length; i++) {
        ArrayRespTextE1.push(RespTextoE1[i].value);
        
    }

    for (let i = 0; i < RespUrlE1.length; i++) {
        ArrayRespUrlE1.push(RespUrlE1[i].value);
        
    }

    for (let i = 0; i < RespTextoE2.length; i++) {
        ArrayRespTextE2.push(RespTextoE2[i].value);
        
    }

    for (let i = 0; i < RespUrlE2.length; i++) {
        ArrayRespUrlE2.push(RespUrlE2[i].value);
        
    }

    for (let i = 0; i < RespTextoE3.length; i++) {
        ArrayRespTextE3.push(RespTextoE3[i].value);
        
    }

    for (let i = 0; i < RespUrlE3.length; i++) {
        ArrayRespUrlE3.push(RespUrlE3[i].value);
        
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
                        text: ArrayRespTextC[0],
                        image: ArrayRespUrlC[0],
                        isCorrectAnswer: true
                    },
                    {
                        text: ArrayRespTextE1[0],
                        image: ArrayRespUrlE1[0],
                        isCorrectAnswer: false
                    },
                    {
                        text: ArrayRespTextE2[0],
                        image: ArrayRespUrlE2[0],
                        isCorrectAnswer: false
                    },
                    {
                        text: ArrayRespTextE3[0],
                        image: ArrayRespUrlE3[0],
                        isCorrectAnswer: false
                    }
                ]
            },

            {
                title: ArrayPergTit[1],
                color: ArrayCorPerg[1],
                answers: [
                    {
                        text: ArrayRespTextC[1],
                        image: ArrayRespUrlC[1],
                        isCorrectAnswer: true
                    },
                    {
                        text: ArrayRespTextE1[1],
                        image: ArrayRespUrlE1[1],
                        isCorrectAnswer: false
                    },
                    {
                        text: ArrayRespTextE2[1],
                        image: ArrayRespUrlE2[1],
                        isCorrectAnswer: false
                    },
                    {
                        text: ArrayRespTextE3[1],
                        image: ArrayRespUrlE3[1],
                        isCorrectAnswer: false
                    }
                ]
            },

            {
                title: ArrayPergTit[2],
                color: ArrayCorPerg[2],
                answers: [
                    {
                        text: ArrayRespTextC[2],
                        image: ArrayRespUrlC[2],
                        isCorrectAnswer: true
                    },
                    {
                        text: ArrayRespTextE1[2],
                        image: ArrayRespUrlE1[2],
                        isCorrectAnswer: false
                    },
                    {
                        text: ArrayRespTextE2[2],
                        image: ArrayRespUrlE2[2],
                        isCorrectAnswer: false
                    },
                    {
                        text: ArrayRespTextE3[2],
                        image: ArrayRespUrlE3[2],
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

function ReloadPage() {
    window.location.reload();
}