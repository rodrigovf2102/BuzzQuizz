
let quizzes =[];

const promise = axios.get("https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes");
promise.then(processarQuizzes);


function processarQuizzes(resposta){
    
    quizzes = resposta.data;
    renderizarTodosQuizzes()
}

function renderizarTodosQuizzes(){
    checkMeusQuizzes();

    let elemento = document.querySelector(".TodosOsQuizz");
    elemento.innerHTML = "<div>Todos os Quizzes</div>";
    console.log(quizzes,quizzes.length);
    for(let i=0;i<quizzes.length;i++){
        elemento.innerHTML +=  
        `<div class="ImagemQuizz" onclick="entrarNoQuizz(this)">
            <img src="${quizzes[i].image}">
            <div>${quizzes[i].title}</div>
        </div>`
    }
    
}

function checkMeusQuizzes() {
    const ArmazLoc = localStorage.getItem("MeusQuizzes");
    const UserQuizzes = document.querySelector('.SeusQuizzCriado');

    if (ArmazLoc) {
        document.querySelector('.SeusQuizzCriado').classList.remove('hidden');
        document.querySelector('.SeusQuizz').classList.add('hidden');

        UserQuizzes.innerHTML = `<div class="SeusQuizzCriadoTopo">
        <div>Seus Quizzes</div>
        <div>+</div>
    </div>`;

        PegarUserQuizzes(ArmazLoc);
    }
    else {
        document.querySelector('.SeusQuizz').classList.remove('hidden');
    }
}

function PegarUserQuizzes(ArmazLoc) {
    ArmazLoc = JSON.parse(ArmazLoc);
    for (let i = 0; i < ArmazLoc.length; i++) {
    
        const resposta = axios.get(`https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/${ArmazLoc[i]}`);
        resposta.then(renderizarUserQuizzes);
        
    }

}

function renderizarUserQuizzes(ms) {
    const QuizzUser = document.querySelector('.SeusQuizzCriado');
    const dados = ms.data;

    QuizzUser.innerHTML += `<div class="ImagemQuizz">
    <img src="${dados.image}">
    <div>${dados.title}</div>
</div>`

}

function entrarNoQuizz(elemento){
    const quizzTitulo = elemento.querySelector("div").innerHTML.toString();
    for(let i=0;i<quizzes.length;i++){
        if(quizzTitulo === quizzes[i].title){
            quizz = quizzes[i];
        }
    }
    reiniciarQuizz();
    document.querySelector(".corpo-inicioQuizz").classList.add("hidden");
    document.querySelector(".ResponderQuiz").classList.remove("hidden");
}








