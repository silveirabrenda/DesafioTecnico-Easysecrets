import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CadastroPage } from '../pages/CadastroPage';
import { LoginPage } from '../pages/LoginPage';
import { ProdutoPage } from '../pages/ProdutoPage';
import { CarrinhoPage } from '../pages/CarrinhoPage';

test.describe('Fluxo de Finalizar Compra', () => {
  test('Deve finalizar compra com sucesso', async ({ page }) => {
    const homePage = new HomePage(page);
    const cadastroPage = new CadastroPage(page);
    const loginPage = new LoginPage(page);
    const produtoPage = new ProdutoPage(page);
    const carrinhoPage = new CarrinhoPage(page);

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

    await produtoPage.selecionarProduto('Nexus 6');
    await produtoPage.adicionarAoCarrinho();

    await homePage.acessarCarrinho();
    await carrinhoPage.abrirFinalizarCompra();
    await carrinhoPage.preencherFormulario({
      nome: 'Teste QA',
      pais: 'Brasil',
      cidade: 'Porto Alegre',
      cartao: '1234567890123456',
      mes: '12',
      ano: '2028'
    });
    await carrinhoPage.confirmarCompra();
    await carrinhoPage.validarCompraSucesso();
  });
});