#language: pt

Funcionalidade: Cadastro de usuário

  Como um novo cliente
  Eu quero criar uma conta
  Para poder acessar a loja


  Cenário: Cadastrar um novo usuário com sucesso

    Dado que o usuário acessa a página de cadastro

    Quando informa um nome de usuário válido
    E informa uma senha válida
    E confirma o cadastro

    Então uma mensagem de cadastro realizado com sucesso deve ser exibida