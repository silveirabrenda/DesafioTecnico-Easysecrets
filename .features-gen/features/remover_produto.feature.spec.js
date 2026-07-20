// Generated from: features\remover_produto.feature
import { test } from "playwright-bdd";

test.describe('Remover produto do carrinho', () => {

  test('Remover um produto do carrinho', async ({ Given, When, Then, And, page }) => { 
    await Given('que o usuário possui o produto "Samsung galaxy s6" no carrinho', null, { page }); 
    await When('acessa o carrinho de compras', null, { page }); 
    await And('clica no botão "Delete"', null, { page }); 
    await Then('o produto deve ser removido do carrinho', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\remover_produto.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Dado que o usuário possui o produto \"Samsung galaxy s6\" no carrinho","stepMatchArguments":[{"group":{"start":31,"value":"\"Samsung galaxy s6\"","children":[{"start":32,"value":"Samsung galaxy s6","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"Quando acessa o carrinho de compras","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"E clica no botão \"Delete\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Delete\"","children":[{"start":16,"value":"Delete","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Então o produto deve ser removido do carrinho","stepMatchArguments":[]}]},
]; // bdd-data-end