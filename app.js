/* *********************************************************************
* Objetivo: endPoints referente a API de estados e cidades
* Data: 15/09/2025
* Autor: Edvan Alves
* Versão: 1.0.0
*
* Observações: Instalação do Express, Cors, Body-Parser

* **********************************************************************/

/*********************************************************************** 
 * COMANDOS UTILIZADOS
 * 
 * Instalação do Express, Cors, Body-Parser:
 *  npm install express      --save
 *  npm install cors         --save
 *  npm install body-parser  --save
 * 
 * 
 * Instalação local quando baixar esse projeto:
 *  npm install
 * 
 /**********************************************************************
 //BIBLIOTECAS UTILIZADAS
 * 
 **********************************************************************/

//Import das dependências da API
const express = require('express');        // Responsável pela API
const cors = require('cors');              // Responsável pelas permissões da API (APP)
const bodyParser = require('body-parser');  // Responsável por gerenciar a chegada dos dados da API com o front

//Import do arquivo de Funções
const dados = require('./modulo/funcoes.js');

// Para definir a porta como do servidor atual ou colocamos uma porta local(8080)
const PORT = process.PORT || 8080
//process.PORT é essencial para nossa API rodar em servidor, ele que vai escolher a porta
//|| 8080 É nossa configuração padrão, caso não exista um servidor para decidir essa porta, importante para uso local


// Criando uma instância de uma classe do Express
const app = express();

//Configuração de permissões
app.use((request, response, next) => {
    response.header('Access-Controll-Allow-Origin', '*'); //Servidor de origem da API, pelo '*' é declarado que é acesso público
    response.header('Access-Controll-Allow-Methods', 'GET'); //Verbos permitidos na API, se for colocar o Post ficaria 'GET, POST'

    //Carrega as configurações no CORS da API
    app.use(cors());
    next()// Próximo, carregar os próximos endpoints
})


/*

    ENDPOINTS

*/

//1- Listar todos os dados de usuário independente do número
app.get('/v1/whatsapp/', function (request, response) {
    //Busca de todos usuários
    let users = dados.getAllData();

    //Retorna o statusCode
    response.status(users.status_code);

    //Retorna o JSON
    response.json(users);
})
//2- Listar todos os dados da conta do profile do usuário
app.get('/v1/whatsapp/usuario/:number', function (request, response) {
    let user = dados.getUserProfile(request.params.number);

    //Retorna o statusCode
    response.status(user.status_code);

    //Retorna o JSON
    response.json(user);
})

//3- Listar dados de contatos
app.get('/v1/whatsapp/contatos/:number', function (request, response) {
    let contactList = dados.getContactList(request.params.number)

    //Retorna o statusCode
    response.status(contactList.status_code);

    //Retorna o JSON
    response.json(contactList);
})

//4- Listar todas as mensagens de um contato
app.get('/v1/whatsapp/messages/:number', function (request, response) {
    let userMessages = dados.getUserMessages(request.params.number);

    //Retorna o statusCode
    response.status(userMessages.status_code);

    //Retorna o JSON
    response.json(userMessages);
})

//5- Listar uma conversa de um usuário com um contato (PRECISA DE QUERY)
app.get('/v1/whatsapp/messages/chat-messages', function (request, response){
    let userNumber = request.query.userNumber;
    let contactNumber = request.query.contactNumber;

    messageLog = dados.getChatMessages(userNumber, contactNumber);

    //Retorna o statusCode
    response.status(messageLog.status_code);

    //Retorna o JSON
    response.json(messageLog);
})



//6- Busca de mensagens com um contato utilizando filtro
app.get('/v1/whatsapp/messages/search-by-keyword', function(request, response){
    let userNumber = request.query.userNumber;
    let contactNumber = request.query.contactNumber;
    let keyWord = request.query.keyWord
    
    messageLog = dados.searchWithKeyWord(userNumber, contactNumber, keyWord);

    //Retorna o statusCode
    response.status(messageLog.status_code);

    //Retorna o JSON
    response.json(messageLog);
})


app.listen(PORT, function(){
    console.log('Hello world! \n API está operante, escutante e funcionante!');
    console.log('Para abrir localmente é só ir em http://localhost:8080/v1/whatsapp/')
})