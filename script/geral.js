const API_URL = 'https://soundgarden-api.vercel.app/events';

const formCadastroEvento = document.querySelector('#cadastro-evento');

formCadastroEvento.addEventListener('submit', async (event) => {
// evitar que a página seja recarregada    
event.preventDefault();

const inputNome = document.getElementById("nome");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");
const inputBanner = document.getElementById("banner");

const fullDateTime = new Date(inputData.value);

const novoEventoObj = {
    "name": inputNome.value,
    "poster": inputBanner.value,
    "attractions": inputAtracoes.value.split(","),
    "description": inputDescricao.value,
    "scheduled": fullDateTime.toISOString(),
    "number_tickets": inputLotacao.value
};

//alert(inputNome.value);

const novoEventoJSON = JSON.stringify(novoEventoObj);
//Cadastra o evento
const resposta = fetch(API_URL, {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json"
    },
    body: novoEventoJSON

}).then((Response) => {
    return Response.json()
}).then((ResponseOBJ) => {
    console.log(ResponseOBJ)
}).then(() => {
    alert('Evento Criado com Sucesso!');
    window.location.href = './admin.html';
  })
  .catch(err => {
    alert('Cadastro não efetuado!')
    console.log(err);
  });

console.log(resposta)
});