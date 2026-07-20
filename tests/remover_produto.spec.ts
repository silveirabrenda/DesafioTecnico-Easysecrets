import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CadastroPage } from '../pages/CadastroPage';
import { LoginPage } from '../pages/LoginPage';
import { ProdutoPage } from '../pages/ProdutoPage';
import { CarrinhoPage } from '../pages/CarrinhoPage';

test.describe('Fluxo de Remover Produto', () => {
  test('Deve remover produto do carrinho com sucesso', async ({ page }) => {
    const homePage = new HomePage(page);
    const cadastroPage = new CadastroPage(page);
    const loginPage = new LoginPage(page);
    const produtoPage = new ProdutoPage(page);
    const carrinhoPage = new CarrinhoPage(page);

    const usuario = `user_${Date.now()}`;
    const senha = 'Senha123!';
    const produto = 'Nokia lumia 1520';

    await homePage.acessarSite();
    await homePage.abrirCadastro();
    await cadastroPage.validarModalCadastroVisivel();
    await cadastroPage.cadastrar(usuario, senha);

    await page.reload();
    await homePage.abrirLogin();
    await loginPage.validarModalLoginVisivel();
    await loginPage.realizarLogin(usuario, senha);

    await produtoPage.selecionarProduto(produto);
    await produtoPage.adicionarAoCarrinho();

    await homePage.acessarCarrinho();
    await carrinhoPage.validarProdutoNoCarrinho(produto);
    await carrinhoPage.removerProduto(produto);
    await carrinhoPage.validarProdutoAusenteNoCarrinho(produto);
  });
});