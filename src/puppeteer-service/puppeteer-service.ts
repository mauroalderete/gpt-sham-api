import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PuppeteerService {
  private browerInstances: Map<string, puppeteer.Browser> = new Map();

  async createBrowserInstance(clientId: string): Promise<puppeteer.Browser> {
    const browser = await puppeteer.launch();
    this.browerInstances.set(clientId, browser);
    return browser;
  }

  async getBrowserInstance(
    clientId: string,
  ): Promise<puppeteer.Browser | null> {
    return this.browerInstances.get(clientId) || null;
  }

  async closeBrowserInstance(clientId: string): Promise<void> {
    const browser = await this.getBrowserInstance(clientId);
    if (browser) {
      await browser.close();
      this.browerInstances.delete(clientId);
    }
  }
}
