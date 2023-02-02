import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  HttpCode,
  Header,
  Redirect,
  Param,
  Inject,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Constants } from './providers/constants';

@Controller('helloworld')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('CONSTANTS') readonly constants: Constants,
  ) {}

  @Get('*_id')
  @Header('Cache-Control', 'none')
  @HttpCode(299)
  @Redirect('https://baike.baidu.com', 302)
  getHello(@Query('id') request?) {
    if (request === 3)
      return { url: 'https://baike.baidu.com/item/FF/13236733?fr=aladdin' };
    console.log('req', request);
    return this.appService.getHello();
  }

  @Post('content')
  setHello(@Body('content') content: string): string {
    console.log('post setHello', content);
    return 'Set hello';
  }

  @Get(':id')
  findID(@Param() params): string {
    console.log('findID', params);
    return `param ID is ${params.id}, ${this.constants.pi}`;
  }
}
