import { Page, Locator } from '@playwright/test';

export class CadastroPage {
  readonly page: Page;
  readonly botaoCadastro: Locator;
  readonly campoUsuario: Locator;
  readonly campoSenha: Locator;
  readonly botaoCadastrar: Locator;

  constructor(page: Page) {
    this.page = page;

    this.botaoCadastro = page.locator('#signin2');
    this.campoUsuario = page.locator('#sign-username');
    this.campoSenha = page.locator('#sign-password');
    this.botaoCadastrar = page.locator('button[onclick="register()"]');
  }

  async abrirCadastro() {
    await this.botaoCadastro.click();
  }

  async cadastrar(usuario: string, senha: string) {
    await this.campoUsuario.fill(usuario);
    await this.campoSenha.fill(senha);
    await this.botaoCadastrar.click();
  }
}