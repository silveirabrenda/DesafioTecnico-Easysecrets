// Generated from: features\cadastro.feature
import { test } from "playwright-bdd";

test.describe('Cadastro de usuário', () => {

  test('Cadastrar um novo usuário com sucesso', async ({ Given, When, Then, And, page }) => { 
    await Given('que o usuário acessa a página de cadastro', null, { page }); 
    await When('informa um nome de usuário válido', null, { page }); 
    await And('informa uma senha válida', null, { page }); 
    await And('confirma o cadastro', null, { page }); 
    await Then('uma mensagem de cadastro realizado com sucesso deve ser exibida'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\cadastro.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Dado que o usuário acessa a página de cadastro","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"Quando informa um nome de usuário válido","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"E informa uma senha válida","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"E confirma o cadastro","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Então uma mensagem de cadastro realizado com sucesso deve ser exibida","stepMatchArguments":[]}]},
]; // bdd-data-end