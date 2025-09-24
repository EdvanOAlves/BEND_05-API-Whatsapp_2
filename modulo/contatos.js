/* *********************************************************************
* Objetivo: Obter uma lista de contatos com suas respectivas mensagens
* Data: 24/09/2025  
* Autor: Edvan Alves
* **********************************************************************/


const contatos = {
  "whats-users":
    [
      {
        "id": 1,
        "account": "Ricardo da Silva",
        "nickname": "Ricky",
        "created-since":
        {
          "start": "2015-08-23",
          "end": "null"
        }
        ,
        "profile-image": "11987876567.png",
        "number": "11987876567",
        "background": "#fccc5b",
        "contacts":
          [
            {
              "name": "Ana Maria",
              "number": "26999999963",
              "description": "Frontend Developer",
              "image": "26999999963.png",
              "messages": [
                {
                  "sender": "me",
                  "content": "Hello Leonid, how are you doing today?",
                  "time": "14:20"
                },
                {
                  "sender": "Ana Maria",
                  "content": "Hi, I'm doing fine. Thanks for asking.",
                  "time": "14:25"
                },
                {
                  "sender": "me",
                  "content": "Great to hear that. Do you have any plans for the weekend?",
                  "time": "14:30"
                },
                {
                  "sender": "Ana Maria",
                  "content": "Not yet. I'm thinking about going to the beach. What about you?",
                  "time": "14:35"
                }
              ]
            },
            {
              "name": "Jane Smith",
              "number": "269999799601",
              "description": "UI Designer",
              "image": "269999799601.png",
              "messages": [
                {
                  "sender": "me",
                  "content": "Hi Jane, how's it going?",
                  "time": "09:00"
                },
                {
                  "sender": "Jane Smith",
                  "content": "I'm good, thanks. How about you?",
                  "time": "09:05"
                },
                {
                  "sender": "me",
                  "content": "I'm doing well. By the way, have you seen the latest designs for the new project?",
                  "time": "09:10"
                },
                {
                  "sender": "Jane Smith",
                  "content": "Yes, I have. They look great!",
                  "time": "09:15"
                }
              ]
            },
            {
              "name": "Mark Johnson",
              "number": "26999999964",
              "description": "Backend Developer",
              "image": "26999999964.png",
              "messages": [
                {
                  "sender": "me",
                  "content": "Hi Mark, how's everything going?",
                  "time": "13:00"
                },
                {
                  "sender": "Mark Johnson",
                  "content": "Everything's going well. How about you?",
                  "time": "13:05"
                },
                {
                  "sender": "me",
                  "content": "I'm doing fine. By the way, do you have any updates on the API development?",
                  "time": "13:10"
                },
                {
                  "sender": "Mark Johnson",
                  "content": "Yes, we're making good progress. We should be able to deliver it on schedule.",
                  "time": "13:15"
                }
              ]
            },
            {
              "name": "Sarah Lee",
              "number": "26999999965",
              "description": "Software Engineer",
              "image": "26999999965.png",
              "messages": [
                {
                  "sender": "me",
                  "content": "Hey Sarah, como estão as coisas?",
                  "time": "10:00"
                },
                {
                  "sender": "Sarah Lee",
                  "content": "Ei! Tudo bem por aqui e contigo?",
                  "time": "10:05"
                },
                {
                  "sender": "me",
                  "content": "Estou bem também! O que tem feito ultimamente?",
                  "time": "10:10"
                },
                {
                  "sender": "Sarah Lee",
                  "content": "Tenho trabalhado bastante, mas está tudo bem. E você?",
                  "time": "10:15"
                }
              ]
            },
            {
              "name": "John Doe",
              "number": "26999999967",
              "description": "Designer",
              "image": "26999999967.png",
              "messages": [
                {
                  "sender": "John Doe",
                  "content": "Oi, tudo bem?",
                  "time": "11:00"
                },
                {
                  "sender": "me",
                  "content": "Tudo ótimo! E contigo?",
                  "time": "11:05"
                },
                {
                  "sender": "John Doe",
                  "content": "Estou bem também! Viu aquela nova ferramenta de design?",
                  "time": "11:10"
                },
                {
                  "sender": "John Doe",
                  "content": "Acho que você vai gostar!",
                  "time": "11:10"
                }
              ]
            },
            {
              "name": "Julia Smith",
              "number": "26999999968",
              "description": "Product Manager",
              "image": "26999999968.png",
              "messages": [
                {
                  "sender": "Julia Smith",
                  "content": "Oi, como está indo o projeto?",
                  "time": "12:00"
                },
                {
                  "sender": "me",
                  "content": "Está indo bem, estamos quase terminando a fase de testes!",
                  "time": "12:05"
                },
                {
                  "sender": "Julia Smith",
                  "content": "Ótimo! E como está o time?",
                  "time": "12:10"
                },
                {
                  "sender": "me",
                  "content": "Todos estão trabalhando duro e focados no objetivo!",
                  "time": "12:15"
                }
              ]
            },
            {
              "name": "Max Kellerman",
              "number": "26999999969",
              "description": "Marketing Manager",
              "image": "26999999969.png",
              "messages": [
                {
                  "sender": "Max Kellerman",
                  "content": "Ei! Vi que vocês estão com uma nova campanha no ar!",
                  "time": "13:00"
                },
                {
                  "sender": "me",
                  "content": "Sim, estamos testando algumas coisas novas!",
                  "time": "13:05"
                },
                {
                  "sender": "Max Kellerman",
                  "content": "Bom trabalho, fico feliz em ver vocês tentando coisas novas!",
                  "time": "13:10"
                }
              ]
            }
          ]
      },
      {
        "id": 2,
        "account": "Bernardo Xavier Ribeiro",
        "nickname": "BeeR",
        "created-since":
        {
          "start": "2020-02-13",
          "end": "null"
        }
        ,
        "profile-image": "11966578996.png",
        "number": "11966578996",
        "background": "#fccc5b",
        "contacts":
          [
            {
              "name": "José Maria da Silva",
              "number": "26999999910",
              "description": "Developer",
              "image": "26999999910.png",
              "messages": [
                {
                  "sender": "me",
                  "content": "Hello papa, how are you doing today?",
                  "time": "14:20"
                },
                {
                  "sender": "José Maria da Silva",
                  "content": "Hi, I'm doing fine. Thanks for asking.",
                  "time": "14:25"
                },
                {
                  "sender": "me",
                  "content": "Great to hear that. Do you have any plans for the weekend?",
                  "time": "14:30"
                },
                {
                  "sender": "José Maria da Silva",
                  "content": "Not yet. I'm thinking about going to the beach. What about you?",
                  "time": "14:35"
                }
              ]
            },
            {
              "name": "John Guttemberg",
              "number": "26999999911",
              "description": "Free",
              "image": "269999999110.png",
              "messages": [
                {
                  "sender": "me",
                  "content": "Hi John, how's it going?",
                  "time": "09:00"
                },
                {
                  "sender": "John Guttemberg",
                  "content": "I'm good, thanks. How about you?",
                  "time": "09:05"
                },
                {
                  "sender": "me",
                  "content": "I'm doing well. By the way, have you seen the latest designs for the new project?",
                  "time": "09:10"
                },
                {
                  "sender": "John Guttemberg",
                  "content": "Yes, I have. They look great!",
                  "time": "09:15"
                }
              ]
            },
            {
              "name": "George Mikael",
              "number": "26999999912",
              "description": "Backend Developer",
              "image": "26999999912.png",
              "messages": [
                {
                  "sender": "me",
                  "content": "Hi Mark, how's everything going?",
                  "time": "13:00"
                },
                {
                  "sender": "George Mikael",
                  "content": "Everything's going well. How about you?",
                  "time": "13:05"
                },
                {
                  "sender": "me",
                  "content": "I'm doing fine. By the way, do you have any updates on the API development?",
                  "time": "13:10"
                },
                {
                  "sender": "George Mikael",
                  "content": "Yes, we're making good progress. We should be able to deliver it on schedule.",
                  "time": "13:15"
                }
              ]
            },
            {
              "name": "Cristian Lee",
              "number": "26999999913",
              "description": "Software Engineer",
              "image": "26999999912.png",
              "messages": [
                {
                  "sender": "me",
                  "content": "Hey Sarah, como estão as coisas?",
                  "time": "10:00"
                },
                {
                  "sender": "Cristian Lee",
                  "content": "Ei! Tudo bem por aqui e contigo?",
                  "time": "10:05"
                },
                {
                  "sender": "me",
                  "content": "Estou bem também! O que tem feito ultimamente?",
                  "time": "10:10"
                },
                {
                  "sender": "Cristian Lee",
                  "content": "Tenho trabalhado bastante, mas está tudo bem. E você?",
                  "time": "10:15"
                }
              ]
            },
            {
              "name": "Jonny Devited",
              "number": "26999999914",
              "description": "Designer",
              "image": "26999999914.png",
              "messages": [
                {
                  "sender": "Jonny Devited",
                  "content": "Oi, tudo bem?",
                  "time": "11:00"
                },
                {
                  "sender": "me",
                  "content": "Tudo ótimo! E contigo?",
                  "time": "11:05"
                },
                {
                  "sender": "Jonny Devited",
                  "content": "Estou bem também! Viu aquela nova ferramenta de design?",
                  "time": "11:10"
                },
                {
                  "sender": "Jonny Devited",
                  "content": "Acho que você vai gostar!",
                  "time": "11:10"
                }
              ]
            },
            {
              "name": "Shita Ling",
              "number": "26999999916",
              "description": "Product Manager",
              "image": "26999999916.png",
              "messages": [
                {
                  "sender": "Shita Ling",
                  "content": "Oi, como está indo o projeto?",
                  "time": "12:00"
                },
                {
                  "sender": "me",
                  "content": "Está indo bem, estamos quase terminando a fase de testes!",
                  "time": "12:05"
                },
                {
                  "sender": "Shita Ling",
                  "content": "Ótimo! E como está o time?",
                  "time": "12:10"
                },
                {
                  "sender": "me",
                  "content": "Todos estão trabalhando duro e focados no objetivo!",
                  "time": "12:15"
                }
              ]
            },
            {
              "name": "Nilsen Silva",
              "number": "26999999917",
              "description": "Marketing Manager",
              "image": "26999999917.png",
              "messages": [
                {
                  "sender": "Nilsen Silva",
                  "content": "Ei! Vi que vocês estão com uma nova campanha no ar!",
                  "time": "13:00"
                },
                {
                  "sender": "me",
                  "content": "Sim, estamos testando algumas coisas novas!",
                  "time": "13:05"
                },
                {
                  "sender": "Nilsen Silva",
                  "content": "Bom trabalho, fico feliz em ver vocês tentando coisas novas!",
                  "time": "13:10"
                }
              ]
            }
          ]
      },
      {
        "id": 3,
        "account": "Sandy Wilstern",
        "nickname": "Sand",
        "created-since":
        {
          "start": "2017-05-11",
          "end": "null"
        }
        ,
        "profile-image": "11955577796.png",
        "number": "11955577796",
        "background": "#cc5bfc",
        "contacts":
          [
            {
              "name": "Peter Wilsen",
              "number": "26999999920",
              "description": "Engineer",
              "image": "26999999920.png",
              "messages": [
                {
                  "sender": "me",
                  "content": "Hey Sarah, como estão as coisas?",
                  "time": "10:00"
                },
                {
                  "sender": "Peter Wilsen",
                  "content": "Ei! Tudo bem por aqui e contigo?",
                  "time": "10:05"
                },
                {
                  "sender": "me",
                  "content": "Estou bem também! O que tem feito ultimamente?",
                  "time": "10:10"
                },
                {
                  "sender": "Peter Wilsen",
                  "content": "Tenho trabalhado bastante, mas está tudo bem. E você?",
                  "time": "10:15"
                }
              ]
            },
            {
              "name": "Jonny Devited",
              "number": "26999999921",
              "description": "Designer",
              "image": "26999999921.png",
              "messages": [
                {
                  "sender": "Jonny Devited",
                  "content": "Oi, tudo bem?",
                  "time": "11:00"
                },
                {
                  "sender": "me",
                  "content": "Tudo ótimo! E contigo?",
                  "time": "11:05"
                },
                {
                  "sender": "Jonny Devited",
                  "content": "Estou bem também! Viu aquela nova ferramenta de design?",
                  "time": "11:10"
                },
                {
                  "sender": "Jonny Devited",
                  "content": "Acho que você vai gostar!",
                  "time": "11:10"
                }
              ]
            },
            {
              "name": "Franklin Silva",
              "number": "26999999922",
              "description": "Product Manager",
              "image": "26999999922.png",
              "messages": [
                {
                  "sender": "Franklin Silva",
                  "content": "Oi, como está indo o projeto?",
                  "time": "12:00"
                },
                {
                  "sender": "me",
                  "content": "Está indo bem, estamos quase terminando a fase de testes!",
                  "time": "12:05"
                },
                {
                  "sender": "Franklin Silva",
                  "content": "Ótimo! E como está o time?",
                  "time": "12:10"
                },
                {
                  "sender": "me",
                  "content": "Todos estão trabalhando duro e focados no objetivo!",
                  "time": "12:15"
                }
              ]
            },
            {
              "name": "Catarina Sousa",
              "number": "26999999923",
              "description": "Marketing Manager",
              "image": "26999999923.png",
              "messages": [
                {
                  "sender": "Catarina Sousa",
                  "content": "Ei! Vi que vocês estão com uma nova campanha no ar!",
                  "time": "13:00"
                },
                {
                  "sender": "me",
                  "content": "Sim, estamos testando algumas coisas novas!",
                  "time": "13:05"
                },
                {
                  "sender": "Catarina Sousa",
                  "content": "Bom trabalho, fico feliz em ver vocês tentando coisas novas!",
                  "time": "13:10"
                }
              ]
            }
          ]
      },
      {
        "id": 4,
        "account": "Jonathan Xavier",
        "nickname": "Joe",
        "created-since":
        {
          "start": "2023-03-11",
          "end": "null"
        }
        ,
        "profile-image": "1194457796.png",
        "number": "1194457796",
        "background": "#c00bfc",
        "contacts":
          [
            {
              "name": "Wally Gator",
              "number": "26999999930",
              "description": "Free",
              "image": "26999999930.png",
              "messages": [
                {
                  "sender": "me",
                  "content": "Hey Sarah, como estão as coisas?",
                  "time": "10:00"
                },
                {
                  "sender": "Wally Gator",
                  "content": "Ei! Tudo bem por aqui e contigo?",
                  "time": "10:05"
                },
                {
                  "sender": "me",
                  "content": "Estou bem também! O que tem feito ultimamente?",
                  "time": "10:10"
                },
                {
                  "sender": "Wally Gator",
                  "content": "Tenho trabalhado bastante, mas está tudo bem. E você?",
                  "time": "10:15"
                }
              ]
            }
          ]
      }
    ]
}

module.exports = {
  contatos
}



