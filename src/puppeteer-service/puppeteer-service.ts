import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PuppeteerService {
  private browser: puppeteer.Browser;
  private browerContexts: Map<string, puppeteer.BrowserContext> = new Map();

  async createBrowserContext(clientId: string): Promise<void> {
    if (this.browerContexts.has(clientId)) {
      throw new Error(
        `Browser instance already exists for client ID: ${clientId}`,
      );
    }

    if (!this.browser) {
      this.browser = await puppeteer.launch({ headless: false });
    }

    const context = await this.browser.createIncognitoBrowserContext();
    this.browerContexts.set(clientId, context);
  }

  async getBrowserContext(
    clientId: string,
  ): Promise<puppeteer.BrowserContext | null> {
    return this.browerContexts.get(clientId) || null;
  }

  async deleteBrowserContext(clientId: string): Promise<void> {
    const context = this.browerContexts.get(clientId);
    if (!context) {
      throw new Error(`Browser instance not found for client ID: ${clientId}`);
    }

    await context.close();
    this.browerContexts.delete(clientId);
  }
}
