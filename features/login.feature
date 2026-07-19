#language: pt

Funcionalidade: Login de usuário

  Como um usuário cadastrado
  Eu quero realizar login
  Para acessar as funcionalidades da loja


  Cenário: Realizar login com credenciais válidas

    Dado que o usuário possui uma conta cadastrada

    Quando acessa a página de login
    E informa suas credenciais válidas
    E confirma o login

    Então o usuário deve acessar a página inicial da loja