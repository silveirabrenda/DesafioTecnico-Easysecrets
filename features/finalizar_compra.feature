#language: pt

Funcionalidade: Finalizar compra

  Como um cliente da loja
  Eu quero finalizar meu pedido
  Para concluir uma compra


  Cenário: Finalizar compra com dados válidos

    Dado que o usuário possui um produto no carrinho

    Quando acessa a opção "Place order"
    E preenche os dados de compra
    E confirma a compra

    Então uma mensagem de confirmação da compra deve ser exibida