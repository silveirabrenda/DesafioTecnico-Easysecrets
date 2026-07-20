import { Page, expect } from '@playwright/test';

export class CadastroPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async validarModalCadastroVisivel() {
    await expect(this.page.locator('#signInModal')).toBeVisible();
  }

  async preencherUsuario(usuario: string) {
    await this.page.fill('#sign-username', usuario);
  }

  async preencherSenha(senha: string) {
    await this.page.fill('#sign-password', senha);
  }

  async confirmarCadastro(): Promise<string> {
    const dialogPromise = this.page.waitForEvent('dialog');
    await this.page.click('button[onclick="register()"]');
    const dialog = await dialogPromise;
    const mensagem = dialog.message();
    await dialog.accept();
    return mensagem;
  }

  async cadastrar(usuario: string, senha: string): Promise<string> {
    await this.preencherUsuario(usuario);
    await this.preencherSenha(senha);
    return await this.confirmarCadastro();
  }
}