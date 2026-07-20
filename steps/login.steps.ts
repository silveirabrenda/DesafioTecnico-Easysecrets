import { createBdd } from 'playwright-bdd';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CadastroPage } from '../pages/CadastroPage';

const { Given, When, Then } = createBdd();

let usuarioTemp: string;
let senhaTemp: string;

Given('que o usuário possui uma conta cadastrada', async ({ page }) => {
  const home = new HomePage(page);
  const cadastro = new CadastroPage(page);

  usuarioTemp = `user_${Date.now()}`;
  senhaTemp = 'Senha123!';

  await home.acessarSite();
  await home.abrirCadastro();
  await cadastro.validarModalCadastroVisivel();
  await cadastro.cadastrar(usuarioTemp, senhaTemp);
});

When('acessa a página de login', async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);

  await page.reload();
  await home.abrirLogin();
  await login.validarModalLoginVisivel();
});

When('informa suas credenciais válidas', async ({ page }) => {
  const login = new LoginPage(page);
  await login.preencherUsuario(usuarioTemp);
  await login.preencherSenha(senhaTemp);
});

When('confirma o login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.confirmarLogin();
});

Then('o usuário deve acessar a página inicial da loja', async ({ page }) => {
  const login = new LoginPage(page);
  await login.validarLoginSucesso(usuarioTemp);
});

Given('que o usuário está logado na loja', async ({ page }) => {
  const home = new HomePage(page);
  const cadastro = new CadastroPage(page);
  const login = new LoginPage(page);

  usuarioTemp = `user_${Date.now()}`;
  senhaTemp = 'Senha123!';

  await home.acessarSite();
  await home.abrirCadastro();
  await cadastro.validarModalCadastroVisivel();
  await cadastro.cadastrar(usuarioTemp, senhaTemp);

  await page.reload();
  await home.abrirLogin();
  await login.validarModalLoginVisivel();
  await login.realizarLogin(usuarioTemp, senhaTemp);
  await login.validarLoginSucesso(usuarioTemp);
});