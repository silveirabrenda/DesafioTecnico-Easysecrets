import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async acessarSite() {
    await this.page.goto('/');
    await expect(this.page.locator('#nava')).toBeVisible();
  }

  async abrirCadastro() {
    await this.page.click('#signin2');
    await expect(this.page.locator('#signInModal')).toBeVisible();
  }

  async abrirLogin() {
    await this.page.click('#login2');
    await expect(this.page.locator('#logInModal')).toBeVisible();
  }

  async acessarCarrinho() {
    await this.page.click('#cartur');
    await this.page.waitForURL('**/cart.html');
  }
}