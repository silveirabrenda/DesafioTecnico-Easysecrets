import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly botaoLogin: Locator;
  readonly campoUsuario: Locator;
  readonly campoSenha: Locator;
  readonly botaoEntrar: Locator;

  constructor(page: Page) {
    this.page = page;

    this.botaoLogin = page.locator('#login2');
    this.campoUsuario = page.locator('#loginusername');
    this.campoSenha = page.locator('#loginpassword');
    this.botaoEntrar = page.locator('button[onclick="logIn()"]');
  }

  async abrirLogin() {
    await this.botaoLogin.click();
  }

  async realizarLogin(usuario: string, senha: string) {
    await this.campoUsuario.fill(usuario);
    await this.campoSenha.fill(senha);
    await this.botaoEntrar.click();
  }
}