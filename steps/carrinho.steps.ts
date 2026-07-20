import { createBdd } from 'playwright-bdd';
import { HomePage } from '../pages/HomePage';
import { CarrinhoPage } from '../pages/CarrinhoPage';
import { ProdutoPage } from '../pages/ProdutoPage';
import { LoginPage } from '../pages/LoginPage';
import { CadastroPage } from '../pages/CadastroPage';

const { Given, When, Then } = createBdd();

let produtoCarrinho = '';
let usuarioTemp = '';
let senhaTemp = '';

// -----------------------------
// REMOVER PRODUTO
// -----------------------------
Given('que o usuário possui o produto {string} no carrinho', async ({ page }, produto: string) => {
  const home = new HomePage(page);
  const cadastro = new CadastroPage(page);
  const login = new LoginPage(page);
  const produtoPage = new ProdutoPage(page);

  produtoCarrinho = produto;
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

  await produtoPage.selecionarProduto(produtoCarrinho);
  await produtoPage.adicionarAoCarrinho();
});

When('acessa o carrinho de compras', async ({ page }) => {
  const home = new HomePage(page);
  const carrinho = new CarrinhoPage(page);

  await home.acessarCarrinho();
  await carrinho.validarPaginaCarrinho();
});

Then('o produto deve ser removido do carrinho', async ({ page }) => {
  const carrinho = new CarrinhoPage(page);
  await carrinho.validarProdutoAusenteNoCarrinho(produtoCarrinho);
});

Then('o produto não deve mais ser exibido no carrinho', async ({ page }) => {
  const carrinho = new CarrinhoPage(page);
  await carrinho.validarProdutoAusenteNoCarrinho(produtoCarrinho);
});

// -----------------------------
// FINALIZAR COMPRA
// -----------------------------
Given('que o usuário possui um produto no carrinho', async ({ page }) => {
  const home = new HomePage(page);
  const cadastro = new CadastroPage(page);
  const login = new LoginPage(page);
  const produtoPage = new ProdutoPage(page);

  usuarioTemp = `user_${Date.now()}`;
  senhaTemp = 'Senha123!';
  produtoCarrinho = 'Samsung galaxy s6';

  await home.acessarSite();
  await home.abrirCadastro();
  await cadastro.validarModalCadastroVisivel();
  await cadastro.cadastrar(usuarioTemp, senhaTemp);

  await page.reload();
  await home.abrirLogin();
  await login.validarModalLoginVisivel();
  await login.realizarLogin(usuarioTemp, senhaTemp);
  await login.validarLoginSucesso(usuarioTemp);

  await produtoPage.selecionarProduto(produtoCarrinho);
  await produtoPage.adicionarAoCarrinho();

  await home.acessarCarrinho();
});

When('acessa a opção {string}', async ({ page }, opcao: string) => {
  if (opcao === 'Place order') {
    const carrinho = new CarrinhoPage(page);
    await carrinho.abrirFinalizarCompra();
    return;
  }

  throw new Error(`Opção não mapeada no step: ${opcao}`);
});

When('preenche os dados de compra', async ({ page }) => {
  const carrinho = new CarrinhoPage(page);
  await carrinho.preencherFormulario({
    nome: 'Teste QA',
    pais: 'Brasil',
    cidade: 'Pelotas',
    cartao: '1234567890123456',
    mes: '12',
    ano: '2028'
  });
});

When('confirma a compra', async ({ page }) => {
  const carrinho = new CarrinhoPage(page);
  await carrinho.confirmarCompra();
});

Then('uma mensagem de confirmação da compra deve ser exibida', async ({ page }) => {
  const carrinho = new CarrinhoPage(page);
  await carrinho.validarCompraSucesso();
});