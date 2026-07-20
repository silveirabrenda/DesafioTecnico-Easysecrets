import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { ProdutoPage } from '../pages/ProdutoPage';
import { CarrinhoPage } from '../pages/CarrinhoPage';

const { When, Then } = createBdd();

let produtoSelecionado: string;
let mensagemCarrinho: string;

When('seleciona o produto {string}', async ({ page }, produto: string) => {
  const produtoPage = new ProdutoPage(page);
  produtoSelecionado = produto;
  await produtoPage.selecionarProduto(produto);
});

When('clica no botão {string}', async ({ page }, botao: string) => {
  if (botao === 'Add to cart') {
    const produtoPage = new ProdutoPage(page);
    mensagemCarrinho = await produtoPage.adicionarAoCarrinho();
    return;
  }

  if (botao === 'Delete') {
    const carrinhoPage = new CarrinhoPage(page);
    await carrinhoPage.removerProduto(produtoSelecionado || 'Samsung galaxy s6');
    return;
  }

  throw new Error(`Botão não mapeado no step: ${botao}`);
});

Then('o produto deve ser adicionado ao carrinho', async ({ page }) => {
  const carrinho = new CarrinhoPage(page);
  await page.click('#cartur');
  await carrinho.validarPaginaCarrinho();
  await carrinho.validarProdutoNoCarrinho(produtoSelecionado);
  expect(mensagemCarrinho).toBe('Product added.');
});