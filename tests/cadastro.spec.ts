import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CadastroPage } from '../pages/CadastroPage';

test.describe('Fluxo de Cadastro', () => {
  test('Deve cadastrar um novo usuário com sucesso', async ({ page }) => {
    const homePage = new HomePage(page);
    const cadastroPage = new CadastroPage(page);
    const usuarioUnico = `user_${Date.now()}`;

    await homePage.acessarSite();
    await homePage.abrirCadastro();
    await cadastroPage.validarModalCadastroVisivel();

    const mensagem = await cadastroPage.cadastrar(usuarioUnico, 'Senha123!');

    expect(mensagem).toBe('Sign up successful.');
  });
});