import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async validarModalLoginVisivel() {
    await expect(this.page.locator('#logInModal')).toBeVisible();
  }

  async preencherUsuario(usuario: string) {
    await this.page.fill('#loginusername', usuario);
  }

  async preencherSenha(senha: string) {
    await this.page.fill('#loginpassword', senha);
  }

  async confirmarLogin() {
    const responsePromise = this.page.waitForResponse(
      (response) => response.url().includes('/login') && response.status() === 200
    );

    await this.page.click('button[onclick="logIn()"]');
    await responsePromise;
  }

  async realizarLogin(usuario: string, senha: string) {
    await this.preencherUsuario(usuario);
    await this.preencherSenha(senha);
    await this.confirmarLogin();
  }

  async validarLoginSucesso(usuario: string) {
    const userElement = this.page.locator('#nameofuser');
    await expect(userElement).toBeVisible({ timeout: 10000 });
    await expect(userElement).toContainText(`Welcome ${usuario}`);
  }
}