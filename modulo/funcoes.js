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

// Retorna um contato de um usuário, utilizando do número desse usuário e o número desse contato, função reutilizável
const getContactWithNumber = function (userNumber, contactNumber) {
    const user = getUserWithNumber(userNumber);
    let contato;
    user.contacts.forEach(function (item) {
        if (item.number == contactNumber)
            contato = item
    })
    return contato
}
// TODO: Colocar um if else aqui para retornar o false em not found?
// Talvez seja redundante porque undefined faz a mesma coisa




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
        user_number: undefined,
        user_nickname: undefined,
        user_image: undefined,
        contact_message_log: []
    }

    const user = getUserWithNumber(phoneNumber); //Buscando usuário com o numero
    if (!user)
        return MESSAGE_NOT_FOUND;   //404 caso não tenha encontrado o usuário

    message.user_name = user.account;
    message.user_number = user.number;
    message.user_nickname = user.nickname;
    message.user_image = user.profile_image;


    user.contacts.forEach(function (item) {
        message.contact_message_log.push(item)
    })

    if (message.contact_message_log.length)
        return message  // 200 deu tudo certo
    else
        return MESSAGE_ERRO // 500 Alguma outra coisa deu errado
}


// Retorna todas as mensagens de um usuário com um contato
const getChatMessages = function (usuarioNumber, contatoNumber) {
    let message = { //estrutura da mensagem
        status: true,
        status_code: 200,
        development: 'Edvan Alves de Oliveira',
        user_name: undefined,
        user_number: undefined,
        user_nickname: undefined,
        user_image: undefined,
        contact_name: undefined,
        contact_number: undefined,
        contact_image: undefined,
        chat_messages: []
    }
    const user = getUserWithNumber(usuarioNumber);  //Buscando usuário
    if (!user)
        return MESSAGE_NOT_FOUND; //404, caso não tenha encontrado o usuário

    // Coletando dados do usuário
    message.user_name = user.account;
    message.user_number = user.number;
    message.user_nickname = user.nickname;
    message.user_image = user['profile-image'];

    const contato = getContactWithNumber(usuarioNumber, contatoNumber); //Buscando contato
    if (!contato)
        return MESSAGE_NOT_FOUND; //404, caso não tenha encontrado o contato

    // Coletando dados do contato
    message.contact_name = contato.name;
    message.contact_number = contato.number;
    message.contact_image = contato.image;
    message.chat_messages = contato.messages;   // Mensagens

    if (message.chat_messages.length)
        return message  // 200 deu tudo certo
    else
        return MESSAGE_ERRO // 500 Alguma outra coisa deu errado
}

// Retorna mensagens com um contato específico que contém uma palavra chave
const searchWithKeyWord = function (usuarioNumber, contatoNumber, keyWord) {
    let message = { //estrutura da mensagem
        status: true,
        status_code: 200,
        development: 'Edvan Alves de Oliveira',
        user_name: undefined,
        user_number: undefined,
        user_nickname: undefined,
        user_image: undefined,
        contact_name: undefined,
        contact_number: undefined,
        contact_image: undefined,
        filtered_messages: []
    }

    const user = getUserWithNumber(usuarioNumber);  //Buscando usuário
    if (!user)
        return MESSAGE_NOT_FOUND; //404, caso não tenha encontrado o usuário

    // Coletando dados do usuário
    message.user_name = user.account;
    message.user_number = user.number;
    message.user_nickname = user.nickname;
    message.user_image = user['profile-image'];

    const contato = getContactWithNumber(usuarioNumber, contatoNumber); //Buscando contato
    if (!contato)
        return MESSAGE_NOT_FOUND; //404, caso não tenha encontrado o contato
    // Coletando dados do contato
    message.contact_name = contato.name;
    message.contact_number = contato.number;
    message.contact_image = contato.image;

    //Filtrando mensagens correspondentes a palavra chave
    message.filtered_messages = contato.messages.filter(message => message.content.includes(keyWord))

    if (message.filtered_messages)
        return message;  // 200 deu tudo certo
    else
        return MESSAGE_ERRO; // 500 Alguma outra coisa deu errado
}



module.exports = {
    getAllData,
    getUserProfile,
    getContactList,
    getUserMessages,
    getChatMessages,
    searchWithKeyWord
}