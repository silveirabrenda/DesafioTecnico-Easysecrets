#language: pt

Funcionalidade: Adicionar produto ao carrinho

  Como um cliente da loja
  Eu quero adicionar produtos ao carrinho
  Para realizar uma compra


  Cenário: Adicionar um produto ao carrinho

    Dado que o usuário está logado na loja

    Quando seleciona o produto "Samsung galaxy s6"
    E clica no botão "Add to cart"

    Então o produto deve ser adicionado ao carrinho