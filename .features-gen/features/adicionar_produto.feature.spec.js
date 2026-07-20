// Generated from: features\adicionar_produto.feature
import { test } from "playwright-bdd";

test.describe('Adicionar produto ao carrinho', () => {

  test('Adicionar um produto ao carrinho', async ({ Given, When, Then, And, page }) => { 
    await Given('que o usuário está logado na loja', null, { page }); 
    await When('seleciona o produto "Samsung galaxy s6"', null, { page }); 
    await And('clica no botão "Add to cart"', null, { page }); 
    await Then('o produto deve ser adicionado ao carrinho', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\adicionar_produto.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Dado que o usuário está logado na loja","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"Quando seleciona o produto \"Samsung galaxy s6\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Samsung galaxy s6\"","children":[{"start":21,"value":"Samsung galaxy s6","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"E clica no botão \"Add to cart\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Add to cart\"","children":[{"start":16,"value":"Add to cart","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Então o produto deve ser adicionado ao carrinho","stepMatchArguments":[]}]},
]; // bdd-data-end