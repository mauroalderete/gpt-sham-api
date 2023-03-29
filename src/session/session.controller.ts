import {
  Controller,
  Post,
  Delete,
  Param,
  HttpStatus,
  HttpException,
  UseFilters,
} from '@nestjs/common';
import { PuppeteerService } from '../puppeteer-service/puppeteer-service';
import { PuppeteerExceptionFilter } from '../filters/puppeteer-exception/puppeteer-exception.filter';

@Controller('session')
@UseFilters(PuppeteerExceptionFilter)
export class SessionController {
  constructor(private readonly puppeteerService: PuppeteerService) {}

  @Post(':clientId')
  async createSession(@Param('clientId') clientId: string) {
    try {
      await this.puppeteerService.createBrowserContext(clientId);
    } catch (e) {
      console.error(e);
      throw new HttpException(
        `Error creating browser context: ${e.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    try {
      const configured = await this.configureSession(clientId);
      if (!configured) {
        throw new Error(`Failed to configure session for client ${clientId}`);
      }
    } catch (e) {
      console.error(e);

      await this.puppeteerService.deleteBrowserContext(clientId);

      throw new HttpException(
        `Error configuring browser instance: ${e.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':clientId')
  async deleteSession(@Param('clientId') clientId: string) {
    try {
      await this.puppeteerService.deleteBrowserContext(clientId);
    } catch (e) {
      console.error(e);
      throw new HttpException(
        `Error closing browser instance: ${e.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async configureSession(
    @Param('clientId') clientId: string,
  ): Promise<boolean> {
    const context = await this.puppeteerService.getBrowserContext(clientId);
    if (!context) {
      return false;
    }

    const targetUrl = process.env.CHATGPT_URL_LOGIN;
    if (!targetUrl) {
      throw new Error(`CHATGPT_URL environment variable is not set`);
    }

    const page = await context.newPage();
    const response = await page.goto(targetUrl);
    // const responseMapped = {
    //   status: response.status(),
    //   headers: response.headers(),
    //   body: await response.text(),
    //   url: response.url(),
    // };
    // const responseMappedString = JSON.stringify(responseMapped, null, 2);

    // if (response.status() != 200) {
    //   console.debug(JSON.stringify(responseMapped, null, 2));
    //   console.debug(responseMapped.body);
    //   throw new Error(
    //     `Failed to load target URL: ${targetUrl} with status: ${response.status()},
    //     )} \n $)}`,
    //   );
    // }

    return true;
  }
}
