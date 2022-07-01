let TituloQuizz = "";
let UrlQuizz = "";
let PerguntasQuizz = 0;
let NiveisQuizz = 0;
let NovoID = null;

let QuizzCRIADO = {
    title: "",
    image: "",
    questions: [],
    levels: [],
};


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
        mainPerg += `<div class="Container">

        <h1>Pergunta ${i}</h1>
        <div class="setup perguntas">
            <input type="text" name="Texto-Pergunta-${i}" required minlength="20" maxlength="65" placeholder="Texto da pergunta">
            <input type="text" name="Cor-Pergunta-${i}" required maxlength="7" pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" placeholder="Cor de fundo da pergunta">
        </div>

        <h1>Resposta correta</h1>
        <div class="setup perguntas">
            <input type="text" name="Resposta-Certa-${i}" required minlength="1" placeholder="Resposta correta">
            <input type="url" name="Url-Certo-${i}" required placeholder="URL da imagem">
        </div>

        <h1>Respostas incorretas</h1>
        <div class="setup perguntas">
            <input type="text" name="Resposta-${i}-Errada-1" required minlength="1" placeholder="Resposta incorreta 1">
            <input type="url" name="Url-${i}-Errado-1" placeholder="URL da imagem 1">
        </div>
        <br>
        <br>
        <div class="setup perguntas">
            <input type="text" name="Resposta-${i}-Errada-2" required minlength="1" placeholder="Resposta incorreta 2">
            <input type="url" name="Url-${i}-Errado-2" placeholder="URL da imagem 2">
        </div>
        <br>
        <br>
        <div class="setup perguntas">
            <input type="text" name="Resposta-${i}-Errada-3" required minlength="1" placeholder="Resposta incorreta 3">
            <input type="url" name="Url-${i}-Errado-3" placeholder="URL da imagem 3">
        </div>
    </div>`

        
    }

    mainPerg += `<button class="botao-criar" onclick="ValidaçãoPerguntas()">Prosseguir para criar níveis</button>`

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
            <input type="text" name="Titulo-Nivel-${i}" required minlength="10"  placeholder="Título do nível">
            <input type="number" name="Min-Acerto-${i}" required min="0" max="100" placeholder="% de acerto mínima">
            <input type="url" name="Url-Nivel-${i}" required placeholder="URL da imagem do nível">
            <textarea rows="5" name="Descrição-Nivel-${i}" minlength="30" placeholder="Descrição do Nível"></textarea>
        </div>

    </div>`
        
    }

    mainNiveis.innerHTML += `<button class="botao-criar" onclick="ValidaçãoNiveis()">Finalizar Quizz</button>`;
}

function ValidaçãoNiveis() {
    let Inputs = document.querySelector(".Niveis-Quizz input");
    let ValidInput = 0;
    let ValidInputMin = 0;

    for (let i = 0; i < Inputs.length; i++) {
        if(Inputs[i].checkValidity()) {
            ValidInput++;
        }
        if (Inputs[i].value === '0') {
            ValidInputMin = 1;
        }
        
    }

    if (ValidInput === Inputs.length && ValidInputMin === 1) {
        document.querySelector(".Niveis-Quizz").classList.add('hidden');
        document.querySelector("Pronto-Quizz").classList.remove('hidden');
        AgruparInfoQuizz();
    }
    else {
        alert("Dados Inválidos! Preencha os dados corretamente!");
    }

}

function SalvarPerguntas () {
    
    for (let i = 0; i < PerguntasQuizz; i++) {
        
        const perguntas = {};

        perguntas.title = document.getElementsByName(`Texto-Pergunta-${i}`);
        perguntas.color = document.getElementsByName(`Cor-Pergunta-${i}`);

        perguntas.answers = [];

        const RespostaCerta = {
            text: document.getElementsByName(`Resposta-Certa-${i}`),
            image: document.getElementsByName(`Url-Certo-${i}`),
            isCorrectAnswer: true,
        };

        perguntas.answers.push(RespostaCerta);


        for (let index = 1; index <= 3; index++) {
            const RespostaErrada = {
                text: document.getElementsByName(`Resposta-${i}-Errada-${index}`),
                image: document.getElementsByName(`Url-${i}-Errado-${index}`),
                isCorrectAnswer: false,
            };

            if (RespostaErrada.text.length === 0) {
                continue;
            }
            
            perguntas.answers.push(RespostaErrada);
            
        }
        
        QuizzCRIADO.questions.push(perguntas);

        
    }


}

function SalvarNiveis() {
    for (let i = 1; i <= NiveisQuizz; i++) {

        const Nivel = {
            title: document.getElementsByName(`Titulo-Nivel-${i}`),
            minValue: parseInt(document.getElementsByName(`Min-Acerto-${i}`)),
            image: document.getElementsByName(`Url-Nivel-${i}`),
            text: document.getElementsByName(`Descrição-Nivel-${i}`),
        };

        QuizzCRIADO.levels.push(Nivel);
        
        
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
    <div class="botao-reiniciar">Acessar Quizz</div>
    <div class="botao-voltar">Volte para home</div>`

}

function AgruparInfoQuizz() {
    
    SalvarPerguntas();
    SalvarNiveis();

    const data = {
        title: TituloQuizz,
        image: UrlQuizz,
        questions: QuizzCRIADO.questions,
        levels: QuizzCRIADO.levels,
    };

    const promessa = axios.post('https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes',data);
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
