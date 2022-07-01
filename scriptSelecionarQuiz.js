
let quizzes =[];

const promise = axios.get("https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes");
promise.then(processarQuizzes);


function processarQuizzes(resposta){
    
    quizzes = resposta.data;
    renderizarTodosQuizzes()
}

function renderizarTodosQuizzes(){
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








