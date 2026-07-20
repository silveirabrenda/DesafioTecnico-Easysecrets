// Generated from: features\finalizar_compra.feature
import { test } from "playwright-bdd";

test.describe('Finalizar compra', () => {

  test('Finalizar compra com dados válidos', async ({ Given, When, Then, And, page }) => { 
    await Given('que o usuário possui um produto no carrinho', null, { page }); 
    await When('acessa a opção "Place order"', null, { page }); 
    await And('preenche os dados de compra', null, { page }); 
    await And('confirma a compra', null, { page }); 
    await Then('uma mensagem de confirmação da compra deve ser exibida', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\finalizar_compra.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Dado que o usuário possui um produto no carrinho","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"Quando acessa a opção \"Place order\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Place order\"","children":[{"start":16,"value":"Place order","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"E preenche os dados de compra","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"E confirma a compra","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Então uma mensagem de confirmação da compra deve ser exibida","stepMatchArguments":[]}]},
]; // bdd-data-end