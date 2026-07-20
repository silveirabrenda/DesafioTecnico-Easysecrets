import { Page, expect } from '@playwright/test';

export class ProdutoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selecionarProduto(nomeProduto: string) {
    await this.page.locator('a.hrefch', { hasText: nomeProduto }).click();
    await expect(this.page.locator('.name')).toHaveText(nomeProduto);
  }

  async adicionarAoCarrinho(): Promise<string> {
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.page.click('text=Add to cart');
    const dialog = await dialogPromise;
    const mensagem = dialog.message();
    await dialog.accept();
    return mensagem;
  }
}