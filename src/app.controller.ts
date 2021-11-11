import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':num')
  getFact(@Param() params): object {
    return {
      number: params.num,
      factoriel: this.appService.getFact(params.num),
    };
  }
}
