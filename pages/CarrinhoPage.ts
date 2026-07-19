import { Page, Locator } from '@playwright/test';

export class CarrinhoPage {
  readonly page: Page;
  readonly linkCarrinho: Locator;
  readonly botaoExcluir: Locator;

  constructor(page: Page) {
    this.page = page;

    this.linkCarrinho = page.locator('#cartur');
    this.botaoExcluir = page.locator('a', {hasText:'Delete'});
  }

  async abrirCarrinho() {
    await this.linkCarrinho.click();
  }

  async removerProduto() {
    await this.botaoExcluir.first().click();
  }
}