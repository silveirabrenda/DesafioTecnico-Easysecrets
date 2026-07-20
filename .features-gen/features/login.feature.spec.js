// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login de usuário', () => {

  test('Realizar login com credenciais válidas', async ({ Given, When, Then, And, page }) => { 
    await Given('que o usuário possui uma conta cadastrada', null, { page }); 
    await When('acessa a página de login', null, { page }); 
    await And('informa suas credenciais válidas', null, { page }); 
    await And('confirma o login', null, { page }); 
    await Then('o usuário deve acessar a página inicial da loja', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Dado que o usuário possui uma conta cadastrada","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"Quando acessa a página de login","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"E informa suas credenciais válidas","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"E confirma o login","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Então o usuário deve acessar a página inicial da loja","stepMatchArguments":[]}]},
]; // bdd-data-end