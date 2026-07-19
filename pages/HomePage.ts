import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly produtoSamsung: Locator;
  readonly categoriaCelular: Locator;

  constructor(page: Page) {
    this.page = page;

    this.produtoSamsung = page.locator('a.hrefch', {hasText:'Samsung galaxy s6'});
    this.categoriaCelular = page.locator('#itemc', {hasText:'Phones'});
  }

  async acessarCelulares() {
    await this.categoriaCelular.click();
  }

  async abrirProduto() {
    await this.produtoSamsung.click();
  }
}