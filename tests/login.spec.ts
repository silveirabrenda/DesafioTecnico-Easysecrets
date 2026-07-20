import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CadastroPage } from '../pages/CadastroPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Fluxo de Login', () => {
  test('Deve realizar login com sucesso', async ({ page }) => {
    const homePage = new HomePage(page);
    const cadastroPage = new CadastroPage(page);
    const loginPage = new LoginPage(page);

    const usuario = `user_${Date.now()}`;
    const senha = 'Senha123!';

    await homePage.acessarSite();
    await homePage.abrirCadastro();
    await cadastroPage.validarModalCadastroVisivel();
    await cadastroPage.cadastrar(usuario, senha);

    await page.reload();
    await homePage.abrirLogin();
    await loginPage.validarModalLoginVisivel();
    await loginPage.realizarLogin(usuario, senha);
    await loginPage.validarLoginSucesso(usuario);
  });
});