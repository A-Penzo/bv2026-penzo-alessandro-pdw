export * from './data';
export * from './decorator';
export * from './filter';
export * from './interceptor';
export * from './swagger';

import { Controller, Get } from '@nestjs/common';
import { AppService } from '@root/app.service';
import { ApiSuccessCode } from '@common/api/decorator';
import { ApiCodeResponse } from './data/enum/api-code-response.enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiSuccessCode(ApiCodeResponse.CommonSuccess)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
