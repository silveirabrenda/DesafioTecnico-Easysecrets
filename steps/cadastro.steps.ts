import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CadastroPage } from '../pages/CadastroPage';

const { Given, When, Then } = createBdd();

let usuarioCriado: string;
let senhaCriada: string;
let mensagemAlert: string;

Given('que o usuário acessa a página de cadastro', async ({ page }) => {
  const home = new HomePage(page);
  const cadastro = new CadastroPage(page);

  await home.acessarSite();
  await home.abrirCadastro();
  await cadastro.validarModalCadastroVisivel();
});

When('informa um nome de usuário válido', async ({ page }) => {
  const cadastro = new CadastroPage(page);
  usuarioCriado = `user_${Date.now()}`;
  await cadastro.preencherUsuario(usuarioCriado);
});

When('informa uma senha válida', async ({ page }) => {
  const cadastro = new CadastroPage(page);
  senhaCriada = 'Senha123!';
  await cadastro.preencherSenha(senhaCriada);
});

When('confirma o cadastro', async ({ page }) => {
  const cadastro = new CadastroPage(page);
  mensagemAlert = await cadastro.confirmarCadastro();
});

Then('uma mensagem de cadastro realizado com sucesso deve ser exibida', async () => {
  expect(mensagemAlert).toBe('Sign up successful.');
});

export { usuarioCriado, senhaCriada };