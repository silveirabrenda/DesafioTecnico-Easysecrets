import { Page, expect } from '@playwright/test';

export class CarrinhoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async validarPaginaCarrinho() {
    await expect(this.page).toHaveURL(/cart\.html/);
  }

  async validarProdutoNoCarrinho(nomeProduto: string) {
    const item = this.page.locator('tr', { hasText: nomeProduto });
    await expect(item).toBeVisible();
  }

  async validarProdutoAusenteNoCarrinho(nomeProduto: string) {
    const item = this.page.locator('tr', { hasText: nomeProduto });
    await expect(item).toHaveCount(0);
  }

  async removerProduto(nomeProduto: string) {
    const linhaProduto = this.page.locator('tr', { hasText: nomeProduto });
    await expect(linhaProduto).toBeVisible();
    await linhaProduto.locator('text=Delete').click();
    await expect(linhaProduto).toHaveCount(0);
  }

  async abrirFinalizarCompra() {
    await this.page.click('button:has-text("Place Order")');
    await expect(this.page.locator('#orderModal')).toBeVisible();
  }

  async preencherFormulario(dados: {
    nome: string;
    pais: string;
    cidade: string;
    cartao: string;
    mes: string;
    ano: string;
  }) {
    await this.page.fill('#name', dados.nome);
    await this.page.fill('#country', dados.pais);
    await this.page.fill('#city', dados.cidade);
    await this.page.fill('#card', dados.cartao);
    await this.page.fill('#month', dados.mes);
    await this.page.fill('#year', dados.ano);
  }

  async confirmarCompra() {
    await this.page.click('button[onclick="purchaseOrder()"]');
  }

  async validarCompraSucesso() {
    const mensagem = this.page.locator('.sweet-alert h2');
    await expect(mensagem).toHaveText('Thank you for your purchase!');
    await this.page.click('button.confirm');
  }
}