/* *********************************************************************
* Objetivo: Arquivo de funções para gerenciar a API de contatos e mensagens
* Data: 24/09/2025
* Autor: Edvan Alves
* Versão: 1.0.0
*
* **********************************************************************/

/***********************************************************************/
//COMANDOS UTILIZADOS


/**********************************************************************/
//BIBLIOTECAS UTILIZADAS
/**********************************************************************/

const MESSAGE_ERRO = {
    status: false,
    status_code: 500,
    development: 'Edvan Alves de Oliveira'
};

//Importando dados
const dados = require('./contatos.js')

// Retorna tudo de todos, Mark Zuckerberg quem pediu
const getAllData = function (){}

// Retorna dados do usuário
const getUserProfile = function(/*Usuário*/){}

// Retorna dados dos contatos associados com um usuário
const getContactList = function(/*Usuário*/){}

// Retorna todas as conversas de um usuário
const getUserMessages = function(/*Usuário*/){}

// Retorna todas as mensagens de um usuário com um contato
const getChats = function(/*Usuário,*/ /*Contato*/){}

// Retorna mensagens com um filtro usando uma palavra chave
const searchWithKeyWord = function(/*Palavra-chave*/){}