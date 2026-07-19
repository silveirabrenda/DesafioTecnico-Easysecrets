import { Page, Locator } from '@playwright/test';

export class ProdutoPage {
  readonly page: Page;
  readonly botaoAdicionarCarrinho: Locator;

  constructor(page: Page) {
    this.page = page;

    this.botaoAdicionarCarrinho = page.locator('a', {hasText:'Add to cart'});
  }

  async adicionarProduto() {
    await this.botaoAdicionarCarrinho.click();
  }
}