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

const MESSAGE_NOT_FOUND = {
    status: false,
    status_code: 404,
    development: 'Edvan Alves de Oliveira'
}

//Importando dados
const dados = require('./contatos.js')
const users = dados.contatos['whats-users'];

// Retorna tudo de todos
const getAllData = function () {
    let message = {
        status: true,
        status_code: 200,
        development: 'Edvan Alves de Oliveira',
        users: []
    }

    users.forEach(function (usuario) {
        message.users.push(usuario);
    })

    if (message.users.length) {
        return message;
    }
    else
        return MESSAGE_ERRO;
}

//Retorna um usuário com o número de telefone, função reutilizável
const getUserWithNumber = function (phoneNumber) {
    const user = users.find(usuario => usuario.number == phoneNumber);
    return user;
}

// Retorna dados do usuário
const getUserProfile = function (phoneNumber) {
    let message = {
        status: true,
        status_code: 200,
        development: 'Edvan Alves de Oliveira',
        user_profile: {}
    }

    const user = getUserWithNumber(phoneNumber);
    if (user) {
        message.user_profile.id = user.id;
        message.user_profile.phone_number = user.number;
        message.user_profile.name = user.account;
        message.user_profile.nickname = user.nickname;
        message.user_profile.registration_date = user['created-since'].start;
        message.user_profile.termination_date = user['created-since'].end;
        message.user_profile.profile_image = user['profile-image'];
        message.user_profile.background = user.background;
    } else
        return MESSAGE_NOT_FOUND;   // 404, Caso não tenha sido encontrado aquele número

    if (message.user_profile)
        return message  // 200 deu tudo certo
    else
        return MESSAGE_ERRO // 500 Alguma outra coisa deu errado
    //Desse jeito acho que nunca dá erro 500, só 404

}

// Retorna dados dos contatos associados com um usuário
const getContactList = function (phoneNumber) {
    let message = {
        status: true,
        status_code: 200,
        development: 'Edvan Alves de Oliveira',
        contact_list: []
    }
    const user = getUserWithNumber(phoneNumber);

    if (!user) {
        return MESSAGE_NOT_FOUND; //404, caso não tenha encontrado o usuário
    }

    user.contacts.forEach(function (item) { //item é o contato encontrado na lista
        let contato = {};
        contato.number = item.number;
        contato.name = item.name;
        contato.description = item.description;
        contato.image = item.image;
        //Nickname é um campo só de profile e não de contatos?
        message.contact_list.push(contato);
    })
    if (message.contact_list.length)
        return message  // 200 deu tudo certo
    else
        return MESSAGE_ERRO // 500 Alguma outra coisa deu errado
}

// Retorna todas as conversas de um usuário
const getUserMessages = function (phoneNumber) {
    let message = {
        status: true,
        status_code: 200,
        development: 'Edvan Alves de Oliveira',
        user_name: undefined,
        userChatMessages: []
        /*
        sender
        receiver
        content
        time
        */
    }

    const user = getUserWithNumber(phoneNumber); //Buscando usuário com o numero
    if (!user)
        return MESSAGE_NOT_FOUND;   //404 caso não tenha encontrado o usuário

    message.user_name = user.account;

    user.contacts.forEach(function (item_contact) {
        item_contact.messages.forEach(function (item_message) {
            // Estrutura para cada mensagem
            let txt_message = {
                sender: undefined,
                receiver: undefined,
                content: undefined,
                time: undefined
            }
            // Coletando o remetente
            txt_message.sender = item_message.sender;

            // Coletando o destinatário
            if (txt_message.sender == "me") {                // Caso seja uma mensagem do usuário
                txt_message.receiver = item_contact.name;
                txt_message.sender = message.user_name; //trocando o "me" pelo nome do usuário
            }
            else                                            // Caso seja uma mensagem do contato
                txt_message.receiver = user.name

            txt_message.content = item_message.content;
            txt_message.time = item_message.time;

            message.userChatMessages.push(txt_message);
        })
    })

    if (message.userChatMessages.length)
        return message  // 200 deu tudo certo
    else
        return MESSAGE_ERRO // 500 Alguma outra coisa deu errado
}

console.log(getUserMessages("11987876567"));


// Retorna todas as mensagens de um usuário com um contato
const getChats = function (/*Usuário,*/ /*Contato*/) { }

// Retorna mensagens com um filtro usando uma palavra chave
const searchWithKeyWord = function (/*Palavra-chave*/) { }

module.exports = {
    getAllData,
    getUserProfile,
    getContactList,
    getUserMessages,
    getChats,
    searchWithKeyWord
}