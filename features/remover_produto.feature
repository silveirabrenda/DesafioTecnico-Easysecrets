#language: pt

Funcionalidade: Remover produto do carrinho

  Como um cliente da loja
  Eu quero remover produtos do carrinho
  Para gerenciar meus produtos selecionados


  Cenário: Remover um produto do carrinho

    Dado que o usuário possui o produto "Samsung galaxy s6" no carrinho

    Quando acessa o carrinho de compras
    E clica no botão "Delete"

    Então o produto deve ser removido do carrinho